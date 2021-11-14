document.addEventListener("DOMContentLoaded", function (event) {
    var delayInMilliseconds = 3000;

    setTimeout(function () {
        document.getElementById("loading").style.display = "none";
        document.getElementById("body").style.overflowY = "scroll";
    }, delayInMilliseconds);

    window.addEventListener(
        "scroll",
        () => {
            var element = document.getElementById("brandName");
            var elementH1 = document.getElementById("name");
            var elementP = document.getElementById("tag");
            if (document.body.scrollTop > window.screen.availHeight * 6 / 8 || document.documentElement.scrollTop > window.screen.availHeight * 6 / 8) {
                element.classList.add('style-fixed');
                elementH1.classList.add('style-h1');
                elementP.classList.add('style-p');
            }
            else {
                element.classList.remove("style-fixed");
                elementH1.classList.remove('style-h1');
                elementP.classList.remove('style-p');
            }
        }
    );
});

function validate() {
    var start = document.getElementById("start").value;
    var destination = document.getElementById("destination").value;
    var date = document.getElementById("date").value;
    var alert = document.getElementById("alert");
    if (start == "" || destination == "" || date == "") {
        alert.style.opacity = 1;
        setInterval(() => { alert.style.opacity = 0; }, 5000);
        return false;
    }
    return true;
}

function destinationValidate() {
    var x = document.getElementById("start").value;
    var op = document.getElementById("destination").getElementsByTagName("option");
    for (var i = 0; i < op.length; i++) {
        (op[i].value.toLowerCase() == x.toLowerCase())
            ? op[i].disabled = true
            : op[i].disabled = false;
    }
}

function startValidate() {
    var x = document.getElementById("destination").value;
    var op = document.getElementById("start").getElementsByTagName("option");
    for (var i = 0; i < op.length; i++) {
        (op[i].value.toLowerCase() == x.toLowerCase())
            ? op[i].disabled = true
            : op[i].disabled = false;
    }
}