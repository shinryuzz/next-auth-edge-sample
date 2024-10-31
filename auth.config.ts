import type { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";

const authConfig: NextAuthConfig = {
  trustHost: true,
  providers: [Google({})],
};

export default authConfig;
