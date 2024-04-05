/* eslint-disable prettier/prettier */
// app.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('DATABASE_URL')],
})
export class AppModule {}
