import React from 'react';
import ActivityListRow from './ActivityListRow';

const ActivityList = ({activities}) => {
    return (
        <table className="table">
            <thead>
            <tr>
                <th>&nbsp;</th>
                <th>Name</th>
                <th>Time</th>
            </tr>
            </thead>
            <tbody>
            {activities.map(activity => <ActivityListRow key={activity.id} activity={activity}/>)}
            </tbody>
        </table>
    );
};

export default ActivityList;