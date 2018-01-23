function toDoItem(desc, date) {
  this.describe = desc;
  this.date = date;
}

$(document).ready(function() {
  $("form#todo-Form").submit(function(event) {
    event.preventDefault();
    var toDoTask = $("input#todo-Desc").val();
    var toDoDate = $("input#todo-Date").val();
    var newtoDoItem = new toDoItem(toDoTask, toDoDate);

    $(".toDo").show();
    $("ul#todo-List").append("<li class='thing'><span class='thisItem'> I need to " + newtoDoItem.describe + ", by " + newtoDoItem.date + "</span></li>");

    $("li.thing").unbind().click(function() {
      var thisDescribe = $(this).text();
      $(".done").show();
      $("ul#done-List").append("<li>" + thisDescribe + "</li>");
      $(this).remove();
    });
  });
});
