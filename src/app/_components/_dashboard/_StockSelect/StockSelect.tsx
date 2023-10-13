"use client";

import { getAllStocks } from "@app/dashboard/actions";
import NativeSelect, { NativeOption } from "../../_atoms/Select";
import { HTMLAttributes, forwardRef, useEffect, useState } from "react";
import { StockType } from "@schema/stockSchema";

const StockSelect = forwardRef(function StockSelect(
	props: HTMLAttributes<HTMLSelectElement>,
	ref: any
) {
	const [data, setData] = useState<StockType[]>();

	useEffect(() => {
		(async function () {
			const res = await getAllStocks();

			if (res.error) {
				setData([{ name: "", _id: "", short: "An Error Occured" }]);
			} else {
				setData(res.stocks);
			}
		})();
	}, []);

	return (
		<NativeSelect ref={ref} loading={!data} {...props}>
			{data?.map(({ name, short, _id }, i) => (
				<NativeOption
					key={i}
					//@ts-ignore
					value={_id}
				>{`${short}  |  ${name}`}</NativeOption>
			))}
		</NativeSelect>
	);
});

export default StockSelect;
