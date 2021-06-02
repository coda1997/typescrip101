const names = ["Alice", "Bob", "Eve"];

names.forEach(function (s) {
    console.log(s.toLocaleUpperCase())
});


function callee(pt: { x: number, y: number }) {
    console.log(pt.x);
    console.log(pt.y);
}
//using comma to assgin properties
callee({ x: 1, y: 2 });

//Optional properties
function callop(pt: {x: number, y?:string}){
    console.log(pt.x);
    // console.log(pt.y);
    if(pt.y!==undefined){
        console.log(pt.y);
    }
    console.log(pt.y?.toLocaleLowerCase());
    
}

callop({x:1,y:"hello"})
callop({x:1})