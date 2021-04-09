/**
 * `daysToMade - (date1 - date2)`
 * `> 0` --> days remaing to re do the test
 * `<= 0` --> the test can be done
 * if `date of realization` is undefined, return 0.
 * @param {String} date1 `today's date`
 * @param {String} date2 `date of realization`
 * @param {Number} daysToMade `days to re do, 0 by default`
 * @returns {Number}
 * devuelve una 
 */

const differenceBetweenDates = (date1, date2, daysToMade = 0) => {
  if (!date2) return 0;
  console.log(typeof date1)
 return daysToMade - (Number(date1.replace(/-/g,'')) - Number(date2.replace(/-/g,'')));
}

module.exports = differenceBetweenDates;
