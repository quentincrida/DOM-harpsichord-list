document.addEventListener('DOMContentLoaded', () => {
  const newItemForm = document.querySelector('#new-item-form');
  newItemForm.addEventListener('submit', handleNewItemFormSubmit);

  const deleteAllButton = docment.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);

})

const handleNewItemFormSubmit = function (event) {
  event.preventDefault();

  const instrumentListItem = createInstrumentListItem(event.target);
  const instrumentList = document.querySelector('#instrument-list');
  instrumentList.appendChild(instrumentListItem);

  event.target.reset();
}

const createInstrumentListItem = function (form) {
  const instrumentListItem = document.createElement('li');
  instrumentListItem.classList.add('instrument-list-item');

  const instrument = document.createElement('h2');
  instrument.textContent = form.instrument.value;
  
}
