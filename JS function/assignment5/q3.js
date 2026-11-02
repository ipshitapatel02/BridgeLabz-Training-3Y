const userWithArrow = {
  name: "John",
  showName: () => {
    console.log("Arrow function this.name:", this.name);
  },
};

userWithArrow.showName();

console.log(
  "Why undefined? An arrow function has no 'this' of its own. It uses the 'this' " +
  "of the place where it was written. Here that is the outer (module/global) scope, " +
  "not the user object, so this.name is not 'John'."
);

const userWithFunction = {
  name: "John",
  showName: function () {
    console.log("Normal function this.name:", this.name);
  },
};

userWithFunction.showName();

console.log(
  "Fixed: a normal function gets 'this' from how it is called. " +
  "userWithFunction.showName() is called on the object, so 'this' is that object."
);
