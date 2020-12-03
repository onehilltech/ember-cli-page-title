ember-cli-page-title
==============================================================================

ember-cli add-on for adding a title to a page


Compatibility
------------------------------------------------------------------------------

* Ember.js v3.12 or above
* Ember CLI v2.13 or above
* Node.js v10 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-cli-page-title
```


Usage
------------------------------------------------------------------------------

This add-on allows each `Route` to have its own page title. You just simply
use the `@pageTitle` decorator.

```javascript
import Route from '@ember/routing/route';
import { default as pageTitle } from 'ember-cli-page-title';

@pageTitle ('Contact Us')
export default class ContactRoute extends Route {

}
```

If the destination route does not have a page title, then the current page
title remains.

### Using templates in titles

The `@pageTitle` decorator uses [Mustache](https://github.com/janl/mustache.js) to enable 
usage of template parameters in the title. The decorator replaces template parameters with 
values from the corresponding route's controller.

```javascript
import Route from '@ember/routing/route';
import { default as pageTitle } from 'ember-cli-page-title';

@pageTitle ('Person - {{model.name}}')
export default class PersonRoute extends Route {
  model () {
    return {
      name: 'John Doe'
    } 
  }
}
```

Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [Apache-2.0 License](LICENSE.md).
