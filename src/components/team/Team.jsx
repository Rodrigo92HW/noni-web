import React from 'react';
import MemberCard from './MemberCard';
import membersInfo from '../../json/membersInfo.json'

const Team = () => {

    let members = membersInfo.length;

    return (
        <div className='team'>
            <div className='teamMembers'>
            {Array.from({length: members}, (_, index) => (
                <MemberCard
                    key={index}
                    index={index}
                />
            ))}
            </div>
        </div>
    )
}

export default Team;