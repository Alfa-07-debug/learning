//Generics

//without Generic
function printString(item:string){
    console.log(item);
}

function printNumber(item:number){
    console.log(item);
}

printString("9");
printNumber(8);

//with generic 

function printItemM<T>(item:T){
    console.log(typeof(item));
}
printItemM(9);

//generic Function

function echo<A>(value:A){
    return value;
}

console.log(echo("Arif"));
console.log(echo(typeof("Arif")));
console.log(echo(9));
console.log(echo(typeof(9)));

//Generic Interface

interface Box<T> {
    content: T;
  }
  
  let stringBox: Box<string> = { content: "TypeScript" };
  let numberBox: Box<number> = { content: 100 };

  console.log(stringBox);
  console.log(numberBox);

//Generic Class

class Storage<T> {
    private items: T[] = [];
  
    add(item: T): void {
      this.items.push(item);
    }
  
    getAll(): T[] {
      return this.items;
    }
  }
  
  const stringStorage = new Storage<string>();
  stringStorage.add("Arif");
  stringStorage.add("Ali");
  console.log(stringStorage.getAll()); // [ 'Arif', 'Ali' ]
  
  const numberStorage = new Storage<number>();
  numberStorage.add(10);
  numberStorage.add(20);
  console.log(numberStorage.getAll()); // [ 10, 20 ]
  