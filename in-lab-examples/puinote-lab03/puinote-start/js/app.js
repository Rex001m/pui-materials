

//definitions

function updateElement() {
    const noteImageElement = document.querySelector('.notecard-thumbnail');
    noteImageElement.src = notecard.noteImageURL;
  }

  const notecard =
{
  noteTitle: 'This is the Title of the Note!',
  noteBody: 'And here is the body of the note.',
  noteImageURL: 'assets/warhol-frog.png',
};

//code

console.log('started app')
updateElement();



const noteImageElement = documennt.querySelector('.notecard-thumbnail');
console.log(noteImageElement);

noteImageElement.src = 'assets/warhol-frog.png';
