import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Winston Sebagai Global Loggernya
  const logger = app.get(WINSTON_MODULE_NEST_PROVIDER);
  app.use(logger);

  await app.listen(3000);
}
bootstrap();
