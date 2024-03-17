import './Releases.sass';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import backgroundImage from './assets/background.jpeg';
import oceanSkiesImage from './assets/occean-skies.jpeg';
import everythingsOkayImage from './assets/everythings-okay.jpeg';
import title from './assets/title.svg';

export const Releases = () => {
    const background = {
        color: 'black',
        image: `url(${backgroundImage})`
    }

    const releases = [
        {
            title: 'Ocean Skies',
            image: oceanSkiesImage,
            link: 'https://ampl.ink/7jD7y'
        },
        {
            title: "Everything's Okay",
            image: everythingsOkayImage,
            link: "https://ampl.ink/v06yY"
        }
    ];

    return (
        <section id='releases' className='releases' style={{ backgroundColor: background.color, backgroundImage: background.image }}>
            <img className='title' src={title} alt='Releases' />
            <div className='container'>
                <div className='release'>
                    <h1>{releases[0].title}</h1>
                    <LazyLoadImage
                        src={releases[0].image}
                        alt={releases[0].title}
                        threshold={500}
                    />
                    <a href={releases[0].link} className='button'>stream / purchase</a>
                </div>
                <div className='release'>
                    <h1>{releases[1].title}</h1>
                    <LazyLoadImage
                        src={releases[1].image}
                        alt={releases[1].title}
                        threshold={500}
                    />
                    <a href={releases[1].link} className='button'>stream / purchase</a>
                </div>
            </div>
        </section>
    )
};
