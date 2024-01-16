var tampil = document.getElementById("satu");


function hitungLuas(){
    sisi = document.getElementById("txtSisi").value;
    if (sisi == ""){
        alert("Sisi Harus diisi !");
        return;
    }
    if (isNaN(sisi)){
        alert("Sisi Harus diisi dengan angka !");
        return;
    }

    Luas = sisi * sisi;


    document.getElementById("txtLuas").innerHTML =  "L = " + Luas;

}
function resetForm(){
    document.getElementById("txtSisi").value="";
    document.getElementById("txtLuas").value="";
}