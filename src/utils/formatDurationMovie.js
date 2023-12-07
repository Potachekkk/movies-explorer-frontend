export const formatDuratonMovie = (minutes) => {
    let resMinutes = minutes % 60;
    let resHours = (minutes - resMinutes) / 60;
    
    return (resHours > 0 ? `${resHours} ч` : '') + (resMinutes ? ' ' : '') + (resMinutes > 0 ? `${resMinutes} м` : '');
};
