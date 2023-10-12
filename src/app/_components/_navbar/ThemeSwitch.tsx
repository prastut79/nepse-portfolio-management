"use client";
import { useEffect, useState } from "react";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

export default function ThemeSwitch() {
	const [isDark, setIsDark] = useState<boolean>(false);

	useEffect(() => {
		const theme = localStorage.getItem("site-theme");
		if (theme === "dark") {
			setDark();
		}
	}, []);

	function setDark() {
		document.documentElement.setAttribute("data-theme", "dark");
		document.documentElement.classList.add("dark");
		localStorage.setItem("site-theme", "dark");
		setIsDark(true);
	}
	function setLight() {
		document.documentElement.setAttribute("data-theme", "light");
		document.documentElement.classList.remove("dark");
		localStorage.setItem("site-theme", "light");
		setIsDark(false);
	}
	function switchTheme() {
		const theme = localStorage.getItem("site-theme");
		if (theme !== "dark") {
			setDark();
		} else {
			setLight();
		}
	}

	return (
		<button
			onClick={switchTheme}
			type="button"
			className="bc_x hover:text-tp text-ts rounded-md transition-colors"
			title={`Switch to ${isDark ? "Light" : "Dark"} mode`}
		>
			{isDark ? (
				<MdOutlineLightMode size={27} color="" />
			) : (
				<MdDarkMode size={27} />
			)}
		</button>
	);
}
