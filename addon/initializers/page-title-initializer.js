export function initialize(application) {
  application.inject('route', 'pageTitle', 'service:page-title');
}

export default {
  initialize
};
