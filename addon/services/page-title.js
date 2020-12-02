import Service from '@ember/service';

export default class PageTitleService extends Service {
  set title (title) {
    window.document.title = title;
    this.notifyPropertyChange ('title');
  }

  get title () {
    return window.document.title;
  }
}
