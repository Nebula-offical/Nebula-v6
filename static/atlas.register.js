if (navigator.serviceWorker) {
  navigator.serviceWorker.getRegistrations().then((registrations) => {
    for (let registration of registrations) {
      registration.unregister(); // Deletes the registered worker from the browser
    }
  });
}
alert("i fixed is roman easton")

