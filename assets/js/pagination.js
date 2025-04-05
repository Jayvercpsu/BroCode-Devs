const testimonialsData = [
    { name: "Jennifer Lopez", role: "CEO, Fashion Forward", img: "https://i.pravatar.cc/100?img=5", text: "BroCode Devs transformed our business! Our conversions increased by 45%." },
    { name: "Michael Chen", role: "Product Manager, FitLife", img: "https://i.pravatar.cc/100?img=12", text: "The Android app exceeded all our expectations. Highly recommend!" },
    { name: "Sarah Williams", role: "COO, Global Solutions", img: "https://i.pravatar.cc/100?img=20", text: "Their custom CRM changed our workflow completely. Amazing team!" },
    { name: "David Johnson", role: "CTO, Tech Innovations", img: "https://i.pravatar.cc/100?img=21", text: "Outstanding service! Their website design boosted our traffic." },
    { name: "Emily Davis", role: "Founder, Green Earth", img: "https://i.pravatar.cc/100?img=22", text: "Great experience working with BroCode Devs!" },
    { name: "Robert Martinez", role: "Director, SkyTech", img: "https://i.pravatar.cc/100?img=23", text: "The e-commerce solution they built for us is perfect!" },
    { name: "Jessica Brown", role: "CEO, Trendy Styles", img: "https://i.pravatar.cc/100?img=24", text: "They delivered beyond expectations. 10/10 service!" },
    { name: "Daniel Wilson", role: "Manager, Foodie Hub", img: "https://i.pravatar.cc/100?img=25", text: "Super professional team! Our business saw great growth." },
    { name: "Sophia Miller", role: "Lead Developer, CodeCrafters", img: "https://i.pravatar.cc/100?img=26", text: "Their technical expertise is truly impressive!" },
    { name: "James Anderson", role: "CEO, Media Works", img: "https://i.pravatar.cc/100?img=27", text: "Their designs are stunning, and performance is top-notch!" }
];

const testimonialsContainer = document.querySelector(".testimonials");
const paginationContainer = document.querySelector(".pagination");

let currentPage = 0;
const itemsPerPage = 3;

function renderTestimonials() {
    testimonialsContainer.innerHTML = "";
    paginationContainer.innerHTML = "";

    const start = currentPage * itemsPerPage;
    const end = start + itemsPerPage;
    const pageItems = testimonialsData.slice(start, end);

    pageItems.forEach((testimonial) => {
        const testimonialElement = document.createElement("div");
        testimonialElement.classList.add("testimonial", "active");
        testimonialElement.innerHTML = `
            <p>"${testimonial.text}"</p>
            <div class="client-info">
                <img src="${testimonial.img}" alt="Client">
                <div>
                    <h4>${testimonial.name}</h4>
                    <span>${testimonial.role}</span>
                </div>
            </div>
        `;
        testimonialsContainer.appendChild(testimonialElement);
    });

    const totalPages = Math.ceil(testimonialsData.length / itemsPerPage);

    // Add Prev Button
    const prevBtn = document.createElement("button");
    prevBtn.classList.add("prev-btn");
    prevBtn.innerHTML = "&#10094;"; // Left arrow
    prevBtn.disabled = currentPage === 0;
    prevBtn.addEventListener("click", () => {
        if (currentPage > 0) {
            currentPage--;
            renderTestimonials();
        }
    });
    paginationContainer.appendChild(prevBtn);

    // Add Page Number
    const pageNumber = document.createElement("span");
    pageNumber.classList.add("page-number");
    pageNumber.innerHTML = `Page ${currentPage + 1} of ${totalPages}`;
    paginationContainer.appendChild(pageNumber);

    // Add Next Button
    const nextBtn = document.createElement("button");
    nextBtn.classList.add("next-btn");
    nextBtn.innerHTML = "&#10095;"; // Right arrow
    nextBtn.disabled = currentPage === totalPages - 1;
    nextBtn.addEventListener("click", () => {
        if (currentPage < totalPages - 1) {
            currentPage++;
            renderTestimonials();
        }
    });
    paginationContainer.appendChild(nextBtn);
}

renderTestimonials(); 
