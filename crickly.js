function login() {
    window.location.href = "login/login.html";
  }

  function slide() {
    const arr = [
      "criclytics.PNG",
      "match prediction.PNG",
      "com_stats.PNG",
    ];
    let image = document.getElementById("slideimage");
    let i = 1;
    setInterval(function () {
      image.setAttribute("src", arr[i]);
      i++;
      if (i == 3) {
        i = 0;
      }
    }, 2000);
  }
  slide();