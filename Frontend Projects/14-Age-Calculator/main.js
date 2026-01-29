const DateTime = luxon.DateTime;

let birthDate;
const picker = datepicker("#js-date-picker", {
  formatter: (input, date, instance) => {
    birthDate = DateTime.fromJSDate(date);
    input.value = birthDate.toLocaleString(); // => '1/1/2099'
  },
});

const calculateBtn = document.getElementById("btn-calculate-age");
const resultText = document.getElementById("js-age-result");

calculateBtn.addEventListener("click", () => {
  if (!birthDate) {
    resultText.textContent = `Input Your Birth Date First!`;
    return;
  }
  const now = DateTime.now();
  if (birthDate > now) {
    resultText.textContent = `Birth Date cant be bigger than today's date`;
    return;
  }
  const diff = now.diff(birthDate, ["years", "months"]);

  const months = Math.floor(diff.months);
  const years = Math.floor(diff.years);

  resultText.textContent = `You are ${years} years ${months} months old`;
});
