/* VYRON SCRIPT */


/* =========================
   THEME
========================= */

const themeBtn =
  document.getElementById("themeBtn");

const saved =
  localStorage.getItem("vyron-theme");

if (saved === "light") {

  document.body.classList.add("light");

  themeBtn.textContent = "☾";

}


themeBtn.addEventListener("click", () => {

  document.body.classList.toggle("light");

  const light =
    document.body.classList.contains("light");

  localStorage.setItem(
    "vyron-theme",
    light ? "light" : "dark"
  );

  themeBtn.textContent =
    light ? "☾" : "☼";

});


/* =========================
   MOBILE MENU
========================= */

const hamburger =
  document.getElementById("hamburger");

const mobileNav =
  document.getElementById("mobileNav");


hamburger.addEventListener("click", () => {

  mobileNav.classList.toggle("open");

});


document
  .querySelectorAll(".mobile-nav a")
  .forEach(link => {

    link.addEventListener("click", () => {

      mobileNav.classList.remove("open");

    });

  });


/* =========================
   NEXT MATCH COUNTDOWN
========================= */

/*
   غير التاريخ هنا لما تحددوا
   موعد الماتش الحقيقي.
*/

const matchDate =
  new Date(
    "2026-10-08T20:00:00"
  ).getTime();


function countdown() {

  const now =
    Date.now();

  let distance =
    matchDate - now;


  if (distance < 0) {

    distance = 0;

  }


  const day =
    Math.floor(
      distance /
      (1000 * 60 * 60 * 24)
    );


  const hour =
    Math.floor(
      (distance %
      (1000 * 60 * 60 * 24)) /
      (1000 * 60 * 60)
    );


  const minute =
    Math.floor(
      (distance %
      (1000 * 60 * 60)) /
      (1000 * 60)
    );


  const second =
    Math.floor(
      (distance %
      (1000 * 60)) /
      1000
    );


  document.getElementById("days")
    .textContent =
    String(day).padStart(2,"0");


  document.getElementById("hours")
    .textContent =
    String(hour).padStart(2,"0");


  document.getElementById("minutes")
    .textContent =
    String(minute).padStart(2,"0");


  document.getElementById("seconds")
    .textContent =
    String(second).padStart(2,"0");

}


countdown();

setInterval(
  countdown,
  1000
);


/* =========================
   DISCORD PLACEHOLDER
========================= */

document
  .getElementById("discord")
  .addEventListener("click", event => {

    event.preventDefault();

    alert(
      "Discord link will be added here 🔥"
    );

  });


/* =========================
   REVEAL ANIMATION
========================= */

const items =
  document.querySelectorAll(
    ".player, .number-card, .media-card, .result, .stat-big, .performance, .social-links a"
  );


const observer =
  new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (!entry.isIntersecting)
          return;

        entry.target.classList.add("show");

        observer.unobserve(
          entry.target
        );

      });

    },
    {
      threshold: .1
    }
  );


items.forEach(item => {

  item.style.opacity = "0";

  item.style.transform =
    "translateY(25px)";

  item.style.transition =
    "opacity .6s ease, transform .6s ease";

  observer.observe(item);

});


const style =
  document.createElement("style");

style.textContent = `

  .show {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }

`;

document.head.appendChild(style);
