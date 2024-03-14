function saveRegistration() {
    var email = document.getElementById("emailInput").value;
    var username = document.getElementById("usernameInput").value;
    var password = document.getElementById("passwordInput").value;
    var confirmPassword = document.getElementById("confirmPasswordInput").value;

    if (email === "" || username === "" || password === "" || confirmPassword === "") {
        showMessage("Vui lòng điền đầy đủ thông tin", "error");
        return;
    }

    if (password !== confirmPassword) {
        showMessage("Mật khẩu không trùng khớp", "error");
        return;
    }

    showMessage("Đăng ký thành công!", "success");

    document.getElementById("emailInput").value = "";
    document.getElementById("usernameInput").value = "";
    document.getElementById("passwordInput").value = "";
    document.getElementById("confirmPasswordInput").value = "";

    var usersData = JSON.parse(localStorage.getItem("usersdata")) || [];

    var newUser = {
        email: email,
        username: username,
        password: password
    };
    usersData.push(newUser);

    localStorage.setItem("usersdata", JSON.stringify(usersData));
    setTimeout(function() {
        window.location.href = "Login.html";
    }, 1000);
}
document.getElementById("registerButton").addEventListener("click", saveRegistration);
function showMessage(message, type) {
    var messageElement = document.createElement("div");
    messageElement.textContent = message;
    messageElement.className = type;
    
    var container = document.querySelector(".right");
    container.appendChild(messageElement);
    
    setTimeout(function() {
      container.removeChild(messageElement);
    }, 500);
  }
  document.getElementById("signinLink").addEventListener("click", function(event) {
    event.preventDefault();
  
    window.location.href = "Login.html";
  });