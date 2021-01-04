$(document).ready(function(){

    var current_fs, next_fs, previous_fs; //fieldsets
    var opacity;
    var current = 1;
    var steps = $("fieldset").length;
    
    setProgressBar(current);
    
    $(".next").click(function(){
    
    current_fs = $(this).parent();
    next_fs = $(this).parent().next();
    
    //Add Class Active
    $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
    
    //show the next fieldset
    next_fs.show();
    //hide the current fieldset with style
    current_fs.animate({opacity: 0}, {
    step: function(now) {
    // for making fielset appear animation
    opacity = 1 - now;
    
    current_fs.css({
    'display': 'none',
    'position': 'relative'
    });
    next_fs.css({'opacity': opacity});
    },
    duration: 500
    });
    setProgressBar(++current);
    });
    
    $(".previous").click(function(){
    
    current_fs = $(this).parent();
    previous_fs = $(this).parent().prev();
    
    //Remove class active
    $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
    
    //show the previous fieldset
    previous_fs.show();
    
    //hide the current fieldset with style
    current_fs.animate({opacity: 0}, {
    step: function(now) {
    // for making fielset appear animation
    opacity = 1 - now;
    
    current_fs.css({
    'display': 'none',
    'position': 'relative'
    });
    previous_fs.css({'opacity': opacity});
    },
    duration: 500
    });
    setProgressBar(--current);
    });
    
    function setProgressBar(curStep){
    var percent = parseFloat(100 / steps) * curStep;
    percent = percent.toFixed();
    $(".progress-bar")
    .css("width",percent+"%")
    }
    
    $(".submit").click(function(){
    return false;
    })
    
    });

function disableBtn(ele){
    ele.disabled = true;
    ele.style.background = '#cccccc';
    ele.style.color = '#666666';
}
    
function enableBtn(ele){
    ele.disabled = false;
    ele.style.background = '#673AB7';
    ele.style.color = 'white';
}

function displayErrorMsg(msg){
    document.getElementById('message').innerText = msg;
}

function removeErrorMsg(){
    document.getElementById('message').innerText = '';
}

var signupGenres = document.getElementsByClassName('signupGenre');
var submitBtn = document.getElementsByClassName('submit')[0];
var selectedGenre = document.getElementsByClassName('selected')

disableBtn(submitBtn);

for (i=0;i<signupGenres.length;i++){
    signupGenres[i].addEventListener('click', (e)=>{
        var clickedGenre = e.target;
        clickedGenre.classList.toggle('selected')
        if (selectedGenre.length > 0) {
           enableBtn(submitBtn)
        }
        else {
            disableBtn(submitBtn)
        }
    })
    
    
}


// form validation starts now
// var firstSectionBtn = document.getElementById('sectionFirstBtn');
// var firstSection = document.getElementsByClassName('sectionFirst');
// var contact = document.getElementById('contact');
// var address = document.getElementById('address');


// disableBtn(firstSectionBtn);

// for (i=0;i<firstSection.length;i++){
//     firstSection[i].addEventListener('input', ()=>{
//         validateFirstSection();
//     })
// }

// function validateFirstSection(){
//     for (i=0;i<firstSection.length;i++){
//         if(firstSection[i].value != '' && address.value.length >= 30 && contact.value.length > 9 && contact.value.length <13 ){
//           enableBtn(firstSectionBtn);
//         }
//         else {
//            disableBtn(firstSectionBtn);
//         }
//     }
// }



// var secondSectionBtn = document.getElementById('sectionSecondBtn');
// var secondSection = document.getElementsByClassName('sectionSecond');
// var password = document.getElementById('password');
// var confirmPass = document.getElementById('confirmPassword');
// var username = document.getElementById('username')
// var email = document.getElementById('email')

// disableBtn(secondSectionBtn);

// for (i=0;i<secondSection.length;i++){
//     secondSection[i].addEventListener('input', ()=>{
//         validateSecondSection();
//     })
// }

// function validateSecondSection(){
//     for (i=0;i<secondSection.length;i++){
//         if(secondSection[i].value != '' && username.value.length >= 6 && password.value.length > 7 && confirmPass.value.length > 7){
//             if (isPassowrdsEqual() && isEmailOK()){
//                 enableBtn(secondSectionBtn);
//             }
//             else {
//                 disableBtn(secondSectionBtn);
//             }
//         }
//         else {
//             disableBtn(secondSectionBtn);
//         }
        
//     }
    
// }

function isPassowrdsEqual(){
    if (password.value == confirmPass.value){
        removeErrorMsg();
        return true;
    }
    else {
        displayErrorMsg('Password Does Not Match')
        return false;
    }
}

function isEmailOK(){
    if (email.value.includes('@') && (email.value.includes('.com') || email.value.includes('.mail'))){
        removeErrorMsg();
        return true
    }
    else {
        displayErrorMsg('Email is not Valid');
        return false;
    }
}
var timer = document.getElementById('timer');
submitBtn.addEventListener('click',()=>{
    var timeleft = 0;
var downloadTimer = setInterval(function(){
  if(timeleft > 4){
      clearInterval(downloadTimer);
    window.location.replace("http://127.0.0.1:5501/index.html");
  }
  var remain = 5 - timeleft;
 timer.innerText = 'Logging You in ' + remain + 's';
  timeleft += 1;
}, 1000);
})
