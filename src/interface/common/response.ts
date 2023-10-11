import type { Response } from 'express';

export enum SuccessStatus {
  SUCCESS = 200,
  CREATED = 201,
};

export enum ErrorStatus {
  BADREQUEST = 400,
  UNAUTHORIZED = 401,
};

// Types
type TResponseSuccess<T = Response> = (body: {
  message: string;
  status: SuccessStatus;
}) => T;

type TResponseLogin<T = Response> = (body: {
  jwt: string;
}) => T;

type TResponseError<T = Response> = (body: {
  message: string;
  status: ErrorStatus;
}) => T;

// Interfaces
export interface IResponseSuccess extends Response {
  json: TResponseSuccess<this> & TResponseError<this>;
};

export interface IResponseLogin extends Response {
  json: TResponseLogin<this> & TResponseError<this>;
};
