// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
// Import any additional modules you want to include below \/
import { convertedData } from '../scripts/data.js'
// \/ All of your javascript should go here \/

const importedData = JSON.parse(convertedData);

const cakes = document.getElementById('cakes')

importedData.cakes.map(cake => {
    let div = document.createElement('div');
    div.style.width = '250px'
    div.style.height = '400px'
    div.style.display = 'flex'
    div.style.flexDirection = 'column'
    div.style.margin = '35px'

    let img = document.createElement('img');
    img.src = cake.image;
    img.width = '250'
    img.height = '200'

    let title = document.createElement('h5');
    title.innerHTML = cake.title
    title.style.fontWeight = '600'

    let p = document.createElement('p');
    p.innerHTML = cake.author
    p.style.borderBottom = '1px solid black'

    let p1 = document.createElement('p');
    p1.style.width = '250px';
    p1.innerHTML = 'Ingredients: ' + cake.ingredients.join(', ');

    div.append(img, title, p, p1);
    cakes.appendChild(div);
});

const biscuits = document.getElementById('biscuits')

importedData.biscuits.map(biscuit => {
    let div = document.createElement('div');
    div.style.width = '250px'
    div.style.height = '400px'
    div.style.display = 'flex'
    div.style.flexDirection = 'column'
    div.style.margin = '35px'

    let img = document.createElement('img');
    img.src = biscuit.image;
    img.width = '250'
    img.height = '200'

    let title = document.createElement('h5');
    title.innerHTML = biscuit.title
    title.style.fontWeight = '600'


    let p = document.createElement('p');
    p.innerHTML = biscuit.author
    p.style.borderBottom = '1px solid black'


    let p1 = document.createElement('p');
    p1.style.width = '250px';
    p1.innerHTML = 'Ingredients: ' + biscuit.ingredients.join(', ');

    div.append(img, title, p, p1);
    biscuits.appendChild(div)
});

const bread = document.getElementById('bread')

importedData.bread.map(br => {
    let div = document.createElement('div')
    div.style.width = '250px';
    div.style.height = '400px';
    div.style.display = 'flex';
    div.style.flexDirection = 'column';
    div.style.margin = '35px';

    let img = document.createElement('img')
    img.src = br.image;
    img.width = '250';
    img.height = '200';

    let title = document.createElement('h5')
    title.innerHTML = br.title;
    title.style.fontWeight = '600';


    let pAuth = document.createElement('p')
    pAuth.innerHTML = br.author;
    pAuth.style.borderBottom = '1px solid black';

    let pIng = document.createElement('p')
    pIng.style.width = '250px';
    pIng.innerHTML = 'Ingredients: ' + br.ingredients.join(', ');

    div.append(img, title, pAuth, pIng);
    bread.appendChild(div);
});

