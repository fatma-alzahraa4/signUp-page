var userEmailSignin = document.getElementById("Email");
var userPasswordSignin = document.getElementById("Pass");

var userNameSignup = document.getElementById("name");
var userEmailSignup = document.getElementById("email");
var userPasswordSignup = document.getElementById("pass")
var check = 3;
var currIndex=-1;
var userList=[];
if(localStorage.getItem("UserListLocal") !=null){
    userList = JSON.parse(localStorage.getItem("UserListLocal"));
}
else{
    check = 3;
    userList = []
    addUser()
}


function addUser(){
    var User = {
         userName : userNameSignup.value,
         userEmail :userEmailSignup .value,
         userPassword : userPasswordSignup.value,
 
     }
     userList.push(User);
     localStorage.setItem("UserListLocal",JSON.stringify(userList));
    
}
 
 function validEmail(){
     
     var reg = /^[A-Za-z_0-9]{3,30}@(gmail|yahoo)\.(com|net)$/
    if(reg.test(userEmailSignup.value) ==false){
        check = 1;

    }
    else{
        for(var i = 0 ; i <userList.length;i++){
            if(userEmailSignup.value == userList[i].userEmail){
                check=2;
        
            }
            else if(userEmailSignup.value != userList[i].userEmail){
                check=3;
            }
        }
    }
     
    
 }

 function signup(){
     validEmail()
     if(check==1){
        document.getElementById("inv").style.display="block"

     }
     
    else if(check == 2){
        document.getElementById("fail").style.display="block"

    }
    else if(check==3 ){
        document.getElementById("success").style.display="block";
        addUser()
    }
    
 }

function login(){
    for(var i =0; i <userList.length;i++){
        if(userEmailSignin.value == userList[i].userEmail && userPasswordSignin.value == userList[i].userPassword){
            currIndex = i;
            document.getElementById("welpage").style.display= "block"
            document.getElementById("signinpage").style.display= "none"

       }
    }
    document.getElementById("welcome").innerHTML=`Welcome `+userList[currIndex].userName+` `;

    
}

function logout(){
    document.getElementById("welpage").style.display= "none"
    document.getElementById("signinpage").style.display= "block"
}
//  function repeatedEmails(){
//      var currentIndex;
//      for(var i = 0; i < userList.length;i++){
//          if(userEmailSignup.value == userList[i].userEmail){
//             currentIndex= i;
//          }
//          else{
//              currentIndex = -1;
//          }
//      }
//      if(currentIndex==-1){
//         document.getElementById("success").style.display="block"  ;

//      }
//      else{
//         document.getElementById("fail").style.display="block"  ;

//      }
//  }