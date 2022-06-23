

function CheckBox1_Click(){

    let CheckBox1 = document.getElementById("CheckBox1");
    let CheckBox2 = document.getElementById("CheckBox2");
    let CheckBox3 = document.getElementById("CheckBox3");
    let Label56 = document.getElementById("Label56");
    let TextBox39 = document.getElementById("TextBox39");
    let TextBox18 = document.getElementById("TextBox18");
    let TextBox40 = document.getElementById("TextBox40"); 
    


    if(CheckBox1.value == true){

        CheckBox2.enabled = false;
        Label56.visible = false;
        TextBox39.visible = false;
        TextBox18.visible = true;
        TextBox40.enabled = true;
        CheckBox2.value = false;
        CheckBox3.value = false;
    }
 
    else{
        CheckBox2.enabled = true;
        Label56.visible = false;
        TextBox39.visible = false;
        TextBox18.visible = true;
        TextBox40.enabled = false;
    }

}

function CheckBox2_Click(){

    let CheckBox1 = document.getElementById("CheckBox1");
    let CheckBox2 = document.getElementById("CheckBox2");
    let CheckBox3 = document.getElementById("CheckBox3");
    let Label56 = document.getElementById("Label56");
    let TextBox39 = document.getElementById("TextBox39");
    let TextBox18 = document.getElementById("TextBox18");
    let TextBox40 = document.getElementById("TextBox40");
    

    if(CheckBox2.value == true){

        CheckBox1.Enabled = false;
        CheckBox3.value = false;
        Label56.visible = false;
        TextBox39.visible = false;
        TextBox18.visible = true;
        TextBox40.Enabled = false;
    }

    else{

        CheckBox1.Enabled = true;
        Label56.visible = false;
        TextBox39.visible = false;
        TextBox18.visible = true;
        TextBox40.Enabled = true;
    }

}


function CheckBox3_Click(){

    let CheckBox1 = document.getElementById("CheckBox1");
    let CheckBox2 = document.getElementById("CheckBox2");
    let CheckBox3 = document.getElementById("CheckBox3");
    let Label56 = document.getElementById("Label56");
    let TextBox39 = document.getElementById("TextBox39");
    let TextBox18 = document.getElementById("TextBox18");


    if(CheckBox3.value == true){
        

        CheckBox2.value = false;
        CheckBox1.value = false;
        Label56.visible = true;
        TextBox39.visible = true;
        TextBox18.visible = false;
    }
    
    else{

        Label56.visible = false;
        TextBox39.visible = false;
        TextBox18.visible = true;
    }

}



