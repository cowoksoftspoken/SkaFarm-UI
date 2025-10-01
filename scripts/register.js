$(function () {
  $("#toggleRegisterPass").click(function () {
    let input = $("#registerPass");
    let type = input.attr("type") === "password" ? "text" : "password";
    input.attr("type", type);
    $(this).toggleClass("bi-eye bi-eye-slash");
  });

  // Lempar Balik Ke Login
  $("#registerForm").submit(function (e) {
    e.preventDefault();
    window.location.href = "login.html";
  });
});
