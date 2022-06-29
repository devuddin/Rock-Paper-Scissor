let items = document.getElementById("item");
let elem = document.getElementById("item").getElementsByTagName("img")
let random = Math.floor(Math.random() * elem.length);


// function rockClick(){
//     console.log(rock);
//     rock.remove();
// paper.remove();
//     scissor.remove();

// }
// console.log(random)
// function paperClick(){
//     console.log(paper);
//     rock.remove();
//     paper.remove();
//     scissor.remove();

// }

// function scissorClick(){
//     console.log(scissor);
//     rock.remove();
//     paper.remove();
//     scissor.remove();

// }

function rpsGame(yourChoice) {
    // console.log(yourChoice);
    // console.log(yourChoice.src);
    let humanChoice = yourChoice.id;
    let botChoice = numberToChoice(random);
    console.log("bot has choosen " + botChoice);
    console.log("Your choice " + humanChoice);
    let result = decideWinner(humanChoice, botChoice);
    let message = finalMessage(result);
    console.log(message);
    console.log(result);
    rpsFrontEnd(humanChoice,botChoice,message);
}
function numberToChoice(number) {
    return ['rock', 'paper', 'scissor'][number]
}
function decideWinner(yourChoice, computerChoice) {
    // ----------first way to check all the posiblities-------------
    // if(hc=="rock" && bc=="paper"){
    //     console.log("human lost")
    // }
    // else if(hc=="rock" && bc=="rock") {
    //     console.log("tie")
    // }
    // else if(hc=="rock" && bc=="scissor"){
    //     console.log("human wins")
    // }
    // else if(hc=="paper" && bc=="paper"){
    //     console.log("tie")
    // }
    // else if(hc=="paper" && bc=="scissor"){
    //     console.log("human lost")
    // }
    // else if(hc=="paper" && bc=="rock"){
    //     console.log("human wins")
    // }
    // else if(hc=="scissor" && bc=="rock"){
    //     console.log("human lost");
    // }
    // else if(hc=="scissor" && bc=="paper"){
    //     console.log("human wins");
    // }
    // else if(hc=="scissor" && bc=="scissor"){
    //     console.log("tie");
    // }



    //--------------second way to make an object kinda a like a database that contain all the possiblities for each item--------------
    var rpsJson = {
        'rock': {
            'rock': 0.5,
            'paper': 0,
            'scissor': 1
        },
        'paper': {
            'rock': 1,
            'paper': 0.5,
            'scissor': 0
        },
        'scissor': {
            'rock': 0,
            'paper': 1,
            'scissor': 0.5
        }
    }
    var yourScore = rpsJson[yourChoice][computerChoice];
    var botScore = rpsJson[computerChoice][yourChoice];
    console.log("yourScore:- " + yourScore)
    console.log("botScore:- " + botScore)
    return [yourScore, botScore];
}
function finalMessage([yourScore,botScore]){
    if(yourScore===0){
        return{'message': 'You Lost!😲','color':'red'};
    }
    else if(yourScore===0.5){
        return{'message': 'You Tied!','color':'yellow'};
    }
    else{
        return{'message':'You Win🎉😎','color':'green'};
    }
}
function rpsFrontEnd(humanImageChoice,botImageChoice,finalMessage){
    var images = {
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissor':document.getElementById('scissor').src,
    }  
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();
    document.getElementById('rock').remove();
    let humanDiv = document.createElement('div');
    let botDiv = document.createElement('div');
    let messageDiv = document.createElement('div');
    humanDiv.innerHTML= "<img src='"+images[humanImageChoice]+"'alt='item img' style='box-shadow: 5px 5px 5px 5px rgba(10, 67, 255, 0.5)'>"
    botDiv.innerHTML= "<img src='"+images[botImageChoice]+"'alt='item img' style='    box-shadow: 5px 5px 5px 5px rgba(255, 10, 10, 0.5)'>"
    messageDiv.innerHTML = "<h1 style='color:"+finalMessage['color']+"; font-size:60px; padding:30px;'>"+finalMessage['message']+"</h1>"
    console.log(images["rock"])
    console.log(finalMessage['color'])
    items.appendChild(humanDiv);
    items.appendChild(messageDiv)
    items.appendChild(botDiv);
}