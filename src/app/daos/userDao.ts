import userModel from "@models/userModel";
import { IUser } from "../interfaces/userInterface";
import { RequestError } from "@errors/RequestError";
import mongoose from "mongoose";

export async function getUsersDao(): Promise<IUser[]>  {
    try{
        const result = await userModel.find({});

        return result;
    } catch(error: unknown) {
        throw new RequestError(error);
    }
}

export async function getUserDao({id}: {id: string}): Promise<any> {
    try{
        const result = await userModel.findById(id);

        return result;
    } catch(e: unknown) {
        throw new RequestError(e);
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
    } catch(error: unknown) {
        throw new RequestError(error);
    }
}

export async function patchUserDao(
    {
        id,
        name,
        dob,
        add,
        description,
    }: {
        id: string,
        name?: string,
        dob?: string,
        add?: string,
        description?: string,
}): Promise<IUser> {
    try{
        const data = {
            name,
            dob,
            add,
            description
        }
        const result = await userModel.findByIdAndUpdate(id, data);

        return result;
    } catch(error: unknown) {
        throw new RequestError(error);
    }
}

export async function deleteUserDao({id}: {id: string}): Promise<IUser>{
    try{
        const result = await userModel.findByIdAndDelete(id);

        return result;
    } catch (error: unknown) {
        throw new RequestError(error);
    }
}
