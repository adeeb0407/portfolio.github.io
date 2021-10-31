
const intro = {
    name : 'Adeeb Shah',
    occupation : 'Full Stack Developer'
}
const workingSoftwares = [
    {
        react : 'React JS',
        html : 'Firebase',
        bootstrap : 'MongoDB',
        node : 'Node JS',
        express : 'Express JS',
    }
]
const aboutme ={ 
    summary : `Mission-driven Full stack developer with a passion for thoughtful UI and UX design, Collaboration, And teaching.`,

    firstPart : `I'am Adeeb Saleem Shah, I am 20 years old,  I have majored in Computer Science and proficient 
                    in Full Stack Web Development, To be more spesific MERN STACK DEVELPMENT.I’ve always sought out opportunities and challenges that are meaningful to me.
                    I've never stopped engaging my passion to help others and solve problems. 
                    As a web developer, I enjoy using my obsessive attention to detail, my unequivocal love for making things, and my mission-driven work 
                    ethic to literally change the world. That's why I’m excited to make a big impact at a high growth company.`,

    secondPart : `I am a Tecnology Enthusiast, since my childhood i have been into technology 
                    therefore i am not just a Full Stack Web Developer, I do Ui/Ux Design , 
                    I can Build Computers, I can do Graphics Designing and little bit of Video Editting aswell`

}

const projectCardInfoMiniApp = [
    {
        id: 'stock',
        projectTitle : 'Stock Price Analyzer',
        imageSource : 'https://wallpaperaccess.com/full/1393720.jpg',
        moreInfoTitle : 'App Summary',
        information : 'The App takes input as Stock Price, Quantity of Stock Brought, The price of the Stock today and will give you the Absolute Value and Percentage of the Loss or Profit Gained or Lost ',
        projectLink : 'https://adeeb0407.github.io/Stock-Market-Analyser.github.io/',
    },
    {
        id: 'counter',
        projectTitle : 'The Cash Counter',
        imageSource : 'https://images.pexels.com/photos/5909798/pexels-photo-5909798.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        moreInfoTitle : 'App Summary',
        information : "The Cash Counter is a Cash register for a super market, where you should tell the cashier how the change needs to distributed, Cashier has currencies of 1, 2, 5, 10, 20, 100, 200, 500 & 2000",
        projectLink : 'https://adeeb0407.github.io/Cash-Counter.github.io/',
    },
]

const projectCardInfoStaticWebsite = [
    {
        id: 'hostcloud',
        projectTitle : 'Host Cloud',
        imageSource : require('./components/image/hostcloud.jpg').default,
        moreInfoTitle : 'Website Summary',
        information : "Host Cloud is a Static Web page Template, made with Advance CSS and Bootstrap",
        projectLink : 'https://adeeb0407.github.io/hostCloud.github.io/',
    },
    {
        id: 'plotlist',
        projectTitle : 'Plot List',
        imageSource : require('./components/image/plot.jpg').default,
        moreInfoTitle : 'Website Summary',
        information : "Plot List is a Static Web page Template, made with Advance CSS and Bootstrap",
        projectLink : 'https://adeeb0407.github.io/plotList.github.io/',
    },
    {
        id: 'simplehouse',
        projectTitle : 'Simple House',
        imageSource : require('./components/image/simple.jpg').default,
        moreInfoTitle : 'Website Summary',
        information : "Simple House is a Static Web page Template, made with Advance CSS and Bootstrap",
        projectLink : 'https://adeeb0407.github.io/simpleHouse.github.io/',
    },
    {
        id: 'metro',
        projectTitle : 'Metro City',
        imageSource : require('./components/image/gridmetro.jpg').default,
        moreInfoTitle : 'Website Summary',
        information : "Metro City is a Static Web page Template, made with Advance CSS such as Flex and Grid",
        projectLink : 'https://adeeb0407.github.io/MetroCity.github.io/',
    },
    {
        id: 'kassy',
        projectTitle : 'Kassy Cafe',
        imageSource : require('./components/image/cafe.jpg').default,
        moreInfoTitle : 'Website Summary',
        information : "Kassy Cafe is a Static Web page Template, made with Advance CSS such as Flex and Grid",
        projectLink : 'https://adeeb0407.github.io/KlassyCafe.github.io/',
    },
    {
        id: 'zay',
        projectTitle : 'Zay E-Commerce',
        imageSource : require('./components/image/zay.jpg').default,
        moreInfoTitle : 'Website Summary',
        information : "Zay E-Commerce is a Static Web page Template, made with Advance CSS such as Flex and Grid",
        projectLink : 'https://adeeb0407.github.io/zay-E-Commerce/',
    },
]

const firebaseproject = [
    {
        id: 'blogspace',
        projectTitle : 'BlogSpace',
        imageSource : require('./components/image/blogspace.jpg').default,
        moreInfoTitle : 'Website Summary',
        information : "A Blogging Website Made with firebase Realtime Database, ReactJS for UI and firebase Authentication for Authentication",
        projectLink : 'https://blogspaceweb.netlify.app/',
    },
    {
        id: 'ping',
        projectTitle : 'Ping',
        imageSource : require('./components/image/ping.jpg').default,
        moreInfoTitle : 'Website Summary',
        information : "A Chat App with GoogleAuthentication, can chat with anyone who in a group chat",
        projectLink : 'https://pingchat.netlify.app/',
    },
    {
        id: 'contactregister',
        projectTitle : 'Contact Register',
        imageSource : require('./components/image/contactregister.jpg').default,
        moreInfoTitle : 'Website Summary',
        information : "A Contacts Storage App, to store all the contacts with their information, used ReactJS for frontEnd adn Firebase for Storage",
        projectLink : 'https://contactregsiter.netlify.app/',
    }
]

const workExperience = [
    {
        id : 'amazon',
        companyName : 'Amazon',
        duration : 'Jan 2020 - Jan 2021',
        position : 'Web-Server Maintainence',
        description : 'Responsible for handling customer account inquiries, accurately providing information to resolve product/service complaints and guarantee customer satisfaction.',
        imageSource : require('./components/image/Amazon-Logo.png').default
    },
]

const resume = {
    downloadURL : require('./components/docs/Resume.pdf').default
}


export {intro, workingSoftwares, aboutme, projectCardInfoMiniApp, projectCardInfoStaticWebsite,firebaseproject, workExperience, resume}