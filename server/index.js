const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const cors = require('cors');
// For production security and efficiency
const helmet = require('helmet');
const compression = require('compression');
// const rateLimit = require('express-rate-limit');

const { PORT, dev, pool } = require('./config');

const nextApp = next({ dev });
const handle = nextApp.getRequestHandler(); // next config

nextApp.prepare().then(() => {
	const app = express();
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(compression());
	app.use(helmet());

	// Securing cors
	const origin = {
		origin: dev ? '*' :  'https://www.domain.com'
	}
	app.use(cors(origin));

	const getPosts = (req, res) => {
		pool.query('SELECT * FROM blog', (error, results) => {
			if (error) {
				throw error;
			}
			res.status(200).json(results.rows);
		});
	}

	const addPost = (req, res) => {
		const { data } = req.body
		pool.query('INSERT INTO blog (data) VALUES ($1)', [data], error => {
			if (error) {
				throw error;
			}
			res.status(201).json({ status: 'success', message: 'Post added.' });
		});
	}

	const getPost = (req, res) => {
		const { postId } = req.params;
		pool.query('SELECT * FROM blog WHERE id = $1', [postId], (error, results) => {
			if (error) {
				throw error;
			}
			res.status(200).json(results.rows[0]);
		});
	}

	app.route('/posts/service').get(getPosts).post(addPost);
	app.route('/posts/service/:postId').get(getPost);

	// Any routes not yet specified should just be handled by React and Next
	app.get('*', (req, res) => {
		return handle(req, res);
	})

	app.listen(PORT, err => {
		if (err) throw err;
		console.log(`Ready at http://localhost:${PORT}`);
	});
});
