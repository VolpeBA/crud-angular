const PROXY_CONFIG = [
  {
    context: ["/api"],
    target: "http://localhost:8080",
    secure: false,
    changeOrigin: true,
    logLevel: "debug"
  }
];
// lembrar de rodar o comando ng serve --proxy-config proxy.conf.js para rodar o proxy no package.json

module.exports = PROXY_CONFIG;
