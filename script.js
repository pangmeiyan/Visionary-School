// nav menu toggle
/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) =>{
  const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

  toggle.addEventListener('click', () =>{
      // Add show-menu class to nav menu
      nav.classList.toggle('show-menu')

      // Add show-icon to show and hide the menu icon
      toggle.classList.toggle('show-icon')
  })
}
showMenu('nav-toggle','nav-menu')

/*============== faqs ==============*/
let toggles = document.getElementsByClassName('toggle');
let contentDiv = document.getElementsByClassName('content');
let icons = document.getElementsByClassName('icon');

for (let i = 0; i < toggles.length; i++) {
  toggles[i].addEventListener('click', () => {
    let isOpen = contentDiv[i].style.height === contentDiv[i].scrollHeight + "px";
    // Toggle the clicked FAQ
    if (!isOpen) {
      contentDiv[i].style.height = contentDiv[i].scrollHeight + "px";
      toggles[i].style.color = "#7a69d9";
      icons[i].classList.replace('fa-angle-down', 'fa-angle-up');
    } else {
      contentDiv[i].style.height = "0px";
      toggles[i].style.color = "#000000";
      icons[i].classList.replace('fa-angle-up', 'fa-angle-down');
    }
    // Close other FAQs
    for (let j = 0; j < contentDiv.length; j++) {
      if (j !== i) {
        contentDiv[j].style.height = "0px";
        toggles[j].style.color = "#000000";
        icons[j].classList.replace('fa-angle-up', 'fa-angle-down');
      }
    }
  });
}
// Set FAQ pertama agar terbuka saat halaman dimuat
contentDiv[0].style.height = contentDiv[0].scrollHeight + "px";
toggles[0].style.color = "#7a69d9";
icons[0].classList.replace('fa-angle-down', 'fa-angle-up');
function adjustAboutHeight() {
  let faqs = document.querySelector('.faqs'); 
  let aboutSection = document.querySelector('.abt'); 
  let faqsHeight = faqs.scrollHeight; // Menghitung tinggi asli termasuk konten tersembunyi
  let activeFaqs = faqs.querySelectorAll('.faq-item.active'); // Ambil semua FAQ yang terbuka

  // Jika tidak ada yang terbuka, gunakan tinggi minimum
  if (activeFaqs.length === 0) {
    aboutSection.style.height = (faqsHeight * 0.7) + "px"; // 50% dari tinggi default
  } else {
    aboutSection.style.height = (faqsHeight * 0.8) + "px"; // 80% jika ada yang terbuka
  }
}

// Jalankan saat halaman load dan resize
window.onload = adjustAboutHeight;
window.onresize = adjustAboutHeight;

// Tambahkan event listener jika FAQ diklik
document.querySelectorAll('.faq-item').forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('active'); // Tandai apakah terbuka
    adjustAboutHeight();
  });
});

// filter
