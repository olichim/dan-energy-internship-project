import Services from "../services/Services"

export const nav = [{
        text: "home",
        path: "/",
    },
    {
        text: "about",
        path: "/about",
    },
    {
        text: "event",
        path: "/services",
    },
    {
        text: "contact",
        path: "/contact",
    },
]
export const featured = [{
        cover: "../images/hero/h1.png",
        name: "Social Welfare",
        total: "122 Services",
description:"Social Welfare Volunteers in a volunteer organization work to improve the well-being of individuals, communities, and society as a whole. They provide support, services, and resources to those in need, often in areas such as healthcare, education, and social services. Volunteers may assist with tasks like fundraising, event planning, and community outreach, and may also provide emotional support and companionship to those they serve."

    },
    {
        cover: "../images/hero/h2.png",
        name: "Community Development",
        total: "155 Services",
description:"Community Development Volunteers in a Volunteer Organization work to improve the lives of marginalized communities by implementing projects that address social, economic, and environmental issues. They partner with local organizations, engage in community outreach, and provide resources to support sustainable development. Their efforts focus on empowerment, education, and capacity building to create lasting positive change."

    },
    {
        cover: "../images/hero/h3.png",
        name: "Education",
        total: "300 Services",
description:"Education Volunteers in a volunteer organization refer to individuals who dedicate their time and skills to support educational programs, projects, and activities. They may assist in teaching, mentoring, tutoring, or administrative tasks to promote learning and development among students, teachers, or communities"

    },
    {
        cover: "../images/hero/h4.png",
        name: "Healthcare",
        total: "80 Services",
description:"Healthcare Volunteers in a volunteer organization are individuals who dedicate their time and skills to provide medical and healthcare services to those in need, often in underserved communities. They may assist with tasks such as patient care, medical screenings, health education, and administrative support, aiming to improve healthcare outcomes and promote overall well-being."

    },
    {
        cover: "../images/hero/h6.png",
        name: "Environmental Conservation",
        total: "80 Services",
 description:"Environmental Conservation Volunteers in a volunteer organization work to protect and preserve the natural world by participating in activities such as Habitat restoration and conservation Wildlife monitoring and research Pollution cleanup and prevention Education and outreach programs"


    },
]
export const list = [{
        id: 1,
        cover: "../images/list/p-1.png",
        name: "Homeless Shelters",
        location: "Event date",
        category: "Event",
        type: "Social Welfare",
    },
    {
        id: 2,
        cover: "../images/list/p-2.png",
        name: "Small Business Development",
        location: "Event date",
        category: "Event",
        type: "Community Development",
    },
    {
        id: 3,
        cover: "../images/list/p-7.png",
        name: "Medical Clinics ",
        location: "Event date",
        category: "Event",
        type: "Healthcare",
    },
    {
        id: 4,
        cover: "../images/list/p-4.png",
        name: "Mental Health Services",
        location: "Event date",
        category: "Event",
        type: "Healthcare",
    },
    {
        id: 5,
        cover: "../images/list/p-5.png",
        name: "Recycling Programs",
        location: "Event date",
        category: "Event",
        type: "Conservation",
    },
    {
        id: 6,
        cover: "../images/list/p-6.png",
        name: "STEM Education",
        location: "Event date",
        category: "Event",
        type: "Education",
    },
]
export const awards = [{
        icon: < i class = 'fa-solid fa-trophy' > < /i>,
        num: "32 M	",
        name: "Blue Burmin Award",
    },
    {
        icon: < i class = 'fa-solid fa-briefcase' > < /i>,
        num: "43 M",
        name: "Mimo X11 Award",
    },
    {
        icon: < i class = 'fa-solid fa-lightbulb' > < /i>,
        num: "51 M",
        name: "Australian UGC Award",
    },
    {
        icon: < i class = 'fa-solid fa-heart' > < /i>,
        num: "42 M",
        name: "IITCA Green Award",
    },
]
export const location = [{
        id: 1,
        name: "Paris,France",
        Services: "10 Services",
        cover: "./images/location/city-1.png",
    },
    {
        id: 2,
        name: "Jerrsy, United State",
        Services: "9 Services",
        cover: "./images/location/city-2.png",
    },
    {
        id: 3,
        name: "Liverpool, London",
        Services: "11 Services",
        cover: "./images/location/city-3.png",
    },
    {
        id: 4,
        name: "NewYork, United States",
        Services: "15 Services",
        cover: "./images/location/city-4.png",
    },
    {
        id: 5,
        name: "Montreal, Canada",
        Services: "10 Services",
        cover: "./images/location/city-5.png",
    },
    {
        id: 6,
        name: "California, USA",
        Services: "10 Services",
        cover: "./images/location/city-6.png",
    },
]
export const team = [{
        list: "50",
        cover: "../images/customer/team-1.jpg",
        address: "Liverpool, Canada",
        name: "Sargam S. Singh",
        icon: [ < i class = 'fa-brands fa-facebook-f' > < /i>, <i class='fa-brands fa-linkedin'></i > , < i class = 'fa-brands fa-twitter' > < /i>, <i class='fa-brands fa-instagram'></i > ],
    },
    {
        list: "70",
        cover: "../images/customer/team-2.jpg",
        address: "Montreal, Canada",
        name: "Harijeet M. Siller",
        icon: [ < i class = 'fa-brands fa-facebook-f' > < /i>, <i class='fa-brands fa-linkedin'></i > , < i class = 'fa-brands fa-twitter' > < /i>, <i class='fa-brands fa-instagram'></i > ],
    },
    {
        list: "80",
        cover: "../images/customer/team-3.jpg",
        address: "Denever, USA",
        name: "Anna K. Young",
        icon: [ < i class = 'fa-brands fa-facebook-f' > < /i>, <i class='fa-brands fa-linkedin'></i > , < i class = 'fa-brands fa-twitter' > < /i>, <i class='fa-brands fa-instagram'></i > ],
    },
    {
        list: "51",
        cover: "../images/customer/team-4.jpg",
        address: "2272 Briarwood Drive",
        name: "Michael P. Grimaldo",
        icon: [ < i class = 'fa-brands fa-facebook-f' > < /i>, <i class='fa-brands fa-linkedin'></i > , < i class = 'fa-brands fa-twitter' > < /i>, <i class='fa-brands fa-instagram'></i > ],
    },
    {
        list: "42",
        cover: "../images/customer/team-5.jpg",
        address: "2272 Briarwood Drive",
        name: "Michael P. Grimaldo",
        icon: [ < i class = 'fa-brands fa-facebook-f' > < /i>, <i class='fa-brands fa-linkedin'></i > , < i class = 'fa-brands fa-twitter' > < /i>, <i class='fa-brands fa-instagram'></i > ],
    },
    {
        list: "38",
        cover: "../images/customer/team-5.jpg",
        address: "Montreal, USA",
        name: "Adam K. Jollio",
        icon: [ < i class = 'fa-brands fa-facebook-f' > < /i>, <i class='fa-brands fa-linkedin'></i > , < i class = 'fa-brands fa-twitter' > < /i>, <i class='fa-brands fa-instagram'></i > ],
    },
]


