function createTable() {
  
    let rn = prompt("Input number of rows");
    
    let cn = prompt("Input number of columns");

    rn = parseInt(rn);
    cn = parseInt(cn);

    
    if (isNaN(rn) || isNaN(cn)) {
        alert("Please enter numeric values only.");
        return;
    }

    if (rn <= 0 || cn <= 0) {
        alert("Row and column numbers must be greater than 0.");
        return;
    }


    const table = document.getElementById("myTable");

    table.innerHTML = "";

   
    for (let i = 0; i < rn; i++) {
        let row = table.insertRow(); 

        for (let j = 0; j < cn; j++) {
            let cell = row.insertCell();
            cell.innerText = `Row-${i} Column-${j}`; 
        }
    }
}