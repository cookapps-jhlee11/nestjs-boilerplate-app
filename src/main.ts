import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  //console.log(process.argv[0]) // $node
  //console.log(process.argv[1]) // dist/src/main
  //console.log(process.argv[2]+" "+typeof(process.argv[2])) // argument[0]
  
  //Swagger Initialize
  const config = new DocumentBuilder()
    .setTitle('Nestjs Boilerplate App')
    .setDescription('The N.B.As API Description')
    .setVersion('1.0')
    .addTag('Users')
    .addServer('http://localhost:3001')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  if(process.argv[2] === 'swaggerBuild'){
    const fs = require('fs')
    fs.writeFileSync("./swagger-spec.json",JSON.stringify(document));
    app.close();
    return;
  }
  SwaggerModule.setup('api', app,document);

  await app.listen(3000);
}
bootstrap();
