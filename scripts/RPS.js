let pocetOpakovani=prompt("nhap so lan choi");
let pocW=0,pocL=0,pocD=0;
for(let i=0;i<pocetOpakovani;++i){
    let you=prompt("nhap keo, giay, bua: ");
    while(you!="keo" && you!="giay" && you!="bua"){
        you=prompt("nhap lai keo, giay, bua: ");
    }
    let computer= Math.floor(Math.random()*(2-0+1)+0);

    if (computer==0){
        computer="keo";
    }
    else if (computer==1){
        computer="giay";
    }
    else if(computer==2){
        computer="bua";
    }
    if (you==computer){
        alert("Draw");
        ++pocD;
    }
    else{
        if (you=="keo"){
            if (computer=="giay") {
                alert("you win!Computer chose "+computer);
                ++pocW;
            }
            else {
                alert("lose. Computer chose "+computer);
                ++pocL;
            }
        }
        else if(you=="giay"){
            if (computer=="bua") {
                alert("you win!Computer chose "+computer);
                ++pocW;
            }
            else{
                alert("lose. Computer chose "+computer);
                ++pocL;
            }
        }
        else {
            if(computer=="keo") {
                alert("you win!Computer chose "+computer);
                ++pocW;
            }
            else {
                alert("lose. Computer chose "+computer);
                ++pocL;
            }
        }
    }
}
function getResult(){
    alert("Win: "+pocW+" Lose: "+pocL+" Draw: "+pocD);
}