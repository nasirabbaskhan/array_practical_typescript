// spread opperator is used to combine the two arrays...
const nickname = ["alexnder", "imran"];
const arryofNumber = [1, 3, 4];
const combined = [...nickname, ...arryofNumber]; // this is the spreed operator
combined.forEach((element) => {
    //console.log(element);
});
// rest looks like spread operator but it is opposite of spread and it is used in function mostly...
function logName(greeting, ...nickNames) {
    for (const nickname of nickNames) {
        console.log(` ${greeting} ${nickname}`);
    }
}
logName("Hello", "Alexender", "alex", "mishra");
export {};
