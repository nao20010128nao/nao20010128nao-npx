const fs = require('fs');
const path = require('path');
const miku = fs.readFileSync(path.join(__dirname, 'miku.png.b64'), 'base64');
const rin = fs.readFileSync(path.join(__dirname, 'rin.png.b64'), 'base64');
module.exports = {
    miku,
    rin
}