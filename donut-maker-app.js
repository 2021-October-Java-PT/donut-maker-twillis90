import DonutMaker from './donut-maker'

const donutGameDiv = document.querySelector('#donutGame');

renderPage();
console.log('render good');


function renderPage(){
  makeDonuts();
}

function makeDonuts(){
  console.log('donuts gettin made');
  const donutBtn = document.querySelector('#makeDonut');
  // const autoBtn = document.querySelector('#autoClicker');
  // const multiBtn = document.querySelector('#multiplier');

  const donutMaker = new DonutMaker(0, 100, 200, 0, 1, 0);
  console.log('constructor check in')

  donutBtn.addEventListener('click', ()=>{
    const donutInfo = document.createElement('section');
    const autoInfo = document.createElement('section');
    const multiInfo = document.createElement('section');
    const costTillAuto = document.createElement('p');
    costTillAuto.innerText = (donutMaker.autoClickPrice - donutMaker.donutCount) + ' More donuts to buy an Automatic Donut Maker!'
    const costTillMulti = document.createElement('p');
    costTillAuto.innerText = (donutMaker.multiplierPrice - donutMaker.donutCount) + 'More donuts to buy a Multiplier'
    const donutDisplay = document.createElement('p');
    donutDisplay.innerText = 'You have created ' + donutMaker.totalDonutsMade + ' Donuts ' + ' You currently have ' + donutMaker.donutCount;

    donutInfo.appendChild(donutDisplay);
    donutInfo.appendChild(autoInfo);
    donutInfo.appendChild(multiInfo);
    donutInfo.appendChild(costTillAuto);
    donutInfo.appendChild(costTillMulti);
    
    donutGameDiv.appendChild(donutInfo);

    donutMaker.donutClick;
    console.log('made a donut');
  })
}