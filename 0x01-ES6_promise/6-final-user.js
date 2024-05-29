import signUpUser from "./4-user-promise";
import uploadPhoto from "./5-photo-reject";

export default async function handleProfileSignup(firstName, lastName, fileName) {
  try {
    const user = await signUpUser(firstName, lastName);
    await uploadPhoto(fileName);
    //console.log(`${user.firstName} ${user.lastName}`);
  } catch (err) {
    console.log(err.message);
  }
}
