import transactionSchema from "@schema/transactionSchema";
import { getApiError, getMongooseErrors } from "../utils";
import { NextResponse } from "next/server";
import { ZodError } from "zod";
import { connectDb } from "@utils/connectDb";

export function GET() {}

export async function POST(req: Request) {
	try {
		connectDb();

		const body = await req.json();
		transactionSchema.parse(body);
	} catch (e) {
		return NextResponse.json({ message: getApiError(e) }, { status: 400 });
	}
}
