// function adds content to a table
export const buildTable = (table, data) => {
    for (const element of data) {
        let newRow = table.insertRow(-1);
        for (const entry in element) {
            //console.log(element[entry]);
            addRow(newRow, element[entry]);
        }
    }
}

// insert a new row into table
const addRow = (row,value) => {
    let newCell = row.insertCell(-1);
    let div = document.createElement('div');
    div.innerHTML = value;
    newCell.appendChild(div);
}