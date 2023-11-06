import './Content.css';
import { useState, useEffect } from "react";
import data from '../data/groups.json';
import { Dialog, DialogActions, DialogContent, TextField, Button, Snackbar } from '@mui/material';
import { Link } from 'react-router-dom';
import ReactGA from "react-ga4";

export function Groups() {
    const [userInfoDialogOpen, setUserInfoDialogOpen] = useState(false);
    const [dialogTarget, setDialogTarget] = useState(null);
    const [snackbarShown, setSnackbarShown] = useState(null);

    useEffect(() => {
        ReactGA.send({ hitType: "pageview", page: "/groups", title: "Groups" });
    }, []);

    const openDialog = target => {
        setDialogTarget(target);
        setUserInfoDialogOpen(true);
    }

    const onSubmit = async result => {
        console.log(result);

        await fetch("https://script.google.com/macros/s/AKfycbyNq3VPSRANLrCjnzpW1NKKYNjh-b3ovACRh04s1YkkZBL6AopjjGweYzQGB-WN2NMB/exec" /*Todo: use a proper server later*/, {
            method: 'post',
            body: JSON.stringify(result),
        });

        setSnackbarShown(true);
    }

    return (
        <div className='content' style={{marginTop: 20}}>
            {/*Todo: if we eventually get a large amount of groups, we might want a "area" (eg Eastside, Tacoma, Seattle) filter or an embedded map*/}
            {data.map(group =>
                <GroupCard key={group.id} group={group} openDialog={() => openDialog(group.name)}/>
            )}
            <button className='btn btn-outline-light btn-lg' style={{backgroundColor: 'rgba(130, 174, 245, 0.5)', marginTop: 50}}
                onClick={() => openDialog('Host a group')}>
                Host your own group!
            </button>
            <UserInfoDialog open={userInfoDialogOpen} target={dialogTarget} onClose={() => setUserInfoDialogOpen(false)} onSubmit={result => onSubmit(result)}/>
            <Snackbar open={snackbarShown} autoHideDuration={3000} severity="success" onClose={() => setSnackbarShown(false)}
                message="Sent! Someone will get in contact with you soon" anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}/>
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
                <button className='btn btn-outline-light btn-lg' style={{backgroundColor: 'rgba(62, 207, 101, 0.4)', minWidth: isMobile ? 0 : 330}}
                    onClick={() => props.openDialog()}>
                    Ask for info
                </button>
            </div>
        </div>
    );
}

function UserInfoDialog(props) {
    const [nameErrorMsg, setNameErrorMsg] = useState();
    const [emailErrorMsg, setEmailErrorMsg] = useState();
    const [phoneErrorMsg, setPhoneErrorMsg] = useState();
    const [result, setResult] = useState({});

    useEffect(() => {
        ReactGA.event({
            category: "groups",
            action: "contact",
            label: props.target,
            nonInteraction: false,
        });
    }, []);

    const onChange = (value, field) => {
        setResult((_result) => ({ ..._result, [field]: value }));
    }

    useEffect(() => onChange(props.target, 'target'));

    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const phoneRegex = /^(\+?\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/g;

    const onSubmit = () => {
        if (!result.name) {
            setNameErrorMsg("Name is required");
            return;
        }
        else {
            setNameErrorMsg(null);
        }

        if (!result.email && !result.phone) {
            setEmailErrorMsg("Either phone or email is required");
            setPhoneErrorMsg("Either phone or email is required");
            return;
        }
        else if (result.email && !emailRegex.test(result.email)) {
            setEmailErrorMsg("Please enter a valid email address");
            setPhoneErrorMsg(null);
            return;
        }
        else if (result.phone && !phoneRegex.test(result.phone)) {
            setPhoneErrorMsg("Please enter a valid phone number");
            setEmailErrorMsg(null);
            return;
        }
        else {
            setEmailErrorMsg(null);
            setPhoneErrorMsg(null);
        }

        props.onSubmit(result);

        setResult({}); //Reset data in case form is opened again

        props.onClose();
    };

    return (
        <Dialog open={props.open} onClose={() => props.onClose()}>
            <DialogContent>
                {props.target == 'Host a group' ? 
                    <div>
                        <h4>Thanks for your interest in hosting a group!</h4>
                        <p><i>Make sure you have reviewed the rules & tips on the <Link to="/guidelines">guidelines page</Link>.</i></p>
                    </div>
                :
                <div>
                    <h4>Please fill out the following information so we can get you connected</h4>
                    <p><i>Your information will be sent to the leaders of {props.target}</i></p>
                </div>
                }
                <TextField autoFocus fullWidth margin="dense" label="Name" variant="standard"
                    helperText={nameErrorMsg} error={nameErrorMsg != null}
                    onChange={e => onChange(e.target.value, 'name')}/>
                <TextField fullWidth margin="dense" label="Email" variant="standard"
                    helperText={emailErrorMsg} error={emailErrorMsg != null}
                    onChange={e => onChange(e.target.value, 'email')}/>
                <TextField fullWidth margin="dense" label="Phone" variant="standard"
                    helperText={phoneErrorMsg} error={phoneErrorMsg != null}
                    onChange={e => onChange(e.target.value, 'phone')}/>
                {props.target == 'Host a group' ?
                    <TextField fullWidth multiline margin="dense" label="Tell us a little about yourself" variant="standard"
                        onChange={e => onChange(e.target.value, 'aboutMe')}/>
                : null
                }
            </DialogContent>
            <DialogActions>
              <Button onClick={() => props.onClose()}>Cancel</Button>
              <Button onClick={() => onSubmit()}>Submit</Button>
            </DialogActions>
        </Dialog>
    );
  }