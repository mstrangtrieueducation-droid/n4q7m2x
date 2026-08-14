const ASSET = "assets/extracted/";

function choice(id, prompt, options, answer, explanation, image = "") {
  return { id, type: "choice", prompt, options, answers: [answer], explanation, image, points: 1 };
}

function input(id, prompt, answers, explanation, image = "") {
  return { id, type: "input", prompt, answers, explanation, image, points: 1 };
}

const sections = [
  {
    letter: "A", title: "Look and circle the correct words.",
    note: "Nhìn từng hình rồi chọn từ đúng.", points: 3,
    questions: [
      choice("A1", "Picture 1", ["aunt", "uncle"], "uncle", "Hình là một người đàn ông trong gia đình, vì vậy từ đúng là uncle.", `${ASSET}page1-img_p0_2.png`),
      choice("A2", "Picture 2", ["brother", "sister"], "sister", "Hình là một bạn gái, vì vậy từ đúng là sister.", `${ASSET}page1-img_p0_3.png`),
      choice("A3", "Picture 3", ["friends", "parents"], "friends", "Hai bạn nhỏ đang khoác vai nhau. Họ là friends, không phải parents.", `${ASSET}page1-img_p0_6.png`)
    ]
  },
  {
    letter: "B", title: "Look and write the words.",
    note: "Dùng các từ trong Word Bank để gọi đúng từng người trong gia đình.", points: 6,
    wordBank: ["daughter", "father", "grandfather", "grandmother", "mother", "son", "friends"],
    sectionImage: `${ASSET}page1-img_p0_5.png`,
    imageMarkers: [
      { label: "1", left: "15%", top: "76%" }, { label: "2", left: "32%", top: "76%" },
      { label: "3", left: "45%", top: "81%" }, { label: "4", left: "57%", top: "76%" },
      { label: "5", left: "72%", top: "78%" }, { label: "6", left: "88%", top: "79%" }
    ],
    questions: [
      input("B1", "Picture 1", ["grandfather"], "Người đàn ông lớn tuổi là grandfather - ông."),
      input("B2", "Picture 2", ["grandmother"], "Người phụ nữ lớn tuổi là grandmother - bà."),
      input("B3", "Picture 3", ["son"], "Bạn trai nhỏ là son - con trai."),
      input("B4", "Picture 4", ["father"], "Người đàn ông là father - bố."),
      input("B5", "Picture 5", ["mother"], "Người phụ nữ là mother - mẹ."),
      input("B6", "Picture 6", ["daughter"], "Bạn gái nhỏ là daughter - con gái.")
    ]
  },
  {
    letter: "C", title: "Listen and write the opposite of the words.",
    note: "Nghe audio và viết từ có nghĩa trái ngược.", points: 3,
    audio: "assets/audio/Listening-C.mp3",
    questions: [
      input("C1", "1. Write the opposite word.", ["son"], "Từ được đọc là daughter; từ trái nghĩa theo cặp gia đình là son."),
      input("C2", "2. Write the opposite word.", ["old"], "Từ được đọc là young; từ trái nghĩa là old."),
      input("C3", "3. Write the opposite word.", ["aunt"], "Từ được đọc là uncle; từ tương ứng chỉ người nữ là aunt.")
    ]
  },
  {
    letter: "D", title: "Look and complete the sentences. Use the correct form of be.",
    note: "Nhìn chủ ngữ để chọn am, is hoặc are.", points: 5,
    questions: [
      input("D1", "They ___ sisters.", ["are", "they are"], "They chỉ nhiều người nên đi với are: They are sisters.", `${ASSET}page2-img_p1_2.png`),
      input("D2", "He ___ young.", ["is", "he is"], "He là một người nam (cậu ấy/anh ấy) nên đi với is: He is young.", `${ASSET}page2-img_p1_4.png`),
      input("D3", "It ___ big.", ["is", "it is"], "It chỉ một vật - ngôi nhà - nên đi với is: It is big.", `${ASSET}page2-img_p1_3.png`),
      input("D4", "We ___ friends.", ["are", "we are"], "We nghĩa là chúng tôi/chúng ta, chỉ nhiều người nên đi với are: We are friends.", `${ASSET}page2-img_p1_5.png`),
      input("D5", "She ___ cold.", ["is", "she is"], "She là một người nữ (cô ấy) nên đi với is: She is cold.", `${ASSET}page2-img_p1_6.png`)
    ]
  },
  {
    letter: "E", title: "Complete the sentences.",
    note: "Dùng đúng dạng viết tắt trong Word Bank. Trang cũng chấp nhận dạng đầy đủ có cùng nghĩa.", points: 5,
    wordBank: ["aren't", "'s", "isn't", "'re", "'m not", "am"],
    questions: [
      input("E1", "This ___ my house. It's Liam's.", ["isn't", "is not"], "Ngôi nhà là của Liam nên câu phải phủ định: This isn't my house."),
      input("E2", "They ___ six. They're seven.", ["aren't", "are not"], "They đi với are; câu phủ định là aren't: They aren't six."),
      input("E3", "I ___ cold. I'm hot.", ["'m not", "am not", "i'm not", "i am not"], "I đi với am; câu phủ định là I'm not cold."),
      input("E4", "You ___ my best friend.", ["'re", "are", "you're", "you are"], "You đi với are; dạng viết tắt là You're my best friend."),
      input("E5", "Hi, Ella. It ___ nice to meet you.", ["'s", "is", "it's", "it is"], "It đi với is; dạng viết tắt là It's nice to meet you.")
    ]
  },
  {
    letter: "F", title: "Write the words in the correct order to make questions.",
    note: "Sắp xếp đủ các từ và viết thành câu hỏi hoàn chỉnh.", points: 3,
    questions: [
      input("F1", "family / your / small / Is", ["is your family small"], "Đưa Is lên đầu câu hỏi: Is your family small?"),
      input("F2", "cousins / Joe and Ann / Are", ["are joe and ann cousins"], "Joe and Ann là hai người nên dùng Are: Are Joe and Ann cousins?"),
      input("F3", "she / Is / old / years / eight", ["is she eight years old"], "Cụm tuổi đúng là eight years old: Is she eight years old?")
    ]
  },
  {
    letter: "G", title: "Match the words to the pictures.",
    note: "Quan sát ba hình a-c rồi chọn chữ cái đúng cho mỗi hoạt động.", points: 3,
    imageGallery: [
      { label: "a", src: `${ASSET}page3-img_p2_2.png` },
      { label: "b", src: `${ASSET}page3-img_p2_3.png` },
      { label: "c", src: `${ASSET}page3-img_p2_8.png` }
    ],
    questions: [
      choice("G1", "1. sleep", ["a", "b", "c"], "b", "Hình b cho thấy một bạn đang ngủ - sleep."),
      choice("G2", "2. eat", ["a", "b", "c"], "c", "Hình c cho thấy một bạn đang ăn - eat."),
      choice("G3", "3. play", ["a", "b", "c"], "a", "Hình a cho thấy các bạn đang chơi - play.")
    ]
  },
  {
    letter: "H", title: "Complete the sentences.",
    note: "Chọn đúng con vật trong Word Bank để hoàn thành từng câu.", points: 4,
    wordBank: ["hamster", "goldfish", "lion", "kitten", "tortoise"],
    questions: [
      input("H1", "A ___ lives in water.", ["goldfish", "a goldfish"], "Goldfish là cá vàng và sống trong nước."),
      input("H2", "A ___ is a very young animal.", ["kitten", "a kitten"], "Kitten là mèo con, tức một con vật còn rất nhỏ."),
      input("H3", "A ___ can't run. It walks very slowly.", ["tortoise", "a tortoise"], "Tortoise là rùa cạn và đi rất chậm."),
      input("H4", "A ___ is a small, brown animal.", ["hamster", "a hamster"], "Hamster là một con vật nhỏ, thường có màu nâu.")
    ]
  },
  {
    letter: "I", title: "Look and complete the words.",
    note: "Nhìn hình và điền đủ chữ cái để viết đúng tên con vật.", points: 6,
    questions: [
      input("I1", "R _ b _ _ t", ["rabbit"], "Từ hoàn chỉnh là rabbit - con thỏ.", `${ASSET}page3-img_p2_4.png`),
      input("I2", "B _ _ d", ["bird"], "Từ hoàn chỉnh là bird - con chim.", `${ASSET}page3-img_p2_5.png`),
      input("I3", "L _ _ a _ d", ["lizard"], "Từ hoàn chỉnh là lizard - con thằn lằn.", `${ASSET}page3-img_p2_9.png`),
      input("I4", "K _ _ t _ n", ["kitten"], "Từ hoàn chỉnh là kitten - mèo con.", `${ASSET}page3-img_p2_6.png`),
      input("I5", "E _ _ p _ _ _ t", ["elephant"], "Từ hoàn chỉnh là elephant - con voi.", `${ASSET}page3-img_p2_7.png`),
      input("I6", "G _ _ d _ _ _ h", ["goldfish"], "Từ hoàn chỉnh là goldfish - cá vàng.", `${ASSET}page3-img_p2_10.png`)
    ]
  },
  {
    letter: "J", title: "Circle the correct words.",
    note: "Chọn từ chỉ định phù hợp với số ít/số nhiều và is/are.", points: 4,
    questions: [
      choice("J1", "___ are big animals.", ["These", "This"], "These", "Có are và animals số nhiều nên dùng These: These are big animals."),
      choice("J2", "___ is the school playground.", ["Those", "That"], "That", "Có is và playground số ít nên dùng That: That is the school playground."),
      choice("J3", "This ___ my aunt.", ["is", "are"], "is", "This chỉ một người và đi với is: This is my aunt."),
      choice("J4", "___ are my pets.", ["That", "Those"], "Those", "Có are và pets số nhiều nên dùng Those: Those are my pets.")
    ]
  },
  {
    letter: "K", title: "Listen and complete the sentences.",
    note: "Nghe audio và điền từ chỉ định còn thiếu.", points: 4,
    audio: "assets/audio/Listening-E.mp3",
    questions: [
      input("K1", "___ is my friend Sam.", ["this"], "Câu trong audio là: This is my friend Sam."),
      input("K2", "___ are Hannah's cousins.", ["those"], "Câu trong audio là: Those are Hannah's cousins."),
      input("K3", "___ is a lion.", ["that"], "Câu trong audio là: That is a lion."),
      input("K4", "___ are zebras.", ["these"], "Câu trong audio là: These are zebras.")
    ]
  },
  {
    letter: "L", title: "Look and write. Use is or are and the words in the box.",
    note: "Nhìn vị trí gần/xa và số ít/số nhiều để chọn This, That, These hoặc Those.", points: 4,
    wordBank: ["That", "These", "This", "Those"],
    sectionImage: `${ASSET}page4-img_p3_3.png`,
    imageMarkers: [
      { label: "1", left: "27%", top: "57%" }, { label: "2", left: "81%", top: "31%" },
      { label: "3", left: "57%", top: "58%" }, { label: "4", left: "5%", top: "62%" }
    ],
    questions: [
      choice("L1", "___ are my friends.", ["This", "That", "These", "Those"], "These", "Friends là số nhiều và ở gần người nói nên dùng These are my friends."),
      choice("L2", "___ are my parents.", ["This", "That", "These", "Those"], "Those", "Parents là số nhiều và ở xa nên dùng Those are my parents."),
      choice("L3", "___ is my sister.", ["This", "That", "These", "Those"], "This", "Sister là một người và ở gần nên dùng This is my sister."),
      choice("L4", "___ is her kitten.", ["This", "That", "These", "Those"], "That", "Kitten là một con vật và ở xa nên dùng That is her kitten.")
    ]
  }
];

