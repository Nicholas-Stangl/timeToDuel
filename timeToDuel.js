class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost);
        this.power = power;
        this.res = res;
    }
    attack(target) {
        //reduce target res by power
        target.res -= this.power;
        console.log(`${this.name} attacks ${target.name}`);
        console.log(target);
    }
}

class Effect extends Card {
    constructor(name, cost, text, stat, magnitude) {
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
    play(target) {
        if (target instanceof Unit) {
            console.log(`You played ${this.name} on ${target.name}!`);
            console.log(this.text);
            if (this.stat == "res") {
                target.res += this.magnitude;
            }
            else if(this.stat == "power"){
                target.power += this.magnitude;
            }
            } else {
            throw new Error("Target must be a unit!");
        }
        console.log(target);
    }

}

//make Unit RBN
const unitA = new Unit("Red Belt Ninja", 3, 3, 4);
//make Effect Hard Algo
const effectA = new Effect("Hard Algo", 2, "Increase target res by 3", "res", 3);
//play Hard Algo on RBN
effectA.play(unitA);

//make Unit BBN
const unitB = new Unit("Back Belt Ninja", 4, 5, 4);
//make Effect Hard Unhandled...
const effectB = new Effect("Unhandled Promise Rejection", 1, "Reduce target's res by 2", "res", -2);
//play Unhandled... on RBN
effectB.play(unitA);

//make Effect Paired Prog
const effectC = new Effect("Paired Programming", 2, "Increase target's power by 2", "power", 2);
//play Paired Prog on RBN
effectC.play(unitA);

//RBN attacks BBN
unitA.attack(unitB);
