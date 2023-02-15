let counterElement = document.getElementById("counter");
function increaseNum(){
    let previouscounterElement=counterElement.textContent;
    let updatedcounterElement=parseInt(previouscounterElement)+1;
    counterElement.textContent=updatedcounterElement;
    if(updatedcounterElement < 0){
        document.getElementById("counter").style.color="red";
    }
    else if(updatedcounterElement > 0){
        document.getElementById("counter").style.color="green";
    }
    else
    document.getElementById("counter").style.color="black";
}
function decreaseNum(){
    let previouscounterElement=counterElement.textContent;
    let updatedcounterElement=parseInt(previouscounterElement)-1;
    counterElement.textContent=updatedcounterElement;
    document.getElementById("counter").style.color="red";
    
    if(updatedcounterElement < 0){
        document.getElementById("counter").style.color="red";
    }
    else if(updatedcounterElement > 0){
        document.getElementById("counter").style.color="green";
    }
    else
    document.getElementById("counter").style.color="black";
}
function resetNum(){
    let previouscounterElement=counterElement.textContent;
    let updatedcounterElement=0;
    counterElement.textContent=updatedcounterElement;
}