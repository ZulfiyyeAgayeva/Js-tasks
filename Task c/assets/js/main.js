// c. 1 eded daxil edin. Eger o eded 50den kicikdirse o edede qeder 3-e bolunen, 50-100 araligindadirsa o edede qeder 5e bolunen, 100den boyukdurse o edede qeder 8 e bolunen ededlerin sayini ekrana cixardan bir alqoritm yazin.


function netice(Number) {
  var say = 0;
  for (var num = 1; num < Number; num++) {
    if (Number < 50 && num % 3 == 0) {
      say++;
    }
    else if (Number >= 50 && Number < 100 && num % 5 == 0) {
      say++;
    }
    else if (Number >= 100 && num % 8 == 0) {
      say++;
    }
  }
  return say;
}

console.log(netice(prompt()));
