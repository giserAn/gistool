# Coordinate Conversion Functions

## decimalToDMS(decimal: number)

Converts a decimal coordinate to DMS (Degrees, Minutes, Seconds) format.

**Parameters**:

- `decimal`: The decimal coordinate to convert (number).

**Returns**:

- An object containing `degrees`, `minutes`, `seconds`, and `direction`.

## DMSToDecimal(dms: object)

Converts a DMS coordinate to decimal format.

**Parameters**:

- `dms`: An object containing `degrees`, `minutes`, `seconds`, and `direction`.

**Returns**:

- The decimal representation of the coordinate (number).

## Example Usage

```javascript
const gistool = require('@angiser/gistool')

// Convert decimal to DMS
const decimalCoordinate = 40.7128
const dmsCoordinate = gistool.coordinateConversion.decimalToDMS(decimalCoordinate)
console.log(dmsCoordinate)
// Output: { degrees: 40, minutes: 42, seconds: 46.08, direction: 'N' }

// Convert DMS to decimal
const dmsCoordinate = { degrees: 40, minutes: 42, seconds: 46.08, direction: 'N' }
const decimalCoordinate = gistool.coordinateConversion.DMSToDecimal(dmsCoordinate)
console.log(decimalCoordinate)
// Output: 40.7128
```
