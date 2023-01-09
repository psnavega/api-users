import {
    getUserService,
    getUsersService,
    postUserService,
    patchUserservice,
    deleteUserService
} from "@services/usersService";
import { Request, Response } from "express";
import { IUser } from "../interfaces/userInterface";
import { client } from "@configs/databases/redis";

export async function getUsersController(req: Request, res: Response): Promise<Response> {
    try{
        const result = await client.get('getUsers');

        if(!result) {
            const result: IUser[] = await getUsersService();
        
            await client.set('getCurrencies', JSON.stringify(result));

			await client.expire('getCurrencies', 10);

			return res.status(200).send({result});
        }

        return res.status(200).send(result);
    } catch(error) {
        return res.status(500).send({error});
    }
}

export async function getUserController(req: Request, res: Response): Promise<Response> {
    try{
        const {id} = req.params;

        const result = await client.get(`getUser${id}`);

        if(!result) {
            const result: IUser = await getUserService({id});

            await client.set(`getUser${id}`, JSON.stringify(result));

            await client.expire(`getUser${id}`, 10);

            return res.status(200).send({result});
        }

        return res.status(200).send(result);
    } catch(error) {
        return res.status(500).send({error});
    }
}

export async function postUserController(req: Request, res: Response): Promise<Response> {
    try{
        const {
            name,
            dob,
            add,
            description
        } = req.body;

        const dateParsedAndFormated: string = new Date(dob).toLocaleDateString();

        const result: IUser = await postUserService({name, dob: dateParsedAndFormated, add, description});

        return res.status(200).send({result});
    } catch(error) {
        return res.status(500).send({error});
    }
}

export async function patchUserController(req: Request, res: Response): Promise<Response> {
    try{
        const {id} = req.params;
        const {
            name,
            dob,
            add,
            description,
        } = req.body;

        const result: IUser = await patchUserservice(
            {
                id,
                name,
                dob,
                add,
                description
            });

        return res.status(200).send({result});
    } catch(error) {
        return res.status(500).send({error});
    }
}

export async function deleteUserController(req: Request, res: Response): Promise<Response> {
    try{
        const {id} = req.params;

        const result: IUser = await deleteUserService({id});

        return res.status(200).send(result);
    } catch(error) {
        res.status(500).send({error});
    }
}

