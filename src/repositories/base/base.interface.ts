export interface BaseInterface<T> {
  findOneById(id: number): Promise<T>;
}
