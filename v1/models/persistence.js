var tutorials = [];


//? 4. Ergänzen Sie den JavaScript-Code zusätzlich um eine nicht objektspezifische Hilfsfunktion
module.exports.getDauerInStundenUndMinuten = function(dauer) {
    if(typeof dauer != 'string') return null;

    const dauerSplit = dauer.split(':');
    const dauerStunden = parseInt(dauerSplit[0]);
    const dauerMinuten = parseInt(dauerSplit[1]);

    return `${dauerStunden}h ${dauerMinuten}min`;
};




//? Realisieren Sie eine weitere nicht objektspezifische Funktion
//? getTutorialsZuKategorie(kategorieName): Tutorial[] . Die Funktion soll ein Array
//? aller Tutorial -Objekte zurückgeben, welche der Kategorie mit Namen kategorieName
//? zugeordnet sind. Beispiel: getTutorialsZuKategorie("Web-Entwicklung") gibt alle
//? Tutorials zur Kategorie "Web-Entwicklung" zurück.

module.exports.getTutorialsZuKategorie = function(kategorieName) {
    if(typeof kategorieName != 'string') return null;

    const result = [];

    for(let i = 0 ; i < tutorials.length ; i++) {
        const tutorial = tutorials[i];

        tutorial.kategorien.forEach(kategorie => {
            if(kategorie.name == kategorieName) {
                result.push(tutorial);
            }
        });
    }

    return result;
};


function tutorial(data) {
    this.name = data.name || null;
    this.sprache = data.sprache || null;
    this.beschreibung = data.beschreibung || null;
    this.dauer = data.dauer || null;
    this.datum = data.datum || Date.now();
    this.url = data.url || null;
    this.embedCode = data.embedCode || null;

    this.kategorien = new Set(data.kategorien) || new Set();
    this.kapitelListe = new Set(data.kapitelListe) || new Set();
    
    this.bild = data.bild || null;

    this.fuegeKategorieHinzu = function(kat) {
        this.kategorien.add(kat);
    };

    this.fuegeKapitelHinzu = function(kap) {
        this.kapitelListe.add(kap);

        this.updateDauer();
    };

    //? 3. Die Eigenschaft dauer des Objektes Kapitel soll analog zur Eigenschaft dauer im Objekt
    //? Tutorial realisiert werden.
    this.updateDauer = function() {
        let newDauer = 0;
        for(let kapitel in this.kapitelListe) {
            newDauer += kapitel.dauer;
        }
    };

    tutorials.push(this);
}

function bild(data) {
    this.url = data.url || null;
    this.name = data.name || null;
}

var kategorien = [];

function kategorie(data) {
    this.name = data.name || null;

    this.bild = data.bild || null;

    //TODO Besser adden, sofort sortiert
    kategorien.push(this);
    kategorien = kategorien.sort((a, b) => a.name > b.name ? 1 : -1);
}

function kapitel(data) {
    this.name = data.name || null;
    this.beschreibung = data.beschreibung || null;
    this.dauer = data.dauer || null;
}








//? 1. Erzeugen Sie mindestens vier vollständige Kategorie -Objekte (jeweils inklusive Bild) als
//? Beispieldatensätze. Erzeugen Sie zudem mindestens zwei vollständige Tutorial -Objekte (jeweils
//? inklusive Bild) mit jeweils mindestens drei Kapitel -Objekten. Ordnen Sie den Tutorial -
//? Objekten jeweils passende Kategorie -Objekte zu. Verwalten Sie die erstellten Kategorie -
//? und Tutorial -Objekte jeweils in einem Array.


const kategorie4 = new kategorie({
    name: 'Zeichnen',
    bild: new bild({
        url: 'https://images.pexels.com/photos/933255/pexels-photo-933255.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        name: 'Drawing'
    })
});
const kategorie1 = new kategorie({
    name: 'Webentwicklung',
    bild: new bild({
        url: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        name: 'Forest'
    })
});

