/// <reference path="Teacher.ts" />

namespace Subjects {
    export interface Teacher {
        firstName: string;
        lastName: string;
    }

    // INTERFACE named Subject with the required method
    export interface Subject {
        setTeacher(teacher: Teacher): void;
    }
}
