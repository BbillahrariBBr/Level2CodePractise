// reference type  -- object

const user: {
    companyName: 'Phero'; // type --> literal type
    //      ^?
    readonly HName?: string;
    firstName: string;
    midName?: string;
    LastName: string;
    

} = {
    HName: 'Dhaka',
    companyName: 'Phero',
    firstName: 'Md.',
    midName: 'Baki',
    LastName: 'Billah' 
 
}

//user.HName = 'Barishal'