INSERT INTO  Universities ("university_id", "university_name") VALUES(1,'КГПИ КЕМГУ');
INSERT INTO  Universities ("university_id", "university_name") VALUES(2,'НГУ');
INSERT INTO  Universities ("university_id", "university_name") VALUES(3,'СибГУ');
INSERT INTO  Universities ("university_id", "university_name") VALUES(4,'ТУСУР');

INSERT INTO Groups ("group_id", "group_name", "university_id") VALUES (1, 'ИВТ-23', 1);
INSERT INTO Groups ("group_id", "group_name", "university_id") VALUES (2, 'МОАИС-18', 2);
INSERT INTO Groups ("group_id", "group_name", "university_id") VALUES (3, 'МОАИС-22', 3);
INSERT INTO Groups ("group_id", "group_name", "university_id") VALUES (3, 'ИВТ-21', 4);

INSERT INTO Students ("student_id", "student_full_name", "student_age", "group_id", "student_admission_year") VALUES (1, 'Смирнов Д.А.', '23', 2, 2018);
INSERT INTO Students ("student_id", "student_full_name", "student_age", "group_id", "student_admission_year") VALUES (2, 'Климов М.Ю.', '21', 1, 2023);
INSERT INTO Students ("student_id", "student_full_name", "student_age", "group_id", "student_admission_year") VALUES (3, 'Сергеев И.О.', '22', 3, 2022);
INSERT INTO Students ("student_id", "student_full_name", "student_age", "group_id", "student_admission_year") VALUES (4, 'Иванонькива В.Г.', '23', 4, 2021);
INSERT INTO Students ("student_id", "student_full_name", "student_age", "group_id", "student_admission_year") VALUES (5, 'Бабийчук Д.В.', '23', 2, 2017);

INSERT INTO Subjects ("subject_id", "subject_name") VALUES (1, 'Дискретная математика');
INSERT INTO Subjects ("subject_id", "subject_name")  VALUES (2, 'Дифференциальные уравнения');
INSERT INTO Subjects ("subject_id", "subject_name")  VALUES (3, 'R-функции');
INSERT INTO Subjects ("subject_id", "subject_name")  VALUES (4, 'Структуры и алгоритмы');

INSERT INTO Grades ("grade_id", "student_id", "subjects_id", "grade") VALUES (1, 1, 1, 3);
INSERT INTO Grades ("grade_id", "student_id", "subjects_id", "grade") VALUES (2, 1, 2, 3);
INSERT INTO Grades ("grade_id", "student_id", "subjects_id", "grade") VALUES (3, 1, 3, 3);
INSERT INTO Grades ("grade_id", "student_id", "subjects_id", "grade") VALUES (4, 1, 4, 4);
INSERT INTO Grades ("grade_id", "student_id", "subjects_id", "grade") VALUES (5, 2, 1, 4);
INSERT INTO Grades ("grade_id", "student_id", "subjects_id", "grade") VALUES (6, 2, 2, 4);
INSERT INTO Grades ("grade_id", "student_id", "subjects_id", "grade") VALUES (7, 2, 3, 3);
INSERT INTO Grades ("grade_id", "student_id", "subjects_id", "grade") VALUES (8, 2, 4, 3);
INSERT INTO Grades ("grade_id", "student_id", "subjects_id", "grade") VALUES (9, 3, 1, 4);
INSERT INTO Grades ("grade_id", "student_id", "subjects_id", "grade") VALUES (10, 3, 2, 4);
INSERT INTO Grades ("grade_id", "student_id", "subjects_id", "grade") VALUES (11, 3, 3, 4);
INSERT INTO Grades ("grade_id", "student_id", "subjects_id", "grade") VALUES (12, 3, 4, 4);
INSERT INTO Grades ("grade_id", "student_id", "subjects_id", "grade") VALUES (13, 4, 1, 5);
INSERT INTO Grades ("grade_id", "student_id", "subjects_id", "grade") VALUES (14, 4, 2, 4);
INSERT INTO Grades ("grade_id", "student_id", "subjects_id", "grade") VALUES (15, 4, 3, 5);
INSERT INTO Grades ("grade_id", "student_id", "subjects_id", "grade") VALUES (16, 4, 4, 5);
INSERT INTO Grades ("grade_id", "student_id", "subjects_id", "grade") VALUES (17, 5, 1, 5);
INSERT INTO Grades ("grade_id", "student_id", "subjects_id", "grade") VALUES (18, 5, 2, 5);
INSERT INTO Grades ("grade_id", "student_id", "subjects_id", "grade") VALUES (19, 5, 3, 5);
INSERT INTO Grades ("grade_id", "student_id", "subjects_id", "grade") VALUES (20, 5, 4, 5);