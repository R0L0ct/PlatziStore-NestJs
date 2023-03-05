import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      //Ignora/elimina el campo extra ingresado y deja pasar el resto
      whitelist: true,
      //Lanza un error por el campo extra ingresado
      forbidNonWhitelisted: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
