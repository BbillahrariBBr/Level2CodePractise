{
// object destructuring

const user ={

    id : 345,
    name:{
        firstName: 'Nannu',
        middleName: 'Khan',
        LastName: 'kichuna'
    },
    cno:'0123465233',
    address: "Uganda"
};
const {cno,name:{middleName: midName}} = user;


// array destructuring
const myFriends = ["Charli", "Joye", "Ross", "Rachel", "Monica"]
const [,,bestF, ...rest] = myFriends
}