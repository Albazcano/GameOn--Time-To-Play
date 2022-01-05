let [computer_score,user_score]=[0,0];
let result_ref = document.getElementById("result");
let choices_object = {
    'rock' : {
        'rock' : 'draw',
        'scissors' : 'win', 
        'paper' : 'lose',
        'lizzard' : 'win', 
        'spock' : 'lose',
    },
    'scissor' : {
        'rock' : 'lose',
        'scissors' : 'draw',
        'paper' : 'win',
        'lizzard' : 'win',
        'spock' : 'lose',
    },
    'paper' : {
        'rock' : 'win',
        'scissors' : 'lose',
        'paper' : 'draw',
        'lizzard' : 'lose',
        'spock' : 'win',
    },
    'lizzard' : {
        'spock' : 'win',
        'paper' : 'win',
        'scissors': 'lose',
        'rock' : 'lose',
        'lizzard': 'draw',
    },
    'spock' : {
       'scissors': 'win',
        'rock' : 'win',
        'paper' : 'lose',
        'lizzard' : 'lose',
        'spock' : 'draw'
    }

}

function checker(input){
    var choices = ["rock", "paper", "scissors", "lizzard", "spock"];
    var num = Math.floor(Math.random()*5);

    document.getElementById("comp_choice").innerHTML = 
    ` Computer choose <span> ${choices[num].toUpperCase()} </span>`;

    document.getElementById("user_choice").innerHTML = 
    ` You choose <span> ${input.toUpperCase()} </span>`;

    let computer_choice = choices[num];

    switch(choices_object[input][computer_choice]){
        case 'win':
            result_ref.style.cssText = "background-color: #cefdce; color: #689f38";
            result_ref.innerHTML = "YOU WIN";
            user_score++;
            break;
        case 'lose':
            result_ref.style.cssText = "background-color: #ffdde0; color: #d32f2f";
            result_ref.innerHTML = "YOU LOSE";
            computer_score++;
            break;
        default:
            result_ref.style.cssText = "background-color: #e5e5e5; color: #808080";
            result_ref.innerHTML = "DRAW";
            break;
    }

    document.getElementById(comparison).innerHTML =

    document.getElementById("computer_score").innerHTML = computer_score;
    document.getElementById("user_score").innerHTML = user_score;
}
