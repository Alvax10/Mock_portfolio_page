function addServiceCards(params = {}) {
    const myPortfolioTemplateEl = document.querySelector("#my-portfolio__template");
    const myPortfolioContainerEl = document.querySelector(".my-portfolio__container");
    

    // myPortfolioTemplateEl.content.querySelector(".my-Portfolio__article__img").src = params.image;
    myPortfolioTemplateEl.content.querySelector(".my-portfolio__article__title").textContent = params.title;
    myPortfolioTemplateEl.content.querySelector(".my-portfolio__article__description").textContent = params.description;
    // myPortfolioTemplateEl.content.querySelector(".my-portfolio__article__link").href = params.url;
    
    const myPortfolioClone = document.importNode(myPortfolioTemplateEl.content, true);
    myPortfolioContainerEl.appendChild(myPortfolioClone);
}


function getContentfulData() {
    return fetch("https://cdn.contentful.com/spaces/86ynffhfdhsn/environments/master/entries?access_token=YZZf8t5KFLEtWmM2d0gzxvQi5zeLgDjJS2Qwdjp3iV4&content_type=myPortfolio")
    .then(res => {
        return res.json()
    }).then((data) => {
        const fieldsColl = data.items.map((item)=> {
            return {
                title: item.fields.projectTitle,
                description: item.fields.projectdescription,
            };
        });
        return fieldsColl;
    });
}

function main() {
    getContentfulData().then((data) => {
        for (const d of data) {
            addServiceCards(d);
        }
    });
    
}
main();