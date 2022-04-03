function calculate() {
    // inputlarni JS ga ulab olish
    let a1 = document.getElementById("a1").value,
        b1 = document.getElementById("b1").value,
        c1 = document.getElementById("c1").value,
        d1 = document.getElementById("d1").value,
        a2 = document.getElementById("a2").value,
        b2 = document.getElementById("b2").value,
        c2 = document.getElementById("c2").value,
        d2 = document.getElementById("d2").value,
        a3 = document.getElementById("a3").value,
        b3 = document.getElementById("b3").value,
        c3 = document.getElementById("c3").value,
        d3 = document.getElementById("d3").value,

        natija = document.getElementById("natija"),
        infiniteSolutions = document.querySelector('.infinite-solutions'),
        oneSolution = document.querySelector('.one-solution'),
        emptSet = document.querySelector('.empty-set');

    if (a1 != '' && b1 != '' && c1 != '' && d1 != '' && a2 != '' && b2 != '' && c2 != '' && d2 != '' && a3 != '' && b3 != '' && c3 != '' && d3 != '') {

        a1 = parseInt(a1);
        b1 = parseInt(b1);
        c1 = parseInt(c1);
        d1 = parseInt(d1);
        a2 = parseInt(a2);
        b2 = parseInt(b2);
        c2 = parseInt(c2);
        d2 = parseInt(d2);
        a3 = parseInt(a3);
        b3 = parseInt(b3);
        d3 = parseInt(d3);


        let det = a1 * b2 * c3 + b1 * c2 * a3 + a2 * b3 * c1 -
            (c1 * b2 * a3 + b1 * a2 * c3 + a1 * c2 * b3);

        let detX = d1 * b2 * c3 + d2 * b3 * c1 + b1 * c2 * d3 -
            (c1 * b2 * d3 + b1 * d2 * c3 + c2 * b3 * d1);

        let detY = a1 * d2 * c3 + d1 * c2 * a3 + a2 * d3 * c1 -
            (c1 * d2 * a3 + d1 * a2 * c3 + c2 * d3 * a1);

        let detZ = a1 * b2 * d3 + a2 * b3 * d1 + b1 * d2 * a3 -
            (d1 * b2 * a3 + d2 * b3 * a1 + b1 * a2 * d3);

        if (det === 0 && detX === 0 && detY === 0 && detZ === 0) {
            natija.innerHTML = "Sistema cheksiz ko'p yechimga ega !";
            infiniteSolutions.style.display = 'block';
            oneSolution.style.display = 'none';
            emptSet.style.display = 'none';

        } else if ((det === 0 && detX !== 0) || (det === 0 && detY !== 0) || (det === 0 && detZ !== 0)) {
            natija.innerHTML = "Sistema yechimga ega emas !";

            infiniteSolutions.style.display = 'none';
            oneSolution.style.display = 'none';
            emptSet.style.display = 'block';
        } else {
            let x = detX / det,
                y = detY / det,
                z = detZ / det;

            infiniteSolutions.style.display = 'none';
            oneSolution.style.display = 'block';
            emptSet.style.display = 'none';

            natija.innerHTML = `x = ${x}; <br> y = ${y}; <br> z = ${z}; `;
        }
    } else {
        alert("Bo'sh joylarni to'ldiring.");
        natija.innerHTML = "Bo'sh joylarni to'ldiring."
    };
};

// Getting time and enabling light/night mode

let hours = new Date().getHours(),
    colMD7 = document.querySelector('.col-md-7'),
    colMD6 = document.querySelector('.col-md-6'),
    title = document.querySelector('.title'),
    textPrimary = document.querySelector('.text-primary'),
    brace = document.querySelector('.brace'),
    resultShow = document.getElementById('result-show');

if ( hours < 7 || hours > 18 ) {
    document.body.style.backgroundColor = '#001e2e';
    title.style.color = "yellow";
    textPrimary.style.color = 'chartreuse!important';
    colMD7.style.color = '#fff!important';
    resultShow.style.color = 'chartreuse';
    brace.src = 'assets/images-removebg-preview.png';
} else {
    document.body.style.backgroundColor = '#fefefe';
    colMD7.style.color = 'blue';
    title.style.color = "#222";
    textPrimary.style.color = '#007bff!important';
    resultShow.style.color = '#222';
    brace.src = './assets/curlyBrace.png';
}