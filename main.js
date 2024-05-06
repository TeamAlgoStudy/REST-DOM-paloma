document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');
    const title = document.createElement('p');
    title.innerText = 'Hello Tommy'
    body.appendChild(title)
})