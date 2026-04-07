# Digital Representation

## 01. Number Conversion

- BIN to DEC: Add increasing powers of 2 for each positive bit
- BIN to HEX: Convert each group of 4 bits to 1 hex digit
- DEC to BIN: Repeatedly divide by 2 and keep track of remainders
- DEC to HEX: Repeatedly divide by 16 and keep track of remainders
- HEX to BIN: Convert each hex digit to groups 4 bits
- HEX to DEC: Add increasing powers of 16 multiplied by each hex digit

## 02. Signed and Unsigned Numbers

- Unsigned: Numbers without positive/negative sign, range is 0 to (2^n)-1
- Signed: Numbers with positive/negative sign, range is -(2^(n-1)) to (2^(n-1))-1, leftmost bit is 0 if positive and 1 if negative

## 03. Number Representation

- Sign and magnitude: Leftmost bit is positive/negative sign, remaining bits are magnitude
- 1's complement: Flip bits of positive number to get its negative version
- 2's complement: Add 1 to 1's complement number to get 2's complement version
- Overflow: Occurs during number operations when result exceeds range
- Sign extension: Replicate leftmost bit to extend 4-bit signed numbers to 8-bit signed numbers (eg. 0101 to 00000101, 1110 to 11111110)
