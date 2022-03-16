import dayjs from 'dayjs';

export function getRemainingTimeUntilMsTimeStamp( timeStampMs ) {
    const timeStampDayJS = dayjs(timeStampMs);
    const now = dayjs();
    return {
        seconds: getRemainingSeconds(now, timeStampDayJS),
        minutes: getRemainingMinutes(now, timeStampDayJS),
        hours: getRemainingHours(now, timeStampDayJS),
        days: getRemainingDays(now, timeStampDayJS)
    }
}

function getRemainingSeconds(now, timeStampDayJS) {
    const seconds = timeStampDayJS.diff(now, 'seconds') % 60;
    return padWithZeros(seconds,2);
}

function getRemainingMinutes(now, timeStampDayJS) {
    const minutes = timeStampDayJS.diff(now, 'minutes') % 60;
    return padWithZeros(minutes,2);
}
function getRemainingHours(now, timeStampDayJS) { 
    const hours = timeStampDayJS.diff(now, 'hours') % 24;
    return padWithZeros(hours,2);
}

function getRemainingDays(now, timeStampDayJS) {
    const days = timeStampDayJS.diff(now, 'days');
    return days.toString();
}


function padWithZeros(number, minLength) {
    const numberString = number.toString();
    if(numberString.length >= minLength) return numberString;
    return "0".repeat(minLength - numberString.length) +  numberString;
}
