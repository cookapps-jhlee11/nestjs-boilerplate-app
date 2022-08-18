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
        .addServer('http://localhost:3001')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    if (process.argv[2] === 'swaggerBuild') {
        const fs = require('fs');
        fs.writeFileSync("./swagger-spec.json", JSON.stringify(document));
        app.close();
        return;
    }
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map