function $(id){
    return document.getElementById(id);
}

var tipus1 = {
    mercedes : true,
    nev: "C220d limousine",
    ar: 20000000,
}

var tipus2 = {
    mercedes : true,
    nev: "E300de 4MATIC Plug-in hybrid T-modell",
    ar: 25000000,
}

var tipus3 = {
    mercedes : true,
    nev: "S450 4MATIC Mild hybrid",
    ar: 40000000,
}

var tipus4 = {
    mercedes : true,
    nev: "GLE400d 4MATIC",
    ar: 30000000,
}

var tipus5 = {
    mercedes : true,
    nev: "AMG GT63 4MATIC+",
    ar: 60000000,
}

var tipus5 = {
    mercedes : true,
    nev: "AMG GT63 4MATIC+",
    ar: 60000000,
}

var tipus6 = {
    mercedes : false,
    nev: "A3 SE 35 TDI limousine",
    ar: 15000000,
}

var tipus7 = {
    mercedes : false,
    nev: "A6 allroad quattro 55 TFSI S tronic",
    ar: 22000000,
}

var tipus8 = {
    mercedes : false,
    nev: "A8L 50 TDI quattro tiptronic",
    ar: 35000000,
}

var tipus9 = {
    mercedes : false,
    nev: "Q7 50 TDI quattro tiptronic",
    ar: 28000000,
}

var tipus10 = {
    mercedes : false,
    nev: "R8 coupé V10 quattro S tronic",
    ar: 60000000,
}

var basic = {
    nev : "Basic",
    ar: 0,
}

var midrange = {
    nev : "Midrange",
    ar: 1500000,
}

var full = {
    nev : "Full",
    ar: 4000000,
}

