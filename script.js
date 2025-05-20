document.addEventListener('DOMContentLoaded', function () {
  const input = document.getElementById('nueva-tarea');
  const btnAgregar = document.getElementById('agregar-btn');
  const lista = document.getElementById('lista-tareas');

  btnAgregar.addEventListener('click', function () {
    const tareaTexto = input.value.trim();
    if (tareaTexto === '') {
      alert('Por favor escribe una tarea.');
      return;
    }

    const li = document.createElement('li');
    li.textContent = tareaTexto;

    const btnOk = document.createElement('button');
    btnOk.textContent = 'ok';
    btnOk.addEventListener('click', function () {
      lista.removeChild(li);
    });

    li.appendChild(btnOk);
    lista.appendChild(li);
    input.value = '';
  });
});
