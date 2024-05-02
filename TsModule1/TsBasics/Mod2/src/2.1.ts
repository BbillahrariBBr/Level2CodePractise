{
//
let anything : any;
anything = "next level Web development";
anything = 222;
// (anything as number).

// (anything as string).

const kgToGm = (value: string | number):string|number|undefined =>{
    if(typeof value === 'string'){
        const convertedValue = parseFloat(value)*1000
        return ` the converted value is ${convertedValue}`
    }

    if(typeof value === 'number')
        {
            return value*1000
        }
}

const res1 = kgToGm(500) as number
const res2 = kgToGm("1000") as string

type CustomError = {
    message:string
}

try {
} catch (error) {
    console.log((error as CustomError).message );
}
//

}