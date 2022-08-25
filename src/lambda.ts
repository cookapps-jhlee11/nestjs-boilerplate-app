import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import serverlessExpress from '@vendia/serverless-express';
import { Context, Handler } from 'aws-lambda';
import express from 'express';
import { AppModule } from './app.module';

let cachedServer: Handler;

async function bootstrap() {
  if (!cachedServer) {
    const expressApp = express();

    const nestApp = await NestFactory.create(AppModule, new ExpressAdapter(expressApp), );
    nestApp.enableCors();
    await nestApp.init();

    cachedServer = serverlessExpress({ app: expressApp });
  }
  return cachedServer;
}

export const handler = async (event: any, context: Context, callback: any) => {
  const server = await bootstrap();
  return server(event, context, callback);
};

////다른 버전
// import { NestFactory } from '@nestjs/core';
// import serverlessExpress from '@vendia/serverless-express'
// import { Callback, Context, Handler } from 'aws-lambda'
// import { AppModule } from './app.module';

// let server: Handler;

// async function bootstrap(): Promise<Handler> {
//   const app = await NestFactory.create(AppModule);
//   app.enableCors();
//   await app.init();

//   const expressApp = app.getHttpAdapter().getInstance();
//   return serverlessExpress({ app: expressApp });
// }

// export const handler: Handler = async (event: any, context: Context, callback: Callback,) => {
//   server = server ?? (await bootstrap());
//   return server(event, context, callback);
// };