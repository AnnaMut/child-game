import AbstractView from './abstract-view';

export default class WelcomeView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return `<section class="start-page">
    <a class="start-img" href="#">
      <img src="img/8.png" width="403" height="262" alt="Изображение принцесс">
    </a>
    <h2 class="start-title">Запомним где находятся картинки!</h2>
    <button class="start-button" type="button">Начать игру</button>
    </section>`;
  }

  startButtonClickHandler() {}

  bind() {
    const startButton = this.element.querySelector(`.start-button`);

    startButton.addEventListener(`click`, () => {
      this.startButtonClickHandler();
    });

  }
}
