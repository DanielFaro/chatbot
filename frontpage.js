var Raina = ["Hello there! I'm Raina", "Hope you are doing well! Do you know the mission here at Raise the Barr?",
    "No problem, Raise the Barr provides online corporate diversity training through our web application and uses me," +
    "Raina an AI chatbot to answer any questions you may have during the training.", "Of course ask away", "Great question, first what is your name?"];
var User = ["Hi Raina", "No, what is it?", "That's awesome! I have a question", "How can I participate in your Beta?"];

function insertChat(who, text, delay) {
    var newList = "";
 

    if (who == "Raina") {

        newList = '<li style="width: 100%; display: block">' +
                    '<div class="right box" style= "display: block">' +
                       '<div class="text text-r">' +
                         '<p>' + text + '</p>' +
                       '</div>' +
                    '</div>' +
                  '</li>';
    } else {
        newList = '<li style="width: 100%; display: block">' +
                    '<div class="left box" style="display: block">' +
                      '<div class="text text-l">' +
                        '<p>' + text + '</p>' +
                      '</div>' +
                    '</div>' +
                  '</li>';
    }

    setTimeout(
        function () {
            $("ul").append(newList);
            console.log("appending");
        }, delay);

}

//welcom iffy
var delay = 4400;
var RainaWelcome = (() => {
    document.getElementById("user-msg").disabled = true;

    for (var n = 0; n < 5; n++) {
        insertChat("Raina", Raina[n], delay);
        if (n < 4) {
            insertChat("user", User[n], delay + 2700);
            delay += 5400;
        };
    }

   if (n == 5) {
    document.getElementById("user-msg").disabled = false;
}
})();



//If enter pressed for message

var i = 0;
var UserResponse = [];

$(document).keyup(e => {
    if (e.which == 13) {  //if 'enter' key is pressed

        if ($("#user-msg").val() !== "") {
            var usermsg = $("#user-msg").val();
            var letters = /^[A-Za-z]+$/;
            var emailcharacters = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            UserResponse.push(usermsg);
            console.log(usermsg);
            console.log(UserResponse);

            if (UserResponse[0].match(letters)) {
                var Raina6 = "Hi " + UserResponse[0] + " nice to officially meet you, all you need to do" + 
                " is enter your email into the form below and you'll be on your way!"
                insertChat("user", UserResponse[0], 1500);
                $("#user-msg").val(''); //clears input text val
                insertChat("Raina", Raina6, 3000);
                //i++;
                document.getElementById("user-msg").disabled = true; //disable user input
                //console.log(i);
            } else {
                alert("Sorry that's an invalid name. Letters only please.")
                UserResponse = []; //reset to blank      
            }
        } else {
        alert("No message entered");
        }
     }// end of enter if
});// end of key up if
