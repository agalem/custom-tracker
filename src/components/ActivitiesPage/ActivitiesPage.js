import React, { Component } from 'react';
import { connect } from 'react-redux';
import ActivityList from './ActivityList';

class ActivitiesPage extends Component {

    render() {
        const {activities} = this.props;
        
        return (
            <div>
                <h1>Activities</h1>
                <ActivityList activities={activities}/>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
      activities: state.activities//name from root reducer
    };
};


export default connect(mapStateToProps)(ActivitiesPage);