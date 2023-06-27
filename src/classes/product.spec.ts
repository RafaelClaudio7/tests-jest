import { Product } from './product';

const createSut = (name: string, price: number) => {
  return new Product(name, price);
};

describe('Product', () => {
  afterEach(() => jest.clearAllMocks());

  it('Should have properties name and price', () => {
    const sut = createSut('chair', 200);

    expect(sut).toHaveProperty('name', 'chair');
    expect(sut).toHaveProperty('price', 200);
  });
});
