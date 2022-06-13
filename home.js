//challenge 3 stone pper scissors
function rpsGame(yourchoice){

    console.log(yourchoice);
    var humanchoice,botchoice;
    humanchoice=yourchoice.id;
    botchoice=numbertochoice(randtoint());
    console.log('computerchoice:',botchoice);
    results=decidewinner(humanchoice,botchoice);//(0,1) represents the score
    console.log(results);
    message=finalmessage(results);//you won --> this is message
    console.log(message)
    rpsfrontend(yourchoice.id,botchoice,message);


}

//bot needs to chose randomly
function randtoint(){
    return Math.floor(Math.random()*3);//main function for bot chose

}

function numbertochoice(number){
    return ['rock','paper','scissors'][number];
}
//six case bot picks rock,paper,scissors,and mans three
function decidewinner(yourchoice,computerchoice){
    //create database
    var rpsdatabase={
        'rock':{'scissors':1,'rock':0.5,'paper':0},
        'paper':{'rock':1,'paper':0.5,'scissors':0},
        'scissors':{'paper':1,'scissors':0.5,'rock':0}
    };

 var yourscore=rpsdatabase[yourchoice][computerchoice];
 var _computerscore=rpsdatabase[computerchoice][yourchoice];
 return [yourscore,_computerscore];
}

function finalmessage([yourscore,_computerscore]) {
    if(yourscore === 0) {
        return{'message':'You Lost:(','color':'red'};
    }else(yourscore === 1 )
        return{'message':'You Win:(','color':'green'};
        }

    


function rpsfrontend(_humanimagechoice,_botimagechoice,_finalmessage) {
    var imagedatabase ={
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissors':document.getElementById('scissors').src
    }
//lets remove all images
   document.getElementById('rock').remove();
   document.getElementById('paper').remove();
   document.getElementById('scissors').remove();
var humandiv = document.createElement('div');
var botdiv = document.createElement('div');
var messagediv = document.createElement('div');

humandiv.innerHTML="<img src='"+imagedatabase[_humanimagechoice]+"' height=150 width=150 style='box-shadow:0px 10px 50px rgba(37,50,233,1);'>"
messagediv.innerHTML="<h1>win or lose</h1>"
botdiv.innerHTML="<img src='"+imagedatabase[_botimagechoice]+"' height=150 width=150 style='box-shadow:0px 10px 50px rgba(243,38,24,1);'>"

document.getElementById('flex-box-rps-div').appendChild(humandiv);
document.getElementById('flex-box-rps-div').appendChild(messagediv);
document.getElementById('flex-box-rps-div').appendChild(botdiv);


   
}