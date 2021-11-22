import Link from '../../domain/Link';
import IBaseService from '../IBaseService';

export default class LinkService implements IBaseService<Link> {
  create(data: Link): Promise<Link> {
    throw new Error('Method not implemented.');
  }

  find(query: { [key: string]: any }): Promise<Link[]> {
    throw new Error('Method not implemented.');
  }

  findOne(query: { [key: string]: any }): Promise<Link> {
    throw new Error('Method not implemented.');
  }

  findById(id: string): Promise<Link> {
    throw new Error('Method not implemented.');
  }

  update(id: string, data: Partial<Link>): Promise<Link> {
    throw new Error('Method not implemented.');
  }

  delete(id: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}
