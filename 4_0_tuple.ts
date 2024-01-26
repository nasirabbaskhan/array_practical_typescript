// tupple seems like arrays but they are differennt
// in array we do not know abut the numbers of array elements but
// in tupple we know the exact number and type of tupple Elements..

const arrayElements: (string | number)[] = [3, 7, 6, "nasir"];

const tuppleElements: [string, number] = ["nasir", 5];
tuppleElements.forEach((element) => {
  console.log(element);
});

let [preference, firstname, inCountry] = [1, "Nasir", true];

//tuple types have advantage that you canaccurately describe the type of an array of /mixed

var tuple: [number, string] = [5, "nasir"];
console.log(tuple[0]);
console.log(tuple[1]);

// you can create a tuple usung javascript's array syntex
//but will need to declare its type as a tuple

const pssingReport: [string, number] = ["{}", 200];
if (pssingReport[1] === 200) {
  let localInfo = JSON.parse(pssingReport[0]);
  console.log(localInfo);
}
// As an array, the order is not important so an item at
//any index could be either a string or a number
//In the tuple the order and length are guaranteed

type staffAcount = [number, string, string, string?];
const staff: staffAcount[] = [
  [0, "adnankwo", "adnankwo.e@"],
  [1, "kanankwo", "kanankwo.e@"],
  [2, "werokwo", "warokwo.e@", "superviser"],
];

// tuple with spreed operator
type PayStubs = [staffAcount, ...number[]];
const paystubs: PayStubs[] = [
  [staff[0], 2],
  [staff[1], 2, 4],
  [staff[0], 2, 7, 8],
];
console.log(paystubs);

const monthOnePyment = paystubs[0][1] + paystubs[1][1] + paystubs[2][1];
const monthTwoPyment = paystubs[1][2] + paystubs[2][2];
const monthThreePyment = paystubs[2][2];
