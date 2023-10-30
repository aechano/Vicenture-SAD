function timeAgo(timestamp) {
    /**
     * This is a function to convert timestamps into human-readable text
     */
    const date = new Date(timestamp);
    const currentTime = new Date().getTime();
    const timestampTime = date.getTime();
    const timeDifference = currentTime - timestampTime;

    // Define time intervals in milliseconds
    const minute = 60 * 1000;
    const hour = minute * 60;
    const day = hour * 24;
    const week = day * 7;
    const month = day * 30;

    if (timeDifference < minute) {
        return 'Just now';
    } else if (timeDifference < hour) {
        const minutes = Math.floor(timeDifference / minute);
        return minutes + (minutes === 1 ? ' minute ago' : ' minutes ago');
    } else if (timeDifference < day) {
        const hours = Math.floor(timeDifference / hour);
        return hours + (hours === 1 ? ' hour ago' : ' hours ago');
    } else if (timeDifference < week) {
        const days = Math.floor(timeDifference / day);
        return days + (days === 1 ? ' day ago' : ' days ago');
    } else if (timeDifference < month) {
        const weeks = Math.floor(timeDifference / week);
        return weeks + (weeks === 1 ? ' week ago' : ' weeks ago');
    } else {
        const readable_month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based
        const readable_day = date.getDate().toString().padStart(2, '0');
        const readable_year = date.getFullYear();
        return `${readable_month}/${readable_day}/${readable_year}`
    }
}

export { timeAgo };