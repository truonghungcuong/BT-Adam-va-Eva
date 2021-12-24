class Human{
    constructor(name,gender,weight) {
        this.name=name;
        this.gender=gender;
        this.weight=weight;
    }
    getName(){
        return this.name;
    }
    getGender(){
        return this.gender;
    }
    eat(apple){
        if (this.check(apple)){
        this.weight++;
        apple.decrease();
        }
    }
    check(apple){
        return apple.getWeight()>0;
    }
}