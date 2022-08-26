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
    .addServer('http://localhost:3001',"로컬 호스트 서버")
    .addServer('https://ig3q1yuwil.execute-api.ap-northeast-2.amazonaws.com',"람다 서버")
    .build();
  const document = SwaggerModule.createDocument(app, config);

  if(process.argv[2] === 'swaggerBuild'){
    const fs = require('fs')
    fs.writeFileSync("./swagger_docs/swagger-spec.json",JSON.stringify(document));
    console.log('Swagger document has successfully saved');
    app.close();
    return;
  }
  SwaggerModule.setup('api', app,document);
  await app.listen(process.env.PORT || 3001);
}
bootstrap();
