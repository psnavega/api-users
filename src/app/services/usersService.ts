import {
    getUserDao,
    getUsersDao,
    postUserDao,
    deleteUserDao,
    patchUserDao
} from "@daos/userDao";
import { IUser } from "../interfaces/userInterface";

export async function getUserService({id}: {id: string}): Promise<IUser> {
    try{
        const result = await getUserDao({id});

        return result;
    } catch(e) {
        console.log(e);
        throw(e);
    }
}


export async function getUsersService(): Promise<IUser[]> {
    try{
        const result = await getUsersDao();

        return result;
    } catch(e) {
        console.log(e);
        throw(e);
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
    } catch(e) {
        console.log(e);
        throw(e);
    }
}

export async function patchUserservice(
    {
        id
    },
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
        const result = await patchUserDao(
        {
            id
        }, {
            name,
            dob,
            description,
            add,
        })

        return result;
    } catch(e) {
        console.log(e);
        throw(e);
    }
}

export async function deleteUserService({id}: {id: string}): Promise<IUser> {
    try{
        const result = await deleteUserDao({id});

        return result;
    } catch (e) {
        console.log(e);
        throw e;
    }
}