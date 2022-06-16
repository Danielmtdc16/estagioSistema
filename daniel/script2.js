function ComboBox4_Change(){
    var ComboBox4 = document.getElementById("comboBox4");
    var Label24 = document.getElementById("Label24");
    var ComboBox3 = document.getElementById("ComboBox3");

    if(ComboBox4.value = "PEBD"){
        Label24.value = "Polietileno de Baixa Densidade"
        ComboBox3.Value = "0.0015"
    }

    if(ComboBox4.value = "PVC"){
        Label24.value = "Penta Cloreto de Vinila"
        ComboBox3.Value = "0.08"
    }
    if(ComboBox4.value = "AZDº"){
        Label24.value = "Aço Zincado com Costura"
        ComboBox3.Value = "0.15"
    }
}



function CommandButton1_Click(){
    let Q, L, NR, e, Di, f, hf, RgHid, Tempa, Kelv, Lgu, Uc, u, Fct, mespa, QT, Dint;
    
    var TextBox5 = document.getElementById("TextBox5");
    var TextBox7 = document.getElementById("TextBox7");
    var ComboBox3 = document.getElementById("ComboBox3");
    var ComboBox1 = document.getElementById("ComboBox1");
    var TextBox10 = document.getElementById("TextBox10");
    var Label14 = document.getElementById("Label14");
    var OptionButton1 = document.getElementById("OptionButton1");
    var OptionButton2 = document.getElementById("OptionButton2");
    var TextBox9 = document.getElementById("TextBox9");
    var TextBox8 = document.getElementById("TextBox8");
    var TextBox4 = document.getElementById("TextBox4");
    var TextBox6 = document.getElementById("TextBox6");
    var TextBox1 = document.getElementById("TextBox1");
    var Label12  = document.getElementById("Label12");
    var Label9  = document.getElementById("Label9");
    var Label22 = document.getElementById("Label22");
    var Label15 = document.getElementById("Label15");

    Q = parseFloat(TextBox5.value);
    L = parseFloat(TextBox7.value);
    e = parseFloat(ComboBox3.value);
    Di = parseFloat(ComboBox1.value);
    Tempa = parseFloat(TextBox10.value);

//viscosidade cinemática da água na lateral
    
    Kelv = Tempa + 273.16;
    Lgu = (-11.73) + (1828 / Kelv) + (0.01966 * Kelv) + (-0.00001466 * (Math.pow(Kelv, 2)));
    u = ((Math.pow(10,Lgu)) / 100).toFixed(5);
    Uc = u * 1000;
    Label14 = "  Viscosidade dinâmica:  " + Uc + " x 10-³ N.s/m²";
    
//massa específica e fator de correção da temperatura FCt na lateral
     
    Fct = ((Tempa - 3.983035) ^ 2) * (Tempa + 301.797) / (522528.9 * (Tempa + 69.34881));
    mespa = (1000 * (1 - Fct)).toFixed(2);
    Label15 = "  Massa específica:  " + mespa + " kg/m³";
 
//Velocidade da água na tubulação:

 //Para vazão em m³/h e diâmetro em mm
    
    if (OptionButton1.checked) {
        TextBox9.value = ((353.67765 * Q / (Math.pow(Di, 2)))).toFixed(2);
    }
    
  //Else
  
//Para vazão em L/h e diâmetro em mm

    else if (OptionButton2.checked){
        TextBox9.value = (Q / (2.8274 * Math.pow(Di, 2))).toFixed(2);
    }
 
//Nº de Ryenolds
  
    TextBox1.value = (mespa * parseFloat(TextBox9.value) * Di / Uc).toFixed(1);
   
//Rugosidade hidráulica
   
    TextBox8.value = (Math.pow(parseFloat(TextBox1.value), 0.9) * e / Di).toFixed(2);
    
    if (TextBox1.value < 2000 && OptionButton1.checked){
        f = 64 / TextBox1.value;
        TextBox4.value = f.toFixed(4);
        Label12 = "Hagen-Poiseuille";
        TextBox6.value = (11.536 * Math.pow(10, 8) * u / mespa * Q * L / (Math.pow(Di, 4))).toFixed(2);
        Label22 = "Fluxo Laminar";
        Label9 = "";
    
    } else if (TextBox1.value < 2000 && OptionButton2.checked){
        f = 64 / TextBox1.value;
        TextBox4.value = f.toFixed(4);
        Label12 = "Hagen-Poiseuille";
        TextBox6.value = (11.536 * Math.pow(10, 5) * u / mespa * Q * L / (Math.pow(Di, 4))).toFixed(3);
        Label22 = "Fluxo Laminar";
        Label9 = "";
        
    } else {
        Er = 0.001
        oldf = 1
        deltaf = oldf
   
        while (Math.abs(deltaf / oldf) >= Er){

            Newf = 1 / (Math.pow((-2 * Math.log(e / (3.7 * Di) + 2.51 / (TextBox1.value * Math.sqrt(oldf))) * 0.434294482), 2));
            deltaf = Newf - oldf;
            oldf = Newf;
        }

        f = oldf;
        TextBox4.value = f.toFixed(4);
                                    
        //Cálculo do fator f e da perda de carga utilizando a equaçâo de Blasius
        
        //Para vazão em m³/h e diâmetro em mm
        
        if ((TextBox1.value >= 3000) && (TextBox1.value <= 100000) && (OptionButton1.checked) && (TextBox8.value <= 31)){
                
            f = 0.316 / (Math.pow((TextBox1.value), 0.25));
            TextBox4.value = f.toFixed(4);
            TextBox6.value = (2.6125 * Math.pow(10, 6) * Math.pow((u / mespa), 0.25) * Math.pow(Q, 1.75) * L / (Math.pow(Di, 4.75))).toFixed(4);
            Label12 = "Blasius";
            Label22 = "Fluxo Turbulento";
            Label9 = "&  Tubo Hidraulicamente Liso";
                    
        }
        
        if ((TextBox1.value >= 3000) && (TextBox1.value <= 100000) && (OptionButton1.checked) && (TextBox8.value > 31 && TextBox8.value < 448)){
            TextBox6.value = (6.376 * Math.pow(10, 6) * TextBox4.value * Math.pow(Q, 2) * L / Math.pow(Di, 5)).toFixed(2);
            Label12 = "Colebrook";
            Label22 = "Fluxo Turbulento";
            Label9 = "&  Tubo Hidraulicamente misto";
        }
        
        //Para vazão em L/h e diâmetro em mm
        
        if ((TextBox1.value >= 3000) && (TextBox1.value <= 100000) && (OptionButton2.checked) && (TextBox8.value <= 31)){
            f = 0.316 / (Math.pow(TextBox1.value, 0.25));
            TextBox4.value = f.toFixed(4);
            TextBox6.value = (14.69 * Math.pow((u / mespa), 0.25) * Math.pow(Q, 1.75) * L / (Math.pow(Di, 4.75))).toFixed(4);
            Label12 = "Blasius";
            Label22 = "Fluxo Turbulento";
            Label9 = "&  Tubo Hidraulicamente Liso";
        }
            
        //If TextBox8.Text <= 31 Then
            
            //Label9 = "&  Tubo Hidraulicamente Liso"
            
        //End If
        
        //Cálculo do fator f pela equação de Colebrook utilizando a equaçâo de Darcy
                                
        //Para vazão em m³/h e diâmetro em mm
        
        if ((TextBox1.value > 100000) && (OptionButton1.checked) && (TextBox8.value > 31) && (TextBox8.value < 448)){

            TextBox6.value = (6.376 * 10 ^ 6 * TextBox4.value * Math.pow(Q, 2) * L / (Math.pow(Di, 5))).toFixed(2);
            Label12 = "Colebrook";
            Label22 = "Fluxo Turbulento";
            Label9 = "&  Tubo Hidraulicamente misto";
                    
        }            
        //Para vazão em L/h e diâmetro em mm
        
        if ((TextBox1.value > 100000) && (OptionButton2.checked) && (TextBox8.value) > 31  && (TextBox8.value < 448)){
            TextBox6.value = (6.376 * TextBox4.Text * Math.pow(Q, 2) * L / (Math.pow(Di, 5))).toFixed(2);
            Label12 = "Colebrook";
            Label22 = "Fluxo Turbulento";
            Label9 = "&  Tubo Hidraulicamente misto";
                    
        }
            
        //If TextBox8.Text > 31 And TextBox8.Text < 448 Then
            
            //Label9 = "&  Tubo Hidraulicamente misto"
            
        //End If
            
        if (TextBox8.value > 448){
            Label9 = "&  Tubo Hidraulicamente rugoso";
        }
              
    }
}

