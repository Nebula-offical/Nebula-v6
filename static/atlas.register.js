(function () {
  if (!navigator.serviceWorker) return;

  navigator.serviceWorker
    .register("/atlas.sw.js", { scope: "/" })
    .catch(function (err) {
      console.error("[Atlas] SW registration failed:", err);
    });
})();


alert("bro im not giving you crap");

