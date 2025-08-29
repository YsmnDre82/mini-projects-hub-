// گرفتن المان‌ها
const result = document.getElementById("result");
const buttons = document.querySelectorAll(".btn");

// اگر می‌خواهی کاربر نتونه تایپ کنه ولی انتخاب کند:
// result.readOnly = true;  // بهتر از disabled برای دسترسی‌پذیری

// یک فانکشن برای پردازش متنی که دکمه می‌فرسته:
function handleButton(text) {
  if (!text) return;
  text = text.trim();

  // Clear
  if (text === "C") {
    result.value = "";
    return;
  }

  // Backspace
  if (text === "←") {
    result.value = result.value.slice(0, -1);
    return;
  }

  // Equal
  if (text === "=") {
    calculate();
    return;
  }

  // جلوگیری از دو عملگر پیاپی - لیست عملگرهای مجاز
  const operators = ["+", "-", "*", "/", "."];
  const lastChar = result.value.slice(-1);

  if (operators.includes(text) && operators.includes(lastChar)) {
    // اگر کاربر نقطه زد و آخر هم نقطه است، نذار دوباره اضافه بشه
    if (text === "." && lastChar === ".") return;
    // به جای اضافه کردن، عملگر قبلی را جایگزین کن
    result.value = result.value.slice(0, -1) + text;
    return;
  }

  // در حالت عادی، اضافه کن
  result.value += text;
}

// محاسبه با بررسی اولیه ورودی
function calculate() {
  const expr = result.value;
  if (!expr) return;

  // فقط اجازه اعداد، عملگرها، پرانتز، فاصله و نقطه
  if (!/^[0-9+\-*/().\s]+$/.test(expr)) {
    result.value = "خطا ❌";
    return;
  }

  try {
    // روش امن‌تر نسبت به eval: Function ولی بعد از فیلتر کردن کاراکترها
    const value = Function('"use strict"; return (' + expr + ')')();

    // چک روی بی‌نهایت یا NaN
    if (typeof value === "number" && !Number.isFinite(value)) {
      result.value = "خطا ❌";
      return;
    }

    // گرد کردن برای حذف خطاهای شناور (مثلاً 0.1+0.2)
    if (typeof value === "number" && Math.abs(value - Math.round(value)) > 1e-10) {
      result.value = parseFloat(value.toFixed(10));
    } else {
      result.value = String(value);
    }
  } catch (e) {
    result.value = "خطا ❌";
  }
}

// وصل کردن دکمه‌ها
buttons.forEach(btn => {
  btn.addEventListener("click", () => handleButton(btn.textContent));
});

// پشتیبانی از صفحه‌کلید
document.addEventListener("keydown", (e) => {
  // اگر کاربر از صفحه‌کلید فارسی استفاده می‌کند، ممکن است علامت ',' بیاید؛ آن را به '.' تبدیل کن
  let key = e.key === ',' ? '.' : e.key;

  // اعداد و عملگرها
  if ((key >= '0' && key <= '9') || ['+', '-', '*', '/', '.', '(', ')'].includes(key)) {
    e.preventDefault();
    handleButton(key);
    return;
  }

  if (key === 'Enter') {
    e.preventDefault();
    calculate();
    return;
  }

  if (key === 'Backspace') {
    e.preventDefault();
    result.value = result.value.slice(0, -1);
    return;
  }

  if (key === 'Escape') {
    e.preventDefault();
    result.value = '';
    return;
  }
});



//نسخه ساده تر
// let result = document.getElementById("result");
// let buttons = document.querySelectorAll(".btn");

// buttons.forEach(btn => {
//   btn.addEventListener("click", () => {
//     if (btn.textContent === "C") {
//       result.value = "";
//     } else if (btn.textContent === "=") {
//       try {
//         result.value = eval(result.value);
//       } catch {
//         result.value = "خطا ❌";
//       }
//     } else if (btn.textContent === "←") {
//       result.value = result.value.slice(0, -1);
//     } else {
//       result.value += btn.textContent;
//     }
//   });
// });