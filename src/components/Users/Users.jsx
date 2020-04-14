import React from 'react';
import styles from './users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/user.png';

let Users = (props) => {
    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(respone => {
            debugger;
            props.setUsers(respone.data.items);
        });
        // props.setUsers([
        //     { id: 1, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/68/TechCrunch_Disrupt_Europe_Berlin_2013_%2810536888854%29_%28cropped%29.jpg', followed: false, fullName: 'Paul', status: 'I am Paul Pelykh', location: { city: 'Lviv', country: 'Ukraine' } },
        //     { id: 2, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/68/TechCrunch_Disrupt_Europe_Berlin_2013_%2810536888854%29_%28cropped%29.jpg', followed: true, fullName: 'Peter', status: 'I am Peter Pelykh', location: { city: 'Kyiv', country: 'Ukraine' } },
        //     { id: 3, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/68/TechCrunch_Disrupt_Europe_Berlin_2013_%2810536888854%29_%28cropped%29.jpg', followed: false, fullName: 'Ivan', status: 'I am boss', location: { city: 'Lviv', country: 'Ukraine' } },
        //     { id: 4, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/68/TechCrunch_Disrupt_Europe_Berlin_2013_%2810536888854%29_%28cropped%29.jpg', followed: true, fullName: 'John', status: 'I am John', location: { city: 'Lviv', country: 'Ukraine' } },
        // ]);
    }
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto} />
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                            : <button onClick={() => props.follow(u.id)}>Follow</button>
                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;