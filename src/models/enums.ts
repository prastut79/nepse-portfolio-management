export enum USER_ROLES {
	OWNER = "owner",
	ADMIN = "admin",
	USER = "user",
}

export enum TRANSACTION_ENUM {
	BUY = "buy",
	SELL = "sell",
	IPO = "ipo",
	FPO = "fpo",
	RIGHT = "right",
	BONUS = "bonus",
	AUCTION = "auction",
	DIVIDEND = "dividend",
}

export const TRANSACTION_TYPE = Object.values(TRANSACTION_ENUM).map((d) => ({
	label: d.toUpperCase(),
	value: d,
}));
