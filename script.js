document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();
      const msg = document.getElementById("msg");

      if (username === "admin" && password === "admin123") {
        localStorage.setItem("user", JSON.stringify({ username, role: "admin", points: 0 }));
        window.location.href = "admin.html";
      } else if (username && password) {
        localStorage.setItem("user", JSON.stringify({ username, role: "user", points: 0 }));
        window.location.href = "dashboard.html";
      } else {
        msg.textContent = "الرجاء إدخال اسم المستخدم وكلمة المرور.";
      }
    });
  }

  const user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    const userDisplay = document.getElementById("userDisplay");
    const pointsDisplay = document.getElementById("points");
    if (userDisplay) userDisplay.textContent = user.username;
    if (pointsDisplay) pointsDisplay.textContent = user.points;
  }
});

function logout() {
  localStorage.removeItem("user");
  window.location.href = "login.html";
}

function addPoints() {
  const user = JSON.parse(localStorage.getItem("user"));
  user.points += 10;
  localStorage.setItem("user", JSON.stringify(user));
  document.getElementById("points").textContent = user.points;
}

window.onload = function () {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user && !window.location.href.includes("login.html")) {
    window.location.href = "login.html";
  }
};
