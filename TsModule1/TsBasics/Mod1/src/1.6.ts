// learning function
// --> two types, Normal func, Arrow func

// normal func
{
  function add(num1: number, num2: number = 14): number {
    return num1 + num2;
  }

  //console.log(add(2,true))

  //arrow
  const addArrow = (num1: number, num2: number): number => num1 + num2;

  // OBJJECT  --> FUNC --> METHOS
  const poorUser = {
    name: "Mezba",
    balance: 0,
    addBalance(balance: number): number {
      return this.balance + balance;
      //return `My new Balance is : ${this.balance+balance} tk`
    },
    showBalance(balance: number): string {
      return `My new Balance is : ${this.balance + balance} tk`;
      //return this.balance+balance
    },
  };

  //use map in array

  const arr: number[] = [1, 4, 10];
  const newArray = arr.map((elem: number): number => elem * elem);
}
