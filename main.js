const btnStart = document.querySelector('button.main');
const btnReset = document.querySelector('button.reset');

let time = 0;
let active = false;
let interID;

const timer = () => {
    if (!active) {
        active = !active;
        btnStart.textContent = 'Pause';
        interID = setInterval(start, 10)
    } else {
        active = !active;
        btnStart.textContent = 'Start';
        clearInterval(interID);
    }
}

const start = () => {
    time++
    document.querySelector('div.time div').textContent = (time / 100).toFixed(2)
}

const reset = () => {
    time = 0;
    document.querySelector('div.time div').textContent = '---';
    active = false;
    btnStart.textContent = 'Start';
    clearInterval(interID);
}

btnStart.addEventListener('click', timer)
btnReset.addEventListener('click', reset)