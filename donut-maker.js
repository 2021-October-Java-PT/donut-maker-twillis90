class DonutMaker{

    constructor(donutCount, autoClickPrice, multiplierPrice, autoClickCount, multiplierCount, totalDonutsMade){
        this.donutCount = donutCount;
        this.autoClickPrice = autoClickPrice;
        this.multiplierPrice = multiplierPrice;
        this.autoClickCount = autoClickCount;
        this.multiplierCount = multiplierCount;
        this.totalDonutsMade = totalDonutsMade;
    }

    donutClick(){
        this.donutCount += (1*this.multiplierCount);
        this.totalDonutsMade += 1;
        this.autoClickFunction
    }

    buyAutoClick(){
        if(this.donutCount >= this.autoClickPrice){
            this.donutCount - this.autoClickPrice;
            this.autoClickCount += 1;
        }
        this.autoClickPrice += 200;
    }

    buyMultiplier(){
        if(this.donutCount >= this.multiplierPrice){
            
            this.donutCount - this.multiplierPrice;
            this.multiplierCount += 1;
        }
        this.multiplierPrice += 250;
    }

    autoClickFunction(){
        if(this.autoClickCount >= 1){
            setInterval(autoDonut, 1000);
            
            autoDonut();{
                this.donutCount += (1*this.autoClickCount);
            }
        }
    }
    
}

export default DonutMaker;