// آرایه‌ای از جمله‌های انگیزشی
const quotes = [
  "موفقیت نتیجه‌ی تلاش‌های کوچک روزانه‌ست 🌱",
  "هر روز یه فرصت جدیده برای شروع دوباره ✨",
  "به خودت باور داشته باش، تو می‌تونی 💪",
  "هر سختی یه درسه، ناامید نشو 🌈",
  "موفقیت با قدم‌های کوچیک شروع میشه 🚀"
];

// انتخاب عناصر HTML با id
const quoteElement = document.getElementById("quote");
const button = document.getElementById("new-quote");

// تعریف یک event listener برای دکمه
button.addEventListener("click", () => {
  // انتخاب یک جمله رندوم از آرایه
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const newQuote = quotes[randomIndex];
  
  // نمایش جمله انتخاب شده در صفحه
  quoteElement.textContent = newQuote;
});