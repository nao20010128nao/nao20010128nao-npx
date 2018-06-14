const blessed = require("blessed");
const {
    box
} = blessed;

module.exports = blessed.skb = (options) => {
    const sss = box(options);
    /*
    const dbg = () => {
        sss.setLabel(`Width: ${sss.width}, Height: ${sss.height}`);
    };
    setInterval(dbg, 10);
    */
    sss.on('resize', () => {
        sss.emit('resizeSize', {
            width: sss.width,
            height: sss.height
        });
    });
    return sss;
}