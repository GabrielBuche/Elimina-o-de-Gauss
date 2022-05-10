





document.getElementById("add-matriz").addEventListener('click', function () {
    let linha = document.getElementById("linha").value;
    let a = new Array(linha);
    a[0] = [document.getElementById("a11").value, document.getElementById("a12").value, document.getElementById("a13").value]
    a[1] = [document.getElementById("a21").value, document.getElementById("a22").value, document.getElementById("a23").value]
    a[2] = [document.getElementById("a31").value, document.getElementById("a32").value, document.getElementById("a33").value]

    console.log(a)

    for (var i = 1; i < linha; i++) {
        let pivo;
        let ml2;
        switch (i) {
            case 1:
                pivo = a[0][0]
                ml =  a[1][1] / pivo
        }

       a[i].map(item => {
           console.log(item)
       })
    }
})

