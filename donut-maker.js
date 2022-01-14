class DonutMaker{

    constructor(donutCount, autoClickCount, multiplierCount, totalDonutsMade){
        this.donutCount = donutCount;
        this.autoClickCount = autoClickCount;
        this.multiplierCount = multiplierCount;
        this.totalDonutsMade = totalDonutsMade;
    }

    getDonutCount(){
        return this.donutCount;
    }

    getAutoCount(){
        return this.autoClickCount;
    }

    getMultiCount(){
        return this.multiplierCount;
    }

    donutClick(){
        this.donutCount += (1*this.multiplierCount);
        this.totalDonutsMade += 1;
        this.autoClickFunction
    }

    calculateAutoPrice(){
        if(this.autoClickCount >= 1){
        let autoClickPrice = this.getAutoCount() * 10;
        return autoClickPrice;
        }
    }

    calculateMultierPrice(){
        let multiplierPrice = 150;
        multiplierPrice = this.multiplierCount * 150;
        return multiplierPrice;
    }

    buyAutoClick(){
        if(this.getDonutCount() >= this.calculateAutoPrice()){
            
            this.donutCount - this.calculateAutoPrice;
            this.autoClickCount += 1;
        }
        // else {
        //     alert('You have not made enough donuts yet!');
        // }
        return this.donutCount;
    }

    buyMultiplier(){
        if(this.donutCount >= this.multiplierPrice){
            
            this.donutCount - this.multiplierPrice;
            this.multiplierCount += 1;
            this.multiplierPrice += 250;
        }
        else {
            alert('You have not made enough donuts yet!');
        }
    }

    autoClickFunction(){
        if(this.autoClickCount >= 2){
            setInterval(autoDonut, 1000);
            
            autoDonut();{
                this.donutCount += (1*this.autoClickCount);
            }
        }
    }
    
}

export default DonutMaker;