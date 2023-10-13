"use client";

import { TransactionType } from "@schema/transactionSchema";
import TransactionForm from "../form/TransactionForm";
import { API_TRANSACTION } from "@config/apiConfig";
import { parseResponse, toastifyResponse } from "@utils/Api";

export default function AddForm() {
	async function onSubmit(data: TransactionType) {
		// const res = await parseResponse(
		// 	fetch(API_TRANSACTION, {
		// 		method: "POST",
		// 		body: JSON.stringify(data),
		// 	})
		// );

		// toastifyResponse({ res, onSuccess() {} });
		console.log(data);
	}

	return <TransactionForm onSubmit={onSubmit} />;
}
