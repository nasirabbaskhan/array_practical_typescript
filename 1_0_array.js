const arrayOfStudent = [20, 45, 66, 77, 34, 567, 99];
arrayOfStudent.forEach(function (element) {
    console.log(element);
});
// for (let i = 0; i < arrayOfStudent.length; i++) {
//   console.log(arrayOfStudent[i]);
// }
// we want to make a function name imran that will returned array of string
let imran;
imran = () => {
    return ["imran", "alexender", "alex"];
};
let arr = imran();
arr.forEach(function (element) {
    console.log(element);
});
export {};
