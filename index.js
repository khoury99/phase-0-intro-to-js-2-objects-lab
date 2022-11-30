let employee = {name:'Elijah', streetAddress:'2020 Oak Road'}
function updateEmployeeWithKeyAndValue (obj,key, value){
    const newObj = {...obj}

    newObj[key] = value;
    
    return newObj;
}
function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
   
    obj[key] = value; //
   
    return obj;
}

function deleteFromEmployeeByKey(employee, key){

    const copyOfemployee = {...employee}

    delete copyOfemployee[key]
    
    return copyOfemployee;
    
}
function destructivelyDeleteFromEmployeeByKey(employee, key){

   delete employee[key]
   return employee;
   
}


// employee(...)
// console.log(employees) 
