const gameContainer = document.querySelector(".container"),
    gameBoard = document.querySelector(".game-board"),
    userRes= document.querySelector(".user_res img"),
    compRes= document.querySelector(".comp_res img"),
    result = document.querySelector(".result"),
    optionImg = document.querySelectorAll(".option img");

optionImg.forEach((image, index) => {
    image.parentElement.addEventListener("click", (e) => {
        image.parentElement.classList.add("active");

        userRes.src = compRes.src = "stone.png";
        result.textContent = "Wait a second...";

        optionImg.forEach((image2, index2) => {
            if (index !== index2) {
                image2.parentElement.classList.add("inactive");
            }
        });

        gameContainer.classList.add("start");

        let time = setTimeout(() => {
            gameContainer.classList.remove("start");

            let imageSrc = e.target.src;
            userRes.src = imageSrc;

            let compIndex = Math.floor(Math.random() * 3);
            let compImg1 = ["stone.png", "paper.png", "scissors.jpg"];
            compRes.src = compImg1[compIndex];

            let compValue = ["R", "P", "S"][compIndex];
            let userValue = ["R", "P", "S"][index];

            let outcomes = {
                "RR": "It's a tie!",
                "PP": "It's a tie!",
                "SS": "It's a tie!",
                "RS": "You win!",
                "PR": "You win!",
                "SP": "You win!",
                "RP": "You lose!",
                "PS": "You lose!",
                "SR": "You lose!"
            };

            let finalResult = userValue === compValue ? "Match Draw" : outcomes[userValue + compValue];
            result.textContent = `${finalResult} Won!!`;
        }, 2500);
    });
});
