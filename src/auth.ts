import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

import { authConfig } from "@/auth.config";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "./database";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  adapter: DrizzleAdapter(db),
  session: { strategy: "jwt" },
});

// export const {
//   auth,
//   handlers: { GET, POST },
// } = NextAuth({
//   providers: [
//     GitHubProvider({
//       clientId: process.env.GITHUB_ID,
//       clientSecret: process.env.GITHUB_SECRET,
//     }),
//   ],
//   secret: process.env.AUTH_SECRET,
// });
