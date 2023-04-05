import * as yup from "yup";
import { SchemaOf } from "yup";
import { IUserRequest, IUserUpdate, IUser } from "../interfaces/users";

export const newUserSchema: SchemaOf<IUserRequest> = yup.object().shape({
    name: yup.string().min(2).max(100).required(),
    email: yup.string().email().max(100).required(),
    password: yup.string().max(100).required(),
    cpf: yup.string().max(20).required(),
    phone: yup.string().max(20).required(),
    birthday: yup.date().max(10).required(),
    description: yup.string().max(280).required(),
    cep: yup.string().max(10).required(),
    state: yup.string().max(20).required(),
    city: yup.string().max(100).required(),
    street: yup.string().max(140).required(),
    number: yup.string().max(5).required(),
    complement: yup.string().max(20).nullable(),
    isStaff: yup.boolean().required(),
    isAdm: yup.boolean().required(),
});

export const updateUserSchema: SchemaOf<IUserUpdate> = yup.object().shape({
    name: yup.string().min(2).max(100),
    email: yup.string().email().max(100),
    password: yup.string().max(100),
    cpf: yup.string().max(20),
    phone: yup.string().max(20),
    birthday: yup.date().max(10),
    description: yup.string().max(280),
    cep: yup.string().max(10),
    state: yup.string().max(20),
    city: yup.string().max(100),
    street: yup.string().max(140),
    number: yup.string().max(5),
    complement: yup.string().max(20).nullable(),
    isStaff: yup.boolean()
});

export const userResponseSchema: SchemaOf<IUser> = yup.object().shape({
    updatedAt: yup.date(),
    createdAt: yup.date(),
    isActive: yup.boolean(),
    isAdm: yup.boolean(),
    isStaff: yup.boolean(),
    complement: yup.string().nullable(),
    number: yup.string(),
    street: yup.string(),
    city: yup.string(),
    state: yup.string(),
    cep: yup.string(),
    description: yup.string(),
    birthday: yup.date(),
    phone: yup.string(),
    cpf: yup.string(),
    email: yup.string().email(),
    name: yup.string(),
    id: yup.string()
});
