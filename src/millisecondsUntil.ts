export default function millisecondsUntil(date: Date): number {
	return date.getTime() - Date.now();
}