// Tags: Union, Enum, Narrowing
// Виды пасты - spaghetti/penne/macaroni

enum PastaType {
  spaghetti = 'spaghetti',
  penne = 'penne',
  macaroni = 'macaroni',
}

interface IBaseDescription {
  hasSauce: boolean;
  hasCheese: boolean;
}

type TypeDish = IPasta | IPizza;

interface IKitchen<T extends TypeDish> {
  makeDish: (dish: T) => void;
}

interface IPizza extends IBaseDescription {
  hasPepperoni: boolean;
  bakeTime: number;
  bake: () => void;
}

interface IPasta extends IBaseDescription {
  pastaType: PastaType;
  cookTime: number;
  cook: () => void;
}

class Pizza implements IPizza {
  hasPepperoni: boolean;

  hasSauce: boolean;

  hasCheese: boolean;

  bakeTime: number = 30;

  constructor(hasPepperoni: boolean, hasSauce: boolean, hasCheese: boolean) {
      this.hasPepperoni = hasPepperoni;
      this.hasSauce = hasSauce;
      this.hasCheese = hasCheese;
  }

  bake() {
      setTimeout(console.log, this.bakeTime, 'Enjoy your pizza!');
  }
}

class Pasta implements IPasta {
  pastaType: PastaType;

  hasSauce: boolean;

  hasCheese: boolean;

  cookTime: number = 30;

  constructor(pastaType: PastaType, hasSauce: boolean, hasCheese: boolean) {
      this.pastaType = pastaType;
      this.hasCheese = hasCheese;
      this.hasSauce = hasSauce;
  }

  cook() {
      setTimeout(console.log, this.cookTime, 'Enjoy your pasta!');
  }
}

class Kitchen <T extends TypeDish> implements IKitchen<T> {
  makeDish(dish: T) {
      if (dish instanceof Pasta) {
          return dish.cook();
      } else if (dish instanceof Pizza) {
          return dish.bake();
      }
      throw new Error('Unknown dish');
  }
}

const kitchen = new Kitchen();
const pizza: IPizza = new Pizza(true, true, false);
const pasta: IPasta = new Pasta(PastaType.spaghetti, true, true);

kitchen.makeDish(pasta);
kitchen.makeDish(pizza);
