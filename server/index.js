const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
// const cors = require('cors');
// For production security and efficiency
// const helmet = require('helmet');
// const compression = require('compression');
// const rateLimit = require('express-rate-limit');

const { PORT, dev } = require('./config');

const nextApp = next({ dev });
const handle = nextApp.getRequestHandler(); // next config

nextApp.prepare().then(() => {
	const app = express();
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));
	// app.use(compression());
	// app.use(helmet());

	// // Securing cors
	// const origin = {
	// 	origin: dev ? '*' :  'https://www.domain.com'
	// }
	// app.use(cors(origin));

	// Any routes not yet specified should just be handled by React and Next
	app.get('*', (req, res) => {
		return handle(req, res);
	})

	app.listen(PORT, err => {
		if (err) throw err;
		console.log(`Ready at http://localhost:${PORT}`);
	});
});
