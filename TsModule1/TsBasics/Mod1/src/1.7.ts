{

    //spread operator
    //rest operator
    //Destructuring

const poorUser = {
  name: "Mr. X",
};

//spread operator

const bros1: string[] = ['Mir','For','Jahid']
const bros2: string[] = ['Fir','Jor','Jihad']

// eror 
//bros1.push(bros2)
bros1.push(...bros2)

const mentors1 = {
    ts: 'Mesba',
    redux: 'Mir',
    dbms: 'Mizan'
}
const mentors2 = {
    prisma : 'Fir',
    next: 'Tanmoy',
    cloud: 'Nahid'
}

const mentorList = {
    ...mentors1,
    ...mentors2
}


// rest operator
const greetFriends = (...friends:string[]) =>{
    //console.log(`Hi ${frnd1} ${frnd2} ${frnd3}`)
    // jehetu array ty foreach use korte hobe
    friends.forEach((friend:string) => {
        console.log(`Hi ${friend}`)
    });

}

greetFriends("abul","babul", "Kabul", "bulbul");
}