document.addEventListener("DOMContentLoaded", function() {
    var loginButton = document.querySelector('.userlogin button');
    loginButton.addEventListener('click', function(event) {
        event.preventDefault(); 
        
        var usernameInput = document.querySelector('.userinput').value;
        var passwordInput = document.querySelector('.userpass').value;
        
        if (usernameInput.trim() === '' || passwordInput.trim() === '') {
            alert('Please enter both username and password.');
            return;
        }
        else{
        alert('Thanks for contacting us');
    }});
});
