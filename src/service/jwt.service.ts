import jwt from 'jsonwebtoken';

const { JWT_SECRET } = process.env;

export default class JwtService {
  static createToken(payload: object) {
    return jwt.sign(payload, JWT_SECRET ?? 'SECRET!');
  }

  static checkToken(token: string) {
    return jwt.verify(token, JWT_SECRET ?? 'SECRET!');
  }
}
