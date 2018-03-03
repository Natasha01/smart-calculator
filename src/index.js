class SmartCalculator {
  constructor(initialValue) {
    this.answer = String(initialValue);
  }

  valueOf(number) {
    return eval(this.answer);
  }

  add(number) {
    this.answer += "+" + number;
    return this;
  }
  
  subtract(number) {
    this.answer += "-" + number;
    return this;
  }

  multiply(number) {
    this.answer += "*" + number;
    return this;
  }

  devide(number) {
    this.answer += "/" + number;
    return this;
  }

  pow(number) {
    this.answer += "**" + number;
    return this;  
  }

}

module.exports = SmartCalculator;
