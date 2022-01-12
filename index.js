
const container = (document.querySelector('.container').innerText =
  'mmmmmmmmm doughnuts.... ahhhhhhh!');


  functionMakeADonut(){

    var donutCount = 0;
    var totalDonutsMade = 0;
    var autoClickPrice = 100;
    var multiplierPrice = 200;
    var autoClickCount = 0;
    var multiplierCount = 0;
    const donutBtn = document.querySelector('#makeDonut');
    const autoBtn = document.querySelector('#autoClicker');
    const multiBtn = document.querySelector('#multiplier');
    const infoDisplay = document.createElement('section');
    const donutInfo = document.createElement('section');
    const autoBtnInfo = document.createElement('section');
    const multiBtnInfo = document.createElement('section');
    const showDonutCount = document.createElement('p');
    const costTillAuto = document.createElement('p');
    const costTillMulti = document.createElement('p');



    donutBtn.addEventListener('click', () => {
    console.log('donut button firing');

    donutCount += 1;

    if(donutCount >= autoClickPrice){
    autoBtn.addEventListener('click', () => {
      console.log('auto button firing');

      donutCount -= autoClickPrice;
      autoClickPrice += 150;
      autoClickCount ++;
    }
  });

    if(donutCount >= multiplierPrice){
    multiBtn.addEventListener('click', () => {
        console.log('multiplier button firing');

        donutCount -= multiplierPrice;
        multiplierPrice += 200;
        multiplierCount ++;
    }
  });

    costTillAuto.innerText = 'You need ' + (autoClickPrice - donutCount) + ' more donuts to purchase an Auto Clicker';
    costTillMulti.innerText = 'You need ' + (multiplierPrice - donutCount) + ' more donuts to purchase an Auto Clicker';
    showDonutCount.innerText = donutCount;

    donutInfo.appendChild(donutCount);
    donutInfo.appendChild(totalDonutsMade);
    donutInfo.appendChild(showDonutCount);

    autoBtnInfo.appendChild(autoClickPrice);
    autoBtnInfo.appendChild(costTillAuto);
    autoBtnInfo.appendChild(autoClickCount);

    multiBtnInfo.appendChild(multiplierPrice);
    multiBtnInfo.appendChild(costTillMulti);
    multiBtnInfo.appendChild(multiplierCount);

    // infoDisplay.appendChild(donutInfo);
    infoDisplay.appendChild(donutCount);
    infoDisplay.appendChild(totalDonutsMade);
    infoDisplay.appendChild(showDonutCount);
    infoDisplay.appendChild(costTillAuto)
    infoDisplay.appendChild(costTillMulti);
  
});

}