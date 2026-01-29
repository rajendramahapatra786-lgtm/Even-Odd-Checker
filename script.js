/* ---------- Theme Toggle ---------- */
const themeToggle = document.getElementById("themeToggle");

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

button.disabled = true;

input.addEventListener("input", () => {
    button.disabled = input.value === "";
});

button.addEventListener("click", checkEvenOdd);

input.addEventListener("keypress", (e) => {
    if (e.key === "Enter" && !button.disabled) {
        checkEvenOdd();
    }
});

function checkEvenOdd() {
    const num = Number(input.value);
    result.className = "";

    if (input.value === "") {
        result.textContent = "Please enter a number";
        result.style.color = "#999";
        return;
    }

    if (!Number.isInteger(num)) {
        result.textContent = "Please enter an integer number";
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

