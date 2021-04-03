export const getOneMonthAgoReleaseDate = () => {
    let date = new Date();
    date.setMonth(date.getMonth() - 1);
    let formattedDate = date.toJSON().slice(0,10);  

    return formattedDate;
}

export const dateToYearOnly = date => {
    return date.slice(0,4);
}