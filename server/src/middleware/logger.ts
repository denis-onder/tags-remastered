import { Request, Response, NextFunction } from 'express';

export default function (req: Request, _: Response, next: NextFunction): void {
  const method = req.method;
  const path = req.path;
  const time = new Date().toUTCString();

  // [METHOD] -> 'URL Path' - 'UTC Time'
  console.log(`[${method}] -> '${path}' - ${time}`);

  next();
}
