let onSubmit = () => {

    let form = {
        bookTitle: document.querySelector("#title").value,
        bookImage: document.querySelector("#image").value,
        bookDescription: document.querySelector("#description").value
    }

    JSON.stringify(form);

};