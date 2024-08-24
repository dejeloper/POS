import NextAuth, { Session, type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";
import { JWT } from "next-auth/jwt";

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "Max",
          value: "admin",
        },
        password: {
          label: "Password",
          type: "password",
          value: "admin123",
          placeholder: "*******",
        },
      },
      async authorize(credentials, req) {
        if (!credentials?.username || !credentials?.username) return null;

        const userFound = await prisma.user.findUnique({
          where: { username: credentials?.username },
        });

        if (!userFound)
          throw new Error("El Usuario y la Contraseña son incorrectos");

        const validatePassword = await bcrypt.compare(
          credentials.password,
          userFound.password
        );

        if (!validatePassword)
          throw new Error("El Usuario y la Contraseña son incorrectos");

        return {
          id: userFound.id,
          name: userFound.username,
          email: userFound.email,
        };
      },
    }),
  ],
  session: {
    strategy: "jwt", // Usa JWT en lugar de sesiones basadas en cookies
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id ?? "";
        token.name = user.name ?? "";
        token.email = user.email ?? "";
      }
      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      if (session.user) {
        session.user.name = typeof token.name === "string" ? token.name : "";
        session.user.email = typeof token.email === "string" ? token.email : "";
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
