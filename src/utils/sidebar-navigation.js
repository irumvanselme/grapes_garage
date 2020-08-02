import { faUserPlus, faHome, faListAlt, faCog, faShoppingCart, faEnvelopeOpen, faSearch, faTasks, faCar, faTimes, faSpinner, faPlusSquare, faCheckSquare, faCarCrash, faPlusCircle }
    from "@fortawesome/free-solid-svg-icons";

export const sidebarNavigation = [
    {
        id: '1',
        title: "",
        items: [
            {
                id: '1-2',
                name: "Home",
                link: "/",
                icon: faHome,
                displayTitle: 'Home'
            }
        ]
    },
    {
        id: '2',
        title: "Employees",
        items: [
            {
                id: '2-1',
                name: "New",
                link: "/employees/new",
                icon: faUserPlus,
                displayTitle: 'New Employee'
            },
            {
                id: '2-2',
                name: "Existing",
                link: "/employees/existing",
                icon: faListAlt,
                displayTitle: 'Existing Employees'
            },
            {
                id: '2-3',
                name: "Settings",
                link: "/employees/settings",
                icon: faCog,
                displayTitle: 'Employee Settings'
            }
        ]
    },
    {
        id: '3',
        title: "Clients",
        items: [
            {
                id: '3-1',
                name: "New",
                link: "/clients/new",
                icon: faPlusCircle,
                displayTitle: 'New Client'
            },
            {
                id: '3-2',
                name: "Existing",
                link: "/clients/existing",
                icon: faListAlt,
                displayTitle: 'Existing Clients'
            },
            {
                id: '3-3',
                name: "Payments",
                icon: faShoppingCart,
                displayTitle: 'Payments',
                subItems: [
                    {
                        id: '3-3-1',
                        name: "Completed",
                        link: "/clients/payments/paid",
                        icon: faCheckSquare,
                        displayTitle: 'Completed Payments'
                    },
                    {
                        id: '3-3-2',
                        name: "Not Completed",
                        link: "/clients/payments/not-paid",
                        icon: faTimes,
                        displayTitle: 'Uncompleted Payments'
                    },
                    {
                        id: '3-3-3',
                        name: "Search",
                        link: "/clients/payments/search",
                        icon: faSearch,
                        displayTitle: 'Search Payment'
                    }
                ]
            },
            {
                id: '3-4',
                name: "Messages",
                link: "/clients/messages",
                icon: faEnvelopeOpen,
                displayTitle: 'Messages'
            },
            {
                id: '3-5',
                name: "Search",
                link: "/clients/search",
                icon: faSearch,
                displayTitle: 'Search'
            },
            {
                id: '3-6',
                name: "Settings",
                link: "/clients/settings",
                icon: faCog,
                displayTitle: 'Settings'
            }
        ]
    },
    {
        id: '4',
        title: "Tasks",
        items: [
            {
                id: '4-1',
                name: "Tasks",
                icon: faTasks,
                displayTitle: 'Tasks',
                subItems: [
                    {
                        id: '4-1-1',
                        name: "New",
                        link: "/tasks/new",

                        icon: faPlusSquare,
                        displayTitle: 'New Task',

                    },
                    {
                        id: '4-1-2',
                        name: "Progressing",
                        link: "/tasks/pending",
                        icon: faSpinner,
                        displayTitle: 'Pending Task',
                    },
                    {
                        id: '4-1-3',
                        name: "Completed",
                        link: "/tasks/done",
                        icon: faCheckSquare,
                        displayTitle: 'Completed Task',
                    }
                ]
            },
            {
                id: '4-2',
                name: "Search",
                link: "/tasks/search",
                icon: faSearch,
                displayTitle: 'Search Tasks',
            },
            {
                id: '4-3',
                name: "Settings",
                link: "/tasks/settings",
                icon: faCog,
                displayTitle: 'Settings',
            }
        ]
    },
    {
        id: '5',
        title: "Cars",
        items: [

            {
                id: '5-1',
                name: "Cars",
                icon: faCar,
                displayTitle: 'Cars',
                subItems: [
                    {
                        id: '5-1-1',
                        name: "New Car",
                        link: "/cars/repair",
                        icon: faPlusSquare,
                        displayTitle: 'New Car',
                    },
                    {
                        id: '5-1-2',

                        name: "Repaired Cars",

                        link: "/cars/repaired",
                        icon: faCarCrash,
                        displayTitle: 'Repaired Cars',
                    },
                    {
                        id: '5-1-3',
                        name: "Search",
                        link: "/cars/search",
                        icon: faSearch,
                        displayTitle: 'Search Cars',
                    }
                ]
            },
            {
                id: '5-2',
                name: "Settings",
                link: "/cars/settings",
                icon: faCog,
                displayTitle: 'Settings',
            }
        ]
    }
];