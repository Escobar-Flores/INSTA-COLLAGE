function init() {
  let container = document.querySelector('.img-container-js');
  for (var i = 0; i < data.length; i++) {
    let newImage = document.createElement('img');
    newImage.setAttribute('src', '../../assets/images/' + data[i].uri);
    newImage.setAttribute('class', 'img-thumbnail');
    newImage.setAttribute('class', 'img-style');
    newImage.setAttribute('draggable', 'true');
    newImage.setAttribute('id', data[i].id);
    container.appendChild(newImage);
  };

  document.addEventListener('dragstart', start);
  document.addEventListener('dragover', dragOver);
  document.addEventListener('drop', drop);

  function start(event) {
    event.dataTransfer.setData('text', event.target.getAttribute('id'));
  };

  function dragOver(event) {
    event.preventDefault();
  };

  function drop(event) {
    event.preventDefault();
    if (event.target.classList.contains('prueba')) {
      let idFoto = event.dataTransfer.getData('text');
      let movingImage = document.getElementById(idFoto);
      event.target.appendChild(movingImage);
      movingImage.classList.remove('img-style');
      movingImage.classList.add('w-100');
      movingImage.classList.add('h-100');
    };
  };
};

window.addEventListener('load', init);