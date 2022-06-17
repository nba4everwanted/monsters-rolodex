const prom = new Promise((res, rej) => {
     if(true){
         setTimeout(()=>{
             res('Trans Successfull')
         }, 4000)
     }else{
         rej('Transaction failes')
     }
})

prom.then(val => console.log(val))
.catch(val => console.log(val))