 function SumarV() {
    ia = parseInt(document.getElementById('ia').value);
    ja = parseInt(document.getElementById('ja').value);
    ib = parseInt(document.getElementById('ib').value);
    jb = parseInt(document.getElementById('jb').value);
    var u = [ia, ja];
    var v = [ib, jb];
    var r = new Array();
    u.forEach( (a,b) => {
    r.push(Number(a)+Number(v[b])) 
    } )
    var x = r[0];
    var y = r[1];
    console.log(x, y);
    var suma = (Math.sqrt((x**2 + y**2)));
    suma = parseFloat(suma.toFixed(4));
    var tan = Math.atan(y / x);
    var angulo = tan * 180 /Math.PI;
    angulo = parseFloat(angulo.toFixed(4));
    res = document.getElementById("r");
    res.innerHTML = "r = " + suma +"<sub>u, </sub>"+ angulo+"°";
}
function dibujar (){
    var contexto = document.getElementById("canvas").getContext("2d");
}