var container = document.getElementById('out')

function signIn() {
    var userName = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (userName.length != 0) {
        if (password.length != 0) {
            var user = {
                userName: userName,
                pass: password
            }
        
            axios.post('http://localhost:3000/user/signIn', user)
            .then(function (response) {
                console.log(response);
                if (response.data == false) {             
                    container.innerHTML = 'Username or password is incorrect!'
                } else if (response.data == true) {
                    container.innerHTML = 'Logged In.'
                }
            })
            .catch(function (error) {
                console.log(error);
            });
        } else {
            container.innerHTML = 'All fields are REQUIRED!'
        }
    } else {
        container.innerHTML = 'All fields are REQUIRED!'
    }

    
}

const btnSignIn = document.getElementById('btn-sign-in')

btnSignIn.addEventListener("click", () => {
    signIn()
})