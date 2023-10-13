"use client";

import Button from "@app/_components/_atoms/Button";
import Input from "@app/_components/_atoms/Input";
import { P_DASHBOARD, P_TRANSACTION_ADD } from "@config/siteConfig";
import { signIn } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "react-toastify";

import { useRouter } from "next/navigation";

export default function Page() {
	return (
		<div className="fc_xy h-full">
			<div className="mx-4 max-w-[500px] w-full p-8 bg-bs rounded shadow">
				<h1 className="text-2xl ">Sign In</h1>
				<div className="pt-4">
					<Link
						href={"#"}
						className="text-sm text-ts text-right w-full"
					>
						New user?{" "}
						<span className="text-theme">Create an account</span>
					</Link>
				</div>
				<LoginForm />
			</div>
		</div>
	);
}

function LoginForm() {
	const [data, setData] = useState({ email: "", password: "" });

	const { push } = useRouter();

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		await signIn("credentials", {
			...data,
			callbackUrl: P_TRANSACTION_ADD.href,
		})
			.then((data) => {
				console.log("logindata", data);
				if (data?.error) {
					toast.error(`${data?.error}`);
				} else {
					toast.success("Login Sucessful.");
				}
			})
			.catch((err) => {
				toast.error(<>{err.error}</>);
			});
	}

	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	}

	return (
		<form onSubmit={handleSubmit} className="py-8 grid w-full gap-8">
			<Input
				name="email"
				type="email"
				label="Email Address"
				required
				value={data.email}
				onChange={handleChange}
			/>
			<Input
				name="password"
				type="password"
				label="Password"
				required
				value={data.password}
				onChange={handleChange}
			/>
			<Link
				href={"#"}
				className="text-right  text-xs text-ts bc_x hover:text-tp transition "
			>
				Forgot Password?
			</Link>
			<Button>Login</Button>
		</form>
	);
}
