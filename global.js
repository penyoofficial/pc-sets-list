function autoGetDate() {
    var d = new Date();
    document.getElementById("date").innerText =
        "截止至" + d.getFullYear() + "年" + (d.getMonth() + 1) + "月" + d.getDate() + "日，";
}

function calc() {
    var total = 0;
    Array.from(document.getElementsByClassName("data")).forEach(p => {
        total += Number(p.getElementsByClassName("price")[0].value);
    });
    document.getElementById("total").innerText = "共计" + total + "元";
}

function load() {
    Array.from(document.getElementsByClassName("data")).forEach(d => {
        var n = d.getElementsByClassName("name")[0],
            p = d.getElementsByClassName("price")[0];
        n.value = localStorage.getItem(n.getAttribute("id"));
        p.value = localStorage.getItem(p.getAttribute("id"));
    });
}

function save() {
    Array.from(document.getElementsByClassName("data")).forEach(d => {
        var n = d.getElementsByClassName("name")[0],
            p = d.getElementsByClassName("price")[0];
        localStorage.setItem(n.getAttribute("id"), n.value);
        localStorage.setItem(p.getAttribute("id"), p.value);
    });
}

function switchPlatform() {
    var lt = document.getElementById("list-title");
    if (isIntel)
        lt.setAttribute("class", "title amd");
    else
        lt.setAttribute("class", "title intel");
    isIntel = isIntel ? false : true;
}