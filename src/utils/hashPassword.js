import argon2 from "argon2";

export const argonHashPassword = async (password)=>{
    let hash = await argon2.hash(password);
    return hash;
}

export const argonVerifyPassword = async (hash, password)=>{
    const valid = await argon2.verify(hash,password);
    return valid;
};


// NOTE=" Argon2 is used instead of bcrypt becoz it contains deprecated dependencies"









// import readline from "readline";
// const password = "12345678"
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });
//   (async ()=>{
    //     let hash = await argonHashPassword(password)
    //     console.log("Hashed Password  --> ",hash)
        
    //     rl.question('Enter Password? ', async (inputPassword) => {
    //         rl.close();
    //         const valid = await argonVerifyPassword(hash,inputPassword)
    //         console.log("Authentication ",valid)
    //     });
    //     // console.log("Input Password Is\n",inputPassword)
    
    // })();
    
    
    // // let verified = argonVerifyPassword()
    