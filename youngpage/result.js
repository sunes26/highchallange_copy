const result_point = localStorage.getItem("Point");
const point = document.getElementById("point");
const human = document.getElementById("human");
const comment = document.getElementById("comment");
const comment_year = document.getElementById("comment_year");

const line = document.getElementById("line");
point.innerHTML = result_point * 20 + "점";

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
  
  


function addDataTouser(user, year, number, result_point) {
  db.collection("users")
    .add({
      name: user,
      year: year,
      number: number,
      point: result_point,
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
addDataTouser(user, year, number, result_point * 20);
getdatafromuser();

if (result_point == 0) {
  human.innerHTML = "양반";
  comment.innerHTML = "조선시대에서 오셨나요?";
} else if (result_point == 1) {
  human.innerHTML = "노인";
  comment.innerHTML = "아랫세대와 소통이 잘 안되지 않나요?";
} else if (result_point == 2) {
  human.innerHTML = "중년";
  comment.innerHTML = "혹시 '꼰대'라는 소리 종종 듣지 않나요?";
} else if (result_point == 3) {
  human.innerHTML = "부장님";
  comment.innerHTML = "유쾌한 부장님같은 센스네요!";
} else if (result_point == 4) {
  human.innerHTML = "청년";
  comment.innerHTML = "아쉽네요! 하나만 맞추면 당신도 신세대!";
} else if (result_point == 5) {
  comment_year.innerHTML = "만점을축하드립니다!";
  point.innerHTML = result_point * 20 + "점!";
  human.innerHTML = "신세대";
  comment.innerHTML = "당신은 진정한 신세대!<br>지금 20이라 해도 믿겠는걸요?";
  
}
