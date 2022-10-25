/** Exercise 02 - Reverse **/

// Add your code here
function reverse(event){
    event.preventDefault();
    let i = document.getElementById('input').value;
    length = i.toString().length
    let rev = i.split('').reverse().join('');
    if(length!=8)
    {
        document.getElementById("error message").style.display = 'block';
        document.getElementById("reverse message").style.display = 'none';
    }
    else
    {
        document.getElementById("error message").style.display = 'none';
        document.getElementById("reverse message").style.display = 'block';
        document.getElementById('result').textContent = i+"-->"+rev;
    }
    
}