
import { Card } from '../Card/Card'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import game from './images/game.png';
import weather from './images/weather.png';
import singolo from './images/singolo.png';
import flex from './images/flex.png';

const project_list = [
    {
        id: '0',
        name: 'Weather App',
        description: 'App - weather forecast',
        img: weather,
        demoLink: 'https://yauheni-beiduk.github.io/Fancy-weather/',
        gitlink: 'https://github.com/yauheni-beiduk/Fancy-weather'
    },
    {
        id: '1',
        name: 'Raindrop Game',
        description: 'A math simulator that allows you to consolidate the skills of arithmetic operations',
        img: game,
        demoLink: 'https://yauheni-beiduk.github.io/Raindrops/',
        gitlink: 'https://github.com/yauheni-beiduk/Raindrops'
    },
    {
        id: '2',
        name: 'Simple Singolo',
        description: 'Page by layout "Singolo"',
        img: singolo,
        demoLink: 'https://yauheni-beiduk.github.io/simple-singolo/',
        gitlink: 'https://github.com/yauheni-beiduk/simple-singolo'
    },
    {
        id: '3',
        name: 'Flex Panel',
        description: 'Beautiful animated image slider',
        img: flex,
        demoLink: 'https://yauheni-beiduk.github.io/Flex-Panel-Gallery/',
        gitlink: 'https://github.com/yauheni-beiduk/Flex-Panel-Gallery'
    },

]

const renderCard = (project_list) => {
    return project_list.map(project => {return (<Card key={project.id} project={project} />)} )
}



export const Main = () => {
    return (
        <div className='App'>
            <Header />
            <div>{renderCard(project_list)}</div>
            <Footer />
        </div>
    )
}


















