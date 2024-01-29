"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const express_graphql_1 = require("express-graphql");
const bread_1 = require("./routes/bread");
const batch_1 = require("./routes/batch");
const bakery_1 = require("./routes/bakery");
const swagger_1 = __importDefault(require("./swagger"));
const graphqlSchema_1 = require("./graphqlSchema");
const PORT = 8080;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use('/bread', bread_1.breadsRouter);
app.use('/batch', batch_1.batchRouter);
app.use('/bakery', bakery_1.bakeryRouter);
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_1.default));
app.use('/graphql', (0, express_graphql_1.graphqlHTTP)({
    schema: graphqlSchema_1.schema,
    graphiql: true,
}));
app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
});
