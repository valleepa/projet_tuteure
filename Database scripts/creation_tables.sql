CREATE TABLE PROFS (
    prof_id INT UNIQUE PRIMARY KEY, 
    nom VARCHAR(25) NOT NULL,
    prenom VARCHAR(25),
    email VARCHAR(50) CHECK(email LIKE '%@%.__%'),
    rôle VARCHAR(20)
);

CREATE TABLE ADMIN (
    admin_id INT PRIMARY KEY, 
    nom VARCHAR(25) NOT NULL,
    prenom VARCHAR(25),
    email VARCHAR(50) CHECK(email LIKE '%@%.__%')
);

CREATE TABLE QCM (
    qcm_id INT PRIMARY KEY,
    path VARCHAR(100),
    prof_id INT UNIQUE NOT NULL,
    FOREIGN KEY (prof_id) REFERENCES PROFS(prof_id)
);

CREATE TABLE ETUDIANTS (
    etudiant_id INT UNIQUE PRIMARY KEY,
    nom VARCHAR(25) NOT NULL,
    prenom VARCHAR(25),
    email VARCHAR(50) CHECK(email LIKE '%@%.__%'),
    prof_id INT UNIQUE,
    FOREIGN KEY (prof_id) REFERENCES PROFS(prof_id)
);