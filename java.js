function mygold(){
    let goldzakat=document.getElementById('zakatvalue').value;
    if (goldzakat>7.5){
        document.getElementById('heading').innerText=goldzakat*120000/40;
    }else{
        document.getElementById('heading').innerText=("Zakat Is not");
    }
}

function mySilver(){
let silverZakat=document.getElementById('zakatamount2').value;
if (silverZakat>52.5){
    document.getElementById('hh').innerText=silverZakat*1500/40;
}else{
    document.getElementById('hh').innerText=("Zakat is not");
}

}

function myCash(){
 let cashZakat= document.getElementById('Cashvalue').value;
 if (cashZakat>50000){
    document.getElementById('gh').innerText= cashZakat/40;
 }else{
    document.getElementById('gh').innerText=("Zakat is not");
 }

}