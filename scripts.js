var container = document.getElementById('out')

function signUp() {
    var userName = document.getElementById('username').value;
    var score = document.getElementById('score').value;
    var age = document.getElementById('birth-date').value;
    var password = document.getElementById('password').value;

    var today = new Date();
    var birthDate = new Date(age);
    var ageCalc = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        ageCalc--;
    }
    var user = {
        userName: userName,
        age: ageCalc,
        score: score,
        pass: password
    }
    axios.post('http://localhost:3000/user/create', user)
    .then(function (response) {
        console.log(response);
        if (response.data == false) {
            container.innerHTML = 'Username taken!'
        } else if(response.data == true) {
            container.innerHTML = 'Suucessfully signed up!'
        }
    })
    .catch(function (error) {
        console.log(error);
    });
}

const btnSignUp = document.getElementById('btn-sign-up')

btnSignUp.addEventListener("click", () => {
    signUp()
})