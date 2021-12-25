
const correct = document.getElementById("correct");
const wrong1 = document.getElementById("wrong1");
const wrong2 = document.getElementById("wrong2");
const answerX = document.getElementsByClassName("answerX")[0];
const answerO = document.getElementsByClassName("answerO")[0];
const next = document.getElementById("next");
const problem = document.getElementsByClassName("problem")[0];

window.onpageshow = function(event) {
if ( event.persisted || (window.performance && window.performance.navigation.type == 2)) {
// Back Forward Cache로 브라우저가 로딩될 경우 혹은 브라우저 뒤로가기 했을 경우

localStorage.getItem('Point')
  
localStorage.setItem('Point',0)
location.replace("https://gen-link.ga")
        }
}



correct.addEventListener("click",function(){
    next.style="display:block"
    //correct.style.backgroundColor="#339900"
    correct.style.border="4px solid #339900"
    answerO.style.display="block"
    wrong1.style.display="none";
    wrong2.style.display="none";
    problem.classList.add('correct');
    
    localStorage.getItem('Point')
    const point = parseInt(localStorage.getItem('Point')) +1
    localStorage.setItem('Point',point)


})



    wrong1.addEventListener("click", function(){
      next.style="display:block"
        wrong1.style.border="4px solid red"
        answerX.style.display="block"
        correct.style.display="none";
        wrong2.style.display="none";
        problem.classList.add('wrong');
    })

     wrong2.addEventListener("click", function(){
      next.style="display:block"
            wrong2.style.border="4px solid red"
        /*correct.style.border="4px solid #339900"
        wrong1.style.border="4px solid red"
        wrong2.style.border="4px solid red"*/
       
        answerX.style.display="block"
        wrong1.style.display="none";
        correct.style.display="none";
        problem.classList.add('wrong');
})


/*
  const box = document.getElementsByClassName("box")[0];

  box.addEventListener("click", function () {
    if (this.classList.contains("clicked")) {
     
    } 
    else {
        console.log(box)
      this.classList.add("clicked");

      box.style.backgroundColor = "green";
      
    }
  });

*/