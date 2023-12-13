import servicesData from "@/core/constants/services.json";

const servicesList = servicesData.vertices.services.map((service) => ({
    label: service.title,
    pathName: 'DevDockServiceDetails',
    subTitle: service?.megaMenuData.subTitle,
    icon: service?.megaMenuData.icon,
    param: { title: service.id }
}))

export const menuLinks = [
    {
        label: 'Services',
        pathName: 'DevDockServices',
        hasSubLinks: true,
        megaMenuLabel: 'Our Services',
        menuOpen: false,
        subLinks: servicesList
    },
    {
        label: 'Portfolio',
        pathName: 'DevDockPortfolio',
        hasSubLinks: false,
        subLinks: []
    },
    {
        label: 'Company',
        hasSubLinks: true,
        megaMenuLabel: 'Company',
        menuOpen: false,
        subLinks: [
            {
                label: 'About Us',
                pathName: 'DevDockAboutUs',
                subTitle: 'Did you know we all are a family'
            },
            {
                label: 'Contact Us',
                pathName: 'DevDockContactUs',
                subTitle: 'Let’s have a cup of coffee'
            }
        ]
    }
]

export const headingImages = [
    {
        src: '/svg/connect_hand.svg',
        alt: 'Connect SVG'
    },
    {
        src: '/img/hire_01.webp',
        alt: 'Connect SVG'
    },
    {
        src: '/img/hire_02.webp',
        alt: 'Connect SVG'
    },
]

export const featuresCardContent = {
    totalReasons: 4,
    highlighted: 'Reasons,',
    heading: 'Why You Should Choose DevDock Services',
    features: [
        {
            startText: 'We Offer',
            highlightedText: 'Customized',
            endText: 'Approach',
            desc: 'We understand that every client and project is unique. Our agency takes a personalized approach, tailoring our services to your specific needs and goals. This ensures that the final product aligns perfectly with your vision and objectives.',
            image: 'connection.svg',
            alt: 'Connection',
            color: '#EBFAFE',
            darkText: true
        },
        {
            startText: 'We Focus on',
            highlightedText: 'Educating',
            endText: 'Your Users',
            desc: 'Our agency boasts a team of seasoned professionals with years of experience in product development. We have a track record of delivering successful projects across various industries, ensuring your product is in capable hands.',
            image: 'laptop.svg',
            alt: 'Laptop',
            color: '#FFE8BC',
            darkText: true
        },
        {
            startText: 'We Provide',
            highlightedText: 'Innovative',
            endText: 'Solutions',
            desc: 'We pride ourselves on staying at the forefront of technology trends and innovation. When you choose our agency, you gain access to cutting-edge solutions and approaches that can give your product a competitive edge in the market.',
            image: 'lens.svg',
            alt: 'Lens',
            color: '#BCDFFF',
            darkText: true
        },
        {
            startText: 'Timely Delivery',
            highlightedText: '&&',
            endText: 'Cost Efficiency',
            desc: 'We are committed to delivering your product on time and within budget. Our efficient project management processes and cost-effective strategies help you maximize the return on your investment while minimizing potential delays.',
            image: 'sparrow.svg',
            alt: 'Sparrow',
            color: 'primary',
            darkText: false
        },
    ]
}
