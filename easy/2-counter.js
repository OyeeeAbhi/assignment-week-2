let i = 0;
function print(){
    console.clear();
    console.log(i++);
    setTimeout(print , 1000);
}
print();