module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5d501b7abc4bb1efcb18405537fecc9f'),
  },
});
