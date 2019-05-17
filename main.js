//初始化firstbase对象
var firebaseConfig = {
  apiKey: "AIzaSyAxAaEFm-LwcHinxcn5tuSt1s7FGyS3-dI",
  authDomain: "contactform-c8c11.firebaseapp.com",
  databaseURL: "https://contactform-c8c11.firebaseio.com",
  projectId: "contactform-c8c11",
  storageBucket: "contactform-c8c11.appspot.com",
  messagingSenderId: "1022720244898",
  appId: "1:1022720244898:web:c271bc53313c1f05"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//创建一个collection 类似于表
var messageRef = firebase.database().ref("message");
// var messageRef = firebase.database().ref('message');

//添加submit事件
document.getElementById('contactForm').addEventListener("submit",submitFrom);

function submitFrom(e){
  e.preventDefault();
  // console.log(123);
  //获取input中的值
  var name = getInputVa('name');
  var company = getInputVa('company');
  var email = getInputVa('email');
  var phone = getInputVa('phone');
  var message = getInputVa('message');

  //存储数据
  saveMessage(name,company,email,phone,message);

  //展示alert
  document.querySelector(".alert").style.display = "block";

  var times = setTimeout(() =>{
    document.querySelector(".alert").style.display = "none";
  },3000);

  //清除表单
  document.getElementById("contactForm").reset(); 
}

//获取ID
function getInputVa(id){
  return document.getElementById(id).value;
}

function saveMessage(name,company,email,phone,message){
  messageRef.push({
    name:name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}