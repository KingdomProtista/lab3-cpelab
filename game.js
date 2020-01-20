var numrand = Math.floor(Math.random()*100+1);
var num = document.getElementById('number');
var incorrect = document.querySelector('#incorrectanswer');
var incorrectid = document.getElementById('incorrectanswer');
var correct  = document.querySelector('#correctanswer');
var correctid = document.getElementById('correctanswer');
var submit = document.getElementById('submit');
var worng = document.getElementById('worng');
var last;
var count = 0;


function getInput(e) {
    e.preventDefault();
    document.getElementById('incorrectanswer').style.display = "block";
    document.getElementById('number').focus();
    
        checkcondition(num.value);
        console.log("numrand = " + numrand);
}

function checkcondition() {
    
    if (num.value == "" || isNaN(num.value)) {
        worng.style.display = "block";
        worng.textContent="Please Input number ."
        incorrectid.style.display = "none";
        correctid.style.display = "none";
        document.getElementById('highlow').textContent = "";
        return
    }
    if (num.value < 1) {
        worng.style.display = "block";
        worng.textContent="Number less than 1"
        incorrectid.style.display = "none";
        correctid.style.display = "none";
        document.getElementById('highlow').textContent = "";
        return
    }
    if (num.value > 100) {
        worng.style.display = "block";
        worng.textContent="Number more than 100"
        incorrectid.style.display = "none";
        correctid.style.display = "none";
        document.getElementById('highlow').textContent = "";
        return
    }

    if(num.value != numrand){
        worng.style.display = "none"
        last = incorrect.textContent;
        incorrect.textContent = last + " " + num.value;
        document.getElementById('correctanswer').style.background = "red";
        correct.textContent = "Wrong";
        count++;
        document.getElementById('attempt').textContent=count;
        document.getElementById('progress').textContent=count+"0%";
        document.getElementById('bar').style.width=count+"0%";
        if(count >= 10){
            submit.style.display = "none";
            document.getElementById('end').style.display = "block";
            correctid.style.display = "block";
            correct.textContent = "!!!!GameOver!!!!";
        }
        if(num.value > numrand){
            document.getElementById('highlow').textContent = "Last answer was too high!";
            document.getElementById('icon-highlow').className="fa fa-arrow-up";
        }else{
            document.getElementById('highlow').textContent = "Last answer was too low!";
            document.getElementById('icon-highlow').className="fa fa-arrow-down";
        }
        console.log("incorrect");
        console.log(num.value)
        console.log(count);
    }else{
        worng.style.display = "none"
        incorrectid.style.display = "none"
        correctid.style.display = "block"
        document.getElementById('icon-highlow').className="";
        document.getElementById('correctanswer').style.background = "green";
        correct.textContent = "Congratulations! You Win";
        submit.style.display = "none";
        document.getElementById('end').style.display = "block";
        document.getElementById('highlow').textContent = "";
    }
}

function repage(){
    location.reload();
}

