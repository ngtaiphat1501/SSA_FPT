const $ = (id) => document.getElementById(id);
const letters = ["A", "B", "C", "D"];
let studyIndex = 0;
let selectedCount = 10;
let testState = { list: [], index: 0, answers: [], started: null, timer: null };

function showScreen(id) {
  document.querySelectorAll(".screen").forEach((screen) => {
    screen.classList.toggle("active", screen.id === id);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
  if (id !== "test" && testState.timer) clearInterval(testState.timer);
}

function optionHtml(q, mode) {
  return letters.map((letter) => `
    <button class="option-btn" data-mode="${mode}" data-letter="${letter}">
      <span class="letter">${letter}</span>
      <span>${q.options[letter]}</span>
    </button>
  `).join("");
}

function loadStudy(index) {
  studyIndex = Math.max(0, Math.min(index, QUESTIONS.length - 1));
  const q = QUESTIONS[studyIndex];
  $("studyTitle").textContent = `Câu ${q.id}`;
  $("studyCount").textContent = `${studyIndex + 1} / ${QUESTIONS.length}`;
  $("studyImg").src = q.image;
  $("studyQuestion").textContent = q.question;
  $("studyOptions").innerHTML = optionHtml(q, "study");
  $("studyFeedback").className = "feedback";
  $("studyFeedback").textContent = "";
  $("studyAnswerPill").textContent = `Đáp án ${q.answer}`;
  $("studyPrev").disabled = studyIndex === 0;
  $("studyNext").disabled = studyIndex === QUESTIONS.length - 1;
}

function chooseStudy(letter, btn) {
  const q = QUESTIONS[studyIndex];
  document.querySelectorAll("#studyOptions .option-btn").forEach((el) => {
    el.disabled = true;
    if (el.dataset.letter === q.answer) el.classList.add("correct");
  });

  const good = letter === q.answer;
  if (!good) btn.classList.add("incorrect");

  const feedback = $("studyFeedback");
  feedback.className = `feedback show ${good ? "good" : "bad"}`;
  feedback.innerHTML = good
    ? `<strong>Đúng.</strong> Đáp án là ${q.answer}. ${q.answerText}`
    : `<strong>Chưa đúng.</strong> Đáp án đúng là ${q.answer}. ${q.answerText}`;
}

function shuffle(list) {
  const copy = [...list];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function startTest() {
  testState.list = shuffle(QUESTIONS).slice(0, selectedCount);
  testState.index = 0;
  testState.answers = Array(testState.list.length).fill(null);
  testState.started = new Date();
  if (testState.timer) clearInterval(testState.timer);
  testState.timer = setInterval(updateTimer, 500);
  loadTest(0);
  showScreen("test");
}

function updateTimer() {
  const seconds = Math.floor((new Date() - testState.started) / 1000);
  $("timer").textContent = formatTime(seconds);
}

function formatTime(seconds) {
  const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");
  return `${minutes}:${secs}`;
}

function loadTest(index) {
  testState.index = Math.max(0, Math.min(index, testState.list.length - 1));
  const q = testState.list[testState.index];
  $("testProgressText").textContent = `Câu ${testState.index + 1} / ${testState.list.length}`;
  $("progressFill").style.width = `${((testState.index + 1) / testState.list.length) * 100}%`;
  $("testTitle").textContent = `Câu ${q.id}`;
  $("answeredCount").textContent = `${testState.answers.filter(Boolean).length} đã trả lời`;
  $("testImg").src = q.image;
  $("testQuestion").textContent = q.question;
  $("testOptions").innerHTML = optionHtml(q, "test");

  document.querySelectorAll("#testOptions .option-btn").forEach((btn) => {
    if (testState.answers[testState.index] === btn.dataset.letter) btn.classList.add("selected");
  });

  $("testPrev").disabled = testState.index === 0;
  $("testNext").disabled = testState.index === testState.list.length - 1;
}

function chooseTest(letter) {
  testState.answers[testState.index] = letter;
  document.querySelectorAll("#testOptions .option-btn").forEach((btn) => {
    btn.classList.toggle("selected", btn.dataset.letter === letter);
  });
  $("answeredCount").textContent = `${testState.answers.filter(Boolean).length} đã trả lời`;
  if (testState.index < testState.list.length - 1) {
    setTimeout(() => loadTest(testState.index + 1), 180);
  }
}

function finishTest() {
  if (testState.timer) clearInterval(testState.timer);
  const total = testState.list.length;
  let correct = 0;
  testState.list.forEach((q, i) => {
    if (testState.answers[i] === q.answer) correct++;
  });

  const blank = testState.answers.filter((answer) => !answer).length;
  const percent = Math.round((correct / total) * 100);
  const seconds = Math.floor((new Date() - testState.started) / 1000);

  $("scorePercent").textContent = `${percent}%`;
  $("scoreCorrect").textContent = `${correct} / ${total}`;
  $("scoreTime").textContent = formatTime(seconds);
  $("scoreBlank").textContent = blank;
  $("scoreGrade").textContent = percent >= 85
    ? "Rất tốt"
    : percent >= 70
      ? "Khá ổn"
      : percent >= 50
        ? "Cần ôn thêm"
        : "Nên học lại kỹ hơn";

  $("reviewList").innerHTML = testState.list.map((q, i) => {
    const user = testState.answers[i] || "Bỏ trống";
    const ok = user === q.answer;
    return `<div class="review-item ${ok ? "correct" : "incorrect"}">
      <strong>Câu ${q.id}: ${ok ? "Đúng" : "Sai"}</strong>
      <div class="muted">Bạn chọn: ${user}. Đáp án đúng: ${q.answer}. ${q.answerText}</div>
    </div>`;
  }).join("");

  showScreen("results");
}

document.addEventListener("click", (event) => {
  const go = event.target.closest("[data-go]");
  if (go) {
    const target = go.dataset.go;
    if (target === "study") loadStudy(studyIndex);
    showScreen(target);
  }

  const option = event.target.closest(".option-btn");
  if (option?.dataset.mode === "study") chooseStudy(option.dataset.letter, option);
  if (option?.dataset.mode === "test") chooseTest(option.dataset.letter);
});

$("logo").onclick = () => showScreen("dashboard");
$("btnHome").onclick = () => showScreen("dashboard");
$("btnStudy").onclick = () => {
  loadStudy(studyIndex);
  showScreen("study");
};
$("btnTest").onclick = () => showScreen("testSetup");
$("studyPrev").onclick = () => loadStudy(studyIndex - 1);
$("studyNext").onclick = () => loadStudy(studyIndex + 1);
$("studyJump").onclick = () => loadStudy(Number($("studyJumpInput").value || 1) - 1);
$("setupChoices").onclick = (event) => {
  const choice = event.target.closest(".setup-choice");
  if (!choice) return;
  document.querySelectorAll(".setup-choice").forEach((el) => el.classList.remove("active"));
  choice.classList.add("active");
  selectedCount = Number(choice.dataset.count);
};
$("startTest").onclick = startTest;
$("testPrev").onclick = () => loadTest(testState.index - 1);
$("testNext").onclick = () => loadTest(testState.index + 1);
$("finishTest").onclick = finishTest;
$("againTest").onclick = () => showScreen("testSetup");

loadStudy(0);
