let asyncAdd = (a,b) => {
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      if(typeof a ==='number' && typeof b ==='number'){
        resolve(a+b);
      }else{ 
        reject('Arugments must be numbers');
      }
    },1500);
  });
};

asyncAdd(5,'7').then((successMessage)=>{
 console.log('success ',successMessage);
 return asyncAdd(successMessage, 33);
}, (errorMessage)=>{
  console.log('error ',errorMessage)
}).then((sucess)=>{
  console.log('should be 45',sucess);
},(error)=>{
  console.log('error',error);
});
/*w
let somePromise = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve('hey it worked');
    resolve();
    reject('was not able to work');
  },2500);
});
somePromise.then((message)=>{
  console.log('Success', message);

},(errorMessage)=>{
  console.log('Error:', errorMessage);
});

*/