// DOM Elements
const elements = {
  switchVideoButton: document.getElementById("switchVideoButton"),
  showInfoButton: document.getElementById("showInfoButton"),
  mainTitle: document.getElementById("main-title"),
  switchTitle: document.getElementById("switchTitle"),
  backgroundVideo: document.getElementById("backgroundVideo"),
  infoParagraph: document.getElementById("infoParagraph"),
  mainSiteButton: document.getElementById("mainSite"),
  dialog: document.getElementById("dialog"),
};

const videoDatabase = {
  Earth: {
    name: "Earth",
    src: "./assets/Earth.mp4",
    description:
      "Earth, a vibrant planet, teeming with life and natural wonders.",
    color: "linear-gradient(135deg, #0a74da, #b0e57c)",
  },
  Saturn: {
    name: "Saturn",
    src: "./assets/Saturn.mp4",
    description: "Saturn is a gas giant with stunning rings and many moons.",
    color: "linear-gradient(135deg, #e4b84a, #d8bcd8)",
  },
  Neptune: {
    name: "Neptune",
    src: "./assets/Neptune.mp4",
    description:
      "Neptune is a distant, blue planet with strong winds and storms.",
    color: "linear-gradient(135deg, #2e4a8e, #5b9bd5)",
  },
  Sun: {
    name: "Sun",
    src: "./assets/Sun.mp4",
    description: "The Sun is a massive, hot star at the solar system's center",
    color: "linear-gradient(135deg, #fbbf2d, #ff6f00)",
  },
};

const videoList = Object.values(videoDatabase);
let currentIndex = 0;

function hideElements() {
  elements.infoParagraph.style.display = "none";
  elements.backgroundVideo.classList.add("hidden");
  elements.mainTitle.classList.add("hidden");
  elements.switchVideoButton.classList.add("hidden");
  elements.showInfoButton.classList.add("hidden");
  elements.mainSiteButton.classList.add("hidden");
}

function showElements() {
  elements.backgroundVideo.classList.remove("hidden");
  elements.mainTitle.classList.remove("hidden");
  elements.switchVideoButton.classList.remove("hidden");
  elements.showInfoButton.classList.remove("hidden");
  elements.mainSiteButton.classList.remove("hidden");
}

function updateVideoAndInfo() {
  const currentVideo = videoList[currentIndex];
  elements.backgroundVideo.src = currentVideo.src;
  elements.switchTitle.textContent = currentVideo.name;
  elements.switchTitle.style.backgroundImage = currentVideo.color;
  showElements();
}

function switchVideo() {
  hideElements();
  currentIndex = (currentIndex + 1) % videoList.length;
  setTimeout(updateVideoAndInfo, 400);
}

function toggleInfo() {
  const currentVideo = videoList[currentIndex];
  if (elements.infoParagraph.style.display === "none") {
    elements.infoParagraph.textContent = currentVideo.description;
    elements.infoParagraph.style.display = "block";
  } else {
    elements.infoParagraph.style.display = "none";
  }
}

function galaxy() {
  elements.backgroundVideo.src = "./assets/Galaxy.mp4";
  elements.switchVideoButton.style.display = "none";
  elements.showInfoButton.style.display = "none";
  elements.mainSiteButton.style.display = "none";
  elements.switchTitle.textContent = "Galaxy";
  elements.switchTitle.style.backgroundImage =
    "linear-gradient(135deg, #020111, #001d47, #29075e, #6b206d, #b300b3, #ff7dff)";
  elements.infoParagraph.style.display = "block";
  elements.infoParagraph.innerHTML = `
    <textarea class="coolTextArea" id="coolTextArea" placeholder="Tell Your Secret to the universe"></textarea>
    <button class="throwSecretButton" id="throwSecretButton">Throw Secret</button>
  `;

  const coolTextArea = document.getElementById("coolTextArea");
  const throwSecretButton = document.getElementById("throwSecretButton");

  throwSecretButton.addEventListener("click", () => {
    coolTextArea.value = "";
    elements.dialog.style.visibility = "visible";
    setTimeout(() => {
      elements.dialog.style.visibility = "hidden";
    }, 1500);
  });
}

elements.infoParagraph.style.display = "none";
updateVideoAndInfo();

elements.switchVideoButton.addEventListener("click", switchVideo);
elements.showInfoButton.addEventListener("click", toggleInfo);
elements.mainSiteButton.addEventListener("click", galaxy);
