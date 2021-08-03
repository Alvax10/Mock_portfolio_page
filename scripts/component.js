function component() {
    const componenteEl = document.querySelector(".contact-component-container");
    componenteEl.innerHTML =
    `<div class="contact-component-container">
        <div class="contact-container">
            <h2 class="component-container__title">Write Me</h2>
            <form class="component-container__form">
                <div class="component-container__form__name-cont">
                    <label for="name" class="form__name">Name</label>
                    <input type="text" id="name" class="form__name__input">
                </div>
                <div class="component-container__form__email-cont">
                    <label for="email" class="form__email">Email</label>
                    <input type="text" id="email" class="form__email__input">
                </div>
                <div class="component-container__form__message-cont">
                    <label for="message" class="form__message">Message</label>
                    <input type="textarea" id="message" class="form__message__input">
                </div>
            <button name="form__button" class="component-container__form__button">Send</button>
        </form>
    </div>
    </div>`;
}

function sendContactData() {
    const contactFormEl = document.querySelector(".component-container__form");
    contactFormEl.addEventListener("submit", ((e) => {
        e.preventDefault();

        const response = fetch('https://apx-api.vercel.app/api/utils/dwf', {
            method: 'POST',
            body: JSON.stringify ({
                "to": "alvaro695547@gmail.com",
                "message": "Desafío final de Modulo 4",
            }),
            headers:{
                'Content-Type': 'application/json',
            }
        }) 
        // .then(res => res.json())
        .then(data => console.log(data));
    
        return response
    }));

}

function main() {
    component();
    sendContactData();
}
main();
