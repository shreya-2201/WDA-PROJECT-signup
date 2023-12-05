let vid = document.getElementById("bgVid");
vid.playbackRate = 0.5;
vid.style.opacity = "1";
function login() {
    let text = document.querySelector(".discription");
    text.innerHTML = `<div class='input-boxes'><input type='text' placeholder='Enter Username' name='uname' class="input">
                <input type='text' placeholder='Enter Email' name='email' class="input">
                <input type='password' placeholder='Enter password' name='pass' class="input"></div>`;
}
