const assert = require('assert');
const howLongTillLunch = require('..');

class MockDate {
	private date = 0;
	private hours = 0;
	private minutes = 0;
	private seconds = 0;
	private milliseconds = 0;

	getDate (): number { return this.date; }
	setDate (date: number): void { this.date = date; }
	setHours (h: number) { this.hours = h; }
	setMinutes (m: number): void { this.minutes = m; }
	setSeconds (s: number): void { this.seconds = s; }
	setMilliseconds (ms: number): void { this.milliseconds = ms; }
	getTime (): number { return this.valueOf(); }
	valueOf (): number {
		return (
			this.milliseconds +
			this.seconds * 1e3 +
			this.minutes * 1e3 * 60 +
			this.hours * 1e3 * 60 * 60 +
			this.date * 1e3 * 60 * 60 * 24
		);
	}

	static now () { return now.valueOf(); }
}

const now = new MockDate();

global.Date = MockDate as any as typeof Date;

function test(hours: number, minutes: number, seconds: number, expected: string): void {
	now.setHours(hours);
	now.setMinutes(minutes);
	now.setSeconds(seconds);

	assert.equal(howLongTillLunch(...lunchtime), expected);
	console.log(`\u001B[32m✓\u001B[39m ${expected}`);
}

let lunchtime = [ 12, 30 ];
test(11, 30, 0, '1 hour');
test(10, 30, 0, '2 hours');
test(12, 25, 0, '5 minutes');
test(12, 29, 15, '45 seconds');
test(13, 30, 0, '23 hours');

// some of us like an early lunch
lunchtime = [ 11, 0 ];
test(10, 30, 0, '30 minutes');