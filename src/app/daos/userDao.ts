import userModel from "@models/userModel";
import { IUser } from "../interfaces/user.interface";

export async function getUsersDao(): Promise<IUser[]>  {
    try{
        const result = await userModel.find({});

        return result;
    } catch(e) {
        console.log(e);
        throw e;
    }
}

export async function getUserDao({id}: {id: string}): Promise<IUser> {
    try{
        const result = await userModel.findById({id});

        return result;
    } catch(e) {
        console.log(e);
        throw e;
    }
}

export async function postUserDao(
    {
        name,
        dob,
        add,
        description,
    }: {
        name: string,
        dob: string,
        add: string,
        description: string,
    }): Promise<IUser> {
    try{
        const newUser = new userModel({name, dob, add, description})

        await newUser.save();

        return newUser;
    } catch(e) {
        console.log(e);
        throw e;
    }
}

export async function patchUserDao(
    {
        id,
    },
    {
        name,
        dob,
        add,
        description,
    }: {
        name?: string,
        dob?: string,
        add?: string,
        description?: string,
}): Promise<IUser> {
    try{
        const result = await userModel.findByIdAndUpdate(
            {
                id
            },
            {
                name,
                dob,
                add,
                description
            }
        )
        return result;
    } catch(e) {
        console.log(e);
        throw e;
    }
}

export async function deleteUserDao({id}: {id: string}): Promise<IUser>{
    try{
        const result = await userModel.findByIdAndDelete({id});

        return result;
    } catch (e) {
        console.log(e);
        throw e;
    }
}
