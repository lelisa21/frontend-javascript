/// <reference path="Teacher.ts" />

namespace Subjects {
    export interface Teacher {
        firstName: string;
        lastName: string;
    }

    export interface Subject {
        setTeacher(teacher: Teacher): void;
    }
}
