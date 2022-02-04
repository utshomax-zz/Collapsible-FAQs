//faq: {question: "", answer: "", ucount: 0}

var usefullicon = `<svg xmlns="http://www.w3.org/2000/svg" height="18" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
</svg>`;
var uparrow = `<svg xmlns="http://www.w3.org/2000/svg" height="18" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z" />
</svg>`;
var faqs = [
  {
    id: 1,
    question: 'What is the purpose of this website?',
    answer:
      'This website is a part of harmony OS internship program. Basically, this is a place where you can find answers of frequently asked questions.',
    ucount: 2,
  },
  {
    id: 2,
    question: 'What are the features of this website?',
    answer:
      'You can find answers of frequently asked questions and also you can mark questions as usefull and sort based on usefull count.',
    ucount: 4,
  },
  {
    id: 3,
    question: 'How does collapsible setion work?',
    answer: 'You can click on any question to see the answer.',
    ucount: 5,
  },
  {
    id: 5,
    question: 'What does the light bulb icon mean?',
    answer: 'This icon means that this question is usefull',
    ucount: 1,
  },
  {
    id: 6,
    question: 'How can I mark a question usefull?',
    answer: 'You can click on the arrow up icon to mark a question as usefull.',
    ucount: 9,
  },
  {
    id: 7,
    question: 'How can I sort the questions?',
    answer:
      'You can sort the questions based on usefull count by clicking located at the sort button on top-right corner.',
    ucount: 8,
  },
  {
    id: 8,
    question: 'Why the sorting is not working?',
    answer:
      'Only desending order is implemented. Check if It already sorted by usefull count.',
    ucount: 3,
  },
  {
    id: 9,
    question: 'Why there is no record of my vote?',
    answer:
      'The website is not connected to any database. So, your vote is not recorded.',
    ucount: 6,
  },
  {
    id: 10,
    question: 'What does faq mean?',
    answer: 'faq means frequently asked question.',
    ucount: 0,
  },
];

//Mark Usefull
function markUsefull(faqID) {
  var faq = faqs.find((x) => x.id == faqID);
  faq.ucount++;
  renderUI();
}

//sort by ucount
function sortByUCount() {
  faqs.sort(function (a, b) {
    return b.ucount - a.ucount;
  });
  renderUI();
}

function renderUI() {
  var html = '';
  for (var faq of faqs) {
    html += `
    <div class="faq">
    <button type="button" class="collapsible">
      ${faq.id + '. ' + faq.question}
      <div class="usefull felx-center">
        <span title="${
          faq.ucount
        } user found this question usefull">${usefullicon}</span>
        <span>${faq.ucount}</span>
        <span class="count" title="Click To Mark As Usefull" onClick="markUsefull(${
          faq.id
        })">${uparrow}</span>
      </div>
    </button>
    <div class="content">
      <p>
        ${faq.answer}
      </p>
    </div>
  </div>
    `;
  }
  document.getElementById('faqs').innerHTML = html;
  makeCollapsible();
}

//Colapsable Section
function makeCollapsible() {
  var coll = document.getElementsByClassName('collapsible');
  var i;
  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener('click', function () {
      this.classList.toggle('active');
      var content = this.nextElementSibling;
      if (content.style.display === 'block') {
        content.style.display = 'none';
      } else {
        content.style.display = 'block';
      }
    });
  }
}

renderUI();
