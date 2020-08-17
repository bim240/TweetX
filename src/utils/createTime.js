function createTime(time) {
  var created_date = new Date(time);
  let current_date = new Date();

  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  var year = created_date.getFullYear();
  var month = months[created_date.getMonth()];
  var date = created_date.getDate();
  var hour = created_date.getHours();
  var min = created_date.getMinutes();
  var sec = created_date.getSeconds();
  console.log(sec, min, hour, date);
  return year !== current_date.getFullYear()
    ? year
    : month !== months[current_date.getMonth()]
    ? `${month} ${year}`
    : date !== current_date.getDate()
    ? `${date} ${month}`
    : hour !== current_date.getHours()
    ? `${hour} hours`
    : min !== current_date.getMinutes()
    ? `${min} min`
    : `${sec} sec`;
}

export { createTime };
