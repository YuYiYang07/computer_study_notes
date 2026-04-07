# Networking

## 01. Network Hardware Components

- NIC: Provides connection between computer and network
- Network medium: Air waves, fibre-optic cables or copper wire
- Interconnecting device: Allows two or more computers to communicate on the network without being directly connected to one another

## 02. Network Software Components

- Network client software: Requests information stored on another network computer or device (eg. Chrome web browser)
- Network server software: Allows computer to share its resources (eg. Apache web server)
- Protocols: Define rules and formats for computer to use when sending information across network (eg. TCP/IP)
- NIC driver: Receives data from protocols and forwards them to physical NIC

## 03. Layers of the Network Communication Process

- User application: An app tries to access a network resource
- Network software: Client software detects attempt to access network, passes message onto network protocol
- Network protocol: Packages message in a format suitable for the network, sends it to NIC driver
- Network interface: NIC driver sends data in the request to physical NIC, which converts it to the necessary signals to be transmitted across the network medium

## 04. How Two Computers Communicate on a LAN

- TCP/IP is the most common protocol used on networks
- TCP/IP uses 2 addresses to identify devices: Logical (IP) and physical (MAC) addresses
- TCP/IP needs an address in order to deliver data to the correct device on a network

## 05. Network Types

- PAN: Very small network, only within a few meters (eg. AirDrop, Bluetooth, PayWave)
- LAN: Small network, a group of computers connected within a small area
- MAN: Country-wide or city-wide or campus-wide network
- WAN: World-wide network (eg. Internet)
- Internetwork: Group of LANs connected by routers

## 06. Internetwork Types

- Internet: Worldwide public internetwork; uses protocols like TCP/IP and HTTP to transfer and view information
- Intranet: Private internetwork; devices and servers only available to connected users
- Extranet: Allows limited and controlled access to internal resources by outside users

## 07. IP Addresses

- IP addresses are stored in 32 bits of data
- CIDR notates number of bits used for subnet address
- Reserved IP Addresses: First address = subnet address, last address = broadcast address
- Total usable hosts = (2^(32-n))-2

## 08. Reserved Private IP Addresses

- Class A: 10.0.0.0 - 10.255.255.255 (2^24 = 16777216 addresses; designed for large networks)
- Class B: 172.16.0.0 - 172.31.255.255 (2^20 = 1048576 addresses; designed for medium networks)
- Class C: 192.168.0.0 - 192.168.255.255 (2^16 = 65536 addresses; designed for small networks)

## 09. Purpose of Packets

- Pauses between bursts of data allow other computers to transfer data
- Allows the receiving computer to process received data
- Allows the receiving computer to receive data from other computers simultaneously
- Gives the sending computer an opportunity to receive data from other computers and perform other processing tasks
- If an error occurs during transmission of a large file, only the chunks of data involved in the error have to be sent again

## 10. Packets and Frames

- Packets: Contains source and destination IP, source and destination port, protocol, and HTTP request (data)
- Frames: A packet encapsulated by source and destination MAC addresses (frame header) and error-checking code (frame trailer)
