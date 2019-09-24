/**
 * @description
 * creates a table for given array of objects
 * @param {Array<Object>} tbdata
 */
export function populateTable(tbdata) {
  // eslint-disable-next-line
  const table = document.createElement('table');
  table.setAttribute('border', '1');
  table.setAttribute('width', '100%');

  const header = table.insertRow(0);
  let headerColCount = 0;
  for (let key in tbdata[0]) {
    if (tbdata[0].hasOwnProperty(key)) {
      // eslint-disable-next-line
      const text = document.createTextNode(key);
      const cell = header.insertCell(headerColCount);
      cell.appendChild(text);
      headerColCount++;
    }
  }
  for (let i = 0; i < tbdata.length; i++) {
    const row = table.insertRow(i + 1);
    let j = 0;
    for (let key in tbdata[i]) {
      if (tbdata[i].hasOwnProperty(key)) {
        let text;
        switch (tbdata[i][key]) {
          case true:
            // eslint-disable-next-line
            text = document.createTextNode('yes');
            break;
          case false:
            // eslint-disable-next-line
            text = document.createTextNode('no');
            break;
          default:
            // eslint-disable-next-line
            text = document.createTextNode(tbdata[i][key]);
        }
        const cell = row.insertCell(j);
        cell.appendChild(text);
        j++;
      }
    }
  }
  // eslint-disable-next-line
  document.body.appendChild(table);
}
