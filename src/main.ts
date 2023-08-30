import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
var cookieParser = require('cookie-parser');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());
  app.enableCors({
    allowedHeaders: ['content-type'],
    origin: 'http://localhost:4200',
    credentials: true,
  });
  await app.listen(3000);
}
bootstrap();
