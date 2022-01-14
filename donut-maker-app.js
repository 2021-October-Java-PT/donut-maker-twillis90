import DonutMaker from './donut-maker'

const donutGameDiv = document.querySelector('#donutGame');
const autoStatusDiv = document.querySelector('#autoStatus');
const multiStatusDiv = document.querySelector('#multiStatus');
const countBoxDiv = document.querySelector('#donutCountBox');
const autoBoxDiv = document.querySelector('#autoCountBox');
const multiBoxDiv = document.querySelector('#multiCountBox');

renderPage();
console.log('render good');


function renderPage(){
  makeDonuts();
}

function makeDonuts(){
  console.log('donuts gettin made');
  const donutBtn = document.querySelector('#makeDonut');
  const autoBtn = document.querySelector('#autoClicker');
  const multiBtn = document.querySelector('#multiplier');

  const donutMaker = new DonutMaker(1, 1, 1, 1);
  console.log('constructor check in')

  

  donutBtn.addEventListener('click', ()=>{
    let autoClickPrice = donutMaker.calculateAutoPrice();
    let multiplierPrice = donutMaker.calculateMultierPrice();
    const donutInfo = document.createElement('section');
    const autoInfo = document.createElement('section');
    const multiInfo = document.createElement('section');
    const multiplierCountPara = document.createElement('p');
    const autoCountPara = document.createElement('p');
    autoCountPara.innerText = 'You have ' + donutMaker.autoClickCount + ' active Auto Clickers';
    multiplierCountPara.innerText = 'You have ' +  donutMaker.multiplierCount + ' active Multipliers'
    const costTillAuto = document.createElement('p');
    costTillAuto.innerText = (autoClickPrice - donutMaker.donutCount) + ' More donuts to buy an Automatic Donut Maker!'
    const costTillMulti = document.createElement('p');
    costTillMulti.innerText = (multiplierPrice - donutMaker.donutCount) + ' More donuts to buy a Multiplier'
    const donutDisplay = document.createElement('p');
    donutDisplay.innerText = 'You have created ' + donutMaker.totalDonutsMade + ' Donuts ' + ' You currently have ' + donutMaker.donutCount + ' Donuts'; 
    

    donutInfo.appendChild(donutDisplay);
    donutInfo.appendChild(autoInfo);
    donutInfo.appendChild(multiInfo);
    
    donutGameDiv.appendChild(donutInfo);

    donutMaker.donutClick();
    
    autoBtn.addEventListener('click', () =>{
      
      
      donutMaker.buyAutoClick();
      donutMaker.autoClickFunction();

      // autoInfo.appendChild(costTillAuto);
      // autoInfo.appendChild(autoCountPara);
      // autoBtn.appendChild(costTillAuto);
      // autoStatusDiv.appendChild(autoInfo);
      
      // autoBoxDiv.appendChild(autoCountPara);
    });
    
    console.log('auto click count is ' + donutMaker.autoClickCount);
    console.log( 'donut count is '+ donutMaker.donutCount);
    console.log('multiplier count is '+ donutMaker.multiplierCount);
    console.log('auto price is ' + autoClickPrice);
    console.log('multi price is ' + multiplierPrice);
    console.log('total donuts made: ' + donutMaker.totalDonutsMade)
    
    multiBtn.addEventListener('click', () =>{
      
      donutMaker.buyMultiplier();
    });
    
  
  });
}