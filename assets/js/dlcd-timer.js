    //<![CDATA[
    var timeLeft = 10; 
    var downloadBtn=document.querySelector('.fileLink'),countdown=document.querySelector('.textd');downloadBtn.addEventListener('click',()=>{var e=document.querySelector('.wcTargetLink').innerText,t=setInterval(function(){timeLeft-=1,countdown.innerHTML='Vui lòng chờ <span>'+timeLeft+'</span> giây.',timeLeft<=0&&(clearInterval(t),window.location.href=e,setTimeout())},1e3)});
    //]]> 
