// json fetch
fetch("books.json")
    .then(res => res.json())
    .then(books => {
        const bookContainer = document.getElementById("bookContainer");

        books.forEach(book => {
            const card = document.createElement("div");
            card.classList.add("bookCard");

            card.innerHTML = `
        <div class="cardFront">
          <h2 class="bookName">${book.title}
          </h2>
          <img class="bookCover" src="${book.img}" alt="Book cover">
          <div class="bookAuthor">
            <h3 class="author">${book.author}</h3>
          </div>
          <div class="bookDets">
            <h4>My Rating:</h4>
            <p class="rating">${book.rating} / 5</p>
            <h4>Avg. Rating:</h4>
            <p class="rating">${book.avgRating} / 5</p>
          </div>
        </div>
        <div class="cardBack">
          <p>${book.summary}</p>
        </div>
      `;

            bookContainer.appendChild(card);
        });
    });

// sign up js
document.getElementById("signup-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const nameRegex = /^[A-Za-z\s]{2,}$/;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!nameRegex.test(name) || !emailRegex.test(email)) {
        alert("Invalid name or email.");
    } else {
        alert("Sign up successful!");
    }
});