import './Content.css';
import { useState, useEffect } from "react";
import data from '../data/groups.json';
import { Button } from 'bootstrap';
import { Link } from 'react-router-dom';

export function Groups() {
    return (
        <div className='content' style={{marginTop: 20}}>
            {data.map(group =>
                <GroupCard key={group.id} group={group}/>
            )}
            <button className='btn btn-outline-light btn-lg' style={{backgroundColor: 'rgba(130, 174, 245, 0.5)', marginTop: 50}}
                onClick={() => {/*Todo: open a form*/}}>
                Host your own group!
            </button>
        </div>
    );
}

function GroupCard(props) {
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
        <div style={{display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', borderRadius: 20, backgroundColor: '#7a3f02',
                     border: 'solid black', padding: 20, margin: '10px 0px', width: isMobile ? 'calc(100% - 40px)' : 850}}>
            <img style={{height: 250, objectFit: 'cover'}} src={props.group.thumbnail}/>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <h3 style={{marginTop: 10}}>{props.group.name}</h3>
                <p>{props.group.meets}</p>
                <p>{props.group.location} in {props.group.city}</p>
                <div style={{flex: '1 0 0'}} />
                <button className='btn btn-outline-light btn-lg' style={{backgroundColor: 'rgba(62, 207, 101, 0.4)'}}
                    onClick={() => {/*Todo: open a form*/}}>
                    Ask to join
                </button>
            </div>
        </div>
    );
}