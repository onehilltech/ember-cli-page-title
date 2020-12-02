function applyPageTitleDecorator (Route, options) {
  let origFunction = Route.prototype.activate;
  let title = typeof options === 'string' ? options : options.title;

  // We are going to replace the current activate() method with our own custom activate
  // method. It will set the title on the page, and then pass control to the original
  // activate method.
  Route.prototype.activate = function (...args) {
    this.pageTitle.title = title;
    origFunction.call (this, ...args);
  };

  return Route;
}

export default function pageTitleDecorator (options) {
  return function (Route) {
    return applyPageTitleDecorator (Route, options);
  };
}
