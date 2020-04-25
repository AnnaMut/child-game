import {initialState, CARDS_COUNT} from './game-data';

export default class GameModel {
  constructor() {
    this.restart();
  }

  get state() {
    return this._state;
  }

  restart() {
    this._state = Object.assign({}, initialState);
  }

  win() {
    return this._state.answers.length === CARDS_COUNT;
  }

  getAnswers() {
    this._state = Object.assign({}, this.state, {score: this._state.score + this.state.score});
  }

  tick() {
    this._state = Object.assign({}, this.state, {time: this._state.time + 1});
  }

}