function CommandButton2_Click(){

    let TextBox1 = document.getElementById("TextBox1");
    let TextBox2 = document.getElementById("TextBox2");
    let ComboBox7 = document.getElementById("ComboBox7");
    let ComboBox1 = document.getElementById("ComboBox1");
    let ComboBox2 = document.getElementById("ComboBox2");
    let ComboBox3 = document.getElementById("ComboBox3");
    let ComboBox4 = document.getElementById("ComboBox4");
    let ComboBox5 = document.getElementById("ComboBox5");
    let TextBox4 = document.getElementById("TextBox4");
    let ComboBox6 = document.getElementById("ComboBox6");
    let TextBox39 = document.getElementById("TextBox39");
    let TextBox6 = document.getElementById("TextBox6");
    let TextBox40 = document.getElementById("TextBox40");
    let TextBox9 = document.getElementById("TextBox9");
    let TextBox17 = document.getElementById("TextBox17");
    let TextBox12 = document.getElementById("TextBox12");
    let TextBox10 = document.getElementById("TextBox10");
    let TextBox15 = document.getElementById("TextBox15");
    let Label54 = document.getElementById("Label54");
    let Label27 = document.getElementById("Label27");
    let TextBox11 = document.getElementById("TextBox11");
    let TextBox13 = document.getElementById("TextBox13");
    let TextBox14 = document.getElementById("TextBox14");
    let TextBox16 = document.getElementById("TextBox16");
    let CheckBox2 = document.getElementById("CheckBox2");
    let TextBox18 = document.getElementById("TextBox18");
    let Label29 = document.getElementById("Label29");
    let TextBox19 = document.getElementById("TextBox19");
    let Label23 = document.getElementById("Label23");
    let TextBox7 = document.getElementById("TextBox7");
    let TextBox8 = document.getElementById("TextBox8");
    let CheckBox3 = document.getElementById("CheckBox3");
    let CheckBox1 = document.getElementById("CheckBox1");
    let Label56 = document.getElementById("Label56");
    let Label55 = document.getElementById("Label55");





    let Qsuc, Lsuc, Dsuc, Rgsuc, Ke, Kvg, kc, Kvpc, Alt, Temp, NPSH;
    let Hfls, Hfss, Patm, Pv, HfTs, Zscritica, Pes, Vs, Zsmax, NPSHd, Zspre;
    let Kelv, tempa, Lgu, u, Uc, Fct, ZsAfog, NPSHdreal, mespa, Zsmod;

//Parâmetros para determinar a Pressão de vapo d'água

    let logPv, PvHg, Pvm;

    let objeto;

    let decisao;

    Qsuc = parseFloat(TextBox1.value);
    Lsuc = parseFloat(TextBox2.value);
    Dsuc = parseFloat(ComboBox7.value);
    Rgsuc = parseFloat(ComboBox1.value);
    Ke = parseFloat(ComboBox2.value);
    Kvg = parseFloat(ComboBox3.value);
    kc = parseFloat(ComboBox4.value);
    Kvpc = parseFloat(ComboBox5.value);
    Alt = parseFloat(TextBox4.value);
    tempa = parseFloat(ComboBox6.value);
    ZsAfog = parseFloat(TextBox39.value);
    NPSH = parseFloat(TextBox6.value);
    Zspre = parseFloat(TextBox40.value);

    if ((TextBox1.value == "") || (TextBox2.value == "") || (TextBox4.value == "") || (TextBox6.value == "") || (ComboBox6.value == "")) {
    
        alert("Preenchimento do campo obrigatório.");
        
    } else {
    
    //'viscosidade cinemática da água na sucção
        
        Kelv = tempa + 273.16;
        Lgu = (-11.73) + (1828 / Kelv) + (0.01966 * Kelv) + (-0.00001466 * Math.pow(Kelv, 2));
        u = (Math.pow(10, Lgu) / 100).toFixed(5);
        Uc = u * 1000;
        Label54.innerHTML = "Viscosidade dinâmica:  " + Uc + " x 10-³ N.s/m²";
        
    //'massa específica e fator de correção da temperatura FCt na sucção
        
        Fct = Math.pow((tempa - 3.983035), 2) * (tempa + 301.797) / (522528.9 * (tempa + 69.34881));
        mespa = (1000 * (1 - Fct)).toFixed(2);
        Label55.innerHTML = "Massa específica:  " + mespa + " kg/m³";
    }
    //'Peso específico da água

    TextBox9.value = (mespa * 9.81).toFixed(2);
    Pes = parseFloat(TextBox9.value);
    
    //'Pressão de vapor da água em função da temperatura
    
    logPv = 8.0701 - 1730.6 / (tempa + 233.4);
    PvHg = Math.pow(10, logPv);
    Pvm = PvHg * 10.33 / 760;
    TextBox17.value = (Pvm).toFixed(2);
    
    //'Velocidade da água na tubulação de sucção

    TextBox12.value = (353.6775 * Qsuc / Math.pow(Dsuc, 2)).toFixed(2);//
        
    //'Número de Reynolds na sucção

    TextBox10.value = (mespa * parseFloat(TextBox12.value) * (Dsuc / 1000) / u).toFixed(1);

    //'Derterminação do fator de atrito e do regime de escoamento na sucção

    if (parseFloat(TextBox10.value) <= 2300) {
    
        TextBox15.value = (64 / parseFloat(TextBox10.value)).toFixed(2);
        //Label27.value = "Escoamento Laminar";
        //'Label27.ForeColor = &H4000&
                
    }else{
        er = 0.001;
        oldf = 1;
        deltaf = oldf;
        while( Math.abs(deltaf / oldf) >= er){
            Newf = 1 / Math.pow((-2 * Math.log(Rgsuc / (3.7 * Dsuc) + 2.51 / (parseFloat(TextBox10.value) * Math.sqrt(oldf))) * 0.434294482), 2);
            deltaf = Newf - oldf;
            oldf = Newf;
        }
        F = oldf;
        TextBox11.value = (F).toFixed(4);
    }
    
    if (parseFloat(TextBox10.value) >= 4000){
        
        //Label27.value = "Escoamento Turbulento";
        // 'Label27.ForeColor = &H4000&
    }
                
    //'Perda de carga distribuída na sucção

    TextBox13.value = (6.376 * Math.pow(10, 6) * parseFloat(TextBox11.value) * Math.pow(Qsuc, 2) * Lsuc / (Math.pow(Dsuc, 5))).toFixed(2);
    Hfls = Math.abs(parseFloat(TextBox13.value)); 
    //era um CDbl
        
    //'Perda de carga nas singularidades da sucção

    TextBox14.value = ((Ke + Kvg + kc + Kvpc) * Math.pow(parseFloat(TextBox12.value), 2) / 19.62).toFixed(2);
    Hfss = Math.abs(parseFloat(TextBox14.value));
    //era um CDbl

    //'Perda de carga total na sucção

    TextBox15.value = (Hfls + Hfss).toFixed(2);
    HfTs = Math.abs(parseFloat(TextBox15.value));
    //era um CDbl

    //'Pressão atmosférica local

    TextBox16.value = Math.pow(10.33 * ((293 - 0.0065 * Alt) / 293), 5.26).toFixed(2);
    Patm = Math.abs(parseFloat(TextBox16.value));
    //era um CDbl

    //'Altura estática de sucção positiva

    if (CheckBox2.checked){
    
        //'Altura estática de sucção

        TextBox18.value = (Patm - (NPSH + Pvm + HfTs)).toFixed(2);
        Zscritica = Math.abs(parseFloat(TextBox18.value));
        //era um CDbl
        
        //'Altura estática de sucção real
        
        NPSHdreal = (1.15 * NPSH).toFixed(2);
        Zsmax = (Patm - (NPSHdreal + HfTs + Pvm)).toFixed(2);

        Label29.visible = true;
        Label29.innerHTML = "Altura estática de sucção máxima = " + Zsmax + " m acima do nível da água no reservatório com NPSHdisp = " + NPSHdreal + "  m";
        //Label29.ForeColor = &H4000&
        
        //'NPSH disponível para sucção positiva

        TextBox19.value = (Patm - (Zscritica + Pvm + HfTs)).toFixed(2);
        Label23.value = "NPSH disponível limiar (m)";
        NPSHd = Math.abs(parseFloat(TextBox19.value));
        //era um CDbl
        
        //'Pressão na secção de entrada da bomba na sucção positiva
        
        //Em KPa
        
        TextBox7.value = (parseFloat(TextBox9.value) * (Zsreal + (Math.pow(parseFloat(TextBox12.value), 2) / 19.62) + HfTs) / 1000).toFixed(2);

        //Em mca
        
        TextBox8.value = (-(Zsreal + (Math.pow(parseFloat(TextBox12.value), 2) / 19.62) + HfTs)).toFixed(2);
        
    }

    //'Para tubulação na sucção negativa "Afogada"

    else if (CheckBox3.checked){
    
        //'NPSH disponível para sucção negativa (Afogada)

        TextBox19.value = (Patm + ZsAfog - (Pvm + HfTs)).toFixed(2);
        Label23.value = "NPSH disponível (m)";
        //'Label29.visible = false;
        NPSHd = Math.abs(parseFloat(TextBox19.value));
        
        //'Pressão na secção de entrada da bomba
        
        //'Em mca
        
        TextBox8.value = (ZsAfog - HfTs - (Math.pow(parseFloat(TextBox12.value), 2) / 19.62)).toFixed(2);
        
        //'Em KPa
            
        TextBox7.value = (Pes * parseFloat(TextBox8.value) / 1000).toFixed(2);
            
        Label29.value = "Altura estática de sucção mínima de: " + ZsAfog + " m abaixo do nível inferior da água no reservatório.";
        //Label29.ForeColor = &H4000&
    
    }

    else if (CheckBox1.checked){
        
        TextBox19.value = (Patm - (Zspre + Pvm + HfTs)).toFixed(2);
        Label23.value = "NPSH disponível (m)";
        Label29.visible = false;
        
        //'Pressão na secção de entrada da bomba na sucção positiva pré-definida

        //'Em KPa
        
        TextBox7.value = (-parseFloat(TextBox9.value) * (Zspre + (Math.pow(parseFloat(TextBox12.value), 2) / 19.62) + HfTs) / 1000).toFixed(2);

        //'Em mca
        
        TextBox8.value = (-(Zspre + (Math.pow(parseFloat(TextBox12.value), 2) / 19.62) + HfTs)).toFixed(2);
    }

    if ((CheckBox2.checked) && (Zs < 0)) {

        CheckBox2.value = false;
        CheckBox3.value = true;
        Label56.visible = true;
        
        TextBox18.visible = false;
        Zsmod = (-1 * Zs).toFixed(2);
        
        Label29.value = "Altura estática de sucção mínima de: " + Zsmod + " m abaixo do nível inferior da água no reservatório.";
        //Label29.ForeColor = &H4000&
    }

    //'Limite de velocidade na tubulação de sucção

    if (parseFloat(TextBox12.value > 1.5)) {

        alert("Velocidade da água na Tubulação de sucção acima do limite permitido. Escolha um diâmetro imdiatamente superior");

    } 
}// fim da funcao



