import BadRequestError from '../errors/impl/BadRequestError';
import Link from '../domain/Link';

export default (link: Link): void => {
  const urlRegex =
    // eslint-disable-next-line no-useless-escape
    /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/;

  const trimmedUrl = link.url.trim();
  const trimmedTags = link.tags.filter((tag) => tag.trim());

  if (!trimmedUrl) {
    throw new BadRequestError('Please provide an URL.');
  }

  if (!urlRegex.test(trimmedUrl)) {
    throw new BadRequestError('Please provide a valid URL.');
  }

  if (!trimmedTags || trimmedTags.length === 0) {
    throw new BadRequestError('Please provide at least one tag.');
  }
};
