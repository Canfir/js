CREATE TABLE Universities (
	university_id  SERIAL PRIMARY KEY,
	university_name VARCHAR(255) NOT NULL,
);
CREATE TABLE Groups (
    group_id  SERIAL PRIMARY KEY,
    group_name  VARCHAR(255) NOT NULL,
    university_id INTEGER REFERENCES Universities(university_id)
);
CREATE TABLE Students (
	student_id SERIAL PRIMARY KEY,
    student_full_name VARCHAR(255) NOT NULL,
    student_age INT NOT NULL,
    group_id INTEGER REFERENCES Groups(group_id),
    student_admission_year  INTEGER NOT NULL
);
CREATE TABLE Subjects  (
    subject_id  SERIAL PRIMARY KEY,
    subject_name  VARCHAR(255) NOT NULL
);
CREATE TABLE Grades (
    grade_id  SERIAL PRIMARY KEY,
    student_id INTEGER REFERENCES Students(student_id),
    subjects_id INTEGER REFERENCES Subjects(subject_id),
    grade  INTEGER NOT NULL
)