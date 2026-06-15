
const facts = [
    "🩷 Every child deserves love, care, and a safe place to live.",
    "📚 Education can break the cycle of poverty.",
    "🌱 Small acts of kindness can change lives.",
    "🤝 Volunteers make communities stronger.",
    "🌍 Together we can make a difference.",
    "🏠 Thousands of children find safe homes through support programs every year.",
    "🎒 Millions of children still lack access to basic school supplies.",
    "🍎 A healthy meal helps children learn and grow better."
];

document.getElementById("fact").addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * facts.length);
    this.textContent = facts[randomIndex];
});

setInterval(() => {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById("fact").textContent = facts[randomIndex];
}, 2000);

window.addEventListener("load", function () {
    setTimeout(function () {
        const loader = document.getElementById("loader");
        loader.style.opacity = "0";
        setTimeout(function () {
            loader.style.display = "none";
        }, 1000);
    }, 8000);
});

const quotes = [
    "💛 No act of kindness, no matter how small, is ever wasted.",
    "🌱 A single seed of kindness can grow into a forest of hope.",
    "🤝 Together, we can make a difference.",
    "✨ Kindness is free. Sprinkle it everywhere.",
    "🌍 Be the reason someone believes in good people.",
    "😊 Small actions create big changes.",
    "❤️ Helping one person might not change the world, but it could change their world.",
    "☀️ Carry sunshine into someone's life today.",
    "🌼 Compassion is the heart of every strong community.",
    "💫 Every kind word plants a seed of happiness."
]

function openPopup() {
    document.getElementById("donatePopup").style.display = "flex";
}

function closePopup() {
    document.getElementById("donatePopup").style.display = "none";
}

function payNow() {

    const name = document.getElementById("donorName").value;
    const email = document.getElementById("donorEmail").value;
    const amount = document.getElementById("donationAmount").value;

    if (!name || !email || !amount) {
        alert("Please fill all fields.");
        return;
    }

    alert(
        "Thank you " + name +
        "! Payment gateway will be connected here. ❤️"
    );
}

document.getElementById("quoteBtn").addEventListener("click", function () {

    const randomIndex = Math.floor(Math.random() * quotes.length);

    document.getElementById("quote").innerHTML =
        quotes[randomIndex];

});

function openVolunteerPopup() {
    document.getElementById("volunteerPopup").style.display = "flex";
}

function closeVolunteerPopup() {
    document.getElementById("volunteerPopup").style.display = "none";
}

function submitVolunteer() {

    const name =
        document.getElementById("volunteerName").value;

    const phone =
        document.getElementById("volunteerPhone").value;

    if (!name || !phone) {
        alert("Please fill all fields 😊");
        return;
    }

    document.querySelector("#volunteerPopup .popup-content").innerHTML = `
        <h2>🎉 Thank You!</h2>

        <p>
            Thank you for being a volunteer, ${name}! 🤝❤️🌟
        </p>

        <p>
            Welcome to the Sampark family 💛😊
        </p>

        <a href="https://chat.whatsapp.com/INNDAycMQcN6G53BeuFwp3"
           target="_blank"
           class="donate-btn"
           style="text-decoration:none;display:inline-block;">
           Join Volunteer Group 🚀
        </a>
    `;
}

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", function () {
    window.scrollTo(0, 0);
});

//DARK MODE//
const darkBtn = document.getElementById("darkModeBtn");

darkBtn.onclick = function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        darkBtn.textContent = "☀️";
    } else {
        darkBtn.textContent = "🌙";
    }

};

function openHelpPopup() {
    document.getElementById("helpPopup").style.display = "flex";
}

function closeHelpPopup() {
    document.getElementById("helpPopup").style.display = "none";
}

function submitHelp() {

    const name = document.getElementById("helpName").value;
    const phone = document.getElementById("helpPhone").value;
    const location = document.getElementById("helpLocation").value;
    const type = document.getElementById("helpType").value;
    const description = document.getElementById("helpDescription").value;

    if (
        !name ||
        !phone ||
        !location ||
        !type ||
        !description
    ) {
        alert("Please fill all fields 😊");
        return;
    }

    document.querySelector("#helpPopup .popup-content").innerHTML = `
        <h2>✅ Request Submitted</h2>

        <p>
            Thank you, ${name}! ❤️
        </p>

        <p>
            Your request has been received.
        </p>

        <p>
            Our Sampark team will contact you soon. 🤝
        </p>

        <p>
            Stay strong 🌟
        </p>
    `;
}

function paymentDone() {

    document.getElementById("paymentStatus").style.display = "none";

    document.getElementById("thankYouMsg").innerHTML =
        "🎉 Donation Received! 🎉<br><br>🙏 Thank you for supporting Sampark 💛";

}

function toggleMenu() {

    document
        .querySelector(".nav-links")
        .classList.toggle("active");

}
