export class User {

  id: number;
  name: string = '';
  email: string = '';
  enabled: boolean = false;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
