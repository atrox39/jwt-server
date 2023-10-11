import type { Request, Response, NextFunction } from 'express';
import { Router } from 'express';

import type { IResponseSuccess, IResponseLogin } from '../interface/common/response';
import { ErrorStatus, SuccessStatus } from '../interface/common/response';
import { LoginDto } from '../interface/dto/user.dto';
import JwtService from '../service/jwt.service';

const route = Router();

const isAuth = (req: Request, res: IResponseSuccess, next: NextFunction) => {
  if (!req.headers.authorization) {
    return res.status(ErrorStatus.UNAUTHORIZED).json({
      message: 'No authorization in header',
      status: ErrorStatus.UNAUTHORIZED,
    });
  }
  const token = req.headers.authorization.replace('Bearer ', '');
  try {
    JwtService.checkToken(token);
  } catch (e: any) {
    console.log(e);
    return res.status(ErrorStatus.UNAUTHORIZED).json({
      message: e.message ?? 'Invalid token',
      status: ErrorStatus.UNAUTHORIZED,
    });
  }
  return next();
};

route.get('/status', (req: Request, res: IResponseSuccess): IResponseSuccess => {
  return res.status(200).json({
    message: 'Ok',
    status: SuccessStatus.SUCCESS,
  });
});

route.post('/login', (req: Request<unknown, unknown, LoginDto>, res: IResponseLogin) : IResponseLogin => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(ErrorStatus.BADREQUEST).json({
      message: 'Email or password missing in parameter validation',
      status: ErrorStatus.BADREQUEST,
    });
  }
  if (email === 'email' && password === '123456') {
    return res.status(SuccessStatus.SUCCESS).json({
      jwt: JwtService.createToken({
        email,
      }),
    });
  }
  return res.status(ErrorStatus.UNAUTHORIZED).json({
    message: 'Error, user or password',
    status: ErrorStatus.UNAUTHORIZED,
  });
});

route.get('/protected', isAuth, (req: Request, res: IResponseSuccess): IResponseSuccess => {
  return res.status(200).json({
    message: 'Ok',
    status: SuccessStatus.SUCCESS,
  });
});

export default route;
