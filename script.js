function reload() {
    const num1 = Math.floor(Math.random() * 6) + 1
    const num2 = Math.floor(Math.random() * 6) + 1

    document.querySelector(".img1").setAttribute("src", `./images/dice${num1}.png`)
    document.querySelector(".img2").setAttribute("src", `./images/dice${num2}.png`)


    if (num1 > num2) {
        document.querySelector("h1").innerText = "Player 1 wins"
    } else if (num2 > num1) {
        document.querySelector("h1").innerText = "Player 2 wins"
    } else {
        document.querySelector("h1").innerText = "Draw"
    }
}

document.querySelector("button").addEventListener("click", reload)