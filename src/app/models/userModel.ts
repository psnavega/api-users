import {Schema, model} from "mongoose";
import { IUser } from "../interfaces/userInterface";

const userSchema = new Schema({
    name: {
        type: String,
        require: true,
    },
    dob: {
        type: String,
        require: true
    },
    add: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
},
{
    timestamps: true,
});

export default model<IUser>('user', userSchema);
