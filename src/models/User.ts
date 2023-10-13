import { Schema, model, models } from "mongoose";
import { USER_ROLES } from "./enums";
// import mongooseUniqueValidator from "mongoose-unique-validator";

const UserSchema = new Schema(
	{
		name: { type: String, required: true },
		// username: { type: String, required: true, unique: true, index: true },
		description: String,
		email: {
			type: String,
			required: true,
			unique: true,
			index: true,
		},
		password: { type: String, select: false },
		// image: { type: String, default: null },
		role: {
			type: String,
			enum: Object.values(USER_ROLES),
			default: USER_ROLES.USER,
		},
		image: String,

		isBlocked: Boolean,
		isResetPassword: Boolean,
	},
	{
		timestamps: true,
	}
);

// UserSchema.plugin(mongooseUniqueValidator);
const User = models?.user || model("user", UserSchema);

export default User;
