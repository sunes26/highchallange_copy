const start = document.getElementById('start');


//const database = firebase.database();
const sum=0;



start.addEventListener('click',function(event){
    const name = document.getElementById('name').value;
    const number = document.getElementById('number').value;
    const day = document.getElementById('day').value

    localStorage.setItem('name',name);
    localStorage.setItem('year',day);
    localStorage.setItem('number',number);
    localStorage.setItem('Point',0)
    console.log(day)
    const num = number.length;
    



    





    if(name.value === ""){
        alert("이름을 입력하세요")
        location.href = "index.html"
    }

    else if(day===""|| day.length<4||day.length>4){
        alert("년도를 입력하세요~")
        location.href = "index.html"
   
    }
    
    else if(number.value==="" || num<11|| num>11){
       
        alert("전화번호를 입력하세요")
        location.href = "index.html"
    } 
    
    else if(2021-day <=28){

        location.href = "old/page1.html"
    }
    else if(2021-day>=29){

        location.href = "youngpage/page1.html"
    }
  

     
   

    event.preventDefault()
});





