/**
 * Beneficial Backyards — minimal site JS (mobile nav only)
 */
(function () {
  "use strict";

  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");

  if (!toggle || !nav) return;

  function setOpen(open) {
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }

  toggle.addEventListener("click", function () {
    var open = toggle.getAttribute("aria-expanded") !== "true";
    setOpen(open);
  });

  // Close on Escape
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
      setOpen(false);
      toggle.focus();
    }
  });

  // Close when a nav link is activated (useful on mobile)
  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      setOpen(false);
    });
  });

  // Close if viewport grows past mobile breakpoint
  var mq = window.matchMedia("(min-width: 48rem)");
  function onBreakpoint(e) {
    if (e.matches) setOpen(false);
  }
  if (mq.addEventListener) {
    mq.addEventListener("change", onBreakpoint);
  } else if (mq.addListener) {
    mq.addListener(onBreakpoint);
  }
})();
