import './Content.css';
import { useEffect } from "react";
import ReactGA from "react-ga4";
import { useIsMobile } from '../hooks/isMobile';

export function Guidelines() {
    useEffect(() => {
        ReactGA.send({ hitType: "pageview", page: "/guidelines", title: "Guidelines" });
    }, []);
    
    const isMobile = useIsMobile();

    return (
        <div className='content'>
            <div style={{width: isMobile ? 'calc(100% - 40px)' : '75%'}}>
                <img style={{width: '100%', height: isMobile ? 200 : '50%', objectFit: 'cover', marginTop: 20, borderRadius: 20 }} src={`images/guidelines_banner${isMobile ? '_mobile' : ''}.jpeg`}/>
                <h2>Rules</h2>
                <p>There are only two rules for Tea Time:</p>
                <ol>
                    <li>
                        <p>Everyone is welcome, regardless of race, religion, culture, language level, or any other factor. Except...</p>
                    </li>
                    <li>
                        <p>Everyone must be respected at Tea Time. If someone is openly disrespecting others, they are not welcome at Tea Time.</p>
                    </li>
                </ol>
                <h2>Tips for a great Tea Time</h2>
                <i>
                    <p>
                        Ultimately, Tea Time is just a time for hanging out & having conversation - with a particular focus on the international & refugee community. 
                        But this means that there is flexibility for groups to take many forms - whether meeting in a home, meeting at a park, or meeting at a gym to
                        play some sports - the community is what matters. This means that the below are just "tips" and not requirements to host a group!
                    </p>
                </i>
                <ul>
                    <li>
                        <p>
                            Make some sort of group message (we find that WhatsApp works well as it is popular internationally). That way you can remind
                            members of upcoming Tea Times or cancel on short notice if you need to. (We also find that many people like to be on the 
                            group message to know it's happening, even if they'll only come "someday")
                        </p>
                    </li>
                    <li>
                        <p>
                            Have tea along with some snacks (you can either do these "potluck style" each week, or provide some yourself - 
                            we find it works well to have some basic snacks and allow guests to bring anything extra they want to share)
                        </p>
                    </li>
                    <li>
                        <p>
                            Board games work well! Especially for people who are just starting out with English, games like Jenga, Connect 4, and Uno are pretty
                            universal and can help teach words like colors, objects, "win", "lose", etc.
                        </p>
                    </li>
                    <li>
                        <p>
                            Host in a home (if you can). Not only is it easier to manage food, drink, etc without transporting it to a venue, a home can
                            generate a unique warmness & closeness.
                        </p>
                    </li>
                </ul>
                <img style={{width: '100%', height: isMobile ? 200 : '50%', objectFit: 'cover', marginTop: 20, borderRadius: 20 }} src={`images/special_events${isMobile ? '_mobile' : ''}.jpeg`}/>
                <h2>Special Events</h2>
                <p>
                    Special events are also a great way to bring people together while also sharing traditions. They are also a great way to attract new members!
                    Here are some of the special events we have done at our Tea Time:
                </p>
                <ul>
                    <li>Camping</li>
                    <li>Pumpkin carving</li>
                    <li>Corn maze</li>
                    <li>Game night</li>
                    <li>&quot;Friendsgiving&quot;</li>
                    <li>Christmas party</li>
                    <li>New Year's Eve party</li>
                </ul>
            </div>
        </div>
    );
}