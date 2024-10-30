import React, { useEffect, useState } from 'react';
import { getUserConferences } from './api';
import { Link } from 'react-router-dom';

const MyConferences = () => {
    const [conferences, setConferences] = useState([]);

    useEffect(() => {
        const fetchMyConferences = async () => {
            const data = await getUserConferences(); // Pass user email or ID as needed
            setConferences(data);
        };
        fetchMyConferences();
    }, []);

    return (
        <div>
            <h2>My Conferences</h2>
            <ul>
                {conferences.map((conference) => (
                    <li key={conference.id}>
                        <Link to={`/conference/${conference.id}`}>{conference.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MyConferences;
