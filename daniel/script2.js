function ComboBox4_Change(){
    var ComboBox4 = document.getElementById(id);
    var Label24 = document.getElementById(id);
    var ComboBox3 = document.getElementById(id);

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
    
    var TextBox5 = document.getElementById(id);
    var TextBox7 = document.getElementById(id);
    var ComboBox3 = document.getElementById(id);
    var ComboBox3 = document.getElementById(id);
    var TextBox10 = document.getElementById(id);
    var Label14 = document.getElementById(id);
    var OptionButton1 = document.getElementById(id);
    var OptionButton2 = document.getElementById(id);
    var TextBox9 = document.getElementById(id);
    var TextBox8 = document.getElementById(id);
    var TextBox4 = document.getElementById(id);
    var TextBox6 = document.getElementById(id);
    var TextBox1 = document.getElementById(id);
    var Label12  = document.getElementById(id);
    var Label9  = document.getElementById(id);

    Q = Val(TextBox5.value);
    L = Val(TextBox7.value);
    e = Val(ComboBox3.value);
    Di = Val(ComboBox3.value);
    Tempa = Val(TextBox10.value);

//viscosidade cinemática da água na lateral
    
    Kelv = Tempa + 273.16;
    Lgu = (-11.73) + (1828 / Kelv) + (0.01966 * Kelv) + (-0.00001466 * (Kelv ^ 2));
    u = ((10 ^ Lgu) / 100).toFixed(5);
    Uc = u * 1000;
    Label14 = "  Viscosidade dinâmica:  " & Uc & " x 10-³ N.s/m²";
    
//massa específica e fator de correção da temperatura FCt na lateral
     
    Fct = ((Tempa - 3.983035) ^ 2) * (Tempa + 301.797) / (522528.9 * (Tempa + 69.34881));
    mespa = (1000 * (1 - Fct)).toFixed(2);
    Label15 = "  Massa específica:  " & mespa & " kg/m³";
 
//Velocidade da água na tubulação:

 //Para vazão em m³/h e diâmetro em mm
    
    if (OptionButton1.Value == true){
        TextBox9.Text = ((353.67765 * Q / Di ^ 2)).toFixed(2);
    }
    
  //Else
  
//Para vazão em L/h e diâmetro em mm

    else if (OptionButton2.Value == true){
        TextBox9.value = (Q / (2.8274 * Di ^ 2)).toFixed(2);
    }
 
//Nº de Ryenolds
  
    TextBox1.value = (mespa * TextBox9.Text * Di / Uc).toFixed(1);
   
//Rugosidade hidráulica
   
    TextBox8.value = ((TextBox1.Text ^ 0.9) * e / Di).toFixed(2);
      
    if (TextBox1.value < 2000 && OptionButton1.value == true){
        f = 64 / TextBox1.value;
        TextBox4.value = f.toFixed(4);
        Label12 = "Hagen-Poiseuille";
        TextBox6.value = (11.536 * 10 ^ 8 * u / mespa * Q * L / (Di ^ 4)).toFixed(2);
        Label22 = "Fluxo Laminar";
        Label9 = "";
    
    } else if (TextBox1.value < 2000 && OptionButton2.value == true){
        f = 64 / TextBox1.value;
        TextBox4.Text = f.toFixed(4);
        Label12 = "Hagen-Poiseuille";
        TextBox6.value = (11.536 * 10 ^ 5 * u / mespa * Q * L / (Di ^ 4)).toFixed(3);
        Label22 = "Fluxo Laminar";
        Label9 = "";
        
    } else {
        Er = 0.001
        oldf = 1
        deltaf = oldf
   
        while (Math.abs(deltaf / oldf) >= Er){

            Newf = 1 / (-2 * Log(e / (3.7 * Di) + 2.51 / (TextBox1.value * Sqr(oldf))) * 0.434294482) ^ 2;
            deltaf = Newf - oldf;
            oldf = Newf;
        }

        f = oldf;
        TextBox4.value = f.toFixed(4);
                                    
        //Cálculo do fator f e da perda de carga utilizando a equaçâo de Blasius
        
        //Para vazão em m³/h e diâmetro em mm
        
        if ((TextBox1.value >= 3000) && (TextBox1.value <= 100000) && (OptionButton1.value = true) && (TextBox8.value <= 31)){
                
            f = 0.316 / (TextBox1.value) ^ 0.25
            TextBox4.value = f.toFixed(4);
            TextBox6.value = (2.6125 * 10 ^ 6 * (u / mespa) ^ 0.25 * (Q ^ 1.75) * L / (Di ^ 4.75)).toFixed(4);
            Label12 = "Blasius";
            Label22 = "Fluxo Turbulento";
            Label9 = "&  Tubo Hidraulicamente Liso";
                    
        }
        
        if ((TextBox1.value >= 3000) && (TextBox1.value <= 100000) && (OptionButton1.value == true) && (TextBox8.value > 31 && TextBox8.value < 448)){
            TextBox6.value = (6.376 * 10 ^ 6 * TextBox4.value * (Q ^ 2) * L / (Di ^ 5)).toFixed(2);
            Label12 = "Colebrook";
            Label22 = "Fluxo Turbulento";
            Label9 = "&  Tubo Hidraulicamente misto";
        }
        
        //Para vazão em L/h e diâmetro em mm
        
        if ((TextBox1.value >= 3000) && (TextBox1.value <= 100000) && (OptionButton2.value == true) && (TextBox8.value <= 31)){
            f = 0.316 / (TextBox1.value) ^ 0.25;
            TextBox4.value = f.toFixed(4);
            TextBox6.value = (14.69 * (u / mespa) ^ 0.25 * (Q ^ 1.75) * L / (Di ^ 4.75)).toFixed(4);
            Label12 = "Blasius";
            Label22 = "Fluxo Turbulento";
            Label9 = "&  Tubo Hidraulicamente Liso";
        }
            
        //If TextBox8.Text <= 31 Then
            
            //Label9 = "&  Tubo Hidraulicamente Liso"
            
        //End If
        
        //Cálculo do fator f pela equação de Colebrook utilizando a equaçâo de Darcy
                                
        //Para vazão em m³/h e diâmetro em mm
        
        if ((TextBox1.value > 100000) && (OptionButton1.value == true) && (TextBox8.value > 31) && (TextBox8.value < 448)){

            TextBox6.value = (6.376 * 10 ^ 6 * TextBox4.value * (Q ^ 2) * L / (Di ^ 5)).toFixed(2);
            Label12 = "Colebrook";
            Label22 = "Fluxo Turbulento";
            Label9 = "&  Tubo Hidraulicamente misto";
                    
        }            
        //Para vazão em L/h e diâmetro em mm
        
        if ((TextBox1.value > 100000) && (OptionButton2.value == true) && (TextBox8.value) > 31  && (TextBox8.value < 448)){
            TextBox6.value = (6.376 * TextBox4.Text * (Q ^ 2) * L / (Di ^ 5)).toFixed(2);
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
ActiveWorkbook.Save
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