export const blue = [{
        list: "50",
        cover: "../images/customer/team-1.jpg",
        address: "Liverpool, Canada",
        name: "Sargam S. Singh",
        icon: [ < i class = 'fa-brands fa-facebook-f' > < /i>, <i class='fa-brands fa-linkedin'></i > , < i class = 'fa-brands fa-twitter' > < /i>, <i class='fa-brands fa-instagram'></i > ],
    },
    {
        list: "70",
        cover: "../images/customer/team-2.jpg",
        address: "Montreal, Canada",
        name: "Harijeet M. Siller",
        icon: [ < i class = 'fa-brands fa-facebook-f' > < /i>, <i class='fa-brands fa-linkedin'></i > , < i class = 'fa-brands fa-twitter' > < /i>, <i class='fa-brands fa-instagram'></i > ],
    },
    {
        list: "80",
        cover: "../images/customer/team-3.jpg",
        address: "Denever, USA",
        name: "Anna K. Young",
        icon: [ < i class = 'fa-brands fa-facebook-f' > < /i>, <i class='fa-brands fa-linkedin'></i > , < i class = 'fa-brands fa-twitter' > < /i>, <i class='fa-brands fa-instagram'></i > ],
    },


]

export const price = [{
            plan: "Basic",
            price: "29",
            ptext: "per user, per month",
            list: [{
                    icon: < i class = 'fa-solid fa-check' > < /i>,
                    text: "99.5% Uptime Guarantee",
                },
                {
                    icon: < i class = 'fa-solid fa-check' > < /i>,
                    text: "120GB CDN Bandwidth",
                },
                {
                    icon: < i class = 'fa-solid fa-check' > < /i>,
                    text: "5GB Cloud Storage",
                },
                {
                    change: "color",
                    icon: < i class = 'fa-solid fa-x' > < /i>, text: "Personal Help Support" }, {
                        change: "color",
                        icon: < i class = 'fa-solid fa-x' > < /i>, text: "Enterprise SLA" },
                    ],
                },
                {
                    best: "Best Value",
                    plan: "Standard",
                    price: "49",
                    ptext: "per user, per month",
                    list: [{
                            icon: < i class = 'fa-solid fa-check' > < /i>,
                            text: "99.5% Uptime Guarantee",
                        },
                        {
                            icon: < i class = 'fa-solid fa-check' > < /i>,
                            text: "150GB CDN Bandwidth",
                        },
                        {
                            icon: < i class = 'fa-solid fa-check' > < /i>,
                            text: "10GB Cloud Storage",
                        },
                        {
                            icon: < i class = 'fa-solid fa-check' > < /i>,
                            text: "Personal Help Support",
                        },
                        {
                            change: "color",
                            icon: < i class = 'fa-solid fa-x' > < /i>,
                            text: "Enterprise SLA",
                        },
                    ],
                },
                {
                    plan: "Platinum",
                    price: "79",
                    ptext: "2 user, per month",
                    list: [{
                            icon: < i class = 'fa-solid fa-check' > < /i>,
                            text: "100% Uptime Guarantee",
                        },
                        {
                            icon: < i class = 'fa-solid fa-check' > < /i>,
                            text: "200GB CDN Bandwidth",
                        },
                        {
                            icon: < i class = 'fa-solid fa-check' > < /i>,
                            text: "20GB Cloud Storage",
                        },
                        {
                            icon: < i class = 'fa-solid fa-check' > < /i>,
                            text: "Personal Help Support",
                        },
                        {
                            icon: < i class = 'fa-solid fa-check' > < /i>,
                            text: "Enterprise SLA",
                        },
                    ],
                },
            ]
            export const footer = [{
                    title: "LAYOUTS",
                    text: [{ list: "Home Page" }, { list: "About Page" }, { list: "Service Page" }, { list: "Property Page" }, { list: "Contact Page" }, { list: "Single Blog" }],
                },
                {
                    title: "ALL SECTIONS",
                    text: [{ list: "Headers" }, { list: "Features" }, { list: "Attractive" }, { list: "Testimonials" }, { list: "Videos" }, { list: "Footers" }],
                },
                {
                    title: "COMPANY",
                    text: [{ list: "About" }, { list: "Blog" }, { list: "Pricing" }, { list: "Affiliate" }, { list: "Login" }, { list: "Changelog" }],
                },
            ]
