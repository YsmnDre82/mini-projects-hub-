// انتخاب عناصر
const timeEl   = document.getElementById("time");
const dateFaEl = document.getElementById("date-fa");
const dateEnEl = document.getElementById("date-en");
const statusEl = document.getElementById("status");
const copyBtn  = document.getElementById("copyBtn");
const themeBtn = document.getElementById("themeBtn");

// فرمت‌کننده‌ها (همه با تایم‌زون تهران)
const tz = "Asia/Tehran";

// ساعت 24ساعته
const timeFmt = new Intl.DateTimeFormat("fa-IR", {
  timeZone: tz, hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false
});

// تاریخ شمسی
const persianFmt = new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
  timeZone: tz,
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
});

// تاریخ میلادی (انگلیسی برای مقایسه/دلخواه)
const gregFmt = new Intl.DateTimeFormat("en-GB", {
  timeZone: tz,
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
});

// آپدیت هر ثانیه
function tick(){
  const now = new Date();

  // رندر ساعت/تاریخ
  timeEl.textContent   = timeFmt.format(now);
  dateFaEl.textContent = persianFmt.format(now); // شمسی
  dateEnEl.textContent = gregFmt.format(now);    // میلادی

  // برچسب وضعیت
  statusEl.textContent = "بروزرسانی زنده هر ثانیه";

  // تغییر نرم پس‌زمینه بر اساس ساعت شب/روز
  const hour = Number(new Intl.DateTimeFormat("en-US", { timeZone: tz, hour: "2-digit", hour12: false }).format(now));
  const root = document.documentElement;
  if(hour >= 6 && hour < 18){
    // روز
    root.style.setProperty("--bg1", "#e9f3ff");
    root.style.setProperty("--bg2", "#cfe5ff");
  }else{
    // شب
    root.style.setProperty("--bg1", "#0f1024");
    root.style.setProperty("--bg2", "#1b1f3b");
  }
}

// کپی اطلاعات
function copyInfo(){
  const text = `🕒 ${timeEl.textContent} | 🗓️ ${dateFaEl.textContent} (Tehran)`;
  navigator.clipboard?.writeText(text).then(()=>{
    copyBtn.textContent = "کپی شد ✔";
    setTimeout(()=> copyBtn.textContent = "کپی تاریخ/ساعت", 1200);
  }).catch(()=>{
    alert("کپی در این مرورگر مجاز نیست.");
  });
}

// تغییر تم روشن/تاریک
function toggleTheme(){
  document.body.classList.toggle("light");
  themeBtn.textContent = document.body.classList.contains("light") ? "تم تیره" : "تغییر تم";
}

// شروع
tick();
setInterval(tick, 1000);

// رویدادها
copyBtn.addEventListener("click", copyInfo);
themeBtn.addEventListener("click", toggleTheme);