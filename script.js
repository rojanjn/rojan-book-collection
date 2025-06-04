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
const signUpFormValidation = () => {
    document.getElementById("signup-form").addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();

        const nameRegex = /^[A-Za-z\s]{2,}$/;
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

        const errorMessage = document.getElementById("error-message");

        if (!nameRegex.test(name) || !emailRegex.test(email)) {
            errorMessage.style.display = "block";
        } else {
            errorMessage.style.display = "none";
            alert("Sign up successful!");
        }
    });

    // Hide error message on focus
    ["name", "email"].forEach(id => {
        document.getElementById(id).addEventListener("focus", () => {
            document.getElementById("error-message").style.display = "none";
        });
    });
};
window.addEventListener("DOMContentLoaded", signUpFormValidation);
