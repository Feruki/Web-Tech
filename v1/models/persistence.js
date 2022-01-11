const persistence = {
    tutorials = [],
    kategorien = [],
    kapitel = [],
    bilder = []
};



class Tutorial {
    constructor(name, beschreibung, dauer, sprache, url, embedCode, bild) {
        this.name = name;
        this.sprache = sprache;
        this.beschreibung = beschreibung;
        this.dauer = dauer;
        this.datum = Date.now();
        this.url = url;
        this.embedCode = embedCode;

        this.kategorien = [];
        this.kapitelliste = [];
        this.bild;
    }

    fuegeKategorieHinzu(kat) {
        return this.kategorien.push(kat);
    }

    fuegeKapitelHinzu(kap) {
        return this.kapitelliste.push(kap);
    }
}

class Kategorie extends Tutorial {
    constructor(name) {
        super(name);
    }
}

class Kapitel extends Tutorial {
    constructor(name, beschreibung, dauer) {
        super(name, beschreibung, dauer);
    }
}

class Bild {
    constructor(name, url) {
        this.name = name;
        this.url = url;
    }
}
