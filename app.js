let count = 0
// let decrease = document.querySelector(`#decrease`)
// let reset = document.querySelector(`#reset`)
// let increase = document.querySelector(`#increase`)
let span = document.getElementsByTagName("span")[0]



// console.log(decrease);
// console.log(reset);
// console.log(increase);

let button = document.querySelectorAll(`.btn`)


button.forEach((btn) =>{
    btn.addEventListener(`click` , (e) =>{let current = e.currentTarget.classList;
    if(current.contains("increase")){
        count++
    }
    else if(current.contains("decrease")){
        count--
    }
    else{
        count=0
    }
    
    count < 0 ? span.style.color = "red" : count > 0 ? span.style.color = `blue` : span.style.color = "pink"
    span.textContent = count})
    
    
})