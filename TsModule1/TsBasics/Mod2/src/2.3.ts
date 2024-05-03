{
  // generic type

  type GenericArray<T> = Array<T>;

  //const rollNumber: number[] = [3, 6, 8];
  //const rollNumber: Array<number> = [3, 6, 8];
  const rollNumber: GenericArray<number> = [3, 6, 8];

  //const mentors: string[] = ["Mr. x", "Mr. y", "Mr. z"];
  //const mentors: Array<string> = ["Mr. x", "Mr. y", "Mr. z"];
  const mentors: GenericArray<string> = ["Mr. x", "Mr. y", "Mr. z"];

  //const boolArray: boolean = [true, false, true];
  //const boolArray: Array<boolean> = [true, false, true];
  const boolArray: GenericArray<boolean> = [true, false, true];

  const user: GenericArray<{ name: string; age: number }> = [
    {
      name: "Mezba",
      age: 100,
    },
    {
      name: "Jhankar",
      age: 100,
    },
  ];

  //generic tuple
  type GenericTuple<X, Y> = [X, Y];
  // const human:[string,string]  =['Mr. X', 'Mr. Y']
  const human: GenericTuple<string, string> = ["Mr. X", "Mr. Y"];
  const UserWithId: GenericTuple<number, { name: string; email: string }> = [
    1234,
    { name: "Peersian", email: "a@gmail.com" },
  ];
}
