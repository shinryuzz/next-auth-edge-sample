import type { User as DefaultUser } from "next-auth";

// Session を拡張
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: CustomUser;
  }
}

// JWT を拡張
declare module "next-auth/jwt" {
  interface JWT {
    idToken: string; // idToken を追加
    username: string;
    cognitoUsername: string;
    refreshToken?: string;
    expiresAt: number;
  }
}

// User を拡張
export interface CustomUser extends DefaultUser {
  idToken?: string;
  refreshToken?: string;
  expiresAt?: number;
}
