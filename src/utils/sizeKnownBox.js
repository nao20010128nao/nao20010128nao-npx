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
    let calledByRender = false;

    function notifySize() {
        sss.emit('resizeSize', {
            width: sss.width,
            height: sss.height
        });
    }
    sss.on('resize', notifySize);
    sss.on('render', () => {
        if (!calledByRender) {
            notifySize();
        }
        calledByRender = true;
    });
    return sss;
}