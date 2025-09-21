import ServiceIconOne from '../svg/service/service-icon-1'
import ServiceIconTwo from '../svg/service/service-icon-2'
import ServiceIconThree from '../svg/service/service-icon-3'
import ServiceIconFoure from '../svg/service/service-icon-4'
import ServiceIconFive from '../svg/service/service-icon-5'
import ServiceIconsix from '../svg/service/service-icon-6'
import ServiceIconSeven from '../svg/service/service-icon-7'

const service_data = [
    // for home 01
    {
        id: 1,
        icon: '/assets/img/service/sv-icon-1.png',
        img: '/assets/img/service/sv-icon-1.png',
        title: 'AI Data Analysis',
        description: (
            <>
                Lorem Ipsum is simply dummy text <br /> of the printing
            </>
        ),
        width: 46, height: 46, delay: '.4s'
    },
    {
        id: 2,
        icon: '/assets/img/service/sv-icon-2.png',
        img: '/assets/img/service/sv-icon-2.png',
        title: 'Machine Learning',
        description: (
            <>
                Lorem Ipsum is simply dummy text <br /> of the printing
            </>
        ),
        width: 46, height: 48, delay: '.6s'
    },
    {
        id: 3,
        icon: '/assets/img/service/sv-icon-3.png',
        img: '/assets/img/service/sv-icon-3.png',
        title: 'Data Visualization',
        description: (
            <>
                Lorem Ipsum is simply dummy text <br /> of the printing
            </>
        ),
        width: 46, height: 48, delay: '.7s'
    },
    {
        id: 4,
        icon: '/assets/img/service/sv-icon-4.png',
        img: '/assets/img/service/sv-icon-4.png',
        title: 'Business Intelligence',
        description: (
            <>
                Lorem Ipsum is simply dummy text <br /> of the printing
            </>
        ),
        width: 46, height: 48, delay: '.8s'
    },
    {
        id: 5,
        icon: '/assets/img/service/sv-icon-5.png',
        img: '/assets/img/service/sv-icon-5.png',
        title: 'Artificial Intelligence',
        description: (
            <>
                Lorem Ipsum is simply dummy text <br /> of the printing
            </>
        ),
        width: 37, height: 46, delay: '.9s'
    },

    // for home 03
    {
        id: 6,
        icon: <ServiceIconOne />,
        img: <ServiceIconOne />,
        title: 'Project management jamil',
        description: (
            <>
                Automate Workflows <br /> and Monitor your Sales.
            </>
        ),
        width: 0, height: 0, delay: '.9s'
    },
    {
        id: 7,
        icon: <ServiceIconTwo />,
        img: <ServiceIconTwo />,
        title: 'Sales analytics',
        description: <>Track your Marketing to see the best Results.</>,
        width: 0, height: 0, delay: '.9s'
    },
    {
        id: 8,
        icon: <ServiceIconThree />,
        img: <ServiceIconThree />,
        title: 'Easy Invoicing',
        description: <>Automate recurring invoices and save time.</>,
        width: 0, height: 0, delay: '.9s'
    },
    {
        id: 9,
        icon: <ServiceIconFoure />,
        img: <ServiceIconFoure />,
        title: 'Complete Visibility',
        description: <>Get real-time visibility into every expense.</>,
        width: 0, height: 0, delay: '.9s'
    },

    // for home 04
    {
        id: 10,
        icon: '/assets/img/service/sv-icon-4-1.png',
        img: '/assets/img/service/sv-icon-4-1.png',
        title: 'Cyber Security Solustions jamil',
        sub_title: 'Cloud Backup',
        cls: '1',
        description: (
            <>
                Lorem Ipsum is simply dummy text <br /> of the printing
            </>
        ),
        width: 76, height: 90, delay: '.9s'
    },
    {
        id: 11,
        icon: '/assets/img/service/sv-icon-4-2.png',
        img: '/assets/img/service/sv-icon-4-2.png',
        title: 'AI Data Cloud Solution',
        sub_title: 'Cloud Backup',
        cls: '2',
        description: (
            <>
                Lorem Ipsum is simply dummy text <br /> of the printing
            </>
        ),
        width: 105, height: 70, delay: '.9s'
    },
    {
        id: 12,
        icon: '/assets/img/service/sv-icon-4-3.png',
        img: '/assets/img/service/sv-icon-4-3.png',
        title: (
            <>
                Managed <br /> Web Application
            </>
        ),
        sub_title: 'Cloud Backup',
        cls: '3',
        description: (
            <>
                Lorem Ipsum is simply dummy text <br /> of the printing
            </>
        ),
        width: 100, height: 96, delay: '.9s'
    },
    {
        id: 13,
        icon: '/assets/img/service/sv-icon-4-4.png',
        img: '/assets/img/service/sv-icon-4-4.png',
        title: '24//7 Customer Support',
        sub_title: 'Cloud Backup',
        cls: '4',
        description: (
            <>
                Lorem Ipsum is simply dummy text <br /> of the printing
            </>
        ),
        width: 80, height: 75, delay: '.9s'
    },

    // for home 05
    {
        id: 14,
        icon: '/assets/img/service/sv-icon-5-1.png',
        img: '/assets/img/service/sv-icon-5-1.png',
        title: (
            <>
                Live Inventory <br /> Management
            </>
        ),
        sub_title: 'Cloud Backup',
        cls: '4',
        description: <>Track materials and stock for outsourced purchase orders</>,
        width: 60, height: 60, delay: '.9s'
    },
    {
        id: 15,
        icon: '/assets/img/service/sv-icon-5-2.png',
        img: '/assets/img/service/sv-icon-5-2.png',
        title: (
            <>
                Real-time Master <br /> Planning
            </>
        ),
        sub_title: 'Cloud Backup',
        cls: '4',
        description: <>Track materials and stock for outsourced purchase orders</>,
        width: 71, height: 69, delay: '.9s'
    },
    {
        id: 16,
        icon: '/assets/img/service/sv-icon-5-3.png',
        img: '/assets/img/service/sv-icon-5-3.png',
        title: (
            <>
                Easy Contract <br /> Manufacturing
            </>
        ),
        sub_title: 'Cloud Backup',
        cls: '4',
        description: <>Track materials and stock for outsourced purchase orders</>,
        width: 58, height: 58, delay: '.9s'
    },
    {
        id: 17,
        icon: '/assets/img/service/sv-icon-5-4.png',
        img: '/assets/img/service/sv-icon-5-4.png',
        title: (
            <>
                Omnichannel <br /> Order Management
            </>
        ),
        sub_title: 'Cloud Backup',
        cls: '4',
        description: <>Track materials and stock for outsourced purchase orders</>,
        width: 54, height: 50, delay: '.9s'
    },

    // service page
    {
        id: 18,
        icon: <ServiceIconOne />,
        img: <ServiceIconOne />,
        title: 'Project management jamil',
        description: (
            <>
                Automate Workflows <br /> and Monitor your Sales.
            </>
        ),
        width: 66, height: 53, delay: '.9s'
    },
    {
        id: 19,
        icon: <ServiceIconTwo />,
        img: <ServiceIconTwo />,
        title: 'Sales analytics',
        description: <>Track your Marketing to see the best Results.</>,
        width: 56, height: 56, delay: '.9s'
    },
    {
        id: 20,
        icon: <ServiceIconThree />,
        img: <ServiceIconThree />,
        title: 'Easy Invoicing',
        description: <>Automate recurring invoices and save time.</>,
        width: 52, height: 48, delay: '.9s'
    },
    {
        id: 21,
        icon: <ServiceIconFoure />,
        img: <ServiceIconFoure />,
        title: 'Complete Visibility',
        description: <>Get real-time visibility into every expense.</>,
        width: 56, height: 56, delay: '.9s'
    },

    {
        id: 22,
        icon: <ServiceIconFive />,
        img: <ServiceIconFive />,
        title: 'FIELDS OPTION',
        description: <>Quick & Easy Repeater Fields Option</>,
        width: 54, height: 54, delay: '.9s'
    },

    {
        id: 23,
        icon: <ServiceIconsix />,
        img: <ServiceIconsix />,
        title: 'Safe Online Services',
        description: <>Online services to view company level.</>,
        width: 53, height: 58, delay: '.9s'
    },

    {
        id: 24,
        icon: <ServiceIconSeven />,
        img: <ServiceIconSeven />,
        title: 'Online marketing',
        description: <>Get real-time visibility into every expense.</>,
        width: 66, height: 53, delay: '.9s'
    }
]
export default service_data
