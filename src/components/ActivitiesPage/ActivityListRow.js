import React from 'react';

const ActivityListRow = ({activity}) => {
    return (
        <tr>
            <td>{activity.id}</td>
            <td>{activity.name}</td>
        </tr>
    );
};

export default ActivityListRow;