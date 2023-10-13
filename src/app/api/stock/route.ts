import { connectDb } from "@utils/connectDb";
import { getApiError } from "../utils";
import { NextResponse } from "next/server";
import Stock from "@models/Stock";
import stockSchema from "@schema/stockSchema";

export async function GET() {
	connectDb();

	const stocks = await Stock.find({});
	return NextResponse.json({ stocks });
}

export async function POST(req: Request) {
	try {
		connectDb();
		const body = await req.json();
		stockSchema.parse(body);

		const stock = new Stock(body);
		stock.save();

		return NextResponse.json({ stock, message: "Stock Created" });
	} catch (err) {
		return NextResponse.json(
			{ message: getApiError(err) },
			{ status: 400 }
		);
	}
}
