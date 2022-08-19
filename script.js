var mainObj = [
  {
    type: "",
    name: "Sumit Saurav_pdf.pdf",
    modified: "2h ago",
    location: "Nalin_mehta's OneDrive / Microsoft Teams Chat Files",
  },
  {
    type: "",
    name: "https___codingcompetitions.withgoogle.com_kickstart_certificate_summary_0000000000435bad.pdf",
    modified: "2h ago",
    location: "Sumit_saurav's OneDrive / Microsoft Teams Chat Files",
  },
  {
    type: "",
    name: "Frontend Interview by Ankit Pandey.xlsx",
    modified: "2h ago",
    location: "Ankit_pandey's OneDrive / Microsoft Teams Chat Files",
  },
  {
    type: "",
    name: "Interns Daily Report.xlsx",
    modified: "8/16/2022",
    location: "Aditi_jain's OneDrive",
  },
  {
    type: "",
    name: "Sumit Tracker.xlsx",
    modified: "28/16/2022",
    location: "Sumit_saurav's OneDrive",
  },
  {
    type: "",
    name: "Python Project.docx",
    modified: "Yesterday",
    location: "Sumit_saurav's OneDrive / Microsoft Teams Chat Files",
  },
  {
    type: "",
    name: "Social.mp4",
    modified: "8/17/2022",
    location: "Sumit_saurav's OneDrive / Microsoft Teams Chat Files",
  },
  {
    type: "",
    name: "--Read Caption --_Search Codewithrandom on google for 100  Frontend Project Code_. _. _. _._--Follow _codewith_random_--Follow _codewith_random_--Follow _codewith_random_. _. _for more useful and insightful posts like ------ __Make sure (MP4).mp4",
    modified: "8/17/2022",
    location: "Sumit_saurav's OneDrive / Microsoft Teams Chat Files",
  },
];

var icons = [];

var k = "<tbody>";
for (i = 0; i < mainObj.length; i++) {
  k += "<tr>";
  k += "<td>" + mainObj[i].name + "</td>";
  k += "<td>" + mainObj[i].age + "</td>";
  k += "<td>" + mainObj[i].status + "</td>";
  k += "</tr>";
}
k += "</tbody>";
document.getElementById("tableData").innerHTML = k;
