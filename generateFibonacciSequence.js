let fibGenerator = function*(){
    let a = 0
    let b = 1;

    // loop condition initially true
    while(true){
        yield a;
        [a, b] = [b, a + b]
    }
    

}