import { NextFunction, Response, Router } from 'express';
import AuthorizedRequest from '../../domain/AuthorizedRequest';
import Link from '../../domain/Link';
import LinkService from '../../services/impl/LinkService';
import IBaseController from '../IBaseController';

export default class LinkController implements IBaseController {
  public router: Router;

  // eslint-disable-next-line no-unused-vars, no-empty-function
  constructor(private linkService: LinkService) {
    this.router = Router();

    this.router.post('/', (req, res, next) => this.create(req, res, next));
    this.router.get('/', (req, res, next) => this.find(req, res, next));
    this.router.get('/:id', (req, res, next) => this.findById(req, res, next));
    this.router.put('/:id', (req, res, next) => this.update(req, res, next));
    this.router.delete('/:id', (req, res, next) => this.delete(req, res, next));
  }

  async create(
    req: AuthorizedRequest,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const data: Link = req.body;

      const link = await this.linkService.create(data);

      res.status(200).json(link);
    } catch (error) {
      next(error);
    }
  }

  async find(
    req: AuthorizedRequest,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const query = this.formQuery(req);
      const links: Array<Link> = await this.linkService.find(query);

      res.status(200).json(links);
    } catch (error) {
      next(error);
    }
  }

  async findOne(
    req: AuthorizedRequest,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const query = this.formQuery(req);
      const link: Link = await this.linkService.findOne(query);

      res.status(200).json(link);
    } catch (error) {
      next(error);
    }
  }

  async findById(
    req: AuthorizedRequest,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { id } = req.params;
      const link: Link = await this.linkService.findById(id);

      res.status(200).json(link);
    } catch (error) {
      next(error);
    }
  }

  async update(
    req: AuthorizedRequest,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { id } = req.params;
      const data: Partial<Link> = req.body;

      const updatedLink: Link = await this.linkService.update(id, data);

      res.status(200).json(updatedLink);
    } catch (error) {
      next(error);
    }
  }

  async delete(
    req: AuthorizedRequest,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { id } = req.params;

      await this.linkService.delete(id);

      res.status(204);
    } catch (error) {
      next(error);
    }
  }

  private formQuery(req: AuthorizedRequest): { [key: string]: any } {
    const { url, tags } = req.query;
    const query: { [key: string]: any } = {
      user: req.user?._id as string,
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
