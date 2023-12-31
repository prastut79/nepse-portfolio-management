import { toast } from "react-toastify";

export const API_ERROR = "An Error Occured";
export const API_SUCCESS = "Successful";
export const API_UNEXPECTED_ERROR = "AN unexpected error occured.";
const CHARS_ALL =
	"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

export type apiResponseType = {
	status: number;
	error: boolean;
	[key: string]: any;
};

export async function parseResponse<T>(
	req: Promise<Response>
): Promise<apiResponseType & T> {
	var res;
	try {
		res = await req;
		const data = (await res.json()) as T;
		if (res.ok) {
			return { ...data, status: res.status, error: false };
		} else {
			return { ...data, status: res.status, error: true };
		}
	} catch (e) {
		let error;
		if (e instanceof Error) {
			error = `${e.name}: ${e.message}`;
		}
		return {
			error: true,
			message: error || API_UNEXPECTED_ERROR,
			status: res?.status || 500,
			e,
		} as any;
	}
}

export function toastifyResponse({
	res,
	message,
	onError,
	onSuccess,
}: {
	res: apiResponseType;
	message?: { error?: string; success?: string };
	onSuccess?: () => any;
	onError?: () => any;
}) {
	if (res?.error) {
		toast.error(res.message || message?.success || API_SUCCESS);
		onError?.();
	} else {
		toast.success(res?.message || message?.error || API_ERROR);
		onSuccess?.();
	}
}

// export function toastifyResponse(
// 	res: apiResponseType,
// 	message?: { error?: string; success?: string }
// ) {
// 	const { error, success } = {
// 		error: API_ERROR,
// 		success: API_SUCCESS,
// 		...(message ? message : {}),
// 	};

// 	if (res.error) {
// 		toast.error(res.message || error);
// 	} else {
// 		toast.success(res.message || success);
// 	}
// }

export function capitalize(text: string) {
	return text.charAt(0).toUpperCase() + text.slice(1);
}

// export function isAdmin(role: string = "") {
// 	return [UserRoles.ADMIN, UserRoles.OWNER].includes(role as any);
// }

export function getRandomChars(size: number) {
	let key = "";

	for (let i = 0; i < size; i++) {
		key += CHARS_ALL.charAt(Math.floor(Math.random() * 62));
	}
	return key;
}
