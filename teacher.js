
class Teacher extends Person{

    constructor (name, surname, yob, students)
        {
        super(name,surname,yob);
        this.students=students;
        }



    findBestStudent() {
        const students = this.students;
        let bestStudent=students[0];
        for (let i = 1; i < students.length; i++) {
            const element = students[i];
            const bestMean = bestStudent.calculateMean();
            const actualMean= students[i].calculateMean();
            if(bestMean<actualMean)
                bestStudent = actualStudet;
        }
        return bestStudent;
    }
/**
 * ritornare una riga con "NOME: Andrea \n COGNOME: Asioli \n ETA': 45 \n MIGLIOR STUDENTE: Valentina Cherubini
 * 
 * 
 */
    toString(){
        let str=`MIGLIOR STUDENTE: ${this.findBestStudent().name} ${this.findBestStudent().surname}`
        return super.toString() + str;
    }
}