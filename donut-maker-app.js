import DonutMaker from "./donut-maker";

const donutGameDiv = document.querySelector("#donutGame");
const autoStatusDiv = document.querySelector("#autoStatus");
const multiStatusDiv = document.querySelector("#multiStatus");
const countBoxDiv = document.querySelector("#donutCountBox");
const autoBoxDiv = document.querySelector("#autoCountBox");
const multiBoxDiv = document.querySelector("#multiCountBox");

renderPage();

function renderPage() {
  makeDonuts();
  
}

function makeDonuts() {
  const donutBtn = document.querySelector("#makeDonut");
  const autoBtn = document.querySelector("#autoClicker");
  const multiBtn = document.querySelector("#multiplier");
  const resetBtn = document.querySelector("#reset");
  const donutCntDisplay = document.querySelector("#donutCountDisplay");
  const autoCntDisplay = document.querySelector("#autoCountDisplay");
  const multiCntDisplay = document.querySelector("#multiCountDisplay");
  const autoCostDisplay = document.querySelector("#autoCost");
  const multiCostDisplay = document.querySelector("#multiCost");

  const donutMaker = new DonutMaker(0, 0, 1, 100, 50);

  donutBtn.addEventListener("click", () => {
    const donutInfo = document.createElement("section");
    const autoInfo = document.createElement("section");
    const multiInfo = document.createElement("section");
    const multiplierCountPara = document.createElement("p");
    const autoCountPara = document.createElement("p");
    autoCountPara.innerText =
      "You have " + donutMaker.autoClickCount + " active Auto Clickers";
    multiplierCountPara.innerText =
      "You have " + donutMaker.multiplierCount + " active Multipliers";
    const costTillAuto = document.createElement("p");
    costTillAuto.innerText =
      donutMaker.autoClickPrice -
      donutMaker.donutCount +
      " More donuts to buy an Automatic Donut Maker!";
    const costTillMulti = document.createElement("p");
    costTillMulti.innerText =
      donutMaker.multiplierPrice -
      donutMaker.donutCount +
      " More donuts to buy a Multiplier";
    const donutDisplay = document.createElement("p");
    donutDisplay.innerText =
      "You have created " +
      donutMaker.totalDonutsMade +
      " Donuts " +
      " You currently have " +
      donutMaker.donutCount +
      " Donuts";

    donutInfo.appendChild(donutDisplay);
    donutInfo.appendChild(autoInfo);
    donutInfo.appendChild(multiInfo);

    donutMaker.donutClick();
    donutCntDisplay.innerText = donutMaker.donutCount;
    autoCntDisplay.innerText = donutMaker.autoClickCount;
    multiCntDisplay.innerText = donutMaker.multiplierCount;

    
    // multiCostDisplay.innerText = donutMaker.multiplierPrice;
  });

  autoBtn.addEventListener("click", () => {
    donutMaker.buyAutoClick();
    donutMaker.autoClickFunction();

    donutCntDisplay.innerText = donutMaker.donutCount;
    autoCntDisplay.innerText = donutMaker.autoClickCount;
    multiCntDisplay.innerText = donutMaker.multiplierCount;
    autoCostDisplay.innerText = donutMaker.autoClickPrice;
  });

  multiBtn.addEventListener("click", () => {
    donutMaker.buyMultiplier();

    donutCntDisplay.innerText = donutMaker.donutCount;
    autoCntDisplay.innerText = donutMaker.autoClickCount;
    multiCntDisplay.innerText = donutMaker.multiplierCount;
    multiCostDisplay.innerText = donutMaker.multiplierPrice;
  });

  resetBtn.addEventListener("click", () => {
    location.reload();
  });
}
