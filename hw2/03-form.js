/** Exercise 03 - Form **/

// Add your code here
function form1(event){
<<<<<<< HEAD
    let Name= document.getElementById('name').value;
    let Email = document.getElementById('email').value;
    let Feedback = document.getElementById('Feedback').value;
    //console.log("========Form Submitted========")
    console.log("Name :", Name);
    console.log("Email ID :", Email);
    console.log( Feedback?'Feedback : '+ Feedback:("Feedback : No feedback was submitted"));
=======
    let a= document.getElementById('name').value;
    let b = document.getElementById('email').value;
    let c = document.getElementById('Feedback').value;
    //console.log("========Form Submitted========")
    console.log("Name :", a);
    console.log("Email ID :", b);
    console.log( c?'Feedback : '+ c:("Feedback : No feedback was submitted"));
>>>>>>> 845f736f84a11346e07d1b694f1008bfe268cde5
    if(document.getElementById('newsletter').checked){
        console.log("Newsletter : Yes, I would like to join the newsletter.");
    }
    else{
<<<<<<< HEAD
        console.log("Newsletter : No, thank you.");
=======
        console.log("Newsletter : No, thank you.")
>>>>>>> 845f736f84a11346e07d1b694f1008bfe268cde5
    } 

}