function CommandButton3_Click(){

    let Lrec, Drec, Rgrec, Aer, d, Kvgr, Kvr, kcr, Filt, Psd, Qrec;
    let Hftr, HfLr, HfSr, Vr, Vsuc, PesAg, PAdm, PSaida, Hb, Rend, PotB;
    let tempa, Fct, Kelv, mespa, Lgu, u;

    let TextBox1 = document.getElementById("TextBox1");
    let TextBox8 = document.getElementById("TextBox8");
    let TextBox9 = document.getElementById("TextBox9");
    let TextBox12 = document.getElementById("TextBox12");
    let TextBox20 = document.getElementById("TextBox20");
    let TextBox23 = document.getElementById("TextBox23");
    let TextBox27 = document.getElementById("TextBox27");
    let TextBox28 = document.getElementById("TextBox28");
    let TextBox29 = document.getElementById("TextBox29");
    let TextBox30 = document.getElementById("TextBox30");
    let TextBox31 = document.getElementById("TextBox31")
    let TextBox32 = document.getElementById("TextBox32");
    let TextBox33 = document.getElementById("TextBox33");
    let TextBox34 = document.getElementById("TextBox34");
    let TextBox35 = document.getElementById("TextBox35");
    let TextBox36 = document.getElementById("TextBox36");
    let TextBox37 = document.getElementById("TextBox37");
    let TextBox38 = document.getElementById("TextBox38");
    let ComboBox11 = document.getElementById("ComboBox11");

    Qrec = parseFloat(TextBox1.value);
    Lrec = parseFloat(TextBox20.value);
    Drec = parseFloat(ComboBox11.value);
    Rgrec = parseFloat(ComboBox12.value);
    Aer = parseFloat(TextBox23.value);
    d = parseFloat(TextBox24.value);
    Kvgr = parseFloat(ComboBox8.value);
    Kvr = parseFloat(ComboBox9.value);
    kcr = parseFloat(ComboBox10.value);
    Filt = parseFloat(TextBox25.value);
    Psd = parseFloat(TextBox26.value);
    PesAg = parseFloat(TextBox9.value);
    PAdm = parseFloat(TextBox8.value);
    Vsuc = parseFloat(TextBox12.value);
    Rend = parseFloat(TextBox38.value);
    tempa = parseFloat(ComboBox6.value);
    //'viscosidade cinemática da água

    Kelv = tempa + 273.16;
    Lgu = (-11.73) + (1828 / Kelv) + (0.01966 * Kelv) + (-0.00001466 * Math.pow(Kelv, 2));
    u = (Math.pow(10, Lgu) / 100).toFixed(5);
    
    
    //'massa específica e fator de correção da temperatura FCt
        
    Fct = (Math.pow((tempa - 3.983035), 2) * (tempa + 301.797) / (522528.9 * (tempa + 69.34881)));
    mespa = (1000 * (1 - Fct)).toFixed(2);


    if ((TextBox20.value == "") || (TextBox23.value == "") || (TextBox38.value == "") || (ComboBox11.value = "")){
    
        alert("Preenchimento do campo obrigatório.");
        
    } else { 
        //'Número de Reynolds no recalque

        //'TextBox27.Text = Format(352610 * Qrec / Drec, "0") //ele comentou!!

        TextBox27.value = (mespa * TextBox12.value * (Drec / 1000) / u).toFixed(1)

        //'Derterminação do fator de atrito e do regime de escoamento no recalque

        if (parseFloat(TextBox27.value) <= 2300){
        
            TextBox28.value = (64 / TextBox27.value).toFixed(2);
            //'Label27 = "Escoamento Laminar"
            //'Label27.ForeColor = &H4000&
                    
        }else{
            er = 0.001;
            oldfr = 1;
            deltafr = oldfr;
            while (Math.abs(deltafr / oldfr) >= er){
                Newfr = 1 / Math.pow((-2 * Math.log(Rgrec / (3.7 * Drec) + 2.51 / (parseFloat(TextBox27.value) * Math.sqrt(oldfr))) * 0.434294482), 2);
                deltafr = Newfr - oldfr;
                oldfr = Newfr;
            }
            Fr = oldfr;
            TextBox28.value = (Fr).toFixed(4);
        }

        if (parseFloat(TextBox27.value) >= 4000){
            
            Label27.innerHTML = "Escoamento Turbulento";
            //'Label27.ForeColor = &H4000&
        }
    }
    //'Velocidade da água na tubulação de recalque

    TextBox29.value = (353.6775 * Qrec / Math.pow(Drec, 2)).toFixed(2);
    Vr = Math.abs(TextBox29.value);

    // era um CDBL
    
    if (Vr > 2){
        alert("Velocidade da água na Tubulação de Recalque acima do limite permitido.");
    }

    //'Perda de carga distribuída no recalque

    TextBox30.value = (6.3735 * parseFloat(TextBox28.value) * Math.pow((1000 * Qrec), 2) * Lrec / Math.pow(Drec, 5)).toFixed(2);
    HfLr = Math.abs(parseFloat(TextBox30.value));
    
    //'Perda de carga nas singularidades do realque

    TextBox31.value = ((Kvr + Kvgr + kcr) * Math.pow(parseFloat(TextBox29.value), 2) / 19.62).toFixed(2);
    HfSr = Math.abs(parseFloat(TextBox31.value));

    //'Perda de carga total no recalque

    TextBox32.value = (HfLr + HfSr).toFixed(2);
    Hftr = Math.abs(parseFloat(TextBox32.value));
    
    //'Pressão na secção de saída da bmba

    //'Em mca

    TextBox34.value = (Psd + (Aer - d) + Hftr + Filt).toFixed(2);
    PSaida = Math.abs(parseFloat(TextBox34.value));
        
    //'Em KPa
    
    PesAg = Math.abs(parseFloat(TextBox9.value)); // 'Peso específico da água
    TextBox33.value = (PesAg * (Psd + (Aer - d) + Hftr) / 1000).toFixed(2);
        
    //'Carga da bomba

    PAdm = Math.abs(TextBox8.value);
    Vsuc = Math.abs(TextBox29.value);
    
    TextBox35.value = ((PSaida - PAdm) + ((Math.pow(Vr, 2) - Math.pow(Vsuc, 2)) / 19.62) + d).toFixed(2);
    Hb = Math.abs(parseFloat(TextBox35.value));

    //Era um CDBL
    
    //'Potência da Bomba

    //'Em KW
    
    TextBox36.value = (((PesAg * (Qrec / 3600) * Hb) / (Rend / 100) / 1000)).toFixed(2);
    PotB = Math.abs(parseFloat(TextBox36.value));
    
    //'Em CV
    
    TextBox37.value = (PotB / 0.7355).toFixed(2);
}

