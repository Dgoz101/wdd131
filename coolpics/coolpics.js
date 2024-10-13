const menuButton = document.querySelector(".menub");
function toggleMenu() {
    const menu = document.querySelector(".menu");
    menu.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);

function handleResize() {
    const menu = document.querySelector(".menu");
    if (window.innerWidth > 1000) {
        menu.classList.remove("hide");
    } else {
        menu.classList.add("hide");
    }
}

handleResize();
window.addEventListener("resize", handleResize);

function viewerTemplate(pic, alt) {
    return `<div class="viewer">
      <button class="viewclose">EXIT</button>
      <img src="${pic}" alt="${alt}">
      </div>`;
}
  
function viewHandler(event) {
    let clickedElement = event.target;

    let srcAttribute = clickedElement.src.split("-");

    let fullImage = `${srcAttribute[0]}-full.jpeg`;

    let viewerTemplate = `
        <div class="viewer">
            <button class="viewclose">EXIT</button>
            <img src="${fullImage}" alt="Full size image">
        </div>`;
    document.body.insertAdjacentHTML("afterbegin", viewerTemplate);

    let closeButton = document.querySelector('.viewclose');
    closeButton.addEventListener('click', closeViewer);
}

function closeViewer() {
    const viewer = document.querySelector('.viewer');
    if (viewer) {
        viewer.remove();
    }
}

document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('click', viewHandler);
}
);