const form = document.querySelector("#testForm");
const sectionsRoot = document.querySelector("#sections");
const sectionJump = document.querySelector("#sectionJump");
const progressText = document.querySelector("#progressText");
const progressBar = document.querySelector("#progressBar");
const results = document.querySelector("#results");
const answerReview = document.querySelector("#answerReview");
const scoreValue = document.querySelector("#scoreValue");
const scoreMessage = document.querySelector("#scoreMessage");
const STORAGE_KEY = "discover1-written-test1-v1";

renderSections();
restoreProgress();
updateProgress();

form.addEventListener("click", event => {
  const button = event.target.closest("[data-choice]");
  if (!button) return;
  const question = button.closest(".question");
  question.querySelectorAll("[data-choice]").forEach(item => {
    item.classList.toggle("is-selected", item === button);
    item.setAttribute("aria-pressed", item === button ? "true" : "false");
  });
  question.dataset.value = button.dataset.value;
  question.classList.remove("is-missing");
  saveProgress();
  updateProgress();
});

form.addEventListener("input", event => {
  if (!event.target.matches("input")) return;
  event.target.closest(".question")?.classList.remove("is-missing");
  saveProgress();
  updateProgress();
});

form.addEventListener("submit", event => {
  event.preventDefault();
  document.querySelectorAll(".question.is-missing").forEach(el => el.classList.remove("is-missing"));
  const missing = getMissingFields();
  if (missing.length) {
    missing.forEach(field => field.closest(".question").classList.add("is-missing"));
    document.querySelector("#submitHelp").textContent = `Bài còn thiếu ${missing.length} ý. Em hoàn thành phần được đánh dấu trước khi xem đáp án.`;
    missing[0].closest(".question").scrollIntoView({ behavior: "smooth", block: "center" });
    missing[0].focus?.({ preventScroll: true });
    return;
  }
  gradeTest();
});

