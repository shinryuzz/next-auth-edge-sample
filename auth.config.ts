import type { NextAuthConfig } from "next-auth";
import Cognito from "next-auth/providers/cognito";
import Google from "next-auth/providers/google";

const authConfig: NextAuthConfig = {
  trustHost: true,
  providers: [
    Google,
    Cognito({
      authorization: {
        params: {
          scope: "openid", // cognito に OIDC フローを要求 (これがないと OAuth フローのみを実行し、IDトークンを返さなくなる)
        },
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      if (
        user &&
        account?.id_token &&
        account?.refresh_token &&
        account?.expires_at
      ) {
        token.idToken = account?.id_token; // idToken (JWT) を token に追加
        token.refreshToken = account?.refresh_token;
        token.expiresAt = account?.expires_at * 1000; // 有効期限を UNIX time 形式 (ms) で取り出す
      }

      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.idToken = token.idToken; // idToken (JWT) を session.user に追加
        session.user.refreshToken = token.refreshToken;
        session.user.expiresAt = token.expiresAt;
      }
      return session;
    },
  },
};

export default authConfig;
