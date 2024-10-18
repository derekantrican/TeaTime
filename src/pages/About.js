import './Content.css';
import { useEffect } from "react";
import ReactGA from "react-ga4";
import { useIsMobile } from '../hooks/isMobile';

export function About() {
    useEffect(() => {
        ReactGA.send({ hitType: "pageview", page: "/about", title: "About" });
    }, []);
    
    const isMobile = useIsMobile();

    return (
        <div className='content'>
            <div style={{width: isMobile ? 'calc(100% - 40px)' : '75%'}}>
                <img style={{width: '100%', height: isMobile ? 200 : '50%', objectFit: 'cover', marginTop: 20, borderRadius: 20 }} src={`images/about_banner${isMobile ? '_mobile' : ''}.jpeg`}/>
                <h2>Who is Tea Time for?</h2>
                <p>You might be interested in Tea Time if....</p>
                <ul>
                    <li>
                        <p>You are learning English and want a safe space to practice listening or speaking without judgement</p>
                    </li>
                    <li>
                        <p>You are interested in making new friends and are looking for a casual hangout</p>
                    </li>
                    <li>
                        <p>You want to meet people from all over the world and make them feel welcome (most people that come to America never get invited to an American's home)</p>
                    </li>
                </ul>
                <h2>What happens at Tea Time?</h2>
                <p>
                    At Tea Time we usually start by catching up over tea and snacks. Sometimes people like to talk about their week or other times we get to know newcomers.
                    As the evening goes on, we often play board games, sit around the campfire, or help learners practice their English with some sharing questions (like "What's
                    your favorite birthday memory?").
                </p>
                <p>
                    Every once in a while we have special events! We take Tea Time to the park or occasionally some members offer to host it at their house. We celebrate birthday
                    parties, do a "Friendsgiving" dinner, and around Christmas we put ornaments on a tree and decorate cookies!
                </p>
                <h2>How did Tea Time start?</h2>
                <p>
                    My wife & I love learning about different cultures and have quite a few Turkish friends. Some of our friends from other countries are trying to get better at their
                    English so we figured why not do both: providing them a safe space to practice English and a fun hangout for all!
                </p>
                <p>
                    So far, our Tea Time has been attended by a variety of different cultures from more than 15 countries - from Turks to Ecuadorians, Ukranians, Pakistanis, Mexicans, and more!
                </p>
            </div>
        </div>
    );
}