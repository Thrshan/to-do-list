exports.getDate = function() {
    const options = {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric"
    };
    const now = new Date();
    return now.toLocaleDateString("US-EN", options);
}

exports.getDay = function () {
    const options = {
        weekday: "long",
    };
    const now = new Date();
    return now.toLocaleDateString("US-EN", options);
}

    // let day = new Intl.DateTimeFormat("US-EN", options).format(now); // Another way of formating date, The result will be the same.
