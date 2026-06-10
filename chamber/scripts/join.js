//open modal when button is clicked
function OpenModal(modalId) {
    document.getElementById(modalId).showModal();
}

//close modal when close button is clicked
function CloseModal(modalId) {
    document.getElementById(modalId).close();
}

function openAndCloseModal() {

    document.getElementById("nonProfit").addEventListener("click", () => {
        OpenModal("modal");
        document.getElementById("title").innerHTML = "Non Profit Membership Level";
    });
    document.getElementById("bronze").addEventListener("click", () => {
        OpenModal("modal");
        document.getElementById("title").innerHTML = "Bronze Membership Level";
    });
    document.getElementById("silver").addEventListener("click", () => {
        OpenModal("modal");
        document.getElementById("title").innerHTML = "Silver Membership Level";
    });
    document.getElementById("gold").addEventListener("click", () => {
        OpenModal("modal");
        document.getElementById("title").innerHTML = "Gold Membership Level";
    });

    document.getElementById("close").addEventListener("click", () => {
        CloseModal("modal");
    });
}

openAndCloseModal();

