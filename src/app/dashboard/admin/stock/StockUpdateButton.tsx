"use client";

import Button from "@app/_components/_atoms/Button";
import { API_STOCK_UPDATE } from "@config/apiConfig";
import { parseResponse, toastifyResponse } from "@utils/Api";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { IoMdRefresh } from "react-icons/io";

export default function StockUpdateButton() {
	const [loading, setLoading] = useState(false);

	const { refresh } = useRouter();

	const handleClick = async () => {
		setLoading(true);
		const res = await parseResponse(
			fetch(API_STOCK_UPDATE, { method: "POST" })
		);
		toastifyResponse({ res });
		refresh();
		setLoading(false);
	};

	return (
		<Button onClick={handleClick} loading={loading}>
			<IoMdRefresh /> <span className="mx-2">Refresh</span>
		</Button>
	);
}
