//SPDX-License-Identifier:UNLICENSED
pragma solidity >=0.5.0 <0.9.0;

contract medEx {
    address lab;
    uint rc = 0;


    address [] alreadyreg;

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
        // string url;
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
        uint bmi;
        uint children;
        bool smoker;
        address []  doctorAccessList;
    }

    struct Doctor {
        string DocName;
        address DocId;
        string Doc_spec;
        string Hos_Name;
        uint Hos_id;
        address [] patientAccessList;
    }

    struct DiagnosticCenter {
        string Lab_name;
        address lab_id;
        string reco_hospitalname;
        string reco_doc_name;
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

        for(uint i = 0; i < alreadyreg.length; i++)
        {
        require(doctor_id != alreadyreg[i], "Already Registered");

        }
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

        alreadyreg.push(doctor_id);

        

       


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
        // string memory _url,
        uint age,
        //string[] memory Symptoms,
        //string[] memory Allergies,
        bool diabetes
    ) public payable {
       

        require(Patient_id != msg.sender, "Patient cannot be the Labwala");
        require(Patient_id != doctor, "Doctor cannot be the patient");
        require(age <= 150 && age > 0, "enter correct data");
        p_id = Patient_id;
        Report memory repos;
        repos.PatientName = Patient_Name;
        repos.patientid = Patient_id;
        repos.Bloodgrp = Blood_Group;
        repos.DOB = DateOfBirth;
        repos.gender = gender;
        repos.age = age;
        repos.Hos_name = Hos_name;
        repos.Doc_name = Doc_name;
        // repos.url = _url;
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
        address _lab,
        string memory _reco_hospitalname,
        string memory _reco_docname
    ) public {

        for(uint i = 0; i < alreadyreg.length; i++)
        {
        require(_lab != alreadyreg[i], "Already Registered");
        }
        DiagnosticCenter memory dc;

        dc.Lab_name = _labname;
        dc.lab_id = _lab;
        dc.reco_hospitalname = _reco_hospitalname;
        dc.reco_doc_name = _reco_docname;

        dc_data.push(dc);

        dcentres[dc.lab_id] = dc;

        alreadyreg.push(lab);
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
        uint _bmi,
        uint _children,
        bool _smoker
    ) public {
        for(uint i = 0; i < alreadyreg.length; i++)
        {
        require(_pid != alreadyreg[i], "Already Registered");
        }

        require(_pid != lab, "Patient cannot be the Labwala");
        require(_pid != doctor, "Doctor cannot be the patient");

        Patient memory p;
        p.PatientName = _patientname;
        p.patientid = _pid;
        p.age = _age;
        p.gender = _gender;
        p.bmi = _bmi;
        p.children = _children;
        p.smoker = _smoker;

        patient_data.push(p);

        patients[_pid] = p;

        alreadyreg.push(_pid);

        
    }

    function give_access(address addr) payable public{
        require(msg.value == 2 ether);
        
        for(uint i = 0; i < doctors[addr].patientAccessList.length; i++)
        {
            require(msg.sender != doctors[addr].patientAccessList[i],"Already have an Access");
        }

        doctors[addr].patientAccessList.push(msg.sender);
        patients[msg.sender].doctorAccessList.push(addr);

    }

    function get_accessed_doctorlist_for_patient(address addr) public view returns (address[] memory){
        address[]  memory doctor_address = patients[addr].doctorAccessList;

        return doctor_address;
    }

    function get_accessed_patientlist_for_doctor(address addr) public view returns (address[] memory){
        address[]  memory patient_address = doctors[addr].patientAccessList;

        return patient_address;
    }

    function remove_element_in_array(address[] storage Array, address addr) internal{
        bool check = false;
        uint del_index = 0;
        for(uint i = 0; i<Array.length; i++){
            if(Array[i] == addr){
                check = true;
                del_index = i;
            }
        }
        if(!check) revert();
        else{
            if(Array.length == 1){
                delete Array[del_index];
            }
            else {
                Array[del_index] = Array[Array.length - 1];
                delete Array[Array.length - 1];

            }
            Array.pop();
        }
    }

    function remove_patient(address paddr, address daddr) public {
        remove_element_in_array(doctors[daddr].patientAccessList, paddr);
        remove_element_in_array(patients[paddr].doctorAccessList, daddr);
    }



    function revoke_access(address daddr) public{
        remove_patient(msg.sender,daddr);
    }

    
    

    //Patient function to retrieve data
    function getPatient() public view returns(Patient[] memory){
        return patient_data;
    }
}