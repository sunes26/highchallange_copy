
const result_point = localStorage.getItem('Point');
const point = document.getElementById('point');
const human = document.getElementById('human');
const comment = document.getElementById('comment');
const comment_year = document.getElementById('comment_year');

const comment5 = document.getElementById('comment5');
point.innerHTML = result_point*20 +"점"





const firebaseConfig = {
    apiKey: "AIzaSyC3F-8AvrGs2qUFpp71M5PCNO3E3Sm9mhE",
    authDomain: "highchallenge-328a7.firebaseapp.com",
    databaseURL: "https://highchallenge-328a7-default-rtdb.firebaseio.com",
    projectId: "highchallenge-328a7",
    storageBucket: "highchallenge-328a7.appspot.com",
    messagingSenderId: "11452934480",
    appId: "1:11452934480:web:9770c2d738a6fd2f962455",
    measurementId: "G-P3VK9E62W5",
};
const user = localStorage.getItem("name");
const year = localStorage.getItem("year");
const number = localStorage.getItem("number");
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();


window.onpageshow = function(event) {
  if ( event.persisted || (window.performance && window.performance.navigation.type == 2)) {
  // Back Forward Cache로 브라우저가 로딩될 경우 혹은 브라우저 뒤로가기 했을 경우
  
  localStorage.getItem('Point')
    
  localStorage.setItem('Point',0)
  location.replace("https://gen-link.ga")
          }
  }
  
  




function addDataTouser(user, year, number,result_point) {
    db.collection("users")
    .add({
        name: user,
      year: year,
      number: number,
      point: result_point
    })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
}
function getdatafromuser() {
  db.collection("users")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
      });
    });
}

//console.log('values: ' + user,day,number)
addDataTouser(user,year,number,result_point*20);
getdatafromuser();


if(result_point ==0){
    human.innerHTML = "신생아"
    comment.innerHTML="혹시 방금 태어나셨나요?"
}

else if(result_point ==1)
{
    human.innerHTML = "유딩"
    comment.innerHTML="웃어른과 소통이 어렵진 않나요?"
}

else if(result_point ==2)
{
    human.innerHTML = "초딩"
    comment.innerHTML="한창 자기만의 세계에 빠져있을때죠~"
}

else if(result_point ==3)
{
    human.innerHTML ="중딩"
    comment.innerHTML="혹시 부모님께 중2병 소리 듣지 않아요?"
}

else if(result_point ==4)
{
    human.innerHTML ="강아지"
    comment.innerHTML="조부모님 댁에 가면 '똥강아지'소리 많이 듣겠어요~"
}

else if(result_point ==5)
{
    comment_year.innerHTML = "만점을 축하드립니다!"
    point.innerHTML = result_point*20 +"점!"
    human.innerHTML ="소통만렙!"
    human.style="font-size:1.5em"
    comment.innerHTML="어른들과 소통할때 문제가 전혀 없겠어요!<br>완전 센스만점!"
    comment5.style="display:none"
}