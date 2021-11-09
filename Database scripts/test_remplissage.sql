INSERT INTO ADMIN (admin_id, nom, prenom) values(1,"Varma", "Anthony");

INSERT INTO profs (prof_id, nom, prenom) values (14, "hoguin", "fabrice");

INSERT INTO etudiants (etudiant_id, nom, prenom) values (5, "Lebo", "Michel");

UPDATE etudiants
set etudiant_id=5, nom = "Lebo", prenom = "Michel";


SELECT * FROM profs;
SELECT * FROM etudiants;
SELECT * FROM admin;