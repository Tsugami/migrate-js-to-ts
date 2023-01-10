interface User {
  username: string;
  email: string;
}

declare namespace Express {
  export interface Request {
    user?: User;
  }
}
