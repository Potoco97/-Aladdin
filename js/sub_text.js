document.addEventListener("DOMContentLoaded", async function () {
    try {
        const response = await fetch("./text/choice.txt");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.text();
        document.getElementById("tmpBox").innerHTML = data;
    } catch (error) {
        console.error("There was a problm with the fetch operation:", error);
    }
});

document.addEventListener("DOMContentLoaded", async function () {
    try {
        const response = await fetch("./text/choice_a.txt");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.text();
        document.getElementById("tmpBox_a").innerHTML = data;
    } catch (error) {
        console.error("There was a problm with the fetch operation:", error);
    }
});

document.addEventListener("DOMContentLoaded", async function () {
    try {
        const response = await fetch("./text/choice_b.txt");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.text();
        document.getElementById("tmpBox_b").innerHTML = data;
    } catch (error) {
        console.error("There was a problm with the fetch operation:", error);
    }
});

document.addEventListener("DOMContentLoaded", async function () {
    try {
        const response = await fetch("./text/choice_c.txt");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.text();
        document.getElementById("tmpBox_c").innerHTML = data;
    } catch (error) {
        console.error("There was a problm with the fetch operation:", error);
    }
});