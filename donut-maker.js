const donutCntDisplay = document.querySelector('#donutCountDisplay');
const autoCntDisplay = document.querySelector('#autoCountDisplay');
const multiCntDisplay = document.querySelector('#multiCountDisplay');

class DonutMaker{

    

    constructor(donutCount, autoClickCount, multiplierCount, totalDonutsMade){
        this.donutCount = 0;
        this.autoClickCount = 1;
        this.multiplierCount = 1;
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
        if(this.donutCount >= this.calculateAutoPrice()){
            
            this.donutCount -= this.calculateAutoPrice;
            this.autoClickCount += 1;
                if(this.autoClickCount > 0){
                    setInterval(()=>{
                        this.donutCount += 1;
                        // donutCntDisplay.innerHTML =`BlahBlahBlah + ${this.donutCount}`;
                        console.log(this.getDonutCount());
        
                    }, 1000);
                    
               
                }
        
        }
        // else {
        //     alert('You have not made enough donuts yet!');
        // }
        // return this.donutCount;
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


    // autoDonut(){
    //     this.donutCount += (1*this.autoClickCount);
    // }
    // autoClickFunction(){
    //     if(this.autoClickCount >= 2){
    //         setInterval(()=>{
    //             this.donutCount += 1;
    //             donutCntDisplay.innerHTML = this.donutCount;
    //             console.log(this.donutCount);

    //         }, 1000);
            
       
    //     }
    // }
    
}

export default DonutMaker;