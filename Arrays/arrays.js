let students = ["Dania", "Omar", "Lina", "Rami"];
students.push("Sara");
students.unshift("Adam");
students.splice(3,1,"Lamar");
let removedLast = students.pop();
let removeFirst = students.shift();
let hasRami = students.includes("Rami");
let omarIndex = students.indexOf("Omar");
let groupA = [students[0],students[1]];
let groupB = ["Nour", "Tala"];
let allGroups = groupA.concat(groupB);
let groupString = allGroups.join("|");
students.sort();

for(let i=0; i<students.length/2; i++){
    let store = students[i];
    students[i] = students[students.length-i-1];
    students[students.length-i-1] = store;
}

let seats = [1, 2, 3, 4, 5];
seats.splice(1,3,"Reserved","Reserved","Reserved");
let reservedSeats = seats;
let studentsString = students.join();

console.log("students =", students);
console.log("removedLast =", removedLast);
console.log("removedFirst =", removeFirst);
console.log("hasRami =", hasRami);
console.log("omarIndex =", omarIndex);
console.log("groupA =", groupA);
console.log("allGroups =", allGroups);
console.log("groupString =", groupString);
console.log("reservedSeats =", reservedSeats);
console.log("studentsString =", studentsString);