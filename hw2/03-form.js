/** Exercise 03 - Form **/

// Add your code here
function form1(event){
    let a= document.getElementById('name').value;
    let b = document.getElementById('email').value;
    let c = document.getElementById('Feedback').value;
    //console.log("========Form Submitted========")
    console.log("Name :", a);
    console.log("Email ID :", b);
    console.log( c?'Feedback : '+ c:("Feedback : No feedback was submitted"));
    if(document.getElementById('newsletter').checked){
        console.log("Newsletter : Yes, I would like to join the newsletter.");
    }
    else{
        console.log("Newsletter : No, thank you.")
    } 

}