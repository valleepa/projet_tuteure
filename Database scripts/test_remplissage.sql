INSERT INTO ADMIN (admin_id, nom, prenom) values(1,"Varma", "Anthony");

INSERT INTO profs (prof_id, nom, prenom) values (14, "durand", "christophe");

INSERT INTO etudiants (etudiant_id, nom, prenom) values (5, "Lebo", "Michel");

UPDATE etudiants
set etudiant_id=5, nom = "Lebo", prenom = "Michel";


SELECT * FROM profs;
SELECT * FROM etudiants;
SELECT * FROM admin;

SELECT prenom from etudiants where prof_id = 2;


UPDATE etudiants
SET classe = "INFA2"
WHERE etudiant_id=5;

SELECT nom, prenom from etudiants where prof_id=user;

--etudiant qcm statistiques