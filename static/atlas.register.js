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
alert("i fixed my site finally roman easton should be locked out for good")
alert("solocentral sucks")
alert("this is 100% iready")


