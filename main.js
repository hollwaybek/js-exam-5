let span = document.querySelector('.dark');
let header = document.querySelector('header');

let darkMode = false;

span.addEventListener('click', function () {
    if (darkMode) {
        document.body.style.backgroundColor = '#202C36';
        document.body.style.color = 'black';
        header.style.backgroundColor = "";
        darkMode = false;
        span.textContent = 'Dark Mode';
    } else {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';

        header.style.backgroundColor = "#2a2b2d";
        darkMode = true;
        span.textContent = 'Light Mode';
    }
});



let arr = [
    {
        id: 1,
        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/800px-Flag_of_Germany.svg.png',
        country: 'Germany',
        Population: '81,770,900',
        Region: 'Europe',
        Capital: 'Berlin',
    },

    {
        id: 2,
        photo: 'https://cdn.britannica.com/79/4479-050-6EF87027/flag-Stars-and-Stripes-May-1-1795.jpg',
        country: 'United States of America',
        Population: '323,947,000',
        Region: 'Americas',
        Capital: 'Washington, D.C.',
    },

    {
        id: 3,
        photo: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/1200px-Flag_of_Brazil.svg.png',
        country: 'Brazil',
        Population: '206,135,893',
        Region: 'Americas',
        Capital: 'Brasilia',
    },

    {
        id: 4,
        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/1200px-Flag_of_Iceland.svg.png',
        country: 'Iceland',
        Population: '334,300',
        Region: 'Europe',
        Capital: 'Reykjavik',
    },

    {
        id: 5,
        photo: 'https://cdn.britannica.com/40/5340-004-B25ED5CF/Flag-Afghanistan.jpg',
        country: 'Avganistan',
        Population: '27,657,145',
        Region: 'Asia',
        Capital: 'Kabul',
    },

    {
        id: 6,
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJUK66l8lDwZWHg1nyi_sgnm-5TiHpKyhkwfqcKD-XPQ&s',
        country: 'Åland Islands',
        Population: '28,875',
        Region: 'Europe',
        Capital: 'Marichamn',
    },

    {
        id: 7,
        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Flag_of_Albania.svg/2000px-Flag_of_Albania.svg.png',
        country: 'Albania',
        Population: '2,886,026',
        Region: 'Europe',
        Capital: 'Tirana',
    },

    {
        id: 8,
        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Algeria.svg/1200px-Flag_of_Algeria.svg.png',
        country: 'Algeria',
        Population: '40,400,000',
        Region: 'Africa',
        Capital: 'Algiers',
    },

]

const wrapper = document.querySelector('.wrapper');
const input = document.querySelector('.input');
let result = [];

const CreateCard = (data) => {
    wrapper.innerHTML = '';
    data.forEach((v) => {
        const card = document.createElement('div');
        card.style.backgroundColor = darkMode ? '#2a2b2d' : '';
        card.style.padding = '10px'
        card.innerHTML = `
        <img width='267' height='160' src='${v.photo}'>
        <h3 style="margin-top: 20px; ">Country: ${v.country}</h3>
        <p style="margin-top: 10px;">Population: ${v.Population}</p>
        <p style="margin-top: 10px;">Region: ${v.Region}</p>
        <p style="margin-top: 10px;">Capital: ${v.Capital}</p>
    `;

        wrapper.appendChild(card);
    });
};

input.addEventListener("input", () => {
    result = arr.filter((v) => v.country.toLowerCase().includes(input.value.toLowerCase()));
    CreateCard(result);
});
