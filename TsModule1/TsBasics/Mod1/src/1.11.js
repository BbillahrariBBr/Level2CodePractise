"use strict";
{
    //ternary, optional, nullish coalescing operator
    // install - npm i -g ts-node-dev
    // tsnd --respawn server.ts
    //ts-node-dev --respawn --transpile-only server.ts
    const age = 18;
    // if(age>=18)
    //     {
    //         console.log("adult")
    //     }
    //     else{
    //         console.log("non Adult")
    //     }
    const isAdult = age >= 18 ? "Adult" : "Child";
    console.log(isAdult);
    //nullish coalescing oper
    // null / undefined --> decission amking
    const isAuthenticated = null;
    const res1 = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : "Guest";
    console.log(res1);
    //
}
