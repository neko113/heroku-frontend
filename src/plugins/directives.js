module.exports = (app) => {
  app.directive("focus", {
    mounted(el) {
      el.focus();
    },
  });
};
