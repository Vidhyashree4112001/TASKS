function generatecaptcha(){
    var captchacontainer=document.getElementById("captcha_container")
    var characters='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var captcha=""
    for (count=0;count<5;count=count+1)
    {
    var randomindex=Math.floor(Math.random()*characters.length)
    captcha += characters[randomindex]
    }
     captchacontainer.textContent=captcha
    }
    
    function verifycaptcha(){
       var captchatext=document.getElementById("captcha_container").textContent
       var captchainput=document.getElementById("userinput").value
       
    
       if(captchainput === captchatext){
        
        alert("captcha verified successfully!")
       }
     else{
        
        alert("captcha verification failed.please try again.")
     }
    }