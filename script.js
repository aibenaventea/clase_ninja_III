class Ninja {
    nickName= "";
    health = 100;
    speed = 3;
    strength = 3;

    constructor(nickName){
        this.nickName = nickName;    
    }
    sayName(){
        console.log(`Soy un ninja y mi nombre es ${this.nickName}`);
    };
    
    showStats(){
        console.log(`Nombre: ${this.nickName}, vida: ${this.health}, velocidad: ${this.speed}, fuerza: ${this.strength}`)
    };
    
    drinkSake(){
        this.health += 10
        console.log(`Ahora ${this.nickName} tiene ${this.health} de vida`);
    };
    
}
class Sensei extends Ninja {
    wisdom = 10;
    constructor(nickName, health, speed, strength) {
        super(nickName, health, speed, strength);
        this.nickName = nickName;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    speakWisdom() {
        this.drinkSake();
        console.log("Lo que puede hacer un programador en un mes, dos programadores lo pueden hacer en dos meses.");
    };
    showSenseiStats(){
        console.log(`Nombre: ${this.nickName}, vida: ${this.health}, velocidad: ${this.speed}, fuerza: ${this.strength}, sabiduria: ${this.wisdom}`)
    }
}

const ninjaSensei = new Sensei("Tonkotsu Master", 200, 10, 10)

ninjaSensei.speakWisdom();

ninjaSensei.showSenseiStats();



