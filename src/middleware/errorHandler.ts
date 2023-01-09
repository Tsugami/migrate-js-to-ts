import type { RequestHandler, ErrorRequestHandler } from 'express';

//REQUESTED PAGE IS NOT FOUND
export const notFound: RequestHandler = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

interface ErrorResponseJson {
  message: string;
  stack?: string;
}

//ERROR HANDLER
export const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

  res.status(statusCode);

  const info: ErrorResponseJson = {
    message: err.message,
  };

  if (process.env.NODE_ENV === 'development' && err instanceof Error) {
    info.stack = err.stack;
  }

  res.json(info);
};
