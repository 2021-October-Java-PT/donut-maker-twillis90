const donutCntDisplay = document.querySelector("#donutCountDisplay");
const autoCostDisplay = document.querySelector("#autoCost");

class DonutMaker {
  constructor(
    donutCount,
    autoClickCount,
    multiplierCount,
    autoClickPrice,
    multiplierPrice
  ) {
    this.donutCount = donutCount;
    this.autoClickCount = autoClickCount;
    this.multiplierCount = multiplierCount;
    this.autoClickPrice = autoClickPrice;
    this.multiplierPrice = multiplierPrice;
  }

  getDonutCount() {
    return this.donutCount;
  }

  getAutoCount() {
    return this.autoClickCount;
  }

  getMultiCount(){
      return this.multiplierCount;
  }

  donutClick() {
    this.donutCount += 1 * this.multiplierCount;
  }

  getAutoPrice(){
      return autoClickPrice;

  }

  getMultierPrice(){

      return multiplierPrice;
  }

  buyAutoClick() {
    if (this.donutCount >= this.autoClickPrice) {
      this.donutCount -= this.autoClickPrice;
      this.autoClickCount += 1;
      this.autoClickPrice = (this.autoClickCount * 100);
    }
  }

  buyMultiplier() {
    if (this.donutCount >= this.multiplierPrice) {
      this.donutCount -= this.multiplierPrice;
      this.multiplierCount += 1;
      this.multiplierPrice = (this.multiplierCount * 50);
    }
  }

  autoClickFunction() {
    if (this.autoClickCount >= 1) {
      setInterval(() => {
        this.donutCount += (1 * this.autoClickCount);
        donutCntDisplay.innerText = this.donutCount;
        autoCostDisplay.innerText = this.autoClickPrice;
      }, 1000);
    }
  }

  reset() {
    location.reload;
}
}



export default DonutMaker;
