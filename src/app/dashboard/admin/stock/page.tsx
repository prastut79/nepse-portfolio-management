import NotFound from "@app/_components/NotFound";
import DashWrapper from "@app/_components/_dashboard/DashWrapper";
import { API_STOCK } from "@config/apiConfig";
import { P_STOCK } from "@config/siteConfig";
import { API_ERROR, parseResponse } from "@utils/Api";
import React from "react";
import StockUpdateButton from "./StockUpdateButton";
import { getAllStocks } from "@app/dashboard/actions";

export default async function Page() {
	const res = await getAllStocks();

	return (
		<DashWrapper {...P_STOCK}>
			<StockUpdateButton />
			{res.error ? (
				<NotFound message={res.message || API_ERROR} />
			) : (
				<div className="flex flex-wrap gap-4 text-xs py-7">
					{res?.stocks?.map(({ short }, i) => (
						<span className="bg-bs px-3 py-2 rounded" key={i}>
							{short}
						</span>
					))}
				</div>
			)}
		</DashWrapper>
	);
}
