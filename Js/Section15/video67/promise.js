function fetchData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let transaction=true;
            // let transaction=false;
            if(transaction){
                resolve("data fetched successfully..!");
            }else{
                reject("error at data fetching...X");
            }
        },3000);
    });
}

fetchData()
    .then((data)=>{
        console.log(data);
        return "akash"
    })
    .then((value)=>{
        console.log(`hello ${value.toUpperCase()}`);
    })
    .catch((error)=>console.log(error));
