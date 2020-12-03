import { isPresent } from '@ember/utils';
import { assert } from '@ember/debug';

import Mustache from 'mustache';

function applyPageTitleDecorator (Route, options) {
  assert ('ember-cli-page-title is not compatible with this version of ember.', isPresent (Route.prototype.setup));

  let setupFunction = Route.prototype.setup;
  let title = typeof options === 'string' ? options : options.title;

  // We are going to replace the current setup() method with our own custom activate
  // method. It will set the title on the page, and then pass control to the original
  // activate method.

  Route.prototype.setup = function (...args) {
    // Pass control to the original setup function.
    let ret = setupFunction.call (this, ...args);

    this.pageTitle.title = Mustache.render (title, this.controller);

    return ret;
  };

  return Route;
}

export default function pageTitleDecorator (options) {
  return function (Route) {
    return applyPageTitleDecorator (Route, options);
  };
}
