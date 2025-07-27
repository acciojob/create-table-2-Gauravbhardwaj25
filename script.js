function createTable() {
    // Step 1: यूज़र से rows की संख्या पूछना
    let rn = prompt("Input number of rows");
    
    // Step 2: यूज़र से columns की संख्या पूछना
    let cn = prompt("Input number of columns");

    // Step 3: दोनों इनपुट को नंबर में बदलना
    rn = parseInt(rn);
    cn = parseInt(cn);

    // Step 4: चेक करना कि input वैलिड है या नहीं
    if (isNaN(rn) || isNaN(cn)) {
        alert("Please enter numeric values only.");
        return;
    }

    if (rn <= 0 || cn <= 0) {
        alert("Row and column numbers must be greater than 0.");
        return;
    }

    // Step 5: HTML में existing table को reference करना
    const table = document.getElementById("myTable");

    // Step 6: पहले से बनी table को साफ कर देना
    table.innerHTML = "";

    // Step 7: rows और columns बनाना
    for (let i = 0; i < rn; i++) {
        let row = table.insertRow(); // नई row बनाना

        for (let j = 0; j < cn; j++) {
            let cell = row.insertCell(); // नई cell बनाना
            cell.innerText = `Row-${i} Column-${j}`; // cell का content सेट करना
        }
    }
}