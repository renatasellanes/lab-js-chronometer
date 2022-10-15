class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {
    this.intervalId = setInterval (()=> {
      this.currentTime ++

      if (printTimeCallback) {
        printTimeCallback()
      }

    }, 1000)
  }

  getMinutes() {
    let timeget = Math.floor(this.currentTime/60)
    return timeget
  }

  getSeconds() {
    let timeseconds = Math.floor(this.currentTime%60)
    return timeseconds
  }

  computeTwoDigitNumber(value) {
    if (value < 10) {
      let lessThanTen = (("0" + value).slice(-2)).toString();
      return lessThanTen
    } else {
      let valueToString = value.toString();
      return valueToString;
    }
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    let timecentiseconds = Math.floor(this.currentTime%100)
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}:${this.computeTwoDigitNumber(timecentiseconds)}`
  }
}
