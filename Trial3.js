function my() {
    alert(document.getElementById("a").value)
    document.getElementById("a").value = "";
}

function closeNav() {
    var c = document.getElementById("c").value;
    var d = document.getElementById("d").value;

    if (c == "Vijay Mehta" && d == "controlRoom.alert") {
        document.getElementById("f").style.transition = "1s";
        document.getElementById("f").style.opacity = "0";
        document.getElementById("f").style.transition = "0s";
        document.getElementById("overlay1").style.width = "100%";
        setTimeout(() => {
            document.getElementById("w").style.opacity = "1";
        }, 1000)
    }

    if (c == "" && d != "") {
        document.getElementById("v").innerHTML = "no need";
        alert("Please enter your username.");
        setTimeout(() => {
            document.getElementById("v").innerHTML = "";
        }, 1100)
    }

    if (d == "" && c != "") {
        document.getElementById("v").innerHTML = "no need";
        alert("Please enter your password.");
        setTimeout(() => {
            document.getElementById("v").innerHTML = "";
        }, 1100)
    }

    if (c == "" && d == "") {
        alert("Please enter both, your username and password.")
    }

    if ((c != "Vijay Mehta" && c != "") || (d != "controlRoom.alert" && d != "")) {
        var a = document.getElementById("v").innerHTML;
        if (a == "") {
            setTimeout(() => {
                document.getElementById("d").value = "";
                alert("Either your username, or password is incorrect.");
                alert("Please, try again.");
            }, 1000)
        }
    }
}

function typechange() {
    var a = document.getElementById("d").type;
    if (a == "password") {
        document.getElementById("d").type = "text";
    }
    if (a == "text") {
        document.getElementById("d").type = "password";
    }
}


function back() {
    document.getElementById("overlay1").style.width = "0%";
    document.getElementById("w").style.opacity = "0";
    setTimeout(() => {
        document.getElementById("f").style.transition = "1s";
        document.getElementById("f").style.opacity = "1";
        document.getElementById("f").style.transition = "0s";
    }, 1000)
}