const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const db = require('./models');

// Routers
const postsRouter = require('./routes/posts.routes');
app.use('/posts', postsRouter);

db.sequelize.sync().then(() => {
   app.listen(3001, () => { console.log("The eye of Sauron is upon you..."); });
});
