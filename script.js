/* ---------- Theme Toggle ---------- */
const themeToggle = document.getElementById("themeToggle");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeToggle.textContent = "☀️";
        localStorage.setItem("theme", "dark");
    } else {
        themeToggle.textContent = "🌙";
        localStorage.setItem("theme", "light");
    }
});

/* ---------- Even / Odd Logic ---------- */
const input = document.getElementById("number");
const result = document.getElementById("result");
const button = document.querySelector(".container button");

button.addEventListener("click", checkEvenOdd);

input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        checkEvenOdd();
    }
});

function checkEvenOdd() {
    const num = input.value;
    result.className = "";

    if (num === "") {
        result.textContent = "Please enter a number";
        result.style.color = "#999";
        return;
    }

    if (num % 2 === 0) {
        result.textContent = "✅ Even Number";
        result.classList.add("even");
    } else {
        result.textContent = "❌ Odd Number";
        result.classList.add("odd");
    }
}