var auto1 = {
    tipus : tipus1,
    felszereltseg : basic,
    szin : "Fekete",
    kep : function(){
        let magyar = ["Fekete","Szürke","Fehér"];
        let angol = ["black","grey","white"];
        return "images/"+this.tipus.nev+"/"+angol[magyar.indexOf(this.szin)]+".jpg";
    },
    ar : function(){
        return this.tipus.ar*1+this.felszereltseg.ar*1;
    }
}
var auto2 = {
    tipus : tipus1,
    felszereltseg : basic,
    szin : "Szürke",
    kep : function(){
        let magyar = ["Fekete","Szürke","Fehér"];
        let angol = ["black","grey","white"];
        return "images/"+this.tipus.nev+"/"+angol[magyar.indexOf(this.szin)]+".jpg";
    },
    ar : function(){
        return this.tipus.ar*1+this.felszereltseg.ar*1;
    }
}
var auto3 = {
    tipus : tipus1,
    felszereltseg : basic,
    szin : "Fehér",
    kep : function(){
        let magyar = ["Fekete","Szürke","Fehér"];
        let angol = ["black","grey","white"];
        return "images/"+this.tipus.nev+"/"+angol[magyar.indexOf(this.szin)]+".jpg";
    },
    ar : function(){
        return this.tipus.ar*1+this.felszereltseg.ar*1;
    }
}
var auto4 = {
    tipus : tipus1,
    felszereltseg : midrange,
    szin : "Fekete",
    kep : function(){
        let magyar = ["Fekete","Szürke","Fehér"];
        let angol = ["black","grey","white"];
        return "images/"+this.tipus.nev+"/"+angol[magyar.indexOf(this.szin)]+".jpg";
    },
    ar : function(){
        return this.tipus.ar*1+this.felszereltseg.ar*1;
    }
}
var auto5 = {
    tipus : tipus1,
    felszereltseg : midrange,
    szin : "Szürke",
    kep : function(){
        let magyar = ["Fekete","Szürke","Fehér"];
        let angol = ["black","grey","white"];
        return "images/"+this.tipus.nev+"/"+angol[magyar.indexOf(this.szin)]+".jpg";
    },
    ar : function(){
        return this.tipus.ar*1+this.felszereltseg.ar*1;
    }
}
var auto6 = {
    tipus : tipus1,
    felszereltseg : midrange,
    szin : "Fehér",
    kep : function(){
        let magyar = ["Fekete","Szürke","Fehér"];
        let angol = ["black","grey","white"];
        return "images/"+this.tipus.nev+"/"+angol[magyar.indexOf(this.szin)]+".jpg";
    },
    ar : function(){
        return this.tipus.ar*1+this.felszereltseg.ar*1;
    }
}
var auto7 = {
    tipus : tipus1,
    felszereltseg : full,
    szin : "Fekete",
    kep : function(){
        let magyar = ["Fekete","Szürke","Fehér"];
        let angol = ["black","grey","white"];
        return "images/"+this.tipus.nev+"/"+angol[magyar.indexOf(this.szin)]+".jpg";
    },
    ar : function(){
        return this.tipus.ar*1+this.felszereltseg.ar*1;
    }
}
var auto8 = {
    tipus : tipus1,
    felszereltseg : full,
    szin : "Szürke",
    kep : function(){
        let magyar = ["Fekete","Szürke","Fehér"];
        let angol = ["black","grey","white"];
        return "images/"+this.tipus.nev+"/"+angol[magyar.indexOf(this.szin)]+".jpg";
    },
    ar : function(){
        return this.tipus.ar*1+this.felszereltseg.ar*1;
    }
}
var auto9 = {
    tipus : tipus1,
    felszereltseg : full,
    szin : "Fehér",
    kep : function(){
        let magyar = ["Fekete","Szürke","Fehér"];
        let angol = ["black","grey","white"];
        return "images/"+this.tipus.nev+"/"+angol[magyar.indexOf(this.szin)]+".jpg";
    },
    ar : function(){
        return this.tipus.ar*1+this.felszereltseg.ar*1;
    }
}
var auto10 = {
    tipus : tipus2,
    felszereltseg : basic,
    szin : "Fekete",
    kep : function(){
        let magyar = ["Fekete","Szürke","Fehér"];
        let angol = ["black","grey","white"];
        return "images/"+this.tipus.nev+"/"+angol[magyar.indexOf(this.szin)]+".jpg";
    },
    ar : function(){
        return this.tipus.ar*1+this.felszereltseg.ar*1;
    }
}
var auto11 = {
    tipus : tipus2,
    felszereltseg : basic,
    szin : "Szürke",
    kep : function(){
        let magyar = ["Fekete","Szürke","Fehér"];
        let angol = ["black","grey","white"];
        return "images/"+this.tipus.nev+"/"+angol[magyar.indexOf(this.szin)]+".jpg";
    },
    ar : function(){
        return this.tipus.ar*1+this.felszereltseg.ar*1;
    }
}
var auto12 = {
    tipus : tipus2,
    felszereltseg : basic,
    szin : "Fehér",
    kep : function(){
        let magyar = ["Fekete","Szürke","Fehér"];
        let angol = ["black","grey","white"];
        return "images/"+this.tipus.nev+"/"+angol[magyar.indexOf(this.szin)]+".jpg";
    },
    ar : function(){
        return this.tipus.ar*1+this.felszereltseg.ar*1;
    }
}
var auto13 = {
    tipus : tipus2,
    felszereltseg : midrange,
    szin : "Fekete",
    kep : function(){
        let magyar = ["Fekete","Szürke","Fehér"];
        let angol = ["black","grey","white"];
        return "images/"+this.tipus.nev+"/"+angol[magyar.indexOf(this.szin)]+".jpg";
    },
    ar : function(){
        return this.tipus.ar*1+this.felszereltseg.ar*1;
    }
}
var auto14 = {
    tipus : tipus2,
    felszereltseg : midrange,
    szin : "Szürke",
    kep : function(){
        let magyar = ["Fekete","Szürke","Fehér"];
        let angol = ["black","grey","white"];
        return "images/"+this.tipus.nev+"/"+angol[magyar.indexOf(this.szin)]+".jpg";
    },
    ar : function(){
        return this.tipus.ar*1+this.felszereltseg.ar*1;
    }
}
var auto15 = {
    tipus : tipus2,
    felszereltseg : midrange,
    szin : "Fehér",
    kep : function(){
        let magyar = ["Fekete","Szürke","Fehér"];
        let angol = ["black","grey","white"];
        return "images/"+this.tipus.nev+"/"+angol[magyar.indexOf(this.szin)]+".jpg";
    },
    ar : function(){
        return this.tipus.ar*1+this.felszereltseg.ar*1;
    }
}
var auto16 = {
    tipus : tipus2,
    felszereltseg : full,
    szin : "Fekete",
    kep : function(){
        let magyar = ["Fekete","Szürke","Fehér"];
        let angol = ["black","grey","white"];
        return "images/"+this.tipus.nev+"/"+angol[magyar.indexOf(this.szin)]+".jpg";
    },
    ar : function(){
        return this.tipus.ar*1+this.felszereltseg.ar*1;
    }
}
var auto17 = {
    tipus : tipus2,
    felszereltseg : full,
    szin : "Szürke",
    kep : function(){
        let magyar = ["Fekete","Szürke","Fehér"];
        let angol = ["black","grey","white"];
        return "images/"+this.tipus.nev+"/"+angol[magyar.indexOf(this.szin)]+".jpg";
    },
    ar : function(){
        return this.tipus.ar*1+this.felszereltseg.ar*1;
    }
}
var auto18 = {
    tipus : tipus2,
    felszereltseg : full,
    szin : "Fehér",
    kep : function(){
        let magyar = ["Fekete","Szürke","Fehér"];
        let angol = ["black","grey","white"];
        return "images/"+this.tipus.nev+"/"+angol[magyar.indexOf(this.szin)]+".jpg";
    },
    ar : function(){
        return this.tipus.ar*1+this.felszereltseg.ar*1;
    }
}
var auto19 = {
    tipus : tipus3,
    felszereltseg : basic,
    szin : "Fekete",
    kep : function(){
        let magyar = ["Fekete","Szürke","Fehér"];
        let angol = ["black","grey","white"];
        return "images/"+this.tipus.nev+"/"+angol[magyar.indexOf(this.szin)]+".jpg";
    },
    ar : function(){
        return this.tipus.ar*1+this.felszereltseg.ar*1;
    }
}
var auto20 = {
    tipus : tipus3,
    felszereltseg : basic,
    szin : "Szürke",
    kep : function(){
        let magyar = ["Fekete","Szürke","Fehér"];
        let angol = ["black","grey","white"];
        return "images/"+this.tipus.nev+"/"+angol[magyar.indexOf(this.szin)]+".jpg";
    },
    ar : function(){
        return this.tipus.ar*1+this.felszereltseg.ar*1;
    }
}
var auto21 = {
    tipus : tipus3,
    felszereltseg : basic,
    szin : "Fehér",
    kep : function(){
        let magyar = ["Fekete","Szürke","Fehér"];
        let angol = ["black","grey","white"];
        return "images/"+this.tipus.nev+"/"+angol[magyar.indexOf(this.szin)]+".jpg";
    },
    ar : function(){
        return this.tipus.ar*1+this.felszereltseg.ar*1;
    }
}
var auto22 = {
    tipus : tipus3,
    felszereltseg : midrange,
    szin : "Fekete",
    kep : function(){
        let magyar = ["Fekete","Szürke","Fehér"];
        let angol = ["black","grey","white"];
        return "images/"+this.tipus.nev+"/"+angol[magyar.indexOf(this.szin)]+".jpg";
    },
    ar : function(){
        return this.tipus.ar*1+this.felszereltseg.ar*1;
    }
}
var auto23 = {
    tipus : tipus3,
    felszereltseg : midrange,
    szin : "Szürke",
    kep : function(){
        let magyar = ["Fekete","Szürke","Fehér"];
        let angol = ["black","grey","white"];
        return "images/"+this.tipus.nev+"/"+angol[magyar.indexOf(this.szin)]+".jpg";
    },
    ar : function(){
        return this.tipus.ar*1+this.felszereltseg.ar*1;
    }
}
var auto24 = {
    tipus : tipus3,
    felszereltseg : midrange,
    szin : "Fehér",
    kep : function(){
        let magyar = ["Fekete","Szürke","Fehér"];
        let angol = ["black","grey","white"];
        return "images/"+this.tipus.nev+"/"+angol[magyar.indexOf(this.szin)]+".jpg";
    },
    ar : function(){
        return this.tipus.ar*1+this.felszereltseg.ar*1;
    }
}
var auto25 = {
    tipus : tipus3,
    felszereltseg : full,
    szin : "Fekete",
    kep : function(){
        let magyar = ["Fekete","Szürke","Fehér"];
        let angol = ["black","grey","white"];
        return "images/"+this.tipus.nev+"/"+angol[magyar.indexOf(this.szin)]+".jpg";
    },
    ar : function(){
        return this.tipus.ar*1+this.felszereltseg.ar*1;
    }
}
var auto26 = {
    tipus : tipus3,
    felszereltseg : full,
    szin : "Szürke",
    kep : function(){
        let magyar = ["Fekete","Szürke","Fehér"];
        let angol = ["black","grey","white"];
        return "images/"+this.tipus.nev+"/"+angol[magyar.indexOf(this.szin)]+".jpg";
    },
    ar : function(){
        return this.tipus.ar*1+this.felszereltseg.ar*1;
    }
}
var auto27 = {
    tipus : tipus3,
    felszereltseg : full,
    szin : "Fehér",
    kep : function(){
        let magyar = ["Fekete","Szürke","Fehér"];
        let angol = ["black","grey","white"];
        return "images/"+this.tipus.nev+"/"+angol[magyar.indexOf(this.szin)]+".jpg";
    },
    ar : function(){
        return this.tipus.ar*1+this.felszereltseg.ar*1;
    }
}
var auto28 = {
    tipus : tipus4,
    felszereltseg : basic,
    szin : "Fekete",
    kep : function(){
        let magyar = ["Fekete","Szürke","Fehér"];
        let angol = ["black","grey","white"];
        return "images/"+this.tipus.nev+"/"+angol[magyar.indexOf(this.szin)]+".jpg";
    },
    ar : function(){
        return this.tipus.ar*1+this.felszereltseg.ar*1;
    }
}
var auto29 = {
    tipus : tipus4,
    felszereltseg : basic,
    szin : "Szürke",
    kep : function(){
        let magyar = ["Fekete","Szürke","Fehér"];
        let angol = ["black","grey","white"];
        return "images/"+this.tipus.nev+"/"+angol[magyar.indexOf(this.szin)]+".jpg";
    },
    ar : function(){
        return this.tipus.ar*1+this.felszereltseg.ar*1;
    }
}
var auto30 = {
    tipus : tipus4,
    felszereltseg : basic,
    szin : "Fehér",
    kep : function(){
        let magyar = ["Fekete","Szürke","Fehér"];
        let angol = ["black","grey","white"];
        return "images/"+this.tipus.nev+"/"+angol[magyar.indexOf(this.szin)]+".jpg";
    },
    ar : function(){
        return this.tipus.ar*1+this.felszereltseg.ar*1;
    }
}
var auto31 = {
    tipus : tipus4,
    felszereltseg : midrange,
    szin : "Fekete",
    kep : function(){
        let magyar = ["Fekete","Szürke","Fehér"];
        let angol = ["black","grey","white"];
        return "images/"+this.tipus.nev+"/"+angol[magyar.indexOf(this.szin)]+".jpg";
    },
    ar : function(){
        return this.tipus.ar*1+this.felszereltseg.ar*1;
    }
}
var auto32 = {
    tipus : tipus4,
    felszereltseg : midrange,
    szin : "Szürke",
    kep : function(){
        let magyar = ["Fekete","Szürke","Fehér"];
        let angol = ["black","grey","white"];
        return "images/"+this.tipus.nev+"/"+angol[magyar.indexOf(this.szin)]+".jpg";
    },
    ar : function(){
        return this.tipus.ar*1+this.felszereltseg.ar*1;
    }
}
var auto33 = {
    tipus : tipus4,
    felszereltseg : midrange,
    szin : "Fehér",
    kep : function(){
        let magyar = ["Fekete","Szürke","Fehér"];
        let angol = ["black","grey","white"];
        return "images/"+this.tipus.nev+"/"+angol[magyar.indexOf(this.szin)]+".jpg";
    },
    ar : function(){
        return this.tipus.ar*1+this.felszereltseg.ar*1;
    }
}
var auto34 = {
    tipus : tipus4,
    felszereltseg : full,
    szin : "Fekete",
    kep : function(){
        let magyar = ["Fekete","Szürke","Fehér"];
        let angol = ["black","grey","white"];
        return "images/"+this.tipus.nev+"/"+angol[magyar.indexOf(this.szin)]+".jpg";
    },
    ar : function(){
        return this.tipus.ar*1+this.felszereltseg.ar*1;
    }
}
var auto35 = {
    tipus : tipus4,
    felszereltseg : full,
    szin : "Szürke",
    kep : function(){
        let magyar = ["Fekete","Szürke","Fehér"];
        let angol = ["black","grey","white"];
        return "images/"+this.tipus.nev+"/"+angol[magyar.indexOf(this.szin)]+".jpg";
    },
    ar : function(){
        return this.tipus.ar*1+this.felszereltseg.ar*1;
    }
}
var auto36 = {
    tipus : tipus4,
    felszereltseg : full,
    szin : "Fehér",
    kep : function(){
        let magyar = ["Fekete","Szürke","Fehér"];
        let angol = ["black","grey","white"];
        return "images/"+this.tipus.nev+"/"+angol[magyar.indexOf(this.szin)]+".jpg";
    },
    ar : function(){
        return this.tipus.ar*1+this.felszereltseg.ar*1;
    }
}
var auto37 = {
    tipus : tipus5,
    felszereltseg : basic,
    szin : "Fekete",
    kep : function(){
        let magyar = ["Fekete","Szürke","Fehér"];
        let angol = ["black","grey","white"];
        return "images/"+this.tipus.nev+"/"+angol[magyar.indexOf(this.szin)]+".jpg";
    },
    ar : function(){
        return this.tipus.ar*1+this.felszereltseg.ar*1;
    }
}
var auto38 = {
    tipus : tipus5,
    felszereltseg : basic,
    szin : "Szürke",
    kep : function(){
        let magyar = ["Fekete","Szürke","Fehér"];
        let angol = ["black","grey","white"];
        return "images/"+this.tipus.nev+"/"+angol[magyar.indexOf(this.szin)]+".jpg";
    },
    ar : function(){
        return this.tipus.ar*1+this.felszereltseg.ar*1;
    }
}
var auto39 = {
    tipus : tipus5,
    felszereltseg : basic,
    szin : "Fehér",
    kep : function(){
        let magyar = ["Fekete","Szürke","Fehér"];
        let angol = ["black","grey","white"];
        return "images/"+this.tipus.nev+"/"+angol[magyar.indexOf(this.szin)]+".jpg";
    },
    ar : function(){
        return this.tipus.ar*1+this.felszereltseg.ar*1;
    }
}
var auto40 = {
    tipus : tipus5,
    felszereltseg : midrange,
    szin : "Fekete",
    kep : function(){
        let magyar = ["Fekete","Szürke","Fehér"];
        let angol = ["black","grey","white"];
        return "images/"+this.tipus.nev+"/"+angol[magyar.indexOf(this.szin)]+".jpg";
    },
    ar : function(){
        return this.tipus.ar*1+this.felszereltseg.ar*1;
    }
}
var auto41 = {
    tipus : tipus5,
    felszereltseg : midrange,
    szin : "Szürke",
    kep : function(){
        let magyar = ["Fekete","Szürke","Fehér"];
        let angol = ["black","grey","white"];
        return "images/"+this.tipus.nev+"/"+angol[magyar.indexOf(this.szin)]+".jpg";
    },
    ar : function(){
        return this.tipus.ar*1+this.felszereltseg.ar*1;
    }
}
var auto42 = {
    tipus : tipus5,
    felszereltseg : midrange,
    szin : "Fehér",
    kep : function(){
        let magyar = ["Fekete","Szürke","Fehér"];
        let angol = ["black","grey","white"];
        return "images/"+this.tipus.nev+"/"+angol[magyar.indexOf(this.szin)]+".jpg";
    },
    ar : function(){
        return this.tipus.ar*1+this.felszereltseg.ar*1;
    }
}
var auto43 = {
    tipus : tipus5,
    felszereltseg : full,
    szin : "Fekete",
    kep : function(){
        let magyar = ["Fekete","Szürke","Fehér"];
        let angol = ["black","grey","white"];
        return "images/"+this.tipus.nev+"/"+angol[magyar.indexOf(this.szin)]+".jpg";
    },
    ar : function(){
        return this.tipus.ar*1+this.felszereltseg.ar*1;
    }
}
var auto44 = {
    tipus : tipus5,
    felszereltseg : full,
    szin : "Szürke",
    kep : function(){
        let magyar = ["Fekete","Szürke","Fehér"];
        let angol = ["black","grey","white"];
        return "images/"+this.tipus.nev+"/"+angol[magyar.indexOf(this.szin)]+".jpg";
    },
    ar : function(){
        return this.tipus.ar*1+this.felszereltseg.ar*1;
    }
}
var auto45 = {
    tipus : tipus5,
    felszereltseg : full,
    szin : "Fehér",
    kep : function(){
        let magyar = ["Fekete","Szürke","Fehér"];
        let angol = ["black","grey","white"];
        return "images/"+this.tipus.nev+"/"+angol[magyar.indexOf(this.szin)]+".jpg";
    },
    ar : function(){
        return this.tipus.ar*1+this.felszereltseg.ar*1;
    }
}
var auto46 = {
    tipus : tipus6,
    felszereltseg : basic,
    szin : "Fekete",
    kep : function(){
        let magyar = ["Fekete","Szürke","Fehér"];
        let angol = ["black","grey","white"];
        return "images/"+this.tipus.nev+"/"+angol[magyar.indexOf(this.szin)]+".jpg";
    },
    ar : function(){
        return this.tipus.ar*1+this.felszereltseg.ar*1;
    }
}
var auto47 = {
    tipus : tipus6,
    felszereltseg : basic,
    szin : "Szürke",
    kep : function(){
        let magyar = ["Fekete","Szürke","Fehér"];
        let angol = ["black","grey","white"];
        return "images/"+this.tipus.nev+"/"+angol[magyar.indexOf(this.szin)]+".jpg";
    },
    ar : function(){
        return this.tipus.ar*1+this.felszereltseg.ar*1;
    }
}
var auto48 = {
    tipus : tipus6,
    felszereltseg : basic,
    szin : "Fehér",
    kep : function(){
        let magyar = ["Fekete","Szürke","Fehér"];
        let angol = ["black","grey","white"];
        return "images/"+this.tipus.nev+"/"+angol[magyar.indexOf(this.szin)]+".jpg";
    },
    ar : function(){
        return this.tipus.ar*1+this.felszereltseg.ar*1;
    }
}
var auto49 = {
    tipus : tipus6,
    felszereltseg : midrange,
    szin : "Fekete",
    kep : function(){
        let magyar = ["Fekete","Szürke","Fehér"];
        let angol = ["black","grey","white"];
        return "images/"+this.tipus.nev+"/"+angol[magyar.indexOf(this.szin)]+".jpg";
    },
    ar : function(){
        return this.tipus.ar*1+this.felszereltseg.ar*1;
    }
}
var auto50 = {
    tipus : tipus6,
    felszereltseg : midrange,
    szin : "Szürke",
    kep : function(){
        let magyar = ["Fekete","Szürke","Fehér"];
        let angol = ["black","grey","white"];
        return "images/"+this.tipus.nev+"/"+angol[magyar.indexOf(this.szin)]+".jpg";
    },
    ar : function(){
        return this.tipus.ar*1+this.felszereltseg.ar*1;
    }
}
var auto51 = {
    tipus : tipus6,
    felszereltseg : midrange,
    szin : "Fehér",
    kep : function(){
        let magyar = ["Fekete","Szürke","Fehér"];
        let angol = ["black","grey","white"];
        return "images/"+this.tipus.nev+"/"+angol[magyar.indexOf(this.szin)]+".jpg";
    },
    ar : function(){
        return this.tipus.ar*1+this.felszereltseg.ar*1;
    }
}
var auto52 = {
    tipus : tipus6,
    felszereltseg : full,
    szin : "Fekete",
    kep : function(){
        let magyar = ["Fekete","Szürke","Fehér"];
        let angol = ["black","grey","white"];
        return "images/"+this.tipus.nev+"/"+angol[magyar.indexOf(this.szin)]+".jpg";
    },
    ar : function(){
        return this.tipus.ar*1+this.felszereltseg.ar*1;
    }
}
var auto53 = {
    tipus : tipus6,
    felszereltseg : full,
    szin : "Szürke",
    kep : function(){
        let magyar = ["Fekete","Szürke","Fehér"];
        let angol = ["black","grey","white"];
        return "images/"+this.tipus.nev+"/"+angol[magyar.indexOf(this.szin)]+".jpg";
    },
    ar : function(){
        return this.tipus.ar*1+this.felszereltseg.ar*1;
    }
}
var auto54 = {
    tipus : tipus6,
    felszereltseg : full,
    szin : "Fehér",
    kep : function(){
        let magyar = ["Fekete","Szürke","Fehér"];
        let angol = ["black","grey","white"];
        return "images/"+this.tipus.nev+"/"+angol[magyar.indexOf(this.szin)]+".jpg";
    },
    ar : function(){
        return this.tipus.ar*1+this.felszereltseg.ar*1;
    }
}
var auto55 = {
    tipus : tipus7,
    felszereltseg : basic,
    szin : "Fekete",
    kep : function(){
        let magyar = ["Fekete","Szürke","Fehér"];
        let angol = ["black","grey","white"];
        return "images/"+this.tipus.nev+"/"+angol[magyar.indexOf(this.szin)]+".jpg";
    },
    ar : function(){
        return this.tipus.ar*1+this.felszereltseg.ar*1;
    }
}
var auto56 = {
    tipus : tipus7,
    felszereltseg : basic,
    szin : "Szürke",
    kep : function(){
        let magyar = ["Fekete","Szürke","Fehér"];
        let angol = ["black","grey","white"];
        return "images/"+this.tipus.nev+"/"+angol[magyar.indexOf(this.szin)]+".jpg";
    },
    ar : function(){
        return this.tipus.ar*1+this.felszereltseg.ar*1;
    }
}
var auto57 = {
    tipus : tipus7,
    felszereltseg : basic,
    szin : "Fehér",
    kep : function(){
        let magyar = ["Fekete","Szürke","Fehér"];
        let angol = ["black","grey","white"];
        return "images/"+this.tipus.nev+"/"+angol[magyar.indexOf(this.szin)]+".jpg";
    },
    ar : function(){
        return this.tipus.ar*1+this.felszereltseg.ar*1;
    }
}
var auto58 = {
    tipus : tipus7,
    felszereltseg : midrange,
    szin : "Fekete",
    kep : function(){
        let magyar = ["Fekete","Szürke","Fehér"];
        let angol = ["black","grey","white"];
        return "images/"+this.tipus.nev+"/"+angol[magyar.indexOf(this.szin)]+".jpg";
    },
    ar : function(){
        return this.tipus.ar*1+this.felszereltseg.ar*1;
    }
}
var auto59 = {
    tipus : tipus7,
    felszereltseg : midrange,
    szin : "Szürke",
    kep : function(){
        let magyar = ["Fekete","Szürke","Fehér"];
        let angol = ["black","grey","white"];
        return "images/"+this.tipus.nev+"/"+angol[magyar.indexOf(this.szin)]+".jpg";
    },
    ar : function(){
        return this.tipus.ar*1+this.felszereltseg.ar*1;
    }
}
var auto60 = {
    tipus : tipus7,
    felszereltseg : midrange,
    szin : "Fehér",
    kep : function(){
        let magyar = ["Fekete","Szürke","Fehér"];
        let angol = ["black","grey","white"];
        return "images/"+this.tipus.nev+"/"+angol[magyar.indexOf(this.szin)]+".jpg";
    },
    ar : function(){
        return this.tipus.ar*1+this.felszereltseg.ar*1;
    }
}
var auto61 = {
    tipus : tipus7,
    felszereltseg : full,
    szin : "Fekete",
    kep : function(){
        let magyar = ["Fekete","Szürke","Fehér"];
        let angol = ["black","grey","white"];
        return "images/"+this.tipus.nev+"/"+angol[magyar.indexOf(this.szin)]+".jpg";
    },
    ar : function(){
        return this.tipus.ar*1+this.felszereltseg.ar*1;
    }
}
var auto62 = {
    tipus : tipus7,
    felszereltseg : full,
    szin : "Szürke",
    kep : function(){
        let magyar = ["Fekete","Szürke","Fehér"];
        let angol = ["black","grey","white"];
        return "images/"+this.tipus.nev+"/"+angol[magyar.indexOf(this.szin)]+".jpg";
    },
    ar : function(){
        return this.tipus.ar*1+this.felszereltseg.ar*1;
    }
}
var auto63 = {
    tipus : tipus7,
    felszereltseg : full,
    szin : "Fehér",
    kep : function(){
        let magyar = ["Fekete","Szürke","Fehér"];
        let angol = ["black","grey","white"];
        return "images/"+this.tipus.nev+"/"+angol[magyar.indexOf(this.szin)]+".jpg";
    },
    ar : function(){
        return this.tipus.ar*1+this.felszereltseg.ar*1;
    }
}
var auto64 = {
    tipus : tipus8,
    felszereltseg : basic,
    szin : "Fekete",
    kep : function(){
        let magyar = ["Fekete","Szürke","Fehér"];
        let angol = ["black","grey","white"];
        return "images/"+this.tipus.nev+"/"+angol[magyar.indexOf(this.szin)]+".jpg";
    },
    ar : function(){
        return this.tipus.ar*1+this.felszereltseg.ar*1;
    }
}
var auto65 = {
    tipus : tipus8,
    felszereltseg : basic,
    szin : "Szürke",
    kep : function(){
        let magyar = ["Fekete","Szürke","Fehér"];
        let angol = ["black","grey","white"];
        return "images/"+this.tipus.nev+"/"+angol[magyar.indexOf(this.szin)]+".jpg";
    },
    ar : function(){
        return this.tipus.ar*1+this.felszereltseg.ar*1;
    }
}
var auto66 = {
    tipus : tipus8,
    felszereltseg : basic,
    szin : "Fehér",
    kep : function(){
        let magyar = ["Fekete","Szürke","Fehér"];
        let angol = ["black","grey","white"];
        return "images/"+this.tipus.nev+"/"+angol[magyar.indexOf(this.szin)]+".jpg";
    },
    ar : function(){
        return this.tipus.ar*1+this.felszereltseg.ar*1;
    }
}
var auto67 = {
    tipus : tipus8,
    felszereltseg : midrange,
    szin : "Fekete",
    kep : function(){
        let magyar = ["Fekete","Szürke","Fehér"];
        let angol = ["black","grey","white"];
        return "images/"+this.tipus.nev+"/"+angol[magyar.indexOf(this.szin)]+".jpg";
    },
    ar : function(){
        return this.tipus.ar*1+this.felszereltseg.ar*1;
    }
}
var auto68 = {
    tipus : tipus8,
    felszereltseg : midrange,
    szin : "Szürke",
    kep : function(){
        let magyar = ["Fekete","Szürke","Fehér"];
        let angol = ["black","grey","white"];
        return "images/"+this.tipus.nev+"/"+angol[magyar.indexOf(this.szin)]+".jpg";
    },
    ar : function(){
        return this.tipus.ar*1+this.felszereltseg.ar*1;
    }
}
var auto69 = {
    tipus : tipus8,
    felszereltseg : midrange,
    szin : "Fehér",
    kep : function(){
        let magyar = ["Fekete","Szürke","Fehér"];
        let angol = ["black","grey","white"];
        return "images/"+this.tipus.nev+"/"+angol[magyar.indexOf(this.szin)]+".jpg";
    },
    ar : function(){
        return this.tipus.ar*1+this.felszereltseg.ar*1;
    }
}
var auto70 = {
    tipus : tipus8,
    felszereltseg : full,
    szin : "Fekete",
    kep : function(){
        let magyar = ["Fekete","Szürke","Fehér"];
        let angol = ["black","grey","white"];
        return "images/"+this.tipus.nev+"/"+angol[magyar.indexOf(this.szin)]+".jpg";
    },
    ar : function(){
        return this.tipus.ar*1+this.felszereltseg.ar*1;
    }
}
var auto71 = {
    tipus : tipus8,
    felszereltseg : full,
    szin : "Szürke",
    kep : function(){
        let magyar = ["Fekete","Szürke","Fehér"];
        let angol = ["black","grey","white"];
        return "images/"+this.tipus.nev+"/"+angol[magyar.indexOf(this.szin)]+".jpg";
    },
    ar : function(){
        return this.tipus.ar*1+this.felszereltseg.ar*1;
    }
}
var auto72 = {
    tipus : tipus8,
    felszereltseg : full,
    szin : "Fehér",
    kep : function(){
        let magyar = ["Fekete","Szürke","Fehér"];
        let angol = ["black","grey","white"];
        return "images/"+this.tipus.nev+"/"+angol[magyar.indexOf(this.szin)]+".jpg";
    },
    ar : function(){
        return this.tipus.ar*1+this.felszereltseg.ar*1;
    }
}
var auto73 = {
    tipus : tipus9,
    felszereltseg : basic,
    szin : "Fekete",
    kep : function(){
        let magyar = ["Fekete","Szürke","Fehér"];
        let angol = ["black","grey","white"];
        return "images/"+this.tipus.nev+"/"+angol[magyar.indexOf(this.szin)]+".jpg";
    },
    ar : function(){
        return this.tipus.ar*1+this.felszereltseg.ar*1;
    }
}
var auto74 = {
    tipus : tipus9,
    felszereltseg : basic,
    szin : "Szürke",
    kep : function(){
        let magyar = ["Fekete","Szürke","Fehér"];
        let angol = ["black","grey","white"];
        return "images/"+this.tipus.nev+"/"+angol[magyar.indexOf(this.szin)]+".jpg";
    },
    ar : function(){
        return this.tipus.ar*1+this.felszereltseg.ar*1;
    }
}
var auto75 = {
    tipus : tipus9,
    felszereltseg : basic,
    szin : "Fehér",
    kep : function(){
        let magyar = ["Fekete","Szürke","Fehér"];
        let angol = ["black","grey","white"];
        return "images/"+this.tipus.nev+"/"+angol[magyar.indexOf(this.szin)]+".jpg";
    },
    ar : function(){
        return this.tipus.ar*1+this.felszereltseg.ar*1;
    }
}
var auto76 = {
    tipus : tipus9,
    felszereltseg : midrange,
    szin : "Fekete",
    kep : function(){
        let magyar = ["Fekete","Szürke","Fehér"];
        let angol = ["black","grey","white"];
        return "images/"+this.tipus.nev+"/"+angol[magyar.indexOf(this.szin)]+".jpg";
    },
    ar : function(){
        return this.tipus.ar*1+this.felszereltseg.ar*1;
    }
}
var auto77 = {
    tipus : tipus9,
    felszereltseg : midrange,
    szin : "Szürke",
    kep : function(){
        let magyar = ["Fekete","Szürke","Fehér"];
        let angol = ["black","grey","white"];
        return "images/"+this.tipus.nev+"/"+angol[magyar.indexOf(this.szin)]+".jpg";
    },
    ar : function(){
        return this.tipus.ar*1+this.felszereltseg.ar*1;
    }
}
var auto78 = {
    tipus : tipus9,
    felszereltseg : midrange,
    szin : "Fehér",
    kep : function(){
        let magyar = ["Fekete","Szürke","Fehér"];
        let angol = ["black","grey","white"];
        return "images/"+this.tipus.nev+"/"+angol[magyar.indexOf(this.szin)]+".jpg";
    },
    ar : function(){
        return this.tipus.ar*1+this.felszereltseg.ar*1;
    }
}
var auto79 = {
    tipus : tipus9,
    felszereltseg : full,
    szin : "Fekete",
    kep : function(){
        let magyar = ["Fekete","Szürke","Fehér"];
        let angol = ["black","grey","white"];
        return "images/"+this.tipus.nev+"/"+angol[magyar.indexOf(this.szin)]+".jpg";
    },
    ar : function(){
        return this.tipus.ar*1+this.felszereltseg.ar*1;
    }
}
var auto80 = {
    tipus : tipus9,
    felszereltseg : full,
    szin : "Szürke",
    kep : function(){
        let magyar = ["Fekete","Szürke","Fehér"];
        let angol = ["black","grey","white"];
        return "images/"+this.tipus.nev+"/"+angol[magyar.indexOf(this.szin)]+".jpg";
    },
    ar : function(){
        return this.tipus.ar*1+this.felszereltseg.ar*1;
    }
}
var auto81 = {
    tipus : tipus9,
    felszereltseg : full,
    szin : "Fehér",
    kep : function(){
        let magyar = ["Fekete","Szürke","Fehér"];
        let angol = ["black","grey","white"];
        return "images/"+this.tipus.nev+"/"+angol[magyar.indexOf(this.szin)]+".jpg";
    },
    ar : function(){
        return this.tipus.ar*1+this.felszereltseg.ar*1;
    }
}
var auto82 = {
    tipus : tipus10,
    felszereltseg : basic,
    szin : "Fekete",
    kep : function(){
        let magyar = ["Fekete","Szürke","Fehér"];
        let angol = ["black","grey","white"];
        return "images/"+this.tipus.nev+"/"+angol[magyar.indexOf(this.szin)]+".jpg";
    },
    ar : function(){
        return this.tipus.ar*1+this.felszereltseg.ar*1;
    }
}
var auto83 = {
    tipus : tipus10,
    felszereltseg : basic,
    szin : "Szürke",
    kep : function(){
        let magyar = ["Fekete","Szürke","Fehér"];
        let angol = ["black","grey","white"];
        return "images/"+this.tipus.nev+"/"+angol[magyar.indexOf(this.szin)]+".jpg";
    },
    ar : function(){
        return this.tipus.ar*1+this.felszereltseg.ar*1;
    }
}
var auto84 = {
    tipus : tipus10,
    felszereltseg : basic,
    szin : "Fehér",
    kep : function(){
        let magyar = ["Fekete","Szürke","Fehér"];
        let angol = ["black","grey","white"];
        return "images/"+this.tipus.nev+"/"+angol[magyar.indexOf(this.szin)]+".jpg";
    },
    ar : function(){
        return this.tipus.ar*1+this.felszereltseg.ar*1;
    }
}
var auto85 = {
    tipus : tipus10,
    felszereltseg : midrange,
    szin : "Fekete",
    kep : function(){
        let magyar = ["Fekete","Szürke","Fehér"];
        let angol = ["black","grey","white"];
        return "images/"+this.tipus.nev+"/"+angol[magyar.indexOf(this.szin)]+".jpg";
    },
    ar : function(){
        return this.tipus.ar*1+this.felszereltseg.ar*1;
    }
}
var auto86 = {
    tipus : tipus10,
    felszereltseg : midrange,
    szin : "Szürke",
    kep : function(){
        let magyar = ["Fekete","Szürke","Fehér"];
        let angol = ["black","grey","white"];
        return "images/"+this.tipus.nev+"/"+angol[magyar.indexOf(this.szin)]+".jpg";
    },
    ar : function(){
        return this.tipus.ar*1+this.felszereltseg.ar*1;
    }
}
var auto87 = {
    tipus : tipus10,
    felszereltseg : midrange,
    szin : "Fehér",
    kep : function(){
        let magyar = ["Fekete","Szürke","Fehér"];
        let angol = ["black","grey","white"];
        return "images/"+this.tipus.nev+"/"+angol[magyar.indexOf(this.szin)]+".jpg";
    },
    ar : function(){
        return this.tipus.ar*1+this.felszereltseg.ar*1;
    }
}
var auto88 = {
    tipus : tipus10,
    felszereltseg : full,
    szin : "Fekete",
    kep : function(){
        let magyar = ["Fekete","Szürke","Fehér"];
        let angol = ["black","grey","white"];
        return "images/"+this.tipus.nev+"/"+angol[magyar.indexOf(this.szin)]+".jpg";
    },
    ar : function(){
        return this.tipus.ar*1+this.felszereltseg.ar*1;
    }
}
var auto89 = {
    tipus : tipus10,
    felszereltseg : full,
    szin : "Szürke",
    kep : function(){
        let magyar = ["Fekete","Szürke","Fehér"];
        let angol = ["black","grey","white"];
        return "images/"+this.tipus.nev+"/"+angol[magyar.indexOf(this.szin)]+".jpg";
    },
    ar : function(){
        return this.tipus.ar*1+this.felszereltseg.ar*1;
    }
}
var auto90 = {
    tipus : tipus10,
    felszereltseg : full,
    szin : "Fehér",
    kep : function(){
        let magyar = ["Fekete","Szürke","Fehér"];
        let angol = ["black","grey","white"];
        return "images/"+this.tipus.nev+"/"+angol[magyar.indexOf(this.szin)]+".jpg";
    },
    ar : function(){
        return this.tipus.ar*1+this.felszereltseg.ar*1;
    }
}

