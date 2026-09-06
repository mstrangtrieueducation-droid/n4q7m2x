const ASSET = "assets/extracted/";

function choice(id, prompt, options, answer, explanation, image = "") {
  return { id, type: "choice", prompt, options, answers: [answer], explanation, image, points: 1 };
}

function input(id, prompt, answers, explanation, image = "") {
  return { id, type: "input", prompt, answers, explanation, image, points: 1 };
}

const sections = [
  {
    "letter": "A",
    "title": "Look and circle the correct words.",
    "note": "Nhìn từng hình rồi chọn từ đúng.",
    "points": 3,
    "questions": [
      {
        "id": "A1",
        "type": "choice",
        "prompt": "Picture 1",
        "options": [
          "aunt",
          "uncle"
        ],
        "answers": [
          "uncle"
        ],
        "explanation": "Hình là một người đàn ông trong gia đình, vì vậy từ đúng là uncle.",
        "image": "assets/extracted/page1-img_p0_2.png",
        "points": 1
      },
      {
        "id": "A2",
        "type": "choice",
        "prompt": "Picture 2",
        "options": [
          "brother",
          "sister"
        ],
        "answers": [
          "sister"
        ],
        "explanation": "Hình là một bạn gái, vì vậy từ đúng là sister.",
        "image": "assets/extracted/page1-img_p0_3.png",
        "points": 1
      },
      {
        "id": "A3",
        "type": "choice",
        "prompt": "Picture 3",
        "options": [
          "friends",
          "parents"
        ],
        "answers": [
          "friends"
        ],
        "explanation": "Hai bạn nhỏ đang khoác vai nhau. Họ là friends, không phải parents.",
        "image": "assets/extracted/page1-img_p0_6.png",
        "points": 1
      }
    ]
  },
  {
    "letter": "B",
    "title": "Look and write the words.",
    "note": "Dùng các từ trong Word Bank để gọi đúng từng người trong gia đình.",
    "points": 6,
    "wordBank": [
      "daughter",
      "father",
      "grandfather",
      "grandmother",
      "mother",
      "son",
      "friends"
    ],
    "sectionImage": "assets/extracted/page1-img_p0_5.png",
    "imageMarkers": [
      {
        "label": "1",
        "left": "15%",
        "top": "76%"
      },
      {
        "label": "2",
        "left": "32%",
        "top": "76%"
      },
      {
        "label": "3",
        "left": "45%",
        "top": "81%"
      },
      {
        "label": "4",
        "left": "57%",
        "top": "76%"
      },
      {
        "label": "5",
        "left": "72%",
        "top": "78%"
      },
      {
        "label": "6",
        "left": "88%",
        "top": "79%"
      }
    ],
    "questions": [
      {
        "id": "B1",
        "type": "input",
        "prompt": "Picture 1",
        "answers": [
          "grandfather"
        ],
        "explanation": "Người đàn ông lớn tuổi là grandfather - ông.",
        "image": "",
        "points": 1
      },
      {
        "id": "B2",
        "type": "input",
        "prompt": "Picture 2",
        "answers": [
          "grandmother"
        ],
        "explanation": "Người phụ nữ lớn tuổi là grandmother - bà.",
        "image": "",
        "points": 1
      },
      {
        "id": "B3",
        "type": "input",
        "prompt": "Picture 3",
        "answers": [
          "son"
        ],
        "explanation": "Bạn trai nhỏ là son - con trai.",
        "image": "",
        "points": 1
      },
      {
        "id": "B4",
        "type": "input",
        "prompt": "Picture 4",
        "answers": [
          "father"
        ],
        "explanation": "Người đàn ông là father - bố.",
        "image": "",
        "points": 1
      },
      {
        "id": "B5",
        "type": "input",
        "prompt": "Picture 5",
        "answers": [
          "mother"
        ],
        "explanation": "Người phụ nữ là mother - mẹ.",
        "image": "",
        "points": 1
      },
      {
        "id": "B6",
        "type": "input",
        "prompt": "Picture 6",
        "answers": [
          "daughter"
        ],
        "explanation": "Bạn gái nhỏ là daughter - con gái.",
        "image": "",
        "points": 1
      }
    ]
  },
  {
    "letter": "C",
    "title": "Listen and write the opposite of the words.",
    "note": "Nghe audio và viết từ có nghĩa trái ngược.",
    "points": 3,
    "audio": "assets/audio/Listening-C.mp3",
    "questions": [
      {
        "id": "C1",
        "type": "input",
        "prompt": "1. Write the opposite word.",
        "answers": [
          "son"
        ],
        "explanation": "Từ được đọc là daughter; từ trái nghĩa theo cặp gia đình là son.",
        "image": "",
        "points": 1
      },
      {
        "id": "C2",
        "type": "input",
        "prompt": "2. Write the opposite word.",
        "answers": [
          "old"
        ],
        "explanation": "Từ được đọc là young; từ trái nghĩa là old.",
        "image": "",
        "points": 1
      },
      {
        "id": "C3",
        "type": "input",
        "prompt": "3. Write the opposite word.",
        "answers": [
          "aunt"
        ],
        "explanation": "Từ được đọc là uncle; từ tương ứng chỉ người nữ là aunt.",
        "image": "",
        "points": 1
      }
    ]
  },
  {
    "letter": "D",
    "title": "Look and complete the sentences. Use the correct form of be.",
    "note": "Nhìn hình và chủ ngữ; điền dạng khẳng định hoặc phủ định của be vào chỗ trống.",
    "points": 5,
    "questions": [
      {
        "id": "D1",
        "type": "input",
        "prompt": "They ___ sisters.",
        "answers": [
          "are"
        ],
        "explanation": "They chỉ nhiều người nên đi với are: They are sisters.",
        "image": "assets/extracted/page2-img_p1_2.png",
        "points": 1
      },
      {
        "id": "D2",
        "type": "input",
        "prompt": "He ___ young.",
        "answers": [
          "isn't",
          "is not"
        ],
        "explanation": "Theo hình và đáp án gốc: He isn't young. Người đàn ông đã lớn tuổi nên phải dùng dạng phủ định isn't (is not).",
        "image": "assets/extracted/page2-img_p1_4.png",
        "points": 1
      },
      {
        "id": "D3",
        "type": "input",
        "prompt": "It ___ big.",
        "answers": [
          "is"
        ],
        "explanation": "It chỉ một vật - ngôi nhà - nên đi với is: It is big.",
        "image": "assets/extracted/page2-img_p1_3.png",
        "points": 1
      },
      {
        "id": "D4",
        "type": "input",
        "prompt": "We ___ friends.",
        "answers": [
          "are"
        ],
        "explanation": "We nghĩa là chúng tôi/chúng ta, chỉ nhiều người nên đi với are: We are friends.",
        "image": "assets/extracted/page2-img_p1_5.png",
        "points": 1
      },
      {
        "id": "D5",
        "type": "input",
        "prompt": "She ___ cold.",
        "answers": [
          "isn't",
          "is not"
        ],
        "explanation": "Theo hình và đáp án gốc: She isn't cold. Cô bé không lạnh nên phải dùng isn't (is not).",
        "image": "assets/extracted/page2-img_p1_6.png",
        "points": 1
      }
    ]
  },
  {
    "letter": "E",
    "title": "Complete the sentences.",
    "note": "Dùng đúng dạng viết tắt trong Word Bank. Trang cũng chấp nhận dạng đầy đủ có cùng nghĩa.",
    "points": 5,
    "wordBank": [
      "aren't",
      "'s",
      "isn't",
      "'re",
      "'m not",
      "am"
    ],
    "questions": [
      {
        "id": "E1",
        "type": "input",
        "prompt": "This ___ my house. It's Liam's.",
        "answers": [
          "isn't",
          "is not"
        ],
        "explanation": "Ngôi nhà là của Liam nên câu phải phủ định: This isn't my house.",
        "image": "",
        "points": 1
      },
      {
        "id": "E2",
        "type": "input",
        "prompt": "They ___ six. They're seven.",
        "answers": [
          "aren't",
          "are not"
        ],
        "explanation": "They đi với are; câu phủ định là aren't: They aren't six.",
        "image": "",
        "points": 1
      },
      {
        "id": "E3",
        "type": "input",
        "prompt": "I ___ cold. I'm hot.",
        "answers": [
          "'m not",
          "am not",
          "i'm not",
          "i am not"
        ],
        "explanation": "I đi với am; câu phủ định là I'm not cold.",
        "image": "",
        "points": 1
      },
      {
        "id": "E4",
        "type": "input",
        "prompt": "You ___ my best friend.",
        "answers": [
          "'re",
          "are",
          "you're",
          "you are"
        ],
        "explanation": "You đi với are; dạng viết tắt là You're my best friend.",
        "image": "",
        "points": 1
      },
      {
        "id": "E5",
        "type": "input",
        "prompt": "Hi, Ella. It ___ nice to meet you.",
        "answers": [
          "'s",
          "is",
          "it's",
          "it is"
        ],
        "explanation": "It đi với is; dạng viết tắt là It's nice to meet you.",
        "image": "",
        "points": 1
      }
    ]
  },
  {
    "letter": "F",
    "title": "Write the words in the correct order to make questions.",
    "note": "Sắp xếp đủ các từ và viết thành câu hỏi hoàn chỉnh.",
    "points": 3,
    "questions": [
      {
        "id": "F1",
        "type": "input",
        "prompt": "family / your / small / Is",
        "answers": [
          "is your family small"
        ],
        "explanation": "Đưa Is lên đầu câu hỏi: Is your family small?",
        "image": "",
        "points": 1
      },
      {
        "id": "F2",
        "type": "input",
        "prompt": "cousins / Joe and Ann / Are",
        "answers": [
          "are joe and ann cousins"
        ],
        "explanation": "Joe and Ann là hai người nên dùng Are: Are Joe and Ann cousins?",
        "image": "",
        "points": 1
      },
      {
        "id": "F3",
        "type": "input",
        "prompt": "she / Is / old / years / eight",
        "answers": [
          "is she eight years old"
        ],
        "explanation": "Cụm tuổi đúng là eight years old: Is she eight years old?",
        "image": "",
        "points": 1
      }
    ]
  },
  {
    "letter": "G",
    "title": "Match the words to the pictures.",
    "note": "Quan sát ba hình a-c rồi chọn chữ cái đúng cho mỗi hoạt động.",
    "points": 3,
    "imageGallery": [
      {
        "label": "a",
        "src": "assets/extracted/page3-img_p2_2.png"
      },
      {
        "label": "b",
        "src": "assets/extracted/page3-img_p2_3.png"
      },
      {
        "label": "c",
        "src": "assets/extracted/page3-img_p2_8.png"
      }
    ],
    "questions": [
      {
        "id": "G1",
        "type": "choice",
        "prompt": "1. sleep",
        "options": [
          "a",
          "b",
          "c"
        ],
        "answers": [
          "b"
        ],
        "explanation": "Hình b cho thấy một bạn đang ngủ - sleep.",
        "image": "",
        "points": 1
      },
      {
        "id": "G2",
        "type": "choice",
        "prompt": "2. eat",
        "options": [
          "a",
          "b",
          "c"
        ],
        "answers": [
          "c"
        ],
        "explanation": "Hình c cho thấy một bạn đang ăn - eat.",
        "image": "",
        "points": 1
      },
      {
        "id": "G3",
        "type": "choice",
        "prompt": "3. play",
        "options": [
          "a",
          "b",
          "c"
        ],
        "answers": [
          "a"
        ],
        "explanation": "Hình a cho thấy các bạn đang chơi - play.",
        "image": "",
        "points": 1
      }
    ]
  },
  {
    "letter": "H",
    "title": "Complete the sentences.",
    "note": "Chọn đúng con vật trong Word Bank để hoàn thành từng câu.",
    "points": 4,
    "wordBank": [
      "hamster",
      "goldfish",
      "lion",
      "kitten",
      "tortoise"
    ],
    "questions": [
      {
        "id": "H1",
        "type": "input",
        "prompt": "A ___ lives in water.",
        "answers": [
          "goldfish",
          "a goldfish"
        ],
        "explanation": "Goldfish là cá vàng và sống trong nước.",
        "image": "",
        "points": 1
      },
      {
        "id": "H2",
        "type": "input",
        "prompt": "A ___ is a very young animal.",
        "answers": [
          "kitten",
          "a kitten"
        ],
        "explanation": "Kitten là mèo con, tức một con vật còn rất nhỏ.",
        "image": "",
        "points": 1
      },
      {
        "id": "H3",
        "type": "input",
        "prompt": "A ___ can't run. It walks very slowly.",
        "answers": [
          "tortoise",
          "a tortoise"
        ],
        "explanation": "Tortoise là rùa cạn và đi rất chậm.",
        "image": "",
        "points": 1
      },
      {
        "id": "H4",
        "type": "input",
        "prompt": "A ___ is a small, brown animal.",
        "answers": [
          "hamster",
          "a hamster"
        ],
        "explanation": "Hamster là một con vật nhỏ, thường có màu nâu.",
        "image": "",
        "points": 1
      }
    ]
  },
  {
    "letter": "I",
    "title": "Look and complete the words.",
    "note": "Nhìn hình và điền đủ chữ cái để viết đúng tên con vật.",
    "points": 6,
    "questions": [
      {
        "id": "I1",
        "type": "input",
        "prompt": "R _ b _ _ t",
        "answers": [
          "rabbit"
        ],
        "explanation": "Từ hoàn chỉnh là rabbit - con thỏ.",
        "image": "assets/extracted/page3-img_p2_4.png",
        "points": 1
      },
      {
        "id": "I2",
        "type": "input",
        "prompt": "B _ _ d",
        "answers": [
          "bird"
        ],
        "explanation": "Từ hoàn chỉnh là bird - con chim.",
        "image": "assets/extracted/page3-img_p2_5.png",
        "points": 1
      },
      {
        "id": "I3",
        "type": "input",
        "prompt": "L _ _ a _ d",
        "answers": [
          "lizard"
        ],
        "explanation": "Từ hoàn chỉnh là lizard - con thằn lằn.",
        "image": "assets/extracted/page3-img_p2_9.png",
        "points": 1
      },
      {
        "id": "I4",
        "type": "input",
        "prompt": "K _ _ t _ n",
        "answers": [
          "kitten"
        ],
        "explanation": "Từ hoàn chỉnh là kitten - mèo con.",
        "image": "assets/extracted/page3-img_p2_6.png",
        "points": 1
      },
      {
        "id": "I5",
        "type": "input",
        "prompt": "E _ _ p _ _ _ t",
        "answers": [
          "elephant"
        ],
        "explanation": "Từ hoàn chỉnh là elephant - con voi.",
        "image": "assets/extracted/page3-img_p2_7.png",
        "points": 1
      },
      {
        "id": "I6",
        "type": "input",
        "prompt": "G _ _ d _ _ _ h",
        "answers": [
          "goldfish"
        ],
        "explanation": "Từ hoàn chỉnh là goldfish - cá vàng.",
        "image": "assets/extracted/page3-img_p2_10.png",
        "points": 1
      }
    ]
  },
  {
    "letter": "J",
    "title": "Circle the correct words.",
    "note": "Chọn từ chỉ định phù hợp với số ít/số nhiều và is/are.",
    "points": 4,
    "questions": [
      {
        "id": "J1",
        "type": "choice",
        "prompt": "___ are big animals.",
        "options": [
          "These",
          "This"
        ],
        "answers": [
          "These"
        ],
        "explanation": "Có are và animals số nhiều nên dùng These: These are big animals.",
        "image": "",
        "points": 1
      },
      {
        "id": "J2",
        "type": "choice",
        "prompt": "___ is the school playground.",
        "options": [
          "Those",
          "That"
        ],
        "answers": [
          "That"
        ],
        "explanation": "Có is và playground số ít nên dùng That: That is the school playground.",
        "image": "",
        "points": 1
      },
      {
        "id": "J3",
        "type": "choice",
        "prompt": "This ___ my aunt.",
        "options": [
          "is",
          "are"
        ],
        "answers": [
          "is"
        ],
        "explanation": "This chỉ một người và đi với is: This is my aunt.",
        "image": "",
        "points": 1
      },
      {
        "id": "J4",
        "type": "choice",
        "prompt": "___ are my pets.",
        "options": [
          "That",
          "Those"
        ],
        "answers": [
          "Those"
        ],
        "explanation": "Có are và pets số nhiều nên dùng Those: Those are my pets.",
        "image": "",
        "points": 1
      }
    ]
  },
  {
    "letter": "K",
    "title": "Listen and complete the sentences.",
    "note": "Nghe audio và điền từ chỉ định còn thiếu.",
    "points": 4,
    "audio": "assets/audio/Listening-E.mp3",
    "questions": [
      {
        "id": "K1",
        "type": "input",
        "prompt": "___ is my friend Sam.",
        "answers": [
          "this"
        ],
        "explanation": "Câu trong audio là: This is my friend Sam.",
        "image": "",
        "points": 1
      },
      {
        "id": "K2",
        "type": "input",
        "prompt": "___ are Hannah's cousins.",
        "answers": [
          "those"
        ],
        "explanation": "Câu trong audio là: Those are Hannah's cousins.",
        "image": "",
        "points": 1
      },
      {
        "id": "K3",
        "type": "input",
        "prompt": "___ is a lion.",
        "answers": [
          "that"
        ],
        "explanation": "Câu trong audio là: That is a lion.",
        "image": "",
        "points": 1
      },
      {
        "id": "K4",
        "type": "input",
        "prompt": "___ are zebras.",
        "answers": [
          "these"
        ],
        "explanation": "Câu trong audio là: These are zebras.",
        "image": "",
        "points": 1
      }
    ]
  },
  {
    "letter": "L",
    "title": "Look and write. Use is or are and the words in the box.",
    "note": "Nhìn vị trí gần/xa và số ít/số nhiều để chọn This, That, These hoặc Those.",
    "points": 4,
    "wordBank": [
      "That",
      "These",
      "This",
      "Those"
    ],
    "sectionImage": "assets/extracted/page4-img_p3_3.png",
    "imageMarkers": [
      {
        "label": "1",
        "left": "27%",
        "top": "57%"
      },
      {
        "label": "2",
        "left": "81%",
        "top": "31%"
      },
      {
        "label": "3",
        "left": "57%",
        "top": "58%"
      },
      {
        "label": "4",
        "left": "5%",
        "top": "62%"
      }
    ],
    "questions": [
      {
        "id": "L1",
        "type": "choice",
        "prompt": "___ are my friends.",
        "options": [
          "This",
          "That",
          "These",
          "Those"
        ],
        "answers": [
          "These"
        ],
        "explanation": "Friends là số nhiều và ở gần người nói nên dùng These are my friends.",
        "image": "",
        "points": 1
      },
      {
        "id": "L2",
        "type": "choice",
        "prompt": "___ are my parents.",
        "options": [
          "This",
          "That",
          "These",
          "Those"
        ],
        "answers": [
          "Those"
        ],
        "explanation": "Parents là số nhiều và ở xa nên dùng Those are my parents.",
        "image": "",
        "points": 1
      },
      {
        "id": "L3",
        "type": "choice",
        "prompt": "___ is my sister.",
        "options": [
          "This",
          "That",
          "These",
          "Those"
        ],
        "answers": [
          "This"
        ],
        "explanation": "Sister là một người và ở gần nên dùng This is my sister.",
        "image": "",
        "points": 1
      },
      {
        "id": "L4",
        "type": "choice",
        "prompt": "___ is her kitten.",
        "options": [
          "This",
          "That",
          "These",
          "Those"
        ],
        "answers": [
          "That"
        ],
        "explanation": "Kitten là một con vật và ở xa nên dùng That is her kitten.",
        "image": "",
        "points": 1
      }
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
const STORAGE_KEY = "discover1-written-test1-v1-source-audit-v2";

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

function matches(value, accepted) { return DiscoverAnswerMatcher.matches(value, accepted); }

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
    <div class="review-answer"><span>Em trả lời: <b>${escapeHtml(review.value || "(trống)")}</b></span><span>Đáp án: <b>${escapeHtml(DiscoverAnswerDisplay.formatAnswer(review.question.answers[0], {section: review.section, question: review.question}))}</b></span></div>
    <p class="explanation"><b>Giải thích:</b> ${escapeHtml(DiscoverAnswerDisplay.formatExplanation(review.question.explanation))}</p>
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
