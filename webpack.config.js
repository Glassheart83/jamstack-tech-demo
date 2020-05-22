module.exports = (env, argv) => {
    return require(`./webpack/${argv.mode}.config.js`);
};
