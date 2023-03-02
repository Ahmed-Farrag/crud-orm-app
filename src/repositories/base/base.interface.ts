import { DeleteResult } from 'typeorm';
export interface BaseInterface<T> {
  findOneById(id: number): Promise<T>;
  findAll(): Promise<T[]>;
  create(data: T | any): Promise<T>;
  findByCondition(filterCondition: any): Promise<T>;
  remove(id: string): Promise<DeleteResult>;
  findWithRelations(relations: any): Promise<T[]>;
}
