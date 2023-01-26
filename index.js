// Exercise 1 : Checking The BMI

let person1 = {
    fullName: "Guy Ganot",
    mass: 123123,
    height: 123,
    BMI: function() {
        return this.mass / this.height^2
    }
}
let person2 = {
    fullName: "Hadar Ganot",
    mass : 321321,
    height: 321,
    BMI: function() {
        return this.mass / this.height^2
    }
}
if (person1.BMI() > person2.BMI()) {
    console.log(person1.fullName);
} else {
    console.log(person2.fullName);
}


// Exercise 2 : Grade Average

let average = {}

let name = prompt("Enter name");
let choice = "";

do {
    another();
    choice = prompt("Type Yes if you want to add another course and No if you want the final calculation");
    if (choice == "No") {
        console.log(calc(average))
        break;
    }
} while (true)


function calc(average) {
    let score = [];
    let coe = [];
    for (let i in average) {
        score.push(parseInt(average[i]["score"]));
        coe.push(parseInt(average[i]["coefficient"]));      

    }
  let total = 0
    let totalscore = 0;
  let totalcoe = 0;
    for (let i = 0; i < score.length; i++) {
        totalscore += score[i]*coe[i];
    totalcoe += coe[i]
    }
    total = totalscore / totalcoe;
    return total;
}

function another() {
    let courseName = "";
    let grade = "";
    let coe = "";
    while (courseName == "" || !isNaN(courseName)) {
        courseName = prompt("Enter name of the course");
    }
    while (grade == "" || isNaN(grade)) {
        grade = prompt("Enter the grade");
    }
    while (coe == "" || isNaN(coe)) {
        coe = prompt("Enter the coefficient");
    }
    let course = {
        name: courseName,
        score: grade,
        coefficient: coe
    }
    average[courseName] = course;
  console.log(average)
}

