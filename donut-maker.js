const donutCntDisplay = document.querySelector('#donutCountDisplay');

class DonutMaker{

    

    constructor(donutCount, autoClickCount, multiplierCount, autoClickPrice, multiplierPrice){
        this.donutCount = donutCount;
        this.autoClickCount = autoClickCount;
        this.multiplierCount = multiplierCount;
        this.autoClickPrice = autoClickPrice;
        this.multiplierPrice = multiplierPrice;
    }

    getDonutCount(){
        return this.donutCount;
    }

    // getAutoCount(){
    //     return this.autoClickCount;
    // }

    // getMultiCount(){
    //     return this.multiplierCount;
    // }

    donutClick(){
        this.donutCount += (1*this.multiplierCount);
    }

    // getAutoPrice(){
    //     return autoClickPrice;

    // }

    // getMultierPrice(){

    //     return multiplierPrice;
    // }

    buyAutoClick(){
        if(this.donutCount >= this.autoClickPrice){
        this.donutCount -= this.autoClickPrice;
        this.autoClickCount += 1;
        this.autoClickPrice += 200;
        }
    }
    
    buyMultiplier(){
        if(this.donutCount >= this.multiplierPrice){
            
            this.donutCount -= this.multiplierPrice;
            this.multiplierCount += 1;
            this.multiplierPrice += (this.multiplierCount*150);
        }
    }


    autoDonut(){
        this.donutCount += 1 * this.autoClickCount 
    }


    autoClickFunction(){
        if(this.autoClickCount >= 1){
            setInterval(()=>{
                this.autoDonut();
                donutCntDisplay.innerText = this.getDonutCount();
                console.log('auto click count is ' + this.autoClickCount);
                console.log( 'donut count is '+ this.donutCount);
                console.log('multiplier count is '+ this.multiplierCount);
                console.log('auto price is ' + this.autoClickPrice);
                console.log('multi price is ' + this.multiplierPrice);
            }, 1000);
        }
    }
    
}

export default DonutMaker;