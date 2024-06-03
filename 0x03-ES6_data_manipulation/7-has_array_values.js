export default function hasValuesFromArray(set, array) {
    if (set instanceof Set) and (array instanceof Array) {
        return array.every((value) => set.has(value));
    }
}