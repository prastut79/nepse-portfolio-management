import { Nepse } from "@app/api/Nepse";
import Stock from "@models/Stock";
import { connectDb } from "@utils/connectDb";
import { NextResponse } from "next/server";

export async function POST() {
	connectDb();
	const nepse = new Nepse();

	const data = await nepse.request({
		path: "/api/nots/security?nonDelisted=true",
	});

	if (!data.error && data.data instanceof Array) {
		const stocks = data.data?.map(({ symbol, securityName }) => ({
			short: symbol,
			name: securityName,
		}));

		await Stock.deleteMany({});

		const res = await Stock.insertMany(stocks);

		return NextResponse.json({
			message: `Sucessfully Updated ${res.length} Stocks`,
		});
	}

	return NextResponse.json(
		{ message: data.message || "An Error Occured" },
		{ status: 400 }
	);
}
