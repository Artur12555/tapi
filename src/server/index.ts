import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import { graphqlHTTP } from 'express-graphql';

import { breadsRouter } from './routes/bread';
import { batchRouter } from './routes/batch';
import { bakeryRouter } from './routes/bakery';
import specs from './swagger';
import { schema } from './graphqlSchema';

const PORT = 8080;
const app = express();


app.use(cors());


app.use('/bread', breadsRouter);
app.use('/batch', batchRouter);
app.use('/bakery', bakeryRouter);


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
