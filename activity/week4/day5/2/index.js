 
//select 
document.getElementById('button1').addEventListener('click', loadSingleEmployee)
document.getElementById('button2').addEventListener('click', loadAllEmployees)

//load the single employee
function loadSingleEmployee(){
    //create xhr request 
    const xhr = new XMLHttpRequest()
    //open
    xhr.open('GET', 'employee.json', true)
    //execution 
    xhr.onload= function(){
        if(this.status == 200){
            // console.log(this.responseText)
            const employee = JSON.parse(this.responseText)
            // console.log(employee)
            //BUILD the template 
            const output = `
             <ul>
             <li>ID : ${employee.id} </li>
             <li>Name: ${employee.name} </li>
             <li>Company : ${employee.company}</li>
             <li>Job: ${employee.job}</li>
             </ul>
            `
            console.log(output)
            document.getElementById('Employee').innerHTML = output
        }
    }
    xhr.send()
}



//xhr
//create xhr
//onload
//send

function loadAllEmployees(){
    //create xhr request 
    const xhr = new XMLHttpRequest()
    //open
    xhr.open('GET', 'employees.json', true)
    //execution 
    xhr.onload= function(){
        if(this.status == 200){
            // console.log(this.responseText)
            const employees = JSON.parse(this.responseText)
            // console.log(JSON.parse(this.responseText))
            // console.log(employees)
            //BUILD the template 
            var output = [];
            for(var i =0; i < employees.length; i++){
             console.log(employees)
             output += `
             <ul>
             <li>ID : ${employees[i].id} </li>
             <li>Name: ${employees[i].name} </li>
             <li>Company : ${employees[i].company}</li>
             <li>Job: ${employees[i].job}</li>
             </ul>
            `

            }
            console.log(output)
            document.getElementById('Employees').innerHTML = output
        }
    }
    xhr.send()
}



        