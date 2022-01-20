let btn_start,
  list_english,
  list_btn,
  btn_item,
  list_word,
  true_box,
  line_element,
  word,
  hadse;
btn_start = document.querySelector(".btn-start");
list_english = [
  "ا",
  "ب",
  "پ",
  "ت",
  "ث",
  "ج",
  "چ",
  "ح",
  "خ",
  "د",
  "ذ",
  "ر",
  "ز",
  "ژ",
  "س",
  "ش",
  "ص",
  "ض",
  "ط",
  "ظ",
  "ع",
  "غ",
  "ف",
  "ق",
  "ک",
  "گ",
  "ل",
  "م",
  "ن",
  "و",
  "ه",
  "ی",
];
list_word = [
  "ریاضی",
  "فیزیک",
  "مهندس",
  "تنظیم",
  "توافق",
  "میزان",
  "زاویه",
  "حیوان",
  "مورچه",
  "تصویب",
  "مانند",
  "جاذبه",
  "بیدار",
  "عزیزم",
  "تعادل",
  "اخلاق",
  "پرنده",
  "غلیان",
  "برنجی",
  "برادر",
  "سوختن",
  "زنجیر",
  "ارزان",
  "کلیسا",
  "دایره",
  "پارچه",
  "آسایش",
  "کمیته",
  "مشترک",
  "رقابت",
  "وضعیت",
  "کنترل",
  "منحنی",
  "خسارت",
  "تاریک",
  "تخریب",
  "توسعه",
  "مسافت",
  "توزیع",
  "تقسیم",
  "پایین",
  "کشسان",
  "پایان",
  "موتور",
  "برابر",
  "همیشه",
  "تبادل",
  "گسترش",
  "تجربه",
  "حقیقت",
  "مزرعه",
  "احساس",
  "انگشت",
  "اولین",
  "پرواز",
  "پرواز",
  "چنگال",
  "آینده",
  "عمومی",
  "گرفتن",
  "دستکش",
  "گرفتن",
  "دارند",
  "شنیدن",
  "شنیدن",
  "حرارت",
  "تاریخ",
  "سوراخ",
  "شیپور",
  "چگونه",
  "بیمار",
  "تکانه",
  "ابزار",
  "علاقه",
  "جزیره",
  "قانون",
  "رهبری",
  "اجازه",
  "مرحله",
  "ملافه",
  "ساختن",
  "بازار",
  "متاهل",
  "پزشکی",
  "حافظه",
  "نظامی",
  "دقیقه",
  "مختلط",
  "میمون",
  "بسیار",
  "طبیعی",
  "نزدیک",
  "اعصاب",
  "اخبار",
  "طبیعی",
  "اکنون",
  "خاموش",
  "مقابل",
  "سفارش",
  "بیرون",
  "موازی",
  "گذشته",
  "بشقاب",
  "سیاسی",
  "باربر",
  "گلدان",
  "زندان",
  "خصوصی",
  "محتمل",
  "ویژگی",
  "پروسه",
  "عمومی",
  "کشیدن",
  "کیفیت",
  "کاملا",
  "باران",
  "دامنه",
  "واکنش",
  "آماده",
  "رکورد",
  "رابطه",
  "مسئول",
  "جایزه",
  "قانون",
  "غمگین",
  "یکسان",
  "مقیاس",
  "مدرسه",
  "صندلی",
  "دومین",
  "ارسال",
  "تاقچه",
  "کوتاه",
  "تعطیل",
  "خواهر",
  "آسمان",
  "آهسته",
  "لبخند",
  "صابون",
  "جامعه",
  "جوراب",
  "ترانه",
  "اسفنج",
  "ستاره",
  "فولاد",
  "آفتاب",
  "شیرین",
  "سیستم",
  "گرفتن",
  "چشیدن",
  "گرایش",
  "تئوری",
  "دندان",
  "تجارت",
  "شلوار",
  "مقدار",
  "بسیار",
];
// create btn
function createBtn() {
  list_english.forEach((item) => {
    let btn = document.createElement("button");
    btn.innerHTML = item;
    btn.classList.add("game__main_btnlist_btn");
    btn.setAttribute("disabled", true);
    btn.addEventListener("click", checkWord);
    list_btn.appendChild(btn);
  });
}
// count down function
function countdown(minutes, seconds) {
  var element, endTime, hours, mins, msLeft, time;

  function twoDigits(n) {
    return n <= 9 ? "0" + n : n;
  }

  function updateTimer() {
    msLeft = endTime - +new Date();
    if (msLeft < 1000) {
      element.innerHTML = "Time is up!";
      btn_item.forEach((item) => {
        item.setAttribute("disabled");
      });
    } else {
      time = new Date(msLeft);
      hours = time.getUTCHours();
      mins = time.getUTCMinutes();
      element.innerHTML =
        (hours ? hours + ":" + twoDigits(mins) : mins) +
        ":" +
        twoDigits(time.getUTCSeconds());
      setTimeout(updateTimer, time.getUTCMilliseconds() + 500);
    }
  }

  element = document.querySelector(".timer");
  endTime = +new Date() + 1000 * (60 * minutes + seconds) + 500;
  updateTimer();
}
// random number for get random word
function getRandom() {
  let random = Math.floor(Math.random() * list_word.length);
  return random;
}
// create line in line box true
function createLine(lenghtWord) {
  true_box = document.querySelector(".true");
  true_box.innerHTML = "";
  for (let i in lenghtWord) {
    let line = document.createElement("span");
    line.classList.add("line");
    true_box.appendChild(line);
  }
  line_element = document.querySelectorAll(".line");
}
// checked
function checkWord(e) {
  ++hadse;
  let use_word = e.target.innerText.toLowerCase();
  let count = 0;
  if (word.includes(use_word)) {
    for (let i in word) {
      if (word[i] == use_word) {
        line_element[i].innerHTML = use_word;
      }
    }
    e.target.disabled = true;
    line_element.forEach((item) => {
      if (item.innerHTML !== "") {
        count++;
      }
      if (count == word.length) {
        alert(`HORA ${word} DROST BOD :)`);
        setTimeout(setWord(), 3000);
      }
    });
  } else {
    e.target.disabled = true;
    console.log();
  }
  if (hadse === 10) {
    alert("10 بار تلاش کردی نشد");
    setTimeout(setWord(), 3000);
  }
}
// set a new word
function setWord() {
  hadse = 0;
  btn_item.forEach((item) => {
    item.removeAttribute("disabled");
  });
  word = list_word[getRandom()];
  console.log(word);
  createLine(word);
}
window.addEventListener("load", () => {
  list_btn = document.querySelector(".game__main_btnlist");
  createBtn();
  btn_item = document.querySelectorAll(".game__main_btnlist_btn");
});
btn_start.addEventListener("click", (e) => {
  btn_item.forEach((item) => {
    item.removeAttribute("disabled");
  });
  e.target.disabled = true;
  countdown(10, 0);
  setWord();
});
