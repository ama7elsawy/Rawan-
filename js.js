let users=[{name:"mohamed",pass:"112233"},];
function signup(){
    var nam =document.getElementById('nam3').value;
    var pas =document.getElementById('pas3').value;
    var phone=document.getElementById('Phone3').value;
    var age =document.getElementById('age3').value;
    var regxx = /^(?=.*[-\#\$\.\%\&\@\!\+\=\\*])(?=.*[a-zA-Z])(?=.*\d)$/;
    for(i=0;i<users.length;i++){
        if(nam==users[i].name){
            alert("the name is repete")
        }
    }
  if(nam==""||pas==""){
    alert("please fill all") 
  }
  else if(nam.length<5 || nam.length>12){

    document.getElementById('a1').innerHTML="should be 5 to 12";
  }
  else if(!pas.match(regxx)){
    document.getElementById('a2').innerHTML="please enter strong pass";
  }
  else if(phone.length!=11){
    document.getElementById('a3').innerHTML="the phon is not tru";

  }
else if (age<18 && age >60){
    document.getElementById('a4').innerHTML="the age must be 18 to 60";
}
else{

  var x={name:nam3 ,pass:pas3}
  console.log(x);
  console.push(x);
  alert("sign up succes");

}

}
 function mylogin(){
  var na = document.getElementById('nam1').value;
  var ps = document.getElementById('pas1').value;

  if(na==""||pa==""){

    alert("please fill all")
  }

  for(var i=0;i<users.length;i++)
  {
   if(users[i].name==na &&users[i].pass==pa)
    {
      window.alert("Login Succefly");
      return true;
    }
    
  }
}


let yes=0;
let no=0;
function check(){

  let radio=document.querySelectorAll("input");
  for(let i=0;i<radio.length;i++){
    if(radio[i].checked&&radio[i].value=="yes"){
yes++;
    }
   else if(radio[i].checked&&radio[i].value=="no"){
      no++;
          }

  }
alert(`the answer yes=${yes} the answer no=${no}`)
} 



function forpass()
{
    try
    {
        let nnam = document.getElementById("nam2").value;
        let ppas = document.getElementById("pas2").value;
        let userfound = false;
        for(let i = 0; i < users.length; i++)
        {
            if(users[i].name == nnam)
            {
                users[i].pass = ppas;
                userfound = true;
                alert("Password Updated");
                return true;
            }
            else if (userfound == false)
            {
                alert("User not found");
                return false;
            }
        }
    }
    catch(error)
    {
        console.log("An error occurred: " + error.message);
        return false;
    }
}