function calcular(){
    let q;
    let l;
    let nr;
    let e;
    let di;
    let f;
    let hf;
    let rghid;
    let tempa = parseFloat(document.getElementById("campoTempa").value);
    let kelv;
    let lgu;
    let uc;
    let u;
    let fct;
    let mespa;
    let qt;
    let dint;

    //Viscosidade cinemática da água na lateral
    kelv = tempa + 273.16;
    lgu = (-11.73) + (1828 / kelv) + (0.01966 * kelv) + (-0.00001466 * (kelv ** 2));
    u = (lgu ** 10)/100;
    uc = u * 1000;
    uc = uc.toFixed(5);
    let resultado1 = document.getElementById("resultado");

    resultado1.innerHTML += "Viscosidade Dinâmica: " + uc + " x 10-³ N.s/m² <br>";
    
    //colocar na label14 o resultado: Viscosidade Dinâmica: novoUc x 10-³ N.s/m²

    //massa específica e fator de correção da temperatura FCt na lateral
    fct = ((tempa - 3.983035) ** 2) * (tempa + 301.797) / (522528.9 * (tempa + 69.34881));
    mespa = 1000 * (1 - fct);
    mespa = mespa.toFixed(2);
    let resultado = document.getElementById("resultado");

    resultado.innerHTML+="Massa específica: "+ mespa + " kg/m³ <br>";
    //colocar na label15 o resultado: Massa Específica: novoMespa kg/m³

    //Velocidade da água na tubulação: 

    //Para vazão em m³/h e diâmetro em mm:

}
