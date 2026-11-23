const tickets = [
  { ticketNumber: 1001, issue: "Wi-Fi connection issue", priority: "High", status: "Open" },
  { ticketNumber: 1002, issue: "Password reset", priority: "Low", status: "Closed" },
  { ticketNumber: 1003, issue: "Printer not responding", priority: "Medium", status: "Pending" },
  { ticketNumber: 1004, issue: "VPN connection failure", priority: "High", status: "Open" },
  { ticketNumber: 1005, issue: "Software installation", priority: "Low", status: "Closed" }
];


function getTicketsNeedingAttention(ticketList) {
  return ticketList.filter((ticket) =>
    ticket.status === "Open" || ticket.status === "Pending"
  );
}


const ticketsNeedingAttention = getTicketsNeedingAttention(tickets);


for (const ticket of ticketsNeedingAttention) {
  console.log(
    `Ticket #${ticket.ticketNumber} | ${ticket.issue} | ${ticket.priority} | ${ticket.status}`
  );
}


console.log(`${ticketsNeedingAttention.length} tickets need attention.`);
