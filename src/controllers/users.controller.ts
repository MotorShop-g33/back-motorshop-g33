import { Request, Response } from "express";
import { IUserRequest, IUserUpdate } from "../interfaces/users";
import newUserService from "../services/users/newUser.service";
import listUsersService from "../services/users/listUsers.service";
import getUserService from "../services/users/getUser.service";
import updateUserService from "../services/users/updateUser.service";
import deleteUserService from "../services/users/deleteUser.service";
import { sendResetEmailPasswordService } from "../services/users/sendEmailPassword.service";
import { resetPasswordService } from "../services/users/resetPasswordUser.service";

export const newUserController = async (req: Request, res: Response) => {
  const userInfo: IUserRequest = req.body;
  const userData = await newUserService(userInfo);
  return res.status(201).json(userData);
};

export const listUsersController = async (req: Request, res: Response) => {
  const userData = await listUsersService();
  return res.status(200).json(userData);
};

export const getProfileController = async (req: Request, res: Response) => {
  const userId: string = req.user.id;
  const userData = await getUserService(userId);
  return res.status(200).json(userData);
};

export const getUserController = async (req: Request, res: Response) => {
  const userId: string = req.params.id;
  const userData = await getUserService(userId);
  return res.status(200).json(userData);
};

export const updateUserController = async (req: Request, res: Response) => {
  const userId: string = req.user.id;
  // const userId: string = req.params.id;
  const userInfo: IUserUpdate = req.body;
  const userData = await updateUserService(userId, userInfo);
  return res.status(200).json(userData);
};

export const deleteUserController = async (req: Request, res: Response) => {
  const userId: string = req.user.id;
  // const userId: string = req.params.id;
  const userData = await deleteUserService(userId);
  return res.status(204).json(userData);
};

export const sendResetEmailPasswordController = async (
  req: Request,
  res: Response
) => {
  const { email } = req.body;
  const { protocol } = req;
  const host = req.get("host");

  console.log(email);
  console.log(protocol);
  console.log(host);

  const data = await sendResetEmailPasswordService(email, protocol, host);

  return res.status(200).json(data);
};

export const resetPasswordController = async (req: Request, res: Response) => {
  const { password } = req.body;
  const { token } = req.params;

  const data = await resetPasswordService(password, token);
  return res.status(200).json(data);
};
