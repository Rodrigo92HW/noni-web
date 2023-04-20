import React from 'react';
import membersInfo from '../../json/membersInfo.json'

const MemberCard = ({index}) => {

    const member = membersInfo[index];

    return (
        <div className={'member ' + index}>
            <div className='position'>{member.Position}</div>
            <div className='info'>
                <div className='picture'><img src={member.Picture} alt={member.Name} height='150px' width='150px'/></div>
                <div className='data'>
                    <div className='name'>{member.Name}</div>
                    <div className='country'><img src={"https://flagcdn.com/h20/" + member.Nationality +".png"} alt={member.Nationality}/></div>
                    <div className='age'>{member.Age} Años</div>
                    <div className='sex'>{member.Sex}</div>
                </div>
            </div>
            <div className='skills'><p>Skills</p><br/>{member.Skills}</div>
            <div className='experience'><p>Experience</p><br/>{member.Experience}</div>
            <div className='notes'><p>Notes</p><br/>{member.Notes}</div>
            <div className='contacts'><a href={member.Contacts} target="_blank" rel="noreferrer"> </a></div>
        </div>
    )
}

export default MemberCard;