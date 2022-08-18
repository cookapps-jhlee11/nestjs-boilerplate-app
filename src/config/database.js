"use strict";
exports.__esModule = true;
exports.dbConfig = void 0;
var path_1 = require("path");
var dbConfig = function () { return ({
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: parseInt(process.env.POSTGRES_PORT, 10) || 5432,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    ssl: false,
    entities: [(0, path_1.join)(__dirname, '../**/*.entity{.ts,.js}')],
    // We are using migrations, synchronize should be set to false.
    synchronize: false,
    dropSchema: false,
    // Run migrations automatically,
    // you can disable this if you prefer running migration manually.
    migrationsRun: false,
    logging: false,
    migrations: [(0, path_1.join)(__dirname, '../migrations/**/*{.ts,.js}')],
    cli: {
        migrationsDir: (0, path_1.join)(__dirname, '../migrations'),
        entitiesDir: (0, path_1.join)(__dirname, '../**/*.entity{.ts,.js}')
    }
}); };
exports.dbConfig = dbConfig;
exports["default"] = (0, exports.dbConfig)();
