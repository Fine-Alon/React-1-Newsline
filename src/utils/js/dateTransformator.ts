export const utcToLeftTime = (millSec: string) => {
    const currentDate = new Date();
    const date = new Date(millSec);

    // Calculate the time difference in milliseconds
    const timeDifference = currentDate.getTime() - date.getTime();

    // Create a new Date object representing the time difference
    const timeDifferenceDate = new Date(timeDifference);

    const hours = timeDifferenceDate.getHours().toString().padStart(2, '0');
    const minutes = timeDifferenceDate.getMinutes().toString().padStart(2, '0');
    // const seconds = timeDifferenceDate.getSeconds().toString().padStart(2, '0');

    const formattedTime = `${hours}:${minutes}`; //      11:04  (:03)

    return formattedTime
}
