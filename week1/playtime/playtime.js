// var myInt = setInterval(function(){
//     console.log('Test')
// }, 5000);

const demo = "Paul"

function outFunction(outerVar){
    const inside = "George"
    return function innerFunction(innerVar){
        console.log("Demo = " + demo)
        console.log("Inside = " + inside)
        console.log("outterVar = " + outerVar)
        console.log("innerVar = " + innerVar)
    }
}

let newFun1  = outFunction("John")
newFun1("Ringo")
