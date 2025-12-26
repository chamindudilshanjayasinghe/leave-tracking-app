import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import apiClient from "@/lib/apiClient";

const authHandler = NextAuth({
    secret: process.env.NEXTAUTH_SECRET,

    session: {
        strategy: "jwt",
        maxAge: 60 * 60 * 24, // 24 hours
    },

    providers: [
        CredentialsProvider({
            name: "Credentials",

            credentials: {
                email: { type: "email" },
                password: { type: "password" },
            },

            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error("Missing credentials");
                }

                try {
                    const response = await apiClient.post("/auth/token", {
                        email: credentials.email,
                        password: credentials.password,
                    });

                    const result = response.data;
                    if (!result?.userId || !result?.accessToken) return null;

                    return {
                        id: result.userId,
                        accessToken: result.accessToken,
                        user: { first_name: result.firstName, last_name: result.lastName, role: result.role },
                        tenant: { id: result.tenantId, name: result.tenantName},
                    };
                } catch (error: any) {
                    console.error("AUTH ERROR:", error?.response?.data || error.message);
                    throw new Error("Invalid email or password");
                }
            },
        }),
    ],

    callbacks: {
        async jwt({ token, user }) {
            return { ...token, ...user };
        },

        async session({ session, token }) {
            session.user = {
                id: token.id,
                accessToken: token.accessToken,
                user: token.user,
                tenant: token.tenant,
            } as any;

            return session;
        },
    },

    pages: {
        signIn: "/login",
    },
});

export { authHandler as GET, authHandler as POST };
