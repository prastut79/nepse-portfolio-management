import Link from "next/link";
import React from "react";

export type BreadcrumbDataType = {
	label: string;
	href: string;
};
export interface BreadcrumbsType {
	data: BreadcrumbDataType[];
}

export default function Breadcrumbs({ data }: BreadcrumbsType) {
	return (
		<div className="text-xs text-ts font-normal">
			{data?.slice(0, -1).map(({ label, href }, i) => (
				<Link href={href} key={i}>
					{!!i && <BreadcrumbIcon />}
					{label}
				</Link>
			))}
			<BreadcrumbIcon />
			<span className="text-tp">{data?.[data.length - 1]?.label}</span>
		</div>
	);
}

function BreadcrumbIcon() {
	return <span className="px-2 leading-0 ">/</span>;
}
