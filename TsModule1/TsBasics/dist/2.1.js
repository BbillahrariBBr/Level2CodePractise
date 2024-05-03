{
    //
    var anything = void 0;
    anything = "next level Web development";
    anything = 222;
    // (anything as number).
    // (anything as string).
    var kgToGm = function (value) {
        if (typeof value === 'string') {
            var convertedValue = parseFloat(value) * 1000;
            return " the converted value is ".concat(convertedValue);
        }
        if (typeof value === 'number') {
            return value * 1000;
        }
    };
    var res1 = kgToGm(500);
    var res2 = kgToGm("1000");
    try {
    }
    catch (error) {
        console.log(error.message);
    }
    //
}
