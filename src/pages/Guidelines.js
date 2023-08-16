import './Content.css';
import { useState, useEffect } from "react";

export function Guidelines() {
    const [width, setWidth] = useState(window.innerWidth);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);
    
    const isMobile = width <= 768;

    return (
        <div style={{ height: '100%', paddingTop: 92 /*NavBar height*/, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{width: isMobile ? '100%' : '75%', padding: '0px 10px'}}>
                <img style={{width: '100%', height: isMobile ? 200 : '50%', objectFit: 'cover', marginTop: 20, borderRadius: 20 }} src="https://i.imgur.com/OOzr23g.jpeg"/>
                <h2>Rules</h2>
                <p>There are only two rules for Tea Time:</p>
                <ol>
                    <li>
                        <p>Everyone is welcome, regardless of race, religion, culture, language level, or any other factor. Except...</p>
                    </li>
                    <li>
                        <p>There is no judgement at Tea Time. If someone is openly judging others or making them feel uncomfortable, they are not welcome at Tea Time.</p>
                    </li>
                </ol>
                <h2>Tips for a great Tea Time</h2>
                <ul>
                    <li>
                        <p>
                            Have tea (of course!) along with some snacks (you can either do these &quot;potluck style&quot; each week, or provide some yourself - 
                            we find it works well to have some basic snacks and allow guests to bring anything extra they want to share)
                        </p>
                    </li>
                    <li>
                        <p>
                            Board games work well! Especially for people who are just starting out with English, games like Jenga, Connect 4, and Uno are pretty
                            universal and can help teach words like colors, objects, &quot;win&quot;, &quot;lose&quot;, etc.
                        </p>
                    </li>
                    <li>
                        <p>
                            Host in a home (if you can). Not only is it easier to manage food, drink, etc without transporting it to a venue, a home
                            generates a warmness &amp; closeness better than a venue like a church or community center
                        </p>
                    </li>
                    <li>
                        <p>
                            Make some sort of group message (we find that WhatsApp works well as it is popular internationally). That way you can remind
                            members of upcoming Tea Times or cancel on short notice if you need to. (We also find that many people like to be on the 
                            group message to know it's happening, even if they'll only come &quot;someday&quot;)
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
}