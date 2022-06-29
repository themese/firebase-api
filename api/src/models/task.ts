export class NewTask {
  constructor(
    public name: string,
    public description: string,
  ) { }
}

export class Task extends NewTask {
  constructor(
    public id: string,
    public name: string,
    public description: string,
  ) {
    super(name, description);
  }
}