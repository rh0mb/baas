// Cost variables, no decimals, multiply by 100

// Plastic
var priceyeehhm75 = 2400;
var yeehhm75;

var teehh75 = 2456;
var abra75 = 690;

var plastic;

// Irrigation
var ezflow = 250000;
var orbitController = 62000;
var electroValve = 33000;
var filtro = 35000; 

var riego;


// Assembly



// Packaging



//Extras
var sustrato = 500; //substrate per yee
var nutes = 0; 
var pag = 4000; //per meter




var profit = 25 // as percentage
var pricemxn;



function calculate() {
  var calc = document.getElementById('ecalc');
  var h = calc.h.value * 100; //convert to cm
  var b = calc.b.value * 100; //convert to cm

  var a = (h*b);

  calc.a.value = a/10000;

  yeehhm75 = (((h - 30 - 10)/16) * (b/20)) * priceyeehhm75 ; // calculate the number of yee hhm needed and x price

  
  riego = ezflow + orbitController + electroValve + filtro;
  
  pricemxn = (yeehhm75 + riego)*(100+profit)/100;

  calc.pricemxn.value = '$ ' + (pricemxn/100).toFixed(2);
  calc.priceMmxn.value = '$ ' + ((pricemxn/100) / (a/10000)).toFixed(2);

  return false;

}