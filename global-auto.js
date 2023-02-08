var isIntel = true;

Array.from(document.getElementsByClassName("data")).forEach(d => {
    var n = d.getElementsByClassName("name")[0],
        p = d.getElementsByClassName("price")[0];
    n.value = localStorage.getItem(n.getAttribute("id"));
    p.value = localStorage.getItem(p.getAttribute("id"));
});

autoGetDate(), calc();

Array.from(document.getElementsByClassName("price")).forEach(p => {
    p.onchange = function () {
        if (/\D/.test(p.value)) {
            p.value = "";
            return;
        }
        calc();
    }
});