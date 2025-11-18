
const form = document.getElementById("webform");
const summaryBox = document.querySelector("#form-summary article");


form.addEventListener("submit", function (e) {
  e.preventDefault(); 


  const postnummer = document.getElementById("postnummer").value;
  const gadenavn = document.getElementById("gadenavn").value;
  const dato = document.getElementById("dato").value;
  const tid = document.getElementById("tid").value;
  const oevrig = document.getElementById("oevrig-info").value;


  const summaryHTML = `
    <p><strong>Postnummer:</strong> ${postnummer}</p>
    <p><strong>Gadenavn:</strong> ${gadenavn}</p>
    <p><strong>Dato:</strong> ${dato}</p>
    <p><strong>Tidspunkt:</strong> ${tid}</p>
    <p><strong>Øvrig info:</strong> ${oevrig || "Ingen info"}</p>
  `;


  summaryBox.innerHTML = summaryHTML;
});