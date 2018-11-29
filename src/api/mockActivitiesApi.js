import delay from './delay';

export const activities = [
    {
        id: 0,
        name: 'Reading',
        spendTime: [
            {
                spend: 120,
                date: new Date('2018-11-10')
            }
        ]
    },
    {
        id: 1,
        name: 'Learning JavaScript',
        spendTime: [
            {
                spend: 120,
                date: new Date('2018-11-10')
            }
        ]
    },
    {
        id: 2,
        name: 'Sleeping',
        spendTime: [
            {
                spend: 480,
                date: new Date('2018-11-10')
            }
        ]
    },
    {
        id: 3,
        name: 'Playing with dog',
        spendTime: [
            {
                spend: 60,
                date: new Date('2018-11-10')
            },
            {
                spend: 30,
                date: new Date('2018-11-11')
            }
        ]
    }
];

let currentActivityId = activities[activities.length - 1].id;

const generateActivityId = () => {
    return currentActivityId + 1;
};

class ActivitiesApi {
    static getAllActivities() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], activities));
            }, delay);
        });
    }

    static getActivityById(activityId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const existingActivityIndex = activities.findIndex(x => x.id === activityId);
                if (!existingActivityIndex) {
                    reject(`Activity with id ${activityId} doesn't exist`);
                } else {
                    resolve(Object.assign([], activities[existingActivityIndex]));
                }
            }, delay);
        });
    }

    static saveActivity(activity) {
        activity = Object.assign({}, activity);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const minActivityNameLength = 4;
                if(activity.name < minActivityNameLength) {
                    reject(`Activity name must be at least ${minActivityNameLength} characters`);
                }
                if(activity.id) {
                    const existingActivityIndex = activities.findIndex(x => x.id === activity.id);
                    activities.splice(existingActivityIndex, 1, activity);
                } else {
                    activity.id = generateActivityId();
                    activities.push(activity);
                }
                resolve(activity);
            }, delay);
        });
    }

    static addTimeToActivity(activityId, timeObject) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const activityIndex = activities.findIndex(x => x.id === activityId);
                activities[activityIndex].spendTime.push(timeObject);
                resolve();
            }, delay)
        })
    }

    static deleteActivity(activityId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const activityIndex = activities.findIndex(x => x.id === activityId);
                activities.splice(activityIndex, 1);
                resolve();
            }, delay);
        });
    }
}

export default ActivitiesApi;