function addServiceCards(params = {}) {
    const myServicesTemplateEl = document.querySelector("#my-services__template");
    const myServicesContainerEl = document.querySelector(".my-services__container");
    

    // myServicesTemplateEl.content.querySelector(".my-services__article__img").src = params.image;
    myServicesTemplateEl.content.querySelector(".my-services__article__title").textContent = params.title;
    myServicesTemplateEl.content.querySelector(".my-services__article__description").textContent = params.description;
    
    var myServicesClone = document.importNode(myServicesTemplateEl.content, true);
    myServicesContainerEl.appendChild(myServicesClone);
}


function getMyServicesfulData() {
    return fetch("https://cdn.contentful.com/spaces/86ynffhfdhsn/environments/master/entries?access_token=ZdxdxKkq2HYlwzQwJagUR2HJviR2qxl_64ousICYrEU&content_type=anotherServices")
    .then(res => {
        return res.json()
    }).then((data) => {
        const fieldsColl = data.items.map((item)=> {
            return {
                title: item.fields.asTitle,
                description: item.fields.asDescription,
            };
        });
        return fieldsColl;
    });
}

function main() {
    getMyServicesfulData().then((data) => {
        for (const d of data) {
            addServiceCards(d);
        }
    });
}
main();