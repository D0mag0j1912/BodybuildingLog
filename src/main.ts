import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
      origin: '*',
      allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'authorization'],
      methods: ['GET', 'POST', 'DELETE', 'OPTIONS', 'PUT']
  });
  await app.listen(3000);
}
bootstrap();
