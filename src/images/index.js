const fs = require('fs');
const path = require('path');
const miku = Buffer.from(fs.readFileSync(path.join(__dirname, 'miku.png.b64')).toString('utf8'), 'base64');
const rin = Buffer.from(fs.readFileSync(path.join(__dirname, 'rin.png.b64')).toString('utf8'), 'base64');
module.exports = {
    miku,
    rin
}