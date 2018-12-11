const express = require('express')
const app = express()

app.use('*', (req, res, next) => {
	res.send('<H1>Hello from express app </H1>')
})
app.listen(4000, () => {
    console.log('Express app listening on port 4000')
})
