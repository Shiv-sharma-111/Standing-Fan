// Created Ax Shivam Sharma

$(document).ready(function(){
    currentSpeed = 0;
    var level = $('.level');
    var bladeContainer = $('.blade-container');

    level.on('click', function(){
        if($(this).text() === '0'){
            level.attr('disabled', 'true');
            if(currentSpeed === 1000){
            setTimeout(function(){
               bladeContainer.css('-webkit-animation-duration', '2000ms');
            }, 1000);
            setTimeout(function(){
               bladeContainer.css('-webkit-animation-duration', '3000ms')
            }, 3000);
            setTimeout(function(){
               bladeContainer.css('-webkit-animation-duration', '4000ms');
            }, 6000);
            setTimeout(function(){
               bladeContainer.css('-webkit-animation-duration', '0ms');
                level.removeAttr('disabled');
            }, 10000);
            }else if(currentSpeed === 500){
            setTimeout(function(){
               bladeContainer.css('-webkit-animation-duration', '500ms')
            }, 2000);
            setTimeout(function(){
               bladeContainer.css('-webkit-animation-duration', '750ms');
            }, 3000);
            setTimeout(function(){
               bladeContainer.css('-webkit-animation-duration', '1000ms');
            }, 5000);
            setTimeout(function(){
               bladeContainer.css('-webkit-animation-duration', '2000ms')
            }, 8000);
            setTimeout(function(){
               bladeContainer.css('-webkit-animation-duration', '0ms');
                level.removeAttr('disabled');
            }, 10000);
            }else if(currentSpeed === 250){
               setTimeout(function(){
               bladeContainer.css('-webkit-animation-duration', '300ms');
            }, 1000);
            setTimeout(function(){
               bladeContainer.css('-webkit-animation-duration', '500ms')
            }, 2000);
            setTimeout(function(){
               bladeContainer.css('-webkit-animation-duration', '750ms');
            }, 3000);
            setTimeout(function(){
               bladeContainer.css('-webkit-animation-duration', '1000ms');
            }, 5000);
            setTimeout(function(){
               bladeContainer.css('-webkit-animation-duration', '2000ms')
            }, 8000);
            setTimeout(function(){
               bladeContainer.css('-webkit-animation-duration', '0ms')
                level.removeAttr('disabled');
            }, 10000);
            }
        }
        else if($(this).text() === '1'){
            currentSpeed = 1000;
            bladeContainer.css('-webkit-animation-duration', '1000ms');
        }
        else if($(this).text() === '2'){
            currentSpeed = 500;
            bladeContainer.css('-webkit-animation-duration', '500ms');
        }
        else if($(this).text() === '3'){
            currentSpeed = 250;
            bladeContainer.css('-webkit-animation-duration', '250ms');
        }
    });
});
