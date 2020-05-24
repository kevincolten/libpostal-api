const express = require('express')
const postal = require('@cymen/node-postal');
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => res.json(
  postal.parser.parse_address(decodeURIComponent(req.query.address))
));

app.listen(port, () => console.log(`Example app listening at on port ${port}`))