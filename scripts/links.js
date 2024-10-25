const baseURL = "https://josediaz-v.github.io/wdd230";
const linksURL = "https://josediaz-v.github.io/wdd230/data/links.json"
const weeksUL = document.querySelector('#weeks');


async function getLinks() {
    try {
        const response = await fetch(linksURL);
        if(response.ok) {
            const data = await response.json();
            console.log(data);

            displayLinks(data.weeks);
        }
        else {
            throw Error(await response.text);
        }
    }
    catch (error) {
        console.log(error);
    }
}

const displayLinks = (weeks) => {
    weeks.forEach((week) => {
        separator = ' | '
        const weekLi = document.createElement('li');
        const weekName = document.createElement('p');

        weeksUL.appendChild(weekLi);
        weekLi.appendChild(weekName);

        weekName.textContent = `${week.week}: `;

        (week.links).forEach((link, index) => {
            const linkA = document.createElement('a');
            weekLi.appendChild(linkA);

            linkA.setAttribute('href', link.url);
            linkA.setAttribute('target', '_blank');
            linkA.textContent = `${link.title}`;
            weekName.appendChild(linkA);
            if (index < week.links.length - 1){
                weekName.append(separator);
            }
        });
    });
}

getLinks();