// 泛型类
class KeyValueParir<TKey, TValue>{
    constructor(public key: TKey, public value: TValue) { }
    format() {
        return `${this.key}=${this.value}`;
    }
}

var keyValues = new KeyValueParir<number, string>(1, "string");
var keyValue2 = new KeyValueParir("1", "string");


// 泛型方法
function getValue<T>(key: T) {
    console.log("key", key);
}

getValue<string>("1");
getValue(1);

// 泛型接口
interface IResult<T> {
    data: T | null;
    msg: string;
}

interface User {
    name: string;
}

interface Ps {
    password: string;
}


function getResult<T extends User | Ps>(url: string): IResult<T> {
    return { data: null, msg: "" };
}

getResult<User>("user");
getResult<Ps>("ps");


function echo<T extends {name:string}>(name:T){
    console.log(name);
}
echo({name:" 1"});

