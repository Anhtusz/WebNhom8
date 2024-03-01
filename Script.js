document.getElementById("LoginForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var username = document.querySelector("#LoginForm input[type='text']").value;
    var password = document.querySelector("#LoginForm input[type='password']").value;
  
    var usersData = JSON.parse(localStorage.getItem("usersdata")) || [];
  
  var loggedInUser = usersData.find(function(user) {
    return user.username === username && user.password === password;
  });
  
  if (loggedInUser) {
    showMessage("Đăng nhập thành công", "success");
  } else {
    showMessage("Thông tin đăng nhập không chính xác", "error");
  }
  });
  
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
  document.getElementById("signupLink").addEventListener("click", function(event) {
    event.preventDefault();

    window.location.href = "signup.html";
  });