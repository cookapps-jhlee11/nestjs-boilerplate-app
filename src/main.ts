import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  //Swagger Initialize
  const config = new DocumentBuilder()
    .setTitle('Nestjs Boilerplate App')
    .setDescription('The N.B.As API Description')
    .setVersion('1.0')
    .addTag('Users')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app,document);

  await app.listen(3000);
}
bootstrap();
