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
alert("i fixed it cus roman easton decided to hack my site for no reason and than started asking for donos cus hes poor")



