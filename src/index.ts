import express from 'express';

import { routes as personRoutes } from './routes/person.routes';

const app = express();

app.use(express.json());
app.use(personRoutes);

app.listen(3333, () =>
  console.log(`
===================================

    Server running on port 3333

===================================
`)
);
