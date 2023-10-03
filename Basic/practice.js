
let n=5,p="";
for(let i=1; i <= n; i++) {
    // inner loop for space 
    for(let s=n; s>=i; s--) {
        p += " ";
    }
    for(let c=1; c <=(2*i)-1; c++) {
        p += "*";
    }
    // inner loop for *

    p += "\n";
}
console.log(p);

