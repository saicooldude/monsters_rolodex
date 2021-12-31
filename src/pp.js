

const promise=new Promise((resolve,reject)=>{
    // setTimeout(()=>{resolve('i have succeeded')},1000);
    
    if(false)
    {
        resolve('I have succeeded');

    }
    else{
        reject('I am not succeeded');
    }
  
    



});


promise.then(value=>console.log(value)).catch(rejectedvalue=>console.log('Rejected value'));