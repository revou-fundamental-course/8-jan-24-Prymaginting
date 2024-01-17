function hitungDanTampilkan(tipe) {
    var sideLength = parseFloat(document.getElementById("sideLength").value);
    var hasil = 0;
    var rumus = "";

    if (tipe === 'luas') {
        hasil = sideLength * sideLength;
        rumus = "Rumus: L = S * S";
    } else if (tipe === 'keliling') {
        hasil = 4 * sideLength;
        rumus = "Rumus: K = 4 * S";
    }

    var output = rumus + "<br>" + rumus.replace(/S/g, sideLength) + "<br>Hasil: " + hasil;

    document.getElementById("result").innerHTML = output;
}

function resetForm() {
    document.getElementById("sideLength").value = "";
    document.getElementById("result").innerHTML = "";
}