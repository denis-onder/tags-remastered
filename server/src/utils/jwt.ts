import jsonwebtoken from 'jsonwebtoken';
import config from '../config';

const generateToken = (id: string): string => {
  return jsonwebtoken.sign({ id }, config.secret, {
    expiresIn: '1h',
  });
};

const decodeToken = (token: string): string | null => {
  let payload: string | null = null;

  jsonwebtoken.verify(token, config.secret, (error, decoded) => {
    if (error) {
      return;
    }

    if (decoded) {
      payload = decoded.id;
    }
  });

  return payload;
};

export { generateToken, decodeToken };
