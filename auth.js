function updateAuthUI() {

    const authButtons =
        document.querySelector(".auth-buttons");

    if (!authButtons) {
        return;
    }


    const savedAccount =
    localStorage.getItem("courtfindrAccount");

    const loggedIn =
    localStorage.getItem("courtfindrLoggedIn");


    if (!savedAccount || loggedIn !== "true") {
        authButtons.innerHTML = `

            <button
                class="login-btn"
                onclick="window.location.href='login.html'">

                Log In

            </button>

            <button
                class="signup-btn"
                onclick="window.location.href='signup.html'">

                Sign Up

            </button>

        `;

        return;
    }


    const account =
        JSON.parse(savedAccount);


    const plan =
        localStorage.getItem("courtfindrPlan");


    let profilePage =
        "free-profile.html";


    if (plan === "playplus") {

        profilePage =
            "playplus-profile.html";

    }


    authButtons.innerHTML = `

        <button
            class="login-btn"
            onclick="window.location.href='${profilePage}'">

            ${account.name}

        </button>

        <button
            class="signup-btn"
            onclick="logout()">

            Log Out

        </button>

    `;

}


function logout() {

    localStorage.removeItem(
        "courtfindrLoggedIn"
    );

    window.location.reload();

}

const plan =
    localStorage.getItem("courtfindrPlan");

let profilePage =
    "free-profile.html";

if (plan === "playplus") {

    profilePage =
        "playplus-profile.html";

}
function openPlayPlusFeature(page) {

    const loggedIn =
        localStorage.getItem("courtfindrLoggedIn");

    const plan =
        localStorage.getItem("courtfindrPlan");


    if (loggedIn !== "true") {

        alert(
            "Please log in to use this feature."
        );

        window.location.href =
            "login.html";

        return;

    }


    if (plan !== "playplus") {

        alert(
            "This feature is available to Play+ members."
        );

        return;

    }


    window.location.href = page;

}
updateAuthUI();