// import crypto from "node:crypto";
// global.crypto ??= crypto;
import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@models/User";
import bcrypt from "bcryptjs";
import { connectDb } from "@utils/connectDb";
import { P_LOGIN } from "@config/siteConfig";

export const NextOptions: AuthOptions = {
	providers: [
		CredentialsProvider({
			name: "credentials",

			credentials: {
				email: { label: "email", type: "email" },
				password: { label: "Password", type: "password" },
			},

			async authorize(credentials, req) {
				await connectDb();

				if (!credentials?.email || !credentials?.password) {
					throw new Error(
						"Login Failed. Incorrect Username or Password."
					);
				}
				console.log("USER LOGINN.....");
				const user = await User.findOne({
					email: credentials.email.toLowerCase(),
				}).select("+password");

				if (
					!user ||
					!(await bcrypt.compare(credentials.password, user.password))
				) {
					throw new Error(
						"Login Failed. Incorrect Username or Password."
					);
				}
				if (user.isBlocked) {
					throw new Error(
						"The user has been blocked. Please contact admin."
					);
				}
				delete user.password;

				return user;
			},
		}),
	],
	callbacks: {
		async redirect({ url, baseUrl }) {
			return baseUrl;
		},

		async jwt({ token, user }) {
			if (user) {
				token.role = user.role;
				token._id = user._id;
			}
			return token;
		},

		async session({ session, token, user }) {
			if (session.user) {
				session.user.role = token.role;
				session.user._id = token._id;
				// session.user.image=token.image
			}
			return session;
		},
	},

	pages: {
		signIn: P_LOGIN.href,
	},
	debug: process.env.NODE_ENV === "development",
	session: {
		strategy: "jwt",
	},
	secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(NextOptions);

export { handler as GET, handler as POST };
// export default NextAuth(NextOptions);
