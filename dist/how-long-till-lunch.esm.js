import ms from 'ms';

function getNextLunchtime(hours, minutes) {
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

function howLongUntilLunch() {
	var hours = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 12;
	var minutes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 30;

	var millisecondsUntilLunchTime = millisecondsUntil(getNextLunchtime(hours, minutes));
	return ms(millisecondsUntilLunchTime, { long: true });
}

export default howLongUntilLunch;