function Frame2_Click(){

}

function OptionButton1_Click(){

    if (OptionButton1.value == true){
        TextBox5.SetFocus;
    }
}

function OptionButton2_Click(){

    if (OptionButton2.value == true){
        TextBox5.SetFocus;
    }
}

function TextBox9_Change(){

}

function UserForm_Initialize(){
    //Diâmetro interno de tubos de PEBD e PVC
    ComboBox1.innerHTML = "5.3 <br>";
    ComboBox1.innerHTML = "13 <br>";
    ComboBox1.innerHTML = "13.6 <br>";
    ComboBox1.innerHTML = "16 <br>";
    ComboBox1.innerHTML = "20.6 <br>";
    ComboBox1.innerHTML = "26.9 <br>";
    ComboBox1.innerHTML = "35.7 <br>";
    ComboBox1.innerHTML = "48.1 <br>";
    ComboBox1.innerHTML = "72.5 <br>";
    ComboBox1.innerHTML = "97.6"; //acrescentar novos diâmetros
    //Rugosidade absoluta de tubos de PEBD e PVC
    ComboBox3.innerHTML = "0.0015 <br>";
    ComboBox3.innerHTML = "0.08 <br>";
    ComboBox3.innerHTML = "0.15";
    //Material dos tubos
    ComboBox4.innerHTML = "PEBD <br>";
    ComboBox4.innerHTML = "PVC <br>";
    ComboBox4.innerHTML = "AZDº";
}