// Cost variables, no decimals, multiply by 100

// Plastic
var priceyeehhm75 = 2400;
var priceteehhh75 = 2456;
var priceabra75 = 690;
var pricetapa75 = 754;
var pricetubo75 = 13824; //6 meters
var pricereduct75to50 = 847;
var pricereduct50to40 = 470;

// Irrigation
var ezflow = 250000;
var backflowvalve = 20000;
var orbitController = 62000;
var electroValve = 33000;
var filtro = 35000; 
var pricevinyl = 700 // per meter
var pricedripper4gph = 1000;
var pricedripline = 0;// ab

//Extras
var pricesustrato = 300; //substrate per yee
var pricenutes = 90000; //per 25kg bag
var pricedrains = 500; // the drains that preven the sustrate from going down to the drain tube

// Assembly
// Considered in the salary of a hany man

// Packaging - ESTIMATED CORROBORATE!!
var pricemodulebox = 6000; // one meter per box
var priceriegobox = 2500; // one per wall, includes the irrigatio stuff
var priceextrabox = 1500; // for nutes and anything else
var pricenutebag = 600;
var pricesustratepack = 1000; // calculated for meter, using heavy plastic and sturdy tape.
// SUSTRATE SHOULD TRAVEL INSIDE THE TUBES


// Calculated for 80 meters per month
var pag = 3800; //per meter
var office = 8800; //per meter
var wages = 33800; //per meter
var fixed;

var profit = 20 // as percentage
var pricemxn;



function cotizar() {
  var calc = document.getElementById('ecot');
  var h = calc.h.value * 100; //convert to cm
  var b = calc.b.value * 100; //convert to cm

  var a = (h*b);

  calc.a.value = a/10000;



  // Calculating number of plastic parts and cost
  var yeehhm75 = (((h - 30 - 10)/16) * (b/20)) * priceyeehhm75; // calculate the number of yee hhm needed and x price
  var teehhh75 = (b/20) * priceteehhh75; 
  var abra75 =  ((h/100)*2) * priceabra75;
  var tapa75 = (((b/20) * 5) + 1) * pricetapa75;
  var tubo75 = pricetubo75 / 10; //you can make 12 meters of wall at 5 per meter. Minus two to consider waste
  var reduct75to50 = pricereduct75to50;
  var reduct50to40 = pricereduct50to40;

  var plastic = yeehhm75 + teehhh75 + abra75 + tapa75 + tubo75 + reduct75to50 + reduct50to40;
  
  // Calculating irrigation
  var vinyl = (b/100) * pricevinyl;
  var drippers = (b/100) * pricedripper4gph;

  var riego = ezflow + backflowvalve + orbitController + electroValve + filtro + vinyl + drippers;


  // Adding extras
  var sustrato = (((h - 30 - 10)/16) * (b/20)) * pricesustrato;
  var nutes = (9/25) * pricenutes; //each wall gets 4.5 kg, enough for two fills 
  var extras = sustrato + nutes;

  //Adding packaging
  var modulebox = (a/10000) * pricemodulebox;
  var riegobox = priceriegobox;
  var extrabox = priceextrabox;
  var nutebag = pricenutebag * 2;
  var sustratepack = (a/1000) * pricesustratepack;

  var packaging = modulebox + riegobox + extrabox + nutebag + sustratepack;

  // Adding fixed costs
  fixed = pag + office + wages;


  // Calculating total project price
  pricemxn = (plastic + riego + extras + packaging + fixed)*(100+profit)/100;

  calc.pricemxn.value = '$ ' + (pricemxn/100).toFixed(2);
  calc.priceMmxn.value = '$ ' + ((pricemxn/100) / (a/10000)).toFixed(2);

  return false;

}




