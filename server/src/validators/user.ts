import BadRequestError from '../errors/BadRequestError';
import User from '../domain/User';

export default (user: User): void => {
  const emailRegex =
    // eslint-disable-next-line no-useless-escape
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const trimmedDisplayName = user.displayName.trim();
  const trimmedEmail = user.email.trim();
  const trimmedPassword = user.password.trim();

  if (!trimmedDisplayName) {
    throw new BadRequestError('Please provide a valid display name.');
  }

  if (trimmedDisplayName.length < 3) {
    throw new BadRequestError(
      'Please provide a display name that is longer than 3 characters.'
    );
  }

  if (!trimmedEmail) {
    throw new BadRequestError('Please provide an email address.');
  }

  if (!emailRegex.test(trimmedEmail)) {
    throw new BadRequestError('Please provide a valid email address.');
  }

  if (!trimmedPassword) {
    throw new BadRequestError('Please provide a password.');
  }

  if (trimmedPassword.length < 8) {
    throw new BadRequestError(
      'Please provide a password that contains more than 8 characters.'
    );
  }
};
