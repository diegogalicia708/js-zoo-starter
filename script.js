//starter code
//python -m http.server
var animalPopulation = 0 

function run() {
  var tigger = new Tiger("Tigger");
  tigger.eat("meat");
  tigger.eat("kibble");
  var pooh = new Bear("Pooh");
  pooh.eat("fish");
  pooh.eat("meat");
  var rarity = new Unicorn("Rarity")
  rarity.eat("marshmallow")
  rarity.sleep()
  var Gemma = new Giraffe("Gemma")
  Gemma.eat("meat")
  Gemma.eat("leaves")
  Gemma.sleep()
  var Stinger = new Bees("Stinger")
  Stinger.eat("ice cream")
  Stinger.eat("pollen")
  Stinger.sleep()
  var zoebot = new zookeeper("zoebot")
  animals = [tigger, pooh, rarity, Gemma, Stinger,]
  zoebot.feedAnimals(animals, "meat")
  Animal.getPopulation()
}


  class zookeeper {
    constructor(n){
      this.name = n;
    }
    feedAnimals(array, food){
console.log(this.name + " is feeding " + food + " to " + array.length + " animals " + " of " + Animal.getPopulation()  + " total animals " )
      for(let i = 0; i < array.length; i++){
array[i].eat(food)
 
}    
}

  }
  class Animal {

    constructor(n, ff ) {
      this.name = n;
      this.favoriteFood = ff;   
      animalPopulation++;
    }

    sleep() {
       console.log(this.name + " sleeps for 8 hours")
    }

    eat(food) {
        console.log( this.name + " eats " + food)
        if (this.favoriteFood == food){
          console.log("YUM!!! " + this.name + " wants more " + food)
        } else {
          this.sleep()
        }
    
      }
static getPopulation(){
 console.log(animalPopulation) 
 return animalPopulation 
}

}



  class Tiger extends Animal {
    constructor(name) {
        super(name, "meat");
    }

    
}
class Bear extends Animal {
  constructor(name) {
        super(name, "fish");
    }
     sleep() {
       console.log(this.name + " hibernates for 4 months ")

     
     }
}

  class Girrafe extends Animal {
    constructor(name) {
        super(name, " leafs ");
    }

    
}

  class Bees extends Animal {
    constructor(name) {
        super(name, "pollen");
    }
sleep(){
  console.log(this.name + " never sleeps")
}
    eat(food){
    if(food != this.favoriteFood){
      console.log( "YUCK!!! " + this.name+ " will not eat " + food)
    }else { super.eat(food)}
  }
}

  class Unicorn  extends Animal {
    constructor(name) {
        super(name, "marshmallow");
    }
 sleep() {
       console.log(this.name + " sleeps in a cloud ")
 }
}
class Giraffe extends Animal{
  constructor(name) {
    super(name, "leaves"); 
  }
  eat(food){
    if(food != this.favoriteFood){
      console.log( "YUCK!!! " + this.name+ " will not eat " + food)
    }else { super.eat(food)}
  }
}
