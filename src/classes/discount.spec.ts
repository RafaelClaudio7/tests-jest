import {
  Discount,
  FiftyPercentDiscount,
  NoDiscount,
  TenPercentDiscount,
} from './discount';

const createSut = (className: new () => Discount): Discount => {
  return new className();
};

describe('Discount', () => {
  afterEach(() => jest.clearAllMocks());

  it('Should have no discount', () => {
    const sut = createSut(NoDiscount);
    expect(sut.calculate(10.99)).toBeCloseTo(10.99);
  });

  it('Should have fifty percent discount', () => {
    const sut = createSut(FiftyPercentDiscount);
    expect(sut.calculate(150.5)).toBeCloseTo(150.5 / 2);
  });

  it('Should have ten percent discount', () => {
    const sut = createSut(TenPercentDiscount);

    expect(sut.calculate(150.8)).toBe(150.8 - 150.8 * 0.1);
  });
});
