const debug = process.env.NODE_ENV !== "production";
const repository = "joonyoung-s-portfolio-page";

module.exports = {
  "process.env.BACKEND_URL": !debug ? `/${repository}` : "",
};
