# GIS Tool Kit

A collection of GIS tools for common operations.

## Installation

<!-- 代码块 -->

```bash
npm install @angiser/gistool
yarn add @angiser/gistool
```

## Features

- Coordinate conversion (Decimal to DMS and DMS to Decimal)

## Usage

### Coordinate Conversion

#### Overview

The `coordinateConversion` module provides functions to convert coordinates between decimal format and DMS (Degrees, Minutes, Seconds) format. This is useful for working with geographic coordinates in different formats.

#### Methods

1. **decimalToDMS(decimal: number)**  
   Converts a decimal coordinate to DMS format.  
   **Parameters**:

   - `decimal`: The decimal coordinate to convert (number).  
     **Returns**:
   - An object containing `degrees`, `minutes`, `seconds`, and `direction`.

2. **DMSToDecimal(dms: { degrees: number, minutes: number, seconds: number, direction: string })**  
   Converts a DMS coordinate to decimal format.  
   **Parameters**:
   - `dms`: An object containing `degrees`, `minutes`, `seconds`, and `direction`.  
     **Returns**:
   - The decimal representation of the coordinate (number).

#### Example Usage

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
