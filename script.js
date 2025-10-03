const birthdateInput = document.getElementById("birthdate");
const calculateBtn = document.getElementById("calculate");
const resultDiv = document.getElementById("result");

calculateBtn.addEventListener("click", () => {
  const birthdateValue = birthdateInput.value;
  
  if (!birthdateValue) {
    resultDiv.textContent = "لطفاً تاریخ تولدت رو وارد کن 🥺";
    return;
  }

  const today = new Date();
  const birthdate = new Date(birthdateValue);

  let ageYears = today.getFullYear() - birthdate.getFullYear();
  let ageMonths = today.getMonth() - birthdate.getMonth();
  let ageDays = today.getDate() - birthdate.getDate();

  if (ageDays < 0) {
    ageMonths -= 1;
    ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  if (ageMonths < 0) {
    ageYears -= 1;
    ageMonths += 12;
  }

  resultDiv.textContent =` تو ${ageYears} سال و ${ageMonths} ماه و ${ageDays} روزت هست 🥳`;
});