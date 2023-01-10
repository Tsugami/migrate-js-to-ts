import jwt from 'jsonwebtoken';

interface SignedUser {
  username: string;
  email: string;
}

export const sign = async (user: SignedUser) => {
  const JWT_SECRET = 'qemsaslvjd-33r3:9i9vis3.';

  return new Promise((resolve, reject) => {
    const callback: jwt.SignCallback = (err, token) => {
      if (err) return reject(err);
      return resolve(token);
    };

    jwt.sign(
      {
        username: user.username,
        email: user.email,
      },
      JWT_SECRET,
      callback,
    );
  });
};

export const decode = async (token: string) => {
  const JWT_SECRET = 'qemsaslvjd-33r3:9i9vis3.';
  return new Promise((resolve, reject) => {
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if (err) return reject(err);

      return resolve(decoded);
    });
  });
};

//TESTING
/* const test = async () => {
    const data = {
        username: 'Varun',
        email:' varun'
    }
    const token = await sign(data)
    console.log("token is:",token);
    const decoded = await decode(token)
    console.log("DEcoded:",decoded);
}

test() */
