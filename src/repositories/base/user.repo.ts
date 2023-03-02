import { Injectable } from '@nestjs/common';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { BaseAbstract } from './base.abstract';
import { InjectRepositort } from '@nestjs/typeorm';

@Injectable()
export class UserRepo extends BaseAbstract<User> {
  constructor(
    @InjectRepositort(User)
    private readonly UserRepo: Repository<User>,
  ) {
    super(UserRepo);
  }
}
