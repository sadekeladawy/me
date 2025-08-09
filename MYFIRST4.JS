function showTab(tabName) {
    document.querySelectorAll(".tab").forEach(tab => {
        tab.classList.remove("active");
    });
    document.getElementById(tabName).classList.add("active");
}

function calculatePrice() {
    const form = document.getElementById("pc-form");
    let total = 0;
    Array.from(form.elements).forEach(el => {
        if (el.tagName === "SELECT") {
            total += parseInt(el.value);
        }
    });
    document.getElementById("total-price").innerText = `Total Price: $${total}`;
}
