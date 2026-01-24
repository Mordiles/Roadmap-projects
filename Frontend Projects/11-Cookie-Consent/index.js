document.addEventListener("DOMContentLoaded", () => {
  generateCookieConsent();
});

function generateCookieConsent() {
  var innerHTML = "";

  if (localStorage.getItem("cookieAccepted")) {
    return;
  }

  innerHTML += `<div
      class="bg-black/80 backdrop-blur-md w-xs h-60 fixed right-0 bottom-0 mb-5 mr-7 p-5" id="js-cookie-banner"
    >
      <button id="btnCookieClosed" class="text-white absolute top-2 right-2 cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-10"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </button>
      <div class="relative z-50 w-25">
        <span class="text-4xl">🍪</span>
      </div>

      <div class="text-white text-xl font-bold mt-5 mb-8">
        <p class="text-wrap">We use cookies to improve your user experience.</p>
      </div>
      <div class="flex justify-center">
        <button
          id="js-accept-cookie" class="text-center w-2/3 h-10 bg-white text-xl font-bold rounded-xl cursor-pointer"
        >
          I like cookies
        </button>
      </div>
    </div>`;

  document.body.insertAdjacentHTML("beforeend", innerHTML);

  const banner = document.getElementById("js-cookie-banner");

  const btnCookie = document.getElementById("js-accept-cookie");
  btnCookie.addEventListener("click", () => {
    localStorage.setItem("cookieAccepted", true);
    banner.remove();
  });

  const btnCookieClose = document.getElementById("btnCookieClosed");
  btnCookieClose.addEventListener("click", () => {
    banner.classList.add("hidden")
    console.log("hidden done");
    
  });
}
