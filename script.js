// ابزارک‌های صفحه
let btn = document.getElementById("changeColorBtn");
let colorCode = document.getElementById("colorCode");
let colorDot  = document.getElementById("colorDot");
let copyBtn   = document.getElementById("copyBtn");
let gradientToggle = document.getElementById("gradientToggle");

// تولید رنگ تصادفی Hex
function randomHex(){
  let n = Math.floor(Math.random() * 0xFFFFFF);
  let hex = "#" + n.toString(16).padStart(6, "0").toUpperCase();
  return hex;
}

// اعمال رنگ یا گرادیان
function applyColor(){
  if(gradientToggle.checked){
    // گرادیان دو رنگ
    let c1 = randomHex();
    let c2 = randomHex();
    document.body.style.background = `linear-gradient(135deg, ${c1}, ${c2})`;
    colorCode.textContent = `${c1} → ${c2}`;
    colorDot.style.background = c1;
  }else{
    let c = randomHex();
    document.body.style.background = c;
    colorCode.textContent = c;
    colorDot.style.background = c;
  }
}

// کپی رنگ/گرادیان
function copyColor(){
  let text = colorCode.textContent.trim();
  navigator.clipboard?.writeText(text).then(()=>{
    copyBtn.textContent = "کپی شد ✔";
    setTimeout(()=> copyBtn.textContent = "کپی", 1200);
  }).catch(()=>{
    alert("کپی در کلیپ‌بورد پشتیبانی نمی‌شود.");
  });
}

// رویدادها
btn.addEventListener("click", applyColor);
copyBtn.addEventListener("click", copyColor);

// مقدار اولیه دلبرانه
applyColor();