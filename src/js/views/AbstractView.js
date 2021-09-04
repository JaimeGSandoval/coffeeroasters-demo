class AbstractView {
  constructor() {}

  setTitle(title) {
    document.title = title;
  }

  getHtml() {
    return '';
  }
}

export default AbstractView;
