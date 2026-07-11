// =========================
// PASSWORD
// =========================

const correctPassword = "111025";

function checkPassword() {

    const password = document.getElementById("password");
    const message = document.getElementById("message");
    const container = document.querySelector(".container");

    if (!password) return;

    if (password.value === correctPassword) {

        if (message) {

            message.innerHTML = "Hawwww😱, Shi daal diyaa ❤️";
            message.style.color = "#9dffb0";

        }

        setTimeout(function () {

            window.location.href = "welcome.html";

        }, 1000);

    } else {

        if (message) {

            message.innerHTML = "❌ Wrong Password";
            message.style.color = "#ff8b8b";

        }

        if (container) {

            container.classList.add("shake");

            setTimeout(function () {

                container.classList.remove("shake");

            }, 500);

        }

    }

}

const passwordInput = document.getElementById("password");

if (passwordInput) {

    passwordInput.addEventListener("keypress", function (e) {

        if (e.key === "Enter") {

            checkPassword();

        }

    });

}



// =========================
// PAGE NAVIGATION
// =========================

function nextPage() {

    window.location.href = "gift.html";

}

function goToFinal() {

    window.location.href = "final.html";

}



// =========================
// WELCOME PAGE MUSIC
// =========================

const song = document.getElementById("song");
const playBtn = document.getElementById("playBtn");
const progressBar = document.querySelector(".progress-bar");
const time = document.getElementById("time");

if (song && playBtn) {

    playBtn.addEventListener("click", function () {

        if (song.paused) {

            song.play();

            playBtn.innerHTML = "⏸ Pause Song";

        } else {

            song.pause();

            playBtn.innerHTML = "▶ Play Song";

        }

    });

    song.addEventListener("timeupdate", function () {

        if (!isNaN(song.duration)) {

            progressBar.style.width =
                (song.currentTime / song.duration) * 100 + "%";

            let cm = Math.floor(song.currentTime / 60);
            let cs = Math.floor(song.currentTime % 60);

            let tm = Math.floor(song.duration / 60);
            let ts = Math.floor(song.duration % 60);

            time.innerHTML =
                `${cm}:${String(cs).padStart(2, "0")} / ${tm}:${String(ts).padStart(2, "0")}`;

        }

    });

}



// =========================
// GIFT PAGE
// =========================

function openHeart() {

    const heart = document.querySelector(".gift-box");
    const musicSection = document.getElementById("musicSection");

    if (heart) {

        heart.style.transform = "scale(1.15)";

    }

    if (musicSection) {

        musicSection.style.display = "block";

    }

}

const giftSong = document.getElementById("giftSong");
const giftPlayBtn = document.getElementById("giftPlayBtn");
const giftProgress = document.getElementById("giftProgress");
const giftTime = document.getElementById("giftTime");
const nextFinalBtn = document.getElementById("nextFinalBtn");

if (giftSong && giftPlayBtn) {

    giftPlayBtn.addEventListener("click", function () {

        if (giftSong.paused) {

            giftSong.play();

            giftPlayBtn.innerHTML = "⏸ Pause Song";

            if (nextFinalBtn) {

                nextFinalBtn.style.display = "inline-block";

            }

        } else {

            giftSong.pause();

            giftPlayBtn.innerHTML = "▶ Play Song";

        }

    });

    giftSong.addEventListener("timeupdate", function () {

        if (!isNaN(giftSong.duration)) {

            giftProgress.style.width =
                (giftSong.currentTime / giftSong.duration) * 100 + "%";

            let cm = Math.floor(giftSong.currentTime / 60);
            let cs = Math.floor(giftSong.currentTime % 60);

            let tm = Math.floor(giftSong.duration / 60);
            let ts = Math.floor(giftSong.duration % 60);

            giftTime.innerHTML =
                `${cm}:${String(cs).padStart(2, "0")} / ${tm}:${String(ts).padStart(2, "0")}`;

        }

    });

}

// =========================
// FINAL PAGE
// =========================

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const msg = document.getElementById("finalMessage");
const meme = document.getElementById("meme");

const memeSound = document.getElementById("memeSound");
const denySound = document.getElementById("denySound");
const finalSong = document.getElementById("finalSong");

const lastBtn = document.getElementById("lastBtn");



// =========================
// YES BUTTON
// =========================

if (yesBtn) {

    yesBtn.addEventListener("click", function () {

        if (memeSound) {

            memeSound.currentTime = 0;
            memeSound.play().catch(function () { });

        }

        if (msg) {

            msg.innerHTML =
                "🥹❤️ Mujhe pata tha meri Shona kabhi mujhe chhod ke nahi jaayegi.<br><br>I Love You So Muchhh Babyyyy ❤️";

            msg.style.color = "white";

        }

        yesBtn.style.display = "none";

        if (noBtn) {

            noBtn.style.display = "none";

        }

    });

}



// =========================
// NO BUTTON
// =========================

if (noBtn) {

    noBtn.addEventListener("click", function () {

        if (denySound) {

            denySound.currentTime = 0;

            denySound.play().catch(function () { });

        }

        if (yesBtn) {

            yesBtn.style.display = "none";

        }

        noBtn.style.display = "none";



        setTimeout(function () {

            if (msg) {

                msg.innerHTML =
                    "😂😂 Jaane hi nahi dunga mai ❤️";

                msg.style.color = "white";

            }

            if (meme) {

                meme.src = "Assets/Meme/Cat.jpg";

                meme.style.display = "block";

            }



            // 1 sec baad Last Button

            setTimeout(function () {

                if (lastBtn) {

                    lastBtn.style.display = "inline-block";

                }

            }, 1000);

        }, 1500);

    });

}



// =========================
// LAST BUTTON
// =========================

if (lastBtn) {

    lastBtn.addEventListener("click", function () {

        lastBtn.style.display = "none";

        if (msg) {

            msg.innerHTML =
                "🥹❤️ Ye hui na meri pyaari Shona wali baat... Ab ye last surprise sirff aaapkeee liyeeee betuuuu ❤️";

            msg.style.color = "white";

        }



        // Final Song

        if (finalSong) {

            finalSong.currentTime = 0;

            finalSong.play().catch(function (error) {

                console.log(error);

            });

        }

    });

}