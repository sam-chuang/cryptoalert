import { app, h } from "/modules/hyperapp.js";
export default (node => {
  return app({
    init: 0,
    view: state => "Hi, Hyperapp",
    node
  });
});