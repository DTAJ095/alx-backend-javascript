export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

/* eslint-disable unused variables */
  if (trueOrFalse) {
    const task = true;
    const task2 = false;
  }

/* eslint-disable unused variables */

  return [task, task2];
}
