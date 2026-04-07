## 01. Repeaters, Hubs, Switches and Routers

- Repeater: Regenerates or "repeats" signals received from NICs and other devices, making reliable data transfer possible over long distances, has 2 ports (1 in 1 out)
- Hub: Essentially a multiport repeater, broadcasts signals received to all other ports
- Switch: Essentially an intelligent multiport repeater, forwards signals received to only one specific port where the destination MAC address can be found
- Router: Essentially a "switch" for switches, connects LANs (which are connected by switches) together to create internetworks

## 02. Steps of Switch Operation

- Switch receives a frame
- Switch reads source and destination MAC addresses
- Switch looks up destination MAC address in switching table
- Switch forwards frame to port where destination MAC address is found
- Switching table is updated with source MAC and port information

## 03. APs and WAPs

- The heart of a wireless network is the WAP (Wireless Access Point)
- APs operate similarly to a hub without wires
- All communications pass through the AP
- Most small businesses and home networks use a "wireless router" that combines the functions of an AP, a switch and a router
- Wireless LANs are usually attached to wired networks

## 04. NICs and MAC Addresses

- NICs provide a connection from computer to network
- Incoming messages: NICs receive bit signals and assemble them into frames, verify the destination address of each frame, remove its frame header and send the resulting packet to the network protocol
- Outgoing messages: NICs receive packets from network protocol, encapsulate them into frames by adding MAC addresses and error-checking code, convert each frame into bit signals suitable for the network medium and transmit the bit signals
- Every NIC has a unique MAC address stored in the ROM of the NIC
- Each MAC address consists of two 24-bit numbers (expressed as 6 groups of 2 hex digits): first 24-bit manufacturer ID called OUI, and second 24-bit serial number assigned by manufacturer

## 05. Hubs vs Switches

- Hubs are less intelligent, switches are more intelligent
- Hubs send data received to all other ports, switches send data received to only one port
- Hubs can only operate on half-duplex, switches can operate on full-duplex
- Hubs do not use switching tables, switches use switching tables
- Hubs' ports have shared bandwidth, switches' ports have dedicated bandwidth
- Hubs function on physical (1st) layer of OSI model, switches function on data link (2nd) layer of OSI model

## 06. Switches vs Routers

- Switches connect computers to form LANs, routers connect LANs to form internetworks
- Switches work with physical (MAC) addresses, routers work with logical (IP) addresses
- Switches work with frames, routers work with packets
- Switches use switching tables, routers use routing tables
- Switches forward broadcasts, routers do not forward broadcasts
