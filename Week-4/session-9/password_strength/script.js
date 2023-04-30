

//variants hai 
// check if length of pass is >= 8 
// check if at least one is capital 
// check if substring is in variants



function containsPasswordVariant(str) {
    const passwordVariants = [
        "password",
        "Password",
        "pAssword",
        "paSsword",
        "pasSword",
        "passWord",
        "passwOrd",
        "passwoRd",
        "passworD",
        "PAssword",
        "PaSsword",
        "PasSword",
        "PassWord",
        "PasswOrd",
        "PasswoRd",
        "PassworD",
        "pASsword",
        "paSSword",
        "pasSWord",
        "passWORD",
        "PAssword",
        "PasSword",
        "PassWord",
        "pASsWord",
        "paSsWord",
        "pasSWOrd",
        "PASsword",
        "paSSWord",
        "passWORD",
        "PASsWord",
        "pASSWOrd",
        "PASSword",
        "passwORD",
        "PASsWOrd",
        "PAssWOrd",
        "PASSWOrd",
        "PASSword",
        "passwORd",
        "PASsWORD",
        "PAssWORD",
        "PASSWORd",
        "PASSwOrd",
        "PASSwoRd",
        "PASSworD",
        "PASSWOrd",
        "PASSWOrd",
        "PASSWORd",
        "PASSWORD"
    ];

    for (let i = 0; i < passwordVariants.length; i++) {
        if (str.includes(passwordVariants[i])) {
            return true;
        }
    }
    return false;
}


function hasCapitalLetter(str) {
    return /[A-Z]/.test(str);
}



function hasEightLetters(str) {
    if (str.length >= 8) {
        return true
    } else {
        return false
    }
}

function isStrongPassword(str) {
    a = containsPasswordVariant(str)
    b = hasCapitalLetter(str)
    c = hasEightLetters(str)

    if (!a && b && c) {
        console.log("True")
        return true
    } else {
        console.log("False")
        return false
    }
}


str = "qwertyQp123"
isStrongPassword(str)






