const express = require('express');
const cors = require('cors');

// environment variables
const port = 5000;
const db_name = 'shopping_list';

require('./config/mongoose.config')(db_name); //require imports file, then immedietly executes the db_name function

// app is a function with a key value pairs
const app = express();

// requires body. will be undefined without this
app.use(express.json());
app.use(cors());
require('./routes/post.routes')(app);

app.listen(port, () =>
	console.log(`Listening on port ${port} for REQuests to RESpond to.`)
);
