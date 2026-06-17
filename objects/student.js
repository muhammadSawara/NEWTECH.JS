const student{
    firstName: 'Alice',
    lastName: 'Johnson',
    age: 20,
    grades: [88, 92, 79],
    isEnrolled: true
};

student.gmail = "alice12@"
student.age =21;
student.isEnrolled = false;
delete student.lastName;

console.log(student.firstName);
console.log(student['email']);

for (let key in student) {
    console.log(key, student[key]);
}


let { firstName, email } = student;
const contact{
    [phone_ + firstName] = '055-123-4567';
};


const address = { street: 'Main St', city: 'Hebron', zip: '12345' };

const merged = Object.assign({},student,address);