12 Capstone plan - I want to create a simple IT helpdesk ticket tracker that shows which support tickets still need attention.

Questions to Ask
1. What details are needed for every support ticket?
Each ticket needs a ticket number, summary of the issue, priority level, and current status.
2. What statuses ought to be included in the report?
Only tickets marked Open or Pending should be shown.
3. Are Closed tickets included in this report?
No, because those issues are already resolved.
4. How should the list of tickets be arranged?
Maintain the original sequence of the list for now.
5. What details will the program output?
It will print the number, issue description, priority, and status for tickets needing work, followed by the overall ticket count.

3. Inputs
DATA
The application utilizes an array of objects to store sample IT support tickets.
Each item includes:
ID: numerical value
Summary: issue details string
Priority: Low / Medium / High
Status: Open / Pending / Closed
I initialized the program with 5 mock entries to test the logic.
4. Steps
Filter -  Find tickets with a status of Open or Pending. Exclude Closed tickets.
Display - Go through the remaining tickets and display each ticket's number, issue description, priority, and status.
Count - Count the remaining tickets and display the total number that still needs attention.

5. Outputs
The program will display a list of all tickets with a status of Open or Pending.
For each ticket, it will show:
Ticket number
Issue description
Priority
Status

6. Test Cases
Test Case 1: Open Ticket
Input: Ticket #1001, Wi-Fi connection issue, High priority, Open.
Expected Result: Ticket #1001 appears in the report because it is Open.
Test Case 2: Pending Ticket
Input: Ticket #1003, Printer not responding, Medium priority, Pending.
Expected Result: Ticket #1003 appears in the report because it is Pending.
Test Case 3: Closed Ticket
Input: Ticket #1002, Password reset, Low priority, Closed.
Expected Result: Ticket #1002 does not appear in the report because it is Closed.
Test Case 4: All Tickets Closed
Input: A list containing only Closed tickets.
Expected Result: No tickets appear in the report, and the total is 0 tickets needing attention.

7. Pseudocode
Copy
START with a list of five fictional IT support tickets

CREATE a function to find tickets needing attention
 GO THROUGH each ticket
 IF the ticket status is Open OR Pending
 KEEP the ticket
 RETURN the kept tickets

CALL the function to get the tickets needing attention

FOR EACH kept ticket
 DISPLAY the ticket number, issue, priority, and status

DISPLAY the total number of kept tickets
