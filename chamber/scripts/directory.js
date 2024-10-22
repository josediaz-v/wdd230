const url = 'https://josediaz-v.github.io/wdd230/chamber/data/members.json';
const cards = document.querySelector('#cards');

async function getMembersData() {
    const response = await fetch(url);    
    const data = await response.json();
    console.table(data.members);
    displayMembers(data.members);
}

const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement('section');
        const name = document.createElement('h2');
        const address = document.createElement('p');
        const phone = document.createElement('p');
        const url = document.createElement('a');
        url.setAttribute('href', member.url);
        url.setAttribute('target', '_blank');
        url.setAttribute('class', 'cardLink');

        const icon = document.createElement('img');
        const membership = document.createElement('p');

        name.textContent = member.name;
        address.textContent = `Address: ${member.address}`;
        phone.textContent = `Phone Number: ${member.phone}`;
        url.textContent = `Website`;
        membership.textContent = `Membership: ${member.membership}`;

        icon.setAttribute('src', member.icon);
        icon.setAttribute('alt', `Logo of ${member.name} ${member.lastname}`);
        icon.setAttribute('loading', 'lazy');
        icon.setAttribute('width', '10');
        icon.setAttribute('height', 'auto');

        card.appendChild(name);
        card.appendChild(icon);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(url);
        card.appendChild(membership);

        cards.appendChild(card);
    });
}

getMembersData();