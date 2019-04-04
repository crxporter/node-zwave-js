/** Ensures that the values array is consecutive */
export function isConsecutiveArray(values: number[]) {
	return values.every((v, i, arr) => i === 0 ? true : v - 1 === arr[i - 1]);
}
