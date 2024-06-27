const personal = document.getElementById("personal-information");
const contact = document.getElementById("contact-information");
const professional = document.getElementById("professional-information");

fetch("https://dummyjson.com/users/1")
  .then((result) => result.json())
  .then((user) => {

    const image = document.createElement("img");
    image.setAttribute("src", user.image);
    image.setAttribute("alt", user.firstName);
    image.classList.add("user-image");

    const name = document.createElement("h2");
    name.classList.add("user-name");
    name.innerText = `${user.firstName} ${user.lastName}`;

    const age = document.createElement("p");
    age.classList.add("user-age");
    age.innerHTML = `<i class="fas fa-birthday-cake"></i> Age: ${user.age}`;

    const email = document.createElement("p");
    email.classList.add("user-email");
    email.innerHTML = `<i class="fas fa-envelope"></i> Email: ${user.email}`;

    personal.appendChild(image);
    personal.appendChild(name);
    personal.appendChild(age);
    personal.appendChild(email);

    const phone = document.createElement("p");
    phone.classList.add("user-phone");
    phone.innerHTML = `<i class="fas fa-phone"></i> Phone: ${user.phone}`;

    const address = document.createElement("p");
    address.classList.add("user-address");
    address.innerHTML = `<i class="fas fa-map-marker-alt"></i> Address: ${user.address.address}, ${user.address.city}, ${user.address.state}, ${user.address.postalCode}, ${user.address.country}`;

    contact.appendChild(phone);
    contact.appendChild(address);

    const company = document.createElement("p");
    company.classList.add("user-company");
    company.innerHTML = `<i class="fas fa-building"></i> Company: ${user.company.name}`;

    const jobTitle = document.createElement("p");
    jobTitle.classList.add("user-job-title");
    jobTitle.innerHTML = `<i class="fas fa-briefcase"></i> Job Title: ${user.company.title}`;

    const department = document.createElement("p");
    department.classList.add("user-department");
    department.innerHTML = `<i class="fas fa-sitemap"></i> Department: ${user.company.department}`;

    professional.appendChild(company);
    professional.appendChild(jobTitle);
    professional.appendChild(department);
  })