let autok = new Array();
autok.push(auto1);
autok.push(auto2);
autok.push(auto3);
autok.push(auto4);
autok.push(auto5);
autok.push(auto6);
autok.push(auto7);
autok.push(auto8);
autok.push(auto9);
autok.push(auto10);
autok.push(auto11);
autok.push(auto12);
autok.push(auto13);
autok.push(auto14);
autok.push(auto15);
autok.push(auto16);
autok.push(auto17);
autok.push(auto18);
autok.push(auto19);
autok.push(auto20);
autok.push(auto21);
autok.push(auto22);
autok.push(auto23);
autok.push(auto24);
autok.push(auto25);
autok.push(auto26);
autok.push(auto27);
autok.push(auto28);
autok.push(auto29);
autok.push(auto30);
autok.push(auto31);
autok.push(auto32);
autok.push(auto33);
autok.push(auto34);
autok.push(auto35);
autok.push(auto36);
autok.push(auto37);
autok.push(auto38);
autok.push(auto39);
autok.push(auto40);
autok.push(auto41);
autok.push(auto42);
autok.push(auto43);
autok.push(auto44);
autok.push(auto45);
autok.push(auto46);
autok.push(auto47);
autok.push(auto48);
autok.push(auto49);
autok.push(auto50);
autok.push(auto51);
autok.push(auto52);
autok.push(auto53);
autok.push(auto54);
autok.push(auto55);
autok.push(auto56);
autok.push(auto57);
autok.push(auto58);
autok.push(auto59);
autok.push(auto60);
autok.push(auto61);
autok.push(auto62);
autok.push(auto63);
autok.push(auto64);
autok.push(auto65);
autok.push(auto66);
autok.push(auto67);
autok.push(auto68);
autok.push(auto69);
autok.push(auto70);
autok.push(auto71);
autok.push(auto72);
autok.push(auto73);
autok.push(auto74);
autok.push(auto75);
autok.push(auto76);
autok.push(auto77);
autok.push(auto78);
autok.push(auto79);
autok.push(auto80);
autok.push(auto81);
autok.push(auto82);
autok.push(auto83);
autok.push(auto84);
autok.push(auto85);
autok.push(auto86);
autok.push(auto87);
autok.push(auto88);
autok.push(auto89);
autok.push(auto90);

