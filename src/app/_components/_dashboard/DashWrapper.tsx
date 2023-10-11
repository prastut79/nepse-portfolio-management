import React, { PropsWithChildren } from "react";
import Breadcrumbs, {
	BreadcrumbDataType,
	BreadcrumbsType,
} from "../_atoms/Breadcrumbs";
import { SiteConfigType } from "@config/siteConfig";

export interface DashPageDataType extends SiteConfigType {
	breadcrumbs: BreadcrumbDataType[];
}

export default function DashWrapper({
	children,
	breadcrumbs,
	href,
	label,
}: PropsWithChildren<DashPageDataType>) {
	return (
		<div className="px-6 min-h-full">
			<div className="mb-10">
				<h4 className="text-2xl font-bold text-tp">{label}</h4>
				<div className="py-2">
					<Breadcrumbs data={breadcrumbs} />
				</div>
			</div>
			<div className="">{children}</div>
		</div>
	);
}
