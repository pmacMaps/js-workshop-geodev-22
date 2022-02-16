// populate data into a shell table
export const buildTable = (table,features) => {
    for (const feature of features) {
        let newRow = table.insertRow(-1);
        addRow(newRow, feature.attributes.PARK_NAME);
        addRow(newRow, feature.attributes.PREMISE_ADDRESS);
        addRow(newRow, feature.attributes.PREMISE_CITY);
        addRow(newRow, feature.attributes.PREMISE_ZIP);
        addRow(newRow, setUrlContent(feature.attributes.URL));
    }
}

// insert a new row into table
const addRow = (row,value) => {
    let newCell = row.insertCell(-1);
    let div = document.createElement('div');
    div.innerHTML = value;
    newCell.appendChild(div);
}

// set content for URL field in map service
const setUrlContent = (data) => {
    if (!data) {
        return 'no website provided';
    } else {
        return data;
    }
}