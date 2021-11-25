import Link from '../domain/Link';
import { linksAxios } from '../plugins/axios';

const getLinks = (multiple: boolean = true): Promise<Link[]> => {
  return linksAxios
    .get('/', {
      params: {
        multiple,
      },
    })
    .then((res) => res.data);
};

const deleteLink = (linkId: string): Promise<void> => {
  return linksAxios.delete(`/${linkId}`).then((res) => res.data);
};

export { getLinks, deleteLink };
