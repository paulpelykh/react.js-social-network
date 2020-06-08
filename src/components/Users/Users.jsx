import React from 'react';
import styles from './users.module.css';
import userPhoto from '../../assets/images/user.svg';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

let Users = (props) => {

    // let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    //to not show all users
    //delete later
    let pagesCount = 30;

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {pages.map(p => {
                // return <span className={props.currentPage == p && styles.selectedPage}
                return <span className={styles.number}
                    onClick={(e) => { props.onPageChanged(p); }}>{p}</span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id} className={styles.user}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                className={styles.userPhoto} />
                        </NavLink>
                    </div>
                    <span>
                        <span>
                            <div className={styles.name}>{u.name}</div>
                            <div className={styles.status}>{u.status}</div>
                        </span>
                        {/* <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span> */}
                    </span>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': '28c27c05-737c-47df-b710-608da0b74bb2'
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode == 0) {
                                            props.unfollow(u.id);
                                        }
                                    });
                            }
                            }>Unfollow</button>
                            : <button onClick={() => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': '28c27c05-737c-47df-b710-608da0b74bb2'
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode == 0) {
                                            props.follow(u.id);
                                        }
                                    });
                            }
                            }>Follow</button>
                        }
                    </div>
                </span>
            </div>)
        }
    </div>

}

export default Users;