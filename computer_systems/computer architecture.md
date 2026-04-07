# Computer Architecture

## 01. Basic Functions of a Computer

- Input: The computer receives data from input devices
- Processing: The input data is manipulated and transformed using the CPU and other components
- Output: The processed data is displayed to the user or used by output devices

## 02. Processing Components

- CPU: A computer's main processing component; executes instructions from computer programs
- Multicore CPU: A CPU containing multiple independent processing units; enables computers to carry out multiple instructions simultaneously, resulting in better performance

## 03. Storage Components

- More storage = better performance
- Most storage components are both input and output devices
- 2 main categories of storage: short-term (volatile) and long-term (non-volatile)

## 04. Volatile vs Non-Volatile Memory

- Volatile requires constant power to retain data, non-volatile does not require constant power to retain data
- Volatile holds data temporarily, non-volatile holds data permanently
- Volatile affects system performance, non-volatile affects system storage
- Volatile is faster, non-volatile is slower
- Volatile refers to primary storage, non-volatile refers to secondary storage

## 05. HDD vs SSD

- HDD has higher latency (slower), SSD has lower latency (faster)
- HDD contains moving parts, SSD does not contain moving parts
- HDD is heavier, SSD is lighter
- HDD is cheaper, SSD is more expensive

## 06. Computer Buses

- Data bus: Bidirectional; carries data signals
- Address bus: Unidirectional; carries address signals
- Control bus: Unidirectional; carries control signals

## 07. Interrupt and Polling

- Interrupt: I/O device interrupts CPU when needing CPU service
- Polling: CPU checks I/O device at regular intervals if it needs CPU service

## 08. NIC Basics and Wireless NIC

- NIC: Connects a computer to a network, contains a MAC address
- MAC Address: A Unique identifier assigned to each NIC
- Wireless NIC: Connects to network using SSID, must be chosen according to type of wireless AP (referred as Wi-Fi)
- Wi-Fi standards include Wireless-n, 802.11ac, 802.11a/b/g/n

## 09. BIOS and CMOS

- BIOS: Tells CPU to perform certain tasks when power is first applied to the computer, one of which being POST
- CMOS: Stores system settings and configurations for BIOS

## 10. Computer Boot Procedure

- Power is applied to the motherboard
- CPU starts
- CPU carries out BIOS start-up routines
- Boot devices are searched for an OS
- OS is loaded into RAM
- OS services are started
