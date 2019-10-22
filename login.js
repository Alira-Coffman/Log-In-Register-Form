function signUp() {
    $(".sign-up").toggleClass('d-none',1000);
    $(".login").toggleClass('d-none',1000)
    console.log("CLicked sign up");
}
function login() {
    $(".sign-up").addClass('d-none',1000);
    $(".login").removeClass('d-none',1000)
    console.log("CLicked sign up",1000);
}