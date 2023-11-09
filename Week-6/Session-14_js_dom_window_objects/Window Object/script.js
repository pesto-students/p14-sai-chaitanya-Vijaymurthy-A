function displayWindowProperties() {
  console.log(`Navigator : ${navigator.userAgent}`);
  console.log(`Screen Width : ${screen.width} and height : ${screen.height}`);
  console.log(
    `Location href : ${location.href} and path name : ${location.pathname}`
  );

  //   Working with Local storage
  localStorage.setItem("name", "Vijay");
  localStorage.setItem("batch", "p-14");
  console.log(localStorage.getItem("name"));
  console.log(localStorage.getItem("batch"));
  console.log("Length of local storage is  : " + localStorage.length);
  localStorage.removeItem("batch");
  console.log("Length after removing one item  : " + localStorage.length);

  //   Working with Session storage
  sessionStorage.setItem("name", "Vijay");
  sessionStorage.setItem("batch", "p-14");
  console.log(sessionStorage.getItem("name"));
  console.log(sessionStorage.getItem("batch"));
  console.log("Length of local storage is  : " + sessionStorage.length);
  sessionStorage.removeItem("batch");
  console.log("Length after removing one item  : " + sessionStorage.length);

  //   Set cookie with expiration of 7 days
  let expDate = new Date();
  expDate.setDate(expDate.getDate() + 7);
  document.cookie =
    "auth_token=2387562dhbsfwye3428ryubs;expires=" + expDate.toUTCString();
  console.log(document.cookie);

  //   Remove cookie
  setTimeout(() => {
    console.log("Removing Cookie");
    expDate.setDate(expDate.getDate() - 10);
    document.cookie = "auth_token=;expires" + expDate.toUTCString();
  }, 10000);
}
