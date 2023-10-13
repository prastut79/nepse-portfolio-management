import DashWrapper from "@app/_components/_dashboard/DashWrapper";
import { P_TRANSACTION_ADD } from "@config/siteConfig";
import React from "react";
import TransactionForm from "../form/TransactionForm";
import AddForm from "./AddForm";

export default function Page() {
	return (
		<DashWrapper {...P_TRANSACTION_ADD}>
			<AddForm />
		</DashWrapper>
	);
}
