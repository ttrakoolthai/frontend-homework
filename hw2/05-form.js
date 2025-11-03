document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("userForm");
    const modalBody = document.getElementById("modalBody");

    form.addEventListener("submit", (e) => {
        // Prevent page reload
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const status = document.getElementById("status").value;

        // Get checked courses
        const courses = [];
        document
            .querySelectorAll('input[type="checkbox"]')
            .forEach((checkbox) => {
                if (checkbox.checked) courses.push(checkbox.value);
            });

        const message = document.getElementById("message").value.trim();

        // Build modal content
        modalBody.innerHTML = `
        <p><strong>Full Name:</strong> ${name || "N/A"}</p>
        <p><strong>Email:</strong> ${email || "N/A"}</p>
        <p><strong>Registration Status:</strong> ${status || "N/A"}</p>
        <p><strong>Courses Taken:</strong> ${
            courses.length ? courses.join(", ") : "None"
        }</p>
        <p><strong>Additional Message:</strong> ${message || "N/A"}</p>
      `;

        // Display modal
        const myModal = new bootstrap.Modal(
            document.getElementById("formModal")
        );
        myModal.show();

        // Reset form
        form.reset();
    });
});
