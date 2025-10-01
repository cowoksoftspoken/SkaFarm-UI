$(function () {
  $("#toggleLoginPass").click(function () {
    let input = $("#loginPass");
    let type = input.attr("type") === "password" ? "text" : "password";
    input.attr("type", type);
    $(this).toggleClass("bi-eye bi-eye-slash");
  });

  $("#loginForm").submit(function (e) {
    e.preventDefault();
    let email = $("#loginEmail").val().trim();
    let password = $("#loginPass").val().trim();

    // akun Admin
    let demoEmail = "admin@skafarm.com";
    let demoPass = "adminskafarm1212";

    if (email === demoEmail && password === demoPass) {
      window.location.href = "dashboard.html";
    } else {
      alert("Email atau password salah! Coba lagi.");
    }
  });
});
