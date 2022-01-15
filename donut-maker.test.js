import DonutMaker from './donut-maker';

describe('DonutMaker', () => {
    
  test('should be no change to purchase autoClick when not enough donuts', () => {
    const underTest = new DonutMaker(9, 0, 0, 0);
    underTest.buyAutoClick();
    expect(underTest.donutCount).toEqual(9);
    expect(underTest.autoClickCount).toEqual(0);
  });

  test('does it cost 10 donuts for initial autoClicker purchase', () => {
    const underTest = new DonutMaker(10, 0, 1, 10, 150);
    underTest.buyAutoClick();
    expect(underTest.donutCount).toEqual(0);
    expect(underTest.autoClickCount).toEqual(1);
  });

  test('auto click should add 1 donut per auto click count', () =>{
    const underTest = new DonutMaker(1, 1, 1, 100, 150);
    underTest.autoClickFunction();
    expect(underTest.donutCount).toEqual(2);
  })
});