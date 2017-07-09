'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var ms = _interopDefault(require('ms'));

function getNextLunchtime (hours, minutes) {
	var lunchtime = new Date();

	lunchtime.setHours(hours);
	lunchtime.setMinutes(minutes);
	lunchtime.setSeconds(0);
	lunchtime.setMilliseconds(0);

	// if we've already had lunch today, start planning
	// tomorrow's lunch
	if (lunchtime < Date.now()) lunchtime.setDate(lunchtime.getDate() + 1);

	return lunchtime;
}

function millisecondsUntil(date) {
	return date - Date.now();
}

function howLongUntilLunch(hours, minutes) {
	// lunch is at 12.30
	if (hours === undefined) hours = 12;
	if (minutes === undefined) minutes = 30;

	var millisecondsUntilLunchTime = millisecondsUntil(getNextLunchtime(hours, minutes));
	return ms(millisecondsUntilLunchTime, { long: true });
}

module.exports = howLongUntilLunch;