document.querySelector("#restartTest").addEventListener("click", () => {
  if (!window.confirm("Em muốn xoá toàn bộ câu trả lời và làm lại từ đầu?")) return;
  localStorage.removeItem(STORAGE_KEY);
  window.location.reload();
});

document.querySelector("#reviewMistakes").addEventListener("click", () => {
  (document.querySelector(".review-card.is-wrong") || answerReview).scrollIntoView({ behavior: "smooth", block: "start" });
});

function renderSections() {
  sections.forEach(section => {
    const jump = document.createElement("button");
    jump.type = "button";
    jump.textContent = section.letter;
    jump.title = `Phần ${section.letter}`;
    jump.dataset.jump = section.letter;
    jump.addEventListener("click", () => document.querySelector(`#section-${section.letter}`).scrollIntoView({ behavior: "smooth" }));
    sectionJump.appendChild(jump);

    const sectionElement = document.createElement("section");
    sectionElement.className = "test-section";
    sectionElement.id = `section-${section.letter}`;
    sectionElement.innerHTML = `
      <header class="section-heading">
        <span class="section-letter">${section.letter}</span>
        <div><h2>${section.title}</h2><p>${section.note}</p></div>
        <span class="section-points">/${section.points}</span>
      </header>
      ${section.audio ? `<div class="audio-panel"><p>Audio phần ${section.letter}</p><audio controls preload="metadata" src="${section.audio}"></audio></div>` : ""}
      ${renderWordBank(section)}
      ${renderImageGallery(section)}
      ${renderSectionImage(section)}
      <div class="question-list">${section.questions.map((question, index) => renderQuestion(section, question, index)).join("")}</div>`;
    sectionsRoot.appendChild(sectionElement);
  });
}