const kategorie2 = new kategorie({
    name: 'Winter überleben',
    bild: new bild({
        url: 'https://images.pexels.com/photos/4325328/pexels-photo-4325328.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        name: 'Snow'
    })
});

const kategorie3 = new kategorie({
    name: 'Kochen',
    bild: new bild({
        url: 'https://images.pexels.com/photos/2890387/pexels-photo-2890387.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        name: 'Soup'
    })
});


const tutorial1 = new tutorial({
    name: 'HTML',
    sprache: 'Deutsch',
    beschreibung: 'HTML ist eine Sprache zum erstellen von Webseiten',
    dauer: '1:30',
    datum: Date.now(),
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    embedCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    bild: new bild({
        url: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        name: 'Forest'
    }),
    kategorien: [kategorie1, kategorie2],
    kapitelListe: [
        new kapitel({
            name: 'HTML',
            beschreibung: 'HTML ist eine Sprache zum erstellen von Webseiten',
            dauer: '30'
        }),
        new kapitel({
            name: 'HTML',
            beschreibung: 'HTML ist eine Sprache zum erstellen von Webseiten',
            dauer: '30'
        }),
        new kapitel({
            name: 'HTML',
            beschreibung: 'HTML ist eine Sprache zum erstellen von Webseiten',
            dauer: '30'
        })
    ]
});


const tutorial2 = new tutorial({
    name: 'CSS',
    sprache: 'Deutsch',
    beschreibung: 'CSS ist eine Sprache zum stylen von Webseiten',
    dauer: '1:30',
    datum: Date.now(),
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    embedCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    bild: new bild({
        url: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        name: 'Forest'
    }),
    kategorien: [kategorie1, kategorie2],
    kapitelListe: [
        new kapitel({
            name: 'CSS',
            beschreibung: 'CSS ist eine Sprache zum stylen von Webseiten',
            dauer: '30'
        }),
        new kapitel({
            name: 'CSS',
            beschreibung: 'CSS ist eine Sprache zum stylen von Webseiten',
            dauer: '30'
        }),
        new kapitel({
            name: 'CSS',
            beschreibung: 'CSS ist eine Sprache zum stylen von Webseiten',
            dauer: '30'
        })
    ]
});




//? Nutzen Sie eine Schleife und die Funktion getTutorialsZuKategorie , um alle erstellten
//? Beispieldatensätze auf der Konsole auszugeben ( console.log([...]) ). Die Ausgabe soll
//? folgendem Format folgen (mit $ beginnende Anteile sind Platzhalter, die durch konkrete Daten zu
//? ersetzen sind, Einrückungen dienen nur der Illustration):

//? Gehe alle Kategorien durch
module.exports.listeAlleObjekteAuf = () => {
    for(let i = 0 ; i < kategorien.length ; i++) {
        const kategorie = kategorien[i];
    
        console.log(`Kategorie: ${kategorie.name}`);
        console.log(`Bild: ${kategorie.bild.name || 'Keins gefunden :('}`);
    
    
        //? Gehe alle Tutorials durch
        const tutorials = module.exports.getTutorialsZuKategorie(kategorie.name);
        for(let x = 0 ; x < tutorials.length ; x++) {
            const tutorial = tutorials[x];
    
            console.log(`\t${tutorial.name} (${tutorial.sprache}) ${tutorial.datum}`);
            console.log(`\t${tutorial.beschreibung}`);
            console.log(`\t${module.exports.getDauerInStundenUndMinuten(tutorial.dauer)}`);
            console.log(`\t${tutorial.url || tutorial.embedCode}`);
    
            //? Gehe alle Kapitel durch
            for(let kapitel of tutorial.kapitelListe) {
                console.log(`\t\t${kapitel.dauer} ${kapitel.name}: ${kapitel.beschreibung}`);
            }
        }
    
    
    }
};