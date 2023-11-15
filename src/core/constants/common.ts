export const menuLinks = [
    {
        label: 'Services',
        pathName: 'SiteServices',
        hasSubLinks: true,
        subLinks: [
            {
                label: 'UI/UX',
                pathName: 'SiteServiceDetails'
            }
        ]
    },
    {
        label: 'Portfolio',
        pathName: 'SitePortfolio',
        hasSubLinks: false,
        subLinks: []
    },
    {
        label: 'Company',
        hasSubLinks: true,
        subLinks: [
            {
                label: 'About Us',
                pathName: 'AboutUs'
            },
            {
                label: 'Contact Us',
                pathName: 'ContactUs'
            }
        ]
    }
]

export const footerBannerHeading = 'Help us spread the word and sell good vibes. Follow!'

export const companyLinks = ['About', 'Hire Us', 'Contact Us']
export const servicesLinks = ['Web Development', 'UI/UX', 'MVP Design', 'All Services']
export const resourcesLinks = ['Blog', 'Media Kit', 'All Time Reviews', 'Leave a review on Trust Pilot']

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
            startText: 'We offer',
            highlightedText: 'Customized',
            endText: 'approach',
            desc: 'We understand that every client and project is unique. Our agency takes a personalized approach, tailoring our services to your specific needs and goals. This ensures that the final product aligns perfectly with your vision and objectives.',
            image: 'connection.svg',
            alt: 'Connection',
            color: '#EBFAFE',
            darkText: true
        },
        {
            startText: 'We focus on',
            highlightedText: 'Educating',
            endText: 'your users',
            desc: 'Our agency boasts a team of seasoned professionals with years of experience in product development. We have a track record of delivering successful projects across various industries, ensuring your product is in capable hands.',
            image: 'laptop.svg',
            alt: 'Laptop',
            color: '#FFE8BC',
            darkText: true
        },
        {
            startText: 'We provide',
            highlightedText: 'Innovative',
            endText: 'solutions',
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

export const clientReviews = {
    heading: 'See what our clients are saying!',
    reviews: [
        {
            color: 'calamansi',
            name: 'hen (Stone) Shi',
            avatar: 'shaoke_ceo.webp',
            desc: 'Shaoke Logistics - CEO',
            logo: 'shaoke.svg',
            review: 'I am shocked that dev dock process is super simple, and he provides proper results even though my internee manager has no problem understanding it.'
        },
        {
            color: 'lace',
            name: 'Hammad Afridi',
            avatar: 'commkit_ceo.webp',
            desc: 'Manager at Commkit',
            logo: 'commkit.svg',
            review: 'Very professional. Respond well on the needs of the client. Efficient and reliable in delivering output.'
        },
        {
            color: 'water',
            name: 'Micheal McNair',
            avatar: 'spotswap_ceo.webp',
            desc: 'Founder of SpotSwap',
            logo: 'spotswap.svg',
            review: 'Excellent work on the website coding, fully responsive and was very co operative in terms of making further changes after the first revision. Will be working soon again.'
        },
    ]
}
