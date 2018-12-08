exports.parseInput = input => {
    return input.map(i => {
        return {
            date: new Date(i.substring(1, 17)),
            value: i.substring(19)
        };
    }).sort((a, b) => a.date - b.date);
};;

exports.calculateAsleepHours = input => {
    const timeAsleep = new Map();
    let currentGuard = 0;
    let fallMinute = 0;

    input.forEach(i => {
        const parts = i.value.split(' ');

        if (parts[0] === 'Guard') {
            currentGuard = parseInt(parts[1].replace('#', ''));
        } else if (parts[0] === 'falls') {
            fallMinute = i.date.getMinutes();
        } else {
            const asleepRecord = timeAsleep.get(currentGuard) || {minutesAsleep: 0, asleepMinutes: new Map()};
            const wakeMinute = i.date.getMinutes();
            asleepRecord.minutesAsleep += wakeMinute - fallMinute;

            for (let i = fallMinute; i < wakeMinute; i++) {
                const asleepMinuteCount = asleepRecord.asleepMinutes.get(i) + 1 || 1;
                asleepRecord.asleepMinutes.set(i, asleepMinuteCount);
            }

            timeAsleep.set(currentGuard, asleepRecord);
        }
    });

    return timeAsleep;
};

exports.calculateSolution = input => {
    const guardIds = Array.from(input.keys());
    let mostMinutes = 0;
    let bestGuardId = 0;
    let bestMinute = 0;
    let bestMinuteCount = 0;

    guardIds.forEach(id => {
        if (input.get(id).minutesAsleep > mostMinutes) {
            mostMinutes = input.get(id).minutesAsleep;
            bestGuardId = id;
        }
    });
    
    const bestGuard = input.get(bestGuardId);
    const minutes = Array.from(bestGuard.asleepMinutes.keys());

    minutes.forEach(m => {
        if (bestGuard.asleepMinutes.get(m) > bestMinuteCount) {
            bestMinuteCount = bestGuard.asleepMinutes.get(m);
            bestMinute = m;
        }
    });

    return bestGuardId * bestMinute;
};