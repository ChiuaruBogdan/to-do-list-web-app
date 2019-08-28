
   window.ToDoList = {
      API_BASE_URL: "http://localhost:8083/to-do-items",

       createItem: function () {
          var description = $ ("#description-field").val();
          var deadline = $ ("#deadline-picker").val();

          // $$$ = simbol JQuery

          var item = {
              description: description,
              deadline: deadline
       };

       $.ajax({
           url: ToDoList.API_BASE_URL,
           method: "POST",
           //MIME type mai jos
           contentType: "application/json",
           data: JSON.stringify(item)
       }).done(function (response) {
           console.log("Successfully received response");
           console.log(response)
   })
},
       //mai jos e pentru evenimente, clickuri si toate cele
       bindEvents: function () {

          $('#new-item-form').submit(function (event) {
              event.preventDefault();

              ToDoList.createItem();
          });
       }

};
   ToDoList.bindEvents();
