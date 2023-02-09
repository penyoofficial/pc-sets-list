var isIntel = true;

load(), autoGetDate(), calc();

Array.from(document.getElementsByTagName("input")).forEach(p => {
    p.onchange = function () {
        if (p.getAttribute("class") == "price" && /\D/.test(p.value)) {
            p.value = "";
            return;
        }
        calc(), save();
    }
});

document.getElementById("copy-or-paste").onclick = async function () {
    var nowClipboard = await navigator.clipboard.readText();
    if (nowClipboard.includes("pc-sets-list")) {
        // pc-set-list::i9-13900K$4000|RTX4090$20000......::title
        var toPaste = nowClipboard.split("::")[1].split("|");
        var i = 0;
        Array.from(document.getElementsByClassName("data")).forEach(d => {
            var n = d.getElementsByClassName("name")[0],
                p = d.getElementsByClassName("price")[0];
            n.value = toPaste[i].split("$")[0];
            p.value = toPaste[i++].split("$")[1];
        });
        calc(), save();
        if (nowClipboard.split("::")[2] != undefined)
            document.getElementById("list-title").innerText =
                nowClipboard.split("::")[2];
        navigator.clipboard.writeText("");
    } else {
        var toCopy = "pc-sets-list::";
        Array.from(document.getElementsByClassName("data")).forEach(d => {
            var n = d.getElementsByClassName("name")[0],
                p = d.getElementsByClassName("price")[0];
            toCopy += "" + localStorage.getItem(n.getAttribute("id"));
            toCopy += "$" + localStorage.getItem(p.getAttribute("id")) + "|";
        });
        navigator.clipboard.writeText(toCopy.substring(0, toCopy.length - 1));
    }
}