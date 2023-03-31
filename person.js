class Person{
    constructor(name, surname, yob){
        this.name =name;
        this.surname=surname;
        this._yob=yob;
    }

    get yob(){
        return this._yob;
    }

    set yob(value){
        const oldYob= 1980;
        if(this._yob)
            oldYob=this._yob
        this._yob = value;
        const newAge = this.calculateAge();

        if (newAge <18 || newAge > 100) {
            this._yob=oldYob;            
        }
    }

    toString(){
        let str=`NOME: ${this.name} \nCOGNOME: ${this.surname}\nETA': ${this.calculateAge()}\n`
        return str;
    }
    
    calculateAge(){
        const date=new Date();
        let year=date.getFullYear();
        let age=year-this.yob;
        return age;
    }
}