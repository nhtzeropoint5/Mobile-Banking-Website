document.getElementById('login-btn').addEventListener('click', function () {
    const x = document.getElementById('mob-num').value;
    const y = document.getElementById('pin').value;

    

    if(x == "01712501382" && y == '1234'){
        console.log(x,y);
        window.alert("login successful");
        window.location.assign("/home.html");
    }
    else
    {
        // window.alert("wrong credentials");
        // return;
    }
    })