let numberArray = [];

// User input the value
function addCutomervalue(){
    const inputvalue = document.getElementById("customValue").value;

    if(inputvalue.trim()===''){
        alert("please Enter a Some Numbers");
        return;
    }
    const values = inputvalue.split(",")
                    .map(item => parseFloat(item.trim()))
                    .filter(item => !isNaN(item));

    if(values.length===0){
        alert("Please Enter Valid Number")
        return;
    }
    numberArray = numberArray.concat(values);
    updateDisplayAndResult('add numbers','adds the number to array',numberArray);
    document.getElementById("customValue").value='';
}
// Push
function pushvalue(){
    const value = prompt("Enter a number to push");

    if (!isNaN(value) && value !== null && value !== "") {  
        numberArray.push(parseFloat(value));
        updateDisplayAndResult('Push', 'Adds a new element at the end of the array', numberArray);
    }      
}
// Pop
function popvalue(){
    if(numberArray.length===0){
        alert('Array is empty');
        return;
    }
    numberArray.pop()
    updateDisplayAndResult('pop', 'removes a last element of the array', numberArray);

}
// shift
function shiftvalue(){
if(numberArray.length===0){
    alert("Array IS Empty");
    return;
}
numberArray.shift()
updateDisplayAndResult('Shift', 'removes the First element of the array', numberArray);
}

// Unshift
function Unshiftvalue(){
    const value = prompt("Enter a number to Unshift");

    if (!isNaN(value) && value !== null && value !== "") {  
        numberArray.unshift(parseFloat(value));
        updateDisplayAndResult('Unshift', 'Adds a new element at the start of the array', numberArray);

}
}
// splice
function splicevalue(){
    const index = parseInt(prompt("Enter the index to start splicing:"));
    const count = parseInt(prompt("How Many Items to remove?"));
    const value = prompt("Enter value(s) to insert separated by commas (e.g., 4, 5):");
    const values = value.split(',').map(item => parseFloat(item.trim()));

    numberArray.splice(index,count, ...values);
    updateDisplayAndResult('Splice', 'Changes the contents of the array by removing or replacing elements', numberArray);
}

// slice
function slicevalue(){
    const start = parseInt(prompt("Enter the Start index:"));
    const end = parseInt(prompt("Enter the last index:"));
    const sliced = numberArray.slice(start,end);
    updateDisplayAndResult('Slice', 'Returns a shallow copy of a portion of the array', sliced);

}
// reduce

function reducevalue(){
    const sum = numberArray.reduce((acc,curr) => acc + curr,0);
    updateDisplayAndResult('Reduce', 'Applies a function against an accumulator and each element', sum);
}

// reverse 
function reversevalue(){
    numberArray.reverse();
    updateDisplayAndResult('Reverse', 'Reverses the elements of the array', numberArray);

}



function updateDisplayAndResult(operation, definition, result){
    document.getElementById("arrayDisplay").textContent=JSON.stringify(result);
    document.getElementById("operationresult").innerHTML = `<strong> ${operation} </strong>: ${definition} <br>
    <strong>Update Array:</strong> ${JSON.stringify(result)};`
}