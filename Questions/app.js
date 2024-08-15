const questionBtn = document.querySelectorAll('.question-btn');
const questions = document.querySelectorAll('.question');

questionBtn.forEach(function(btn){
    btn.addEventListener('click', function(e){

        parent = e.currentTarget.parentElement.parentElement;      
        questions.forEach(function(question){
            if(question !== parent){
                question.classList.remove('show-text')
            }
        })

        
        parent.classList.toggle('show-text');
    })

    
});