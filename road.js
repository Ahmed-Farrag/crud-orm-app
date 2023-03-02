/*
create project
create resource/crud 


*repositry pattern : كنت كل شوية اكتب جمله الكويري بتعتي فهنا بعملها في انترفيس واحده وباخدها في كل روت
make : interface تمثل skeleton or blueprint for class
make folder repositories/base/base.interface.ts and write function

install typeorm and import it 
>npm i typeorm
import {DeleteResult} from 'typeorm'

مش خاصه بحاجة هي عامة
* make file in base folder : base.abstract.ts : emplement from base.interface.ts and edit in function

خصصت لليوزر
* make file in base folder : user.ts  make extent from base.abstract.ts of type user in entity
* and make constractor take repo of user and make injection
* and install nestjs/typeorm  
>npm i -save nestjs/typeorm



*Make configration to ORM

make config file للبيانات الخاصة بالداتا بيز

>npm i --save dotenv
>npm i @types/dotenv
>npm i --save @nestjs/config

and in app.module : 
import { ConfigModule } from '@nestjs/config';
 ConfigModule.forRoot({
      isGlobal: true,
    }),


* work in mongodb database
>npm i mongodb --save

* make file : .env
   

create folder database/config/ormConfig.ts  to read from .env


*/
