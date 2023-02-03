import { Module } from '@nestjs/common';
import { Database } from './database';

@Module({
  providers: [Database, Database]
})
export class DatabaseModule {}
