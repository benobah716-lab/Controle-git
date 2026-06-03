
    function addTask() {
        const input = document.getElementById("taskInput");
        const taskText = input.value.trim();

        if (taskText === "") return;

        const li = document.createElement("li");

        const span = document.createElement("span");
        span.textContent = taskText;

        span.addEventListener("click", () => {
            span.classList.toggle("completed");
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Supprimer";
        deleteBtn.className = "delete-btn";

        deleteBtn.addEventListener("click", () => {
            li.remove();
        });

        li.appendChild(span);
        li.appendChild(deleteBtn);

        document.getElementById("taskList").appendChild(li);

        input.value = "";
    }

