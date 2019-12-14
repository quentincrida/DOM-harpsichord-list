document.addEventListener('DOMContentLoaded', () => {
  console.log("Instruments have landed");
  const newItemForm = document.querySelector('#new-item-form');
  newItemForm.addEventListener('submit', handleNewItemFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
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
  instrument.textContent = `Instrument: ${form.instrument.value}`;
  instrumentListItem.appendChild(instrument);

  const nationality = document.createElement('h3');
  nationality.textContent = `Country of Origin: ${form.nationality.value}`;
  instrumentListItem.appendChild(nationality);

  const manuals = document.createElement('h3');
  manuals.textContent = `Number of Manuals: ${form.manuals.value}`;
  instrumentListItem.appendChild(manuals);

  const authenticity = document.createElement('h4');
  authenticity.textContent = `Authenticity level: ${form.authenticity.value}`;
  instrumentListItem.appendChild(authenticity);

  const decorated = document.createElement('h4');
  decorated.textContent = `Level of Decoration: ${form.decorated.value}`;
  instrumentListItem.appendChild(decorated);

  const luteStop = document.createElement('h4');
  luteStop.textContent = `Lute Stop: ${form.lutestop.value}`;
  instrumentListItem.appendChild(luteStop);


  return instrumentListItem;
}





const handleDeleteAllClick = function (event) {
  const instrumentList = document.querySelector('#instrument-list');
  instrumentList.innerHTML = '';
}
