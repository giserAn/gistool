/**
 * Converts a decimal coordinate to DMS (Degrees, Minutes, Seconds) format.
 * @param {number} decimal - The decimal coordinate to convert.
 * @returns {{degrees: number, minutes: number, seconds: number, direction: string}} - The DMS representation of the coordinate.
 */
function decimalToDMS(decimal) {
  if (typeof decimal !== 'number') {
    throw new Error('Invalid input: decimal must be a number')
  }
  const isNegative = decimal < 0
  const absDecimal = Math.abs(decimal)
  const degrees = Math.floor(absDecimal)
  const minutes = Math.floor((absDecimal - degrees) * 60)
  const seconds = ((absDecimal - degrees - minutes / 60) * 3600).toFixed(2)
  return {
    degrees,
    minutes,
    seconds,
    direction: isNegative ? (decimal < 0 ? 'S' : 'W') : decimal >= 0 ? 'N' : 'E',
  }
}

/**
 * Converts a DMS (Degrees, Minutes, Seconds) coordinate to decimal format.
 * @param {{degrees: number, minutes: number, seconds: number, direction: string}} dms - The DMS coordinate to convert.
 * @returns {number} - The decimal representation of the coordinate.
 */
function DMSToDecimal(dms) {
  if (typeof dms !== 'object' || dms === null) {
    throw new Error('Invalid input: dms must be an object')
  }
  if (
    typeof dms.degrees !== 'number' ||
    typeof dms.minutes !== 'number' ||
    typeof dms.seconds !== 'number' ||
    typeof dms.direction !== 'string'
  ) {
    throw new Error('Invalid input: dms object must contain degrees, minutes, seconds, and direction properties')
  }
  let decimal = dms.degrees + dms.minutes / 60 + dms.seconds / 3600
  if (dms.direction === 'S' || dms.direction === 'W') {
    decimal = -decimal
  }
  return decimal
}

export default { DMSToDecimal, decimalToDMS }
