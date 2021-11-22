import NoInformationError from '../errors/impl/NoInformationError';

export default (requestBody: object): void => {
  if (Object.keys(requestBody).length === 0) {
    throw new NoInformationError();
  }
};
