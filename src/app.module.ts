import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Tag } from './entities/tag.entity';
import { TagModule } from './modules/tag.module';
import { User } from './entities/user.entity';
import { UserModule } from './modules/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: `${process.env.NODE_ENV}.env` }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [Tag, User],
      synchronize: true,
      logging: true,
    }),
    TagModule,
    UserModule,
  ],
})
export class AppModule {}
