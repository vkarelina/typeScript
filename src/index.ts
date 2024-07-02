/* Tags: Generic, Enum ('small' | 'large' | 'medium'), 
Union, Interface, implements */

enum SizeProducts {
  small = 'small',
  large = 'large',
  medium = 'medium',
}

interface IBaseProduct {
  name: string;
  price: number;
  discount: number;
}

interface IShop<T extends IProduct> {
  items: T[];
  addGood: (item: T) => number;
  goods: T[];
}

type IProduct = IBanana | IIceCream;

interface IBanana extends IBaseProduct {
  size: SizeProducts;
}

interface IIceCream extends IBaseProduct {
  withGlace: boolean;
}

class Shop<T extends IProduct> implements IShop<T> {
  items: T[] = [];

  public addGood(item: T): number {
      return this.items.push(item);
  }

  public get goods(): T[] {
      return this.items;
  }
}

class BaseProduct implements IBaseProduct {
  name: string;

  price: number;

  discount: number;

  constructor(name: string, price: number, discount: number) {
      this.name = name;
      this.price = price;
      this.discount = discount;
  }
}

class Banana extends BaseProduct implements IBanana {
  size: SizeProducts;

  constructor(price: number, discount: number, size: SizeProducts) {
      super('banan', price, discount);
      this.size = size;
  }
}

class IceCream extends BaseProduct implements IIceCream {
  withGlace: boolean;

  constructor(price: number, discount: number, withGlace: boolean) {
      super('iceCream', price, discount);
      this.withGlace = withGlace;
  }
}

const shop = new Shop();

const iceCream: IIceCream = new IceCream(10, 0, true);
const banana: IBanana = new Banana(5, 0.1, SizeProducts.small);

shop.addGood(iceCream);
shop.addGood(banana);

console.log(shop.goods);