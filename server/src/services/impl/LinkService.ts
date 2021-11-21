import Link from '../../domain/Link';
import BaseService from '../BaseService';

export default class LinkService implements BaseService<Link> {
  create(data: Link): Promise<Link> {
    throw new Error('Method not implemented.');
  }
  find(query: { [key: string]: any }): Promise<Link[]> {
    throw new Error('Method not implemented.');
  }
  findOne(query: { [key: string]: any }): Promise<Link> {
    throw new Error('Method not implemented.');
  }
  findById(id: number): Promise<Link> {
    throw new Error('Method not implemented.');
  }
  update(id: number, data: Partial<Link>): Promise<Link> {
    throw new Error('Method not implemented.');
  }
  delete(id: number): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}
