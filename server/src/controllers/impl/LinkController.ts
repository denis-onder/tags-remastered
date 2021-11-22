import { NextFunction, Response, Router } from 'express';
import AuthorizedRequest from 'src/domain/AuthorizedRequest';
import Link from 'src/domain/Link';
import LinkService from 'src/services/impl/LinkService';
import IBaseController from '../IBaseController';

export default class LinkController implements IBaseController {
  public router: Router;

  // eslint-disable-next-line no-unused-vars, no-empty-function
  constructor(private linkService: LinkService) {
    this.router = Router();

    this.router.post('/', this.create);
    this.router.get('/', this.find);
    this.router.get('/:id', this.findById);
    this.router.put('/:id', this.update);
    this.router.delete('/:id', this.delete);
  }

  async create(
    request: AuthorizedRequest,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const data: Link = request.body;

      const link = await this.linkService.create(data);

      response.status(200).json(link);
    } catch (error) {
      next(error);
    }
  }

  async find(
    request: AuthorizedRequest,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const query = this.formQuery(request);
      const links: Array<Link> = await this.linkService.find(query);

      response.status(200).json(links);
    } catch (error) {
      next(error);
    }
  }

  async findOne(
    request: AuthorizedRequest,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const query = this.formQuery(request);
      const link: Link = await this.linkService.findOne(query);

      response.status(200).json(link);
    } catch (error) {
      next(error);
    }
  }

  async findById(
    request: AuthorizedRequest,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { id } = request.params;
      const link: Link = await this.linkService.findById(id);

      response.status(200).json(link);
    } catch (error) {
      next(error);
    }
  }

  async update(
    request: AuthorizedRequest,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { id } = request.params;
      const data: Partial<Link> = request.body;

      const updatedLink: Link = await this.linkService.update(id, data);

      response.status(200).json(updatedLink);
    } catch (error) {
      next(error);
    }
  }

  async delete(
    request: AuthorizedRequest,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { id } = request.params;

      await this.linkService.delete(id);

      response.status(204);
    } catch (error) {
      next(error);
    }
  }

  private formQuery(request: AuthorizedRequest): { [key: string]: any } {
    const { url, tags } = request.query;
    const query: { [key: string]: any } = {
      user: request.user?.id as string,
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
