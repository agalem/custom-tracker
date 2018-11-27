import delay from './delay';

const spendTimeData = [
    {
        id: 0,
        activityId: 0,
        spend: 120,
        date: new Date('2018-11-10')
    },
    {
        id: 1,
        activityId: 2,
        spend: 480,
        date: new Date('2018-11-10')
    },
    {
        id: 2,
        activityId: 1,
        spend: 120,
        date: new Date('2018-11-10')
    },
    {
        id: 3,
        activityId: 3,
        spend: 60,
        date: new Date('2018-11-10')
    },
    {
        id: 4,
        activityId: 3,
        spend: 30,
        date: new Date('2018-11-11')
    }
];

let currentSpendTimeId = spendTimeData[spendTimeData.length - 1].id;

const generateSpendTimeId = () => {
    return currentSpendTimeId + 1;
};


class SpendTimeApi {
    static getAllTime() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], spendTimeData));
            }, delay);
        });
    }

    static getAllTimesForGivenActivity(activityId) {
        return new Promise((resolve, reject) => {
           setTimeout(() => {
               const allTimes = spendTimeData.filter((data) => data.activityId === activityId);
               resolve(allTimes);
           }, delay);
        });
    }

    static saveNewTime(spendTime) {
        spendTime = Object.assign({}, spendTime);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(spendTime.id) {
                    const existingTimeInDatabase = spendTimeData.findIndex(x => x.id === spendTime.id);
                    spendTimeData.splice(existingTimeInDatabase, 1, spendTime);
                } else {
                    spendTime.id = generateSpendTimeId();
                    spendTimeData.push(spendTime);
                }
                resolve(spendTime);
            }, delay);
        });
    }

    static deleteSpendTime(spendTimeId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const indexOfElement = spendTimeData.findIndex(x => x.id === spendTimeId);
                spendTimeData.splice(indexOfElement, 1);
                resolve();
            }, delay);
        });
    }
}

export default SpendTimeApi;