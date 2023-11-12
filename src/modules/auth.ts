import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { Request, Response, NextFunction } from 'express';

export const comparePasswords = async (password: string, hash: string) => {
  return await bcrypt.compare(password, hash);
}

export const hashPassword = async (password: string): Promise<string> => {
  return bcrypt.hash(password, 5);
}

export const createJWT = (user): string => {
  const token = jwt.sign({
    id: user.id, 
    username: user.username
  },
    process.env.JWT_SECRET
  );
  return token;
}

export const protect = (req: Request, res: Response, next: NextFunction) => {
  const bearer = req.headers.authorization;

  if (!bearer) {
    res.status(401).json({ message: 'Unauthorized!' });
    return;
  } 

  const [,token] = bearer.split(' ');

  if (!token) {
    res.status(401).json({ message: 'This token is invalid.' });
    return;
  }

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user;
    next();
  } catch (e) {
    console.error(e);
    res.status(401).json({ message: 'This token is invalid.' });
    return;
  }
}

