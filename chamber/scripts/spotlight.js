const spotlight = document.querySelector('#spotlight');

async function getMembersData() {
    const url = 'https://josediaz-v.github.io/wdd230/chamber/data/members.json';
    const response = await fetch(url);    
    const data = await response.json();
    return data.members;
}

function displayRandomGoldMember(members) {
    const goldMembers = members.filter(member => member.membership === 'Gold');

    if (goldMembers.length > 0) {
        const randomIndex = Math.floor(Math.random() * goldMembers.length);
        const member = goldMembers[randomIndex];

        const memberContent = `
            <h3>${member.name}</h3>
            <a href="${member.url}" target="_blank"><img src="${member.icon}" alt="Logo of ${member.name} ${member.lastname}" loading="lazy" width="50"></a>
            <p>Address: ${member.address}</p>
            <p>Phone: ${member.phone}</p>
        `;

        spotlight.innerHTML = memberContent;
    }
}

getMembersData().then(displayRandomGoldMember);
