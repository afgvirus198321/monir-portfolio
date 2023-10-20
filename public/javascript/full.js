//1- home section js

let div1 = document.getElementById("div1");
let div2 = document.getElementById("div2");
let div3 = document.getElementById("div3");
let div4 = document.getElementById("div4");
let fulldiv = document.getElementsByClassName("div");
let middlediv = document.getElementById("middlediv");
let completepic = document.getElementById("completepic");
let logo = document.getElementById("logo");
if (window.outerWidth > 1200) {
  div1.addEventListener("mouseenter", () => {
    div1.style.cssText =
      "height: 46.2vh; width: 70.2%; background-color: rgb(247, 247, 125);";
    div2.style.cssText = "height: 60vh; width: 30%;";
    div3.style.cssText = "height: 40.2vh; width: 50%;";
    div4.style.cssText = " height: 26.3vh; width: 50.2%;";
    middlediv.style.cssText =
      "height: 14.1vh;width: 20.4%;top: 45.9vh;left: 49.8%;";
  });

  div2.addEventListener("mouseenter", () => {
    div2.style.cssText =
      "height: 50vh; width: 60%; background-color: rgb(247, 247, 125);";
    div1.style.cssText = "height: 36.3vh;  width: 40.2%;";
    div3.style.cssText = "height: 50vh; width: 20%;";
    div4.style.cssText = "height: 36.3vh; width: 80.2%";
    middlediv.style.cssText =
      "height: 14vh;width: 20.3%;top: 36vh;left: 19.8%;";
  });

  div3.addEventListener("mouseenter", () => {
    div3.style.cssText =
      "height: 50vh; width: 60%; background-color: rgb(247, 247, 125);";
    div4.style.cssText = "height: 36.3vh; width: 40.2%;";
    div2.style.cssText = "height: 50vh; width: 20%;";
    div1.style.cssText = " height: 36.3vh; width: 80.2%;";
    middlediv.style.cssText =
      "height: 14vh; width: 20.3%; top: 36vh; left: 59.8%;";
  });
  div4.addEventListener("mouseenter", () => {
    div4.style.cssText =
      "height: 46.2vh; width: 70.2%; background-color: rgb(247, 247, 125);";
    div3.style.cssText = "height: 60vh; width: 30%;";
    div2.style.cssText = "height: 40.2vh; width: 50%;";
    div1.style.cssText = " height: 26.3vh; width: 50.2%;";
    middlediv.style.cssText =
      "height: 14.1vh;width: 20.4%;top: 26.1vh;left: 29.8%;";
  });
  let t1;
  let t2;
  let t3;
  middlediv.addEventListener("mouseenter", () => {
    div4.style.cssText = "height: 60vh; width: 30%;";
    div3.style.cssText = "height: 26.3vh; width: 70.15%;";
    div2.style.cssText = "height: 26.3vh; width: 70.15%;";
    div1.style.cssText = " height: 60vh; width: 30%;";
    middlediv.style.cssText =
      "height: 33.8vh; width: 40.3%; top: 26.1vh; left: 29.85%;";

    t1 = setTimeout(() => {
      logo.style.cssText = "height:31vh; width:auto; transform:rotate(360deg);";
    }, 500);
    t2 = setTimeout(() => {
      logo.style.cssText =
        "height:10vh; width:auto; transform:rotate(-720deg); opacity:0% ;";
      completepic.style.cssText =
        "display:flex;height:10vh; width:auto; opactiy:0%;";
    }, 1500);
    t3 = setTimeout(() => {
      completepic.style.cssText =
        "display:flex;height:31vh; width:auto; transform:rotate(-720deg); opacity:100%;";
    }, 1550);
  });

  for (let i of fulldiv) {
    i.addEventListener("mouseleave", () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      middlediv.style.cssText =
        " height: 13.9vh; width: 20.3%;top: 36.1vh;left: 39.8%;";
      div1.style.cssText = "height: 36.3vh; width: 60.1%;";
      div2.style.cssText = "height: 50vh; width: 40%;";
      div3.style.cssText = "height: 50vh; width: 40%;";
      div4.style.cssText = "height: 36.3vh; width: 60.2%;";
      document.getElementById("logo").style.cssText =
        "height:10vh; width:auto;";
      completepic.style.display = "none";
    });
  }
}
