import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe(
    { transform: true,
      whitelist : true
    }
  ));
  app.enableCors({
    origin: 'http://localhost:3000'
  })      

  const Port = process.env.LISTENING_PORT || 3000

  await app.listen(Port, ()=> console.log(`listening on port:${Port}`));
   
}
bootstrap();

