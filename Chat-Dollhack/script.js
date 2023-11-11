function sendMessage() {
    // Obtener el mensaje del input
    var messageInput = document.querySelector('.message-input');
    var messageText = messageInput.value;

    if (messageText.trim() === '') {
        // No enviar mensajes vacíos
        return;
    }

    // Crear un nuevo mensaje
    var chatContent = document.querySelector('.message-container');
    var newMessage = document.createElement('div');
    newMessage.classList.add('message');
    newMessage.innerHTML = `
        <img src="img/user.jpg" alt="Professor 1">
        <div class="message-content">
            <div class="flex mb-1">
                <p class="font-medium flex-grow">Profe 1</p>
                <small class="message-time">Ahora</small>
            </div>
            <p class="overflow-ellipsis overflow-hidden block whitespace-nowrap text-gray-500">${messageText}</p>
        </div>
    `;

    // Agregar el nuevo mensaje al contenedor de chat
    chatContent.appendChild(newMessage);

    // Limpiar el input después de enviar el mensaje
    messageInput.value = '';
}

