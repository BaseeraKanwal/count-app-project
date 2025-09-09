const minusBtn = document.querySelector('.minus');
const addBtn = document.querySelector('.add');
const count = document.querySelector('.count')
const numberSkip = document.querySelector('.number-skip')
const resetBtn = document.querySelector('.reset-btn');

minusBtn.addEventListener('click',()=>{
const countValue = parseInt(count.innerHTML);
const numberSkipCount = parseInt(numberSkip.value)
 count.innerHTML = countValue - numberSkipCount

})
addBtn.addEventListener('click',(e)=>{
 const countValue = parseInt(count.innerHTML);
 const numberSkipCount = parseInt(numberSkip.value)
 count.innerHTML = countValue + numberSkipCount
})

resetBtn.addEventListener('click', ()=>{
    count.innerHTML = 0
    numberSkip.value = 1
})
