import { NestFactory } from '@nestjs/core';
import serverlessExpress from '@vendia/serverless-express'
import { Callback, Context, Handler } from 'aws-lambda'
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'

let server: Handler;

async function bootstrap(): Promise<Handler> {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const config = new DocumentBuilder()
    .setTitle('Nestjs Boilerplate App')
    .setDescription('The N.B.As API Description')
    .setVersion('1.0')
    .addTag('Users')
    .addServer('http://localhost:3001',"로컬 호스트 서버")
    .addServer('http://1.2.3.4:3000',"Dev 서버")
    .addServer('https://tech.blablabla.blabla/apis',"prod 서버")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app,document);
  await app.init();

  const expressApp = app.getHttpAdapter().getInstance();
  return serverlessExpress({ app: expressApp });
}

export const handler: Handler = async (event: any, context: Context, callback: Callback,) => {
  server = server ?? (await bootstrap());
  return server(event, context, callback);
};
