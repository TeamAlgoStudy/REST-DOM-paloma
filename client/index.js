

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
    enter.addEventListener('click', addTask);
    body.appendChild(enter)

    const list = document.createElement('ul')
    body.appendChild(list)


    //Creates new task and button tags
    function retrieveTasks(data) {
        const task = document.createElement('ol');
        task.contentEditable= true
        const btnDelete = document.createElement('button');
        const btnUpdate = document.createElement('button');
        btnDelete.innerText = 'x';
        btnDelete.style.margin = '5px'
        btnDelete.setAttribute('id', data._id)
        btnDelete.addEventListener('click', deleteTask);

        btnUpdate.innerText = 'update';
        btnUpdate.style.margin = '5px'
        btnUpdate.setAttribute('id', data._id)
        btnUpdate.addEventListener('click', updateTask);
        task.innerText = data.task
        task.append(btnUpdate)
        task.append(btnDelete)
        list.append(task)
    }

    //DELETE TASK
    function deleteTask(task) {
        const taskId = task.target.id;
        fetch(`/api/deleteTask/${taskId}`, {
            method: 'DELETE', 
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify({id:  taskId})
        })
        .then(response => response.json())
        .then(response => console.log('deleted Task', response))
        location.reload()
    }

    //ADD TASK
    function addTask() {
        fetch('/api/addTask', {
            method: 'POST', 
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify({data: input.value})
        })
        .then(data => data.json())
        .then(data => {
            retrieveTasks(data)
        })
        input.value = '';
    }

    //GET TASKS
    function getTasks() {
        fetch('/api/getTask')
        .then(data => data.json())
        .then(response => response.map(data => {
           retrieveTasks(data)
        }))
    }
    getTasks()

    // UPDATE TASK ?????
    function updateTask(task) {
        const taskId = task.target.id;
        console.log('update task', task.target)
        fetch(`/api/updateTask/${taskId}`, {
            method: 'PUT', 
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify({id: taskId})
        })
        .then(data => data.json())
        .then(data => {
            console.log('response from update', data)
            // retrieveTasks(data)
        })

    }

//-----------------------------------SIGN UP-------------------------//
 

const signup = document.createElement('div');
body.appendChild(signup)

const signupTitle = document.createElement('h2')
signupTitle.innerHTML = 'Signup';
signup.appendChild(signupTitle)

const username = document.createElement('label');
username.innerHTML = 'USERNAME: '
signup.appendChild(username)

const inputUser = document.createElement('input');
inputUser.placeholder = 'Enter your username'
signup.appendChild(inputUser)

const breakLine = document.createElement('br')
signup.appendChild(breakLine)

const password = document.createElement('label');
password.innerHTML = 'PASSWORD: '
signup.appendChild(password)

const inpuPassword = document.createElement('input');
inpuPassword.placeholder = 'Enter your password'
inpuPassword.setAttribute('type', 'password')

signup.appendChild(inpuPassword)

const breakLine2 = document.createElement('br')
signup.appendChild(breakLine2)

const btnSignup = document.createElement('button');
btnSignup.innerHTML = 'Login'
btnSignup.addEventListener('click', Signup)
signup.appendChild(btnSignup);

// Send user credentials to the backend
function Signup() {
    fetch('/api/auth/signup', {
        method: 'POST', 
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify({
            'username': inputUser.value, 
            'password': inpuPassword.value
        })
    })
    .then(data => data.json())
    .then(data => console.log('response from backend', data))
}

