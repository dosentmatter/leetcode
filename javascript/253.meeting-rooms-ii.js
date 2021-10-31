/**
 * @param {number[][]} intervals
 * @return {number}
 */
 var minMeetingRooms = function(intervals) {
    return minMeetingRoomsLoiter(intervals);
};

var minMeetingRoomsLoiter = function(intervals) {
    const starts = intervals.map(interval => interval[0]).sort((a, b) => a - b);
    const ends = intervals.map(interval => interval[1]).sort((a, b) => a - b);

    let j = 0;
    let roomsInUse = 0;
    for (const start of starts) {
        const end = ends[j];

        if (end <= start) {
            roomsInUse -= 1;
            j += 1;
        }
        
        roomsInUse += 1;
    }
    return roomsInUse;
};

var minMeetingRoomsMax = function(intervals) {
    const starts = intervals.map(interval => interval[0]).sort((a, b) => a - b);
    const ends = intervals.map(interval => interval[1]).sort((a, b) => a - b);

    let i = 0;
    let j = 0;
    let roomsInUse = 0;
    let minRooms = 0;
    while (i < starts.length) {
        const start = starts[i];
        const end = ends[j];

        if (start < end) {
            roomsInUse += 1;
            i += 1;
        } else if (end < start) {
            roomsInUse -= 1;
            j += 1;
        } else {
            i += 1;
            j += 1;
        }
        minRooms = Math.max(minRooms, roomsInUse);
    }
    return minRooms;
};
