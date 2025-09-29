 async function loadDonations() {
const response = await fetch('donations.json'); // make sure donations.json is in your site
const donations = await response.json();

donations.sort((a, b) => b.amount - a.amount);

const top3List = document.getElementById("top-3");
const othersList = document.getElementById("others");

donations.forEach((d, i) => {
    const li = document.createElement("li");
    li.textContent = `${i+1}. ${d.player} - $${d.amount}`;
    if (i < 3) {
       top3List.appendChild(li);
    } else {
      othersList.appendChild(li);
    }
});
}
loadDonations();