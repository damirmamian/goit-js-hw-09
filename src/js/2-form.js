const form = document.querySelector(".feedback-form");
let formData = {
    email: "",
    message: ""
};

const savedData = localStorage.getItem("feedback-form-state");
if (savedData) {
    const parsedData = JSON.parse(savedData) || {};

    formData.email = parsedData.email?.trim() || "";
    formData.message = parsedData.message?.trim() || "";

    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
}

function FormInput(event) {
    const { name, value } = event.target;

    if (name !== "email" && name !== "message") {
        return;
    }

    formData[name] = value.trim();
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));

    console.log("Логування при введенні:", formData);
}


function FormSubmit(event) {
    event.preventDefault();

    if (!formData.email || !formData.message) {
        alert("Fill in all fields");
        return;
    }

    console.log("Об'єкт formData при відправцi:", formData);

    localStorage.removeItem("feedback-form-state");
    form.reset();

    formData = { email: "", message: "" };
}

form.addEventListener("input", FormInput);
form.addEventListener("submit", FormSubmit);