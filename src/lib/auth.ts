import { NextAuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "./prisma";

export const authConfig: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Sing in",
      credentials: {
        email: {
            label: "Email",
            type: 'email',
            placeholder: "example@example.com",
        },
        password: {label: "Password", type: "password"}
      },
      async authorize(credentials) {
        if(!credentials || !credentials.email || !credentials.password) return null;

        const dbUser = await prisma.user.findFirst({
            where: {email: credentials.email}
        });

        if(dbUser && dbUser.password === credentials.password) {
            const {password, createdAt, id, ...dbUserWithoutPassword} = dbUser;
            return dbUserWithoutPassword as User;
        }
        
        return null;
      },
    }),
  ],
};
