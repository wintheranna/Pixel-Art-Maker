// table
let table = document.querySelector('#pixelCanvas');

// submit button
let submit = document.querySelector('input[type=submit');
submit.addEventListener('click', makeGrid);

// create pixel table, prevent default; (no page refresh)
function makeGrid (submission) {
  table.innerHTML = null;
  submission.preventDefault();
  // Select size input
  let height = document.querySelector('#inputHeight').value;
  let width = document.querySelector('#inputWidth').value;
  for (let r = 0; r < height; r++) {
    let row = document.createElement('tr');
    table.appendChild(row);
      for (let c = 0; c < width; c++) {
        let column = document.createElement('td');
        row.appendChild(column);
  // paint table cells
  column.addEventListener('click', function(pixel) {
  // select color  
  let color = document.querySelector('#colorPicker').value;
  pixel.target.style.backgroundColor = color;
  });
      }
  }
}
