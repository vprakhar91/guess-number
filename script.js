document.querySelector("form").onsubmit = (e) => {
    e.preventDefault();
    const inputValue = document.getElementById("value").value;
    if(!inputValue){
        return;
    }
    const randomNumber = randomNumberGenerator();
    if(Number(inputValue) === randomNumber){
        document.getElementById("icon").innerHTML = "&#10003";
        document.getElementById("icon").style.color = "green";
        document.getElementById("result").innerHTML="You guessed the number right."
    }else{
        document.getElementById("icon").innerHTML = "&#10006";
        document.getElementById("icon").style.color = "red";
        document.getElementById("result").innerHTML="You guessed the number wrong. Actual number is" + randomNumber;
        if(Number(inputValue) + 10 > randomNumber){
            document.getElementById("message").innerHTML =
            "You were near but little higher";
        }else if(Number(inputValue) - 10 < randomNumber){
            document.getElementById("message").innerHTML =
            "You were near but little lower";
        }
    }
};
const randomNumberGenerator = () => {
    const number = Math.floor(Math.random() * 100);
    return number;
}