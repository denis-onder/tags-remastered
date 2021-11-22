import NoInformationError from '../errors/impl/NoInformationError';

export default (requestBody: object): void => {
  if (!requestBody || Object.keys(requestBody).length === 0) {
    throw new NoInformationError();
  }
};
