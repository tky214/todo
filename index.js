const form = document.getElementById("form");
const input = document.getElementById("input");
const ul = document.getElementById("ul");

const todos = JSON.parse(localStorage.getItem("todos"));

if (todos) {
    todos.forEach(todo => {
        add(todo);
    })
}
// ボタン押したとき
form.addEventListener("submit", function (event) {
    event.preventDefault();
    add();
});

function add(todo) {
    let todotext = input.value;

    if (todo) {
        todotext = todo.text;
    }

    // タスクを作成
    if (todotext) {
    const li =document.createElement("li");
    li.innerText = todotext;
    li.classList.add("list-group-item");

    // 更新しても消えなくする
    if (todo && todo.completed) {
        li.classList.add
        ("text-decoration-line-through");

    }

    // 右クリック押されたとき削除
    li.addEventListener("contextmenu", function(event) {
        event.preventDefault();
        li.remove();
        saveData();
    });

    // 左クリックしたときチェック
    li.addEventListener("click", function () {
        li.classList.toggle
        ("text-decoration-line-through");
        saveData();
    });

    ul.appendChild(li);
    input.value = "";
    saveData();
    }
}

function saveData() {
    const lists =document.querySelectorAll("li");
    let todos = [];

    lists.forEach(list => {
        let todo = {
            text:list.innerText,
            completed: list.classList.contains
            ("text-decoration-line-through")
        };
        todos.push(todo);
    });
    // localStorageでブラウザにデータ保持
    localStorage.setItem("todos", JSON.stringify(todos));
}