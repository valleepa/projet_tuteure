INSERT INTO ADMIN (admin_id, nom, prenom) values(1,"Varma", "Anthony");

INSERT INTO profs (prof_id, nom, prenom) values (14, "durand", "christophe");

INSERT INTO etudiants (etudiant_id, nom, prenom) values (5, "Lebo", "Michel");

UPDATE etudiants
set etudiant_id=5, nom = "Lebo", prenom = "Michel";

SELECT prenom from etudiants where prof_id = 14;



SELECT nom, prenom, classe from etudiants where prof_id=14; 
--prendre le nom et prenom de l'étudiant affilié au prof qui est actuellement connecté

SELECT path FROM qcm WHERE prof_id=14;
--on chope le path du qcm afin de l'envoyer au front depuis le back


--TRIGGER :

CREATE OR REPLACE TRIGGER EtudiantTrig
  before INSERT on ETUDIANTS
  for each row
begin
  SELECT seq_etudiant.nextval into :NEW.etudiant_id from dual
end
/
