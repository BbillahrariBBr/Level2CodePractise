{
  // interface

  type User1 = {
    name: string;
    age: number;
  };

  interface User2 {
    name: string;
    age: number;
  }

  type UserWithRoll1 = User1 & { roll: string };

  interface UserWithRoll2 extends User2 {
    roll: string;
  }

  const user1: UserWithRoll2 = {
    name: "Baki",
    age: 29,
    roll: "Manager",
  };

  type rollNumber = number;

  // js --> object , array --> object , function --> object

  type Roll12 = number[];
  interface Roll22 {
    [index: number]: number;
  }
  const rollNumber: Roll22 = [1, 2, 3];

  type Add = (num1: number, num2: number) => number;
  interface Add1 {
    (num1: number, num2: number): number;
  }
  const add: Add1 = (num1, num2) => num1 + num2;

  const user2: User2 = {
    name: "Baki",
    age: 29,
  };

  //
}