function Label11_Click(){

}


//'Private Sub OptionButton1_Click()

//'If OptionButton1.value = true; Then

//  ' Label56.visible = false;
//  'TextBox39.visible = false;
// 'TextBox18.visible = true;
// ' TextBox40.Enabled = false;
  
//End If


//End Sub

//'Private Sub OptionButton2_Click()

//'If OptionButton2.value = true; Then

//  ' Label56.visible = true;
// ' TextBox39.visible = true;
//'  TextBox18.visible = false;
  
//    End If
//
//'End Sub

function OptionButton3_Click(){

    if(OptionButton3.checked){

        Label40.visible = false;
        TextBox26.visible = false;
        TextBox26.value = " ";
    }

}


function OptionButton4_Click(){

    if (OptionButton4.checked){

        Label40.visible = false;
        TextBox26.visible = false;
        TextBox26.value = " ";
    }
}

function OptionButton5_Click(){

    if (OptionButton5.checked){

        Label40.visible = true;
        TextBox26.visible = true;
    
    }
}

//function UserForm_Initialize(){

    //ComboBox7.AddItem "48.1"
    //ComboBox7.AddItem "72.5"
    //ComboBox7.AddItem "97.6"
    //ComboBox7.AddItem "120"
    //ComboBox7.AddItem "144"
    //ComboBox6.AddItem "15"
    //ComboBox6.AddItem "20"
    //ComboBox6.AddItem "25"
    //ComboBox6.AddItem "30"
    //ComboBox1.AddItem "0.00334"
    //ComboBox1.AddItem "0.15"
    //ComboBox2.AddItem "0.5"
    //ComboBox3.AddItem "0.2"
    //ComboBox3.AddItem "10"
    //ComboBox4.AddItem "0.4"
    //ComboBox4.AddItem "0.6"
    ////ComboBox4.AddItem "0.9"
    //ComboBox5.AddItem "0.75"
    //ComboBox5.AddItem "10"
    //ComboBox8.AddItem "0.2"
    //ComboBox8.AddItem "10"
    //ComboBox9.AddItem "2.5"
    //ComboBox10.AddItem "0.2"
    //ComboBox10.AddItem "0.4"
    //ComboBox10.AddItem "0.6"
    //ComboBox10.AddItem "0.9"
    //ComboBox11.AddItem "48.1"
    //ComboBox11.AddItem "72.5"
    //ComboBox11.AddItem "97.6"
    //ComboBox12.AddItem "0.00334"
    //ComboBox12.AddItem "0.15"
//
//}

