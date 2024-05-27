export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

/* eslint-disable no-unused-variables */
  if (trueOrFalse) {
    const task = true;
    const task2 = false;
  }

/* eslint-disable no-unused-variables */

  return [task, task2];
}
