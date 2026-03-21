// Name: Katie Summers
// Description: Dice Rolling Simulation

function toggleDieHold(id){
    // Grab the data active attribute and toggle it;
    let currentStatus = document.getElementById(id).getAttribute("data-active");
    let newStatus = currentStatus==="true"?false:true;
    document.getElementById(id).setAttribute("data-active", newStatus);
    
    // Apply the held class accordingly;
    if(newStatus){
        document.getElementById(id).classList.remove("held");
    }else{
        document.getElementById(id).classList.add("held");
    }
};
function rollDice(){
    // Grab all active dice;
    let allActiveDice = document.querySelectorAll('[data-active="true"]');
    
    // Roll the dice and update src and alt;
    for(let die of allActiveDice){
        let num = Math.floor(Math.random()*6)+1;
        die.setAttribute("src", `images/${num}.png`);
        die.setAttribute("alt", `Die ${num}`);
    };
};