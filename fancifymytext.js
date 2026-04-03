function makeTextBigger() {
  alert("Hello, world!");
  document.getElementById("text-input").style.fontSize = "24pt";
}

function applyFancyStyles() {
  const textArea = document.getElementById("text-input");
  const fancyRadio = document.getElementById("fancy-shmancy");

  if (fancyRadio.checked) {
    textArea.style.fontWeight = "bold";
    textArea.style.color = "blue";
    textArea.style.textDecoration = "underline";
  } else {
    textArea.style.fontWeight = "normal";
    textArea.style.color = "black";
    textArea.style.textDecoration = "none";
  }
}

function mooText() {
  const textArea = document.getElementById("text-input");
  const upperText = textArea.value.toUpperCase();
  const sentences = upperText.split(".");
  const mooSentences = [];

  for (let i = 0; i < sentences.length; i += 1) {
    const trimmedSentence = sentences[i].trim();

    if (trimmedSentence === "") {
      continue;
    }

    const words = trimmedSentence.split(/\s+/);
    words[words.length - 1] = words[words.length - 1] + "-MOO";
    mooSentences.push(words.join(" "));
  }

  textArea.value = mooSentences.join(". ") + (upperText.trim().endsWith(".") ? "." : "");
}
