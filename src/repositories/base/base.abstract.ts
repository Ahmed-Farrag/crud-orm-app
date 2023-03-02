import { DeleteResult, Repository } from 'typeorm';
import { BaseInterface } from './base.interface';

export abstract class BaseAbstract<T> implements BaseInterface<T> {
  // repo in typeorm
  private entity: Repository<T>;
  //   entialisation by dep injection
  protected constructor(entity: Repository<T>) {
    this.entity = entity;
  }
  //   implement interface
  public async findOneById(id: number): Promise<T> {
    // throw new Error('Method not implemented.');
    return await this.entity.findOne(id);
  }
  public async findAll(): Promise<T[]> {
    // throw new Error('Method not implemented.');
    return await this.entity.find();
  }
  public async create(data: any): Promise<T> {
    // throw new Error('Method not implemented.');
    return await this.entity.save(data);
  }
  public async findByCondition(filterCondition: any): Promise<T> {
    // throw new Error('Method not implemented.');
    return await this.entity.findOne({ where: filterCondition });
  }
  public async remove(id: string): Promise<DeleteResult> {
    // throw new Error('Method not implemented.');
    return await this.entity.delete(id);
  }
  public async findWithRelations(relations: any): Promise<T[]> {
    // throw new Error('Method not implemented.');
    return await this.entity.find(relations);
  }
}
