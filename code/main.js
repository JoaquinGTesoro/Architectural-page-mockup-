//Objects
const houses =  [
    {
        id: 1,
        img:"/images/Horizontal-1.jpg",
        name: "Suburban <br> blue <br> house",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis facere ut, quam sit facilis aspernatur architecto eligendi molestias eius ab sunt modi, doloremque voluptatibus odit nostrum ipsum labore repellat quaerat?"
    },
    {
        id: 2,
        img:"/images/Horizontal-2.jpg",
        name: "Suburban <br>grey <br>house",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis facere ut, quam sit facilis aspernatur architecto eligendi molestias eius ab sunt modi, doloremque voluptatibus odit nostrum ipsum labore repellat quaerat?"
    },
    {
        id: 3,
        img: "/images/Horizontal-5.jpg",
        name: "Yellow <br>& stone <br>mansion",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis facere ut, quam sit facilis aspernatur architecto eligendi molestias eius ab sunt modi, doloremque voluptatibus odit nostrum ipsum labore repellat quaerat?"
    },
    {
        id: 4, 
        img: "/images/Horizontal-3.jpg",
        name: "Cottage <br>in <br>the woods", 
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium autem ab, placeat ipsa eum inventore eos consequatur doloremque debitis, reiciendis, neque ratione similique."
    },
];

const reviews = [
    {
        id: 1,
        name: "Elena Brown",
        job: "Manager from DC",
        img: "/images/reviews/girl-1.jpg",
        text: "Quick and concise communicators. Explores and provides options before final design. Innovative and professional staff. Would do business with again."
    },
    {
        id: 2,
        name: "Sofía Castro",
        job: "Engineer from California",
        img: "/images/reviews/girl-2.jpg",
        text: "Buhaus has been a quality organization to partner with as a subcontractor. They are well organized and clear on the expectations needed to meet their customers needs."
    },
    {
        id: 3,
        name: "Michael Meyers",
        job: "Lawyer from Spain",
        img: "/images/reviews/man-1.jpg",
        text: "Great team of professional and ethics minded people. They deliver on time and are very, very reliable and easy to work with. Rose architecture made our two last  project  very easy to permit and we were able to get a certificate of occupancy without any hassle.",
    },
    {
        id: 4,
        name: "Diego González",
        job: "Graphic Designer from Argentina",
        img: "/images/reviews/man-2.jpg",
        text: "Professional and easy to work with. Listened to my needs and readily had plans done.",
    }
];

//Selectors things to change
const houseImage1 = document.getElementById('house-image-1');
const houseTitle1 = document.getElementById('house-title-1');
const houseInfo1 = document.getElementById('house-info-1');
//house 2
const houseImage2 = document.getElementById('house-image-2');
const houseTitle2 = document.getElementById('house-title-2');
const houseInfo2 = document.getElementById('house-info-2');
//house 3
const houseImage3 = document.getElementById('house-image-3');
const houseTitle3 = document.getElementById('house-title-3');
const houseInfo3 = document.getElementById('house-info-3');


//Person 1 Review
const name1 = document.getElementById('name-1');
const img1 = document.getElementById('person-image-1');
const job1 = document.getElementById('job-1');
const review1 = document.getElementById('review-1');
//Person 2 Review
const name2 = document.getElementById('name-2');
const img2 = document.getElementById('person-image-2');
const job2 = document.getElementById('job-2');
const review2 = document.getElementById('review-2');


//Buttons
//house btn
const firstHouseBtn = document.getElementById('carrousel-1');
const secondHouseBtn = document.getElementById('carrousel-2');
//reviews btn
const nextBtn = document.getElementById('review-right');
const prevBtn = document.getElementById('review-left');

//Set current item house
let currentItemHouse = 0;

//Load initial house Item
window.addEventListener("DOMContentLoaded", function () {
    showHouse(currentItemHouse);
});

function showHouse(house) {
    //house 1 
    houseImage1.src = houses[house].img;
    houseTitle1.innerHTML = houses[house].name;
    houseInfo1.innerHTML = houses[house].text;
    //house 2
    house++;
    houseImage2.src = houses[house].img;
    houseTitle2.innerHTML = houses[house].name;
    houseInfo2.innerHTML = houses[house].text;
    //house 3
    house++;
    houseImage3.src = houses[house].img;
    houseTitle3.innerHTML = houses[house].name;
    houseInfo3.innerHTML = houses[house].text;
}

//Event listener
firstHouseBtn.addEventListener('click', function prevHouse () {
    if (currentItemHouse == 0) {
        void(0)
    } else {
        currentItemHouse--;
        showHouse(currentItemHouse);
        firstHouseBtn.style.color = "#bc6455";
        secondHouseBtn.style.color = "#6b6b6b";
    }    
})

secondHouseBtn.addEventListener('click', function nextHouse () {
    if (currentItemHouse == 1) {
        void(0);
    } else {
        currentItemHouse++;
        showHouse(currentItemHouse);
        firstHouseBtn.style.color = "#6b6b6b";
        secondHouseBtn.style.color = "#bc6455";
    }
    
})

//Set current item review
let currentItemReview = 0;

//Load initial item 
window.addEventListener("DOMContentLoaded", function () {
    showPerson(currentItemReview);
});

function showPerson(currentItemReview) {
    //person 1
    img1.src = reviews[currentItemReview].img;
    name1.textContent = reviews[currentItemReview].name;
    job1.textContent = reviews[currentItemReview].job;
    review1.textContent = reviews[currentItemReview].text;
    //person 2
    if (currentItemReview + 1 > reviews.length - 1) {
        currentItemReview = 0;
        
    } else {
        currentItemReview++;
    }
    img2.src = reviews[currentItemReview].img;
    name2.textContent = reviews[currentItemReview].name;
    job2.textContent = reviews[currentItemReview].job;
    review2.textContent = reviews[currentItemReview].text;
}

//Change person with buttons
nextBtn.addEventListener('click', function nextPerson() {
    currentItemReview++;
    if (currentItemReview > reviews.length - 1) {
        currentItemReview = 0;
    }
    showPerson(currentItemReview);
})

prevBtn.addEventListener('click', function prevPerson() {
    currentItemReview--;
    if (currentItemReview < 0) {
        currentItemReview = reviews.length - 1;
    }
    showPerson(currentItemReview);
})