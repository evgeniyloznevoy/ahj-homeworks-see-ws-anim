// TODO: write code here

class App {
    constructor() {
      this.button = document.querySelector('.collapse-button');
      this.collapse = document.querySelector('.collapse-container');
      this.toggleCollapse = this.toggleCollapse.bind(this);
    }
  
    init() {
      this.button.addEventListener('click', this.toggleCollapse);
    }
  
    toggleCollapse() {
      this.collapse.classList.toggle('hidden');
    }
  }
  
  const app = new App();
  app.init();