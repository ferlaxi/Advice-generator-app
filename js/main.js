const adv = document.getElementById('advice');
const button = document.getElementById('btn');
const num = document.getElementById('number');

const apiAdvice = async () =>{
    let url = ('https://api.adviceslip.com/advice', { cache: "no-store" })
    await fetch (url)
    .then(res => res.json())
    .then(data => {
        num.innerText = `ADVICE #${data.slip.id}`
        adv.innerText = `${data.slip.advice}`
    })
}

button.addEventListener('click', () =>{
    num.innerText = '';
    adv.innerText = '';
    apiAdvice();
})