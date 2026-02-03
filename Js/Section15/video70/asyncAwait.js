function fetchUserData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let success=true
            if(success){
                resolve({name:'akash' , age:24});
            }else{
                reject(`error blust`);
            }
        },3000);
    });
}

async function getUserData(){
    try{
        console.log('fetching user data');
        const userData=await fetchUserData();
        console.log("data fetched successfully...!");
        console.log(`userData`,userData);
    }catch(error){
        console.log(`error happend during the call`,error);
    }
}

getUserData();