interface Starship {
  name: string;
  enableHyperJump: boolean;
}

const updateStarship = (
  id: number, 
  starship: Partial<Starship>
  ) => {
};

updateStarship(1, {
  name: 'Explorer',
  enableHyperJump: true,
});

const starships: Record<string, Starship> = {
  Expolrer1: {
    name: 'Explorer1',
    enableHyperJump: true,
  },
  Explorer2: {
    name: 'Explorer2',
    enableHyperJump: false,
  }
}

//  INSTANCE OF

type Constructable<ClassInstance> = new (...args: any[]) => ClassInstance;

function Deletable<BaseClass extends Constructable<{}>> (Base: BaseClass) {
  return class extends Base {
    deleted: boolean;
    delete() {}
  };
};

class Car {
  deleted: boolean = false;
  delete() {}
  constructor(public name: string) {}
}

class User {
  deleted: boolean = false;
  delete() {}
  constructor(public name: string) {}
}

