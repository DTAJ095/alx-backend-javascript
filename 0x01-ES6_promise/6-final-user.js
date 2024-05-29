import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const response = [];
  signUpUser(firstName, lastName).then((value) => {
    response.push(value);
  }).then(() => {
    uploadPhoto(fileName).then((value) => {
      response.push(value);
    });
  }).catch((err) => {
    response.push(err.toString());
  });

  return response;
}
