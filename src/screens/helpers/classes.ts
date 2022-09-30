export class Robot {
  //  accessible only from class where defined or subclass
  protected name: string

  constructor(name: string) {
    this.name = name
  }

  consoleName(): void {
    console.log(`My name is ${this.name}`)
  }

  printName(): string {
    return this.name
  }

  move(distance: number): void {
    console.log(`${this.name} moved ${distance} meters`)
  }

  printMove(distance: number): string {
    return `${this.name} moved ${distance} meters`
  }
}

export class FlyingRobot extends Robot {
  //  private accessible only from class where defined
  private readonly jetPackSize: number

  constructor(name: string, jetPackSize: number) {
    super(name)
    this.jetPackSize = jetPackSize
  }

  move(distance: number): void {
    console.log(`${this.name} is flying `)
    super.move(distance)
  }
}