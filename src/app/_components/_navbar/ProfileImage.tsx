"use client";
import { signOut } from "next-auth/react";
import Image from "next/image";

export default function ProfileImage() {
	return (
		<Image
			src="/static/images/avatar_placeholder.jpg"
			height={32}
			width={32}
			alt="profile-image"
			className="rounded-full"
			onClick={() => signOut()}
		/>
	);
}
