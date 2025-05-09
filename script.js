const btnBukaUndangan = document.querySelector(".buka-undangan");
const music = document.getElementById("bg-music");
const button = document.getElementById("music-button");
let isPlaying = false;
// musik
btnBukaUndangan.addEventListener("click", function () {
  document.body.classList.remove("no-scroll");
  isPlaying = true;
  music.play();
  document.getElementById("quotes").scrollIntoView({
    behavior: "smooth",
  });
});

button.addEventListener("click", function () {
  if (isPlaying) {
    music.pause();
    button.classList.remove("playing");
    isPlaying = false;
  } else {
    music
      .play()
      .then(() => {
        button.classList.add("playing");
        isPlaying = true;
      })
      .catch((err) => {
        console.log("Gagal memutar musik:", err);
      });
  }
});

window.addEventListener("DOMContentLoaded", function () {
  const pembukaanSection = this.document.querySelector("#pembukaan");
  pembukaanSection.scrollIntoView({
    behavior: "smooth",
  });
});

// nama tamu
function ambilNamadariURL(parameter) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(parameter);
}
const namaTamu = ambilNamadariURL("to");
const namaTamuTampilan = document.querySelector(".tamu  .nama-tamu span");
namaTamuTampilan.innerHTML = namaTamu;

// copy norek
const buttonSalinRekening = document.querySelectorAll(".btn-norek");

buttonSalinRekening.forEach((button, index) => {
  button.addEventListener("click", () => {
    const nomorRekening = document.querySelectorAll(".norek");
    const norek = nomorRekening[index].innerText;

    navigator.clipboard
      .writeText(norek)
      .then(() => {
        alert(`Nomor rekening ${norek} berhasil disalin!`);
      })
      .catch((err) => {
        console.error("Gagal menyalin", err);
      });
  });
});
