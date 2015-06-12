module.exports = {
  session: {
    adapter: 'redis',
    host: 'localhost',
    port: 6379,
    db: 0,
    pass: null
  },
  port: process.env.PORT || 1337,
  environment: process.env.NODE_ENV || 'development'
};
