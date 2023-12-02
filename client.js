const evenSource = new EventSource("http://localhost:3000");

function updateMessage(msg) {
  const list = document.getElementById("messages");
  const item = document.createElement("p");

  item.textContent = msg;
  list.appendChild(item);
}

evenSource.onmessage = function (e) {
  updateMessage(e.data);
};

evenSource.onerror = function () {
  updateMessage("Server closed connection");
  evenSource.close();
};
