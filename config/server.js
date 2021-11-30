module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  cron :{
    enabled: true
  },
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '02c8ae6aa94de991b9df3d7be1b2dd90'),
    },
  },
});
