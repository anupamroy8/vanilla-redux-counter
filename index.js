let countElm = document.querySelector(".countElm");
let inc = document.querySelector(".inc");
let dec = document.querySelector(".dec");
let reset = document.querySelector(".reset");

//without Redux
// let c =100
// function handlecount(count) {
//   countElm.innerText = count;
// }
// inc.addEventListener("click", () => {
//     handlecount(c++)
// });
// dec.addEventListener("click", () => {
//     handlecount(c--)
// });
// reset.addEventListener("click", () => {
//     handlecount(0)
// });

// With Redux

function reducer(count = 1000, action) {
  switch (action.type) {
    case "inc":
      return (count = count + 1);
    case "dec":
      return (count = count - 1);
    case "reset":
      return (count = 0);
    default:
      return count;
  }
}

let redux = Redux.createStore(reducer);

inc.addEventListener("click", ()=>{
    return redux.dispatch({type: "inc"})
})
dec.addEventListener("click", ()=> {
    return redux.dispatch({type: "dec"})
})
reset.addEventListener("click", ()=>{
    return redux.dispatch({type: "reset"})
})

redux.subscribe(()=> countElm.innerText = redux.getState())

console.log(redux);