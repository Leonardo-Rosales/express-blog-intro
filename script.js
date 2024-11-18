console.log('express-blog-intro');

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
	res.send('<h1>express-blog-intro</h1>');
})

app.listen(port, () => {
	console.log(`Server listening on port: ${port}`)
})