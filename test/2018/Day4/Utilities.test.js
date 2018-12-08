const assert = require("chai").assert;
const utilities = require('../../../2018/Day4/Utilities.js');

const input = [
    '[1518-11-01 00:05] falls asleep',
    '[1518-11-01 00:25] wakes up',
    '[1518-11-01 00:30] falls asleep',
    '[1518-11-01 00:55] wakes up',
    '[1518-11-01 23:58] Guard #99 begins shift',
    '[1518-11-02 00:40] falls asleep',
    '[1518-11-02 00:50] wakes up',
    '[1518-11-03 00:05] Guard #10 begins shift',
    '[1518-11-03 00:24] falls asleep',
    '[1518-11-01 00:00] Guard #10 begins shift',
    '[1518-11-03 00:29] wakes up',
    '[1518-11-04 00:02] Guard #99 begins shift',
    '[1518-11-04 00:36] falls asleep',
    '[1518-11-04 00:46] wakes up',
    '[1518-11-05 00:03] Guard #99 begins shift',
    '[1518-11-05 00:45] falls asleep',
    '[1518-11-05 00:55] wakes up'
];

describe('Tests for day 4 utilities.', () => {
    it('Can parse input correctly.', () => {
        const parsedInput = utilities.parseInput(input);

        assert.equal(parsedInput[0].date.getTime(), new Date('1518-11-01 00:00').getTime());
        assert.equal(parsedInput[0].value, 'Guard #10 begins shift')
    });

    it('Calculates the hours asleep correctly.', () => {
        const parsedInput = utilities.parseInput(input);
        const asleepHours = utilities.calculateAsleepHours(parsedInput);

        const guard10 = asleepHours.get(10);
        assert.equal(guard10.minutesAsleep, 50);
        assert.equal(guard10.asleepMinutes.get(24), 2);
    });

    it('Determines best guard correctly.', () => {
        const parsedInput = utilities.parseInput(input);
        const asleepHours = utilities.calculateAsleepHours(parsedInput);
        const solution = utilities.calculatePart1Solution(asleepHours);

        assert.equal(solution, 240);
    });

    it('Determines most sleeping guard.', () => {
        const parsedInput = utilities.parseInput(input);
        const asleepHours = utilities.calculateAsleepHours(parsedInput);
        const solution = utilities.calculatePart2Solution(asleepHours);

        assert.equal(solution, 4455);
    });
});