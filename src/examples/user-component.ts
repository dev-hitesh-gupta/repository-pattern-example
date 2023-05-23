import { Store, StoreAccessMixin } from "./store";

class Componenet {}
interface User {
  name: string
}
export class UserComponent extends StoreAccessMixin(Componenet) {


  render() {
    const user = this.getFromStore<User>('user');
    this.printUser(user);
  }

  private printUser(user: User) {
      console.log(user.name)
  }

}