//-----------------------------------LOGIN-------------------------//

    const login = document.createElement('div');
    body.appendChild(login)

    const loginTitle = document.createElement('h2')
    loginTitle.innerHTML = 'Login';
    login.appendChild(loginTitle)

    const usernameLogin = document.createElement('label');
    usernameLogin.innerHTML = 'USERNAME: '
    login.appendChild(usernameLogin)

    const inputUserLogin = document.createElement('input');
    inputUserLogin.placeholder = 'Enter your username'
    login.appendChild(inputUserLogin)

    const breakLineLogin = document.createElement('br')
    login.appendChild(breakLineLogin)

    const passwordLogin = document.createElement('label');
    passwordLogin.innerHTML = 'PASSWORD: '
    login.appendChild(passwordLogin)

    const inpuPasswordLogin = document.createElement('input');
    inpuPasswordLogin.placeholder = 'Enter your password'
    inpuPasswordLogin.setAttribute('type', 'password')

    login.appendChild(inpuPasswordLogin)

    const breakLineLogin2 = document.createElement('br')
    login.appendChild(breakLineLogin2)

    const btnSignupLogin = document.createElement('button');
    btnSignupLogin.innerHTML = 'Login'
    btnSignupLogin.addEventListener('click', Login)
    login.appendChild(btnSignupLogin);
    
    // Send user credentials to the backend
    function Login() {
        fetch('/api/auth/login', {
            method: 'POST', 
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify({
                'username': inputUserLogin.value, 
                'password': inpuPasswordLogin.value
            })
        })
        .then(data => data.json())
        .then(data => console.log('response from backend', data))
    }

    

    




})











//     // GET TASKS
//     function getTasks() {
//         fetch('/api/getTask')
//         .then(data => data.json())
//         .then(data => retrieveTasks(data))
//     }
//     getTasks()

//         //DELETE TASKS
//         function deleteTask() {
//             console.log('helloooooooo')
//             // const taskId = this.parentNode.getAttribute('id')
//             // fetch(`/api/deleteTask/${taskId}`, {
//             //     method: 'DELETE', 
//             //     headers: {'Content-Type': 'application/json'}, 
//             //     body: JSON.stringify({id:  taskId})
//             // })
//             // .then(response => response.json())
//             // .then(response => location.reload())
//         }
//         const deleteATask = document.createElement('button');
//         deleteATask.innerHTML = 'x';
//         deleteATask.style.cursor = 'pointer';
//         deleteATask.style.marginLeft = '5px'
//         deleteATask.addEventListener('click', () => console.log('hi'))
//         list.appendChild(deleteATask)

//     function retrieveTasks(messages) {
//         let render  = document.createElement('ol');
//         messages.forEach(message  => {
           

//             render.innerHTML += `<p>${message.task}</p>` 
        
//         })
//         // const task = document.createElement('ol');
//         // task.setAttribute('id', response._id)
//         // task.innerHTML = response.task;
//         // task.style.margin = '10px'
//         // list.appendChild(task);

//         // //delete button
       
//         list.appendChild(render)
//     }
    




// //     // ADD NEW TASK
// //     function addTask(e) {
// //         e.preventDefault();
// //         fetch('/api/addTask', {
// //             method: 'POST', 
// //             headers: {'Content-Type': 'application/json'}, 
// //             body: JSON.stringify({data: input.value})
// //         })
// //         .then(data => data.json())
// //         .then(data => {
// //             location.reload();
// //             // const task = document.createElement('ol');
// //             // task.setAttribute('id', data._id)
// //             // task.innerHTML = data.task;
// //             // task.style.margin = '10px'
// //             // list.appendChild(task);
          
// //         })
// //     }










// // // class Task {
// // //     constructor(task)
// // //     {
// // //     this.task = document.createElement('input')
// // //     this.task.type = 'checkbox'
// // //     this.task.innerHTML = task.task;
// // //     list.appendChild(this.task)
// // //     this.label = document.createElement('label');
// // //     this.label.innerHTML = task.task;
// // //     list.appendChild(this.label)
// // //     this.task.onclick = this.deleteTask.bind(this);
// // //     this._id = task._id
// // //     }
// // //     deleteTask() {
// // //         console.log(this._id)
// // //         fetch('/api/deleteTask', {
// // //             method: 'DELETE', 
// // //             headers: {'Content-Type': 'application/json'}, 
// // //             body: JSON.stringify({id:  this._id})
// // //         })
// // //         .then(data => data.json())
// // //         .then(data => console.log('data deleted', data))
// // //     }
// // // }