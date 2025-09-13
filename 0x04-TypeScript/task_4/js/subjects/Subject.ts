/// <reference path="Teacher.ts" />

namespace Subjects {
    export interface Teacher {
        firstName: string;
        lastName: string;
    }

  interface Subject {
        setTeacher(teacher: Teacher): void;
    }

    // Class named Subject that implements the interface
    export class Subject implements Subject {
        teacher: Teacher;
        
        setTeacher(teacher: Teacher): void {
            this.teacher = teacher;
        }
    }
}
