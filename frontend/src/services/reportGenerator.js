// services/reportGenerator.js

import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { format } from "date-fns";
import PropTypes from "prop-types";

// define a generatePDF function that accepts a reports argument
const generatePDF = (Reports,patientId) => {
  //get date
  const getDate = () => {
    let date = new Date();
    return (
      date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate()
    );
  };

  // initialize jsPDF
  const doc = new jsPDF();

  // define the columns we want and their titles
  const tableColumn = [
    // "Patient Id",
    "Patient Name",
    "Gender",
    "Report Type",
    "Blood Group",
    "Date Of Birth",
    "Hospital Name",
  ];
  // define an empty array of rows
  const tableRows = [];

  // for each ticket pass all its data into an array
  Reports.forEach((report) => {
    const reportData = [
    // report.patientid,
    report.PatientName,
    report.gender,
    report.Doc_name,
    report.Bloodgrp,
    report.DOB,
    report.Hos_name,
    // called date-fns to format the date on the report
    // format(new Date(), "yyyy-MM-dd"),
    ];
    console.log(reportData);
    // push each report's info into a row
    tableRows.push(reportData);
  });

  // startY is basically margin-top
  // Or use javascript directly:
  autoTable(doc, {
    margin: { top: 30 },
    head: [tableColumn],
    body: [tableRows],
  });
  const date = getDate();
  // ticket title. and margin-top + margin-left
  doc.text("MedEx Report", 14, 15);
  // we define the name of our PDF file.
  doc.save(`report_${date}_${tableRows.PatientName}.pdf`);
};


generatePDF.propTypes = {
  Reports: PropTypes.array.isRequired,
  patientId: PropTypes.string.isRequired,
};


export default generatePDF;