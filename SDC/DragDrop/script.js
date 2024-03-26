const shapes = document.querySelectorAll('.shape');
const targets = document.querySelectorAll('.target');

let draggedShape = null;

// Event listeners for drag and drop
shapes.forEach(shape => {
  shape.addEventListener('dragstart', dragStart);
  shape.addEventListener('dragend', dragEnd);
});

targets.forEach(target => {
  target.addEventListener('dragover', dragOver);
  target.addEventListener('dragenter', dragEnter);
  target.addEventListener('dragleave', dragLeave);
  target.addEventListener('drop', drop);
});

function dragStart() {
  draggedShape = this;
  setTimeout(() => (this.style.display = 'none'), 0);
}

function dragEnd() {
  draggedShape.style.display = 'block';
  draggedShape = null;
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.style.border = '2px solid black';
}

function dragLeave() {
  this.style.border = '2px dashed black';
}

function drop() {
  this.style.border = '2px dashed black';
  this.appendChild(draggedShape);
}
