let cost = document.getElementById("cost");
let total = document.getElementById("totalCost");

function leaveChange() {
  if (document.getElementById("leave").value === "ont") {
    total_cost = parseFloat(cost.value) * parseFloat(1.13);
    total.innerHTML = total_cost;
  } else if (document.getElementById("leave").value === "que") {
    total_cost = parseFloat(cost.value) * parseFloat(1.15);
    total.innerHTML = total_cost;
  } else if (document.getElementById("leave").value === "alb") {
    total_cost = parseFloat(cost.value) * parseFloat(1.05);
    total.innerHTML = total_cost;
  }  else if (document.getElementById("leave").value === "sas") {
    total_cost = parseFloat(cost.value) * parseFloat(1.11);
    total.innerHTML = total_cost;
    } 
}

