function fetchCreditStatement(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(`Credit Card : credit score 687`);
        },2000)
    })
}

function fetchDebitStatement(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(`Debit Card : 65389`);
        },3000)
    })
}

async function userBankStatement(){
    try {
        console.log(`fetching info ...`);
        console.log(`please wait......`);
        // const credit=await fetchCreditStatement();
        // const debit=await fetchDebitStatement();
        const [credit,debit]=await Promise.all([fetchCreditStatement(),fetchDebitStatement()]);
        console.log('XXX fetching successfull XXX');
        console.log(`Credit Statement :`,credit);
        console.log(`Dedit Statement :`,debit);
    } catch (error) {
        console.log(`something gone wrong`,error);
    }
}

userBankStatement();