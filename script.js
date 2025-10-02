// انتخاب عناصر
const lengthInput = document.getElementById("length");
const generateBtn = document.getElementById("generate");
const passwordInput = document.getElementById("password");
const copyBtn = document.getElementById("copy");

// مجموعه کاراکترها
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+~<>?";

// تابع تولید رمز
function generatePassword(length) {
  const allChars = lowercase + uppercase + numbers + symbols;
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }

  return password;
}

// وقتی دکمه تولید زده میشه
generateBtn.addEventListener("click", () => {
  const length = lengthInput.value;
  const newPassword = generatePassword(length);
  passwordInput.value = newPassword;
});

// دکمه کپی
copyBtn.addEventListener("click", () => {
  passwordInput.select();
  document.execCommand("copy");
  alert("رمز کپی شد! ✅");
});