function renderQuestion(section, question, index) {
  const label = `${section.letter}${index + 1}`;
  const control = question.type === "choice"
    ? `<div class="choice-grid">${question.options.map((option, optionIndex) => `<button type="button" class="choice" data-choice data-value="${escapeAttr(option)}" aria-pressed="false"><span class="choice-key">${String.fromCharCode(65 + optionIndex)}</span><span>${option}</span></button>`).join("")}</div>`
    : `<input class="answer-input" data-input="${question.id}" autocomplete="off" spellcheck="false" placeholder="Nhập câu trả lời">`;
  return `<article class="question" data-id="${question.id}" data-section="${section.letter}">
    <span class="question-number">${label}</span>
    <div class="question-copy">
      ${question.image ? `<img class="question-image" src="${question.image}" alt="Hình minh hoạ câu ${label}">` : ""}
      <p class="question-prompt">${question.prompt}</p>${control}
    </div>
  </article>`;
}

function renderWordBank(section) {
  if (!section.wordBank) return "";
  return `<div class="word-bank" aria-label="Word Bank"><span class="word-bank-title">WORD BANK</span><div class="word-bank-items">${section.wordBank.map(word => `<span>${word}</span>`).join("")}</div></div>`;
}

function renderImageGallery(section) {
  if (!section.imageGallery) return "";
  return `<div class="source-gallery">${section.imageGallery.map(item => `<figure><img src="${item.src}" alt="Hình ${item.label}"><figcaption>${item.label}</figcaption></figure>`).join("")}</div>`;
}

function renderSectionImage(section) {
  if (!section.sectionImage) return "";
  if (!section.imageMarkers) return `<img class="source-image" src="${section.sectionImage}" alt="Hình minh hoạ phần ${section.letter}">`;
  return `<div class="numbered-source-image"><img class="source-image" src="${section.sectionImage}" alt="Hình minh hoạ phần ${section.letter}">${section.imageMarkers.map(marker => `<span class="picture-marker" style="left:${marker.left};top:${marker.top}">${marker.label}</span>`).join("")}</div>`;
}

