// 继承
class Adimal {
    constructor(public name: string, public age: number) {
    }
    say() {
        console.log("我是" + this.name);
    }

    get getFull(){
        return this.name + " " +this.age;
    }
}

class Dog extends Adimal {
    constructor(public id: string, name: string, age: number) {
        super(name, age);
    }

    SayHi(){
        console.log("汪汪汪");
    }

    override get getFull(): string {
        return this.id + " " + super.getFull;
    }

}

let dog = new Dog("1", "小狗", 1);
dog.say();
console.log(dog.getFull);

// 重写父类方法



// 抽象类
abstract class Animal {
    constructor(public name: string) {
    }

    abstract say():void;
}

// 接口
interface IAnimal {
    name: string;
    getName():string;
    addEvent():void;
}

class Cat implements IAnimal {
    constructor(public name:string){}

    getName(): string {
        throw new Error("Method not implemented.");
    }
    addEvent(): void {
        throw new Error("Method not implemented.");
    }

}