function showTab(tabName) {
    document.querySelectorAll(".tab").forEach(tab => {
        tab.classList.remove("active");
    });
    const target = document.getElementById(tabName);
    target.classList.add("active");
}

function calculatePrice() {
    const form = document.getElementById("pc-form");
    let total = 0;
    Array.from(form.elements).forEach(el => {
        if (el.tagName === "SELECT") {
            total += parseInt(el.value);
        }
    });

    // Animate price counting
    let current = 0;
    const priceDisplay = document.getElementById("total-price");
    const step = Math.ceil(total / 50);
    const interval = setInterval(() => {
        current += step;
        if (current >= total) {
            current = total;
            clearInterval(interval);
        }
        priceDisplay.innerText = `Total Price: $${current}`;
    }, 15);
}
