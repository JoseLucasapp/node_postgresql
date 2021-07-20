require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const router = express.Router();

(async () => {
    const database = require('./api/database/index');
    try {
        await database.sync();
    } catch (error) {
        console.log(error);
    }
})();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use('/api', router);

require('./api/routes')(router);

app.listen(process.env.PORT || 3333);