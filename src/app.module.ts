import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { ormConfig } from './databse/config/ormConfig';
import { typeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UserModule,
    typeOrmModule.forRoot(ormConfig()),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
