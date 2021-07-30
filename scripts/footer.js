function footerContainer() {
    const footerContainerEl = document.querySelector(".footer-component-container");
    footerContainerEl.innerHTML = 
    `<div class="footer-component-container">
    <footer class="footer-component">
        <h2 class="footer-component__logo">ALVA</h2>
        <div class="social-media-containers">
            <a href="https://www.instagram.com/alvarobastia/" class="instagram-container">
                <p class="social-media">Instagram</p>
                <img src="icon/instagram.png" alt="Instagram Logo" class="generic-logo">
            </a>
            <a href="" class="linked-in-container">
                <p class="social-media">Linkedin</p>
                <img src="icon/linkedin.png" alt="Linkedin Logo" class="generic-logo">
            </a>
            <a href="https://github.com/Alvax10" class="github-container">
                <p class="social-media">Github</p>
                <img src="icon/github.png" alt="Github Logo" class="generic-logo">
            </a>
        </div>
    </footer>
</div>`;
}
footerContainer();