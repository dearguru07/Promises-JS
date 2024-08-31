// console.log('One line')
// console.log('Two line')

// const myPromise=new Promise((resolve,reject)=>{
//     resolve()
//     console.lo('Three line')

// })
// myPromise.then(()=>{
//     console.log('Four line')
//     console.log('Five line')
//     console.log('six line')
//     console.log('seven line')
// }).catch(()=>{
//     console.log('rejected code')
// })



// console.log("Amar");
// console.log("Baasha");


// const newPromise = new Promise((resolve, reject) => {
//   resolve();
//   console.l("charan");
// });
// newPromise.then(() => {
//   console.log("Dinesh");
//   console.log("Eshwar");
//   console.log("Faruk");
//   console.log("Guru");
// }).catch(()=>{
//     console.log('rejected code....//')
// })



// console.log("amar")
// console.log("baasha")
// console.log("charan")



// let myPromise=new Promise((resolve,reject)=>{
//     reject()
//     console.l("dinesh")
// })
// myPromise.then(()=>{
//     console.log("eshwar")
//     console.log("faruk")
//     console.log("Guru")
// }).catch(()=>{
//     console.log("Harii, it is errror code")
// })


// function Download(){
//     console.log('clickedd the download btn')
//     console.log('establised to network')
//     let myPromise=new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log('file is load and feacth to the sever')
//             resolve()
//         },5000)
//     })
//     myPromise.then(()=>{
//         console.log('file will store in local device')
//     }).catch(()=>{
//         console.log('network colabeshed')
//     })

// }
// Download()


// function Data(){
//     fetch('')
    
// }


// function outerFunction(){
//     let ouerVar='im outer function'
//     function innerFunction(){
//         console.log(ouerVar)
//     }
//     return innerFunction
// }
// const res=outerFunction()
// res()



// let array=[0,41,45,1,2,3,4,5,6,7,8]
// let res=array.slice(2,7)
// let ress=array.splice(2,2,'guru','hari')
// console.log(res)
// console.log(ress)
// console.log(array)


console.log('one')
console.log('two')


let myPromise=new Promise((resolve,reject)=>{
    resolve()
    console.log('three')
    console.lo('four')
})
myPromise.then(()=>{
    console.log('five')
    console.log('sixx')
    console.log('seven')
}).catch(()=>{
    console.log('error is occured')
})