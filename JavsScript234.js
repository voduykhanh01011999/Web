Nam;
function loadYear() {

    Nam = document.getElementById("ddlNam");

    Nam.length = 0;

    var iNam = 0;

    var today = new Date();

    for (iNam = 1950; iNam <= 2021; iNam++) {

        var optNam = document.createElement("option");
        optNam.text = iNam;
        optNam.value = iNam;
        Nam.options.add(optNam);
    }
}