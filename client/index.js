document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');

    const title = document.createElement('h1');
    title.innerText = 'To do List:';
    body.appendChild(title);

    const input = document.createElement('input');
    input.placeholder = 'Enter a new task';
    input.style.height = '25px';
    input.style.fontSize = '16px'

    body.appendChild(input);

    const enter = document.createElement('button');
    enter.innerText = 'Enter';
    enter.style.width = '100px';
    enter.style.height = '30px';
    enter.style.cursor = 'pointer';
    enter.style.marginLeft = '10px';
    

    body.appendChild(enter)




})