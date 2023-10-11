import { DashPageDataType } from "@config/siteConfig";
import { create } from "zustand";

type DashPageDataStore = {
	pageData: DashPageDataType;
	setPageData: (state: DashPageDataType) => void;
};

export const usePageDataStore = create<DashPageDataStore>((set) => ({
	pageData: { href: "/dashboard", label: "Dashboard", breadcrumbs: [] },
	setPageData: () => set((state) => ({ ...state })),
}));
