let courses = [
    { name: "Courses in England", prices: [0, 100] },
    { name: "Courses in Germany", prices: [500, null] },
    { name: "Courses in Italy", prices: [100, 200] },
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
];

function filter(mycourses, requiredRange) {
    let validCourses = [];
    let cloneArray = mycourses;

    if (requiredRange[0] == null) {
        requiredRange[0] = 0;
    }

    if (requiredRange[1] == null) {
        requiredRange[1] = Infinity;
    }

    for (let i = 0; i < cloneArray.length; i++) {

        if (cloneArray[i].prices[0] == null) {
            cloneArray[i].prices[0] = 0;
        }

        if (cloneArray[i].prices[1] == null) {
            cloneArray[i].prices[1] = Infinity;
        }

        if (requiredRange[0] <= cloneArray[i].prices[0] && requiredRange[1] >= cloneArray[i].prices[1]) {
            validCourses.push(mycourses[i]);
        }

    }
    return validCourses;
}
let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];

console.log(filter(courses, requiredRange3));