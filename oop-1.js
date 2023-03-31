

const student1 = new Student('Davide', 'Consigliere', 1989, [10,9,5,8,9]);
const student2 = new Student('Francesco','Badile',1993,[5,8,6,7,10])
const student3 = new Student('Valentina', 'Cherubini',2001,[5,6,7,4,5],)
const student4 = new Student('Valentin', 'Poggi',2001)
const teacher1= new Teacher('Andrea','Asioli',1978, [student1,student2,student3],)

const vecchio = new Person('Battista','Paorosidi',1934);

console.log(teacher1);
console.log(student1);
console.log(student2); 
console.log(student3);
console.log(student4);
console.log(vecchio.toString());



console.log(student2.calculateMean());
console.log(teacher1.findBestStudent());

console.log(teacher1.calculateAge());
console.log(student2.toString());
console.log(teacher1.toString());
