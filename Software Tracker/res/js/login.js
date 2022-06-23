function checkdata(){
    let name = document.getElementById('#name');
    let pas = document.getElementById('#password');

    let domOut = document.getElementById('#fail');

    if(name = "Yorck Dombrowsky"){

        if(pas = "test"){
            location.href = 'mainpage.html';
            console.log(1);
        }

        else{
            domOut = "incorrect password!!!"
            console.log(99);
        }
    }

    else{
        domOut = "incorrect username!!!"
            console.log(98);
    }
}

function signout(){
    location.href = 'loginpage.html';
}