function c (){
    console,log('C');
    return;
}

function b(){
    c();
    setTimeout(()=>{console.log('B');}, 1000);
}

function a (){
    b();
    console.log('A');
    return;
}