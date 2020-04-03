function getStudentRecord(recordId){
    return studentRecords.find(function(record){
          return  record.id === recordId
        })
    }
    function printRecords(recordIds) {
        //  
       
        const records =recordIds.map(getStudentRecord)
        records.sort(function(a,b){
           if(a.name < b.name) return -1 ;
            if(a.name > b.name) return 1;
            return 0
        })
        
        records.forEach(function(record){
            console.log(`${record.name} (${record.id}) : ${record.paid}`)
        })
    }
    // ********************************
    var currentEnrollment = [ 410, 105, 664, 375 ];
    var studentRecords = [
        { id: 313, name: "Frank", paid: true, },
        { id: 410, name: "Suzy", paid: true, },
        { id: 709, name: "Brian", paid: false, },
        { id: 105, name: "Henry", paid: false, },
        { id: 502, name: "Mary", paid: true, },
        { id: 664, name: "Bob", paid: false, },
        { id: 250, name: "Peter", paid: true, },
        { id: 375, name: "Sarah", paid: true, },
        { id: 867, name: "Greg", paid: false, },
    ];
    printRecords(currentEnrollment);
    console.log("----");
    //OUTPUT as below 


            Bob (664): Not Paid
        Henry (105): Not Paid
        Sarah (375): Paid
        Suzy (410): Paid
        ----
        

        ///////////////////////////using arrow funtions 

        function getStudentRecord(recordId){
            return studentRecords.find((record)=> {
                  return  record.id === recordId
                })
            }
            function printRecords(recordIds) {
                // TODO
               
                const records =recordIds.map(getStudentRecord)
                records.sort((a,b)=>{
                   if(a.name < b.name) return -1 ;
                    if(a.name > b.name) return 1;
                    return 0
                })
                
                records.forEach((record) =>{
                    console.log(`${record.name} (${record.id}) : ${record.paid}`)
                })
            }
            // ********************************
            var currentEnrollment = [ 410, 105, 664, 375 ];
            var studentRecords = [
                { id: 313, name: "Frank", paid: true, },
                { id: 410, name: "Suzy", paid: true, },
                { id: 709, name: "Brian", paid: false, },
                { id: 105, name: "Henry", paid: false, },
                { id: 502, name: "Mary", paid: true, },
                { id: 664, name: "Bob", paid: false, },
                { id: 250, name: "Peter", paid: true, },
                { id: 375, name: "Sarah", paid: true, },
                { id: 867, name: "Greg", paid: false, },
            ];