let tipusok = new Array();
tipusok.push(tipus1);
tipusok.push(tipus2);
tipusok.push(tipus3);
tipusok.push(tipus4);
tipusok.push(tipus5);
tipusok.push(tipus6);
tipusok.push(tipus7);
tipusok.push(tipus8);
tipusok.push(tipus9);
tipusok.push(tipus10);

function selectFeltolt(){
    for (i = document.forms['urlap']['tipus'].length - 1; i >= 1; i--) {
        document.forms['urlap']['tipus'].remove(i);
    }
    for(let i = 0; i < 10; i++){
        var newOption = document.createElement('OPTION');
        var newOptionValue = document.createTextNode(tipusok[i].nev);
        newOption.appendChild(newOptionValue);
        document.forms['urlap']['tipus'].insertBefore(newOption,document.forms['urlap']['tipus'].lastChild);
    }
}

function markaFeltolt(){
    var merci = document.forms['urlap']['marka'].value == 'Mercedes-Benz';
    for (i = document.forms['urlap']['tipus'].length - 1; i >= 1; i--) {
        document.forms['urlap']['tipus'].remove(i);
    }
    if(merci){
        for(let i = 0; i < 10; i++){
            if(tipusok[i].mercedes){
                var newOption = document.createElement('OPTION');
                var newOptionValue = document.createTextNode(tipusok[i].nev);
                newOption.appendChild(newOptionValue);
                document.forms['urlap']['tipus'].insertBefore(newOption,document.forms['urlap']['tipus'].lastChild);
            }
        }
    }else{
        for(let i = 0; i < 10; i++){
            if(!tipusok[i].mercedes){
                var newOption = document.createElement('OPTION');
                var newOptionValue = document.createTextNode(tipusok[i].nev);
                newOption.appendChild(newOptionValue);
                document.forms['urlap']['tipus'].insertBefore(newOption,document.forms['urlap']['tipus'].lastChild);
            }
        }
    }
}

