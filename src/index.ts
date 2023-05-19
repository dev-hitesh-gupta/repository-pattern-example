import { APIDatasource } from "./api-datasource";
import { Pets, PetsNameId } from "./petstore.model";
import { Repository } from "./repository";
import { User } from "./user.model";

async function main() {
  // const petRepo = new Repository<Pets, APIDatasource<number>, number>(
  //   APIDatasource.getInstance(),
  //   Pets
  // );
  const userRepo = new Repository<User, APIDatasource<string>, string>(
    APIDatasource.getInstance(),
    User
  );
  userRepo.get('1').then(data => {
    console.log(data)
  })



  // const user = new User({
    // id: 1,
    // firstName: 'Hitesh',
    // lastName: "Gupta",
    // dob: new Date(),
    // anDate: new Date()
  // });

  // user.validate()

  // console.log(user.toJSON());

  // const pet = new Pets({
    // id: 2
  // })
}

main();
