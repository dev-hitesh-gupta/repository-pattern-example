import { APIDatasource } from "./api-datasource";
import { Pets, PetsNameId } from "./petstore.model";
import { Repository } from "./repository";
import { User } from "./user.model";

async function main() {
  const petRepo = new Repository<Pets, APIDatasource<number>, number>(
    APIDatasource.getInstance(),
    Pets
  );
  const userRepo = new Repository<User, APIDatasource<string>, string>(
    APIDatasource.getInstance(),
    User
  );
  //   const pet = new Pets({
  // id: 0,
  // category: {
  //   id: 0,
  //   name: "Test",
  // },
  // name: "Dog",
  // photoUrls: [],
  // tags: [],
  // status: "available",
  //   });
  //   const storedPet = await petRepo.create(pet);
  //   console.log("Stored Pet: ", storedPet);
  //   const getPet = await petRepo.get(656);
  //   console.log("656 pet data: ", getPet.toJSON());
  //   const updatedPet = await petRepo.update(656, pet);
  //   console.log("656 updated pet data: ", updatedPet);

  const user = await userRepo.get("string");
  console.log("string user data: ", user.fullName);
}

main();
