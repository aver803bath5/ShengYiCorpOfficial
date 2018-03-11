import moment from 'moment';

function toReadableTime(timestamp, locale) {
  if (locale === 'tw') {
    moment.locale('zh-tw');
  } else {
    moment.locale('en');
  }
  const date = new Date(timestamp);
  return moment(date).format('LL');
}

export default toReadableTime;
