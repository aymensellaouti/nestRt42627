import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { DurationInterceptor } from './interceptors/duration.interceptor';
import { ReponseFormaterInterceptor } from './interceptors/reponse-formater/reponse-formater.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Activi el validation bel pipes fel blayes el kol
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true
  }))
  app.enableVersioning({
    type:VersioningType.URI
  })
  app.useGlobalInterceptors(new DurationInterceptor(), new ReponseFormaterInterceptor())
  await app.listen(3000);
}
bootstrap();
