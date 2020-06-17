Nam;
Thang;
Ngay;
function loadYear() {

    Nam = document.getElementById("ddlNam");

    Nam.length = 0;

    var iNam = 0;

    var today = new Date();

    for (iNam = 1950; iNam <= today.getFullYear(); iNam++) {

        var optNam = document.createElement("option");


        optNam.text = iNam;
        optNam.value = iNam;
        Nam.options.add(optNam);
    }
}

function loadMonth() {
    Thang = document.getElementById("ddlThang");
    Thang.length = 0;
    var iThang = 0;
    for (iThang = 1; iThang <= 12; iThang++) {
        var optThang = document.createElement("option");
        optThang.text = iThang;
        optThang.value = iThang;
        Thang.options.add(optThang);
    }
}

function loadDay() {
    Ngay = document.getElementById("ddlNgay");
    Ngay.length = 0;
    
    var value = parseInt(Thang.value);
    
    var SoNgay = 0;
   
    switch (value) {
       
        case 2:
            
            var gtNam = Nam.selectedIndex;
           
            if ((gtNam % 4 == 0) && ((gtNam % 100 != 0) || (gtNam % 400 == 0))) {
                
                SoNgay = 28;
            }
            else {
               
                SoNgay = 29;
            }
            break;
       
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            SoNgay = 31;
            break;
        
        case 4: case 6: case 9: case 11:
            SoNgay = 30;
            break;
    }
    var iNgay = 0;
    for (iNgay = 1; iNgay <= SoNgay; iNgay++) {
        var optNgay = document.createElement("option");
        optNgay.text = iNgay;
        optNgay.value = iNgay;
        Ngay.options.add(optNgay);
    }
}