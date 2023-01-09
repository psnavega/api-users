import {
    getUserDao,
    getUsersDao,
    postUserDao,
    deleteUserDao,
    patchUserDao
} from "@daos/userDao";
import { RequestError } from "@errors/RequestError";
import { IUser } from "../interfaces/userInterface";

export async function getUserService({id}: {id: string}): Promise<IUser> {
    try{
        const result = await getUserDao({id});

        if(!result) throw new RequestError({message: 'User not found', statusCode: 409});

        return result;
    } catch(error: unknown) {
        throw error as RequestError;
    }
}


export async function getUsersService(): Promise<IUser[]> {
    try{
        const result = await getUsersDao();

        return result;
    } catch(error: unknown) {
        throw error as RequestError;
    }
}

export async function postUserService(
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
    }
): Promise<IUser> {
    try{
        const result = await postUserDao({
            name,
            dob,
            add,
            description,
        });

        return result;
    } catch(error: unknown) {
        throw error as RequestError;
    }
}

export async function patchUserservice(
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
    }
): Promise<IUser> {
    try{
        const result = await patchUserDao({
            id,
            name,
            dob,
            description,
            add,
        });

        if(!result) throw new RequestError({message: 'User not found', statusCode: 409});

        return result;
    } catch(error: unknown) {
        throw error as RequestError;
    }
}

export async function deleteUserService({id}: {id: string}): Promise<IUser> {
    try{
        const result = await deleteUserDao({id});

        if(!result) throw new RequestError({message: 'User not found', statusCode: 409});

        return result;
    } catch (error: unknown) {
        throw error as RequestError;
    }
}