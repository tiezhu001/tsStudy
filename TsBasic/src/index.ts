
//方法参数类型
function render(doucument: any) {
    console.log(doucument);
}

// 1.Arrays
let list: number[] = [1, 2, 3];
// 或者  list和list1是一样的
let list1 = [1, 2, 3];
//list.push("2"); //报错

// 如果使用空数组,必须指定类型参数
let a: number[] = [];

// 2. tUple 元组
let user: [number, string] = [1, "张三"];
user.push("1"); //编译不报错,但是运行时报错

// 3.enum 和C#相同
// enum Size{
//     Small,
//     Medium,
//     Large
// }
// 如果使用const变量接受枚举值
const enum Size2 {
    Small,
    Medium,
    Large
}

console.log(Size2.Large);

// 4.functions
function cal(num: number): number {
    if (num < 0) {
        return 0;
    }
    return 0;
}

// 5.obj
let obj: { readonly name: string, age: number, func: (date: Date) => void } = {
    name: "张三",
    age: 12,
    func: (date: Date) => {
        console.log(date);
    }
}

// 对象的定义和使用分开
type Person = {
    readonly name:
    string, age: number,
    func: (date: Date) => void
}

let person1: Person = {
    name: "张三",
    age: 12,
    func: (date: Date) => {
        console.log(date);
    }
}

// 6.联合类型
function render2(doucument: string | number): number {
    if (typeof doucument === "string") {
        return parseFloat(doucument) * 2.2;
    }
    else return doucument * 2.2;
}


// 7.
type Size = "small" | "medium" | "large";

let size: Size = "small";

// 8.可空类型
type Emplyee = {
    birth: Date
}

function getBirth(id: number): Emplyee | null | undefined {
    return id === 0 ? null : { birth: new Date() };
}
let customer = getBirth(0);
console.log(customer?.birth);

// 9.类型默认值
type Person2 = {
    speed: number,
}

function getSpeed(speed: number) {
    // 如果使用 ||运算符 将会忽略 null undefined 0 '' false
    // 如果0是有效字符,则使用 ??运算符
    //   speed = speed?||10;
    let a = speed ?? 10;
    console.log(a)
}
getSpeed(0);

// 10.类型断言
// phone的返回值是htmlElement 或者null
// 如果phone是输入框想拿到输入的value,则需要断言
// let phone = window.document.getElementById("phone") as HTMLInputElement;
// let phone2 = <HTMLInputElement>document.getElementById("phone");
// phone.value;

// 11.定义类
class Account {

    //1. class必须有构造函数
    // 第一种构造方式
    // readonly name: string;
    // age: number;
    // birth: Date;
    // private _salary: number;
    nickName?: string;
    // constructor(name: string, age: number, birth: Date, salary: number) {
    //     this.name = name;
    //     this.age = age;
    //     this.birth = birth;
    //     this._salary = salary;
    // }

    // 第二种构造方式
    constructor(
        public readonly name: string,
        public age: number,
        private _birth: Date,
        public _salary: number) {

    }

    getBirth(): Date {
        return this._birth;
    }
    getName(name: string): string {
        return name;
    }

    // getSalary(): number {
    //     return this._salary;
    // }

    // setter
    set salary(salary: number) {
        this._salary = salary;
    }
    // getter
    get salary(): number {
        return this.salary;
    }

    // 静态成员
    static _count:number = 0;

    static get count(){
        return this._count;
    }

    static set count(value:number){
        this._count = value;
    }



}

var acc = new Account("张三", 12, new Date(), 1000);
//console.log(acc._salary); //报错
console.log(acc.salary);

// 如果没有setter 下边是会报错的
acc.salary = 1;

// 12.索引签名
// 实现动态往对象里边增加属性
class Seat{
    [key:string]:string;
}

let seat = new Seat();
seat.A1 = "张三";
seat.A2 = "李四"