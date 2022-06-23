function CommandButton3_Click(){

    let Lrec, Drec, Rgrec, Aer, d, Kvgr, Kvr, kcr, Filt, Psd, Qrec;
    let Hftr, HfLr, HfSr, Vr, Vsuc, PesAg, PAdm, PSaida, Hb, Rend, PotB;
    let tempa, Fct, Kelv, mespa, Lgu, u;

    let TextBox1 = document.getElementById("TextBox1")
    let TextBox20 = document.getElementById("TextBox20");
    let TextBox27 = document.getElementById("TextBox27");
    let TextBox28 = document.getElementById("TextBox28");
    let TextBox29 = document.getElementById("TextBox29");
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

    //viscosidade cinemática da água

    Kelv = tempa + 273.16;
    Lgu = (-11.73) + (1828 / Kelv) + (0.01966 * Kelv) + (-0.00001466 * Math.pow(Kelv, 2));
    u = (Math.pow(10 ^ Lgu) / 100).toFixed(5);
 
 
    //massa específica e fator de correção da temperatura FCt
    
    Fct = Math.pow((tempa - 3.983035), 2) * (tempa + 301.797) / (522528.9 * (tempa + 69.34881));
    mespa = (1000 * (1 - Fct)).toFixed(2);


    if ((TextBox20.value = "") && (TextBox23.value = "") && (TextBox38.value = "") && (ComboBox11.value = "")){

        alert("Preenchimento do campo obrigatório. ATENÇÃO");
    
    } else {

        //Número de Reynolds no recalque

        //TextBox27.Text = Format(352610 * Qrec / Drec, "0")

        TextBox27.value = (mespa * TextBox12.value * (Drec / 1000) / u).toFixed(1);

        //Derterminação do fator de atrito e do regime de escoamento no recalque

        if (parseFloat(TextBox27.value) <= 2300){ 
        
            TextBox28.value = (64 / TextBox27.value).toFixed(2);
            //Label27 = "Escoamento Laminar"
            //Label27.ForeColor = &H4000&
                    
        } else {
            er = 0.001;
            oldfr = 1;
            deltafr = oldfr;
            while (Math.Abs(deltafr / oldfr) >= er){
                Newfr = 1 / (Math.pow((-2 * Math.log(Rgrec / ((3.7 * Drec) + 2.51) / (TextBox27.value * Math.sqrt(oldfr))) * 0.434294482), 2))
                deltafr = Newfr - oldfr;
                oldfr = Newfr;
            }
            Fr = oldfr;
            TextBox28.value = (Fr).toFixed(4);
        }
        

        if (TextBox27.value >= 4000){
            
            //Label27 = "Escoamento Turbulento"
            //Label27.ForeColor = &H4000&
        }
    }
    //Velocidade da água na tubulação de recalque

    TextBox29.value = (353.6775 * Qrec / Math.pow(Drec, 2)).toFixed(2);
    Vr = Math.abs(parseFloat(TextBox29.value))
  
    if (Vr > 2){

        alert("Velocidade da água na Tubulação de Recalque acima do limite permitido. ATENÇAO!");
        
    }
  
  
'Perda de carga distribuída no recalque

 TextBox30.Text = Format(6.3735 * TextBox28.Text * ((1000 * Qrec) ^ 2) * Lrec / Drec ^ 5, "0.00")
 HfLr = CDbl(TextBox30.Text)
 
'Perda de carga nas singularidades do realque

 TextBox31.Text = Format((Kvr + Kvgr + kcr) * (TextBox29.Text ^ 2) / 19.62, "0.00")
 HfSr = CDbl(TextBox31.Text)

'Perda de carga total no recalque

 TextBox32.Text = Format(HfLr + HfSr, "0.00")
 Hftr = CDbl(TextBox32.Text)
 
'Pressão na secção de saída da bmba

 'Em mca

   TextBox34.Text = Format(Psd + (Aer - d) + Hftr + Filt, "0.00")
   PSaida = CDbl(TextBox34.Text)
   
 'Em KPa
  
   PesAg = CDbl(TextBox9.Text) 'Peso específico da água
   
   TextBox33.Text = Format(PesAg * (Psd + (Aer - d) + Hftr) / 1000, "0.00")
   
'Carga da bomba

  PAdm = CDbl(TextBox8.Text)
  Vsuc = CDbl(TextBox12.Text)
  
  TextBox35.Text = Format((PSaida - PAdm) + (((Vr ^ 2) - (Vsuc ^ 2)) / 19.62) + d, "0.00")
  Hb = CDbl(TextBox35.Text)
  
'Potência da Bomba

  'Em KW
  
   TextBox36.Text = Format(((PesAg * (Qrec / 3600) * Hb) / (Rend / 100) / 1000), "0.00")
   PotB = CDbl(TextBox36.Text)
  
  'Em CV
  
   TextBox37.Text = Format(PotB / 0.7355, "0.00")
    
End If
}

Private Sub Label11_Click()

End Sub

'Private Sub OptionButton1_Click()

'If OptionButton1.Value = True Then

 ' Label56.Visible = False
 'TextBox39.Visible = False
'TextBox18.Visible = True
' TextBox40.Enabled = False
 
End If


End Sub

'Private Sub OptionButton2_Click()

'If OptionButton2.Value = True Then

 ' Label56.Visible = True
' TextBox39.Visible = True
'  TextBox18.Visible = False
 
   End If

'End Sub

Private Sub OptionButton3_Click()

If OptionButton3.Value = True Then

  Label40.Visible = False
   TextBox26.Visible = False
    TextBox26.Text = " "
  
 
End If

End Sub

Private Sub OptionButton4_Click()

If OptionButton4.Value = True Then

  Label40.Visible = False
   TextBox26.Visible = False
     TextBox26.Text = " "
 
End If

End Sub

Private Sub OptionButton5_Click()

If OptionButton5.Value = True Then

  Label40.Visible = True
   TextBox26.Visible = True
 
End If

End Sub

Private Sub UserForm_Initialize()

ComboBox7.AddItem "48.1"
ComboBox7.AddItem "72.5"
ComboBox7.AddItem "97.6"
ComboBox7.AddItem "120"
ComboBox7.AddItem "144"
ComboBox6.AddItem "15"
ComboBox6.AddItem "20"
ComboBox6.AddItem "25"
ComboBox6.AddItem "30"
ComboBox1.AddItem "0.00334"
ComboBox1.AddItem "0.15"
ComboBox2.AddItem "0.5"
ComboBox3.AddItem "0.2"
ComboBox3.AddItem "10"
ComboBox4.AddItem "0.4"
ComboBox4.AddItem "0.6"
ComboBox4.AddItem "0.9"
ComboBox5.AddItem "0.75"
ComboBox5.AddItem "10"
ComboBox8.AddItem "0.2"
ComboBox8.AddItem "10"
ComboBox9.AddItem "2.5"
ComboBox10.AddItem "0.2"
ComboBox10.AddItem "0.4"
ComboBox10.AddItem "0.6"
ComboBox10.AddItem "0.9"
ComboBox11.AddItem "48.1"
ComboBox11.AddItem "72.5"
ComboBox11.AddItem "97.6"
ComboBox12.AddItem "0.00334"
ComboBox12.AddItem "0.15"



End Sub
