function displayMenuComponent() {
    
    const openMenuEl = document.querySelector(".header-component__open-burger-menu");
    const closeMenuEl = document.querySelector(".image-container");
    const windowMenuEl = document.querySelector(".header-component__window-menu");

    openMenuEl.addEventListener("click",()=> {
        windowMenuEl.style.display = "flex";
        windowMenuEl.style.flexDirection = "column";
        windowMenuEl.style.justifyContent = "right";
    });
    closeMenuEl.addEventListener("click",()=> {
        windowMenuEl.style.display = "none";
    });
}

function displayHeaderComponent() {
    const headerContainerEl = document.querySelector(".general-header__component");
    headerContainerEl.innerHTML = 
    `<header class="header-component">
    <h2 class="header-component__logo">ALVA</h2>
    <div class="header-component__open-burger-menu">
        <img src="/img/burger.png" alt="Ham" class="burger">
    </div>
    <div class="header-component__window-menu">
        <p class="image-container">
            <img src="/img/x for close.png" alt="Close" class="cross-close">
        </p>
        <div class="burger-menu__opened">
            <a href="/portfolio.html" class="menu-page__text">Portfolio</a>
            <a href="/services.html" class="menu-page__text">Services</a>
            <a href="/contact.html" class="menu-page__text">Contact</a>
        </div>
    </div>
    <!-- this just appears on pc -->
    <section class="desktop-type">
        <div class="header-component__pc-menu">
            <a href="/portfolio.html" class="menu-option">Portfolio</a>
            <a href="/services.html" class="menu-option">Services</a>
            <a href="/contact.html" class="menu-option">Contact</a>
        </div>
    </section>
</header>`;
}

function main() {
    displayHeaderComponent();
    displayMenuComponent();
}
main();