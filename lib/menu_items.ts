export interface MenuItem {
    name: string;
    path: string;
    title: string;
    subtitle: string;
}

export const menuItems = [
    { 
        name: 'Home',
        path: '/',
        title: 'Turn moments into memories.',
        subtitle: 'Functions and catering perfectly crafted for you.'
    },
    { 
        name: 'Menu', 
        path: '/menu',
        title: 'Discover Our menu',
        subtitle: 'EQ Cafe and Bakehouse Menu provides diverse options for catering, cakes, and functions. Select from our delicious cakes and convenient catering packs for any event.'},
    { 
        name: 'Catering', 
        path: '/catering',
        title: 'The Catering Experts',
        subtitle: 'At EQ Cafe and Bakehouse, we are corporate catering and function specialists, offering a variety of delicious options for morning selections, lunch, and catering packs. Browse our updated catering menu below and contact our friendly staff to help organize your next event.'

     },
    { 
        name: 'Functions',
        path: '/functions',
        title: ' Host Your Functions With Us!',
        subtitle: 'Our elegant function space sets the perfect backdrop for your special occasions. Whether it\'s a birthday, anniversary, or corporate event, let us create unforgettable memories for you and your guests.'
     },
    {  
       name: 'Cakes',
       path: '/cakes' ,
       title: 'Order Your Perfect Cake Today',
       subtitle: 'Note: For cake orders, we kindly request at least 24 hours\’ notice. If you have an urgent request, please feel free to reach out to us. Thank you!'
      },
    { 
        name: 'Locations',
        path: '/locations',
        title: 'Our Store Locations',
        subtitle: 'Welcome to EQ Cafe and Bakehouse! We are proud to serve you at our various locations. Each of our stores offers exceptional service and a welcoming atmosphere. Visit us at any of our six locations listed below:'
    },
    { 
        name: 'Gallery',
        path: '/gallery',
        title: 'Gallery',
        subtitle: 'We invite you to visit our restaurant'
    },
    { 
        name: 'Contact',
        path: '/contact',
        title: 'Contact us',
        subtitle: 'Reach out to us for any questions, reservations, or feedback. We\'re here to assist you and ensure your experience at EQ Cafe is exceptional.'
     },
  ];