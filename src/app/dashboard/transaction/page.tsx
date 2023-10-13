import DashWrapper from "@app/_components/_dashboard/DashWrapper";
import {
	P_DASHBOARD,
	P_TRANSACTION,
	P_TRANSACTION_LIST,
} from "@config/siteConfig";
import React from "react";

export default function Page() {
	return (
		<DashWrapper {...P_TRANSACTION}>
			<div></div>
		</DashWrapper>
	);
}
