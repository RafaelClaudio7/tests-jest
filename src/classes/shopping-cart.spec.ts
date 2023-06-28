import { Discount } from './discount';
import { CartItem } from './interfaces/cart-item';
import { ShoppingCart } from './shopping-cart';

const createSut = () => {
  const discountMock = createDiscountMock();
  const sut = new ShoppingCart(discountMock);
  return { sut, discountMock };
};

const createDiscountMock = () => {
  class DiscountMock extends Discount {}
  return new DiscountMock();
};

const createCartItem = (name: string, price: number) => {
  class CartItemMock implements CartItem {
    constructor(public name: string, public price: number) {}
  }

  return new CartItemMock(name, price);
};

describe('Shopping Cart', () => {
  it('Should be an empty cart when no product is added', () => {
    const { sut } = createSut();
    expect(sut.isEmpty()).toBe(true);
  });

  it('Should have two cart items', () => {
    const { sut } = createSut();
    const CartItem1 = createCartItem('Shirt', 20);
    const CartItem2 = createCartItem('Bag', 100);
    sut.addItem(CartItem1);
    sut.addItem(CartItem2);
    expect(sut.items.length).toBe(2);
  });

  it('Should test total and total with discount', () => {
    const { sut } = createSut();
    const CartItem1 = createCartItem('Shirt', 20);
    const CartItem2 = createCartItem('Bag', 100);
    sut.addItem(CartItem1);
    sut.addItem(CartItem2);
    expect(sut.total()).toBe(120);
    expect(sut.totalWithDiscount()).toBe(120);
  });

  it('Should add products and clear cart', () => {
    const { sut } = createSut();
    const CartItem1 = createCartItem('Shirt', 20);
    const CartItem2 = createCartItem('Bag', 100);
    sut.addItem(CartItem1);
    sut.addItem(CartItem2);
    sut.clear();
    expect(sut.items.length).toBe(0);
  });

  it('Should remove products', () => {
    const { sut } = createSut();
    const CartItem1 = createCartItem('Shirt', 20);
    const CartItem2 = createCartItem('Bag', 100);
    sut.addItem(CartItem1);
    sut.addItem(CartItem2);
    sut.removeItem(1);
    expect(sut.items.length).toBe(1);
  });
});
