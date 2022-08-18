"use strict";
exports.__esModule = true;
var database_1 = require("./database");
exports["default"] = (function () { return ({
    port: parseInt(process.env.PORT, 10) || 3000,
    keys: {
        privateKey: process.env.PRIVATE_KEY.replace(/\\n/gm, '\n'),
        publicKey: process.env.PUBLIC_KEY.replace(/\\n/gm, '\n')
    },
    database: (0, database_1.dbConfig)()
}); });
