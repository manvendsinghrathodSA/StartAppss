// //🧑‍💻 Coding Challenge 1
// Write an arrow function createMessage that takes an object {name, age, city} with a default age of 25. Use destructuring in the parameter, and return a template literal:
// "Hello, I am <name>, <age> years old from <city>."
// Call it with {name: 'Sita', city: 'Delhi'} and log the result.


// const obj = {
//     name: "ram",
//     age:20,
//     city:"dewas"

// }

//   const {name , age, city} = obj;

// const creatMessage = ({name,age = 25 ,city}) =>{
//     console.log(`Hello, I am ${name}, ${age} years old from ${city}`)
// }

// creatMessage(name,age,city);

// .............................................................................................
//  this


// function heyy(){
//     console.log(this)
// }

// heyy();

// const user ={
//     name:"ram",
//     age:26,
//     tag:[1 ,2 , 3,4,5],
//     fun (){
//         this.tag.forEach( (tags)=>{
//            console.log(tags , this.name);
//         },this)
//         // console.log(this)
//     }
// }
// user.fun();


//........................................................................


// const nam = function nam1(){
//     console.log("rammm")
// nam1();
// }
// nam();

// var name = () => console.log("eammmmmmmmmm");
// name();

//.................................................................

// bind/call/apply

//with the help of bind method me can do funtion browing


// let nam = {
//     name:"harsh",
//     surname:"sharma"
// }
// let nam2 ={
//     name:"raj",
//     surname:"ksjf"
// }

//  function data (){
//     console.log(this.name +" " + this.surname)
// }

// data.call(nam2);


//.............................................................

//closer 

// function count(){
//     let number = 0;

//     return{
//     incress: function (){
//       number ++;
//       console.log(number);
      
//     },
//     dicress: function (){
//       number --;
//       console.log(number);
      
//     },
//     show: function (){
//       return number;
      
//     }
    
// };
// }
// const counter = count(); 
// counter.incress();

// counter.incress();

// console.log(counter.show());


//.............................................................................................

// promise


// const data = new Promise(
//     function data(resolve,reject){
// console.log("insode data...");
//  if(0){
//    resolve();
//  }else{
// reject();
//  }
//     }
// )

// data.then(()=>{ console.log("done");}).catch(()=>{console.log("not done");})


// function select_item(){

//   return  new Promise (
// (resolve, reject) =>{
//      console.log("selecting items");
//         setTimeout(()=> {
//             console.log("selected");
//             resolve();
//         },2000)}
//     )

// }
// function addtoCard(){
//  return new Promise (
// (resolve, reject) =>{
//      console.log(" adding to card"); 
//         setTimeout(()=> {
//             console.log(" added");
//             resolve();
//         },2000)}
//         )
// }

// function buyNow(){
// return new Promise (
// (resolve, reject) =>{
//     console.log("Buying now");
//         setTimeout(()=> {
//             console.log("Buying done");
//             resolve();
//         },2000)}
//         )
// }
// function Payment(){
// return new Promise (
// (resolve, reject) =>{
//             console.log(" going for Payment");
//         setTimeout(()=> {
//             resolve();
//         },2000)}
//         )
// }

// select_item()
// .then(addtoCard)
// .then(buyNow).
// then(()=>{ console.log("Payment done............");})
// .catch(()=>{
//     console.log("Payment declined");
// })


//.............................

//async and await

// let url ="https://jsonplaceholder.typicode.com/todos/1"

// async function getData() {
//    const response = await fetch(url);
//    const data = await response.json();

//    console.log(data);
// }

// getData();

//..............................................


// async function getData(){
//    try{
//       const response = await fetch(url);

//       const data = await response.json();

//       console.log(data);

//    }catch(error){

//       console.log(error);

//    }
// }

// getData();