function normalize(value) {
  return String(value || "").toLowerCase().replace(/[’‘`]/g, "'").replace(/[?.!,]/g, "").replace(/\s+/g, " ").trim();
}

function matches(value, accepted) {
  const normalized = normalize(value).replace(/does not/g, "doesn't").replace(/is not/g, "isn't").replace(/are not/g, "aren't");
  return accepted.some(answer => normalize(answer).replace(/does not/g, "doesn't").replace(/is not/g, "isn't").replace(/are not/g, "aren't") === normalized);
}

function getMissingFields() {
  const missing = [];
  sections.forEach(section => section.questions.forEach(question => {
    const element = document.querySelector(`[data-id="${question.id}"]`);
    if (question.type === "choice") {
      if (!element.dataset.value) missing.push(element.querySelector(".choice"));
    } else {
      const field = element.querySelector("input");
      if (!field.value.trim()) missing.push(field);
    }
  }));
  return missing;
}

function gradeTest() {
  let score = 0;
  const reviews = [];
  sections.forEach(section => section.questions.forEach((question, index) => {
    const element = document.querySelector(`[data-id="${question.id}"]`);
    const value = question.type === "choice" ? element.dataset.value || "" : element.querySelector("input").value;
    const correct = matches(value, question.answers);
    if (correct) score += 1;
    reviews.push({ section, question, label: `${section.letter}${index + 1}`, value, correct });
  }));
  scoreValue.textContent = score;
  scoreMessage.textContent = score === 50 ? "Em đã làm đúng toàn bộ bài." : `Em cần chữa ${50 - score} ý. Hãy đọc kỹ giải thích và đối chiếu lại câu gốc.`;
  answerReview.innerHTML = reviews.map(renderReview).join("");
  results.hidden = false;
  form.hidden = true;
  document.querySelector("#stickyProgress").hidden = true;
  results.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderReview(review) {
  return `<article class="review-card ${review.correct ? "" : "is-wrong"}">
    <div class="review-head"><h3>Câu ${review.label}</h3><span class="review-status">${review.correct ? "1/1" : "0/1"} điểm</span></div>
    <p class="review-question">${review.question.prompt}</p>
    <div class="review-answer"><span>Em trả lời: <b>${escapeHtml(review.value || "(trống)")}</b></span><span>Đáp án: <b>${escapeHtml(review.question.answers[0])}</b></span></div>
    <p class="explanation"><b>Giải thích:</b> ${review.question.explanation}</p>
  </article>`;
}

function updateProgress() {
  let completed = 0;
  sections.forEach(section => {
    let sectionCompleted = 0;
    section.questions.forEach(question => {
      const element = document.querySelector(`[data-id="${question.id}"]`);
      const done = question.type === "choice" ? Boolean(element.dataset.value) : Boolean(element.querySelector("input").value.trim());
      if (done) { completed += 1; sectionCompleted += 1; }
    });
    const jump = document.querySelector(`[data-jump="${section.letter}"]`);
    jump.classList.toggle("has-progress", sectionCompleted > 0);
    jump.classList.toggle("is-complete", sectionCompleted === section.points);
  });
  progressText.textContent = `${completed} / 50`;
  progressBar.style.width = `${completed * 2}%`;
}

function saveProgress() {
  const data = {};
  sections.forEach(section => section.questions.forEach(question => {
    const element = document.querySelector(`[data-id="${question.id}"]`);
    data[question.id] = question.type === "choice" ? element.dataset.value || "" : element.querySelector("input").value;
  }));
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function restoreProgress() {
  let data;
  try { data = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}"); } catch { data = {}; }
  sections.forEach(section => section.questions.forEach(question => {
    const value = data[question.id];
    if (!value) return;
    const element = document.querySelector(`[data-id="${question.id}"]`);
    if (question.type === "choice") {
      element.dataset.value = value;
      element.querySelectorAll("[data-choice]").forEach(button => {
        const selected = button.dataset.value === value;
        button.classList.toggle("is-selected", selected);
        button.setAttribute("aria-pressed", selected ? "true" : "false");
      });
    } else element.querySelector("input").value = value;
  }));
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[char]));
}

function escapeAttr(value) { return escapeHtml(value); }
