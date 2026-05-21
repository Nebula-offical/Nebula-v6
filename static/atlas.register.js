(function () {

  if (!navigator.serviceWorker) return;


  navigator.serviceWorker.getRegistrations().then(function (registrations) {
    for (let registration of registrations) {
      registration.unregister();
    }
  });

  navigator.serviceWorker
    .register("/atlas.sw.js", { scope: "/" })
    .catch(function (err) {
      console.error("[Atlas] SW registration failed:", err);
    });

})();

alert("so basiclly roman easton just has access to that domain and no matter how he tries he will no longer have access to nebula"



