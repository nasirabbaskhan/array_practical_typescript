// multiDimentional Array
const numberOfStudentBatch1 = [700, 700, 150, 400, 400, 600, 600];
const numberOfStudentBatch2 = [1400, 1400, 300, 800, 800, 1200, 1200];
const totalStudents = [
    [700, 700, 150, 400, 400, 600, 600],
    [1400, 1400, 300, 800, 800, 1200, 1200],
    [1400, 1400, 300, 800, 800, 1200, 1200],
];
totalStudents.forEach((element) => {
    element.forEach((element) => {
        console.log(element);
    });
});
export {};
