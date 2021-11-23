import Link from '../../domain/Link';
import IBaseService from '../IBaseService';
import linkValidator from '../../validators/link';
import LinkModel from '../../db/models/LinkModel';
import ResourceNotFoundError from '../../errors/impl/ResourceNotFoundError';

export default class LinkService implements IBaseService<Link> {
  async create(data: Link): Promise<Link> {
    try {
      linkValidator(data);
      return await new LinkModel(data).save();
    } catch (error) {
      throw error;
    }
  }

  async find(query: { [key: string]: any }): Promise<Link[]> {
    try {
      const payload: Array<Link> = await LinkModel.find(query);

      if (!payload || payload.length === 0) {
        throw new ResourceNotFoundError();
      }

      return payload;
    } catch (error) {
      throw error;
    }
  }

  async findOne(query: { [key: string]: any }): Promise<Link> {
    try {
      const link: Link = (await LinkModel.findOne(query)) as Link;

      if (!link) {
        throw new ResourceNotFoundError();
      }

      return link;
    } catch (error) {
      throw error;
    }
  }

  async findById(id: string): Promise<Link> {
    try {
      const link: Link = (await LinkModel.findById(id)) as Link;

      if (!link) {
        throw new ResourceNotFoundError();
      }

      return link;
    } catch (error) {
      throw error;
    }
  }

  async update(id: string, data: Partial<Link>): Promise<Link> {
    try {
      linkValidator(data as Link);

      const linkExists = await LinkModel.findByIdAndUpdate(id, data);

      if (!linkExists) {
        throw new ResourceNotFoundError();
      }

      const updatedLink: Link = (await LinkModel.findById(id)) as Link;

      return updatedLink;
    } catch (error) {
      throw error;
    }
  }

  async delete(id: string): Promise<boolean> {
    try {
      const result = await LinkModel.findByIdAndDelete(id);

      if (!result) {
        throw new ResourceNotFoundError();
      }

      return Boolean(result);
    } catch (error) {
      throw error;
    }
  }
}
