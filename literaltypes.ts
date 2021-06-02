function callee(x:number, align: "left"|"right"|"ceter"){
    console.log(x);
    console.log(align);
}

callee(1,"left")
//throw an error, cause botton are not the type of align
// callee(2,"botton")

const req = {url:"www.xxx.com", method:"Get"}

req.method = "happy"

