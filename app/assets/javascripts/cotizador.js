// Cost variables, no decimals, multiply by 100

// Modules - obtain this info from the g docs

var baseCost = 109362
var stackerCost = 93450
var baseAddCost = 22406
var stackerAddCost = 20190
var riegoCost =  448169

var profitPercentage = 36; // as percentage

function cotizar() {
  var calc = document.getElementById('ecot');
  var height = calc.h.value * 100; //convert to cm
  var base = calc.b.value * 100; //convert to cm
  var usd = calc.d.value

  var adjustH = height - 15;
  var adjustB = adjust_base(base);

  var columnNumbr = adjustB / 20;
  var columnHeight = Math.floor(adjustH / 16) - 1;

  var yeeNumbr = columnNumbr * columnHeight;
  var baseNumbr = Math.floor(columnNumbr / 5); // Number of base modules
  var baseAddNumbr = columnNumbr % 5; // Number of base add on modules

  var baseYee = baseNumbr * 25 + baseAddNumbr * 5;
  var remainderYee = yeeNumbr - baseYee;

  var stackerNumbr = Math.floor(remainderYee / 30); // Number of stacker modules

  var stackerYee = stackerNumbr * 30; 
  var remainderYee2 = remainderYee - stackerYee; 

  if (remainderYee2 > 24) {
    stackerNumbr = stackerNumbr + 1;
    stackerAddNumbr = 0;
  } else {
    var stackerAddNumbr = Math.ceil(remainderYee2 / 6); // Number of stacker add on modules
  }

  var costMxn = (baseNumbr * baseCost) + (baseAddNumbr * baseAddCost) + (stackerNumbr * stackerCost) + (stackerAddNumbr * stackerAddCost) + riegoCost;
  var profit = costMxn * profitPercentage / 100;

  var priceMxn = costMxn + profit;

  var area = (height*base); // this value is in square cm

  

  if (validateFormOnSubmit(ecot)) {
    calc.a.value = area/10000; // display de area in square meters
    calc.priceMxn.value = format2(priceMxn / 100, "$");
    calc.priceMMxn.value = format2((priceMxn / 100) / (area / 10000), "$");
    calc.priceMxnIva.value = format2((priceMxn * 1.16) / 100, "$");
    calc.priceMMxnIva.value = format2((priceMxn * 1.16 / 100) / (area / 10000), "$");

    calc.priceUsd.value = format2(priceMxn / usd / 100, "$");
    calc.priceMUsd.value = format2((priceMxn / usd / 100) / (area / 10000), "$");

    screen_text();
    document.getElementById("invoicer").className = "span6";


    document.getElementById('base').value = base / 100;
    document.getElementById('height').value = height / 100;
    document.getElementById('area').value = area / 10000;
    document.getElementById('priceMxn').value = format2(priceMxn / 100, "$");

  }

  return false;

}


function adjust_base(base) {
  if (base % 20 >= 10 ) {
    adjustB = base - (base % 20);
  } else {
    adjustB = base - (base % 20) - 20;
  }
return adjustB
}

function format2(n, currency) {
    return currency + " " + n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
}

function screen_text() {
  document.getElementById("box").innerHTML = '*El precio incluye: Módulos Biani, sustrato y sistema de riego automático.';
  document.getElementById("box2").innerHTML = '*El precio NO incluye: Envío, instalación, plantas.';
}







function validateFormOnSubmit(theForm) {
var reason = "";

  reason += validateEmpty(theForm.b);
  reason += validateEmpty(theForm.h);
      
  if (reason != "") {
    alert("Es necesario ingresar una base y una altura\n" + reason);
    return false;
  }

  return true;
}

function validateEmpty(fld) {
    var error = "";
  
    if (fld.value.length == 0) {
        fld.style.outline = "#FF0000 solid thin"; 
        error = "\n"
    } else {
        fld.style.outline = '#FFFFFF solid thin';
    }
    return error;   
}




