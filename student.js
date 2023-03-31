class Student extends Person{

    constructor(name, surname, yob, grades = []){
        super(name,surname, yob);
        this._grades=grades;
    }

    get grades(){
    return this._grades;
    }

    calculateMean(){
        if (this.grades.length===0) {
            return -1;            
        }
        let sum=0;
        const grades = this.grades;
        for (let i = 0; i < grades.length; i++) {
            const grade =grades[i];
            sum+=grade;
            }
        const mean = sum / grades.length;
        return mean;
    }
/**
 * ritornare una riga con "NOME: Davide \n COGNOME: Consigliere \n ETA': 34 \n MEDIA: 5.4 
 * 
 * 
 */
    toString(){
        let str=`MEDIA: ${this.calculateMean()}`
        return super.toString()+str;
    }

}



