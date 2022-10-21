/** Exercise 03 - Form **/

// Add your code here
function form1(event){
    let Name= document.getElementById('name').value;
    let Email = document.getElementById('email').value;
    let Feedback = document.getElementById('Feedback').value;
    //console.log("========Form Submitted========")
    console.log("Name :", Name);
    console.log("Email ID :", Email);
    console.log( Feedback?'Feedback : '+ Feedback:("Feedback : No feedback was submitted"));
    if(document.getElementById('newsletter').checked){
        console.log("Newsletter : Yes, I would like to join the newsletter.");
    }
    else{
        console.log("Newsletter : No, thank you.");
    } 

}