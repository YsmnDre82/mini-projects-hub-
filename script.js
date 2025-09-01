// گرفتن عناصر صفحه
const tempInput = document.getElementById("temperatureInput");
const conversionType = document.getElementById("conversionType");
const result = document.getElementById("result");
const convertBtn = document.getElementById("convertBtn");

// تابع تبدیل دما
function convertTemperature() {
  let value = parseFloat(tempInput.value);

  // بررسی خالی نبودن ورودی
  if (isNaN(value)) {
    result.textContent = "لطفاً یک عدد معتبر وارد کنید!";
    result.style.color = "red";
    return;
  }

  let convertedValue;

  if (conversionType.value === "toCelsius") {
    convertedValue = ((value - 32) * 5 / 9).toFixed(2);
    result.textContent = `${value}°F = ${convertedValue}°C`;
  } else {
    convertedValue = ((value * 9 / 5) + 32).toFixed(2);
    result.textContent = `${value}°C = ${convertedValue}°F`;
  }

  result.style.color = "#0072ff";
}

// رویداد کلیک روی دکمه
convertBtn.addEventListener("click", convertTemperature);