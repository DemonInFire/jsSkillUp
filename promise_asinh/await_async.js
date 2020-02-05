async function getAfter() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() =>{
            if(Math.random() >= 0.5){
                resolve("You are lucky today!")
            }
            else{
                reject("Stay home today")
            }
        }, 1000)
    })
    let result = await promise
    console.log(result)
}
getAfter()