# Fetch, Execution and I/O

## 01. Functional Units

- Data is stored as bits (binary digits)
- 8 bits = 1 byte
- Primary memory (main memory): Organised into words of (typically) 4 bytes
- Cache memory: Adjunct to main memory, fabricated on the processor chip, much smaller and faster than main memory, holds currently/frequently used data
- PC: Holds memory address of next instruction to be fetched and executed by CPU
- ALU: Perform arithmetic and logic operations on word-size data operands
- CU: Coordinates operations in the processor by fetching and interpreting program instructions from memory

## 02. Instruction Cycle Operations

- Fetch instruction and increment PC
- Decode instruction and read registers
- Perform ALU operation
- Store instruction to memory
- Write result into destination register if needed

## 03. Instruction Types

- Load: Read a data operand from memory or input device into processor register
- Store: Write a data operand from processor register to memory or output device
- Operate: Perform arithmetic or logic operation on data operands in processor registers

## 04. Performance Factors

- Design: Design of instruction set
- Access times: Access times to the cache and main memory
- Number: Number of operations that can be done simultaneously (parallelism)
- Speed: Speed of electronic circuits in processor

## 05. LMC

- 000 (HLT): Halts execution of program
- 1xx (ADD): Adds contents of memory address to accumulator
- 2xx (SUB): Subtracts contents of memory address from accumulator
- 3xx (STO): Stores entire value of accumulator to memory address
- 4xx (STA): Stores only last 2 digits of accumulator to memory address
- 5xx (LDA): Loads contents of memory address to accumulator
- 6xx (BRA): Branch always; sets PC to memory address
- 7xx (BRZ): Branch if zero; sets PC to memory address if accumulator = 0
- 8xx (BRP): Branch if zero or positive; sets PC to memory address if accumulator >= 0
- 901 (INP): Copies contents of "in box" to accumulator
- 902 (OUT): Copies contents of accumulator to "out box"
- xxx (DAT): Creates a variable
