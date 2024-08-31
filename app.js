console.log('One line')
console.log('Two line')

const myPromise=new Promise((resolve,reject)=>{
    resolve()
    console.lo('Three line')

})
myPromise.then(()=>{
    console.log('Four line')
    console.log('Five line')
    console.log('six line')
    console.log('seven line')
}).catch(()=>{
    console.log('rejected code')
})



console.log("Amar");
console.log("Baasha");


const newPromise = new Promise((resolve, reject) => {
  resolve();
  console.l("charan");
});
newPromise.then(() => {
  console.log("Dinesh");
  console.log("Eshwar");
  console.log("Faruk");
  console.log("Guru");
}).catch(()=>{
    console.log('rejected code....//')
})



console.log("amar")
console.log("baasha")
console.log("charan")



let myPromise=new Promise((resolve,reject)=>{
    reject()
    console.l("dinesh")
})
myPromise.then(()=>{
    console.log("eshwar")
    console.log("faruk")
    console.log("Guru")
}).catch(()=>{
    console.log("Harii, it is errror code")
})


function Download(){
    console.log('clickedd the download btn')
    console.log('establised to network')
    let myPromise=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('file is load and feacth to the sever')
            resolve()
        },5000)
    })
    myPromise.then(()=>{
        console.log('file will store in local device')
    }).catch(()=>{
        console.log('network colabeshed')
    })

}
Download()


function Data(){
    fetch('')
    
}


function outerFunction(){
    let ouerVar='im outer function'
    function innerFunction(){
        console.log(ouerVar)
    }
    return innerFunction
}
const res=outerFunction()
res()



let array=[0,41,45,1,2,3,4,5,6,7,8]
let res=array.slice(2,7)
let ress=array.splice(2,2,'guru','hari')
console.log(res)
console.log(ress)
console.log(array)


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



let array=[1,2,3,4,5,6,5,2,18,6,9,7,10,52,5,0,3,6,4,2,5,3]
let res=[...new Set(array)]
console.log(res)


function Download(){
    console.log('cliked the downoad btn')
    console.log('connection will establised')
    
    let myPromise=new Promise((resolve,reject)=>{
        setTimeout(()=>{
        console.log('downloading the file, it will take 20mins')
        console.log('file is downloed succesfully')
        resolve()
        },3000)
        
    })
    myPromise.then(()=>{
        setTimeout(()=>{
        console.log('file is stored in ur local divece')
        },1000)
    }).catch('server is down')
}



function Download(){
    let heading=document.getElementById('heading')
    heading.innerHTML='helloo too alll' 
}


var helloo=function newFun(){
    console.log('Namastee...')
}
helloo()

let res=typeof(NaN)
console.log(res)


let res=typeof(undefined)
console.log(res)

let su=null===undefined
console.log(su)


num=5
let res= num>50?'True':'False'
console.log(res)


if (num==1){
    console.log('Tekgu')
}
else if(num==2){
console.log('English')
}
else if(num==5){
    console.log('Hoimfoi')
}

let values=[1,2,3,4,5]
for(i=2;i<values.length;i++){
    console.log(values[i]+values[i])
}

setInterval(()=>{
    console.log('hello to everu')
},1000)

function Download(){
let heading=document.getElementById('over')
    heading.style.background="yellow"
}


let number=[11,2,3,2,1,4,7]
let con=document.getElementById('continer')
function ChangeUI(){
    number.map((x)=>{
        let heading=document.getElementById('headd')
      heading.innerHTML=x
      con.appendChild(heading)
    })
   
}


let object={name:'Guru',age:21}
object['nbr']=934686
console.log(object)

console.log('git pushed too all code......')