import { Persistency } from './persistency';

describe('Persistency', () => {
  afterEach(() => jest.clearAllMocks());

  it('Should return undefined', () => {
    // System under test
    const sut = new Persistency();
    expect(sut.saveOrder()).toBeUndefined();
  });

  it('Should call console.log once', () => {
    const sut = new Persistency();
    const consoleSpy = jest.spyOn(console, 'log');

    sut.saveOrder();

    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it('Should call console.log with Seu pedido foi salvo', () => {
    const sut = new Persistency();
    const consoleSpy = jest.spyOn(console, 'log');

    sut.saveOrder();

    expect(consoleSpy).toHaveBeenCalledWith('Seu pedido foi salvo');
  });
});
