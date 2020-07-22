¿function init(){
  var starti = document.getElementById("trif");
  var enviar1 = document.getElementById("enviar1");
  var enviar1 = document.getElementById("enviar2");
  var res1 = document.getElementById("math1");
  var res2 = document.getElementById("math2");
  var res3 = document.getElementById("math3");
  var res4 = document.getElementById("math4");
  var res5 = document.getElementById("math5");
  document.getElementById("hide1").style.display = "none";
  document.getElementById("hide2").style.display = "none";
  document.getElementById("hide3").style.display = "none";
  document.getElementById("hide4").style.display = "none";
  document.getElementById("hide5").style.display = "none";
  document.getElementById("punt").style.display = "none";

  starti.onclick = function(e){
    document.getElementById("topo").style.display = "none";
    document.getElementById("hide1").style.display = "block";
    document.getElementById("hide2").style.display = "block";
    document.getElementById("hide3").style.display = "block";
    document.getElementById("hide4").style.display = "block";
    document.getElementById("hide5").style.display = "block";
    window.setTimeout(tiempo, 40000);
  }

  function tiempo(){
    puntajeTotal();
  }

  enviar1.onclick = function(e){
    var res1 = document.getElementById("math1");
    var res2 = document.getElementById("math2");
    var res3 = document.getElementById("math3");
    var res4 = document.getElementById("math4");
    var res5 = document.getElementById("math5");
    if (res1.value > 0, res2.value > 0, res3.value > 0, res4.value > 0, res5.value > 0) {
      puntajeTotal();
    }
    else {
      alert("Tienes que completar todos los problemas");
    }
  }

  function puntajeTotal(){
    var puntaje = document.getElementById("pun");
    var pun = 0;
    var res1 = document.getElementById("math1");
    if (res1.value== "16") {
      var pun = pun + 1;
    }
    var res2 = document.getElementById("math2");
    if (res2.value== "16") {
      var pun = pun + 1;
    }
    var res3 = document.getElementById("math3");
    if (res3.value== "50") {
      var pun = pun + 1;
    }
    var res4 = document.getElementById("math4");
    if (res4.value== "25") {
      var pun = pun + 1;
    }
    var res5 = document.getElementById("math5");
    if (res5.value== "11") {
      var pun = pun + 1;
    }
    document.getElementById("hide1").style.display = "none";
    document.getElementById("hide2").style.display = "none";
    document.getElementById("hide3").style.display = "none";
    document.getElementById("hide4").style.display = "none";
    document.getElementById("hide5").style.display = "none";
    document.getElementById("punt").style.display = "block";

    document.getElementById("pun").innerHTML = "Tu puntaje fue de:&nbsp" +pun;

    if (pun == 5) {
      document.getElementById("men").innerHTML = "Tu nivel matematico es alto";
    }
    if (pun == 4, pun == 3 ) {
      document.getElementById("men").innerHTML = "Tu nivel matematico es intermedio";
    }
    if (pun == 2, pun == 1, pun == 0) {
      document.getElementById("men").innerHTML = "Tu nivel matematico es bajo";
    }
  }
}
