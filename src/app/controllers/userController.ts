import {
    getUserService,
    getUsersService,
    postUserService,
    patchUserservice,
    deleteUserService
} from "@services/usersService";
import { Request, Response } from "express";
import { IUser } from "../interfaces/userInterface";

export async function getUsersController(req: Request, res: Response): Promise<Response> {
    try{
        const result: IUser[] = await getUsersService();

        return res.status(200).send(result);
    } catch(e) {
        console.log(e);
        return res.status(500).send(e);
    }
}

export async function getUserController(req: Request, res: Response): Promise<Response> {
    try{
        const {id} = req.params;

        const result: IUser = await getUserService({id});

        return res.status(200).send('teste');
    } catch(e) {
        console.log(e);
        return res.status(500).send(e);
    }
}

export async function postUserController(req: Request, res: Response): Promise<Response> {
    try{
        const {id} = req.params;

        const result: IUser = await getUserService({id});

        return res.status(200).send({result});
    } catch(e) {
        console.log(e);
        return res.status(500).send(e);
    }
}

export async function patchUserController(req: Request, res: Response): Promise<Response> {
    try{
        const {
            id,
            name,
            dob,
            add,
            description,
            updatedAt,
            createdAt,
        } = req.params;

        const result: IUser = await patchUserservice(
            {
                id
            }, 
            {
                name,
                dob,
                add,
                description
            });

        return res.status(200).send({result});
    } catch(e) {
        console.log(e);
        return res.status(500).send(e);
    }
}

export async function deleteUserController(req: Request, res: Response): Promise<Response> {
    try{
        const {id} = req.params;

        const result: IUser = await deleteUserService({id});

        return res.status(200).send(result);
    } catch(e) {
        console.log(e);
        res.status(500).send(e);
    }
}

