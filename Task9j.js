let  myObj = {
    type: "number",
    detail: {
        test: {
            type: "number",
            
            def: {
                type: "number"
            }
        },
        type: 'number'
    },
    number: {
        type: 'number'
    },
    age: {
        type: "number"
    },
    name: {
        type: "number"
    }
};

function fun(obj){
 return Object.keys(obj).map((e)=> {
 if(obj[e]===obj.type){
    obj[e]='string'
    return obj
 }
 fun(obj[e]) 
 })
       

}
         

let x=fun(myObj)


console.log(x)