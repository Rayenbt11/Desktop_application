    // Display saved items on page load
    window.addEventListener('DOMContentLoaded', function () {
      displaySavedItems();
    });

    function newElement() {
      var inputValue = document.getElementById("myInput").value;

      if (inputValue === '') {
        alert("Please enter a title.");
        return;
      }

      // Save input in local database
      saveInput(inputValue);

      var li = document.createElement("li");
      var text = document.createTextNode(inputValue);
      li.appendChild(text);
      
      // Create close button
      var span = document.createElement("SPAN");
      var txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      li.appendChild(span);

      document.getElementById("myUL").appendChild(li);

      // Clear the input field
      document.getElementById("myInput").value = "";

      // Add event listener to remove button
      span.onclick = function() {
        var div = this.parentElement;
        var itemText = div.firstChild.textContent;
        div.style.display = "none";

        // Remove from local database
        removeInput(itemText);
      };
    }

    function saveInput(inputValue) {
      var existingItems = localStorage.getItem('todoItems');
      var todoItems = existingItems ? JSON.parse(existingItems) : [];
      todoItems.push(inputValue);
      localStorage.setItem('todoItems', JSON.stringify(todoItems));
    }

    function removeInput(itemText) {
      var existingItems = localStorage.getItem('todoItems');
      var todoItems = existingItems ? JSON.parse(existingItems) : [];
      var index = todoItems.indexOf(itemText);
      if (index > -1) {
        todoItems.splice(index, 1);
        localStorage.setItem('todoItems', JSON.stringify(todoItems));
      }
    }

    function displaySavedItems() {
      var existingItems = localStorage.getItem('todoItems');
      if (existingItems) {
        var todoItems = JSON.parse(existingItems);
        var ul = document.getElementById("myUL");
        todoItems.forEach(function (item) {
          var li = document.createElement("li");
          var text = document.createTextNode(item);
          li.appendChild(text);

          // Create close button
          var span = document.createElement("SPAN");
          var txt = document.createTextNode("\u00D7");
          span.className = "close";
          span.appendChild(txt);
          li.appendChild(span);

          ul.appendChild(li);

          // Add event listener to remove button
          span.onclick = function() {
            var div = this.parentElement;
            var itemText = div.firstChild.textContent;
            div.style.display = "none";

            // Remove from local database
            removeInput(itemText);
          };
        });
      }
    }