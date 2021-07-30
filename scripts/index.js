function addWorkCards(params = {}) {
    const myServicesTemplateEl = document.querySelector("#my-services__template");
    const myServicesContainerEl = document.querySelector(".my-services__container");
    

    // myServicesTemplateEl.content.querySelector(".my-services__article__img").src = params.image;
    myServicesTemplateEl.content.querySelector(".my-services__article__title").textContent = params.title;
    myServicesTemplateEl.content.querySelector(".my-services__article__description").textContent = params.description;
    
    var myServicesClone = document.importNode(myServicesTemplateEl.content, true);
    myServicesContainerEl.appendChild(myServicesClone);
}


function getContentfulData() {
    return fetch("https://cdn.contentful.com/spaces/86ynffhfdhsn/environments/master/entries?access_token=qeUHlYxRjUuOejpeiMXNLjUkOlhMrdf9JiIkOck3tnM&content_type=services")
    .then(res => {
        return res.json()
    }).then((data) => {
        const fieldsColl = data.items.map((item)=> {
            return {
                title: item.fields.title,
                description: item.fields.description1,
            };
        });
        return fieldsColl;
    });
}


function main() {
    getContentfulData().then((data) => {
        for (const d of data) {
            addWorkCards(d);
        }
    });
}
main();