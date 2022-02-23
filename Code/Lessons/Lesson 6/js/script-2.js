'use strict';

// function converts numeric grade to letter grade equivalent
const convertScoreToLetterGrade = (score) => {
    // variable to store letter grade
    let grade;

    if (score >= 90) {
        grade = 'A';
    } else if (score >= 80 && score < 90) {
        grade = 'B';
    } else if (score >= 70 && score < 80) {
        grade = 'C';
    } else if (score >= 60 && score < 70) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    return grade;
}

// variable representing student score
const studentScore = 92; // 92 |  80 | 79 | 61 | 55 | 102

// print message to console
console.log(`You got a ${studentScore}, which is a grade of ${convertScoreToLetterGrade(studentScore)}`);