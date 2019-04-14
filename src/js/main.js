window.onload = () => {
    const modal = document.getElementById("media-modal");
    const toggles = document.getElementsByClassName("media-toggle");
    const modal_close = document.getElementsByClassName("modal-close")[0];
    const modal_content = document.getElementById("modal-content");
    const buy_button = document.getElementById("buy-button");

    modal_close.onclick = () => disableModal();
    buy_button.onclick = () => buyGame();

    for (let i = 0; i < toggles.length; i++) {
        const toggle = toggles.item(i);
        const content = toggle.getAttribute("id");
        toggle.onclick = () => enableModal(content);
    }

    function buyGame() {
        alert("Processing transaction...");
        buy_button.className = "button is-disabled is-large is-fullwidth";
        buy_button.innerHTML = "In Library";
        buy_button.onclick = () => {};
    }

    function disableModal() {
        modal_content.innerHTML = "";
        modal.className = "modal";
    }

    function enableModal(content) {
        let elem;
        if (content.includes("video")) {
            elem = document.createElement("iframe");
            elem.setAttribute("width", "1280");
            elem.setAttribute("src", "https://www.youtube.com/watch?v=Aduurw9s7GI");
        } else {
            elem = document.createElement("img");
            elem.setAttribute("src", "src/assets/" + content + ".jpg");
        }
        modal_content.appendChild(elem);
        modal.className = "modal is-active";
    }
}