class MovieTicket {
  constructor(movieName, seatNo, price) {
    this.movieName = movieName;
    this.seatNo = seatNo;
    this.price = price;
  }
}

class OnlineTicket extends MovieTicket {
  constructor(movieName, seatNo, price, convenienceFee) {
    super(movieName, seatNo, price);
    this.convenienceFee = convenienceFee;
  }

  getTotalAmount() {
    return this.price + this.convenienceFee;
  }
}

MovieTicket.prototype.printTicket = function () {
  console.log(`Movie: ${this.movieName} | Seat: ${this.seatNo} | Price: Rs. ${this.price}`);
};

const t1 = new OnlineTicket("Interstellar", "A12", 300, 30);
const t2 = new OnlineTicket("Inception", "B07", 250, 25);
const t3 = new MovieTicket("Dangal", "C03", 200);

t1.printTicket();
console.log(`Total amount: Rs. ${t1.getTotalAmount()}`);

t2.printTicket();
console.log(`Total amount: Rs. ${t2.getTotalAmount()}`);

t3.printTicket();

console.log("\nPrototype chain check:");
console.log(`t1 has own printTicket: ${t1.hasOwnProperty("printTicket")}`);
console.log(`printTicket found on MovieTicket.prototype: ${MovieTicket.prototype.hasOwnProperty("printTicket")}`);
console.log(`t1 instanceof OnlineTicket: ${t1 instanceof OnlineTicket}`);
console.log(`t1 instanceof MovieTicket: ${t1 instanceof MovieTicket}`);
console.log(`Object.getPrototypeOf(OnlineTicket.prototype) === MovieTicket.prototype: ${Object.getPrototypeOf(OnlineTicket.prototype) === MovieTicket.prototype}`);
