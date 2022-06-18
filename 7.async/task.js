// Задание 1

class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {
        if (id === undefined) {
            throw new Error('ID будильника не найден')
        } else if (this.alarmCollection.find((item) => item.id === id)) {
            console.error(`Будильник с ID = ${id} уже существует`);
        } else this.alarmCollection.push({ time, callback, id });
    }

    removeClock(id) {
        let index = this.alarmCollection.findIndex((item) => item.id === id);
        if (index === -1) {
            return false
        } else {
            this.alarmCollection.splice(index, 1);
            return true;
        }
    }
    getCurrentFormattedTime() {
        const date = new Date();
        let HH = date.getHours();
        let MM = date.getMinutes();
        if (HH < 10) {
            HH = '0' + HH;
        }
        if (MM < 10) {
            MM = '0' + MM;
        }
        return `${HH}:${MM}`;
    }

    checkClock(clock) {
        if (this.getCurrentFormattedTime() === clock.time) {
            return clock.callback();
        }
    }

    start() {
        if (this.timerId === null) {
            this.timerId = setInterval(() => { this.alarmCollection.forEach((id) => this.checkClock(id)) }, 1000);
            console.log('Пора вставать!');
        }
    }

    stop() {
        if (this.timerId !== null) {
            clearInterval(this.timerId);
        }
        return this.timerId = null;
    }

    printAlarms() {
        this.alarmCollection.forEach((item) => console.log(item.id + " " + item.time));
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}

// function testCase() {
//     let phoneAlarm = new AlarmClock();
//     phoneAlarm.addClock('09:00', () => console.log('Пора вставать!'), 1);
//     phoneAlarm.addClock('09:01', () => { console.log('Давай, вставай уже!'); phoneAlarm.removeClock(2) }, 2);
//     // phoneAlarm.addClock('09:01', () => console.log('Иди умываться!'));
//     phoneAlarm.addClock('09:02', () => {
//         console.log('Вставай, а то проспишь!');
//         phoneAlarm.clearAlarms();
//         phoneAlarm.printAlarms();
//     }, 3);
//     phoneAlarm.addClock('09:05', () => console.log('Вставай, а то проспишь!'), 1);// уже существующий id
//     phoneAlarm.printAlarms();
//     phoneAlarm.start();
// }
// testCase();



