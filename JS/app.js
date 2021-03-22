// your JavaScript goes here, you can delete this comment
const todoList = [{todo: "finish lab 11", status: "started"}, 
                {todo: "finish readings", status: "complete"},
                {todo: "clean room", status: "started"},
                {todo: "eat breakfast", status: "complete"}]

const completedTodos = []

todoList.forEach(function(element) {
    if (element.status === "complete") {
        completedTodos.push(element)
    }
})

for (const {todo, status} of completedTodos) {
    console.log(todo);
}