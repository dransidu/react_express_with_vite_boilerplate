import { Schema, model } from "mongoose";

enum UserRoles {
    ADMIN = 1,
    EDITOR = 2,
    SUBSCRIBER = 3,
}

interface IUser {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    role: UserRoles;
}

const userSchema = new Schema<IUser>(
    {
        first_name: {
            type: String,
            required: true,
        },
        last_name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        role: {
            type: Number,
            enum: UserRoles,
            default: UserRoles.SUBSCRIBER,
        },
    },
    { timestamps: true }
);

const User = model<IUser>('User', userSchema);

export {
    UserRoles,
    IUser,
    User
}