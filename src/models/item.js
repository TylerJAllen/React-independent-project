import Moment from "moment";

class Item {
  constructor(title, note, duration) {
    this.title = title;
    this.note = note;
    this.duration = parseInt(duration);
    this.timeStarted = new Moment();
    this.timeRemaining = parseInt(duration);
  }
  setTimeRemaining() {
    var deadline = this.timeStarted.add(this.duration, 'seconds');
    this.timeRemaining = deadline.subtract(deadline);
    console.log(this.timeRemaining._d);
  }
}


export default Item;
