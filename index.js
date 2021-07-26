const baseURL = 'https://www.breakingbadapi.com/api/'
const button = document.querySelector('button')
let characterID = 1

const apiCall = axios.get(`${baseURL}characters/${characterID}`)
    .then(res => {
        let div = document.createElement('div')
        let h2 = document.createElement('h2')
        document.body.appendChild(div)
        document.body.append(h2)
        h2.textContent = res.data[0].name
        console.log(res.data)
}).catch(error => console.log(error))

button.addEventListener('click',apiCall)