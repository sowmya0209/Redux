//plain javascript function

export function createCourse(course) {
    return({ // returns action object
        type:"CREATE_COURSE",
        course:course
    });
}

export function removeCourse(course) {
    return({
        type:"REMOVE_COURSE",
        course:course
    });
}

