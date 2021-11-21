import { Response } from 'express';
import AuthorizedRequest from 'src/domain/AuthorizedRequest';
import Link from 'src/domain/Link';
import LinkService from 'src/services/impl/LinkService';
import BaseController from '../BaseController';

export default class LinkController implements BaseController {
  constructor(private linkService: LinkService) {}

  async create(request: AuthorizedRequest, response: Response): Promise<void> {
    const data: Link = request.body;

    const link = await this.linkService.create(data);

    response.status(200).json(link);
  }
  async find(request: AuthorizedRequest, response: Response): Promise<void> {
    const query = this.formQuery(request);
    const links: Array<Link> = await this.linkService.find(query);

    response.status(200).json(links);
  }
  async findOne(request: AuthorizedRequest, response: Response): Promise<void> {
    const query = this.formQuery(request);
    const link: Link = await this.linkService.findOne(query);

    response.status(200).json(link);
  }
  async findById(
    request: AuthorizedRequest,
    response: Response
  ): Promise<void> {
    const id = Number(request.params.id);
    const link: Link = await this.linkService.findById(id);

    response.status(200).json(link);
  }
  async update(request: AuthorizedRequest, response: Response): Promise<void> {
    const id = Number(request.params.id);
    const data: Partial<Link> = request.body;

    const updatedLink: Link = await this.linkService.update(id, data);

    response.status(200).json(updatedLink);
  }
  async delete(request: AuthorizedRequest, response: Response): Promise<void> {
    const id = Number(request.params.id);

    await this.linkService.delete(id);

    response.status(204);
  }

  private formQuery(request: AuthorizedRequest): { [key: string]: any } {
    const { url, tags } = request.query;
    const query: { [key: string]: any } = {
      user: request.user?.id as number,
    };

    if (url) {
      query.url = url;
    }

    if (tags) {
      query.tags = tags;
    }

    return query;
  }
}
