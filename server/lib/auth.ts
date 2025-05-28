import { PrismaClient } from '@prisma/client';
import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import { nextCookies } from 'better-auth/next-js';

const prisma = new PrismaClient();

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: 'postgresql'
  }),
  advanced: {
    defaultCookieAttributes: {
      httpOnly: true,
      sameSite: 'lax',
      secure: true
    }
  },
  secret: process.env.BETTER_AUTH_SECRET,
  baseURL: process.env.BETTER_AUTH_URL,
  emailAndPassword: {
    enabled: true
  },
  emailVerification: {
    sendVerificationEmail: async ({ user, url, token }) => {
      // Send verification email to user
      // Implement Send Verification Email here
      console.log(user);
      console.log(url);
      console.log(token);
    },
    sendOnSignUp: true,
    autoSignInAfterVerification: true,
    expiresIn: 3600 // 1 hour
  },
  session: {
    expiresIn: 20,
    updateAge: 10,
    disableSessionRefresh: true
  },
  plugins: [nextCookies()]
});
