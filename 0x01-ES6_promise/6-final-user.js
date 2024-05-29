import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup (firstName, lastName, fileName) {
  const response = [];
  try {
    const user = await signUpUser(firstName, lastName);
    response.push({ status: 'Completed', value: user });
  } catch (err) {
    response.push({
      status: 'Rejected',
      value: err.toString(),
    });
  }

  try {
    const upload = await uploadPhoto(filename);
    response.push({ status: 'Completed', value: upload });
  } catch (err) {
    response.push({
      status: 'Rejected',
      value: err.toString(),
    });
  }

  return response;
}
