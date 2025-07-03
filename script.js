
document.addEventListener("DOMContentLoaded", function () {
    const nextBtn = document.getElementById("next");
    const input = document.querySelector(".username");
    const box = document.querySelector(".box");
    const box2 = document.querySelector(".box2");
    const box3 = document.querySelector(".box3");
    const box4 = document.querySelector(".box4");
    const useroutput = document.querySelector(".useroutput");
    const ltr = document.getElementById("ltr");

    nextBtn.addEventListener("click", function () {
        const username = input.value.trim();
        if (!username) {
            alert("Please enter your username.");
            return;
        }

        box.style.display = "none";
        box2.style.display = "block";
        useroutput.innerText = `Sending gems to ${username} ...`;

        setTimeout(() => {
            box2.style.display = "none";
            box3.style.display = "block";
        }, 2000);
    });

    window.lasteps = function (option) {
        const username = input.value.trim();
        if (!username) {
            alert("Please enter a username!");
            return;
        }

        let gemAmount = 0;
        if (option === 1) gemAmount = 950;
        if (option === 2) gemAmount = 2000;
        if (option === 3) gemAmount = 5000;
        if (option === 4) gemAmount = 10000;

        // Show loading again
        box3.style.display = "none";
        box2.style.display = "block";
        useroutput.innerText = `Sending gems to ${username} ...`;

        setTimeout(() => {
            box2.style.display = "none";
            box4.style.display = "block";
            ltr.innerHTML = `<b>${username}</b> — Please click verify to get ${gemAmount} gems ✅`;
        }, 2000);
    };
});
