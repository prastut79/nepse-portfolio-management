import DashWrapper from "@app/_components/_dashboard/DashWrapper";
import {
	P_DASHBOARD,
	P_TRANSACTION,
	P_TRANSACTION_ADD,
} from "@config/siteConfig";
import React from "react";
import TransactionForm from "../form/TransactionForm";

export default function Page() {
	return (
		<DashWrapper
			{...P_TRANSACTION_ADD}
			breadcrumbs={[P_DASHBOARD, P_TRANSACTION, P_TRANSACTION_ADD]}
		>
			<TransactionForm />
		</DashWrapper>
	);
}
