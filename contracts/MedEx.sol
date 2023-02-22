//SPDX-License-Identifier:UNLICENSED
pragma solidity >=0.5.0 <0.9.0;

contract medEx {
    address lab = msg.sender;
    uint rc = 0;

    mapping(address => Report) public records;
    mapping(address => Patient) public patients;
    mapping(address => Doctor) public doctors;
    mapping(address => DiagnosticCenter) public dcentres;

    struct Report {
        string PatientName;
        address patientid;
        string Bloodgrp;
        string DOB;
        string gender;
        uint age;
        string Hos_name;
        string Doc_name;
        //string[] Symptoms;
        //string[] Allergies;
        bool diabetes;
    }

    struct Patient {
        string PatientName;
        address patientid;
        uint contact;
        uint age;
        string gender;
    }

    struct Doctor {
        string DocName;
        address DocId;
        string Doc_spec;
        string Hos_Name;
        uint Hos_id;
    }

    struct DiagnosticCenter {
        string Lab_name;
        address lab_id;
        string reco_hospitalname;
        string reco_doc_name;
    }



    modifier onlyLabwala() {
        require(
            lab == msg.sender,
            "Only Diagnostic Centers can call this function"
        );
        _;
    }

    address p_id;

    function report_count() public view returns (uint) {
        return rc;
    }

    address doctor;

    //Doctor array 
    Doctor[] public doc_data;

    //Adding the doctor
    function doctorRegistration(
        string memory Doctor_name,
        address doctor_id,
        string memory doc_specializaton,
        string memory Hospital_Name,
        uint Hospital_id
    ) public {
        require(doctor_id != p_id, "Doctor cannot be patient");
        require(Hospital_id <= 255 && Hospital_id > 0, "enter correct data");
        Doctor memory docs;
        docs.DocName = Doctor_name;
        docs.DocId = doctor_id;
        docs.Doc_spec = doc_specializaton;
        docs.Hos_Name = Hospital_Name;
        docs.Hos_id = Hospital_id;


        //push in array
        doc_data.push(docs);

        doctors[doctor_id] = docs;

        doctor = doctor_id;


    }

     

    //Doctor function to retrieve data
    function getDoctor() public view returns(Doctor[] memory){
        return doc_data;

    }

    

    Report[] public rep_data;

    //Adding the report
    function addReport(
        address Patient_id,
        string memory Patient_Name,
        string memory Blood_Group,
        string memory DateOfBirth,
        string memory gender,
        string memory Hos_name,
        string memory Doc_name,
        uint age,
        //string[] memory Symptoms,
        //string[] memory Allergies,
        bool diabetes
    ) public payable onlyLabwala{
        require(Patient_id != msg.sender, "Patient cannot be the Labwala");
        require(Patient_id != doctor, "Doctor cannot be the patient");
        require(age <= 150 && age > 0, "enter correct data");
        p_id = Patient_id;
        Report memory repos;
        repos.patientid = Patient_id;
        repos.PatientName = Patient_Name;
        repos.Bloodgrp = Blood_Group;
        repos.DOB = DateOfBirth;
        repos.gender = gender;
        repos.age = age;
        repos.Hos_name = Hos_name;
        repos.Doc_name = Doc_name;
        repos.diabetes = diabetes;

        //repos.Symptoms = Symptoms;
        //repos.Allergies = Allergies;

        rep_data.push(repos);

        records[Patient_id] = repos;

        rc++;
    }

    function getReport() public view returns(Report[] memory){
        return rep_data;
    }



    //DC array
    DiagnosticCenter[] public dc_data;
    //Registering Diagnostic Centre
    function diagnosticCenterRegistration(
        string memory _labname,
        string memory _reco_hospitalname,
        string memory _reco_docname
    ) public {
        DiagnosticCenter memory dc;

        dc.Lab_name = _labname;
        dc.lab_id = msg.sender;
        dc.reco_hospitalname = _reco_hospitalname;
        dc.reco_doc_name = _reco_docname;

        dc_data.push(dc);

        dcentres[dc.lab_id] = dc;
    }

    //DC function to retrieve data
    function getDC() public view returns(DiagnosticCenter[] memory){
        return dc_data;
    }

    //Patient array
    Patient[] public patient_data;

    function patientRegistration(
        string memory _patientname,
        address _pid,
        uint _age,
        string memory _gender,
        uint _contact
    ) public {
        require(_pid != lab, "Patient cannot be the Labwala");
        require(_pid != doctor, "Doctor cannot be the patient");

        Patient memory p;
        p.PatientName = _patientname;
        p.patientid = _pid;
        p.age = _age;
        p.gender = _gender;
        p.contact = _contact;

        patient_data.push(p);

        patients[_pid] = p;
    }

    //Patient function to retrieve data
    function getPatient() public view returns(Patient[] memory){
        return patient_data;
    }
}