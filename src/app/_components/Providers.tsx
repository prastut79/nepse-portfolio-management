"use client";

import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export default function Providers({ children }: any) {
	return (
		<SessionProvider
			refetchInterval={300}
			// refetchWhenOffline={false}
			// session={session}
			refetchOnWindowFocus={false}
		>
			<ToastContainer
				autoClose={6000}
				pauseOnHover
				newestOnTop
				position="top-center"
				closeButton={false}
				hideProgressBar
			/>
			{children}
		</SessionProvider>
	);
}
