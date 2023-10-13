import { USER_ROLES } from "@models/enums";
import { DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth/jwt" {
	/** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
	interface JWT {
		role?: USER_ROLES;
		_id: string;
	}
}

declare module "next-auth" {
	/**
	 * Returned by `useSession`, `getSession` and received as a prop on the
	 * `SessionProvider` React Context and trpc context
	 */
	interface Session {
		user?: {
			role?: USER_ROLES;
			_id: string;
		} & DefaultSession["user"];
	}

	/** Passed as a parameter to the `jwt` callback */
	interface User {
		_id: string;
		role?: USER_ROLES;
	}
}
