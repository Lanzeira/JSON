
var user = {

    username : "ThiagoRamon",
    password : "123",
    profile : {first_name: "Thiago", last_name: "Pinto"}, 
    contact : {email: ["Thiago@hotmail.com", 
                  "Thiago@hotmail.br"], 
              phone:["555-5555-555", "21-2121-212"]
              }

}

//document.getElementById("users").innerHTML = 
const usou = JSON.stringify(user);


const usado = JSON.parse(usou);
console.log(usado.contact.phone[1]);



//console.log(user.contact.email[0]);
//console.log(JSON.stringify(user));