import { Messaging } from './messaging';

describe('Messaging', () => {
  afterEach(() => jest.clearAllMocks());

  it('Should return undefined', () => {
    // System under test
    const sut = new Messaging();
    expect(sut.sendMessage('Mensagem')).toBeUndefined();
  });

  it('Should call console.log once', () => {
    const sut = new Messaging();
    const consoleSpy = jest.spyOn(console, 'log');

    sut.sendMessage('Mensagem');

    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it('Should call console.log with Mensagem enviada: and msg', () => {
    const sut = new Messaging();
    const consoleSpy = jest.spyOn(console, 'log');

    sut.sendMessage('Teste');

    expect(consoleSpy).toHaveBeenCalledWith('Mensagem: ', 'Teste');
  });
});
