
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

users_update = function() {
    var x = new XMLHttpRequest();
        x.onreadystatechange = function(){
            let output = "";
            if(this.readyState == 4 && this.status == 200){
                let response = x.responseText;
                let user= JSON.parse(response); 
                console.log(response);
                for (var i =0; i < user.length; i++) 
                    output += "<li>"+ user[i].username + "</li>"; }
                document.getElementById("users"),
                innerHTML = output;
            }
        
        x.open("GET", "file:///C:/xampp/htdocs/Alan_treino/JSON/JSON/JSON03/index.html", true);
        x.send();
    
    var bt = document.getElementById("bt_update");
    bt.addEventListener("click",users_update);
}

