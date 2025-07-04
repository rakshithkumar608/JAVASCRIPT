document.addEventListener("DOMContentLoaded", function () {
    const list = document.getElementById("draggableList");
    const items = list.getElementsByClassName("list-group-item");

    for (let item of items) {
        item.addEventListener("dragstart", handleDragStart);
        item.addEventListener("dragend", handleDragEnd);
        item.addEventListener("dragover", handleDragOver);
        item.addEventListener("drop", handleDrop);
    }

    function handleDragStart(e) {
        this.classList.add("dragging");
        e.datatransfer.setData("text/plain", this.innerHTML);
    }

    function handleDragEnd(e) {
        this.classList.remove("dragging");
      }

    function handleDragOver(e) {
        e.preventDefault();
        this.classList.add("drag-over");
    }

    function handleDrop(e) {
        e.preventDefault();
        this.classList.remove("drag-over");

       
     const draggingItem = list.querySelector(".dragging");
     const dropTraget = this;

        if (draggingItem !== dropTraget) {
            const temp = dropTraget.innerHTML;
            dropTraget.innerHTML = draggingItem.innerHTML;
            draggingItem.innerHTML = temp;
        }
    }
});