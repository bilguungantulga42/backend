import { Meteor } from "meteor/meteor";
import { TodosCollection } from "../imports/api/todos";

function insertTodo({ title, deadline, progress }) {
  TodosCollection.insert({ title, deadline, progress, createdAt: new Date() });
}

Meteor.startup(() => {
  // If the Todos collection is empty, add some data.
  if (TodosCollection.find().count() === 0) {
    insertTodo({
      title: "A",
      deadline: "2022-05-13",
      progress: 75,
    });

    insertTodo({
      title: "B",
      deadline: "2022-05-16",
      progress: 100,
    });

    insertTodo({
      title: "C",
      deadline: "2022-05-20",
      progress: 0,
    });

    insertTodo({
      title: "D",
      deadline: "2022-05-20",
      progress: 31,
    });
  }
});
