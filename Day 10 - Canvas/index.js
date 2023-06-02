console.log(1);

class Fruit {
    constructor(weightInit = 10)
    {
        this.weight = weightInit ;
    }

    decrease()
    {
        if(!this.isEmpty())
        {
            this.weight--;
        }
    }

    isEmpty()
    {
        return this.getWeight() == 0;
    }

    getWeight()
    {
        return this.weight;
    }

}


class Human {
    constructor(name, gender, weight)
    {
        this.name = name;
        this.gender = gender;
        this.weight  = weight;
    }

    isMale()
    {
        return this.gender == 'Male';
    }

    setGender(gender)
    {
        this.gender = gender;
    }

    checkFruit(fruitObj)
    {
        return !fruitObj.isEmpty();
    }

    eat(fruitObj)
    {
        if(this.checkFruit(fruitObj))
        {
            this.weight ++;
            fruitObj.decrease(); //AN DUOC
        }else{
            alert('an het roi'); //KHONG AN DUOC
        }
    }

    say(string)
    {
        console.log(string);
    }
    
    getName()
    {
        return this.name;
    }

    setName()
    {
        this.name = newName;
    }    

    getWeight()
    {
        return this.weight;
    }
    
    setWeight()
    {
        this.weight = newWeight;
    }
}

let apple = new Fruit(1);
console.log(apple)

let adam = new Human('Adam', 'Male', 70);
let eva = new Human ('Eva','Female',45);
console.log(adam,eva)

adam.eat(apple);
eva.eat(apple)

console.log(apple)
