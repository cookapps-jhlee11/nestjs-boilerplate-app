"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Nestjs Boilerplate App')
        .setDescription('The N.B.As API Description')
        .setVersion('1.0')
        .addTag('Users')
        .addServer('http://localhost:3001', "로컬 호스트 서버")
        .addServer('http://1.2.3.4:3000', "Dev 서버")
        .addServer('https://tech.blablabla.blabla/apis', "prod 서버")
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    if (process.argv[2] === 'swaggerBuild') {
        const fs = require('fs');
        fs.writeFileSync("./swagger_docs/swagger-spec.json", JSON.stringify(document));
        console.log('Swagger document has successfully saved');
        app.close();
        return;
    }
    swagger_1.SwaggerModule.setup('api', app, document);
    console.log(process.env.PORT);
    await app.listen(process.env.PORT || 2999);
}
bootstrap();
//# sourceMappingURL=swagger.js.map