function listaz(){
    let merci = document.forms['urlap']['marka'].value == 'Mercedes-Benz';
    let tipus = document.forms['urlap']['tipus'].value;
    let szin = document.forms['urlap']['szin'].value;
    let felszereltseg = document.forms['urlap']['felsz'].value;
    console.log(felszereltseg);
    if(merci){
        for(let i = 0; i < autok.length; i++){
            if(autok[i].tipus.mercedes && autok[i].tipus.nev == tipus && autok[i].szin == szin && autok[i].felszereltseg.nev == felszereltseg){
                console.log(autok[i].kep());
                $('autokep').src = autok[i].kep();
                $('ar').innerHTML ="Az autó ára: "+autok[i].ar()+" Ft";
                break;
            }
        }
    }else{
        for(let i = 0; i < autok.length; i++){
            if(!autok[i].tipus.mercedes && autok[i].tipus.nev == tipus && autok[i].szin == szin && autok[i].felszereltseg.nev == felszereltseg){
                console.log(autok[i].kep);
                $('autokep').src = autok[i].kep();
                $('ar').innerHTML ="Az autó ára: "+autok[i].ar()+" Ft";
                break;
            }
        }
    }
}

function init(){
    selectFeltolt();
    $('marka').addEventListener('click', markaFeltolt, false);
    $('gomb').addEventListener('click', listaz, false);
}

window.addEventListener("load", init, false);