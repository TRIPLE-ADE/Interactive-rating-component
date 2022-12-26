const selectedRate = document.getElementById('selectedRate')
const rating = document.querySelector('.rating')
const thankYou = document.querySelector('.thankYou')
const submit = document.getElementById('submit')

//selecting the all the rating buttons using forEach 
document.querySelectorAll(".selected").forEach(e => {
    //adding an event listener to the rating button on click
    e.addEventListener('click', event => {
        //saving the content of the clicked button
        const savedValue = e.textContent  
        //adding event listeners to the submit button
        submit.addEventListener('click', function(){
            //displaying the content of the clicked button in 
            selectedRate.textContent = savedValue;
            rating.style.display = "none";
            thankYou.style.display = "block";

        })
    })
   
  })
