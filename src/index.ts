import { Store } from "./examples/store";
import { UserComponent } from "./examples/user-component";



const store = Store.getInstance()

store.data = {
  user: {
    name: 'Hitesh'
  }
}


const userComp = new UserComponent();

