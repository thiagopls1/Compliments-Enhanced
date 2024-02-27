import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { TagModule } from './modules/tag.module';
import { UserModule } from './modules/user.module';
import { ComplimentModule } from './modules/compliment.module';
import { Tag } from './entities/tag.entity';
import { User } from './entities/user.entity';
import { Compliment } from './entities/compliment.entity';
import { AuthModule } from './modules/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `${process.env.NODE_ENV}.env`,
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [Tag, User, Compliment],
      synchronize: true,
      logging: true,
    }),
    TagModule,
    UserModule,
    ComplimentModule,
    AuthModule,
  ],
})
export class AppModule {}
