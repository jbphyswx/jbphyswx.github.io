(function () {
  function initMastheadSearch() {
    var input = document.getElementById("search");
    var results = document.getElementById("results");
    if (!input || !results) return;

    var wrap = input.closest(".masthead-search");
    if (!wrap) return;

    function updateVisibility() {
      if (input.value.length > 0 && results.children.length > 0) {
        wrap.classList.add("is-active");
      } else {
        wrap.classList.remove("is-active");
      }
    }

    input.addEventListener("keyup", function () {
      window.requestAnimationFrame(updateVisibility);
    });

    input.addEventListener("focus", updateVisibility);

    document.addEventListener("click", function (event) {
      if (!wrap.contains(event.target)) {
        wrap.classList.remove("is-active");
      }
    });

    document.addEventListener("keyup", function (event) {
      if (event.key === "Escape") {
        wrap.classList.remove("is-active");
        input.blur();
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initMastheadSearch);
  } else {
    initMastheadSearch();
  }
})();
