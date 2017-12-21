function genericFunc<T>(argument: T): T[] {
  let arrayOfT: T[] = [];
  arrayOfT.push(argument);
  return arrayOfT;
}

let arrayFromString = genericFunc<string>("beep");
console.log(arrayFromString[0]);
console.log(typeof arrayFromString[0]);

let arrayFromNumber = genericFunc(42);
console.log(arrayFromNumber[0]);
console.log(typeof arrayFromNumber[0]);
