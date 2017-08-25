import Moment from "moment";

class Item {
  constructor(title, note, duration) {
    this.title = title;
    this.note = note;
    this.duration = duration;
    this.timeStarted = new Moment();
    this.timeRemaining = duration;
  }
  setTimeRemaining() {
    console.log(this.duration);
    this.timeRemaining = this.timeStarted.add(this.duration, 'day');
  }
}


export default Item;
