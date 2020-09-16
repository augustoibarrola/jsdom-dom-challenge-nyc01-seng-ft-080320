document.addEventListener("DOMContentLoaded", function(e){
    // As a user, I should see the timer increment every second once the page has loaded.
    
        const timer = window.setInterval(function() {
        const counter = document.querySelector("#counter")
        const number = counter.innerText ++
        
        const pauseButton = document.querySelector("#pause")
            pauseButton.addEventListener('click', e => {
                
                if  pauseButton.innerText == "pause"
                    const minusButton = document.querySelector('#minus')
                    minusButton.disabled = true
                    const plusButton = document.querySelector('#plus')
                    plusButton.disabled = true
                    const heartButton = document.querySelector('#heart')
                    heartButton.disabled = true

                
                else if pauseButton.innerText == "resume"
                    const minusButton = document.querySelector('#minus')
                    minusButton.disabled = false
                    const plusButton = document.querySelector('#plus')
                    plusButton.disabled = false
                    const heartButton = document.querySelector('#heart')
                    heartButton.disabled = false
            });
    
    }, 1000);
    
    // As a user, I can manually increment and decrement the counter using the plus and minus buttons.
    let minusButton = document.querySelector('#minus')
        minusButton.addEventListener('click', e => {
            console.log(counter.innerText)
            counter.innerText --
        })
    });

    let plusButton = document.querySelector('#plus')
        plusButton.addEventListener('click', e => {
            console.log(counter.innerText)
            counter.innerText ++
        })
  
    
    // As a user, I can 'like' an individual number of the counter. I should see count of the number of 'likes' associated with that number.
    
    const heartButton = document.querySelector("#heart")
        heartButton.addEventListener('click', e => {
            bottomDiv = document.querySelector("div")
            console.log(bottomDiv)
            //add likes per number 
            
        })
    // As a user, I can pause the counter, which should 
            //pause the counter
            // disable all buttons except the pause button
            // the pause button should then show the text "resume."
        // When 'resume' is clicked, it should restart the counter and re-enable the buttons. 

        // })
    
    // 5. As a user, I can leave comments on my gameplay, such as: "Wow, what a fun game this is."


