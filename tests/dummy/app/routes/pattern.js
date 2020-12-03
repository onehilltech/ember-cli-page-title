import Route from '@ember/routing/route';
import pageTitle from 'ember-cli-page-title';

@pageTitle ('Template - {{model.name}}')
export default class PatternRoute extends Route {
  model () {
    return {
      name: 'John Doe'
    }
  }
}
