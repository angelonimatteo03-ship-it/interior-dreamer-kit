// Catalogo importato da Google Sheets: solo prodotti con larghezza e profondità ufficiali.
import type { Product } from "./products";

export const IMPORTED_PRODUCTS: Omit<Product, "id">[] = [
  {
    "nome": "Geller - Divano 3/4 posti in tessuto rivestito bianca",
    "categoria": "Divani",
    "prezzo": 1299,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-3-4-posti-in-tessuto-rivestito-bianca-1000-10-14-193657_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-3-4-posti-in-tessuto-rivestito-bianca-geller-193657.htm",
    "larghezza_cm": 234,
    "profondita_cm": 108,
    "descrizione": "Divano 3/4 posti in tessuto rivestito bianca"
  },
  {
    "nome": "Nio - Divano letto pieghevole 2 posti grigio chiaro",
    "categoria": "Divani",
    "prezzo": 339,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-letto-pieghevole-2-posti-grigio-chiaro-1000-11-27-186331_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-letto-pieghevole-2-posti-grigio-chiaro-nio-186331.htm",
    "larghezza_cm": 150,
    "profondita_cm": 91,
    "descrizione": "Divano letto pieghevole 2 posti grigio chiaro"
  },
  {
    "nome": "Poltrona in tessuto poliestere verde effetto velluto con gambe in legno di hevea",
    "categoria": "Divani",
    "prezzo": 159,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/253697_0/poltrona-in-tessuto-poliestere-verde-effetto-velluto-con-gambe-in-legno-di-hevea.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-in-tessuto-poliestere-verde-effetto-velluto-con-gambe-in-legno-di-hevea-253697.htm",
    "larghezza_cm": 65,
    "profondita_cm": 58,
    "descrizione": "Poltrona in tessuto poliestere verde effetto velluto con gambe in legno di hevea"
  },
  {
    "nome": "Clyde - Sedia in tessuto riciclato beige e gambe in acciaio effetto rovere",
    "categoria": "Sedie",
    "prezzo": 45.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-in-tessuto-riciclato-beige-e-gambe-in-acciaio-effetto-rovere-1000-4-10-238548_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-in-tessuto-riciclato-beige-e-gambe-in-acciaio-effetto-rovere-clyde-238548.htm",
    "larghezza_cm": 44,
    "profondita_cm": 55,
    "descrizione": "Sedia in tessuto riciclato beige e gambe in acciaio effetto rovere"
  },
  {
    "nome": "Tavolo da pranzo rettangolare in legno di mango chiaro per 8-12 persone, lung. 240 cm",
    "categoria": "Tavoli da pranzo",
    "prezzo": 1199,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/254024_0/tavolo-da-pranzo-rettangolare-in-legno-di-mango-chiaro-per-8-12-persone-lung-240-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tavolo-da-pranzo-rettangolare-in-legno-di-mango-chiaro-per-8-12-persone-lung-240-cm-254024.htm",
    "larghezza_cm": 240,
    "profondita_cm": 100,
    "descrizione": "Tavolo da pranzo rettangolare in legno di mango chiaro per 8-12 persone, lung. 240 cm"
  },
  {
    "nome": "Stockholm - Porta-TV a 3 cassetti in sheesham massiccio e acacia lung. 160 cm",
    "categoria": "Mobili TV",
    "prezzo": 589,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/129988_0/porta-tv-a-3-cassetti-in-sheesham-massiccio-e-acacia-lung-160-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/porta-tv-a-3-cassetti-in-sheesham-massiccio-e-acacia-lung-160-cm-stockholm-129988.htm",
    "larghezza_cm": 160,
    "profondita_cm": 46,
    "descrizione": "Porta-TV a 3 cassetti in sheesham massiccio e acacia lung. 160 cm"
  },
  {
    "nome": "Credenza verde a 3 ante e 3 cassetti lung. 145 cm",
    "categoria": "Cassettiere",
    "prezzo": 899,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/252219_0/credenza-verde-a-3-ante-e-3-cassetti-lung-145-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/credenza-verde-a-3-ante-e-3-cassetti-lung-145-cm-252219.htm",
    "larghezza_cm": 145,
    "profondita_cm": 50,
    "descrizione": "Credenza verde a 3 ante e 3 cassetti lung. 145 cm"
  },
  {
    "nome": "Griffith - Libreria destrutturata vintage a 2 ante marrone",
    "categoria": "Librerie",
    "prezzo": 699,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/libreria-destrutturata-vintage-a-2-ante-marrone-1000-7-18-248683_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/libreria-destrutturata-vintage-a-2-ante-marrone-griffith-248683.htm",
    "larghezza_cm": 123,
    "profondita_cm": 43.5,
    "descrizione": "Libreria destrutturata vintage a 2 ante marrone"
  },
  {
    "nome": "Spring - Comodino bianco e beige con 1 cassetto",
    "categoria": "Letti",
    "prezzo": 39.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/comodino-bianco-e-beige-con-1-cassetto-1000-1-26-209577_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/comodino-bianco-e-beige-con-1-cassetto-spring-209577.htm",
    "larghezza_cm": 42,
    "profondita_cm": 30,
    "descrizione": "Comodino bianco e beige con 1 cassetto"
  },
  {
    "nome": "Barcares - Divanetto da giardino 2 posti in legno massello di acacia e cuscini écru",
    "categoria": "Divani",
    "prezzo": 599,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divanetto-da-giardino-2-posti-in-legno-massello-di-acacia-e-cuscini-ecru-1000-10-0-238333_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divanetto-da-giardino-2-posti-in-legno-massello-di-acacia-e-cuscini-ecru-barcares-238333.htm",
    "larghezza_cm": 147,
    "profondita_cm": 86.1,
    "descrizione": "Divanetto da giardino 2 posti in legno massello di acacia e cuscini écru"
  },
  {
    "nome": "Tela di lino stampata con motivi floreali, 152x122 cm",
    "categoria": "Decorazioni",
    "prezzo": 149,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/201261_0/tela-di-lino-stampata-con-motivi-floreali-152x122-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tela-di-lino-stampata-con-motivi-floreali-152x122-cm-201261.htm",
    "larghezza_cm": 152,
    "profondita_cm": 4,
    "descrizione": "Tela di lino stampata con motivi floreali, 152x122 cm"
  },
  {
    "nome": "Orologio da parete in acciaio dorato con cerchi Ø 60 cm",
    "categoria": "Decorazioni",
    "prezzo": 29.99,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/215208_0/orologio-da-parete-in-acciaio-dorato-con-cerchi-oe-60-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/orologio-da-parete-in-acciaio-dorato-con-cerchi-oe-60-cm-215208.htm",
    "larghezza_cm": 60,
    "profondita_cm": 3,
    "descrizione": "Orologio da parete in acciaio dorato con cerchi Ø 60 cm"
  },
  {
    "nome": "Lampada in ceramica striato beige con paralume in poliestere riciclato",
    "categoria": "Lampade",
    "prezzo": 39.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/lampada-in-ceramica-striato-beige-con-paralume-in-poliestere-riciclato-1000-5-23-211009_3.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/lampada-in-ceramica-striato-beige-con-paralume-in-poliestere-riciclato-211009.htm",
    "larghezza_cm": 28,
    "profondita_cm": 28,
    "descrizione": "Lampada in ceramica striato beige con paralume in poliestere riciclato"
  },
  {
    "nome": "Decorazione da parete a forma di canestro da basket, 56x68 cm",
    "categoria": "Decorazioni",
    "prezzo": 79.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/decorazione-da-parete-a-forma-di-canestro-da-basket-56x68-cm-1000-8-35-241238_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/decorazione-da-parete-a-forma-di-canestro-da-basket-56x68-cm-241238.htm",
    "larghezza_cm": 56,
    "profondita_cm": 40,
    "descrizione": "Decorazione da parete a forma di canestro da basket, 56x68 cm"
  },
  {
    "nome": "Bouquet di fiori secchi blu e beige",
    "categoria": "Decorazioni",
    "prezzo": 6.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/bouquet-di-fiori-secchi-blu-e-beige-1000-4-19-246470_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/bouquet-di-fiori-secchi-blu-e-beige-246470.htm",
    "larghezza_cm": 31,
    "profondita_cm": 17,
    "descrizione": "Bouquet di fiori secchi blu e beige"
  },
  {
    "nome": "Bambù artificiale da esterno con vaso",
    "categoria": "Decorazioni",
    "prezzo": 69.5,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/250028/bambu-artificiale-da-esterno-con-vaso.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/bambu-artificiale-da-esterno-con-vaso-250028.htm",
    "larghezza_cm": 80,
    "profondita_cm": 75,
    "descrizione": "Bambù artificiale da esterno con vaso"
  },
  {
    "nome": "Vaso in terracotta grigio chiné alt. 25cm",
    "categoria": "Decorazioni",
    "prezzo": 14.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/vaso-in-terracotta-grigio-chine-alt-25cm-1000-5-4-226734_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/vaso-in-terracotta-grigio-chine-alt-25cm-226734.htm",
    "larghezza_cm": 14,
    "profondita_cm": 14,
    "descrizione": "Vaso in terracotta grigio chiné alt. 25cm"
  },
  {
    "nome": "Candela profumata tortora alt. 10 cm, 330g",
    "categoria": "Decorazioni",
    "prezzo": 4.15,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/candela-profumata-tortora-alt-10-cm-330g-1000-0-4-246619_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/candela-profumata-tortora-alt-10-cm-330g-246619.htm",
    "larghezza_cm": 7,
    "profondita_cm": 7,
    "descrizione": "Candela profumata tortora alt. 10 cm, 330g"
  },
  {
    "nome": "Cuscino ricamati écru, giallo, terracotta 30x50",
    "categoria": "Tappeti",
    "prezzo": 19.99,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/209964_0/cuscino-ricamati-ecru-giallo-terracotta-30x50.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/cuscino-ricamati-ecru-giallo-terracotta-30x50-209964.htm",
    "larghezza_cm": 50,
    "profondita_cm": 10,
    "descrizione": "Cuscino ricamati écru, giallo, terracotta 30x50"
  },
  {
    "nome": "Selena - Armadio a 2 ante e 1 cassetto verde kaki 104 cm",
    "categoria": "Armadi",
    "prezzo": 599,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/249912/armadio-a-2-ante-e-1-cassetto-verde-kaki-104-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/armadio-a-2-ante-e-1-cassetto-verde-kaki-104-cm-selena-249912.htm",
    "larghezza_cm": 104,
    "profondita_cm": 49.5,
    "descrizione": "Armadio a 2 ante e 1 cassetto verde kaki 104 cm"
  },
  {
    "nome": "Portasapone in terracotta bianca con decoro in rilievo",
    "categoria": "Bagno",
    "prezzo": 6.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/portasapone-in-terracotta-bianca-con-decoro-in-rilievo-1000-0-6-246908_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/portasapone-in-terracotta-bianca-con-decoro-in-rilievo-246908.htm",
    "larghezza_cm": 12.8,
    "profondita_cm": 8.5,
    "descrizione": "Portasapone in terracotta bianca con decoro in rilievo"
  },
  {
    "nome": "Cucina giocattolo multicolore",
    "categoria": "Cucina",
    "prezzo": 44.95,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/cucina-giocattolo-multicolore-1000-0-8-241621_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/cucina-giocattolo-multicolore-241621.htm",
    "larghezza_cm": 38,
    "profondita_cm": 26,
    "descrizione": "Cucina giocattolo multicolore"
  },
  {
    "nome": "Servizio da 12 piatti in ceramica bianca e beige",
    "categoria": "Cucina",
    "prezzo": 49.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/servizio-da-12-piatti-in-ceramica-bianca-e-beige-1000-4-2-232513_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/servizio-da-12-piatti-in-ceramica-bianca-e-beige-232513.htm",
    "larghezza_cm": 44,
    "profondita_cm": 16.5,
    "descrizione": "Servizio da 12 piatti in ceramica bianca e beige"
  },
  {
    "nome": "Set di 3 utensili da cucina in legno di faggio e silicone beige",
    "categoria": "Cucina",
    "prezzo": 12.99,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/250360/set-di-3-utensili-da-cucina-in-legno-di-faggio-e-silicone-beige.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/set-di-3-utensili-da-cucina-in-legno-di-faggio-e-silicone-beige-250360.htm",
    "larghezza_cm": 12,
    "profondita_cm": 36,
    "descrizione": "Set di 3 utensili da cucina in legno di faggio e silicone beige"
  },
  {
    "nome": "Lilo - Divano angolare con penisola a sinistra 4/5 posti bouclé ecru",
    "categoria": "Divani",
    "prezzo": 1699,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/249793_0/divano-angolare-con-penisola-a-sinistra-4-5-posti-boucle-ecru.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-angolare-con-penisola-a-sinistra-4-5-posti-boucle-ecru-lilo-249793.htm",
    "larghezza_cm": 272,
    "profondita_cm": 168,
    "descrizione": "Divano angolare con penisola a sinistra 4/5 posti bouclé ecru"
  },
  {
    "nome": "Jules - Divano angolare antracite 3 posti",
    "categoria": "Divani",
    "prezzo": 399,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-angolare-antracite-3-posti-1000-16-34-147593_0.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-angolare-antracite-3-posti-jules-147593.htm",
    "larghezza_cm": 205,
    "profondita_cm": 145,
    "descrizione": "Divano angolare antracite 3 posti"
  },
  {
    "nome": "Meyer - Poltrona vintage con motivi grafici bianchi e neri",
    "categoria": "Divani",
    "prezzo": 279,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltrona-vintage-con-motivi-grafici-bianchi-e-neri-1000-2-14-198987_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-vintage-con-motivi-grafici-bianchi-e-neri-meyer-198987.htm",
    "larghezza_cm": 66.5,
    "profondita_cm": 73.5,
    "descrizione": "Poltrona vintage con motivi grafici bianchi e neri"
  },
  {
    "nome": "Set di 2 sedie in acciaio beige e tessuto riciclato beige",
    "categoria": "Sedie",
    "prezzo": 89.99,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/252559/set-di-2-sedie-in-acciaio-beige-e-tessuto-riciclato-beige.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/set-di-2-sedie-in-acciaio-beige-e-tessuto-riciclato-beige-252559.htm",
    "larghezza_cm": 49,
    "profondita_cm": 49.5,
    "descrizione": "Set di 2 sedie in acciaio beige e tessuto riciclato beige"
  },
  {
    "nome": "Portobello - Tavolo da pranzo allungabile per 8/12 persone lung. 200/300 cm",
    "categoria": "Tavoli da pranzo",
    "prezzo": 799,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/165749_0/tavolo-da-pranzo-allungabile-per-8-12-persone-lung-200-300-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tavolo-da-pranzo-allungabile-per-8-12-persone-lung-200-300-cm-portobello-165749.htm",
    "larghezza_cm": 200,
    "profondita_cm": 100,
    "descrizione": "Tavolo da pranzo allungabile per 8/12 persone lung. 200/300 cm"
  },
  {
    "nome": "Griffith - Mobile TV vintage a 2 ante scorrevoli lung. 201 cm",
    "categoria": "Mobili TV",
    "prezzo": 449,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/248559_0/mobile-tv-vintage-a-2-ante-scorrevoli-lung-201-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/mobile-tv-vintage-a-2-ante-scorrevoli-lung-201-cm-griffith-248559.htm",
    "larghezza_cm": 201,
    "profondita_cm": 40,
    "descrizione": "Mobile TV vintage a 2 ante scorrevoli lung. 201 cm"
  },
  {
    "nome": "Credenza a 2 ante in vetro e acciaio verde salvia, lung. 90 cm",
    "categoria": "Cassettiere",
    "prezzo": 599,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/253941_0/credenza-a-2-ante-in-vetro-e-acciaio-verde-salvia-lung-90-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/credenza-a-2-ante-in-vetro-e-acciaio-verde-salvia-lung-90-cm-253941.htm",
    "larghezza_cm": 90,
    "profondita_cm": 48,
    "descrizione": "Credenza a 2 ante in vetro e acciaio verde salvia, lung. 90 cm"
  },
  {
    "nome": "Versailles - Libreria a 2 cassetti e 4 ante con scala bianca",
    "categoria": "Librerie",
    "prezzo": 1799,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/228440_0/libreria-a-2-cassetti-e-4-ante-con-scala-bianca.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/libreria-a-2-cassetti-e-4-ante-con-scala-bianca-versailles-228440.htm",
    "larghezza_cm": 202,
    "profondita_cm": 41.3,
    "descrizione": "Libreria a 2 cassetti e 4 ante con scala bianca"
  },
  {
    "nome": "Perroquet - Comodino a 1 anta, 1 cassetto nero e dorato con motivi",
    "categoria": "Letti",
    "prezzo": 149,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/comodino-a-1-anta-1-cassetto-nero-e-dorato-con-motivi-1000-8-24-216299_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/comodino-a-1-anta-1-cassetto-nero-e-dorato-con-motivi-perroquet-216299.htm",
    "larghezza_cm": 41,
    "profondita_cm": 32,
    "descrizione": "Comodino a 1 anta, 1 cassetto nero e dorato con motivi"
  },
  {
    "nome": "Lazaro - Modulo chaise longue da giardino in poliestere reciclato grigio perlato",
    "categoria": "Divani",
    "prezzo": 849,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/modulo-chaise-longue-da-giardino-in-poliestere-reciclato-grigio-perlato-1000-11-17-246222_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/modulo-chaise-longue-da-giardino-in-poliestere-reciclato-grigio-perlato-lazaro-246222.htm",
    "larghezza_cm": 186,
    "profondita_cm": 106,
    "descrizione": "Modulo chaise longue da giardino in poliestere reciclato grigio perlato"
  },
  {
    "nome": "Trittico su tele con rilievi bianchi, 104x70 cm",
    "categoria": "Decorazioni",
    "prezzo": 99.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/trittico-su-tele-con-rilievi-bianchi-104x70-cm-1000-6-35-249889_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/trittico-su-tele-con-rilievi-bianchi-104x70-cm-249889.htm",
    "larghezza_cm": 103.5,
    "profondita_cm": 3,
    "descrizione": "Trittico su tele con rilievi bianchi, 104x70 cm"
  },
  {
    "nome": "Orologio da parete in legno traforato Ø 50 cm",
    "categoria": "Decorazioni",
    "prezzo": 22.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/orologio-da-parete-in-legno-traforato-oe-50-cm-1000-1-35-194498_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/orologio-da-parete-in-legno-traforato-oe-50-cm-194498.htm",
    "larghezza_cm": 50,
    "profondita_cm": 2.5,
    "descrizione": "Orologio da parete in legno traforato Ø 50 cm"
  },
  {
    "nome": "Lampada in ceramica con paralume in poliestere riciclato color crema",
    "categoria": "Lampade",
    "prezzo": 29.99,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/253134/lampada-in-ceramica-con-paralume-in-poliestere-riciclato-color-crema.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/lampada-in-ceramica-con-paralume-in-poliestere-riciclato-color-crema-253134.htm",
    "larghezza_cm": 23,
    "profondita_cm": 23,
    "descrizione": "Lampada in ceramica con paralume in poliestere riciclato color crema"
  },
  {
    "nome": "Decorazioni da parete: fiori e cerchi in ghisa dorata (x2)",
    "categoria": "Decorazioni",
    "prezzo": 29.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/decorazioni-da-parete-fiori-e-cerchi-in-ghisa-dorata-x2-1000-13-8-247074_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/decorazioni-da-parete-fiori-e-cerchi-in-ghisa-dorata-x2-247074.htm",
    "larghezza_cm": 50,
    "profondita_cm": 2.5,
    "descrizione": "Decorazioni da parete: fiori e cerchi in ghisa dorata (x2)"
  },
  {
    "nome": "Bouquet di fiori essiccati verdi",
    "categoria": "Decorazioni",
    "prezzo": 34.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/bouquet-di-fiori-essiccati-verdi-1000-16-27-240328_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/bouquet-di-fiori-essiccati-verdi-240328.htm",
    "larghezza_cm": 55,
    "profondita_cm": 35,
    "descrizione": "Bouquet di fiori essiccati verdi"
  },
  {
    "nome": "Pianta artificiale in vaso intrecciato",
    "categoria": "Decorazioni",
    "prezzo": 149,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/pianta-artificiale-in-vaso-intrecciato-1000-14-20-248316_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/pianta-artificiale-in-vaso-intrecciato-248316.htm",
    "larghezza_cm": 80,
    "profondita_cm": 80,
    "descrizione": "Pianta artificiale in vaso intrecciato"
  },
  {
    "nome": "Vaso in ceramica dorato alt. 28 cm",
    "categoria": "Decorazioni",
    "prezzo": 14.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/vaso-in-ceramica-dorato-alt-28-cm-1000-3-32-178792_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/vaso-in-ceramica-dorato-alt-28-cm-178792.htm",
    "larghezza_cm": 11.5,
    "profondita_cm": 11.5,
    "descrizione": "Vaso in ceramica dorato alt. 28 cm"
  },
  {
    "nome": "Candela profumata LOTUS in acciaio bianco perlato",
    "categoria": "Decorazioni",
    "prezzo": 8.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/candela-profumata-lotus-in-acciaio-bianco-perlato-1000-6-20-170006_10.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/candela-profumata-lotus-in-acciaio-bianco-perlato-170006.htm",
    "larghezza_cm": 12,
    "profondita_cm": 12,
    "descrizione": "Candela profumata LOTUS in acciaio bianco perlato"
  },
  {
    "nome": "Mobiletto a 3 cassetti in ferro battuto con motivo vegetale multicolore",
    "categoria": "Mobili",
    "prezzo": 69.99,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/251765/mobiletto-a-3-cassetti-in-ferro-battuto-con-motivo-vegetale-multicolore.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/mobiletto-a-3-cassetti-in-ferro-battuto-con-motivo-vegetale-multicolore-251765.htm",
    "larghezza_cm": 32,
    "profondita_cm": 25,
    "descrizione": "Mobiletto a 3 cassetti in ferro battuto con motivo vegetale multicolore"
  },
  {
    "nome": "Suzelle - Armadio 2 ante a battente e 2 cassetti in paglia di Vienna lung. 105 cm",
    "categoria": "Armadi",
    "prezzo": 599,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/217811/armadio-2-ante-a-battente-e-2-cassetti-in-paglia-di-vienna-lung-105-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/armadio-2-ante-a-battente-e-2-cassetti-in-paglia-di-vienna-lung-105-cm-suzelle-217811.htm",
    "larghezza_cm": 105,
    "profondita_cm": 55,
    "descrizione": "Armadio 2 ante a battente e 2 cassetti in paglia di Vienna lung. 105 cm"
  },
  {
    "nome": "Specchio da tavolo con base in marmo bianco e metallo nero 25x39 cm",
    "categoria": "Bagno",
    "prezzo": 29.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/specchio-da-tavolo-con-base-in-marmo-bianco-e-metallo-nero-25x39-cm-1000-1-11-247487_3.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/specchio-da-tavolo-con-base-in-marmo-bianco-e-metallo-nero-25x39-cm-247487.htm",
    "larghezza_cm": 25,
    "profondita_cm": 11.5,
    "descrizione": "Specchio da tavolo con base in marmo bianco e metallo nero 25x39 cm"
  },
  {
    "nome": "Piatto da portata in ceramica blu",
    "categoria": "Cucina",
    "prezzo": 29.99,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/253373/piatto-da-portata-in-ceramica-blu.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/piatto-da-portata-in-ceramica-blu-253373.htm",
    "larghezza_cm": 21,
    "profondita_cm": 48,
    "descrizione": "Piatto da portata in ceramica blu"
  },
  {
    "nome": "Modjo - Divano angolare con penisola a sinistra a 3/4 posti color sabbia",
    "categoria": "Divani",
    "prezzo": 1399,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/239567_0/divano-angolare-con-penisola-a-sinistra-a-3-4-posti-color-sabbia.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-angolare-con-penisola-a-sinistra-a-3-4-posti-color-sabbia-modjo-239567.htm",
    "larghezza_cm": 260,
    "profondita_cm": 145,
    "descrizione": "Divano angolare con penisola a sinistra a 3/4 posti color sabbia"
  },
  {
    "nome": "Lilo - Divano a 3/4 posti in tessuto bouclé blu notte",
    "categoria": "Divani",
    "prezzo": 1199,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/238614_0/divano-a-3-4-posti-in-tessuto-boucle-blu-notte.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-a-3-4-posti-in-tessuto-boucle-blu-notte-lilo-238614.htm",
    "larghezza_cm": 240,
    "profondita_cm": 102,
    "descrizione": "Divano a 3/4 posti in tessuto bouclé blu notte"
  },
  {
    "nome": "Poltrona girevole in tessuto tramato bordeaux",
    "categoria": "Divani",
    "prezzo": 349,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/254220_0/poltrona-girevole-in-tessuto-tramato-bordeaux.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-girevole-in-tessuto-tramato-bordeaux-254220.htm",
    "larghezza_cm": 83.5,
    "profondita_cm": 79.5,
    "descrizione": "Poltrona girevole in tessuto tramato bordeaux"
  },
  {
    "nome": "Mauricette - Sedia vintage in velluto blu pavone e acciaio effetto rovere",
    "categoria": "Sedie",
    "prezzo": 69.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-vintage-in-velluto-blu-pavone-e-acciaio-effetto-rovere-1000-12-30-243078_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-vintage-in-velluto-blu-pavone-e-acciaio-effetto-rovere-mauricette-243078.htm",
    "larghezza_cm": 50.5,
    "profondita_cm": 54.5,
    "descrizione": "Sedia vintage in velluto blu pavone e acciaio effetto rovere"
  },
  {
    "nome": "Tavolo da pranzo ovale in legno di mango spazzolato, 6/8 persone lung. 200 cm",
    "categoria": "Tavoli da pranzo",
    "prezzo": 639.2,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/252760/tavolo-da-pranzo-ovale-in-legno-di-mango-spazzolato-6-8-persone-lung-200-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tavolo-da-pranzo-ovale-in-legno-di-mango-spazzolato-6-8-persone-lung-200-cm-252760.htm",
    "larghezza_cm": 200,
    "profondita_cm": 108.9,
    "descrizione": "Tavolo da pranzo ovale in legno di mango spazzolato, 6/8 persone lung. 200 cm"
  },
  {
    "nome": "Fjord - Mobile TV 2 ante bicolore lung. 120 cm",
    "categoria": "Mobili TV",
    "prezzo": 249,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/mobile-tv-2-ante-bicolore-lung-120-cm-1000-8-9-249330_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/mobile-tv-2-ante-bicolore-lung-120-cm-fjord-249330.htm",
    "larghezza_cm": 120,
    "profondita_cm": 40,
    "descrizione": "Mobile TV 2 ante bicolore lung. 120 cm"
  },
  {
    "nome": "Artic - Madia bianca vintage 160 cm",
    "categoria": "Credenze",
    "prezzo": 299,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/madia-bianca-vintage-160-cm-1000-8-1-147109_3.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/madia-bianca-vintage-160-cm-artic-147109.htm",
    "larghezza_cm": 160,
    "profondita_cm": 45,
    "descrizione": "Madia bianca vintage 160 cm"
  },
  {
    "nome": "Léontine - Libreria 2 cassetti color crema",
    "categoria": "Librerie",
    "prezzo": 349,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/230020_0/libreria-2-cassetti-color-crema.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/libreria-2-cassetti-color-crema-leontine-230020.htm",
    "larghezza_cm": 90,
    "profondita_cm": 38,
    "descrizione": "Libreria 2 cassetti color crema"
  },
  {
    "nome": "Portobello - Comodino vintage a 1 cassetto in massello di quercia",
    "categoria": "Letti",
    "prezzo": 149,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/146769_0/comodino-vintage-a-1-cassetto-in-massello-di-quercia.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/comodino-vintage-a-1-cassetto-in-massello-di-quercia-portobello-146769.htm",
    "larghezza_cm": 45,
    "profondita_cm": 35,
    "descrizione": "Comodino vintage a 1 cassetto in massello di quercia"
  },
  {
    "nome": "Tela stampata e dipinta nei toni del beige e dell'oro, 132x67 cm",
    "categoria": "Decorazioni",
    "prezzo": 99.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tela-stampata-e-dipinta-nei-toni-del-beige-e-dell-oro-132x67-cm-1000-16-20-243150_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tela-stampata-e-dipinta-nei-toni-del-beige-e-dell-oro-132x67-cm-243150.htm",
    "larghezza_cm": 132,
    "profondita_cm": 4.5,
    "descrizione": "Tela stampata e dipinta nei toni del beige e dell'oro, 132x67 cm"
  },
  {
    "nome": "Orologio da parete beige e bianco, diametro 70 cm",
    "categoria": "Decorazioni",
    "prezzo": 59.99,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/204974_0/orologio-da-parete-beige-e-bianco-diametro-70-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/orologio-da-parete-beige-e-bianco-diametro-70-cm-204974.htm",
    "larghezza_cm": 70,
    "profondita_cm": 4.5,
    "descrizione": "Orologio da parete beige e bianco, diametro 70 cm"
  },
  {
    "nome": "Lampada in legno di mango con paralume in lino beige",
    "categoria": "Lampade",
    "prezzo": 149,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/221102_0/lampada-in-legno-di-mango-con-paralume-in-lino-beige.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/lampada-in-legno-di-mango-con-paralume-in-lino-beige-221102.htm",
    "larghezza_cm": 25,
    "profondita_cm": 25,
    "descrizione": "Lampada in legno di mango con paralume in lino beige"
  },
  {
    "nome": "Decorazione da parete in juta intrecciata 144x115 cm",
    "categoria": "Decorazioni",
    "prezzo": 109,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/decorazione-da-parete-in-juta-intrecciata-144x115-cm-1000-5-4-248341_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/decorazione-da-parete-in-juta-intrecciata-144x115-cm-248341.htm",
    "larghezza_cm": 144,
    "profondita_cm": 2,
    "descrizione": "Decorazione da parete in juta intrecciata 144x115 cm"
  },
  {
    "nome": "Bouquet di fiori essiccati écru",
    "categoria": "Decorazioni",
    "prezzo": 14.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/bouquet-di-fiori-essiccati-ecru-1000-16-36-248250_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/bouquet-di-fiori-essiccati-ecru-248250.htm",
    "larghezza_cm": 20,
    "profondita_cm": 20,
    "descrizione": "Bouquet di fiori essiccati écru"
  },
  {
    "nome": "Lotto di 2 - Vaso in vetro striato marrone con bordo dorato alt. 10 cm",
    "categoria": "Decorazioni",
    "prezzo": 7.98,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/vaso-in-vetro-striato-marrone-con-bordo-dorato-alt-10-cm-1000-10-26-236514_4.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/vaso-in-vetro-striato-marrone-con-bordo-dorato-alt-10-cm-236514.htm",
    "larghezza_cm": 6,
    "profondita_cm": 6,
    "descrizione": "Vaso in vetro striato marrone con bordo dorato alt. 10 cm"
  },
  {
    "nome": "Set di 3 lumini in vetro profumati, in diverse tonalità di colore, fragranza \"Vanille orientale\"",
    "categoria": "Decorazioni",
    "prezzo": 8.99,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/254812/set-di-3-lumini-in-vetro-profumati-in-diverse-tonalita-di-colore-fragranza-vanille-orientale.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/set-di-3-lumini-in-vetro-profumati-in-diverse-tonalita-di-colore-fragranza-vanille-orientale-254812.htm",
    "larghezza_cm": 16,
    "profondita_cm": 5,
    "descrizione": "Set di 3 lumini in vetro profumati, in diverse tonalità di colore, fragranza \"Vanille orientale\""
  },
  {
    "nome": "Mobiletto contenitore 1 cassetto 1 anta in legno di mango",
    "categoria": "Mobili",
    "prezzo": 89.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/mobiletto-contenitore-1-cassetto-1-anta-in-legno-di-mango-1000-6-13-248801_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/mobiletto-contenitore-1-cassetto-1-anta-in-legno-di-mango-248801.htm",
    "larghezza_cm": 32,
    "profondita_cm": 24,
    "descrizione": "Mobiletto contenitore 1 cassetto 1 anta in legno di mango"
  },
  {
    "nome": "Armadio a 2 ante, colore écru, lung. 110 cm",
    "categoria": "Armadi",
    "prezzo": 599,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/253287_0/armadio-a-2-ante-colore-ecru-lung-110-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/armadio-a-2-ante-colore-ecru-lung-110-cm-253287.htm",
    "larghezza_cm": 110,
    "profondita_cm": 75,
    "descrizione": "Armadio a 2 ante, colore écru, lung. 110 cm"
  },
  {
    "nome": "Dispenser per sapone liquido in effetto travertino beige",
    "categoria": "Bagno",
    "prezzo": 22.99,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/252552/dispenser-per-sapone-liquido-in-effetto-travertino-beige.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/dispenser-per-sapone-liquido-in-effetto-travertino-beige-252552.htm",
    "larghezza_cm": 7.5,
    "profondita_cm": 7.5,
    "descrizione": "Dispenser per sapone liquido in effetto travertino beige"
  },
  {
    "nome": "Cestello in acciaio nero",
    "categoria": "Cucina",
    "prezzo": 19.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/cestello-in-acciaio-nero-1000-15-39-227917_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/cestello-in-acciaio-nero-227917.htm",
    "larghezza_cm": 28,
    "profondita_cm": 12,
    "descrizione": "Cestello in acciaio nero"
  },
  {
    "nome": "Tazza da tè e piattino in porcellana bianca e dorata",
    "categoria": "Cucina",
    "prezzo": 7.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tazza-da-te-e-piattino-in-porcellana-bianca-e-dorata-1000-14-19-217155_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tazza-da-te-e-piattino-in-porcellana-bianca-e-dorata-217155.htm",
    "larghezza_cm": 11,
    "profondita_cm": 8.5,
    "descrizione": "Tazza da tè e piattino in porcellana bianca e dorata"
  },
  {
    "nome": "Modjo - Divano angolare con penisola a sinistra 3/4 posti effetto velluto color bronzo",
    "categoria": "Divani",
    "prezzo": 1499,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-angolare-con-penisola-a-sinistra-3-4-posti-effetto-velluto-color-bronzo-1000-4-6-249819_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-angolare-con-penisola-a-sinistra-3-4-posti-effetto-velluto-color-bronzo-modjo-249819.htm",
    "larghezza_cm": 258,
    "profondita_cm": 146,
    "descrizione": "Divano angolare con penisola a sinistra 3/4 posti effetto velluto color bronzo"
  },
  {
    "nome": "Auguste - Divano 3 posti beige",
    "categoria": "Divani",
    "prezzo": 1299,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-3-posti-beige-1000-9-29-249637_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-3-posti-beige-auguste-249637.htm",
    "larghezza_cm": 190,
    "profondita_cm": 102,
    "descrizione": "Divano 3 posti beige"
  },
  {
    "nome": "Poltrona girevole in tessuto effetto velluto ocra",
    "categoria": "Divani",
    "prezzo": 199,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/252526/poltrona-girevole-in-tessuto-effetto-velluto-ocra.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-girevole-in-tessuto-effetto-velluto-ocra-252526.htm",
    "larghezza_cm": 71,
    "profondita_cm": 76,
    "descrizione": "Poltrona girevole in tessuto effetto velluto ocra"
  },
  {
    "nome": "Sedia in tessuto color caffellatte",
    "categoria": "Sedie",
    "prezzo": 119,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/252387/sedia-in-tessuto-color-caffellatte.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-in-tessuto-color-caffellatte-252387.htm",
    "larghezza_cm": 53,
    "profondita_cm": 55,
    "descrizione": "Sedia in tessuto color caffellatte"
  },
  {
    "nome": "Cezanne - Tavolo da pranzo pieghevole in legno di mango 10 persone 160/240",
    "categoria": "Tavoli da pranzo",
    "prezzo": 699,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tavolo-da-pranzo-pieghevole-in-legno-di-mango-10-persone-160-240-1000-0-21-199937_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tavolo-da-pranzo-pieghevole-in-legno-di-mango-10-persone-160-240-cezanne-199937.htm",
    "larghezza_cm": 160,
    "profondita_cm": 90,
    "descrizione": "Tavolo da pranzo pieghevole in legno di mango 10 persone 160/240"
  },
  {
    "nome": "Mobile porta TV con 2 ante a battente e 3 ripiani con incisioni geometriche, lung. 175 cm",
    "categoria": "Mobili TV",
    "prezzo": 599,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/253293_0/mobile-porta-tv-con-2-ante-a-battente-e-3-ripiani-con-incisioni-geometriche-lung-175-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/mobile-porta-tv-con-2-ante-a-battente-e-3-ripiani-con-incisioni-geometriche-lung-175-cm-253293.htm",
    "larghezza_cm": 175,
    "profondita_cm": 45,
    "descrizione": "Mobile porta TV con 2 ante a battente e 3 ripiani con incisioni geometriche, lung. 175 cm"
  },
  {
    "nome": "Léontine - Credenza 2 ante in legno di pino color crema 85cm",
    "categoria": "Cassettiere",
    "prezzo": 549,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/credenza-2-ante-in-legno-di-pino-color-crema-85cm-1000-11-36-122462_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/credenza-2-ante-in-legno-di-pino-color-crema-85cm-leontine-122462.htm",
    "larghezza_cm": 85,
    "profondita_cm": 39,
    "descrizione": "Credenza 2 ante in legno di pino color crema 85cm"
  },
  {
    "nome": "Atelier - Libreria 2 cassetti, 4 ante e scala in massello di quercia",
    "categoria": "Librerie",
    "prezzo": 2099,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/228449_0/libreria-2-cassetti-4-ante-e-scala-in-massello-di-quercia.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/libreria-2-cassetti-4-ante-e-scala-in-massello-di-quercia-atelier-228449.htm",
    "larghezza_cm": 200,
    "profondita_cm": 41,
    "descrizione": "Libreria 2 cassetti, 4 ante e scala in massello di quercia"
  },
  {
    "nome": "Comodino 1 anta écru",
    "categoria": "Letti",
    "prezzo": 99.99,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/253262_0/comodino-1-anta-ecru.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/comodino-1-anta-ecru-253262.htm",
    "larghezza_cm": 39,
    "profondita_cm": 35.9,
    "descrizione": "Comodino 1 anta écru"
  },
  {
    "nome": "Robie - Divanetto 2 posti in bambù con cuscini bianchi",
    "categoria": "Divani",
    "prezzo": 549,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divanetto-2-posti-in-bambu-con-cuscini-bianchi-1000-12-19-246716_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divanetto-2-posti-in-bambu-con-cuscini-bianchi-robie-246716.htm",
    "larghezza_cm": 216,
    "profondita_cm": 88,
    "descrizione": "Divanetto 2 posti in bambù con cuscini bianchi"
  },
  {
    "nome": "Tela dipinta astratta color bianco sporco, 80x110 cm",
    "categoria": "Decorazioni",
    "prezzo": 119,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/248560_251824_239804/tela-dipinta-astratta-color-bianco-sporco-80x110-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tela-dipinta-astratta-color-bianco-sporco-80x110-cm-239804.htm",
    "larghezza_cm": 80,
    "profondita_cm": 3,
    "descrizione": "Tela dipinta astratta color bianco sporco, 80x110 cm"
  },
  {
    "nome": "Orologio da parete in acciaio nero, diametro 90 cm",
    "categoria": "Decorazioni",
    "prezzo": 59.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/orologio-da-parete-in-acciaio-nero-diametro-90-cm-1000-9-19-172219_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/orologio-da-parete-in-acciaio-nero-diametro-90-cm-172219.htm",
    "larghezza_cm": 90,
    "profondita_cm": 4,
    "descrizione": "Orologio da parete in acciaio nero, diametro 90 cm"
  },
  {
    "nome": "Lampada in ceramica con paralume beige rosato",
    "categoria": "Lampade",
    "prezzo": 12.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/lampada-in-ceramica-con-paralume-beige-rosato-1000-14-33-232421_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/lampada-in-ceramica-con-paralume-beige-rosato-232421.htm",
    "larghezza_cm": 14,
    "profondita_cm": 14,
    "descrizione": "Lampada in ceramica con paralume beige rosato"
  },
  {
    "nome": "Decorazione da parete a forma di ramo in ferro battuto color oro e bronzo, 47x78 cm",
    "categoria": "Decorazioni",
    "prezzo": 49.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/decorazione-da-parete-a-forma-di-ramo-in-ferro-battuto-color-oro-e-bronzo-47x78-cm-1000-16-25-203795_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/decorazione-da-parete-a-forma-di-ramo-in-ferro-battuto-color-oro-e-bronzo-47x78-cm-203795.htm",
    "larghezza_cm": 47,
    "profondita_cm": 2,
    "descrizione": "Decorazione da parete a forma di ramo in ferro battuto color oro e bronzo, 47x78 cm"
  },
  {
    "nome": "Bouquet di fiori secchi beige, bianchi e arancioni",
    "categoria": "Decorazioni",
    "prezzo": 24.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/bouquet-di-fiori-secchi-beige-bianchi-e-arancioni-1000-14-8-248673_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/bouquet-di-fiori-secchi-beige-bianchi-e-arancioni-248673.htm",
    "larghezza_cm": 21.5,
    "profondita_cm": 21.5,
    "descrizione": "Bouquet di fiori secchi beige, bianchi e arancioni"
  },
  {
    "nome": "Areca artificiale in vaso",
    "categoria": "Decorazioni",
    "prezzo": 119,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/areca-artificiale-in-vaso-1000-11-16-245729_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/areca-artificiale-in-vaso-245729.htm",
    "larghezza_cm": 121.9,
    "profondita_cm": 121.9,
    "descrizione": "Areca artificiale in vaso"
  },
  {
    "nome": "Vaso in vetro multicolore alt. 31 cm",
    "categoria": "Decorazioni",
    "prezzo": 49.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/vaso-in-vetro-multicolore-alt-31-cm-1000-13-14-243759_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/vaso-in-vetro-multicolore-alt-31-cm-243759.htm",
    "larghezza_cm": 20,
    "profondita_cm": 20,
    "descrizione": "Vaso in vetro multicolore alt. 31 cm"
  },
  {
    "nome": "Candela profumata con portacandela in ceramica beige",
    "categoria": "Decorazioni",
    "prezzo": 9.05,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/251660/candela-profumata-con-portacandela-in-ceramica-beige.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/candela-profumata-con-portacandela-in-ceramica-beige-251660.htm",
    "larghezza_cm": 7.2,
    "profondita_cm": 7.2,
    "descrizione": "Candela profumata con portacandela in ceramica beige"
  },
  {
    "nome": "Mobile contenitore multi-cassetto in legno di salvia",
    "categoria": "Mobili",
    "prezzo": 104.3,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/252691/mobile-contenitore-multi-cassetto-in-legno-di-salvia.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/mobile-contenitore-multi-cassetto-in-legno-di-salvia-252691.htm",
    "larghezza_cm": 43,
    "profondita_cm": 34,
    "descrizione": "Mobile contenitore multi-cassetto in legno di salvia"
  },
  {
    "nome": "Canopy - Armadio 4 ante in paglia di Vienna 195 cm",
    "categoria": "Armadi",
    "prezzo": 1599,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/249327_0/armadio-4-ante-in-paglia-di-vienna-195-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/armadio-4-ante-in-paglia-di-vienna-195-cm-canopy-249327.htm",
    "larghezza_cm": 194.8,
    "profondita_cm": 55,
    "descrizione": "Armadio 4 ante in paglia di Vienna 195 cm"
  },
  {
    "nome": "Portasapone in vetro ambrato",
    "categoria": "Bagno",
    "prezzo": 7.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/portasapone-in-vetro-ambrato-1000-13-0-248706_2.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/portasapone-in-vetro-ambrato-248706.htm",
    "larghezza_cm": 11.5,
    "profondita_cm": 11.5,
    "descrizione": "Portasapone in vetro ambrato"
  },
  {
    "nome": "Mensola da cucina in ferro nero",
    "categoria": "Cucina",
    "prezzo": 14.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/mensola-da-cucina-in-ferro-nero-1000-3-7-230591_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/mensola-da-cucina-in-ferro-nero-230591.htm",
    "larghezza_cm": 30,
    "profondita_cm": 8,
    "descrizione": "Mensola da cucina in ferro nero"
  },
  {
    "nome": "Insalatiera in gres marrone",
    "categoria": "Tavoli da pranzo",
    "prezzo": 16.05,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/253189/insalatiera-in-gres-marrone.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/insalatiera-in-gres-marrone-253189.htm",
    "larghezza_cm": 25,
    "profondita_cm": 25,
    "descrizione": "Insalatiera in gres marrone"
  },
  {
    "nome": "Set di posate in acciaio inox da 24 pezzi",
    "categoria": "Cucina",
    "prezzo": 39.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/set-di-posate-in-acciaio-inox-da-24-pezzi-1000-16-26-206379_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/set-di-posate-in-acciaio-inox-da-24-pezzi-206379.htm",
    "larghezza_cm": 26.5,
    "profondita_cm": 15,
    "descrizione": "Set di posate in acciaio inox da 24 pezzi"
  },
  {
    "nome": "Apache - Divano vintage 2/3 posti in tessuto beige sfoderabile",
    "categoria": "Divani",
    "prezzo": 1599,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/243030_0/divano-vintage-2-3-posti-in-tessuto-beige-sfoderabile.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-vintage-2-3-posti-in-tessuto-beige-sfoderabile-apache-243030.htm",
    "larghezza_cm": 274,
    "profondita_cm": 110,
    "descrizione": "Divano vintage 2/3 posti in tessuto beige sfoderabile"
  },
  {
    "nome": "Divano letto pieghevole 2 posti in velluto terracotta",
    "categoria": "Divani",
    "prezzo": 479.2,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-letto-pieghevole-2-posti-in-velluto-terracotta-1000-14-34-249642_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-letto-pieghevole-2-posti-in-velluto-terracotta-249642.htm",
    "larghezza_cm": 153,
    "profondita_cm": 92.5,
    "descrizione": "Divano letto pieghevole 2 posti in velluto terracotta"
  },
  {
    "nome": "Nio - Poltrona letto pieghevole verde acqua",
    "categoria": "Divani",
    "prezzo": 229,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/175580_0/poltrona-letto-pieghevole-verde-acqua.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-letto-pieghevole-verde-acqua-nio-175580.htm",
    "larghezza_cm": 109,
    "profondita_cm": 87,
    "descrizione": "Poltrona letto pieghevole verde acqua"
  },
  {
    "nome": "Ice - Sedia in stile scandinavo in polipropilene bianco brillante e legno di hevea",
    "categoria": "Sedie",
    "prezzo": 69.99,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/210459_0/sedia-in-stile-scandinavo-in-polipropilene-bianco-brillante-e-legno-di-hevea.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-in-stile-scandinavo-in-polipropilene-bianco-brillante-e-legno-di-hevea-ice-210459.htm",
    "larghezza_cm": 48,
    "profondita_cm": 54.5,
    "descrizione": "Sedia in stile scandinavo in polipropilene bianco brillante e legno di hevea"
  },
  {
    "nome": "Tradition - Tavolo allungabile per sala da pranzo in pino riciclato 160 cm",
    "categoria": "Tavoli da pranzo",
    "prezzo": 659,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/110509_3/tavolo-allungabile-per-sala-da-pranzo-in-pino-riciclato-160-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tavolo-allungabile-per-sala-da-pranzo-in-pino-riciclato-160-cm-tradition-110509.htm",
    "larghezza_cm": 160,
    "profondita_cm": 90,
    "descrizione": "Tavolo allungabile per sala da pranzo in pino riciclato 160 cm"
  },
  {
    "nome": "Portobello - Porta-TV vintage lung. 160 cm",
    "categoria": "Mobili TV",
    "prezzo": 459,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/146768_0/porta-tv-vintage-lung-160-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/porta-tv-vintage-lung-160-cm-portobello-146768.htm",
    "larghezza_cm": 160,
    "profondita_cm": 40,
    "descrizione": "Porta-TV vintage lung. 160 cm"
  },
  {
    "nome": "Léontine - Madia a 3 ante e 3 cassetti color crema 131 cm",
    "categoria": "Credenze",
    "prezzo": 469,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/229987_0/madia-a-3-ante-e-3-cassetti-color-crema-131-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/madia-a-3-ante-e-3-cassetti-color-crema-131-cm-leontine-229987.htm",
    "larghezza_cm": 131,
    "profondita_cm": 43,
    "descrizione": "Madia a 3 ante e 3 cassetti color crema 131 cm"
  },
  {
    "nome": "Libreria 2 ante e 3 ripiani écru, lung. 100 cm",
    "categoria": "Librerie",
    "prezzo": 499,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/253264_0/libreria-2-ante-e-3-ripiani-ecru-lung-100-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/libreria-2-ante-e-3-ripiani-ecru-lung-100-cm-253264.htm",
    "larghezza_cm": 100,
    "profondita_cm": 42.5,
    "descrizione": "Libreria 2 ante e 3 ripiani écru, lung. 100 cm"
  },
  {
    "nome": "Comodino a 1 anta verde abete con fantasia tropicale lung. 40 cm",
    "categoria": "Letti",
    "prezzo": 129,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/252601/comodino-a-1-anta-verde-abete-con-fantasia-tropicale-lung-40-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/comodino-a-1-anta-verde-abete-con-fantasia-tropicale-lung-40-cm-252601.htm",
    "larghezza_cm": 40,
    "profondita_cm": 38,
    "descrizione": "Comodino a 1 anta verde abete con fantasia tropicale lung. 40 cm"
  },
  {
    "nome": "Livio - Modulo centrale da giardino in legno di eucalipto e poliestere écru",
    "categoria": "Divani",
    "prezzo": 249,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/modulo-centrale-da-giardino-in-legno-di-eucalipto-e-poliestere-ecru-1000-8-9-238178_8.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/modulo-centrale-da-giardino-in-legno-di-eucalipto-e-poliestere-ecru-livio-238178.htm",
    "larghezza_cm": 73.5,
    "profondita_cm": 80,
    "descrizione": "Modulo centrale da giardino in legno di eucalipto e poliestere écru"
  },
  {
    "nome": "Trittico astratto su tela, stampato e dipinto 40 × 40 cm",
    "categoria": "Decorazioni",
    "prezzo": 79.99,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/254671/trittico-astratto-su-tela-stampato-e-dipinto-40-40-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/trittico-astratto-su-tela-stampato-e-dipinto-40-40-cm-254671.htm",
    "larghezza_cm": 40,
    "profondita_cm": 3,
    "descrizione": "Trittico astratto su tela, stampato e dipinto 40 × 40 cm"
  },
  {
    "nome": "Orologio da parete bianco e beige, D50 cm",
    "categoria": "Decorazioni",
    "prezzo": 39.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/orologio-da-parete-bianco-e-beige-d50-cm-1000-4-11-183281_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/orologio-da-parete-bianco-e-beige-d50-cm-183281.htm",
    "larghezza_cm": 50,
    "profondita_cm": 4.5,
    "descrizione": "Orologio da parete bianco e beige, D50 cm"
  },
  {
    "nome": "Lampada effetto legno fluitato e abat-jour bianco",
    "categoria": "Lampade",
    "prezzo": 39.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/lampada-effetto-legno-fluitato-e-abat-jour-bianco-1000-12-26-119131_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/lampada-effetto-legno-fluitato-e-abat-jour-bianco-119131.htm",
    "larghezza_cm": 20,
    "profondita_cm": 20,
    "descrizione": "Lampada effetto legno fluitato e abat-jour bianco"
  },
  {
    "nome": "Decorazione da parete a forma di auto in ferro battuto nero, 119x35 cm",
    "categoria": "Decorazioni",
    "prezzo": 149,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/decorazione-da-parete-a-forma-di-auto-in-ferro-battuto-nero-119x35-cm-1000-10-19-221911_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/decorazione-da-parete-a-forma-di-auto-in-ferro-battuto-nero-119x35-cm-221911.htm",
    "larghezza_cm": 119,
    "profondita_cm": 23,
    "descrizione": "Decorazione da parete a forma di auto in ferro battuto nero, 119x35 cm"
  },
  {
    "nome": "Bouquet di fiori secchi beige",
    "categoria": "Decorazioni",
    "prezzo": 9.99,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/252236/bouquet-di-fiori-secchi-beige.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/bouquet-di-fiori-secchi-beige-252236.htm",
    "larghezza_cm": 50,
    "profondita_cm": 15,
    "descrizione": "Bouquet di fiori secchi beige"
  },
  {
    "nome": "Pianta grassa artificiale con vaso in cemento grigio",
    "categoria": "Decorazioni",
    "prezzo": 5.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/pianta-grassa-artificiale-con-vaso-in-cemento-grigio-1000-11-31-216880_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/pianta-grassa-artificiale-con-vaso-in-cemento-grigio-216880.htm",
    "larghezza_cm": 12,
    "profondita_cm": 12,
    "descrizione": "Pianta grassa artificiale con vaso in cemento grigio"
  },
  {
    "nome": "Vaso in gres striato écru alt. 31 cm",
    "categoria": "Decorazioni",
    "prezzo": 29.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/vaso-in-gres-striato-ecru-alt-31-cm-1000-16-35-216392_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/vaso-in-gres-striato-ecru-alt-31-cm-216392.htm",
    "larghezza_cm": 15.4,
    "profondita_cm": 14,
    "descrizione": "Vaso in gres striato écru alt. 31 cm"
  },
  {
    "nome": "Candela cilindrica bianca alt. 30 cm",
    "categoria": "Decorazioni",
    "prezzo": 19.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/candela-cilindrica-bianca-alt-30-cm-1000-0-26-241434_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/candela-cilindrica-bianca-alt-30-cm-241434.htm",
    "larghezza_cm": 10,
    "profondita_cm": 10,
    "descrizione": "Candela cilindrica bianca alt. 30 cm"
  },
  {
    "nome": "Mobiletto con 3 cassetti",
    "categoria": "Mobili",
    "prezzo": 79.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/mobiletto-con-3-cassetti-1000-10-25-243688_2.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/mobiletto-con-3-cassetti-243688.htm",
    "larghezza_cm": 30.5,
    "profondita_cm": 26.5,
    "descrizione": "Mobiletto con 3 cassetti"
  },
  {
    "nome": "Avignon - Armadio a 2 ante e 2 cassetti in mango bianco patinato 108 cm",
    "categoria": "Armadi",
    "prezzo": 899,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/armadio-a-2-ante-e-2-cassetti-in-mango-bianco-patinato-108-cm-1000-8-9-165690_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/armadio-a-2-ante-e-2-cassetti-in-mango-bianco-patinato-108-cm-avignon-165690.htm",
    "larghezza_cm": 108,
    "profondita_cm": 40,
    "descrizione": "Armadio a 2 ante e 2 cassetti in mango bianco patinato 108 cm"
  },
  {
    "nome": "Dispenser per sapone in gres bianco e verde",
    "categoria": "Bagno",
    "prezzo": 9.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/dispenser-per-sapone-in-gres-bianco-e-verde-1000-7-32-247918_2.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/dispenser-per-sapone-in-gres-bianco-e-verde-247918.htm",
    "larghezza_cm": 7,
    "profondita_cm": 7,
    "descrizione": "Dispenser per sapone in gres bianco e verde"
  },
  {
    "nome": "Cesto in ferro traforato nero e oro",
    "categoria": "Cucina",
    "prezzo": 32.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/cesto-in-ferro-traforato-nero-e-oro-1000-7-35-195728_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/cesto-in-ferro-traforato-nero-e-oro-195728.htm",
    "larghezza_cm": 30,
    "profondita_cm": 25,
    "descrizione": "Cesto in ferro traforato nero e oro"
  },
  {
    "nome": "Tazze in ceramica nera e bianco grafico (x4) con supporto in metallo nero",
    "categoria": "Cucina",
    "prezzo": 14.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tazze-in-ceramica-nera-e-bianco-grafico-x4-con-supporto-in-metallo-nero-1000-0-0-215373_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tazze-in-ceramica-nera-e-bianco-grafico-x4-con-supporto-in-metallo-nero-215373.htm",
    "larghezza_cm": 9,
    "profondita_cm": 6.5,
    "descrizione": "Tazze in ceramica nera e bianco grafico (x4) con supporto in metallo nero"
  },
  {
    "nome": "Elvis - Divano letto clic clac a 3 posti in velluto verde",
    "categoria": "Divani",
    "prezzo": 399,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/198168_0/divano-letto-clic-clac-a-3-posti-in-velluto-verde.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-letto-clic-clac-a-3-posti-in-velluto-verde-elvis-198168.htm",
    "larghezza_cm": 214,
    "profondita_cm": 87,
    "descrizione": "Divano letto clic clac a 3 posti in velluto verde"
  },
  {
    "nome": "Lilo - Divano a 3/4 posti in tessuto grigio chiaro chiné",
    "categoria": "Divani",
    "prezzo": 1199,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/230371_0/divano-a-3-4-posti-in-tessuto-grigio-chiaro-chine.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-a-3-4-posti-in-tessuto-grigio-chiaro-chine-lilo-230371.htm",
    "larghezza_cm": 240,
    "profondita_cm": 102,
    "descrizione": "Divano a 3/4 posti in tessuto grigio chiaro chiné"
  },
  {
    "nome": "Poltrona rivestita in tessuto beige effetto lino con gambe in legno massello di rovere chiaro",
    "categoria": "Divani",
    "prezzo": 299,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/253775_0/poltrona-rivestita-in-tessuto-beige-effetto-lino-con-gambe-in-legno-massello-di-rovere-chiaro.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-rivestita-in-tessuto-beige-effetto-lino-con-gambe-in-legno-massello-di-rovere-chiaro-253775.htm",
    "larghezza_cm": 66,
    "profondita_cm": 71,
    "descrizione": "Poltrona rivestita in tessuto beige effetto lino con gambe in legno massello di rovere chiaro"
  },
  {
    "nome": "Clyde - Sedia in tessuto riciclato verde scuro e gambe in acciaio effetto rovere",
    "categoria": "Sedie",
    "prezzo": 45.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-in-tessuto-riciclato-verde-scuro-e-gambe-in-acciaio-effetto-rovere-1000-7-13-238551_6.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-in-tessuto-riciclato-verde-scuro-e-gambe-in-acciaio-effetto-rovere-clyde-238551.htm",
    "larghezza_cm": 44,
    "profondita_cm": 55,
    "descrizione": "Sedia in tessuto riciclato verde scuro e gambe in acciaio effetto rovere"
  },
  {
    "nome": "Tavolo da pranzo rotondo con base a totem in rovere scuro impiallaciato, 4/6 persone Ø 120 cm",
    "categoria": "Tavoli da pranzo",
    "prezzo": 599,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/252376/tavolo-da-pranzo-rotondo-con-base-a-totem-in-rovere-scuro-impiallaciato-4-6-persone-oe-120-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tavolo-da-pranzo-rotondo-con-base-a-totem-in-rovere-scuro-impiallaciato-4-6-persone-oe-120-cm-252376.htm",
    "larghezza_cm": 120,
    "profondita_cm": 120,
    "descrizione": "Tavolo da pranzo rotondo con base a totem in rovere scuro impiallaciato, 4/6 persone Ø 120 cm"
  },
  {
    "nome": "Provence - Mobile TV in pino massello bianco lung. 180 cm",
    "categoria": "Mobili TV",
    "prezzo": 789,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/186233_0/mobile-tv-in-pino-massello-bianco-lung-180-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/mobile-tv-in-pino-massello-bianco-lung-180-cm-provence-186233.htm",
    "larghezza_cm": 180,
    "profondita_cm": 50,
    "descrizione": "Mobile TV in pino massello bianco lung. 180 cm"
  },
  {
    "nome": "Perroquet - Credenza a 2 ante e 2 cassetti nera con stampe pappagalli 86 cm",
    "categoria": "Cassettiere",
    "prezzo": 299,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/credenza-a-2-ante-e-2-cassetti-nera-con-stampe-pappagalli-86-cm-1000-14-10-186232_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/credenza-a-2-ante-e-2-cassetti-nera-con-stampe-pappagalli-86-cm-perroquet-186232.htm",
    "larghezza_cm": 86,
    "profondita_cm": 42,
    "descrizione": "Credenza a 2 ante e 2 cassetti nera con stampe pappagalli 86 cm"
  },
  {
    "nome": "Cambronne - Libreria nera a 4 ante",
    "categoria": "Librerie",
    "prezzo": 999,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/libreria-nera-a-4-ante-1000-5-27-245740_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/libreria-nera-a-4-ante-cambronne-245740.htm",
    "larghezza_cm": 180,
    "profondita_cm": 39,
    "descrizione": "Libreria nera a 4 ante"
  },
  {
    "nome": "Negara - Modulo centrale da giardino in legno di acacia e poliestere riciclato color écru",
    "categoria": "Divani",
    "prezzo": 209.3,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/modulo-centrale-da-giardino-in-legno-di-acacia-e-poliestere-riciclato-color-ecru-1000-4-15-238225_8.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/modulo-centrale-da-giardino-in-legno-di-acacia-e-poliestere-riciclato-color-ecru-negara-238225.htm",
    "larghezza_cm": 65,
    "profondita_cm": 75,
    "descrizione": "Modulo centrale da giardino in legno di acacia e poliestere riciclato color écru"
  },
  {
    "nome": "Tela dipinta in verde e oro, 70x70 cm",
    "categoria": "Decorazioni",
    "prezzo": 64.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tela-dipinta-in-verde-e-oro-70x70-cm-1000-13-21-222118_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tela-dipinta-in-verde-e-oro-70x70-cm-222118.htm",
    "larghezza_cm": 70,
    "profondita_cm": 3.2,
    "descrizione": "Tela dipinta in verde e oro, 70x70 cm"
  },
  {
    "nome": "Orologio in metallo nero 60 cm",
    "categoria": "Decorazioni",
    "prezzo": 29.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/orologio-in-metallo-nero-60-cm-1000-12-10-157942_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/orologio-in-metallo-nero-60-cm-157942.htm",
    "larghezza_cm": 60,
    "profondita_cm": 3.5,
    "descrizione": "Orologio in metallo nero 60 cm"
  },
  {
    "nome": "Vaso in maiolica marrone, beige e rosa, alt. 16 cm",
    "categoria": "Decorazioni",
    "prezzo": 12.99,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/254399/vaso-in-maiolica-marrone-beige-e-rosa-alt-16-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/vaso-in-maiolica-marrone-beige-e-rosa-alt-16-cm-254399.htm",
    "larghezza_cm": 11,
    "profondita_cm": 11,
    "descrizione": "Vaso in maiolica marrone, beige e rosa, alt. 16 cm"
  },
  {
    "nome": "Chamarel - Guardaroba a 2 ante battenti verde scuro",
    "categoria": "Armadi",
    "prezzo": 519,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/guardaroba-a-2-ante-battenti-verde-scuro-1000-10-13-243348_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/guardaroba-a-2-ante-battenti-verde-scuro-chamarel-243348.htm",
    "larghezza_cm": 90,
    "profondita_cm": 50,
    "descrizione": "Guardaroba a 2 ante battenti verde scuro"
  },
  {
    "nome": "Auguste - Divano 3 posti color bronzo",
    "categoria": "Divani",
    "prezzo": 1299,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-3-posti-color-bronzo-1000-3-40-249648_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-3-posti-color-bronzo-auguste-249648.htm",
    "larghezza_cm": 190,
    "profondita_cm": 102,
    "descrizione": "Divano 3 posti color bronzo"
  },
  {
    "nome": "Poltrona in tessuto tramato beige con gambe in legno massello di frassino.",
    "categoria": "Divani",
    "prezzo": 369,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/253772_0/poltrona-in-tessuto-tramato-beige-con-gambe-in-legno-massello-di-frassino.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-in-tessuto-tramato-beige-con-gambe-in-legno-massello-di-frassino-253772.htm",
    "larghezza_cm": 69.5,
    "profondita_cm": 79,
    "descrizione": "Poltrona in tessuto tramato beige con gambe in legno massello di frassino."
  },
  {
    "nome": "Kate - Sedia in velluto greige e acciaio nero",
    "categoria": "Sedie",
    "prezzo": 99.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-in-velluto-greige-e-acciaio-nero-1000-13-13-219568_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-in-velluto-greige-e-acciaio-nero-kate-219568.htm",
    "larghezza_cm": 56,
    "profondita_cm": 55,
    "descrizione": "Sedia in velluto greige e acciaio nero"
  },
  {
    "nome": "Faubourg - Tavolo da pranzo rotondo 6/8 persone, D 140",
    "categoria": "Tavoli da pranzo",
    "prezzo": 1049,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tavolo-da-pranzo-rotondo-6-8-persone-d-140-1000-7-36-199706_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tavolo-da-pranzo-rotondo-6-8-persone-d-140-faubourg-199706.htm",
    "larghezza_cm": 140,
    "profondita_cm": 140,
    "descrizione": "Tavolo da pranzo rotondo 6/8 persone, D 140"
  },
  {
    "nome": "Gatsby - Mobile TV a 2 ante vintage in legno massello di mango lung. 160 cm",
    "categoria": "Mobili TV",
    "prezzo": 629,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/186385_0/mobile-tv-a-2-ante-vintage-in-legno-massello-di-mango-lung-160-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/mobile-tv-a-2-ante-vintage-in-legno-massello-di-mango-lung-160-cm-gatsby-186385.htm",
    "larghezza_cm": 160,
    "profondita_cm": 41,
    "descrizione": "Mobile TV a 2 ante vintage in legno massello di mango lung. 160 cm"
  },
  {
    "nome": "Gatsby - Madia 2 ante in legno di mango e acciaio effetto dorato 117 cm",
    "categoria": "Credenze",
    "prezzo": 499,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/165787_0/madia-2-ante-in-legno-di-mango-e-acciaio-effetto-dorato-117-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/madia-2-ante-in-legno-di-mango-e-acciaio-effetto-dorato-117-cm-gatsby-165787.htm",
    "larghezza_cm": 117,
    "profondita_cm": 45,
    "descrizione": "Madia 2 ante in legno di mango e acciaio effetto dorato 117 cm"
  },
  {
    "nome": "Wayampi - Libreria a 2 cassetti in acciaio nero e legno di mango, larga 142 cm.",
    "categoria": "Librerie",
    "prezzo": 1499,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/libreria-a-2-cassetti-in-acciaio-nero-e-legno-di-mango-larga-142-cm-1000-11-22-176199_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/libreria-a-2-cassetti-in-acciaio-nero-e-legno-di-mango-larga-142-cm-wayampi-176199.htm",
    "larghezza_cm": 142,
    "profondita_cm": 38,
    "descrizione": "Libreria a 2 cassetti in acciaio nero e legno di mango, larga 142 cm."
  },
  {
    "nome": "Malaga - Comodino con in rattan",
    "categoria": "Comodini",
    "prezzo": 55.95,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/comodino-con-in-rattan-1000-9-24-248566_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/comodino-con-in-rattan-malaga-248566.htm",
    "larghezza_cm": 40,
    "profondita_cm": 30,
    "descrizione": "Comodino con in rattan"
  },
  {
    "nome": "Alari - Letto combinato bianco 90x190 cm",
    "categoria": "Letti",
    "prezzo": 399,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/letto-combinato-bianco-90x190-cm-1000-13-40-242637_2.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/letto-combinato-bianco-90x190-cm-alari-242637.htm",
    "larghezza_cm": 194.6,
    "profondita_cm": 110,
    "descrizione": "Letto combinato bianco 90x190 cm"
  },
  {
    "nome": "Gladys Business - Divanetto professionale da esterno a 2 posti in resina intrecciata riciclata beige",
    "categoria": "Divani",
    "prezzo": 599,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divanetto-professionale-da-esterno-a-2-posti-in-resina-intrecciata-riciclata-beige-1000-5-16-245893_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divanetto-professionale-da-esterno-a-2-posti-in-resina-intrecciata-riciclata-beige-gladys-business-245893.htm",
    "larghezza_cm": 151,
    "profondita_cm": 82,
    "descrizione": "Divanetto professionale da esterno a 2 posti in resina intrecciata riciclata beige"
  },
  {
    "nome": "Dittico astratto su tele nei toni del beige e del nero, 84x60 cm",
    "categoria": "Decorazioni",
    "prezzo": 34.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/dittico-astratto-su-tele-nei-toni-del-beige-e-del-nero-84x60-cm-1000-1-12-222888_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/dittico-astratto-su-tele-nei-toni-del-beige-e-del-nero-84x60-cm-222888.htm",
    "larghezza_cm": 84,
    "profondita_cm": 2,
    "descrizione": "Dittico astratto su tele nei toni del beige e del nero, 84x60 cm"
  },
  {
    "nome": "Vaso striato in gres dorato alt. 16 cm",
    "categoria": "Decorazioni",
    "prezzo": 9.99,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/184332/vaso-striato-in-gres-dorato-alt-16-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/vaso-striato-in-gres-dorato-alt-16-cm-184332.htm",
    "larghezza_cm": 11.8,
    "profondita_cm": 11.8,
    "descrizione": "Vaso striato in gres dorato alt. 16 cm"
  },
  {
    "nome": "Armadio 3 ante 2 cassetti verderame 132 cm",
    "categoria": "Armadi",
    "prezzo": 999,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/armadio-3-ante-2-cassetti-verderame-132-cm-1000-3-17-249461_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/armadio-3-ante-2-cassetti-verderame-132-cm-249461.htm",
    "larghezza_cm": 132,
    "profondita_cm": 56,
    "descrizione": "Armadio 3 ante 2 cassetti verderame 132 cm"
  },
  {
    "nome": "Louise - Divano 3 posti beige",
    "categoria": "Divani",
    "prezzo": 1099,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-3-posti-beige-1000-11-4-244692_10.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-3-posti-beige-louise-244692.htm",
    "larghezza_cm": 220,
    "profondita_cm": 94,
    "descrizione": "Divano 3 posti beige"
  },
  {
    "nome": "Shield - Divano 3 posti in tessuto grigio chiaro chiné",
    "categoria": "Divani",
    "prezzo": 489.3,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-3-posti-in-tessuto-grigio-chiaro-chine-1000-4-39-243087_2.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-3-posti-in-tessuto-grigio-chiaro-chine-shield-243087.htm",
    "larghezza_cm": 215,
    "profondita_cm": 86,
    "descrizione": "Divano 3 posti in tessuto grigio chiaro chiné"
  },
  {
    "nome": "Canyon - Poltrona cammello e acciaio nero",
    "categoria": "Divani",
    "prezzo": 269,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltrona-cammello-e-acciaio-nero-1000-6-16-246098_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-cammello-e-acciaio-nero-canyon-246098.htm",
    "larghezza_cm": 66.5,
    "profondita_cm": 73.5,
    "descrizione": "Poltrona cammello e acciaio nero"
  },
  {
    "nome": "Sedia da pranzo in tessuto verde kaki con gambe in acciaio nero",
    "categoria": "Sedie",
    "prezzo": 99.99,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/253430_0/sedia-da-pranzo-in-tessuto-verde-kaki-con-gambe-in-acciaio-nero.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-da-pranzo-in-tessuto-verde-kaki-con-gambe-in-acciaio-nero-253430.htm",
    "larghezza_cm": 59,
    "profondita_cm": 62,
    "descrizione": "Sedia da pranzo in tessuto verde kaki con gambe in acciaio nero"
  },
  {
    "nome": "Tony - Mobile TV a 2 ante e 1 cassetto in legno massello di acacia lung. 140 cm",
    "categoria": "Mobili TV",
    "prezzo": 399.2,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/mobile-tv-a-2-ante-e-1-cassetto-in-legno-massello-di-acacia-lung-140-cm-1000-15-6-199102_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/mobile-tv-a-2-ante-e-1-cassetto-in-legno-massello-di-acacia-lung-140-cm-tony-199102.htm",
    "larghezza_cm": 140,
    "profondita_cm": 42,
    "descrizione": "Mobile TV a 2 ante e 1 cassetto in legno massello di acacia lung. 140 cm"
  },
  {
    "nome": "Ionesco - Madia a 4 ante e 4 cassetti in pino riciclato grigio antracite 210 cm",
    "categoria": "Credenze",
    "prezzo": 1199,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/madia-a-4-ante-e-4-cassetti-in-pino-riciclato-grigio-antracite-210-cm-1000-16-38-249933_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/madia-a-4-ante-e-4-cassetti-in-pino-riciclato-grigio-antracite-210-cm-ionesco-249933.htm",
    "larghezza_cm": 210,
    "profondita_cm": 45,
    "descrizione": "Madia a 4 ante e 4 cassetti in pino riciclato grigio antracite 210 cm"
  },
  {
    "nome": "Cavaillon - Libreria 4 ripiani e 2 cassetti, lung. 84 cm",
    "categoria": "Librerie",
    "prezzo": 349,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/250192/libreria-4-ripiani-e-2-cassetti-lung-84-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/libreria-4-ripiani-e-2-cassetti-lung-84-cm-cavaillon-250192.htm",
    "larghezza_cm": 84,
    "profondita_cm": 35,
    "descrizione": "Libreria 4 ripiani e 2 cassetti, lung. 84 cm"
  },
  {
    "nome": "Stockholm - Comodino in massello di legno di sheesham con cassetto",
    "categoria": "Letti",
    "prezzo": 159,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/comodino-in-massello-di-legno-di-sheesham-con-cassetto-1000-6-18-121624_9.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/comodino-in-massello-di-legno-di-sheesham-con-cassetto-stockholm-121624.htm",
    "larghezza_cm": 40,
    "profondita_cm": 40,
    "descrizione": "Comodino in massello di legno di sheesham con cassetto"
  },
  {
    "nome": "Nalya Business - Chauffeuse da giardino professionali modulari in legno di eucalipto e poliestere écru (x2)",
    "categoria": "Divani",
    "prezzo": 799,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/chauffeuse-da-giardino-professionali-modulari-in-legno-di-eucalipto-e-poliestere-ecru-x2-1000-14-15-238184_7.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/chauffeuse-da-giardino-professionali-modulari-in-legno-di-eucalipto-e-poliestere-ecru-x2-nalya-business-238184.htm",
    "larghezza_cm": 78,
    "profondita_cm": 90,
    "descrizione": "Chauffeuse da giardino professionali modulari in legno di eucalipto e poliestere écru (x2)"
  },
  {
    "nome": "Quadro su tela con dipinto astratto verde, beige e nero 120x120 cm",
    "categoria": "Decorazioni",
    "prezzo": 169,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/254328_0/quadro-su-tela-con-dipinto-astratto-verde-beige-e-nero-120x120-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/quadro-su-tela-con-dipinto-astratto-verde-beige-e-nero-120x120-cm-254328.htm",
    "larghezza_cm": 120,
    "profondita_cm": 4.5,
    "descrizione": "Quadro su tela con dipinto astratto verde, beige e nero 120x120 cm"
  },
  {
    "nome": "Orologio in metallo dorato e vetro stampato effetto marmo Ø 90 cm",
    "categoria": "Decorazioni",
    "prezzo": 129,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/orologio-in-metallo-dorato-e-vetro-stampato-effetto-marmo-oe-90-cm-1000-15-12-210424_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/orologio-in-metallo-dorato-e-vetro-stampato-effetto-marmo-oe-90-cm-210424.htm",
    "larghezza_cm": 90,
    "profondita_cm": 5,
    "descrizione": "Orologio in metallo dorato e vetro stampato effetto marmo Ø 90 cm"
  },
  {
    "nome": "Lampada in ceramica dorata con paralume in poliestere riciclato bianco",
    "categoria": "Lampade",
    "prezzo": 39.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/lampada-in-ceramica-dorata-con-paralume-in-poliestere-riciclato-bianco-1000-8-26-211012_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/lampada-in-ceramica-dorata-con-paralume-in-poliestere-riciclato-bianco-211012.htm",
    "larghezza_cm": 32,
    "profondita_cm": 18,
    "descrizione": "Lampada in ceramica dorata con paralume in poliestere riciclato bianco"
  },
  {
    "nome": "Decorazione da parete astratta bianca in rilievo 92×120 cm",
    "categoria": "Decorazioni",
    "prezzo": 129,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/254074_0/decorazione-da-parete-astratta-bianca-in-rilievo-92-120-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/decorazione-da-parete-astratta-bianca-in-rilievo-92-120-cm-254074.htm",
    "larghezza_cm": 92,
    "profondita_cm": 4,
    "descrizione": "Decorazione da parete astratta bianca in rilievo 92×120 cm"
  },
  {
    "nome": "Steli di fiori secchi rossi",
    "categoria": "Decorazioni",
    "prezzo": 9.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/steli-di-fiori-secchi-rossi-1000-16-18-244255_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/steli-di-fiori-secchi-rossi-244255.htm",
    "larghezza_cm": 18,
    "profondita_cm": 18,
    "descrizione": "Steli di fiori secchi rossi"
  },
  {
    "nome": "Pianta verde artificiale e vaso in rattan intrecciato",
    "categoria": "Decorazioni",
    "prezzo": 15.99,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/253708/pianta-verde-artificiale-e-vaso-in-rattan-intrecciato.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/pianta-verde-artificiale-e-vaso-in-rattan-intrecciato-253708.htm",
    "larghezza_cm": 17.8,
    "profondita_cm": 12.7,
    "descrizione": "Pianta verde artificiale e vaso in rattan intrecciato"
  },
  {
    "nome": "Twareg - Guardaroba a 3 ante inciso 145 cm",
    "categoria": "Armadi",
    "prezzo": 1599,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/guardaroba-a-3-ante-inciso-145-cm-1000-5-24-210805_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/guardaroba-a-3-ante-inciso-145-cm-twareg-210805.htm",
    "larghezza_cm": 145,
    "profondita_cm": 55,
    "descrizione": "Guardaroba a 3 ante inciso 145 cm"
  },
  {
    "nome": "Jill - Divano 2/3 posti in velluto a coste verde kaki",
    "categoria": "Divani",
    "prezzo": 499,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/247592_0/divano-2-3-posti-in-velluto-a-coste-verde-kaki.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-2-3-posti-in-velluto-a-coste-verde-kaki-jill-247592.htm",
    "larghezza_cm": 238,
    "profondita_cm": 91,
    "descrizione": "Divano 2/3 posti in velluto a coste verde kaki"
  },
  {
    "nome": "Stockholm - Tavolo da pranzo quadrato in massello di legno di sheesham 140 cm",
    "categoria": "Tavoli da pranzo",
    "prezzo": 599,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tavolo-da-pranzo-quadrato-in-massello-di-legno-di-sheesham-140-cm-1000-5-17-129987_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tavolo-da-pranzo-quadrato-in-massello-di-legno-di-sheesham-140-cm-stockholm-129987.htm",
    "larghezza_cm": 140,
    "profondita_cm": 140,
    "descrizione": "Tavolo da pranzo quadrato in massello di legno di sheesham 140 cm"
  },
  {
    "nome": "Caldera - Mobile TV con tondelli bianchi lung. 160 cm",
    "categoria": "Mobili TV",
    "prezzo": 399,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/mobile-tv-con-tondelli-bianchi-lung-160-cm-1000-11-9-246460_3.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/mobile-tv-con-tondelli-bianchi-lung-160-cm-caldera-246460.htm",
    "larghezza_cm": 160,
    "profondita_cm": 50,
    "descrizione": "Mobile TV con tondelli bianchi lung. 160 cm"
  },
  {
    "nome": "Quadro ovale con ritratto di cane 53×64 cm",
    "categoria": "Decorazioni",
    "prezzo": 69.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/quadro-ovale-con-ritratto-di-cane-53-64-cm-1000-13-4-249981_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/quadro-ovale-con-ritratto-di-cane-53-64-cm-249981.htm",
    "larghezza_cm": 53,
    "profondita_cm": 3.5,
    "descrizione": "Quadro ovale con ritratto di cane 53×64 cm"
  },
  {
    "nome": "Orologio da parete con ingranaggi in metallo nero Ø 70 cm",
    "categoria": "Decorazioni",
    "prezzo": 79.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/orologio-da-parete-con-ingranaggi-in-metallo-nero-oe-70-cm-1000-15-0-192659_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/orologio-da-parete-con-ingranaggi-in-metallo-nero-oe-70-cm-192659.htm",
    "larghezza_cm": 70,
    "profondita_cm": 5,
    "descrizione": "Orologio da parete con ingranaggi in metallo nero Ø 70 cm"
  },
  {
    "nome": "Pianta verde artificiale con vaso in fibre vegetali beige",
    "categoria": "Decorazioni",
    "prezzo": 14.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/pianta-verde-artificiale-con-vaso-in-fibre-vegetali-beige-1000-4-20-222568_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/pianta-verde-artificiale-con-vaso-in-fibre-vegetali-beige-222568.htm",
    "larghezza_cm": 25,
    "profondita_cm": 25,
    "descrizione": "Pianta verde artificiale con vaso in fibre vegetali beige"
  },
  {
    "nome": "Cuscino in lino lavato verde giada 45x45cm",
    "categoria": "Tessile",
    "prezzo": 25.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/cuscino-in-lino-lavato-verde-giada-45x45cm-1000-6-0-223573_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/cuscino-in-lino-lavato-verde-giada-45x45cm-223573.htm",
    "larghezza_cm": 45,
    "profondita_cm": 10,
    "descrizione": "Cuscino in lino lavato verde giada 45x45cm"
  },
  {
    "nome": "Lotto di 6 - Bicchiere in vetro FLORAL",
    "categoria": "Cucina",
    "prezzo": 17.94,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/bicchiere-in-vetro-floral-1000-15-9-139942_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/bicchiere-in-vetro-floral-139942.htm",
    "larghezza_cm": 5.5,
    "profondita_cm": 29.5,
    "descrizione": "Bicchiere in vetro FLORAL"
  },
  {
    "nome": "Barack - Divano 4 posti in tessuto tramato avorio",
    "categoria": "Divani",
    "prezzo": 1199,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-4-posti-in-tessuto-tramato-avorio-1000-4-22-247252_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-4-posti-in-tessuto-tramato-avorio-barack-247252.htm",
    "larghezza_cm": 245,
    "profondita_cm": 103,
    "descrizione": "Divano 4 posti in tessuto tramato avorio"
  },
  {
    "nome": "Lilo - Divano angolare destro 4/5 posti grigio chiaro",
    "categoria": "Divani",
    "prezzo": 1699,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/243052_0/divano-angolare-destro-4-5-posti-grigio-chiaro.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-angolare-destro-4-5-posti-grigio-chiaro-lilo-243052.htm",
    "larghezza_cm": 272,
    "profondita_cm": 168,
    "descrizione": "Divano angolare destro 4/5 posti grigio chiaro"
  },
  {
    "nome": "Clyde - Sedia scandinava in microsuede marrone effetto anticato",
    "categoria": "Sedie",
    "prezzo": 59.99,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/165715_0/sedia-scandinava-in-microsuede-marrone-effetto-anticato.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-scandinava-in-microsuede-marrone-effetto-anticato-clyde-165715.htm",
    "larghezza_cm": 44,
    "profondita_cm": 55,
    "descrizione": "Sedia scandinava in microsuede marrone effetto anticato"
  },
  {
    "nome": "Joséphine - Libreria bianca",
    "categoria": "Librerie",
    "prezzo": 699,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/libreria-bianca-1000-2-8-249001_8.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/libreria-bianca-josephine-249001.htm",
    "larghezza_cm": 160,
    "profondita_cm": 38,
    "descrizione": "Libreria bianca"
  },
  {
    "nome": "Arckos - Comodino 1 anta bianco crema",
    "categoria": "Letti",
    "prezzo": 119,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/comodino-1-anta-bianco-crema-1000-8-9-245845_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/comodino-1-anta-bianco-crema-arckos-245845.htm",
    "larghezza_cm": 40,
    "profondita_cm": 30,
    "descrizione": "Comodino 1 anta bianco crema"
  },
  {
    "nome": "Arun - Divano da giardino 2 posti in resina riciclata beige e acciaio nero",
    "categoria": "Divani",
    "prezzo": 229,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-da-giardino-2-posti-in-resina-riciclata-beige-e-acciaio-nero-1000-0-4-245922_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-da-giardino-2-posti-in-resina-riciclata-beige-e-acciaio-nero-arun-245922.htm",
    "larghezza_cm": 120,
    "profondita_cm": 74,
    "descrizione": "Divano da giardino 2 posti in resina riciclata beige e acciaio nero"
  },
  {
    "nome": "Tela dipinta nei toni del beige e del marrone, 150x50 cm",
    "categoria": "Decorazioni",
    "prezzo": 89.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tela-dipinta-nei-toni-del-beige-e-del-marrone-150x50-cm-1000-5-7-221940_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tela-dipinta-nei-toni-del-beige-e-del-marrone-150x50-cm-221940.htm",
    "larghezza_cm": 149.5,
    "profondita_cm": 3,
    "descrizione": "Tela dipinta nei toni del beige e del marrone, 150x50 cm"
  },
  {
    "nome": "Lampada bianca e abat-jour beige",
    "categoria": "Lampade",
    "prezzo": 17.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/lampada-bianca-e-abat-jour-beige-1000-6-29-159109_2.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/lampada-bianca-e-abat-jour-beige-159109.htm",
    "larghezza_cm": 20,
    "profondita_cm": 20,
    "descrizione": "Lampada bianca e abat-jour beige"
  },
  {
    "nome": "Decorazione da parete a forma di ramo tricolore in acciaio, 40x94 cm",
    "categoria": "Decorazioni",
    "prezzo": 46.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/decorazione-da-parete-a-forma-di-ramo-tricolore-in-acciaio-40x94-cm-1000-11-35-194457_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/decorazione-da-parete-a-forma-di-ramo-tricolore-in-acciaio-40x94-cm-194457.htm",
    "larghezza_cm": 40,
    "profondita_cm": 6,
    "descrizione": "Decorazione da parete a forma di ramo tricolore in acciaio, 40x94 cm"
  },
  {
    "nome": "Bouquet di fiori secchi rosa",
    "categoria": "Decorazioni",
    "prezzo": 10.45,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/246191/bouquet-di-fiori-secchi-rosa.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/bouquet-di-fiori-secchi-rosa-246191.htm",
    "larghezza_cm": 20,
    "profondita_cm": 10,
    "descrizione": "Bouquet di fiori secchi rosa"
  },
  {
    "nome": "Pianta artificiale Aloe Vera in vaso in ceramica bianca",
    "categoria": "Decorazioni",
    "prezzo": 6.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/pianta-artificiale-aloe-vera-in-vaso-in-ceramica-bianca-1000-16-6-188155_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/pianta-artificiale-aloe-vera-in-vaso-in-ceramica-bianca-188155.htm",
    "larghezza_cm": 12.7,
    "profondita_cm": 12.7,
    "descrizione": "Pianta artificiale Aloe Vera in vaso in ceramica bianca"
  },
  {
    "nome": "Vaso in dolomite nera, Alt. 20 cm",
    "categoria": "Decorazioni",
    "prezzo": 6.95,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/vaso-in-dolomite-nera-alt-20-cm-1000-13-8-208042_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/vaso-in-dolomite-nera-alt-20-cm-208042.htm",
    "larghezza_cm": 10.7,
    "profondita_cm": 10.7,
    "descrizione": "Vaso in dolomite nera, Alt. 20 cm"
  },
  {
    "nome": "Axelle - Guardaroba a 3 ante 141 cm",
    "categoria": "Armadi",
    "prezzo": 899,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/248475_0/guardaroba-a-3-ante-141-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/guardaroba-a-3-ante-141-cm-axelle-248475.htm",
    "larghezza_cm": 140.6,
    "profondita_cm": 55,
    "descrizione": "Guardaroba a 3 ante 141 cm"
  },
  {
    "nome": "Seal - Divano XL 6/7 posti in bouclé grigio chiaro chiné",
    "categoria": "Divani",
    "prezzo": 1499,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-xl-6-7-posti-in-boucle-grigio-chiaro-chine-1000-14-24-246106_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-xl-6-7-posti-in-boucle-grigio-chiaro-chine-seal-246106.htm",
    "larghezza_cm": 341,
    "profondita_cm": 138,
    "descrizione": "Divano XL 6/7 posti in bouclé grigio chiaro chiné"
  },
  {
    "nome": "Divano angolare con penisola a destra 3/4 posti effetto velluto marrone",
    "categoria": "Divani",
    "prezzo": 1399,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-angolare-con-penisola-a-destra-3-4-posti-effetto-velluto-marrone-1000-5-22-250245_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-angolare-con-penisola-a-destra-3-4-posti-effetto-velluto-marrone-250245.htm",
    "larghezza_cm": 220,
    "profondita_cm": 160,
    "descrizione": "Divano angolare con penisola a destra 3/4 posti effetto velluto marrone"
  },
  {
    "nome": "Libreria a 3 ante a battente marrone lung. 180 cm",
    "categoria": "Librerie",
    "prezzo": 1279.2,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/252100/libreria-a-3-ante-a-battente-marrone-lung-180-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/libreria-a-3-ante-a-battente-marrone-lung-180-cm-252100.htm",
    "larghezza_cm": 180,
    "profondita_cm": 40,
    "descrizione": "Libreria a 3 ante a battente marrone lung. 180 cm"
  },
  {
    "nome": "Comodino vintage con 1 cassetto e 1 nicchia in legno di mango e rattan",
    "categoria": "Letti",
    "prezzo": 159,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/253224/comodino-vintage-con-1-cassetto-e-1-nicchia-in-legno-di-mango-e-rattan.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/comodino-vintage-con-1-cassetto-e-1-nicchia-in-legno-di-mango-e-rattan-253224.htm",
    "larghezza_cm": 45,
    "profondita_cm": 38,
    "descrizione": "Comodino vintage con 1 cassetto e 1 nicchia in legno di mango e rattan"
  },
  {
    "nome": "Pianta verde artificiale e vaso bicolore",
    "categoria": "Decorazioni",
    "prezzo": 12.99,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/253686/pianta-verde-artificiale-e-vaso-bicolore.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/pianta-verde-artificiale-e-vaso-bicolore-253686.htm",
    "larghezza_cm": 15.2,
    "profondita_cm": 15.2,
    "descrizione": "Pianta verde artificiale e vaso bicolore"
  },
  {
    "nome": "Canopy - Armadio a 2 ante scorrevoli e paglia di Vienna lung. 100 cm",
    "categoria": "Armadi",
    "prezzo": 899,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/229812_0/armadio-a-2-ante-scorrevoli-e-paglia-di-vienna-lung-100-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/armadio-a-2-ante-scorrevoli-e-paglia-di-vienna-lung-100-cm-canopy-229812.htm",
    "larghezza_cm": 100,
    "profondita_cm": 55,
    "descrizione": "Armadio a 2 ante scorrevoli e paglia di Vienna lung. 100 cm"
  },
  {
    "nome": "Joey - Divano angolare 3/4 posti beige",
    "categoria": "Divani",
    "prezzo": 399,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-angolare-3-4-posti-beige-1000-5-7-166180_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-angolare-3-4-posti-beige-joey-166180.htm",
    "larghezza_cm": 205,
    "profondita_cm": 145,
    "descrizione": "Divano angolare 3/4 posti beige"
  },
  {
    "nome": "Ubby - Poltrona in tessuto tramato beige",
    "categoria": "Divani",
    "prezzo": 299,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltrona-in-tessuto-tramato-beige-1000-9-12-246135_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-in-tessuto-tramato-beige-ubby-246135.htm",
    "larghezza_cm": 75,
    "profondita_cm": 68,
    "descrizione": "Poltrona in tessuto tramato beige"
  },
  {
    "nome": "Griffith - Mobile TV vintage a 2 ante lung. 151 cm",
    "categoria": "Mobili TV",
    "prezzo": 349,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/248560_0/mobile-tv-vintage-a-2-ante-lung-151-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/mobile-tv-vintage-a-2-ante-lung-151-cm-griffith-248560.htm",
    "larghezza_cm": 151,
    "profondita_cm": 40,
    "descrizione": "Mobile TV vintage a 2 ante lung. 151 cm"
  },
  {
    "nome": "Beaumont - Credenza a 2 ante verde-grigio 125cm",
    "categoria": "Cassettiere",
    "prezzo": 699,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/credenza-a-2-ante-verde-grigio-125cm-1000-5-29-229998_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/credenza-a-2-ante-verde-grigio-125cm-beaumont-229998.htm",
    "larghezza_cm": 125,
    "profondita_cm": 40,
    "descrizione": "Credenza a 2 ante verde-grigio 125cm"
  },
  {
    "nome": "Workshop - Libreria multicolore con ripiani e 2 ante lung. 112 cm",
    "categoria": "Librerie",
    "prezzo": 429,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/libreria-multicolore-con-ripiani-e-2-ante-lung-112-cm-1000-3-7-234773_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/libreria-multicolore-con-ripiani-e-2-ante-lung-112-cm-workshop-234773.htm",
    "larghezza_cm": 112,
    "profondita_cm": 30,
    "descrizione": "Libreria multicolore con ripiani e 2 ante lung. 112 cm"
  },
  {
    "nome": "Trittico astratto ricamato beige e bianco 180 × 120 cm",
    "categoria": "Decorazioni",
    "prezzo": 169,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/254676/trittico-astratto-ricamato-beige-e-bianco-180-120-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/trittico-astratto-ricamato-beige-e-bianco-180-120-cm-254676.htm",
    "larghezza_cm": 180,
    "profondita_cm": 4,
    "descrizione": "Trittico astratto ricamato beige e bianco 180 × 120 cm"
  },
  {
    "nome": "Bouquet di erba di pampa essiccata",
    "categoria": "Decorazioni",
    "prezzo": 12.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/bouquet-di-erba-di-pampa-essiccata-1000-5-31-217741_2.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/bouquet-di-erba-di-pampa-essiccata-217741.htm",
    "larghezza_cm": 10,
    "profondita_cm": 8,
    "descrizione": "Bouquet di erba di pampa essiccata"
  },
  {
    "nome": "Pianta artificiale con vaso in rattan",
    "categoria": "Decorazioni",
    "prezzo": 19.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/pianta-artificiale-con-vaso-in-rattan-1000-10-31-238979_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/pianta-artificiale-con-vaso-in-rattan-238979.htm",
    "larghezza_cm": 40,
    "profondita_cm": 40,
    "descrizione": "Pianta artificiale con vaso in rattan"
  },
  {
    "nome": "Vaso in gres bianco con motivi a foglie dorate alt. 24 cm",
    "categoria": "Decorazioni",
    "prezzo": 16.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/vaso-in-gres-bianco-con-motivi-a-foglie-dorate-alt-24-cm-1000-15-15-216085_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/vaso-in-gres-bianco-con-motivi-a-foglie-dorate-alt-24-cm-216085.htm",
    "larghezza_cm": 14,
    "profondita_cm": 14,
    "descrizione": "Vaso in gres bianco con motivi a foglie dorate alt. 24 cm"
  },
  {
    "nome": "Mobiletto portatutto 3 cassette",
    "categoria": "Altri mobili",
    "prezzo": 89.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/mobiletto-portatutto-3-cassette-1000-9-23-207647_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/mobiletto-portatutto-3-cassette-207647.htm",
    "larghezza_cm": 40,
    "profondita_cm": 30,
    "descrizione": "Mobiletto portatutto 3 cassette"
  },
  {
    "nome": "Selena - Armadio a 2 ante e 1 cassetto nero carbone e metallo color ottone 104 cm",
    "categoria": "Armadi",
    "prezzo": 599,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/249915/armadio-a-2-ante-e-1-cassetto-nero-carbone-e-metallo-color-ottone-104-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/armadio-a-2-ante-e-1-cassetto-nero-carbone-e-metallo-color-ottone-104-cm-selena-249915.htm",
    "larghezza_cm": 104,
    "profondita_cm": 50,
    "descrizione": "Armadio a 2 ante e 1 cassetto nero carbone e metallo color ottone 104 cm"
  },
  {
    "nome": "Hallen - Divano letto pieghevole 2 posti in velluto a coste color ruggine",
    "categoria": "Divani",
    "prezzo": 399,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/230545_0/divano-letto-pieghevole-2-posti-in-velluto-a-coste-color-ruggine.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-letto-pieghevole-2-posti-in-velluto-a-coste-color-ruggine-hallen-230545.htm",
    "larghezza_cm": 150,
    "profondita_cm": 85,
    "descrizione": "Divano letto pieghevole 2 posti in velluto a coste color ruggine"
  },
  {
    "nome": "Nogobo - Tavolo da pranzo rotondo in legno massello di mango sbiancato 5/6 persone, D 120",
    "categoria": "Tavoli da pranzo",
    "prezzo": 699,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tavolo-da-pranzo-rotondo-in-legno-massello-di-mango-sbiancato-5-6-persone-d-120-1000-11-5-199183_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tavolo-da-pranzo-rotondo-in-legno-massello-di-mango-sbiancato-5-6-persone-d-120-nogobo-199183.htm",
    "larghezza_cm": 120,
    "profondita_cm": 120,
    "descrizione": "Tavolo da pranzo rotondo in legno massello di mango sbiancato 5/6 persone, D 120"
  },
  {
    "nome": "Paulette - Mobile TV vintage 2 porte tricolore lung. 150 cm",
    "categoria": "Mobili TV",
    "prezzo": 279,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/mobile-tv-vintage-2-porte-tricolore-lung-150-cm-1000-9-17-166354_8.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/mobile-tv-vintage-2-porte-tricolore-lung-150-cm-paulette-166354.htm",
    "larghezza_cm": 150,
    "profondita_cm": 40,
    "descrizione": "Mobile TV vintage 2 porte tricolore lung. 150 cm"
  },
  {
    "nome": "Alienor - Comodino rotondo con 1 cassetto in ferro battuto nero",
    "categoria": "Letti",
    "prezzo": 99.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/comodino-rotondo-con-1-cassetto-in-ferro-battuto-nero-1000-8-5-187416_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/comodino-rotondo-con-1-cassetto-in-ferro-battuto-nero-alienor-187416.htm",
    "larghezza_cm": 42,
    "profondita_cm": 42,
    "descrizione": "Comodino rotondo con 1 cassetto in ferro battuto nero"
  },
  {
    "nome": "Chesterfield - Divano capitonné 2 posti in suede marrone",
    "categoria": "Divani",
    "prezzo": 599,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/147605_0/divano-capitonne-2-posti-in-suede-marrone.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-capitonne-2-posti-in-suede-marrone-chesterfield-147605.htm",
    "larghezza_cm": 167,
    "profondita_cm": 89,
    "descrizione": "Divano capitonné 2 posti in suede marrone"
  },
  {
    "nome": "Vaso in porcellana dorata Alt. 32",
    "categoria": "Decorazioni",
    "prezzo": 24.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/vaso-in-porcellana-dorata-alt-32-1000-8-28-200149_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/vaso-in-porcellana-dorata-alt-32-200149.htm",
    "larghezza_cm": 14,
    "profondita_cm": 14,
    "descrizione": "Vaso in porcellana dorata Alt. 32"
  },
  {
    "nome": "Oliver - Armadio a 2 ante e 2 cassetti verde kaki 100 cm",
    "categoria": "Armadi",
    "prezzo": 399,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/armadio-a-2-ante-e-2-cassetti-verde-kaki-100-cm-1000-8-29-241765_2.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/armadio-a-2-ante-e-2-cassetti-verde-kaki-100-cm-oliver-241765.htm",
    "larghezza_cm": 100,
    "profondita_cm": 55,
    "descrizione": "Armadio a 2 ante e 2 cassetti verde kaki 100 cm"
  },
  {
    "nome": "Portasapone in vetro trasparente, bianco e oro",
    "categoria": "Bagno",
    "prezzo": 6.95,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/251293/portasapone-in-vetro-trasparente-bianco-e-oro.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/portasapone-in-vetro-trasparente-bianco-e-oro-251293.htm",
    "larghezza_cm": 12,
    "profondita_cm": 10,
    "descrizione": "Portasapone in vetro trasparente, bianco e oro"
  },
  {
    "nome": "Lotto di 6 - Bicchiere in vetro striato trasparente",
    "categoria": "Cucina",
    "prezzo": 17.94,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/bicchiere-in-vetro-striato-trasparente-1000-10-19-241427_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/bicchiere-in-vetro-striato-trasparente-241427.htm",
    "larghezza_cm": 9,
    "profondita_cm": 9,
    "descrizione": "Bicchiere in vetro striato trasparente"
  },
  {
    "nome": "Nio - Divano letto pieghevole 2 posti verde acqua",
    "categoria": "Divani",
    "prezzo": 339,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/186339/divano-letto-pieghevole-2-posti-verde-acqua.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-letto-pieghevole-2-posti-verde-acqua-nio-186339.htm",
    "larghezza_cm": 150,
    "profondita_cm": 91,
    "descrizione": "Divano letto pieghevole 2 posti verde acqua"
  },
  {
    "nome": "Léontine - Porta-TV color crema lung. 117 cm",
    "categoria": "Mobili TV",
    "prezzo": 299,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/porta-tv-color-crema-lung-117-cm-1000-11-34-129840_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/porta-tv-color-crema-lung-117-cm-leontine-129840.htm",
    "larghezza_cm": 117,
    "profondita_cm": 53,
    "descrizione": "Porta-TV color crema lung. 117 cm"
  },
  {
    "nome": "Portobello - Credenza vintage a 2 ante scorrevoli 120cm",
    "categoria": "Cassettiere",
    "prezzo": 899,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/237912_0/credenza-vintage-a-2-ante-scorrevoli-120cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/credenza-vintage-a-2-ante-scorrevoli-120cm-portobello-237912.htm",
    "larghezza_cm": 120,
    "profondita_cm": 50,
    "descrizione": "Credenza vintage a 2 ante scorrevoli 120cm"
  },
  {
    "nome": "Sartene - Biblioteca con 2 ante e 2 ripiani bianco crema 78cm",
    "categoria": "Librerie",
    "prezzo": 799,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/230908_0/biblioteca-con-2-ante-e-2-ripiani-bianco-crema-78cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/biblioteca-con-2-ante-e-2-ripiani-bianco-crema-78cm-sartene-230908.htm",
    "larghezza_cm": 78,
    "profondita_cm": 40,
    "descrizione": "Biblioteca con 2 ante e 2 ripiani bianco crema 78cm"
  },
  {
    "nome": "Vaso in gres écru screziato alt. 19 cm",
    "categoria": "Decorazioni",
    "prezzo": 8.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/vaso-in-gres-ecru-screziato-alt-19-cm-1000-13-33-216185_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/vaso-in-gres-ecru-screziato-alt-19-cm-216185.htm",
    "larghezza_cm": 9,
    "profondita_cm": 9,
    "descrizione": "Vaso in gres écru screziato alt. 19 cm"
  },
  {
    "nome": "Servizio piatti 12 pezzi in porcellana bianca e dorata",
    "categoria": "Cucina",
    "prezzo": 84.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/servizio-piatti-12-pezzi-in-porcellana-bianca-e-dorata-1000-4-8-240350_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/servizio-piatti-12-pezzi-in-porcellana-bianca-e-dorata-240350.htm",
    "larghezza_cm": 24.5,
    "profondita_cm": 27.5,
    "descrizione": "Servizio piatti 12 pezzi in porcellana bianca e dorata"
  },
  {
    "nome": "Nia - Divano clic clac 2/3 posti verde acqua",
    "categoria": "Divani",
    "prezzo": 399,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/230154_0/divano-clic-clac-2-3-posti-verde-acqua.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-clic-clac-2-3-posti-verde-acqua-nia-230154.htm",
    "larghezza_cm": 156,
    "profondita_cm": 89,
    "descrizione": "Divano clic clac 2/3 posti verde acqua"
  },
  {
    "nome": "Geller - Divano 3 posti con schienale reclinabile in pelle color cammello",
    "categoria": "Divani",
    "prezzo": 1999,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-3-posti-con-schienale-reclinabile-in-pelle-color-cammello-1000-6-39-249770_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-3-posti-con-schienale-reclinabile-in-pelle-color-cammello-geller-249770.htm",
    "larghezza_cm": 234,
    "profondita_cm": 108,
    "descrizione": "Divano 3 posti con schienale reclinabile in pelle color cammello"
  },
  {
    "nome": "Poltrona effetto lino beige",
    "categoria": "Divani",
    "prezzo": 229,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/252652/poltrona-effetto-lino-beige.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-effetto-lino-beige-252652.htm",
    "larghezza_cm": 62.5,
    "profondita_cm": 61.5,
    "descrizione": "Poltrona effetto lino beige"
  },
  {
    "nome": "Mauricette - Sedia vintage in tessuto riciclato beige e acciaio effetto rovere",
    "categoria": "Sedie",
    "prezzo": 69.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-vintage-in-tessuto-riciclato-beige-e-acciaio-effetto-rovere-1000-11-33-242958_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-vintage-in-tessuto-riciclato-beige-e-acciaio-effetto-rovere-mauricette-242958.htm",
    "larghezza_cm": 50.5,
    "profondita_cm": 54.5,
    "descrizione": "Sedia vintage in tessuto riciclato beige e acciaio effetto rovere"
  },
  {
    "nome": "Malouine - Tavolo da pranzo in travi di legno massello di quercia 6/8 persone, L.180",
    "categoria": "Tavoli da pranzo",
    "prezzo": 899,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tavolo-da-pranzo-in-travi-di-legno-massello-di-quercia-6-8-persone-l-180-1000-15-37-199051_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tavolo-da-pranzo-in-travi-di-legno-massello-di-quercia-6-8-persone-l-180-malouine-199051.htm",
    "larghezza_cm": 180,
    "profondita_cm": 93.7,
    "descrizione": "Tavolo da pranzo in travi di legno massello di quercia 6/8 persone, L.180"
  },
  {
    "nome": "Austral - Porta-TV a 2 ante bianco lung. 180 cm",
    "categoria": "Mobili TV",
    "prezzo": 463.2,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/porta-tv-a-2-ante-bianco-lung-180-cm-1000-6-22-155658_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/porta-tv-a-2-ante-bianco-lung-180-cm-austral-155658.htm",
    "larghezza_cm": 180,
    "profondita_cm": 42,
    "descrizione": "Porta-TV a 2 ante bianco lung. 180 cm"
  },
  {
    "nome": "Aristote - Libreria 2 cassetti, 4 ante e scala in pino riciclato",
    "categoria": "Librerie",
    "prezzo": 2099,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/libreria-2-cassetti-4-ante-e-scala-in-pino-riciclato-1000-0-19-130645_3.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/libreria-2-cassetti-4-ante-e-scala-in-pino-riciclato-aristote-130645.htm",
    "larghezza_cm": 200,
    "profondita_cm": 40,
    "descrizione": "Libreria 2 cassetti, 4 ante e scala in pino riciclato"
  },
  {
    "nome": "Ormond - Comodino con 2 cassetti metallo color ottone",
    "categoria": "Letti",
    "prezzo": 199,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/comodino-con-2-cassetti-metallo-color-ottone-1000-8-9-220056_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/comodino-con-2-cassetti-metallo-color-ottone-ormond-220056.htm",
    "larghezza_cm": 50,
    "profondita_cm": 35,
    "descrizione": "Comodino con 2 cassetti metallo color ottone"
  },
  {
    "nome": "Suzon - Letto 90x200 cm con rete a doghe",
    "categoria": "Letti",
    "prezzo": 369,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/letto-90x200-cm-con-rete-a-doghe-1000-12-20-248603_2.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/letto-90x200-cm-con-rete-a-doghe-suzon-248603.htm",
    "larghezza_cm": 205.6,
    "profondita_cm": 96.2,
    "descrizione": "Letto 90x200 cm con rete a doghe"
  },
  {
    "nome": "Set di 3 decorazioni da parete uccelli in porcellana bianco sporco",
    "categoria": "Decorazioni",
    "prezzo": 39.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/set-di-3-decorazioni-da-parete-uccelli-in-porcellana-bianco-sporco-1000-16-35-249848_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/set-di-3-decorazioni-da-parete-uccelli-in-porcellana-bianco-sporco-249848.htm",
    "larghezza_cm": 30,
    "profondita_cm": 2,
    "descrizione": "Set di 3 decorazioni da parete uccelli in porcellana bianco sporco"
  },
  {
    "nome": "Vaso destrutturato in gres beige alt. 16 cm",
    "categoria": "Decorazioni",
    "prezzo": 7.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/vaso-destrutturato-in-gres-beige-alt-16-cm-1000-5-40-248664_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/vaso-destrutturato-in-gres-beige-alt-16-cm-248664.htm",
    "larghezza_cm": 8.5,
    "profondita_cm": 5.5,
    "descrizione": "Vaso destrutturato in gres beige alt. 16 cm"
  },
  {
    "nome": "Sinbad - Armadio bianco in mango L 102 cm",
    "categoria": "Armadi",
    "prezzo": 999,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/138925/armadio-bianco-in-mango-l-102-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/armadio-bianco-in-mango-l-102-cm-sinbad-138925.htm",
    "larghezza_cm": 102,
    "profondita_cm": 48,
    "descrizione": "Armadio bianco in mango L 102 cm"
  },
  {
    "nome": "Lotto di 6 - Calice in vetro striato trasparente",
    "categoria": "Cucina",
    "prezzo": 29.94,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/calice-in-vetro-striato-trasparente-1000-13-22-241430_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/calice-in-vetro-striato-trasparente-241430.htm",
    "larghezza_cm": 8.9,
    "profondita_cm": 8.9,
    "descrizione": "Calice in vetro striato trasparente"
  },
  {
    "nome": "Servizio di 12 piatti in ceramica beige",
    "categoria": "Cucina",
    "prezzo": 82.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/servizio-di-12-piatti-in-ceramica-beige-1000-9-11-244248_2.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/servizio-di-12-piatti-in-ceramica-beige-244248.htm",
    "larghezza_cm": 33.5,
    "profondita_cm": 30,
    "descrizione": "Servizio di 12 piatti in ceramica beige"
  },
  {
    "nome": "Vassoio girevole in metallo",
    "categoria": "Cucina",
    "prezzo": 14.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/vassoio-girevole-in-metallo-1000-6-30-249515_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/vassoio-girevole-in-metallo-249515.htm",
    "larghezza_cm": 26,
    "profondita_cm": 26,
    "descrizione": "Vassoio girevole in metallo"
  },
  {
    "nome": "Elvis - Divano letto clic clac 3 posti giallo senape",
    "categoria": "Divani",
    "prezzo": 399,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-letto-clic-clac-3-posti-giallo-senape-1000-12-4-186349_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-letto-clic-clac-3-posti-giallo-senape-elvis-186349.htm",
    "larghezza_cm": 214,
    "profondita_cm": 87,
    "descrizione": "Divano letto clic clac 3 posti giallo senape"
  },
  {
    "nome": "Elvis - Divano letto clic clac a 3 posti grigio",
    "categoria": "Divani",
    "prezzo": 399,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-letto-clic-clac-a-3-posti-grigio-1000-13-0-175521_9.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-letto-clic-clac-a-3-posti-grigio-elvis-175521.htm",
    "larghezza_cm": 214,
    "profondita_cm": 87,
    "descrizione": "Divano letto clic clac a 3 posti grigio"
  },
  {
    "nome": "Ginette - Sedia in tessuto bouclé bianco e acciaio cromato color oro",
    "categoria": "Sedie",
    "prezzo": 89.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-in-tessuto-boucle-bianco-e-acciaio-cromato-color-oro-1000-1-2-209594_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-in-tessuto-boucle-bianco-e-acciaio-cromato-color-oro-ginette-209594.htm",
    "larghezza_cm": 49,
    "profondita_cm": 55,
    "descrizione": "Sedia in tessuto bouclé bianco e acciaio cromato color oro"
  },
  {
    "nome": "Alfred - Tavolo da pranzo in legno di mango e acciaio per 8/10 persone, L200",
    "categoria": "Tavoli da pranzo",
    "prezzo": 699,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tavolo-da-pranzo-in-legno-di-mango-e-acciaio-per-8-10-persone-l200-1000-1-11-138755_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tavolo-da-pranzo-in-legno-di-mango-e-acciaio-per-8-10-persone-l200-alfred-138755.htm",
    "larghezza_cm": 200,
    "profondita_cm": 90.5,
    "descrizione": "Tavolo da pranzo in legno di mango e acciaio per 8/10 persone, L200"
  },
  {
    "nome": "Flaubert - Porta-TV a 4 ante in pino riciclato lung. 180 cm",
    "categoria": "Mobili TV",
    "prezzo": 789,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/porta-tv-a-4-ante-in-pino-riciclato-lung-180-cm-1000-5-40-174782_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/porta-tv-a-4-ante-in-pino-riciclato-lung-180-cm-flaubert-174782.htm",
    "larghezza_cm": 180,
    "profondita_cm": 50,
    "descrizione": "Porta-TV a 4 ante in pino riciclato lung. 180 cm"
  },
  {
    "nome": "Portobello - Biblioteca vintage con 3 cassetti 55cm",
    "categoria": "Librerie",
    "prezzo": 579,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/biblioteca-vintage-con-3-cassetti-55cm-1000-13-9-209232_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/biblioteca-vintage-con-3-cassetti-55cm-portobello-209232.htm",
    "larghezza_cm": 55,
    "profondita_cm": 41,
    "descrizione": "Biblioteca vintage con 3 cassetti 55cm"
  },
  {
    "nome": "Barbade - Comodino bianco in legno con cassetto L 45 cm",
    "categoria": "Letti",
    "prezzo": 129,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/comodino-bianco-in-legno-con-cassetto-l-45-cm-1000-16-8-110380_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/comodino-bianco-in-legno-con-cassetto-l-45-cm-barbade-110380.htm",
    "larghezza_cm": 45,
    "profondita_cm": 33,
    "descrizione": "Comodino bianco in legno con cassetto L 45 cm"
  },
  {
    "nome": "Modulo angolare per divano componibile in tessuto poliestere effetto lino beige - 158 cm",
    "categoria": "Divani",
    "prezzo": 599,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/254925_0/modulo-angolare-per-divano-componibile-in-tessuto-poliestere-effetto-lino-beige-158-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/modulo-angolare-per-divano-componibile-in-tessuto-poliestere-effetto-lino-beige-158-cm-254925.htm",
    "larghezza_cm": 160,
    "profondita_cm": 102,
    "descrizione": "158 cm"
  },
  {
    "nome": "Bouquet di fiori secchi multicolore",
    "categoria": "Decorazioni",
    "prezzo": 24.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/bouquet-di-fiori-secchi-multicolore-1000-1-16-246467_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/bouquet-di-fiori-secchi-multicolore-246467.htm",
    "larghezza_cm": 20,
    "profondita_cm": 20,
    "descrizione": "Bouquet di fiori secchi multicolore"
  },
  {
    "nome": "Pianta artificiale verde e vaso nero",
    "categoria": "Decorazioni",
    "prezzo": 69.99,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/253678/pianta-artificiale-verde-e-vaso-nero.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/pianta-artificiale-verde-e-vaso-nero-253678.htm",
    "larghezza_cm": 38.1,
    "profondita_cm": 38.1,
    "descrizione": "Pianta artificiale verde e vaso nero"
  },
  {
    "nome": "Vaso in dolomite verde acqua alt. 14cm",
    "categoria": "Decorazioni",
    "prezzo": 4.85,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/vaso-in-dolomite-verde-acqua-alt-14cm-1000-0-4-233376_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/vaso-in-dolomite-verde-acqua-alt-14cm-233376.htm",
    "larghezza_cm": 13.5,
    "profondita_cm": 6,
    "descrizione": "Vaso in dolomite verde acqua alt. 14cm"
  },
  {
    "nome": "Mobile contenitore multicassetto in legno di mango",
    "categoria": "Altri mobili",
    "prezzo": 249,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/mobile-contenitore-multicassetto-in-legno-di-mango-1000-12-11-235105_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/mobile-contenitore-multicassetto-in-legno-di-mango-235105.htm",
    "larghezza_cm": 60,
    "profondita_cm": 28,
    "descrizione": "Mobile contenitore multicassetto in legno di mango"
  },
  {
    "nome": "Nio - Divano letto pieghevole 2 posti giallo senape",
    "categoria": "Divani",
    "prezzo": 339,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/186338_0/divano-letto-pieghevole-2-posti-giallo-senape.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-letto-pieghevole-2-posti-giallo-senape-nio-186338.htm",
    "larghezza_cm": 150,
    "profondita_cm": 91,
    "descrizione": "Divano letto pieghevole 2 posti giallo senape"
  },
  {
    "nome": "Tokyo - Divano 2 posti in tessuto tramato beige",
    "categoria": "Divani",
    "prezzo": 899,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/246484_0/divano-2-posti-in-tessuto-tramato-beige.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-2-posti-in-tessuto-tramato-beige-tokyo-246484.htm",
    "larghezza_cm": 212,
    "profondita_cm": 96,
    "descrizione": "Divano 2 posti in tessuto tramato beige"
  },
  {
    "nome": "Moon - Poltrona e poggiapiedi in bouclé écru",
    "categoria": "Divani",
    "prezzo": 399,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltrona-e-poggiapiedi-in-boucle-ecru-1000-15-7-249779_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-e-poggiapiedi-in-boucle-ecru-moon-249779.htm",
    "larghezza_cm": 81,
    "profondita_cm": 87,
    "descrizione": "Poltrona e poggiapiedi in bouclé écru"
  },
  {
    "nome": "Nio - Divano letto pieghevole 2 posti beige",
    "categoria": "Divani",
    "prezzo": 339,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/221261_0/divano-letto-pieghevole-2-posti-beige.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-letto-pieghevole-2-posti-beige-nio-221261.htm",
    "larghezza_cm": 150,
    "profondita_cm": 91,
    "descrizione": "Divano letto pieghevole 2 posti beige"
  },
  {
    "nome": "Lampada da tavolo in acciaio dorato con paralume rosa a forma di corolla",
    "categoria": "Lampade",
    "prezzo": 35.99,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/254348/lampada-da-tavolo-in-acciaio-dorato-con-paralume-rosa-a-forma-di-corolla.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/lampada-da-tavolo-in-acciaio-dorato-con-paralume-rosa-a-forma-di-corolla-254348.htm",
    "larghezza_cm": 19,
    "profondita_cm": 19,
    "descrizione": "Lampada da tavolo in acciaio dorato con paralume rosa a forma di corolla"
  },
  {
    "nome": "Decorazione murale composta da cerchi in ferro battuto, alluminio dorato e specchi, 139x71 cm",
    "categoria": "Decorazioni",
    "prezzo": 119,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/decorazione-murale-composta-da-cerchi-in-ferro-battuto-alluminio-dorato-e-specchi-139x71-cm-1000-13-19-249709_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/decorazione-murale-composta-da-cerchi-in-ferro-battuto-alluminio-dorato-e-specchi-139x71-cm-249709.htm",
    "larghezza_cm": 139,
    "profondita_cm": 4.5,
    "descrizione": "Decorazione murale composta da cerchi in ferro battuto, alluminio dorato e specchi, 139x71 cm"
  },
  {
    "nome": "Vaso in gres beige alt. 12 cm",
    "categoria": "Decorazioni",
    "prezzo": 5.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/vaso-in-gres-beige-alt-12-cm-1000-12-29-248858_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/vaso-in-gres-beige-alt-12-cm-248858.htm",
    "larghezza_cm": 6.8,
    "profondita_cm": 6.8,
    "descrizione": "Vaso in gres beige alt. 12 cm"
  },
  {
    "nome": "Portobello - Armadio vintage a 2 ante e 3 cassetti lung. 120 cm",
    "categoria": "Armadi",
    "prezzo": 1199,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/146905_0/armadio-vintage-a-2-ante-e-3-cassetti-lung-120-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/armadio-vintage-a-2-ante-e-3-cassetti-lung-120-cm-portobello-146905.htm",
    "larghezza_cm": 120,
    "profondita_cm": 55,
    "descrizione": "Armadio vintage a 2 ante e 3 cassetti lung. 120 cm"
  },
  {
    "nome": "Jeannette - Libreria de 4 puertas y 2 cajones, verde grigio e verde cedro e écru",
    "categoria": "Librerie",
    "prezzo": 469,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/libreria-de-4-puertas-y-2-cajones-verde-grigio-e-verde-cedro-e-ecru-1000-4-8-234774_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/libreria-de-4-puertas-y-2-cajones-verde-grigio-e-verde-cedro-e-ecru-jeannette-234774.htm",
    "larghezza_cm": 116,
    "profondita_cm": 35,
    "descrizione": "Libreria de 4 puertas y 2 cajones, verde grigio e verde cedro e écru"
  },
  {
    "nome": "Quadro su tela dipinto a mano con motivi vegetali multicolore 50x70 cm",
    "categoria": "Decorazioni",
    "prezzo": 49.99,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/251932/quadro-su-tela-dipinto-a-mano-con-motivi-vegetali-multicolore-50x70-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/quadro-su-tela-dipinto-a-mano-con-motivi-vegetali-multicolore-50x70-cm-251932.htm",
    "larghezza_cm": 51,
    "profondita_cm": 3,
    "descrizione": "Quadro su tela dipinto a mano con motivi vegetali multicolore 50x70 cm"
  },
  {
    "nome": "Lampada in ceramica nera e paralume in poliestere riciclato ecrù",
    "categoria": "Lampade",
    "prezzo": 39.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/lampada-in-ceramica-nera-e-paralume-in-poliestere-riciclato-ecru-1000-3-26-243443_3.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/lampada-in-ceramica-nera-e-paralume-in-poliestere-riciclato-ecru-243443.htm",
    "larghezza_cm": 28,
    "profondita_cm": 28,
    "descrizione": "Lampada in ceramica nera e paralume in poliestere riciclato ecrù"
  },
  {
    "nome": "Contenitore 4 piante in mango e ferro riciclato nero",
    "categoria": "Altri mobili",
    "prezzo": 169,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/210569_0/contenitore-4-piante-in-mango-e-ferro-riciclato-nero.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/contenitore-4-piante-in-mango-e-ferro-riciclato-nero-210569.htm",
    "larghezza_cm": 46,
    "profondita_cm": 46.5,
    "descrizione": "Contenitore 4 piante in mango e ferro riciclato nero"
  },
  {
    "nome": "Vaso in gres bianco e grigio chiaro alt. 25cm",
    "categoria": "Decorazioni",
    "prezzo": 12.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/vaso-in-gres-bianco-e-grigio-chiaro-alt-25cm-1000-7-1-226362_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/vaso-in-gres-bianco-e-grigio-chiaro-alt-25cm-226362.htm",
    "larghezza_cm": 12,
    "profondita_cm": 12,
    "descrizione": "Vaso in gres bianco e grigio chiaro alt. 25cm"
  },
  {
    "nome": "Candela profumata rossa alt. 10 cm",
    "categoria": "Decorazioni",
    "prezzo": 4.15,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/candela-profumata-rossa-alt-10-cm-1000-2-6-246621_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/candela-profumata-rossa-alt-10-cm-246621.htm",
    "larghezza_cm": 7,
    "profondita_cm": 7,
    "descrizione": "Candela profumata rossa alt. 10 cm"
  },
  {
    "nome": "Célestine - Mobiletto bianco sporco a 12 cassetti",
    "categoria": "Altri mobili",
    "prezzo": 399,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/mobiletto-bianco-sporco-a-12-cassetti-1000-4-9-248510_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/mobiletto-bianco-sporco-a-12-cassetti-celestine-248510.htm",
    "larghezza_cm": 120,
    "profondita_cm": 40,
    "descrizione": "Mobiletto bianco sporco a 12 cassetti"
  },
  {
    "nome": "Selena - Guardaroba a 2 ante e 1 cassetto bianco 104 cm",
    "categoria": "Armadi",
    "prezzo": 599,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/249918_0/guardaroba-a-2-ante-e-1-cassetto-bianco-104-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/guardaroba-a-2-ante-e-1-cassetto-bianco-104-cm-selena-249918.htm",
    "larghezza_cm": 104,
    "profondita_cm": 50,
    "descrizione": "Guardaroba a 2 ante e 1 cassetto bianco 104 cm"
  },
  {
    "nome": "Dispenser per sapone in vetro con supporto in acciaio nero",
    "categoria": "Cucina",
    "prezzo": 14.99,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/254000/dispenser-per-sapone-in-vetro-con-supporto-in-acciaio-nero.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/dispenser-per-sapone-in-vetro-con-supporto-in-acciaio-nero-254000.htm",
    "larghezza_cm": 26.4,
    "profondita_cm": 9.6,
    "descrizione": "Dispenser per sapone in vetro con supporto in acciaio nero"
  },
  {
    "nome": "Chesterfield - Divano 3/4 posti in velluto beige rosato",
    "categoria": "Divani",
    "prezzo": 799,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-3-4-posti-in-velluto-beige-rosato-1000-2-21-230318_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-3-4-posti-in-velluto-beige-rosato-chesterfield-230318.htm",
    "larghezza_cm": 200,
    "profondita_cm": 91,
    "descrizione": "Divano 3/4 posti in velluto beige rosato"
  },
  {
    "nome": "Happy Camper - Letto estraibile 90x190 cm bianco",
    "categoria": "Letti",
    "prezzo": 399,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/letto-estraibile-90x190-cm-bianco-1000-16-30-181865_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/letto-estraibile-90x190-cm-bianco-happy-camper-181865.htm",
    "larghezza_cm": 95,
    "profondita_cm": 196,
    "descrizione": "Letto estraibile 90x190 cm bianco"
  },
  {
    "nome": "Pouf in tessuto beige effetto lino per divano componibile",
    "categoria": "Divani",
    "prezzo": 199,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/254923_0/pouf-in-tessuto-beige-effetto-lino-per-divano-componibile.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/pouf-in-tessuto-beige-effetto-lino-per-divano-componibile-254923.htm",
    "larghezza_cm": 63,
    "profondita_cm": 63,
    "descrizione": "Pouf in tessuto beige effetto lino per divano componibile"
  },
  {
    "nome": "Lampada a sospensione in vetro colorato verde Ø 24cm",
    "categoria": "Lampade",
    "prezzo": 39.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/lampada-a-sospensione-in-vetro-colorato-verde-oe-24cm-1000-9-38-232467_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/lampada-a-sospensione-in-vetro-colorato-verde-oe-24cm-232467.htm",
    "larghezza_cm": 24,
    "profondita_cm": 24,
    "descrizione": "Lampada a sospensione in vetro colorato verde Ø 24cm"
  },
  {
    "nome": "Vaso per piante in ferro battuto nero",
    "categoria": "Decorazioni",
    "prezzo": 29.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/vaso-per-piante-in-ferro-battuto-nero-1000-8-8-213987_2.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/vaso-per-piante-in-ferro-battuto-nero-213987.htm",
    "larghezza_cm": 26,
    "profondita_cm": 22.5,
    "descrizione": "Vaso per piante in ferro battuto nero"
  },
  {
    "nome": "Vaso in vetro colorato verde H18",
    "categoria": "Decorazioni",
    "prezzo": 12.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/vaso-in-vetro-colorato-verde-h18-1000-9-16-241834_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/vaso-in-vetro-colorato-verde-h18-241834.htm",
    "larghezza_cm": 14.5,
    "profondita_cm": 14.5,
    "descrizione": "Vaso in vetro colorato verde H18"
  },
  {
    "nome": "Caldera Business - Mobiletto contenitore professionale a 2 ante",
    "categoria": "Altri mobili",
    "prezzo": 399,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/mobiletto-contenitore-professionale-a-2-ante-1000-9-39-237839_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/mobiletto-contenitore-professionale-a-2-ante-caldera-business-237839.htm",
    "larghezza_cm": 80,
    "profondita_cm": 40,
    "descrizione": "Mobiletto contenitore professionale a 2 ante"
  },
  {
    "nome": "Elvis - Divano clic clac a 4 posti in velluto marrone scoiattolo",
    "categoria": "Divani",
    "prezzo": 399,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/209529_0/divano-clic-clac-a-4-posti-in-velluto-marrone-scoiattolo.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-clic-clac-a-4-posti-in-velluto-marrone-scoiattolo-elvis-209529.htm",
    "larghezza_cm": 214,
    "profondita_cm": 86,
    "descrizione": "Divano clic clac a 4 posti in velluto marrone scoiattolo"
  },
  {
    "nome": "Ginette - Sedia beige e acciaio cromato dorato",
    "categoria": "Sedie",
    "prezzo": 89.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-beige-e-acciaio-cromato-dorato-1000-6-5-249736_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-beige-e-acciaio-cromato-dorato-ginette-249736.htm",
    "larghezza_cm": 49,
    "profondita_cm": 55,
    "descrizione": "Sedia beige e acciaio cromato dorato"
  },
  {
    "nome": "Bronx - Tavolo da pranzo allungabile per 6/10 persone lung.160/230 cm",
    "categoria": "Tavoli da pranzo",
    "prezzo": 399,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/166560/tavolo-da-pranzo-allungabile-per-6-10-persone-lung-160-230-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tavolo-da-pranzo-allungabile-per-6-10-persone-lung-160-230-cm-bronx-166560.htm",
    "larghezza_cm": 160,
    "profondita_cm": 90,
    "descrizione": "Tavolo da pranzo allungabile per 6/10 persone lung.160/230 cm"
  },
  {
    "nome": "Colette - Comodino in mango e acacia con cassetti",
    "categoria": "Letti",
    "prezzo": 229,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/comodino-in-mango-e-acacia-con-cassetti-1000-12-3-131490_4.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/comodino-in-mango-e-acacia-con-cassetti-colette-131490.htm",
    "larghezza_cm": 54,
    "profondita_cm": 36,
    "descrizione": "Comodino in mango e acacia con cassetti"
  },
  {
    "nome": "Vaso in porcellana striata bianca, 25 cm",
    "categoria": "Decorazioni",
    "prezzo": 19.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/vaso-in-porcellana-striata-bianca-25-cm-1000-11-34-194661_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/vaso-in-porcellana-striata-bianca-25-cm-194661.htm",
    "larghezza_cm": 13,
    "profondita_cm": 13,
    "descrizione": "Vaso in porcellana striata bianca, 25 cm"
  },
  {
    "nome": "Lotto di 6 - Candela profumata gialla alt. 6 cm, 75g",
    "categoria": "Decorazioni",
    "prezzo": 9.54,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/candela-profumata-gialla-alt-6-cm-75g-1000-16-20-246635_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/candela-profumata-gialla-alt-6-cm-75g-246635.htm",
    "larghezza_cm": 4.5,
    "profondita_cm": 4.5,
    "descrizione": "Candela profumata gialla alt. 6 cm, 75g"
  },
  {
    "nome": "Dispenser di bevande in vetro striato verde oliva con tappo in bambù 5,5 l",
    "categoria": "Cucina",
    "prezzo": 19.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/dispenser-di-bevande-in-vetro-striato-verde-oliva-con-tappo-in-bambu-5-5-l-1000-15-6-232558_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/dispenser-di-bevande-in-vetro-striato-verde-oliva-con-tappo-in-bambu-5-5-l-232558.htm",
    "larghezza_cm": 17,
    "profondita_cm": 14,
    "descrizione": "Dispenser di bevande in vetro striato verde oliva con tappo in bambù 5,5 l"
  },
  {
    "nome": "Set di posate da 24 pezzi in acciaio inossidabile placcato oro",
    "categoria": "Cucina",
    "prezzo": 74.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/set-di-posate-da-24-pezzi-in-acciaio-inossidabile-placcato-oro-1000-8-8-223048_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/set-di-posate-da-24-pezzi-in-acciaio-inossidabile-placcato-oro-223048.htm",
    "larghezza_cm": 26.5,
    "profondita_cm": 17,
    "descrizione": "Set di posate da 24 pezzi in acciaio inossidabile placcato oro"
  },
  {
    "nome": "Divano stondato 3 posti in tessuto tramato greige",
    "categoria": "Divani",
    "prezzo": 699.3,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-stondato-3-posti-in-tessuto-tramato-greige-1000-7-3-249652_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-stondato-3-posti-in-tessuto-tramato-greige-249652.htm",
    "larghezza_cm": 215,
    "profondita_cm": 101,
    "descrizione": "Divano stondato 3 posti in tessuto tramato greige"
  },
  {
    "nome": "Ice - Sedia scandinava trasparente con gambe in rovere",
    "categoria": "Sedie",
    "prezzo": 69.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-scandinava-trasparente-con-gambe-in-rovere-1000-5-29-165874_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-scandinava-trasparente-con-gambe-in-rovere-ice-165874.htm",
    "larghezza_cm": 48,
    "profondita_cm": 54,
    "descrizione": "Sedia scandinava trasparente con gambe in rovere"
  },
  {
    "nome": "Chamarel - Libreria per bambini verde chiaro",
    "categoria": "Librerie",
    "prezzo": 89.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/libreria-per-bambini-verde-chiaro-1000-15-36-241772_2.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/libreria-per-bambini-verde-chiaro-chamarel-241772.htm",
    "larghezza_cm": 60,
    "profondita_cm": 30,
    "descrizione": "Libreria per bambini verde chiaro"
  },
  {
    "nome": "Orologio a reticolo in metallo nero, 60x60 cm",
    "categoria": "Decorazioni",
    "prezzo": 34.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/orologio-a-reticolo-in-metallo-nero-60x60-cm-1000-4-35-195810_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/orologio-a-reticolo-in-metallo-nero-60x60-cm-195810.htm",
    "larghezza_cm": 60,
    "profondita_cm": 5.5,
    "descrizione": "Orologio a reticolo in metallo nero, 60x60 cm"
  },
  {
    "nome": "Vaso in gres bianco alt. 35 cm",
    "categoria": "Decorazioni",
    "prezzo": 37.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/vaso-in-gres-bianco-alt-35-cm-1000-16-28-216426_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/vaso-in-gres-bianco-alt-35-cm-216426.htm",
    "larghezza_cm": 26,
    "profondita_cm": 26,
    "descrizione": "Vaso in gres bianco alt. 35 cm"
  },
  {
    "nome": "Canopy - Mobiletto portaoggetti a 2 ante in paglia di Vienna",
    "categoria": "Altri mobili",
    "prezzo": 429,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/mobiletto-portaoggetti-a-2-ante-in-paglia-di-vienna-1000-5-11-219730_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/mobiletto-portaoggetti-a-2-ante-in-paglia-di-vienna-canopy-219730.htm",
    "larghezza_cm": 85,
    "profondita_cm": 37,
    "descrizione": "Mobiletto portaoggetti a 2 ante in paglia di Vienna"
  },
  {
    "nome": "Wayne - Madia a rotelle a 6 ante in ferro e abete 119 cm",
    "categoria": "Credenze",
    "prezzo": 259,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/166104_40/madia-a-rotelle-a-6-ante-in-ferro-e-abete-119-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/madia-a-rotelle-a-6-ante-in-ferro-e-abete-119-cm-wayne-166104.htm",
    "larghezza_cm": 119,
    "profondita_cm": 40,
    "descrizione": "Madia a rotelle a 6 ante in ferro e abete 119 cm"
  },
  {
    "nome": "Loreto - Mobile TV a 3 ante in paglia di Vienna lung. 140 cm",
    "categoria": "Mobili TV",
    "prezzo": 575.2,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/mobile-tv-a-3-ante-in-paglia-di-vienna-lung-140-cm-1000-13-34-199253_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/mobile-tv-a-3-ante-in-paglia-di-vienna-lung-140-cm-loreto-199253.htm",
    "larghezza_cm": 140,
    "profondita_cm": 42,
    "descrizione": "Mobile TV a 3 ante in paglia di Vienna lung. 140 cm"
  },
  {
    "nome": "Newport - Letti a castello bianco 90x190 cm",
    "categoria": "Letti",
    "prezzo": 549,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/letti-a-castello-bianco-90x190-cm-1000-11-27-136844_3.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/letti-a-castello-bianco-90x190-cm-newport-136844.htm",
    "larghezza_cm": 106,
    "profondita_cm": 206,
    "descrizione": "Letti a castello bianco 90x190 cm"
  },
  {
    "nome": "Nia - Divano clic clac a 2/3 posti in velluto arancione",
    "categoria": "Divani",
    "prezzo": 399,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/239604_0/divano-clic-clac-a-2-3-posti-in-velluto-arancione.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-clic-clac-a-2-3-posti-in-velluto-arancione-nia-239604.htm",
    "larghezza_cm": 156,
    "profondita_cm": 89,
    "descrizione": "Divano clic clac a 2/3 posti in velluto arancione"
  },
  {
    "nome": "Baryton - Credenza a 4 ante scorrevoli e 3 cassetti 130cm",
    "categoria": "Cassettiere",
    "prezzo": 1499,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/credenza-a-4-ante-scorrevoli-e-3-cassetti-130cm-1000-9-4-234524_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/credenza-a-4-ante-scorrevoli-e-3-cassetti-130cm-baryton-234524.htm",
    "larghezza_cm": 130,
    "profondita_cm": 45,
    "descrizione": "Credenza a 4 ante scorrevoli e 3 cassetti 130cm"
  },
  {
    "nome": "Zola - Poltrona imbottita in lino",
    "categoria": "Poltrone",
    "prezzo": 399,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/234543/poltrona-imbottita-in-lino.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-imbottita-in-lino-zola-234543.htm",
    "larghezza_cm": 69.5,
    "profondita_cm": 66,
    "descrizione": "Poltrona imbottita in lino"
  },
  {
    "nome": "Dolores - Tavolo da pranzo rotondo 4/6 persone in legno di mango e acciaio, 140 cm",
    "categoria": "Tavoli da pranzo",
    "prezzo": 789,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tavolo-da-pranzo-rotondo-4-6-persone-in-legno-di-mango-e-acciaio-140-cm-1000-8-7-187705_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tavolo-da-pranzo-rotondo-4-6-persone-in-legno-di-mango-e-acciaio-140-cm-dolores-187705.htm",
    "larghezza_cm": 140,
    "profondita_cm": 140,
    "descrizione": "Tavolo da pranzo rotondo 4/6 persone in legno di mango e acciaio, 140 cm"
  },
  {
    "nome": "Canopy - Mobile TV a 3 sportelli in paglia di Vienna lung. 160 cm",
    "categoria": "Mobili TV",
    "prezzo": 459,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/mobile-tv-a-3-sportelli-in-paglia-di-vienna-lung-160-cm-1000-13-19-219738_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/mobile-tv-a-3-sportelli-in-paglia-di-vienna-lung-160-cm-canopy-219738.htm",
    "larghezza_cm": 160,
    "profondita_cm": 37,
    "descrizione": "Mobile TV a 3 sportelli in paglia di Vienna lung. 160 cm"
  },
  {
    "nome": "Vienna - Credenza a 4 ante e 2 cassetti in legno di mango 120cm",
    "categoria": "Cassettiere",
    "prezzo": 1299,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/credenza-a-4-ante-e-2-cassetti-in-legno-di-mango-120cm-1000-13-29-219789_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/credenza-a-4-ante-e-2-cassetti-in-legno-di-mango-120cm-vienna-219789.htm",
    "larghezza_cm": 120,
    "profondita_cm": 45,
    "descrizione": "Credenza a 4 ante e 2 cassetti in legno di mango 120cm"
  },
  {
    "nome": "Mensola da parete bianca a forma di nuvola in rattan",
    "categoria": "Librerie",
    "prezzo": 34.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/mensola-da-parete-bianca-a-forma-di-nuvola-in-rattan-1000-5-16-243802_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/mensola-da-parete-bianca-a-forma-di-nuvola-in-rattan-243802.htm",
    "larghezza_cm": 50,
    "profondita_cm": 14.5,
    "descrizione": "Mensola da parete bianca a forma di nuvola in rattan"
  },
  {
    "nome": "Tanja - Comodino con 1 cassetto in rattan beige",
    "categoria": "Letti",
    "prezzo": 99.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/comodino-con-1-cassetto-in-rattan-beige-1000-16-40-219554_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/comodino-con-1-cassetto-in-rattan-beige-tanja-219554.htm",
    "larghezza_cm": 46.5,
    "profondita_cm": 33,
    "descrizione": "Comodino con 1 cassetto in rattan beige"
  },
  {
    "nome": "Candela profumata in ceramica blu",
    "categoria": "Decorazioni",
    "prezzo": 16.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/candela-profumata-in-ceramica-blu-1000-13-21-249301_2.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/candela-profumata-in-ceramica-blu-249301.htm",
    "larghezza_cm": 31,
    "profondita_cm": 7,
    "descrizione": "Candela profumata in ceramica blu"
  },
  {
    "nome": "Lotto di 6 - 6 piatti da dessert in ceramica verde",
    "categoria": "Cucina",
    "prezzo": 41.94,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/6-piatti-da-dessert-in-ceramica-verde-1000-3-27-216753_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/6-piatti-da-dessert-in-ceramica-verde-216753.htm",
    "larghezza_cm": 20.5,
    "profondita_cm": 20.5,
    "descrizione": "6 piatti da dessert in ceramica verde"
  },
  {
    "nome": "Chesterfield - Divano vintage 3 posti in pelle capitonné",
    "categoria": "Divani",
    "prezzo": 1799,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/241950_0/divano-vintage-3-posti-in-pelle-capitonne.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-vintage-3-posti-in-pelle-capitonne-chesterfield-241950.htm",
    "larghezza_cm": 202,
    "profondita_cm": 93,
    "descrizione": "Divano vintage 3 posti in pelle capitonné"
  },
  {
    "nome": "Noham - Poltrona in tessuto bouclé écru",
    "categoria": "Divani",
    "prezzo": 299,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltrona-in-tessuto-boucle-ecru-1000-13-19-234375_5.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-in-tessuto-boucle-ecru-noham-234375.htm",
    "larghezza_cm": 73.5,
    "profondita_cm": 81.5,
    "descrizione": "Poltrona in tessuto bouclé écru"
  },
  {
    "nome": "Pure - Tavolo da pranzo in legno massello di frassino beige per 6/8 persone larg. 200 cm",
    "categoria": "Tavoli da pranzo",
    "prezzo": 629.3,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tavolo-da-pranzo-in-legno-massello-di-frassino-beige-per-6-8-persone-larg-200-cm-1000-10-40-230870_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tavolo-da-pranzo-in-legno-massello-di-frassino-beige-per-6-8-persone-larg-200-cm-pure-230870.htm",
    "larghezza_cm": 200,
    "profondita_cm": 95,
    "descrizione": "Tavolo da pranzo in legno massello di frassino beige per 6/8 persone larg. 200 cm"
  },
  {
    "nome": "Portobello - Mobile porta TV vintage con scaffale, 3 cassetti e 1 anta in rovere lung. 180 cm",
    "categoria": "Mobili TV",
    "prezzo": 949,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/147145_1/mobile-porta-tv-vintage-con-scaffale-3-cassetti-e-1-anta-in-rovere-lung-180-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/mobile-porta-tv-vintage-con-scaffale-3-cassetti-e-1-anta-in-rovere-lung-180-cm-portobello-147145.htm",
    "larghezza_cm": 180,
    "profondita_cm": 45,
    "descrizione": "Mobile porta TV vintage con scaffale, 3 cassetti e 1 anta in rovere lung. 180 cm"
  },
  {
    "nome": "Canopy - Credenza a 3 ante in vetro in legno di rovere 180cm",
    "categoria": "Cassettiere",
    "prezzo": 1399,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/credenza-a-3-ante-in-vetro-in-legno-di-rovere-180cm-1000-12-6-247974_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/credenza-a-3-ante-in-vetro-in-legno-di-rovere-180cm-canopy-247974.htm",
    "larghezza_cm": 180,
    "profondita_cm": 45,
    "descrizione": "Credenza a 3 ante in vetro in legno di rovere 180cm"
  },
  {
    "nome": "Griffith - Comodino con 1 cassetto e 1 nicchia",
    "categoria": "Letti",
    "prezzo": 149,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/comodino-con-1-cassetto-e-1-nicchia-1000-14-12-248554_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/comodino-con-1-cassetto-e-1-nicchia-griffith-248554.htm",
    "larghezza_cm": 45.8,
    "profondita_cm": 35,
    "descrizione": "Comodino con 1 cassetto e 1 nicchia"
  },
  {
    "nome": "Tavola cartografica del mondo nera illuminata, 180x120 cm",
    "categoria": "Lampade",
    "prezzo": 249,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tavola-cartografica-del-mondo-nera-illuminata-180x120-cm-1000-16-39-236486_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tavola-cartografica-del-mondo-nera-illuminata-180x120-cm-236486.htm",
    "larghezza_cm": 180,
    "profondita_cm": 5.5,
    "descrizione": "Tavola cartografica del mondo nera illuminata, 180x120 cm"
  },
  {
    "nome": "Candela LED bianca 7x10 cm",
    "categoria": "Decorazioni",
    "prezzo": 6.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/candela-led-bianca-7x10-cm-1000-16-38-247145_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/candela-led-bianca-7x10-cm-247145.htm",
    "larghezza_cm": 7,
    "profondita_cm": 7,
    "descrizione": "Candela LED bianca 7x10 cm"
  },
  {
    "nome": "Loreto - Mobiletto portaoggetti a 2 ante nero in paglia di Vienna",
    "categoria": "Altri mobili",
    "prezzo": 499,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/mobiletto-portaoggetti-a-2-ante-nero-in-paglia-di-vienna-1000-3-33-230863_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/mobiletto-portaoggetti-a-2-ante-nero-in-paglia-di-vienna-loreto-230863.htm",
    "larghezza_cm": 90,
    "profondita_cm": 40,
    "descrizione": "Mobiletto portaoggetti a 2 ante nero in paglia di Vienna"
  },
  {
    "nome": "Milie - Guardaroba a 2 ante e 2 cassetti rosa cipria",
    "categoria": "Armadi",
    "prezzo": 599,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/guardaroba-a-2-ante-e-2-cassetti-rosa-cipria-1000-6-11-233875_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/guardaroba-a-2-ante-e-2-cassetti-rosa-cipria-milie-233875.htm",
    "larghezza_cm": 104,
    "profondita_cm": 50,
    "descrizione": "Guardaroba a 2 ante e 2 cassetti rosa cipria"
  },
  {
    "nome": "Millford - Mobile bagno con doppio lavabo 2 ante e 3 cassetti",
    "categoria": "Bagno",
    "prezzo": 1299,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/mobile-bagno-con-doppio-lavabo-2-ante-e-3-cassetti-1000-16-32-242793_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/mobile-bagno-con-doppio-lavabo-2-ante-e-3-cassetti-millford-242793.htm",
    "larghezza_cm": 150,
    "profondita_cm": 63.6,
    "descrizione": "Mobile bagno con doppio lavabo 2 ante e 3 cassetti"
  },
  {
    "nome": "Barattolo bianco in ceramica con motivi verdi",
    "categoria": "Cucina",
    "prezzo": 14.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/barattolo-bianco-in-ceramica-con-motivi-verdi-1000-7-21-172098_6.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/barattolo-bianco-in-ceramica-con-motivi-verdi-172098.htm",
    "larghezza_cm": 11,
    "profondita_cm": 11,
    "descrizione": "Barattolo bianco in ceramica con motivi verdi"
  },
  {
    "nome": "Philadelphie - Divano angolare con penisola a destra marrone in similpelle 3/4 posti",
    "categoria": "Divani",
    "prezzo": 399,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-angolare-con-penisola-a-destra-marrone-in-similpelle-3-4-posti-1000-5-2-122592_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-angolare-con-penisola-a-destra-marrone-in-similpelle-3-4-posti-philadelphie-122592.htm",
    "larghezza_cm": 210,
    "profondita_cm": 145,
    "descrizione": "Divano angolare con penisola a destra marrone in similpelle 3/4 posti"
  },
  {
    "nome": "Julian - Divano letto 2/3 posti in tessuto tramato beige, materasso 18 cm",
    "categoria": "Divani",
    "prezzo": 1699,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-letto-2-3-posti-in-tessuto-tramato-beige-materasso-18-cm-1000-13-15-247040_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-letto-2-3-posti-in-tessuto-tramato-beige-materasso-18-cm-julian-247040.htm",
    "larghezza_cm": 182,
    "profondita_cm": 99,
    "descrizione": "Divano letto 2/3 posti in tessuto tramato beige, materasso 18 cm"
  },
  {
    "nome": "Chesterfield - Poltrona imbottita marrone in cuoio",
    "categoria": "Divani",
    "prezzo": 899,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/241941/poltrona-imbottita-marrone-in-cuoio.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-imbottita-marrone-in-cuoio-chesterfield-241941.htm",
    "larghezza_cm": 116,
    "profondita_cm": 91,
    "descrizione": "Poltrona imbottita marrone in cuoio"
  },
  {
    "nome": "Arnold - Poltrona vintage grigio antracite",
    "categoria": "Poltrone",
    "prezzo": 139,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltrona-vintage-grigio-antracite-1000-14-25-165747_5.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-vintage-grigio-antracite-arnold-165747.htm",
    "larghezza_cm": 58,
    "profondita_cm": 62,
    "descrizione": "Poltrona vintage grigio antracite"
  },
  {
    "nome": "Parischic - Tavolo da pranzo estensibile in legno massello di acacia e ottone finitura anticata per 6/8 persone larg. 141/176 cm",
    "categoria": "Tavoli da pranzo",
    "prezzo": 839,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tavolo-da-pranzo-estensibile-in-legno-massello-di-acacia-e-ottone-finitura-anticata-per-6-8-persone-larg-141-176-cm-1000-12-35-219754_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tavolo-da-pranzo-estensibile-in-legno-massello-di-acacia-e-ottone-finitura-anticata-per-6-8-persone-larg-141-176-cm-parischic-219754.htm",
    "larghezza_cm": 176,
    "profondita_cm": 90,
    "descrizione": "Tavolo da pranzo estensibile in legno massello di acacia e ottone finitura anticata per 6/8 persone larg. 141/176 cm"
  },
  {
    "nome": "Canopy - Libreria porta TV con 2 ante in paglia di Vienna e 2 nicchie lung. 150 cm",
    "categoria": "Librerie",
    "prezzo": 594.3,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/libreria-porta-tv-con-2-ante-in-paglia-di-vienna-e-2-nicchie-lung-150-cm-1000-14-36-245749_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/libreria-porta-tv-con-2-ante-in-paglia-di-vienna-e-2-nicchie-lung-150-cm-canopy-245749.htm",
    "larghezza_cm": 150,
    "profondita_cm": 45,
    "descrizione": "Libreria porta TV con 2 ante in paglia di Vienna e 2 nicchie lung. 150 cm"
  },
  {
    "nome": "Henrik - Credenza a 4 ante nera in mango e acacia",
    "categoria": "Cassettiere",
    "prezzo": 999,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/credenza-a-4-ante-nera-in-mango-e-acacia-1000-7-27-165995_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/credenza-a-4-ante-nera-in-mango-e-acacia-henrik-165995.htm",
    "larghezza_cm": 115,
    "profondita_cm": 40,
    "descrizione": "Credenza a 4 ante nera in mango e acacia"
  },
  {
    "nome": "Barsana - Scaffale in rattan beige",
    "categoria": "Librerie",
    "prezzo": 269,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/scaffale-in-rattan-beige-1000-6-17-225681_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/scaffale-in-rattan-beige-barsana-225681.htm",
    "larghezza_cm": 75,
    "profondita_cm": 28,
    "descrizione": "Scaffale in rattan beige"
  },
  {
    "nome": "Sixties - Letto allungabile, 90x200/180x200 cm",
    "categoria": "Letti",
    "prezzo": 299,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/letto-allungabile-90x200-180x200-cm-1000-15-23-248606_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/letto-allungabile-90x200-180x200-cm-sixties-248606.htm",
    "larghezza_cm": 200,
    "profondita_cm": 180,
    "descrizione": "Letto allungabile, 90x200/180x200 cm"
  },
  {
    "nome": "Lampada in ceramica grigio chiné con paralume in poliestere riciclato bianco",
    "categoria": "Lampade",
    "prezzo": 12.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/lampada-in-ceramica-grigio-chine-con-paralume-in-poliestere-riciclato-bianco-1000-3-8-217144_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/lampada-in-ceramica-grigio-chine-con-paralume-in-poliestere-riciclato-bianco-217144.htm",
    "larghezza_cm": 15,
    "profondita_cm": 15,
    "descrizione": "Lampada in ceramica grigio chiné con paralume in poliestere riciclato bianco"
  },
  {
    "nome": "Vaso in vetro azzurro alt. 25 cm",
    "categoria": "Decorazioni",
    "prezzo": 24.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/vaso-in-vetro-azzurro-alt-25-cm-1000-4-38-248867_2.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/vaso-in-vetro-azzurro-alt-25-cm-248867.htm",
    "larghezza_cm": 17.5,
    "profondita_cm": 17.5,
    "descrizione": "Vaso in vetro azzurro alt. 25 cm"
  },
  {
    "nome": "Lotto di 6 - Candela profumata rosa alt. 6 cm, 75g",
    "categoria": "Decorazioni",
    "prezzo": 6.6,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/candela-profumata-rosa-alt-6-cm-75g-1000-1-22-246637_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/candela-profumata-rosa-alt-6-cm-75g-246637.htm",
    "larghezza_cm": 4.5,
    "profondita_cm": 4.5,
    "descrizione": "Candela profumata rosa alt. 6 cm, 75g"
  },
  {
    "nome": "Olympea - Mobiletto portaoggetti a 2 ante effetto resina e madreperla 80cm",
    "categoria": "Altri mobili",
    "prezzo": 899,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/mobiletto-portaoggetti-a-2-ante-effetto-resina-e-madreperla-80cm-1000-15-22-209081_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/mobiletto-portaoggetti-a-2-ante-effetto-resina-e-madreperla-80cm-olympea-209081.htm",
    "larghezza_cm": 80,
    "profondita_cm": 40,
    "descrizione": "Mobiletto portaoggetti a 2 ante effetto resina e madreperla 80cm"
  },
  {
    "nome": "Elisa - Armadio bonnetière bianca a un'anta e 1 cassetto 75 cm",
    "categoria": "Armadi",
    "prezzo": 399,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/armadio-bonnetiere-bianca-a-un-anta-e-1-cassetto-75-cm-1000-9-2-165929_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/armadio-bonnetiere-bianca-a-un-anta-e-1-cassetto-75-cm-elisa-165929.htm",
    "larghezza_cm": 75,
    "profondita_cm": 50,
    "descrizione": "Armadio bonnetière bianca a un'anta e 1 cassetto 75 cm"
  },
  {
    "nome": "Play - Pouf in tessuto a rete 3D blu",
    "categoria": "Pouf",
    "prezzo": 279.3,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/pouf-in-tessuto-a-rete-3d-blu-1000-5-12-246709_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/pouf-in-tessuto-a-rete-3d-blu-play-246709.htm",
    "larghezza_cm": 77,
    "profondita_cm": 77,
    "descrizione": "Pouf in tessuto a rete 3D blu"
  },
  {
    "nome": "Elnath - Mobile bagno verde-blu con 1 anta e top in graniglia",
    "categoria": "Bagno",
    "prezzo": 279.3,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/mobile-bagno-verde-blu-con-1-anta-e-top-in-graniglia-1000-11-34-242754_3.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/mobile-bagno-verde-blu-con-1-anta-e-top-in-graniglia-elnath-242754.htm",
    "larghezza_cm": 70,
    "profondita_cm": 50,
    "descrizione": "Mobile bagno verde-blu con 1 anta e top in graniglia"
  },
  {
    "nome": "Chesterfield - Divano trasformabile capitonné 3 posti in suede marrone",
    "categoria": "Divani",
    "prezzo": 999,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-trasformabile-capitonne-3-posti-in-suede-marrone-1000-15-10-187831_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-trasformabile-capitonne-3-posti-in-suede-marrone-chesterfield-187831.htm",
    "larghezza_cm": 232.5,
    "profondita_cm": 91,
    "descrizione": "Divano trasformabile capitonné 3 posti in suede marrone"
  },
  {
    "nome": "Livia - Divano trasformabile 2/3 posti in velluto a coste beige",
    "categoria": "Divani",
    "prezzo": 459,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-trasformabile-2-3-posti-in-velluto-a-coste-beige-1000-9-16-243228_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-trasformabile-2-3-posti-in-velluto-a-coste-beige-livia-243228.htm",
    "larghezza_cm": 210,
    "profondita_cm": 88,
    "descrizione": "Divano trasformabile 2/3 posti in velluto a coste beige"
  },
  {
    "nome": "Nino - Poltrona sfoderabile in tessuto effetto lino écru",
    "categoria": "Divani",
    "prezzo": 199.2,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltrona-sfoderabile-in-tessuto-effetto-lino-ecru-1000-16-18-249831_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-sfoderabile-in-tessuto-effetto-lino-ecru-nino-249831.htm",
    "larghezza_cm": 79.5,
    "profondita_cm": 79,
    "descrizione": "Poltrona sfoderabile in tessuto effetto lino écru"
  },
  {
    "nome": "Mira - Sedia in velluto a coste riciclato verde kaki",
    "categoria": "Sedie",
    "prezzo": 55.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-in-velluto-a-coste-riciclato-verde-kaki-1000-11-7-234322_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-in-velluto-a-coste-riciclato-verde-kaki-mira-234322.htm",
    "larghezza_cm": 47,
    "profondita_cm": 53,
    "descrizione": "Sedia in velluto a coste riciclato verde kaki"
  },
  {
    "nome": "Ionesco - Credenza a 8 ante grigio antracite 180cm",
    "categoria": "Cassettiere",
    "prezzo": 1799,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/credenza-a-8-ante-grigio-antracite-180cm-1000-9-18-219819_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/credenza-a-8-ante-grigio-antracite-180cm-ionesco-219819.htm",
    "larghezza_cm": 180,
    "profondita_cm": 45,
    "descrizione": "Credenza a 8 ante grigio antracite 180cm"
  },
  {
    "nome": "Berlin - Porta-libri bianco e canna di rattan",
    "categoria": "Librerie",
    "prezzo": 99.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/porta-libri-bianco-e-canna-di-rattan-1000-10-34-225821_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/porta-libri-bianco-e-canna-di-rattan-berlin-225821.htm",
    "larghezza_cm": 60,
    "profondita_cm": 32,
    "descrizione": "Porta-libri bianco e canna di rattan"
  },
  {
    "nome": "Oliver - Comodino con vano a giorno e 1 cassetto color crema",
    "categoria": "Letti",
    "prezzo": 89.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/comodino-con-vano-a-giorno-e-1-cassetto-color-crema-1000-2-29-241929_2.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/comodino-con-vano-a-giorno-e-1-cassetto-color-crema-oliver-241929.htm",
    "larghezza_cm": 40,
    "profondita_cm": 30,
    "descrizione": "Comodino con vano a giorno e 1 cassetto color crema"
  },
  {
    "nome": "Tela astratta dipinta in bianco e nero, 100x141 cm",
    "categoria": "Decorazioni",
    "prezzo": 139,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tela-astratta-dipinta-in-bianco-e-nero-100x141-cm-1000-15-38-246940_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tela-astratta-dipinta-in-bianco-e-nero-100x141-cm-246940.htm",
    "larghezza_cm": 100,
    "profondita_cm": 3.5,
    "descrizione": "Tela astratta dipinta in bianco e nero, 100x141 cm"
  },
  {
    "nome": "Orologio quadrato nero e dorato 30x30 cm",
    "categoria": "Decorazioni",
    "prezzo": 19.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/orologio-quadrato-nero-e-dorato-30x30-cm-1000-0-13-241298_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/orologio-quadrato-nero-e-dorato-30x30-cm-241298.htm",
    "larghezza_cm": 30,
    "profondita_cm": 4.5,
    "descrizione": "Orologio quadrato nero e dorato 30x30 cm"
  },
  {
    "nome": "Lampada da terra a fungo in metallo laccato bianco alt. 145 cm",
    "categoria": "Lampade",
    "prezzo": 34.95,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/lampada-da-terra-a-fungo-in-metallo-laccato-bianco-alt-145-cm-1000-8-22-246678_2.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/lampada-da-terra-a-fungo-in-metallo-laccato-bianco-alt-145-cm-246678.htm",
    "larghezza_cm": 32,
    "profondita_cm": 32,
    "descrizione": "Lampada da terra a fungo in metallo laccato bianco alt. 145 cm"
  },
  {
    "nome": "Solstice - Armadio a 1 anta in rattan lung. 70 cm",
    "categoria": "Armadi",
    "prezzo": 499,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/armadio-a-1-anta-in-rattan-lung-70-cm-1000-0-19-196163_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/armadio-a-1-anta-in-rattan-lung-70-cm-solstice-196163.htm",
    "larghezza_cm": 70,
    "profondita_cm": 50,
    "descrizione": "Armadio a 1 anta in rattan lung. 70 cm"
  },
  {
    "nome": "Play - Pouf in tessuto a rete 3D color ruggine",
    "categoria": "Pouf",
    "prezzo": 399,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/pouf-in-tessuto-a-rete-3d-color-ruggine-1000-6-13-246710_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/pouf-in-tessuto-a-rete-3d-color-ruggine-play-246710.htm",
    "larghezza_cm": 77,
    "profondita_cm": 77,
    "descrizione": "Pouf in tessuto a rete 3D color ruggine"
  },
  {
    "nome": "Elvis - Divano clic clac a 3 posti in velluto blu scuro",
    "categoria": "Divani",
    "prezzo": 399,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-clic-clac-a-3-posti-in-velluto-blu-scuro-1000-0-16-198169_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-clic-clac-a-3-posti-in-velluto-blu-scuro-elvis-198169.htm",
    "larghezza_cm": 214,
    "profondita_cm": 87,
    "descrizione": "Divano clic clac a 3 posti in velluto blu scuro"
  },
  {
    "nome": "Lilo - Divano a 2 posti in velluto riciclato color écru",
    "categoria": "Divani",
    "prezzo": 999,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-a-2-posti-in-velluto-riciclato-color-ecru-1000-12-37-243044_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-a-2-posti-in-velluto-riciclato-color-ecru-lilo-243044.htm",
    "larghezza_cm": 206,
    "profondita_cm": 102,
    "descrizione": "Divano a 2 posti in velluto riciclato color écru"
  },
  {
    "nome": "Palm - Poltrona vintage in velluto riciclato verde",
    "categoria": "Divani",
    "prezzo": 169,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltrona-vintage-in-velluto-riciclato-verde-1000-6-38-247883_2.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-vintage-in-velluto-riciclato-verde-palm-247883.htm",
    "larghezza_cm": 62.5,
    "profondita_cm": 72,
    "descrizione": "Poltrona vintage in velluto riciclato verde"
  },
  {
    "nome": "Ice - Sedia in stile scandinavo color terracotta e legno di hevea",
    "categoria": "Sedie",
    "prezzo": 69.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-in-stile-scandinavo-color-terracotta-e-legno-di-hevea-1000-14-4-210457_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-in-stile-scandinavo-color-terracotta-e-legno-di-hevea-ice-210457.htm",
    "larghezza_cm": 48,
    "profondita_cm": 54.5,
    "descrizione": "Sedia in stile scandinavo color terracotta e legno di hevea"
  },
  {
    "nome": "Malmo - Tavolo da pranzo vintage 6/8 persone in acacia, 180 cm",
    "categoria": "Tavoli da pranzo",
    "prezzo": 589,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tavolo-da-pranzo-vintage-6-8-persone-in-acacia-180-cm-1000-14-29-175386_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tavolo-da-pranzo-vintage-6-8-persone-in-acacia-180-cm-malmo-175386.htm",
    "larghezza_cm": 178,
    "profondita_cm": 91,
    "descrizione": "Tavolo da pranzo vintage 6/8 persone in acacia, 180 cm"
  },
  {
    "nome": "Provence - Mobile TV bicolore a 4 ante lung. 180 cm",
    "categoria": "Mobili TV",
    "prezzo": 789,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/mobile-tv-bicolore-a-4-ante-lung-180-cm-1000-11-4-216115_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/mobile-tv-bicolore-a-4-ante-lung-180-cm-provence-216115.htm",
    "larghezza_cm": 180,
    "profondita_cm": 50,
    "descrizione": "Mobile TV bicolore a 4 ante lung. 180 cm"
  },
  {
    "nome": "Tarifa - Credenza a 4 ante in vetro temperato e rattan intrecciato 110cm",
    "categoria": "Cassettiere",
    "prezzo": 799,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/credenza-a-4-ante-in-vetro-temperato-e-rattan-intrecciato-110cm-1000-4-30-234468_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/credenza-a-4-ante-in-vetro-temperato-e-rattan-intrecciato-110cm-tarifa-234468.htm",
    "larghezza_cm": 110,
    "profondita_cm": 45,
    "descrizione": "Credenza a 4 ante in vetro temperato e rattan intrecciato 110cm"
  },
  {
    "nome": "Comodino 1 anta 1 cassetto écru",
    "categoria": "Letti",
    "prezzo": 149,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/comodino-1-anta-1-cassetto-ecru-1000-6-17-249379_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/comodino-1-anta-1-cassetto-ecru-249379.htm",
    "larghezza_cm": 40,
    "profondita_cm": 37,
    "descrizione": "Comodino 1 anta 1 cassetto écru"
  },
  {
    "nome": "Suzelle - Armadio a 2 ante e 2 cassetti in paglia di Vienna 105 cm",
    "categoria": "Armadi",
    "prezzo": 599,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/234465/armadio-a-2-ante-e-2-cassetti-in-paglia-di-vienna-105-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/armadio-a-2-ante-e-2-cassetti-in-paglia-di-vienna-105-cm-suzelle-234465.htm",
    "larghezza_cm": 105,
    "profondita_cm": 55,
    "descrizione": "Armadio a 2 ante e 2 cassetti in paglia di Vienna 105 cm"
  },
  {
    "nome": "Modjo - Divano angolare con penisola a destra 3/4 posti beige sabbia",
    "categoria": "Divani",
    "prezzo": 1399,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/245243_0/divano-angolare-con-penisola-a-destra-3-4-posti-beige-sabbia.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-angolare-con-penisola-a-destra-3-4-posti-beige-sabbia-modjo-245243.htm",
    "larghezza_cm": 260,
    "profondita_cm": 145,
    "descrizione": "Divano angolare con penisola a destra 3/4 posti beige sabbia"
  },
  {
    "nome": "Hallen - Divano letto pieghevole 2 posti in velluto a coste grigio",
    "categoria": "Divani",
    "prezzo": 399,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-letto-pieghevole-2-posti-in-velluto-a-coste-grigio-1000-9-3-230546_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-letto-pieghevole-2-posti-in-velluto-a-coste-grigio-hallen-230546.htm",
    "larghezza_cm": 150,
    "profondita_cm": 85,
    "descrizione": "Divano letto pieghevole 2 posti in velluto a coste grigio"
  },
  {
    "nome": "Wembley - Sedia nera con gambe in acciaio nero",
    "categoria": "Sedie",
    "prezzo": 69.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-nera-con-gambe-in-acciaio-nero-1000-12-22-198011_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-nera-con-gambe-in-acciaio-nero-wembley-198011.htm",
    "larghezza_cm": 48,
    "profondita_cm": 52.5,
    "descrizione": "Sedia nera con gambe in acciaio nero"
  },
  {
    "nome": "Bronx - Tavolo da pranzo estensibile per 8/12 persone lung. 180/270cm",
    "categoria": "Tavoli da pranzo",
    "prezzo": 599,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/230222/tavolo-da-pranzo-estensibile-per-8-12-persone-lung-180-270cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tavolo-da-pranzo-estensibile-per-8-12-persone-lung-180-270cm-bronx-230222.htm",
    "larghezza_cm": 180,
    "profondita_cm": 90,
    "descrizione": "Tavolo da pranzo estensibile per 8/12 persone lung. 180/270cm"
  },
  {
    "nome": "Solstice - Credenza a 4 con impiallacciatura di betulla 110cm",
    "categoria": "Cassettiere",
    "prezzo": 599,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/credenza-a-4-con-impiallacciatura-di-betulla-110cm-1000-16-8-230264_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/credenza-a-4-con-impiallacciatura-di-betulla-110cm-solstice-230264.htm",
    "larghezza_cm": 110,
    "profondita_cm": 40,
    "descrizione": "Credenza a 4 con impiallacciatura di betulla 110cm"
  },
  {
    "nome": "Naturaliste - Libreria a 3 cassetti con scala in mango",
    "categoria": "Librerie",
    "prezzo": 1799,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/libreria-a-3-cassetti-con-scala-in-mango-1000-0-21-146965_0.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/libreria-a-3-cassetti-con-scala-in-mango-naturaliste-146965.htm",
    "larghezza_cm": 190,
    "profondita_cm": 40,
    "descrizione": "Libreria a 3 cassetti con scala in mango"
  },
  {
    "nome": "Milie - Comodino con 1 cassetto rosa cipria",
    "categoria": "Comodini",
    "prezzo": 89.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/comodino-con-1-cassetto-rosa-cipria-1000-15-20-233884_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/comodino-con-1-cassetto-rosa-cipria-milie-233884.htm",
    "larghezza_cm": 43,
    "profondita_cm": 36,
    "descrizione": "Comodino con 1 cassetto rosa cipria"
  },
  {
    "nome": "Clio - Pouf contenitore in tessuto riciclato beige",
    "categoria": "Divani",
    "prezzo": 299,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/250337/pouf-contenitore-in-tessuto-riciclato-beige.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/pouf-contenitore-in-tessuto-riciclato-beige-clio-250337.htm",
    "larghezza_cm": 80,
    "profondita_cm": 70,
    "descrizione": "Pouf contenitore in tessuto riciclato beige"
  },
  {
    "nome": "Lampada a sospensione in alluminio nero e dorato",
    "categoria": "Lampade",
    "prezzo": 169,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/lampada-a-sospensione-in-alluminio-nero-e-dorato-1000-7-2-235219_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/lampada-a-sospensione-in-alluminio-nero-e-dorato-235219.htm",
    "larghezza_cm": 89,
    "profondita_cm": 89,
    "descrizione": "Lampada a sospensione in alluminio nero e dorato"
  },
  {
    "nome": "Vaso in vetro nero e trasparente",
    "categoria": "Decorazioni",
    "prezzo": 79.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/vaso-in-vetro-nero-e-trasparente-1000-12-26-220196_10.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/vaso-in-vetro-nero-e-trasparente-220196.htm",
    "larghezza_cm": 23,
    "profondita_cm": 9,
    "descrizione": "Vaso in vetro nero e trasparente"
  },
  {
    "nome": "Suzelle - Armadio a 2 ante in paglia di Vienna e 2 cassetti grigio-blu lung. 105 cm",
    "categoria": "Armadi",
    "prezzo": 599,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/armadio-a-2-ante-in-paglia-di-vienna-e-2-cassetti-grigio-blu-lung-105-cm-1000-4-14-209155_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/armadio-a-2-ante-in-paglia-di-vienna-e-2-cassetti-grigio-blu-lung-105-cm-suzelle-209155.htm",
    "larghezza_cm": 105,
    "profondita_cm": 55,
    "descrizione": "Armadio a 2 ante in paglia di Vienna e 2 cassetti grigio-blu lung. 105 cm"
  },
  {
    "nome": "Vegas - Poltrona in tessuto tramato beige",
    "categoria": "Divani",
    "prezzo": 263.2,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltrona-in-tessuto-tramato-beige-1000-4-35-246691_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-in-tessuto-tramato-beige-vegas-246691.htm",
    "larghezza_cm": 82,
    "profondita_cm": 75,
    "descrizione": "Poltrona in tessuto tramato beige"
  },
  {
    "nome": "Bronx - Tavolo da pranzo per 6 persone lung. 120 cm",
    "categoria": "Tavoli da pranzo",
    "prezzo": 259,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/240718/tavolo-da-pranzo-per-6-persone-lung-120-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tavolo-da-pranzo-per-6-persone-lung-120-cm-bronx-240718.htm",
    "larghezza_cm": 120,
    "profondita_cm": 80,
    "descrizione": "Tavolo da pranzo per 6 persone lung. 120 cm"
  },
  {
    "nome": "Wayne - Mobile TV a rotelle con 3 ante in acciaio e abete massello lung. 150 cm",
    "categoria": "Mobili TV",
    "prezzo": 199,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/mobile-tv-a-rotelle-con-3-ante-in-acciaio-e-abete-massello-lung-150-cm-1000-15-27-209455_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/mobile-tv-a-rotelle-con-3-ante-in-acciaio-e-abete-massello-lung-150-cm-wayne-209455.htm",
    "larghezza_cm": 150.2,
    "profondita_cm": 42,
    "descrizione": "Mobile TV a rotelle con 3 ante in acciaio e abete massello lung. 150 cm"
  },
  {
    "nome": "Caldera - Libreria 2 porte bianche in tronchi",
    "categoria": "Librerie",
    "prezzo": 999,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/libreria-2-porte-bianche-in-tronchi-1000-7-10-246830_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/libreria-2-porte-bianche-in-tronchi-caldera-246830.htm",
    "larghezza_cm": 146,
    "profondita_cm": 50,
    "descrizione": "Libreria 2 porte bianche in tronchi"
  },
  {
    "nome": "Griffith - Madia vintage a 3 ante marrone 165 cm",
    "categoria": "Credenze",
    "prezzo": 499,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/248557_0/madia-vintage-a-3-ante-marrone-165-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/madia-vintage-a-3-ante-marrone-165-cm-griffith-248557.htm",
    "larghezza_cm": 165,
    "profondita_cm": 45,
    "descrizione": "Madia vintage a 3 ante marrone 165 cm"
  },
  {
    "nome": "Sweet - Comodino vintage a 1 cassetto bianco",
    "categoria": "Comodini",
    "prezzo": 79.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/comodino-vintage-a-1-cassetto-bianco-1000-14-17-243352_2.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/comodino-vintage-a-1-cassetto-bianco-sweet-243352.htm",
    "larghezza_cm": 40,
    "profondita_cm": 30,
    "descrizione": "Comodino vintage a 1 cassetto bianco"
  },
  {
    "nome": "Quadro bicolore 53x70 cm",
    "categoria": "Decorazioni",
    "prezzo": 19.95,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/quadro-bicolore-53x70-cm-1000-9-20-240321_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/quadro-bicolore-53x70-cm-240321.htm",
    "larghezza_cm": 52.5,
    "profondita_cm": 2.5,
    "descrizione": "Quadro bicolore 53x70 cm"
  },
  {
    "nome": "Vaso in gres beige alt. 22 cm",
    "categoria": "Decorazioni",
    "prezzo": 19.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/vaso-in-gres-beige-alt-22-cm-1000-0-12-220592_3.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/vaso-in-gres-beige-alt-22-cm-220592.htm",
    "larghezza_cm": 14.4,
    "profondita_cm": 15.8,
    "descrizione": "Vaso in gres beige alt. 22 cm"
  },
  {
    "nome": "Tanzania - Mobiletto portaoggetti a 2 ante in mango scolpito 90cm",
    "categoria": "Altri mobili",
    "prezzo": 829,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/mobiletto-portaoggetti-a-2-ante-in-mango-scolpito-90cm-1000-7-14-198618_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/mobiletto-portaoggetti-a-2-ante-in-mango-scolpito-90cm-tanzania-198618.htm",
    "larghezza_cm": 90,
    "profondita_cm": 45,
    "descrizione": "Mobiletto portaoggetti a 2 ante in mango scolpito 90cm"
  },
  {
    "nome": "Valdi - Credenza a 6 ante bianca 175cm",
    "categoria": "Cassettiere",
    "prezzo": 1799,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/credenza-a-6-ante-bianca-175cm-1000-15-39-230008_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/credenza-a-6-ante-bianca-175cm-valdi-230008.htm",
    "larghezza_cm": 175,
    "profondita_cm": 50,
    "descrizione": "Credenza a 6 ante bianca 175cm"
  },
  {
    "nome": "Danube - Biblioteca a 2 cassetti e 2 ante",
    "categoria": "Librerie",
    "prezzo": 1699,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/biblioteca-a-2-cassetti-e-2-ante-1000-2-37-228448_3.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/biblioteca-a-2-cassetti-e-2-ante-danube-228448.htm",
    "larghezza_cm": 195,
    "profondita_cm": 45,
    "descrizione": "Biblioteca a 2 cassetti e 2 ante"
  },
  {
    "nome": "Cassettiera doppia con 6 cassetti beige e dettagli in acciaio color ottone lung. 160 cm",
    "categoria": "Cassettiere",
    "prezzo": 899,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/252090/cassettiera-doppia-con-6-cassetti-beige-e-dettagli-in-acciaio-color-ottone-lung-160-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/cassettiera-doppia-con-6-cassetti-beige-e-dettagli-in-acciaio-color-ottone-lung-160-cm-252090.htm",
    "larghezza_cm": 160,
    "profondita_cm": 45.5,
    "descrizione": "Cassettiera doppia con 6 cassetti beige e dettagli in acciaio color ottone lung. 160 cm"
  },
  {
    "nome": "Vaso in dolomite nera alt. 12 cm",
    "categoria": "Decorazioni",
    "prezzo": 5.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/vaso-in-dolomite-nera-alt-12-cm-1000-2-20-222158_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/vaso-in-dolomite-nera-alt-12-cm-222158.htm",
    "larghezza_cm": 6.7,
    "profondita_cm": 6.7,
    "descrizione": "Vaso in dolomite nera alt. 12 cm"
  },
  {
    "nome": "Neo - Mobiletto portaoggetti a 2 ante intarsiato in osso nero ed écru 79cm",
    "categoria": "Altri mobili",
    "prezzo": 859,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/mobiletto-portaoggetti-a-2-ante-intarsiato-in-osso-nero-ed-ecru-79cm-1000-6-31-209582_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/mobiletto-portaoggetti-a-2-ante-intarsiato-in-osso-nero-ed-ecru-79cm-neo-209582.htm",
    "larghezza_cm": 79,
    "profondita_cm": 38.5,
    "descrizione": "Mobiletto portaoggetti a 2 ante intarsiato in osso nero ed écru 79cm"
  },
  {
    "nome": "Loft - Armadio a 3 ante in acciaio grigio",
    "categoria": "Armadi",
    "prezzo": 399,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/armadio-a-3-ante-in-acciaio-grigio-1000-3-9-249699_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/armadio-a-3-ante-in-acciaio-grigio-loft-249699.htm",
    "larghezza_cm": 115,
    "profondita_cm": 52,
    "descrizione": "Armadio a 3 ante in acciaio grigio"
  },
  {
    "nome": "Set di 2 oliere in vetro con supporto in legno d'acacia",
    "categoria": "Cucina",
    "prezzo": 12.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/set-di-2-oliere-in-vetro-con-supporto-in-legno-d-acacia-1000-16-3-247315_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/set-di-2-oliere-in-vetro-con-supporto-in-legno-d-acacia-247315.htm",
    "larghezza_cm": 21.3,
    "profondita_cm": 11,
    "descrizione": "Set di 2 oliere in vetro con supporto in legno d'acacia"
  },
  {
    "nome": "Montréal - Divano trasformabile 3/4 posti grigio antracite",
    "categoria": "Divani",
    "prezzo": 529,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-trasformabile-3-4-posti-grigio-antracite-1000-10-38-243127_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-trasformabile-3-4-posti-grigio-antracite-montreal-243127.htm",
    "larghezza_cm": 230,
    "profondita_cm": 91,
    "descrizione": "Divano trasformabile 3/4 posti grigio antracite"
  },
  {
    "nome": "Versailles - Tavolo da pranzo allungabile 8 a 10 persone in mango L 180/220 cm",
    "categoria": "Tavoli da pranzo",
    "prezzo": 799,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tavolo-da-pranzo-allungabile-8-a-10-persone-in-mango-l-180-220-cm-1000-1-37-156452_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tavolo-da-pranzo-allungabile-8-a-10-persone-in-mango-l-180-220-cm-versailles-156452.htm",
    "larghezza_cm": 180,
    "profondita_cm": 90,
    "descrizione": "Tavolo da pranzo allungabile 8 a 10 persone in mango L 180/220 cm"
  },
  {
    "nome": "Spring - Settimanile scandinavo a 6 cassetti bianco in paulonia",
    "categoria": "Cassettiere",
    "prezzo": 79.95,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/settimanile-scandinavo-a-6-cassetti-bianco-in-paulonia-1000-7-31-147057_0.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/settimanile-scandinavo-a-6-cassetti-bianco-in-paulonia-spring-147057.htm",
    "larghezza_cm": 65,
    "profondita_cm": 25,
    "descrizione": "Settimanile scandinavo a 6 cassetti bianco in paulonia"
  },
  {
    "nome": "Cassettiera alta con 3 cassetti lung. 102 cm",
    "categoria": "Cassettiere",
    "prezzo": 699,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/252088/cassettiera-alta-con-3-cassetti-lung-102-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/cassettiera-alta-con-3-cassetti-lung-102-cm-252088.htm",
    "larghezza_cm": 101.5,
    "profondita_cm": 55.3,
    "descrizione": "Cassettiera alta con 3 cassetti lung. 102 cm"
  },
  {
    "nome": "Comodino 2 cassetti color oro opaco",
    "categoria": "Letti",
    "prezzo": 49.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/comodino-2-cassetti-color-oro-opaco-1000-7-25-183828_2.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/comodino-2-cassetti-color-oro-opaco-183828.htm",
    "larghezza_cm": 35,
    "profondita_cm": 30,
    "descrizione": "Comodino 2 cassetti color oro opaco"
  },
  {
    "nome": "Vaso in gres blu alt. 25 cm",
    "categoria": "Decorazioni",
    "prezzo": 26.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/vaso-in-gres-blu-alt-25-cm-1000-7-24-248853_2.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/vaso-in-gres-blu-alt-25-cm-248853.htm",
    "larghezza_cm": 15,
    "profondita_cm": 15,
    "descrizione": "Vaso in gres blu alt. 25 cm"
  },
  {
    "nome": "Cuscino in lino lavato verde basilico 45x45cm",
    "categoria": "Tessile",
    "prezzo": 25.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/cuscino-in-lino-lavato-verde-basilico-45x45cm-1000-0-18-223550_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/cuscino-in-lino-lavato-verde-basilico-45x45cm-223550.htm",
    "larghezza_cm": 45,
    "profondita_cm": 10,
    "descrizione": "Cuscino in lino lavato verde basilico 45x45cm"
  },
  {
    "nome": "Distributore detersivo per i piatti e portaspugna in ceramica beige e nera",
    "categoria": "Cucina",
    "prezzo": 15.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/distributore-detersivo-per-i-piatti-e-portaspugna-in-ceramica-beige-e-nera-1000-5-20-218591_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/distributore-detersivo-per-i-piatti-e-portaspugna-in-ceramica-beige-e-nera-218591.htm",
    "larghezza_cm": 18,
    "profondita_cm": 6.5,
    "descrizione": "Distributore detersivo per i piatti e portaspugna in ceramica beige e nera"
  },
  {
    "nome": "Vassoio ovale in acacia",
    "categoria": "Cucina",
    "prezzo": 10.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/vassoio-ovale-in-acacia-1000-14-40-235872_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/vassoio-ovale-in-acacia-235872.htm",
    "larghezza_cm": 26.8,
    "profondita_cm": 10.3,
    "descrizione": "Vassoio ovale in acacia"
  },
  {
    "nome": "Colonel - Divano vintage in pelle marrone 3 posti",
    "categoria": "Divani",
    "prezzo": 1899,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/241944/divano-vintage-in-pelle-marrone-3-posti.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-vintage-in-pelle-marrone-3-posti-colonel-241944.htm",
    "larghezza_cm": 225,
    "profondita_cm": 103,
    "descrizione": "Divano vintage in pelle marrone 3 posti"
  },
  {
    "nome": "Danube - Tavolo da pranzo allungabile 8/12 persone 200/300 cm",
    "categoria": "Tavoli da pranzo",
    "prezzo": 599,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tavolo-da-pranzo-allungabile-8-12-persone-200-300-cm-1000-0-17-140811_5.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tavolo-da-pranzo-allungabile-8-12-persone-200-300-cm-danube-140811.htm",
    "larghezza_cm": 280,
    "profondita_cm": 100,
    "descrizione": "Tavolo da pranzo allungabile 8/12 persone 200/300 cm"
  },
  {
    "nome": "Somny - Rete a doghe 80x200 cm",
    "categoria": "Letti",
    "prezzo": 139,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/rete-a-doghe-80x200-cm-1000-11-39-241734_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/rete-a-doghe-80x200-cm-somny-241734.htm",
    "larghezza_cm": 198,
    "profondita_cm": 78.7,
    "descrizione": "Rete a doghe 80x200 cm"
  },
  {
    "nome": "Sixties - Letto vintage 90x190 cm con rete a doghe",
    "categoria": "Letti",
    "prezzo": 199,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/letto-vintage-90x190-cm-con-rete-a-doghe-1000-14-22-248605_2.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/letto-vintage-90x190-cm-con-rete-a-doghe-sixties-248605.htm",
    "larghezza_cm": 90,
    "profondita_cm": 190,
    "descrizione": "Letto vintage 90x190 cm con rete a doghe"
  },
  {
    "nome": "Tela dipinta, marrone, oro e nero, 80x100 cm",
    "categoria": "Decorazioni",
    "prezzo": 109,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tela-dipinta-marrone-oro-e-nero-80x100-cm-1000-3-8-228993_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tela-dipinta-marrone-oro-e-nero-80x100-cm-228993.htm",
    "larghezza_cm": 80,
    "profondita_cm": 3,
    "descrizione": "Tela dipinta, marrone, oro e nero, 80x100 cm"
  },
  {
    "nome": "Monstera artificiale in vaso",
    "categoria": "Decorazioni",
    "prezzo": 99.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/monstera-artificiale-in-vaso-1000-3-8-245721_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/monstera-artificiale-in-vaso-245721.htm",
    "larghezza_cm": 65,
    "profondita_cm": 65,
    "descrizione": "Monstera artificiale in vaso"
  },
  {
    "nome": "Minus - Poltrona effetto velluto arancione",
    "categoria": "Divani",
    "prezzo": 159,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltrona-effetto-velluto-arancione-1000-4-36-247881_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-effetto-velluto-arancione-minus-247881.htm",
    "larghezza_cm": 65,
    "profondita_cm": 58,
    "descrizione": "Poltrona effetto velluto arancione"
  },
  {
    "nome": "Riverside - Tavolo da pranzo rotondo 6 persone in vetro sbiancato,140 cm",
    "categoria": "Tavoli da pranzo",
    "prezzo": 1399,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tavolo-da-pranzo-rotondo-6-persone-in-vetro-sbiancato-140-cm-1000-1-32-250870_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tavolo-da-pranzo-rotondo-6-persone-in-vetro-sbiancato-140-cm-riverside-250870.htm",
    "larghezza_cm": 140,
    "profondita_cm": 140,
    "descrizione": "Tavolo da pranzo rotondo 6 persone in vetro sbiancato,140 cm"
  },
  {
    "nome": "Tradition - Sedia bistrot in rattan e betulla écru",
    "categoria": "Sedie",
    "prezzo": 99.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-bistrot-in-rattan-e-betulla-ecru-1000-15-22-246022_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-bistrot-in-rattan-e-betulla-ecru-tradition-246022.htm",
    "larghezza_cm": 49,
    "profondita_cm": 56,
    "descrizione": "Sedia bistrot in rattan e betulla écru"
  },
  {
    "nome": "Edison - Mobile TV nero stile industriale in metallo lung. 150 cm",
    "categoria": "Mobili TV",
    "prezzo": 459,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/mobile-tv-nero-stile-industriale-in-metallo-lung-150-cm-1000-11-1-146330_0.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/mobile-tv-nero-stile-industriale-in-metallo-lung-150-cm-edison-146330.htm",
    "larghezza_cm": 150,
    "profondita_cm": 40,
    "descrizione": "Mobile TV nero stile industriale in metallo lung. 150 cm"
  },
  {
    "nome": "Tony - Comò 3 cassetti in legno massello di acacia 90 cm",
    "categoria": "Cassettiere",
    "prezzo": 499,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/como-3-cassetti-in-legno-massello-di-acacia-90-cm-1000-11-2-199098_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/como-3-cassetti-in-legno-massello-di-acacia-90-cm-tony-199098.htm",
    "larghezza_cm": 90,
    "profondita_cm": 47,
    "descrizione": "Comò 3 cassetti in legno massello di acacia 90 cm"
  },
  {
    "nome": "Alegro - Libreria a 3 ante",
    "categoria": "Librerie",
    "prezzo": 1299,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/libreria-a-3-ante-1000-11-32-234101_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/libreria-a-3-ante-alegro-234101.htm",
    "larghezza_cm": 181,
    "profondita_cm": 45,
    "descrizione": "Libreria a 3 ante"
  },
  {
    "nome": "Canopy - Comò doppio con 6 cassetti in paglia di Vienna 150 cm",
    "categoria": "Cassettiere",
    "prezzo": 749,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/como-doppio-con-6-cassetti-in-paglia-di-vienna-150-cm-1000-16-15-230230_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/como-doppio-con-6-cassetti-in-paglia-di-vienna-150-cm-canopy-230230.htm",
    "larghezza_cm": 150,
    "profondita_cm": 47,
    "descrizione": "Comò doppio con 6 cassetti in paglia di Vienna 150 cm"
  },
  {
    "nome": "Lotto di 6 - Bicchiere in vetro a bolle verde",
    "categoria": "Cucina",
    "prezzo": 29.94,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/bicchiere-in-vetro-a-bolle-verde-1000-1-6-201111_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/bicchiere-in-vetro-a-bolle-verde-201111.htm",
    "larghezza_cm": 8,
    "profondita_cm": 8,
    "descrizione": "Bicchiere in vetro a bolle verde"
  },
  {
    "nome": "Cestino a due piani in metallo color crema e legno di faggio",
    "categoria": "Cucina",
    "prezzo": 22.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/cestino-a-due-piani-in-metallo-color-crema-e-legno-di-faggio-1000-13-6-237724_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/cestino-a-due-piani-in-metallo-color-crema-e-legno-di-faggio-237724.htm",
    "larghezza_cm": 27,
    "profondita_cm": 17,
    "descrizione": "Cestino a due piani in metallo color crema e legno di faggio"
  },
  {
    "nome": "Divano asimmetrico 4/5 posti in tessuto effetto lino beige",
    "categoria": "Divani",
    "prezzo": 1499,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/252440/divano-asimmetrico-4-5-posti-in-tessuto-effetto-lino-beige.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-asimmetrico-4-5-posti-in-tessuto-effetto-lino-beige-252440.htm",
    "larghezza_cm": 298,
    "profondita_cm": 130,
    "descrizione": "Divano asimmetrico 4/5 posti in tessuto effetto lino beige"
  },
  {
    "nome": "Poltrona professionale arrotondata in velluto di poliestere bordeaux",
    "categoria": "Divani",
    "prezzo": 179,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/254713_0/poltrona-professionale-arrotondata-in-velluto-di-poliestere-bordeaux.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-professionale-arrotondata-in-velluto-di-poliestere-bordeaux-254713.htm",
    "larghezza_cm": 57,
    "profondita_cm": 61,
    "descrizione": "Poltrona professionale arrotondata in velluto di poliestere bordeaux"
  },
  {
    "nome": "Riverside Business - Tavolo da pranzo professionale in graniglia bianca e metallo color ottone per 2 persone Ø 70 cm",
    "categoria": "Tavoli da pranzo",
    "prezzo": 419.3,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tavolo-da-pranzo-professionale-in-graniglia-bianca-e-metallo-color-ottone-per-2-persone-oe-70-cm-1000-5-6-238872_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tavolo-da-pranzo-professionale-in-graniglia-bianca-e-metallo-color-ottone-per-2-persone-oe-70-cm-riverside-business-238872.htm",
    "larghezza_cm": 70,
    "profondita_cm": 70,
    "descrizione": "Tavolo da pranzo professionale in graniglia bianca e metallo color ottone per 2 persone Ø 70 cm"
  },
  {
    "nome": "Luna - Sedia in velluto verde e acciaio nero",
    "categoria": "Sedie",
    "prezzo": 99.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-in-velluto-verde-e-acciaio-nero-1000-6-30-197937_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-in-velluto-verde-e-acciaio-nero-luna-197937.htm",
    "larghezza_cm": 55,
    "profondita_cm": 54,
    "descrizione": "Sedia in velluto verde e acciaio nero"
  },
  {
    "nome": "Long Island - Porta-TV stile industriale in abete massiccio e metallo lung. 117 cm",
    "categoria": "Mobili TV",
    "prezzo": 139.3,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/porta-tv-stile-industriale-in-abete-massiccio-e-metallo-lung-117-cm-1000-0-4-116977_9.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/porta-tv-stile-industriale-in-abete-massiccio-e-metallo-lung-117-cm-long-island-116977.htm",
    "larghezza_cm": 117,
    "profondita_cm": 50,
    "descrizione": "Porta-TV stile industriale in abete massiccio e metallo lung. 117 cm"
  },
  {
    "nome": "Harvey - Comò a 8 cassetti in metallo e abete 100 cm",
    "categoria": "Cassettiere",
    "prezzo": 299,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/como-a-8-cassetti-in-metallo-e-abete-100-cm-1000-4-17-195997_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/como-a-8-cassetti-in-metallo-e-abete-100-cm-harvey-195997.htm",
    "larghezza_cm": 100,
    "profondita_cm": 45,
    "descrizione": "Comò a 8 cassetti in metallo e abete 100 cm"
  },
  {
    "nome": "Wayne - Libreria a 2 ante in acciaio e legno di abete, L98",
    "categoria": "Librerie",
    "prezzo": 319,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/libreria-a-2-ante-in-acciaio-e-legno-di-abete-l98-1000-14-26-209454_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/libreria-a-2-ante-in-acciaio-e-legno-di-abete-l98-wayne-209454.htm",
    "larghezza_cm": 98,
    "profondita_cm": 32.5,
    "descrizione": "Libreria a 2 ante in acciaio e legno di abete, L98"
  },
  {
    "nome": "Axelle - Madia vintage a 2 ante beige e alluminio color ottone dorato 109 cm",
    "categoria": "Credenze",
    "prezzo": 279,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/madia-vintage-a-2-ante-beige-e-alluminio-color-ottone-dorato-109-cm-1000-2-31-248491_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/madia-vintage-a-2-ante-beige-e-alluminio-color-ottone-dorato-109-cm-axelle-248491.htm",
    "larghezza_cm": 108.6,
    "profondita_cm": 40,
    "descrizione": "Madia vintage a 2 ante beige e alluminio color ottone dorato 109 cm"
  },
  {
    "nome": "Portobello - Letto in legno massello di rovere 160x200 cm con rete a doghe",
    "categoria": "Letti",
    "prezzo": 599,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/248591_0/letto-in-legno-massello-di-rovere-160x200-cm-con-rete-a-doghe.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/letto-in-legno-massello-di-rovere-160x200-cm-con-rete-a-doghe-portobello-248591.htm",
    "larghezza_cm": 170,
    "profondita_cm": 212,
    "descrizione": "Letto in legno massello di rovere 160x200 cm con rete a doghe"
  },
  {
    "nome": "Beaumont - Armadio a 3 ante in legno chiaro con 3 cassetti 158 cm",
    "categoria": "Armadi",
    "prezzo": 999,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/armadio-a-3-ante-in-legno-chiaro-con-3-cassetti-158-cm-1000-6-23-241882_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/armadio-a-3-ante-in-legno-chiaro-con-3-cassetti-158-cm-beaumont-241882.htm",
    "larghezza_cm": 158,
    "profondita_cm": 61,
    "descrizione": "Armadio a 3 ante in legno chiaro con 3 cassetti 158 cm"
  },
  {
    "nome": "Vassoio rotondo in legno di acacia",
    "categoria": "Cucina",
    "prezzo": 29.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/vassoio-rotondo-in-legno-di-acacia-1000-14-12-244372_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/vassoio-rotondo-in-legno-di-acacia-244372.htm",
    "larghezza_cm": 35,
    "profondita_cm": 35,
    "descrizione": "Vassoio rotondo in legno di acacia"
  },
  {
    "nome": "Divano 3 posti in tessuto tramato beige con poggiatesta regolabili",
    "categoria": "Divani",
    "prezzo": 1199,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/253728_0/divano-3-posti-in-tessuto-tramato-beige-con-poggiatesta-regolabili.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-3-posti-in-tessuto-tramato-beige-con-poggiatesta-regolabili-253728.htm",
    "larghezza_cm": 250,
    "profondita_cm": 109,
    "descrizione": "Divano 3 posti in tessuto tramato beige con poggiatesta regolabili"
  },
  {
    "nome": "Emmanuelle - Poltrona vintage in rattan",
    "categoria": "Divani",
    "prezzo": 399,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltrona-vintage-in-rattan-1000-3-4-222142_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-vintage-in-rattan-emmanuelle-222142.htm",
    "larghezza_cm": 104,
    "profondita_cm": 75,
    "descrizione": "Poltrona vintage in rattan"
  },
  {
    "nome": "Lokrum - Mobile TV a 2 ante scorrevoli bianche lung. 120 cm",
    "categoria": "Mobili TV",
    "prezzo": 419,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/mobile-tv-a-2-ante-scorrevoli-bianche-lung-120-cm-1000-7-20-219698_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/mobile-tv-a-2-ante-scorrevoli-bianche-lung-120-cm-lokrum-219698.htm",
    "larghezza_cm": 120,
    "profondita_cm": 40,
    "descrizione": "Mobile TV a 2 ante scorrevoli bianche lung. 120 cm"
  },
  {
    "nome": "Portobello - Madia vintage 2 ante lung. 180 cm",
    "categoria": "Credenze",
    "prezzo": 899,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/249923_0/madia-vintage-2-ante-lung-180-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/madia-vintage-2-ante-lung-180-cm-portobello-249923.htm",
    "larghezza_cm": 180,
    "profondita_cm": 42,
    "descrizione": "Madia vintage 2 ante lung. 180 cm"
  },
  {
    "nome": "Germain - Libreria a 2 ante in legno massello di mango e acciaio, larga 220 cm.",
    "categoria": "Librerie",
    "prezzo": 2699,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/188485_0/libreria-a-2-ante-in-legno-massello-di-mango-e-acciaio-larga-220-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/libreria-a-2-ante-in-legno-massello-di-mango-e-acciaio-larga-220-cm-germain-188485.htm",
    "larghezza_cm": 220,
    "profondita_cm": 47,
    "descrizione": "Libreria a 2 ante in legno massello di mango e acciaio, larga 220 cm."
  },
  {
    "nome": "Paddle - Testata del letto in pino massello multicolore, 160 cm",
    "categoria": "Letti",
    "prezzo": 399,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/testata-del-letto-in-pino-massello-multicolore-160-cm-1000-9-34-199130_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/testata-del-letto-in-pino-massello-multicolore-160-cm-paddle-199130.htm",
    "larghezza_cm": 170,
    "profondita_cm": 10,
    "descrizione": "Testata del letto in pino massello multicolore, 160 cm"
  },
  {
    "nome": "Sweet - Letto vintage a sbarre per neonato 125 cm",
    "categoria": "Letti",
    "prezzo": 279,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/letto-vintage-a-sbarre-per-neonato-125-cm-1000-5-3-230423_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/letto-vintage-a-sbarre-per-neonato-125-cm-sweet-230423.htm",
    "larghezza_cm": 124.8,
    "profondita_cm": 66,
    "descrizione": "Letto vintage a sbarre per neonato 125 cm"
  },
  {
    "nome": "Divano nuvola a 2 posti in velluto color caffellatte con effetto anticato",
    "categoria": "Divani",
    "prezzo": 999,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/252414_0/divano-nuvola-a-2-posti-in-velluto-color-caffellatte-con-effetto-anticato.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-nuvola-a-2-posti-in-velluto-color-caffellatte-con-effetto-anticato-252414.htm",
    "larghezza_cm": 206,
    "profondita_cm": 102,
    "descrizione": "Divano nuvola a 2 posti in velluto color caffellatte con effetto anticato"
  },
  {
    "nome": "Quadro in lino con ricamo a rilievo beige e bianco 60x80 cm",
    "categoria": "Decorazioni",
    "prezzo": 41.95,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/251459/quadro-in-lino-con-ricamo-a-rilievo-beige-e-bianco-60x80-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/quadro-in-lino-con-ricamo-a-rilievo-beige-e-bianco-60x80-cm-251459.htm",
    "larghezza_cm": 60,
    "profondita_cm": 2.8,
    "descrizione": "Quadro in lino con ricamo a rilievo beige e bianco 60x80 cm"
  },
  {
    "nome": "Lampada da terra a fungo in metallo laccato nero alt. 145 cm",
    "categoria": "Lampade",
    "prezzo": 34.95,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/lampada-da-terra-a-fungo-in-metallo-laccato-nero-alt-145-cm-1000-9-23-246679_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/lampada-da-terra-a-fungo-in-metallo-laccato-nero-alt-145-cm-246679.htm",
    "larghezza_cm": 32,
    "profondita_cm": 32,
    "descrizione": "Lampada da terra a fungo in metallo laccato nero alt. 145 cm"
  },
  {
    "nome": "Vaso in vetro blu, rosa e verde alt.28 cm",
    "categoria": "Decorazioni",
    "prezzo": 59.99,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/251821/vaso-in-vetro-blu-rosa-e-verde-alt-28-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/vaso-in-vetro-blu-rosa-e-verde-alt-28-cm-251821.htm",
    "larghezza_cm": 18,
    "profondita_cm": 18,
    "descrizione": "Vaso in vetro blu, rosa e verde alt.28 cm"
  },
  {
    "nome": "Barbade - Guardaroba a 3 ante bianco opaco 130 cm",
    "categoria": "Armadi",
    "prezzo": 949,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/guardaroba-a-3-ante-bianco-opaco-130-cm-1000-13-5-166137_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/guardaroba-a-3-ante-bianco-opaco-130-cm-barbade-166137.htm",
    "larghezza_cm": 130,
    "profondita_cm": 60,
    "descrizione": "Guardaroba a 3 ante bianco opaco 130 cm"
  },
  {
    "nome": "Lotto di 4 - Bicchiere in vetro con fondo grigio fumé",
    "categoria": "Cucina",
    "prezzo": 19.96,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/bicchiere-in-vetro-con-fondo-grigio-fume-1000-10-2-217015_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/bicchiere-in-vetro-con-fondo-grigio-fume-217015.htm",
    "larghezza_cm": 5.5,
    "profondita_cm": 5.5,
    "descrizione": "Bicchiere in vetro con fondo grigio fumé"
  },
  {
    "nome": "Portaburro in vetro e vassoio in legno di acacia",
    "categoria": "Cucina",
    "prezzo": 14.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/portaburro-in-vetro-e-vassoio-in-legno-di-acacia-1000-3-37-243987_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/portaburro-in-vetro-e-vassoio-in-legno-di-acacia-243987.htm",
    "larghezza_cm": 18,
    "profondita_cm": 12,
    "descrizione": "Portaburro in vetro e vassoio in legno di acacia"
  },
  {
    "nome": "Patty - Tavolo da pranzo console estensibile per 5/6 persone lung. 130 cm",
    "categoria": "Tavoli da pranzo",
    "prezzo": 399,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tavolo-da-pranzo-console-estensibile-per-5-6-persone-lung-130-cm-1000-0-40-238578_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tavolo-da-pranzo-console-estensibile-per-5-6-persone-lung-130-cm-patty-238578.htm",
    "larghezza_cm": 130,
    "profondita_cm": 80,
    "descrizione": "Tavolo da pranzo console estensibile per 5/6 persone lung. 130 cm"
  },
  {
    "nome": "Germain - Libreria/mobile TV con 8 cassetti e 1 anta scorrevole in metallo nero",
    "categoria": "Librerie",
    "prezzo": 2099.3,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/libreria-mobile-tv-con-8-cassetti-e-1-anta-scorrevole-in-metallo-nero-1000-4-22-234706_4.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/libreria-mobile-tv-con-8-cassetti-e-1-anta-scorrevole-in-metallo-nero-germain-234706.htm",
    "larghezza_cm": 280,
    "profondita_cm": 45,
    "descrizione": "Libreria/mobile TV con 8 cassetti e 1 anta scorrevole in metallo nero"
  },
  {
    "nome": "Léontine - Comò doppio 6 cassetti color crema lung. 175 cm",
    "categoria": "Cassettiere",
    "prezzo": 569,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/229936_0/como-doppio-6-cassetti-color-crema-lung-175-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/como-doppio-6-cassetti-color-crema-lung-175-cm-leontine-229936.htm",
    "larghezza_cm": 175,
    "profondita_cm": 39,
    "descrizione": "Comò doppio 6 cassetti color crema lung. 175 cm"
  },
  {
    "nome": "Madia 2 ante 2 cassetti blu 110 cm",
    "categoria": "Credenze",
    "prezzo": 399,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/madia-2-ante-2-cassetti-blu-110-cm-1000-5-16-249378_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/madia-2-ante-2-cassetti-blu-110-cm-249378.htm",
    "larghezza_cm": 110,
    "profondita_cm": 47,
    "descrizione": "Madia 2 ante 2 cassetti blu 110 cm"
  },
  {
    "nome": "Pump Essentiel - Materasso a molle insacchettate 160x200 cm",
    "categoria": "Letti",
    "prezzo": 279,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/materasso-a-molle-insacchettate-160x200-cm-1000-4-3-242764_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/materasso-a-molle-insacchettate-160x200-cm-pump-essentiel-242764.htm",
    "larghezza_cm": 160,
    "profondita_cm": 200,
    "descrizione": "Materasso a molle insacchettate 160x200 cm"
  },
  {
    "nome": "Mini Jungle - Letto regolabile neonato in legno di pino, L.70x140 cm",
    "categoria": "Letti",
    "prezzo": 399,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/letto-regolabile-neonato-in-legno-di-pino-l-70x140-cm-1000-1-9-206075_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/letto-regolabile-neonato-in-legno-di-pino-l-70x140-cm-mini-jungle-206075.htm",
    "larghezza_cm": 145,
    "profondita_cm": 75.2,
    "descrizione": "Letto regolabile neonato in legno di pino, L.70x140 cm"
  },
  {
    "nome": "Orologio da parete industriale bicolore, 145x110 cm",
    "categoria": "Decorazioni",
    "prezzo": 169,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/orologio-da-parete-industriale-bicolore-145x110-cm-1000-10-11-164995_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/orologio-da-parete-industriale-bicolore-145x110-cm-164995.htm",
    "larghezza_cm": 145,
    "profondita_cm": 3,
    "descrizione": "Orologio da parete industriale bicolore, 145x110 cm"
  },
  {
    "nome": "Vaso in gres marrone e nero alt. 20cm",
    "categoria": "Decorazioni",
    "prezzo": 22.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/vaso-in-gres-marrone-e-nero-alt-20cm-1000-7-28-228521_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/vaso-in-gres-marrone-e-nero-alt-20cm-228521.htm",
    "larghezza_cm": 15.5,
    "profondita_cm": 15.5,
    "descrizione": "Vaso in gres marrone e nero alt. 20cm"
  },
  {
    "nome": "Tazze in ceramica nera, crema e beige (x4) e supporto in metallo",
    "categoria": "Cucina",
    "prezzo": 24.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tazze-in-ceramica-nera-crema-e-beige-x4-e-supporto-in-metallo-1000-6-38-207457_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tazze-in-ceramica-nera-crema-e-beige-x4-e-supporto-in-metallo-207457.htm",
    "larghezza_cm": 11.5,
    "profondita_cm": 9,
    "descrizione": "Tazze in ceramica nera, crema e beige (x4) e supporto in metallo"
  },
  {
    "nome": "Anvers - Divano 3 posti in tessuto fiammato giallo ocra",
    "categoria": "Divani",
    "prezzo": 1199,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-3-posti-in-tessuto-fiammato-giallo-ocra-1000-11-37-247021_11.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-3-posti-in-tessuto-fiammato-giallo-ocra-anvers-247021.htm",
    "larghezza_cm": 200,
    "profondita_cm": 106,
    "descrizione": "Divano 3 posti in tessuto fiammato giallo ocra"
  },
  {
    "nome": "Poltrona girevole effetto velluto beige e acciaio cromato",
    "categoria": "Divani",
    "prezzo": 199,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/252723/poltrona-girevole-effetto-velluto-beige-e-acciaio-cromato.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-girevole-effetto-velluto-beige-e-acciaio-cromato-252723.htm",
    "larghezza_cm": 71,
    "profondita_cm": 71,
    "descrizione": "Poltrona girevole effetto velluto beige e acciaio cromato"
  },
  {
    "nome": "Dolores - Tavolo da pranzo rotondo in legno di mango e metallo color ottone per 4/6 persone Ø 140cm",
    "categoria": "Tavoli da pranzo",
    "prezzo": 789,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tavolo-da-pranzo-rotondo-in-legno-di-mango-e-metallo-color-ottone-per-4-6-persone-oe-140cm-1000-3-30-230081_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tavolo-da-pranzo-rotondo-in-legno-di-mango-e-metallo-color-ottone-per-4-6-persone-oe-140cm-dolores-230081.htm",
    "larghezza_cm": 140,
    "profondita_cm": 140,
    "descrizione": "Tavolo da pranzo rotondo in legno di mango e metallo color ottone per 4/6 persone Ø 140cm"
  },
  {
    "nome": "Sedia in tessuto ciniglia color ruggine con gambe in acciaio nero",
    "categoria": "Sedie",
    "prezzo": 55.99,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/253718_0/sedia-in-tessuto-ciniglia-color-ruggine-con-gambe-in-acciaio-nero.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-in-tessuto-ciniglia-color-ruggine-con-gambe-in-acciaio-nero-253718.htm",
    "larghezza_cm": 47,
    "profondita_cm": 53,
    "descrizione": "Sedia in tessuto ciniglia color ruggine con gambe in acciaio nero"
  },
  {
    "nome": "Samoa - Comò a 5 cassetti in legno massello di mango",
    "categoria": "Cassettiere",
    "prezzo": 449,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/como-a-5-cassetti-in-legno-massello-di-mango-1000-15-37-146776_0.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/como-a-5-cassetti-in-legno-massello-di-mango-samoa-146776.htm",
    "larghezza_cm": 50,
    "profondita_cm": 40,
    "descrizione": "Comò a 5 cassetti in legno massello di mango"
  },
  {
    "nome": "Cambronne - Libreria a 8 ante nera",
    "categoria": "Librerie",
    "prezzo": 1599,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/libreria-a-8-ante-nera-1000-6-24-228435_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/libreria-a-8-ante-nera-cambronne-228435.htm",
    "larghezza_cm": 200,
    "profondita_cm": 30,
    "descrizione": "Libreria a 8 ante nera"
  },
  {
    "nome": "Portobello - Cassettiera vintage con 7 cassetti",
    "categoria": "Cassettiere",
    "prezzo": 489,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/cassettiera-vintage-con-7-cassetti-1000-12-8-209231_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/cassettiera-vintage-con-7-cassetti-portobello-209231.htm",
    "larghezza_cm": 55,
    "profondita_cm": 38,
    "descrizione": "Cassettiera vintage con 7 cassetti"
  },
  {
    "nome": "Meeko - Letto in legno massello di mango intagliato 160x200 cm",
    "categoria": "Letti",
    "prezzo": 479,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/letto-in-legno-massello-di-mango-intagliato-160x200-cm-1000-15-36-176254_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/letto-in-legno-massello-di-mango-intagliato-160x200-cm-meeko-176254.htm",
    "larghezza_cm": 165.5,
    "profondita_cm": 205.5,
    "descrizione": "Letto in legno massello di mango intagliato 160x200 cm"
  },
  {
    "nome": "Louvain - Divano a 3/4 posti in tessuto beige effetto lino",
    "categoria": "Divani",
    "prezzo": 899,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-a-3-4-posti-in-tessuto-beige-effetto-lino-1000-7-12-242240_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-a-3-4-posti-in-tessuto-beige-effetto-lino-louvain-242240.htm",
    "larghezza_cm": 203,
    "profondita_cm": 98,
    "descrizione": "Divano a 3/4 posti in tessuto beige effetto lino"
  },
  {
    "nome": "Tela stampata e dipinta, pavone multicolore, 110x110 cm",
    "categoria": "Decorazioni",
    "prezzo": 129,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tela-stampata-e-dipinta-pavone-multicolore-110x110-cm-1000-6-3-235507_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tela-stampata-e-dipinta-pavone-multicolore-110x110-cm-235507.htm",
    "larghezza_cm": 110,
    "profondita_cm": 2.8,
    "descrizione": "Tela stampata e dipinta, pavone multicolore, 110x110 cm"
  },
  {
    "nome": "Orologio in metallo nero Ø 105 cm",
    "categoria": "Decorazioni",
    "prezzo": 119,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/orologio-in-metallo-nero-oe-105-cm-1000-6-0-233331_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/orologio-in-metallo-nero-oe-105-cm-233331.htm",
    "larghezza_cm": 105,
    "profondita_cm": 4.5,
    "descrizione": "Orologio in metallo nero Ø 105 cm"
  },
  {
    "nome": "Lampada a sospensione con 6 globi in vetro opalino e metallo dorato",
    "categoria": "Lampade",
    "prezzo": 179,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/lampada-a-sospensione-con-6-globi-in-vetro-opalino-e-metallo-dorato-1000-8-30-201832_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/lampada-a-sospensione-con-6-globi-in-vetro-opalino-e-metallo-dorato-201832.htm",
    "larghezza_cm": 101,
    "profondita_cm": 39,
    "descrizione": "Lampada a sospensione con 6 globi in vetro opalino e metallo dorato"
  },
  {
    "nome": "Milie - Armadio a 2 ante grigio chiaro",
    "categoria": "Armadi",
    "prezzo": 599,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/armadio-a-2-ante-grigio-chiaro-1000-4-35-241812_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/armadio-a-2-ante-grigio-chiaro-milie-241812.htm",
    "larghezza_cm": 104,
    "profondita_cm": 50,
    "descrizione": "Armadio a 2 ante grigio chiaro"
  },
  {
    "nome": "Mini scatola portapane in legno d'acacia",
    "categoria": "Cucina",
    "prezzo": 29.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/mini-scatola-portapane-in-legno-d-acacia-1000-10-35-247921_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/mini-scatola-portapane-in-legno-d-acacia-247921.htm",
    "larghezza_cm": 20,
    "profondita_cm": 18,
    "descrizione": "Mini scatola portapane in legno d'acacia"
  },
  {
    "nome": "Divano 3 posti in tessuto bouclé écru",
    "categoria": "Divani",
    "prezzo": 799.2,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/252502/divano-3-posti-in-tessuto-boucle-ecru.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-3-posti-in-tessuto-boucle-ecru-252502.htm",
    "larghezza_cm": 215,
    "profondita_cm": 101,
    "descrizione": "Divano 3 posti in tessuto bouclé écru"
  },
  {
    "nome": "Poltrona girevole in velluto beige crema",
    "categoria": "Divani",
    "prezzo": 299,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/252452/poltrona-girevole-in-velluto-beige-crema.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-girevole-in-velluto-beige-crema-252452.htm",
    "larghezza_cm": 76,
    "profondita_cm": 80,
    "descrizione": "Poltrona girevole in velluto beige crema"
  },
  {
    "nome": "Tavolo da pranzo rotondo allungabile con impiallacciatura in rovere, 6/8 posti, Lung. 120/180 cm",
    "categoria": "Tavoli da pranzo",
    "prezzo": 899,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/253936/tavolo-da-pranzo-rotondo-allungabile-con-impiallacciatura-in-rovere-6-8-posti-lung-120-180-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tavolo-da-pranzo-rotondo-allungabile-con-impiallacciatura-in-rovere-6-8-posti-lung-120-180-cm-253936.htm",
    "larghezza_cm": 120,
    "profondita_cm": 120,
    "descrizione": "Tavolo da pranzo rotondo allungabile con impiallacciatura in rovere, 6/8 posti, Lung. 120/180 cm"
  },
  {
    "nome": "Mauricette - Sedia vintage in tessuto riciclato marrone scoiattolo e acciaio effetto rovere",
    "categoria": "Sedie",
    "prezzo": 69.99,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/242956_0/sedia-vintage-in-tessuto-riciclato-marrone-scoiattolo-e-acciaio-effetto-rovere.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-vintage-in-tessuto-riciclato-marrone-scoiattolo-e-acciaio-effetto-rovere-mauricette-242956.htm",
    "larghezza_cm": 50.5,
    "profondita_cm": 54.5,
    "descrizione": "Sedia vintage in tessuto riciclato marrone scoiattolo e acciaio effetto rovere"
  },
  {
    "nome": "Germain - Madia con 6 cassetti e 2 ante scorrevoli in massello di mango 190 cm",
    "categoria": "Credenze",
    "prezzo": 999,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/madia-con-6-cassetti-e-2-ante-scorrevoli-in-massello-di-mango-190-cm-1000-8-6-155847_8.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/madia-con-6-cassetti-e-2-ante-scorrevoli-in-massello-di-mango-190-cm-germain-155847.htm",
    "larghezza_cm": 190,
    "profondita_cm": 45,
    "descrizione": "Madia con 6 cassetti e 2 ante scorrevoli in massello di mango 190 cm"
  },
  {
    "nome": "Versailles - Libreria a 6 cassetti nera",
    "categoria": "Librerie",
    "prezzo": 1199,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/libreria-a-6-cassetti-nera-1000-4-10-175121_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/libreria-a-6-cassetti-nera-versailles-175121.htm",
    "larghezza_cm": 101,
    "profondita_cm": 45,
    "descrizione": "Libreria a 6 cassetti nera"
  },
  {
    "nome": "Cambronne - Settimanile a 5 cassetti nero",
    "categoria": "Cassettiere",
    "prezzo": 459,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/settimanile-a-5-cassetti-nero-1000-5-36-187447_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/settimanile-a-5-cassetti-nero-cambronne-187447.htm",
    "larghezza_cm": 85,
    "profondita_cm": 38,
    "descrizione": "Settimanile a 5 cassetti nero"
  },
  {
    "nome": "Bull Essentiel - Materasso in memory foam 90x200",
    "categoria": "Letti",
    "prezzo": 149,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/materasso-in-memory-foam-90x200-1000-15-14-242775_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/materasso-in-memory-foam-90x200-bull-essentiel-242775.htm",
    "larghezza_cm": 90,
    "profondita_cm": 200,
    "descrizione": "Materasso in memory foam 90x200"
  },
  {
    "nome": "Tela astratta beige, 90x120 cm",
    "categoria": "Decorazioni",
    "prezzo": 139,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tela-astratta-beige-90x120-cm-1000-8-40-247188_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tela-astratta-beige-90x120-cm-247188.htm",
    "larghezza_cm": 90,
    "profondita_cm": 4.5,
    "descrizione": "Tela astratta beige, 90x120 cm"
  },
  {
    "nome": "Lampada a sospensione in vetro rigato trasparente e metallo dorato",
    "categoria": "Lampade",
    "prezzo": 39.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/lampada-a-sospensione-in-vetro-rigato-trasparente-e-metallo-dorato-1000-5-5-246743_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/lampada-a-sospensione-in-vetro-rigato-trasparente-e-metallo-dorato-246743.htm",
    "larghezza_cm": 26,
    "profondita_cm": 26,
    "descrizione": "Lampada a sospensione in vetro rigato trasparente e metallo dorato"
  },
  {
    "nome": "Vaso in gres bianco con motivi grafici alt.18 cm",
    "categoria": "Decorazioni",
    "prezzo": 8.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/vaso-in-gres-bianco-con-motivi-grafici-alt-18-cm-1000-12-29-200068_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/vaso-in-gres-bianco-con-motivi-grafici-alt-18-cm-200068.htm",
    "larghezza_cm": 8.5,
    "profondita_cm": 8.5,
    "descrizione": "Vaso in gres bianco con motivi grafici alt.18 cm"
  },
  {
    "nome": "Chamarel - Armadio a 2 ante a battente in paglia di Vienna beige",
    "categoria": "Armadi",
    "prezzo": 899,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/armadio-a-2-ante-a-battente-in-paglia-di-vienna-beige-1000-15-27-226183_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/armadio-a-2-ante-a-battente-in-paglia-di-vienna-beige-chamarel-226183.htm",
    "larghezza_cm": 90,
    "profondita_cm": 50,
    "descrizione": "Armadio a 2 ante a battente in paglia di Vienna beige"
  },
  {
    "nome": "Vasetto per il miele in vetro con coperchio e cucchiaio in legno di acacia",
    "categoria": "Cucina",
    "prezzo": 10.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/vasetto-per-il-miele-in-vetro-con-coperchio-e-cucchiaio-in-legno-di-acacia-1000-11-29-222864_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/vasetto-per-il-miele-in-vetro-con-coperchio-e-cucchiaio-in-legno-di-acacia-222864.htm",
    "larghezza_cm": 9,
    "profondita_cm": 9,
    "descrizione": "Vasetto per il miele in vetro con coperchio e cucchiaio in legno di acacia"
  },
  {
    "nome": "Barnaby - Divano letto ad angolo destro 3/4 posti grigio chiaro screziato",
    "categoria": "Divani",
    "prezzo": 1199,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-letto-ad-angolo-destro-3-4-posti-grigio-chiaro-screziato-1000-14-32-247959_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-letto-ad-angolo-destro-3-4-posti-grigio-chiaro-screziato-barnaby-247959.htm",
    "larghezza_cm": 238,
    "profondita_cm": 169.5,
    "descrizione": "Divano letto ad angolo destro 3/4 posti grigio chiaro screziato"
  },
  {
    "nome": "Indiana - Poltrona a dondolo in legno di acacia con cuscini di poliestere riciclato grigio chiné",
    "categoria": "Divani",
    "prezzo": 279.3,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltrona-a-dondolo-in-legno-di-acacia-con-cuscini-di-poliestere-riciclato-grigio-chine-1000-1-23-246433_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-a-dondolo-in-legno-di-acacia-con-cuscini-di-poliestere-riciclato-grigio-chine-indiana-246433.htm",
    "larghezza_cm": 73,
    "profondita_cm": 106.5,
    "descrizione": "Poltrona a dondolo in legno di acacia con cuscini di poliestere riciclato grigio chiné"
  },
  {
    "nome": "Luna - Sedia in velluto e acciaio nero",
    "categoria": "Sedie",
    "prezzo": 99.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-in-velluto-e-acciaio-nero-1000-7-31-197938_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-in-velluto-e-acciaio-nero-luna-197938.htm",
    "larghezza_cm": 55,
    "profondita_cm": 54,
    "descrizione": "Sedia in velluto e acciaio nero"
  },
  {
    "nome": "Boldin - Comò doppio a 6 cassetti 168 cm",
    "categoria": "Cassettiere",
    "prezzo": 969,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/como-doppio-a-6-cassetti-168-cm-1000-16-39-209303_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/como-doppio-a-6-cassetti-168-cm-boldin-209303.htm",
    "larghezza_cm": 167.7,
    "profondita_cm": 45,
    "descrizione": "Comò doppio a 6 cassetti 168 cm"
  },
  {
    "nome": "Opal - Libreria a 3 ante in metallo nera",
    "categoria": "Librerie",
    "prezzo": 1119.2,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/libreria-a-3-ante-in-metallo-nera-1000-0-16-175865_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/libreria-a-3-ante-in-metallo-nera-opal-175865.htm",
    "larghezza_cm": 180,
    "profondita_cm": 35,
    "descrizione": "Libreria a 3 ante in metallo nera"
  },
  {
    "nome": "Himalaya - Madia a 2 ante in legno massello di mango scolpito 90 cm",
    "categoria": "Credenze",
    "prezzo": 479,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/madia-a-2-ante-in-legno-massello-di-mango-scolpito-90-cm-1000-4-11-186069_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/madia-a-2-ante-in-legno-massello-di-mango-scolpito-90-cm-himalaya-186069.htm",
    "larghezza_cm": 90,
    "profondita_cm": 40,
    "descrizione": "Madia a 2 ante in legno massello di mango scolpito 90 cm"
  },
  {
    "nome": "Pillow - Letto contenitore in tessuto spalmato similpelle bianco 160x200 cm con rete a doghe",
    "categoria": "Letti",
    "prezzo": 499,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/letto-contenitore-in-tessuto-spalmato-similpelle-bianco-160x200-cm-con-rete-a-doghe-1000-3-38-146900_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/letto-contenitore-in-tessuto-spalmato-similpelle-bianco-160x200-cm-con-rete-a-doghe-pillow-146900.htm",
    "larghezza_cm": 182,
    "profondita_cm": 217,
    "descrizione": "Letto contenitore in tessuto spalmato similpelle bianco 160x200 cm con rete a doghe"
  },
  {
    "nome": "Leni - Letto a soppalco evolutivo per bambini écru 209cm con scrivania",
    "categoria": "Letti",
    "prezzo": 1199,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/letto-a-soppalco-evolutivo-per-bambini-ecru-209cm-con-scrivania-1000-4-7-237766_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/letto-a-soppalco-evolutivo-per-bambini-ecru-209cm-con-scrivania-leni-237766.htm",
    "larghezza_cm": 210,
    "profondita_cm": 107.5,
    "descrizione": "Letto a soppalco evolutivo per bambini écru 209cm con scrivania"
  },
  {
    "nome": "Divano nuvola a 3/4 posti in velluto color caffellatte con effetto anticato",
    "categoria": "Divani",
    "prezzo": 1199,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/252412_0/divano-nuvola-a-3-4-posti-in-velluto-color-caffellatte-con-effetto-anticato.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-nuvola-a-3-4-posti-in-velluto-color-caffellatte-con-effetto-anticato-252412.htm",
    "larghezza_cm": 240,
    "profondita_cm": 102,
    "descrizione": "Divano nuvola a 3/4 posti in velluto color caffellatte con effetto anticato"
  },
  {
    "nome": "Quadro su tela con pappagalli multicolori, 70x200 cm",
    "categoria": "Decorazioni",
    "prezzo": 169,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/quadro-su-tela-con-pappagalli-multicolori-70x200-cm-1000-5-19-236220_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/quadro-su-tela-con-pappagalli-multicolori-70x200-cm-236220.htm",
    "larghezza_cm": 200,
    "profondita_cm": 3.5,
    "descrizione": "Quadro su tela con pappagalli multicolori, 70x200 cm"
  },
  {
    "nome": "Lampada in paraplume in cotone avorio 169 cm",
    "categoria": "Lampade",
    "prezzo": 249,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/lampada-in-paraplume-in-cotone-avorio-169-cm-1000-11-21-122037_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/lampada-in-paraplume-in-cotone-avorio-169-cm-122037.htm",
    "larghezza_cm": 48,
    "profondita_cm": 48,
    "descrizione": "Lampada in paraplume in cotone avorio 169 cm"
  },
  {
    "nome": "Stelo di magnolia artificiale",
    "categoria": "Altri mobili",
    "prezzo": 19.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/stelo-di-magnolia-artificiale-1000-8-3-247766_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/stelo-di-magnolia-artificiale-247766.htm",
    "larghezza_cm": 1,
    "profondita_cm": 47,
    "descrizione": "Stelo di magnolia artificiale"
  },
  {
    "nome": "Vaso in gres bianco e blu alt. 51 cm",
    "categoria": "Decorazioni",
    "prezzo": 199,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/vaso-in-gres-bianco-e-blu-alt-51-cm-1000-14-10-248265_2.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/vaso-in-gres-bianco-e-blu-alt-51-cm-248265.htm",
    "larghezza_cm": 39.5,
    "profondita_cm": 39.5,
    "descrizione": "Vaso in gres bianco e blu alt. 51 cm"
  },
  {
    "nome": "Solstice - Armadio a 2 ante in rattan 105 cm",
    "categoria": "Armadi",
    "prezzo": 599,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/234464_0/armadio-a-2-ante-in-rattan-105-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/armadio-a-2-ante-in-rattan-105-cm-solstice-234464.htm",
    "larghezza_cm": 105,
    "profondita_cm": 52,
    "descrizione": "Armadio a 2 ante in rattan 105 cm"
  },
  {
    "nome": "Lilo - Divano angolare con penisola a destra 4/5 posti in bouclé blu notte",
    "categoria": "Divani",
    "prezzo": 1699,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-angolare-con-penisola-a-destra-4-5-posti-in-boucle-blu-notte-1000-4-30-249802_2.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-angolare-con-penisola-a-destra-4-5-posti-in-boucle-blu-notte-lilo-249802.htm",
    "larghezza_cm": 272,
    "profondita_cm": 168,
    "descrizione": "Divano angolare con penisola a destra 4/5 posti in bouclé blu notte"
  },
  {
    "nome": "Zahra - Tavolo da pranzo per 6 persone in massello di mango larg. 132 cm",
    "categoria": "Tavoli da pranzo",
    "prezzo": 529,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tavolo-da-pranzo-per-6-persone-in-massello-di-mango-larg-132-cm-1000-15-16-209608_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tavolo-da-pranzo-per-6-persone-in-massello-di-mango-larg-132-cm-zahra-209608.htm",
    "larghezza_cm": 132,
    "profondita_cm": 130,
    "descrizione": "Tavolo da pranzo per 6 persone in massello di mango larg. 132 cm"
  },
  {
    "nome": "Key West - Sedia in rattan Kubu e massello di mogano",
    "categoria": "Sedie",
    "prezzo": 139,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-in-rattan-kubu-e-massello-di-mogano-1000-5-0-49170193_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-in-rattan-kubu-e-massello-di-mogano-key-west-49170193.htm",
    "larghezza_cm": 47,
    "profondita_cm": 63,
    "descrizione": "Sedia in rattan Kubu e massello di mogano"
  },
  {
    "nome": "Picadilly - Settimanile vintage multicolore in massello di mango",
    "categoria": "Cassettiere",
    "prezzo": 499,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/settimanile-vintage-multicolore-in-massello-di-mango-1000-15-39-147065_0.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/settimanile-vintage-multicolore-in-massello-di-mango-picadilly-147065.htm",
    "larghezza_cm": 86,
    "profondita_cm": 35,
    "descrizione": "Settimanile vintage multicolore in massello di mango"
  },
  {
    "nome": "Picadilly - Libreria a 6 cassetti e 2 ante in mango multicolore",
    "categoria": "Librerie",
    "prezzo": 629.3,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/libreria-a-6-cassetti-e-2-ante-in-mango-multicolore-1000-0-0-147067_9.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/libreria-a-6-cassetti-e-2-ante-in-mango-multicolore-picadilly-147067.htm",
    "larghezza_cm": 90,
    "profondita_cm": 35,
    "descrizione": "Libreria a 6 cassetti e 2 ante in mango multicolore"
  },
  {
    "nome": "Stockholm - Letto in legno massello di sheesham 160x200 cm",
    "categoria": "Letti",
    "prezzo": 789,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/letto-in-legno-massello-di-sheesham-160x200-cm-1000-10-22-121628_4.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/letto-in-legno-massello-di-sheesham-160x200-cm-stockholm-121628.htm",
    "larghezza_cm": 166,
    "profondita_cm": 208,
    "descrizione": "Letto in legno massello di sheesham 160x200 cm"
  },
  {
    "nome": "Paradisio - Letto da giardino rotondo a 2 posti in resina riciclata e cuscini bianchi in poliestere riciclato",
    "categoria": "Letti",
    "prezzo": 1799,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/letto-da-giardino-rotondo-a-2-posti-in-resina-riciclata-e-cuscini-bianchi-in-poliestere-riciclato-1000-4-35-238327_2.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/letto-da-giardino-rotondo-a-2-posti-in-resina-riciclata-e-cuscini-bianchi-in-poliestere-riciclato-paradisio-238327.htm",
    "larghezza_cm": 193,
    "profondita_cm": 199,
    "descrizione": "Letto da giardino rotondo a 2 posti in resina riciclata e cuscini bianchi in poliestere riciclato"
  },
  {
    "nome": "Divano angolare trasformabile grigio a 3/4 posti",
    "categoria": "Divani",
    "prezzo": 659,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/252890/divano-angolare-trasformabile-grigio-a-3-4-posti.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-angolare-trasformabile-grigio-a-3-4-posti-252890.htm",
    "larghezza_cm": 238,
    "profondita_cm": 160,
    "descrizione": "Divano angolare trasformabile grigio a 3/4 posti"
  },
  {
    "nome": "Lampada da terra 5 bracci in metallo cromato alt.198 cm",
    "categoria": "Lampade",
    "prezzo": 129,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/lampada-da-terra-5-bracci-in-metallo-cromato-alt-198-cm-1000-10-6-110952_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/lampada-da-terra-5-bracci-in-metallo-cromato-alt-198-cm-110952.htm",
    "larghezza_cm": 35,
    "profondita_cm": 130,
    "descrizione": "Lampada da terra 5 bracci in metallo cromato alt.198 cm"
  },
  {
    "nome": "Lotto di 3 - Bottoniera con fiori secchi terracotta e beige",
    "categoria": "Decorazioni",
    "prezzo": 8.97,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/251481/bottoniera-con-fiori-secchi-terracotta-e-beige.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/bottoniera-con-fiori-secchi-terracotta-e-beige-251481.htm",
    "larghezza_cm": 10,
    "profondita_cm": 9,
    "descrizione": "Bottoniera con fiori secchi terracotta e beige"
  },
  {
    "nome": "Vaso in gres beige, alt. 20 cm",
    "categoria": "Decorazioni",
    "prezzo": 19.99,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/254184/vaso-in-gres-beige-alt-20-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/vaso-in-gres-beige-alt-20-cm-254184.htm",
    "larghezza_cm": 13.8,
    "profondita_cm": 13.8,
    "descrizione": "Vaso in gres beige, alt. 20 cm"
  },
  {
    "nome": "Chamarel - Armadio a 2 ante color albicocca",
    "categoria": "Armadi",
    "prezzo": 519,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/armadio-a-2-ante-color-albicocca-1000-13-3-241821_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/armadio-a-2-ante-color-albicocca-chamarel-241821.htm",
    "larghezza_cm": 90,
    "profondita_cm": 50,
    "descrizione": "Armadio a 2 ante color albicocca"
  },
  {
    "nome": "Lotto di 2 - Tazza da viaggio in vetro trasparente con cannuccia e coperchio in bambù",
    "categoria": "Cucina",
    "prezzo": 11.98,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tazza-da-viaggio-in-vetro-trasparente-con-cannuccia-e-coperchio-in-bambu-1000-0-26-248404_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tazza-da-viaggio-in-vetro-trasparente-con-cannuccia-e-coperchio-in-bambu-248404.htm",
    "larghezza_cm": 8,
    "profondita_cm": 8,
    "descrizione": "Tazza da viaggio in vetro trasparente con cannuccia e coperchio in bambù"
  },
  {
    "nome": "Vassoio rettangolare in mango",
    "categoria": "Cucina",
    "prezzo": 29.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/vassoio-rettangolare-in-mango-1000-14-34-248248_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/vassoio-rettangolare-in-mango-248248.htm",
    "larghezza_cm": 48,
    "profondita_cm": 32,
    "descrizione": "Vassoio rettangolare in mango"
  },
  {
    "nome": "Squash - Poltrona in tessuto écru effetto lana bouclé",
    "categoria": "Divani",
    "prezzo": 199,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltrona-in-tessuto-ecru-effetto-lana-boucle-1000-10-5-238707_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-in-tessuto-ecru-effetto-lana-boucle-squash-238707.htm",
    "larghezza_cm": 74,
    "profondita_cm": 76.5,
    "descrizione": "Poltrona in tessuto écru effetto lana bouclé"
  },
  {
    "nome": "Menai - Tavolo da pranzo per 4/6 persone in massello di mango nero Ø 140 cm",
    "categoria": "Tavoli da pranzo",
    "prezzo": 769,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tavolo-da-pranzo-per-4-6-persone-in-massello-di-mango-nero-oe-140-cm-1000-8-28-209907_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tavolo-da-pranzo-per-4-6-persone-in-massello-di-mango-nero-oe-140-cm-menai-209907.htm",
    "larghezza_cm": 140,
    "profondita_cm": 140,
    "descrizione": "Tavolo da pranzo per 4/6 persone in massello di mango nero Ø 140 cm"
  },
  {
    "nome": "Mauricette - Sedia in tessuto écru effetto lana bouclé",
    "categoria": "Sedie",
    "prezzo": 79.99,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/249710/sedia-in-tessuto-ecru-effetto-lana-boucle.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-in-tessuto-ecru-effetto-lana-boucle-mauricette-249710.htm",
    "larghezza_cm": 50.5,
    "profondita_cm": 54.5,
    "descrizione": "Sedia in tessuto écru effetto lana bouclé"
  },
  {
    "nome": "Stockholm - Comò doppio 6 cassetti in massello di legno di sheesham 165 cm",
    "categoria": "Cassettiere",
    "prezzo": 969,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/138897_0/como-doppio-6-cassetti-in-massello-di-legno-di-sheesham-165-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/como-doppio-6-cassetti-in-massello-di-legno-di-sheesham-165-cm-stockholm-138897.htm",
    "larghezza_cm": 165,
    "profondita_cm": 45,
    "descrizione": "Comò doppio 6 cassetti in massello di legno di sheesham 165 cm"
  },
  {
    "nome": "Versailles - Scala per libreria decorativa in legno massello di frassino",
    "categoria": "Librerie",
    "prezzo": 129,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/scala-per-libreria-decorativa-in-legno-massello-di-frassino-1000-13-9-175079_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/scala-per-libreria-decorativa-in-legno-massello-di-frassino-versailles-175079.htm",
    "larghezza_cm": 34,
    "profondita_cm": 7,
    "descrizione": "Scala per libreria decorativa in legno massello di frassino"
  },
  {
    "nome": "Axelle - Madia vintage a 2 ante e 3 cassetti 160,6 cm",
    "categoria": "Credenze",
    "prezzo": 449,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/madia-vintage-a-2-ante-e-3-cassetti-160-6-cm-1000-16-28-248488_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/madia-vintage-a-2-ante-e-3-cassetti-160-6-cm-axelle-248488.htm",
    "larghezza_cm": 160.6,
    "profondita_cm": 40,
    "descrizione": "Madia vintage a 2 ante e 3 cassetti 160,6 cm"
  },
  {
    "nome": "Sixties - Letto vintage in legno 140x190 cm con rete a doghe",
    "categoria": "Letti",
    "prezzo": 249,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/248583_0/letto-vintage-in-legno-140x190-cm-con-rete-a-doghe.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/letto-vintage-in-legno-140x190-cm-con-rete-a-doghe-sixties-248583.htm",
    "larghezza_cm": 140,
    "profondita_cm": 190,
    "descrizione": "Letto vintage in legno 140x190 cm con rete a doghe"
  },
  {
    "nome": "Louvain - Divano trasformabile a 3/4 posti in tessuto beige effetto lino, materasso 10 cm",
    "categoria": "Divani",
    "prezzo": 1199,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-trasformabile-a-3-4-posti-in-tessuto-beige-effetto-lino-materasso-10-cm-1000-1-30-242217_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-trasformabile-a-3-4-posti-in-tessuto-beige-effetto-lino-materasso-10-cm-louvain-242217.htm",
    "larghezza_cm": 230,
    "profondita_cm": 98,
    "descrizione": "Divano trasformabile a 3/4 posti in tessuto beige effetto lino, materasso 10 cm"
  },
  {
    "nome": "Tela dipinta di bianco, 100x100 cm",
    "categoria": "Decorazioni",
    "prezzo": 129,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tela-dipinta-di-bianco-100x100-cm-1000-13-30-211221_5.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tela-dipinta-di-bianco-100x100-cm-211221.htm",
    "larghezza_cm": 100,
    "profondita_cm": 4.4,
    "descrizione": "Tela dipinta di bianco, 100x100 cm"
  },
  {
    "nome": "Lampada a sospensione ariosa in ferro dorato",
    "categoria": "Lampade",
    "prezzo": 119,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/lampada-a-sospensione-ariosa-in-ferro-dorato-1000-16-22-240651_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/lampada-a-sospensione-ariosa-in-ferro-dorato-240651.htm",
    "larghezza_cm": 60.5,
    "profondita_cm": 60.5,
    "descrizione": "Lampada a sospensione ariosa in ferro dorato"
  },
  {
    "nome": "Vaso grande in resina bianco sporco H80",
    "categoria": "Decorazioni",
    "prezzo": 119,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/vaso-grande-in-resina-bianco-sporco-h80-1000-7-3-243379_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/vaso-grande-in-resina-bianco-sporco-h80-243379.htm",
    "larghezza_cm": 31.5,
    "profondita_cm": 31,
    "descrizione": "Vaso grande in resina bianco sporco H80"
  },
  {
    "nome": "Persiennes - Guardaroba in mango e acacia 190 cm",
    "categoria": "Armadi",
    "prezzo": 2299,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/115719_0/guardaroba-in-mango-e-acacia-190-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/guardaroba-in-mango-e-acacia-190-cm-persiennes-115719.htm",
    "larghezza_cm": 190,
    "profondita_cm": 60,
    "descrizione": "Guardaroba in mango e acacia 190 cm"
  },
  {
    "nome": "Portafrutta in metallo nero opaco",
    "categoria": "Cucina",
    "prezzo": 16.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/portafrutta-in-metallo-nero-opaco-1000-4-0-243376_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/portafrutta-in-metallo-nero-opaco-243376.htm",
    "larghezza_cm": 24.5,
    "profondita_cm": 24.5,
    "descrizione": "Portafrutta in metallo nero opaco"
  },
  {
    "nome": "Arizona - Divano club 2 posti in microsuede marrone",
    "categoria": "Divani",
    "prezzo": 599,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-club-2-posti-in-microsuede-marrone-1000-11-8-50180441_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-club-2-posti-in-microsuede-marrone-arizona-50180441.htm",
    "larghezza_cm": 142,
    "profondita_cm": 92,
    "descrizione": "Divano club 2 posti in microsuede marrone"
  },
  {
    "nome": "Tarifa - Tavolo da pranzo vintage per 4/6 persone lung. 160 cm",
    "categoria": "Tavoli da pranzo",
    "prezzo": 379,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tavolo-da-pranzo-vintage-per-4-6-persone-lung-160-cm-1000-14-37-217665_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tavolo-da-pranzo-vintage-per-4-6-persone-lung-160-cm-tarifa-217665.htm",
    "larghezza_cm": 160,
    "profondita_cm": 90,
    "descrizione": "Tavolo da pranzo vintage per 4/6 persone lung. 160 cm"
  },
  {
    "nome": "Perseus - Madia a 2 ante in legno massello di mango e rattan 100 cm",
    "categoria": "Credenze",
    "prezzo": 479.2,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/madia-a-2-ante-in-legno-massello-di-mango-e-rattan-100-cm-1000-16-19-242657_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/madia-a-2-ante-in-legno-massello-di-mango-e-rattan-100-cm-perseus-242657.htm",
    "larghezza_cm": 100,
    "profondita_cm": 45,
    "descrizione": "Madia a 2 ante in legno massello di mango e rattan 100 cm"
  },
  {
    "nome": "Barcelone - Divano bianco in lino slavato 3/4 posti",
    "categoria": "Divani",
    "prezzo": 1159,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-bianco-in-lino-slavato-3-4-posti-1000-5-39-241898_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-bianco-in-lino-slavato-3-4-posti-barcelone-241898.htm",
    "larghezza_cm": 207,
    "profondita_cm": 90,
    "descrizione": "Divano bianco in lino slavato 3/4 posti"
  },
  {
    "nome": "Decorazione murale a forma di bicicletta, realizzata in legno di abete e acciaio nero, 76x50 cm.",
    "categoria": "Decorazioni",
    "prezzo": 39.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/decorazione-murale-a-forma-di-bicicletta-realizzata-in-legno-di-abete-e-acciaio-nero-76x50-cm-1000-8-18-185461_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/decorazione-murale-a-forma-di-bicicletta-realizzata-in-legno-di-abete-e-acciaio-nero-76x50-cm-185461.htm",
    "larghezza_cm": 75.5,
    "profondita_cm": 9.2,
    "descrizione": "Decorazione murale a forma di bicicletta, realizzata in legno di abete e acciaio nero, 76x50 cm."
  },
  {
    "nome": "Stelo foglie artificiali dorate alt. 91cm",
    "categoria": "Altri mobili",
    "prezzo": 9.99,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/248508/stelo-foglie-artificiali-dorate-alt-91cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/stelo-foglie-artificiali-dorate-alt-91cm-248508.htm",
    "larghezza_cm": 14,
    "profondita_cm": 12,
    "descrizione": "Stelo foglie artificiali dorate alt. 91cm"
  },
  {
    "nome": "Armadio bianco a 1 anta lung. 70 cm",
    "categoria": "Armadi",
    "prezzo": 399,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/252096/armadio-bianco-a-1-anta-lung-70-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/armadio-bianco-a-1-anta-lung-70-cm-252096.htm",
    "larghezza_cm": 70,
    "profondita_cm": 54,
    "descrizione": "Armadio bianco a 1 anta lung. 70 cm"
  },
  {
    "nome": "Lotto di 6 - Bicchiere in vetro sfumato trasparente e color ambra brillante",
    "categoria": "Cucina",
    "prezzo": 29.94,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/bicchiere-in-vetro-sfumato-trasparente-e-color-ambra-brillante-1000-12-10-238794_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/bicchiere-in-vetro-sfumato-trasparente-e-color-ambra-brillante-238794.htm",
    "larghezza_cm": 9,
    "profondita_cm": 9,
    "descrizione": "Bicchiere in vetro sfumato trasparente e color ambra brillante"
  },
  {
    "nome": "Hana - Tavolo da pranzo ovale listelli in legno di mango 8/10 persone, L.220",
    "categoria": "Tavoli da pranzo",
    "prezzo": 879,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tavolo-da-pranzo-ovale-listelli-in-legno-di-mango-8-10-persone-l-220-1000-9-14-199028_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tavolo-da-pranzo-ovale-listelli-in-legno-di-mango-8-10-persone-l-220-hana-199028.htm",
    "larghezza_cm": 220,
    "profondita_cm": 100,
    "descrizione": "Tavolo da pranzo ovale listelli in legno di mango 8/10 persone, L.220"
  },
  {
    "nome": "Aureus - Cassettiera doppia con 6 cassetti in legno di mango e alluminio color ottone, L140",
    "categoria": "Cassettiere",
    "prezzo": 899,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/cassettiera-doppia-con-6-cassetti-in-legno-di-mango-e-alluminio-color-ottone-l140-1000-10-30-242668_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/cassettiera-doppia-con-6-cassetti-in-legno-di-mango-e-alluminio-color-ottone-l140-aureus-242668.htm",
    "larghezza_cm": 140,
    "profondita_cm": 45,
    "descrizione": "Cassettiera doppia con 6 cassetti in legno di mango e alluminio color ottone, L140"
  },
  {
    "nome": "Quadro su tela verde con ricamo bianco 130x70 cm",
    "categoria": "Decorazioni",
    "prezzo": 149,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/254912/quadro-su-tela-verde-con-ricamo-bianco-130x70-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/quadro-su-tela-verde-con-ricamo-bianco-130x70-cm-254912.htm",
    "larghezza_cm": 130,
    "profondita_cm": 2.5,
    "descrizione": "Quadro su tela verde con ricamo bianco 130x70 cm"
  },
  {
    "nome": "Lampada a sospensione 15 globi in vetro borosilicato ambra",
    "categoria": "Lampade",
    "prezzo": 139,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/lampada-a-sospensione-15-globi-in-vetro-borosilicato-ambra-1000-10-20-244011_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/lampada-a-sospensione-15-globi-in-vetro-borosilicato-ambra-244011.htm",
    "larghezza_cm": 35,
    "profondita_cm": 35,
    "descrizione": "Lampada a sospensione 15 globi in vetro borosilicato ambra"
  },
  {
    "nome": "Persiennes - Guardaroba a 3 ante in mango 143 cm",
    "categoria": "Armadi",
    "prezzo": 2099,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/guardaroba-a-3-ante-in-mango-143-cm-1000-12-12-166595_5.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/guardaroba-a-3-ante-in-mango-143-cm-persiennes-166595.htm",
    "larghezza_cm": 143,
    "profondita_cm": 60,
    "descrizione": "Guardaroba a 3 ante in mango 143 cm"
  },
  {
    "nome": "Dispenser per sapone e portaspugna in dolomite blu",
    "categoria": "Cucina",
    "prezzo": 9.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/dispenser-per-sapone-e-portaspugna-in-dolomite-blu-1000-11-8-248755_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/dispenser-per-sapone-e-portaspugna-in-dolomite-blu-248755.htm",
    "larghezza_cm": 10.3,
    "profondita_cm": 10.3,
    "descrizione": "Dispenser per sapone e portaspugna in dolomite blu"
  },
  {
    "nome": "Barnaby - Divano letto 3/4 posti angolare sinistro grigio chiaro screziato",
    "categoria": "Divani",
    "prezzo": 1199,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-letto-3-4-posti-angolare-sinistro-grigio-chiaro-screziato-1000-8-26-247953_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-letto-3-4-posti-angolare-sinistro-grigio-chiaro-screziato-barnaby-247953.htm",
    "larghezza_cm": 238,
    "profondita_cm": 169.5,
    "descrizione": "Divano letto 3/4 posti angolare sinistro grigio chiaro screziato"
  },
  {
    "nome": "Janeiro - Madia vintage in legno blu 127 cm",
    "categoria": "Credenze",
    "prezzo": 469,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/madia-vintage-in-legno-blu-127-cm-1000-3-22-155740_6.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/madia-vintage-in-legno-blu-127-cm-janeiro-155740.htm",
    "larghezza_cm": 127,
    "profondita_cm": 42,
    "descrizione": "Madia vintage in legno blu 127 cm"
  },
  {
    "nome": "Yasmi - Libreria per bambini verde abete",
    "categoria": "Librerie",
    "prezzo": 48.95,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/libreria-per-bambini-verde-abete-1000-15-22-241840_5.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/libreria-per-bambini-verde-abete-yasmi-241840.htm",
    "larghezza_cm": 59.5,
    "profondita_cm": 33,
    "descrizione": "Libreria per bambini verde abete"
  },
  {
    "nome": "Gustavia - Comò con 4 cassetti verde kaki e metallo dorato 100 cm",
    "categoria": "Cassettiere",
    "prezzo": 479,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/234463_0/como-con-4-cassetti-verde-kaki-e-metallo-dorato-100-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/como-con-4-cassetti-verde-kaki-e-metallo-dorato-100-cm-gustavia-234463.htm",
    "larghezza_cm": 100,
    "profondita_cm": 46,
    "descrizione": "Comò con 4 cassetti verde kaki e metallo dorato 100 cm"
  },
  {
    "nome": "Portacandela in vetro e fiori secchi",
    "categoria": "Decorazioni",
    "prezzo": 7.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/portacandela-in-vetro-e-fiori-secchi-1000-11-11-225142_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/portacandela-in-vetro-e-fiori-secchi-225142.htm",
    "larghezza_cm": 8,
    "profondita_cm": 8,
    "descrizione": "Portacandela in vetro e fiori secchi"
  },
  {
    "nome": "Malaga - Armadio a 2 ante in rattan",
    "categoria": "Armadi",
    "prezzo": 799,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/armadio-a-2-ante-in-rattan-1000-1-38-215493_2.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/armadio-a-2-ante-in-rattan-malaga-215493.htm",
    "larghezza_cm": 93,
    "profondita_cm": 50,
    "descrizione": "Armadio a 2 ante in rattan"
  },
  {
    "nome": "Lotto di 6 - Bicchiere in vetro cromato e trasparente",
    "categoria": "Cucina",
    "prezzo": 29.94,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/bicchiere-in-vetro-cromato-e-trasparente-1000-0-32-146115_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/bicchiere-in-vetro-cromato-e-trasparente-146115.htm",
    "larghezza_cm": 7,
    "profondita_cm": 7,
    "descrizione": "Bicchiere in vetro cromato e trasparente"
  },
  {
    "nome": "Chesterfield - Divano trasformabile 3 posti in pelle marrone",
    "categoria": "Divani",
    "prezzo": 1999,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-trasformabile-3-posti-in-pelle-marrone-1000-8-11-241952_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-trasformabile-3-posti-in-pelle-marrone-chesterfield-241952.htm",
    "larghezza_cm": 215,
    "profondita_cm": 93,
    "descrizione": "Divano trasformabile 3 posti in pelle marrone"
  },
  {
    "nome": "Cezanne - Tavolo da pranzo estensibile in massello di mango per 10 persone lung. 160/240cm",
    "categoria": "Tavoli da pranzo",
    "prezzo": 739,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tavolo-da-pranzo-estensibile-in-massello-di-mango-per-10-persone-lung-160-240cm-1000-7-6-230221_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tavolo-da-pranzo-estensibile-in-massello-di-mango-per-10-persone-lung-160-240cm-cezanne-230221.htm",
    "larghezza_cm": 160,
    "profondita_cm": 90,
    "descrizione": "Tavolo da pranzo estensibile in massello di mango per 10 persone lung. 160/240cm"
  },
  {
    "nome": "Mauricette - Sedia vintage in tessuto riciclato verde e acciaio effetto rovere",
    "categoria": "Sedie",
    "prezzo": 69.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-vintage-in-tessuto-riciclato-verde-e-acciaio-effetto-rovere-1000-12-34-242959_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-vintage-in-tessuto-riciclato-verde-e-acciaio-effetto-rovere-mauricette-242959.htm",
    "larghezza_cm": 50.5,
    "profondita_cm": 54.5,
    "descrizione": "Sedia vintage in tessuto riciclato verde e acciaio effetto rovere"
  },
  {
    "nome": "Portobello - Comò vintage con 5 cassetti 100 cm",
    "categoria": "Cassettiere",
    "prezzo": 649,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/249905_0/como-vintage-con-5-cassetti-100-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/como-vintage-con-5-cassetti-100-cm-portobello-249905.htm",
    "larghezza_cm": 100,
    "profondita_cm": 45,
    "descrizione": "Comò vintage con 5 cassetti 100 cm"
  },
  {
    "nome": "Spiga - Madia vintage a 4 ante 198 cm",
    "categoria": "Credenze",
    "prezzo": 999,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/madia-vintage-a-4-ante-198-cm-1000-1-5-199224_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/madia-vintage-a-4-ante-198-cm-spiga-199224.htm",
    "larghezza_cm": 198,
    "profondita_cm": 45,
    "descrizione": "Madia vintage a 4 ante 198 cm"
  },
  {
    "nome": "Sixties - Letto vintage in legno 180x200 cm con rete a doghe",
    "categoria": "Letti",
    "prezzo": 399,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/letto-vintage-in-legno-180x200-cm-con-rete-a-doghe-1000-7-39-248581_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/letto-vintage-in-legno-180x200-cm-con-rete-a-doghe-sixties-248581.htm",
    "larghezza_cm": 180,
    "profondita_cm": 200,
    "descrizione": "Letto vintage in legno 180x200 cm con rete a doghe"
  },
  {
    "nome": "Lilo - Divano a 2 posti in velluto effetto invecchiato verde kaki",
    "categoria": "Divani",
    "prezzo": 999,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/238682_0/divano-a-2-posti-in-velluto-effetto-invecchiato-verde-kaki.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-a-2-posti-in-velluto-effetto-invecchiato-verde-kaki-lilo-238682.htm",
    "larghezza_cm": 206,
    "profondita_cm": 102,
    "descrizione": "Divano a 2 posti in velluto effetto invecchiato verde kaki"
  },
  {
    "nome": "Lampada a sospensione con 14 globi in vetro fumé e metallo nero",
    "categoria": "Lampade",
    "prezzo": 259,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/lampada-a-sospensione-con-14-globi-in-vetro-fume-e-metallo-nero-1000-12-38-210778_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/lampada-a-sospensione-con-14-globi-in-vetro-fume-e-metallo-nero-210778.htm",
    "larghezza_cm": 141.8,
    "profondita_cm": 28,
    "descrizione": "Lampada a sospensione con 14 globi in vetro fumé e metallo nero"
  },
  {
    "nome": "Bouquet di Lagurus ovatus essiccatI blu",
    "categoria": "Decorazioni",
    "prezzo": 12.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/bouquet-di-lagurus-ovatus-essiccati-blu-1000-2-17-249953_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/bouquet-di-lagurus-ovatus-essiccati-blu-249953.htm",
    "larghezza_cm": 10,
    "profondita_cm": 10,
    "descrizione": "Bouquet di Lagurus ovatus essiccatI blu"
  },
  {
    "nome": "Armadio a 2 ante 104 cm",
    "categoria": "Armadi",
    "prezzo": 1299,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/249491/armadio-a-2-ante-104-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/armadio-a-2-ante-104-cm-249491.htm",
    "larghezza_cm": 104,
    "profondita_cm": 59,
    "descrizione": "Armadio a 2 ante 104 cm"
  },
  {
    "nome": "Barattolo in vetro con coperchio e cucchiaio in legno di acacia",
    "categoria": "Cucina",
    "prezzo": 12.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/barattolo-in-vetro-con-coperchio-e-cucchiaio-in-legno-di-acacia-1000-10-28-222863_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/barattolo-in-vetro-con-coperchio-e-cucchiaio-in-legno-di-acacia-222863.htm",
    "larghezza_cm": 12,
    "profondita_cm": 12,
    "descrizione": "Barattolo in vetro con coperchio e cucchiaio in legno di acacia"
  },
  {
    "nome": "Insalatiera in legno d'acacia Ø 18 cm",
    "categoria": "Cucina",
    "prezzo": 24.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/insalatiera-in-legno-d-acacia-oe-18-cm-1000-4-8-247320_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/insalatiera-in-legno-d-acacia-oe-18-cm-247320.htm",
    "larghezza_cm": 25,
    "profondita_cm": 25,
    "descrizione": "Insalatiera in legno d'acacia Ø 18 cm"
  },
  {
    "nome": "Lilo - Divano 2 posti in tessuto grigio chiaro",
    "categoria": "Divani",
    "prezzo": 999,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-2-posti-in-tessuto-grigio-chiaro-1000-10-35-243042_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-2-posti-in-tessuto-grigio-chiaro-lilo-243042.htm",
    "larghezza_cm": 206,
    "profondita_cm": 102,
    "descrizione": "Divano 2 posti in tessuto grigio chiaro"
  },
  {
    "nome": "Poltrona in rattan con cuscini verdi",
    "categoria": "Divani",
    "prezzo": 263.2,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/252656/poltrona-in-rattan-con-cuscini-verdi.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-in-rattan-con-cuscini-verdi-252656.htm",
    "larghezza_cm": 63,
    "profondita_cm": 65.5,
    "descrizione": "Poltrona in rattan con cuscini verdi"
  },
  {
    "nome": "Metropolis Business - Tavolo da pranzo professionale industriale in legno di mango chiaro, 75 cm",
    "categoria": "Tavoli da pranzo",
    "prezzo": 329,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tavolo-da-pranzo-professionale-industriale-in-legno-di-mango-chiaro-75-cm-1000-6-23-178455_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tavolo-da-pranzo-professionale-industriale-in-legno-di-mango-chiaro-75-cm-metropolis-business-178455.htm",
    "larghezza_cm": 75,
    "profondita_cm": 75,
    "descrizione": "Tavolo da pranzo professionale industriale in legno di mango chiaro, 75 cm"
  },
  {
    "nome": "Clyde - Sedia in tessuto riciclato verde acqua e gambe in acciaio effetto rovere",
    "categoria": "Sedie",
    "prezzo": 45.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-in-tessuto-riciclato-verde-acqua-e-gambe-in-acciaio-effetto-rovere-1000-8-14-238552_7.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-in-tessuto-riciclato-verde-acqua-e-gambe-in-acciaio-effetto-rovere-clyde-238552.htm",
    "larghezza_cm": 44,
    "profondita_cm": 54.5,
    "descrizione": "Sedia in tessuto riciclato verde acqua e gambe in acciaio effetto rovere"
  },
  {
    "nome": "Ormond - Comò con 3 cassetti 110 cm",
    "categoria": "Cassettiere",
    "prezzo": 559.2,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/como-con-3-cassetti-110-cm-1000-9-10-220057_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/como-con-3-cassetti-110-cm-ormond-220057.htm",
    "larghezza_cm": 110,
    "profondita_cm": 45,
    "descrizione": "Comò con 3 cassetti 110 cm"
  },
  {
    "nome": "Cassettiera con 2 cassetti e 2 ante, verde salvia, lung. 75 cm",
    "categoria": "Cassettiere",
    "prezzo": 249,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/253644_0/cassettiera-con-2-cassetti-e-2-ante-verde-salvia-lung-75-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/cassettiera-con-2-cassetti-e-2-ante-verde-salvia-lung-75-cm-253644.htm",
    "larghezza_cm": 75,
    "profondita_cm": 40,
    "descrizione": "Cassettiera con 2 cassetti e 2 ante, verde salvia, lung. 75 cm"
  },
  {
    "nome": "Amsterdam - Letto a baldacchino in legno 160x200 cm con rete a doghe",
    "categoria": "Letti",
    "prezzo": 849,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/248607/letto-a-baldacchino-in-legno-160x200-cm-con-rete-a-doghe.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/letto-a-baldacchino-in-legno-160x200-cm-con-rete-a-doghe-amsterdam-248607.htm",
    "larghezza_cm": 168,
    "profondita_cm": 217.2,
    "descrizione": "Letto a baldacchino in legno 160x200 cm con rete a doghe"
  },
  {
    "nome": "Barack - Divano 4 posti in velluto verde scuro",
    "categoria": "Divani",
    "prezzo": 1199,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/241894_0/divano-4-posti-in-velluto-verde-scuro.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-4-posti-in-velluto-verde-scuro-barack-241894.htm",
    "larghezza_cm": 245,
    "profondita_cm": 103,
    "descrizione": "Divano 4 posti in velluto verde scuro"
  },
  {
    "nome": "Bouquet di rami secchi marroni",
    "categoria": "Decorazioni",
    "prezzo": 8.99,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/251488/bouquet-di-rami-secchi-marroni.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/bouquet-di-rami-secchi-marroni-251488.htm",
    "larghezza_cm": 9,
    "profondita_cm": 9,
    "descrizione": "Bouquet di rami secchi marroni"
  },
  {
    "nome": "Sanary - Armadio a 3 ante a battente e 4 cassetti bianco e paglia di Vienna lung. 140 cm",
    "categoria": "Armadi",
    "prezzo": 1899,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/armadio-a-3-ante-a-battente-e-4-cassetti-bianco-e-paglia-di-vienna-lung-140-cm-1000-12-8-230141_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/armadio-a-3-ante-a-battente-e-4-cassetti-bianco-e-paglia-di-vienna-lung-140-cm-sanary-230141.htm",
    "larghezza_cm": 140,
    "profondita_cm": 55,
    "descrizione": "Armadio a 3 ante a battente e 4 cassetti bianco e paglia di Vienna lung. 140 cm"
  },
  {
    "nome": "Set bicchieri da birra (x6) con sottobicchieri e vassoio in legno di eucalipto",
    "categoria": "Cucina",
    "prezzo": 39.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/set-bicchieri-da-birra-x6-con-sottobicchieri-e-vassoio-in-legno-di-eucalipto-1000-5-7-229607_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/set-bicchieri-da-birra-x6-con-sottobicchieri-e-vassoio-in-legno-di-eucalipto-229607.htm",
    "larghezza_cm": 27,
    "profondita_cm": 23.5,
    "descrizione": "Set bicchieri da birra (x6) con sottobicchieri e vassoio in legno di eucalipto"
  },
  {
    "nome": "Tokyo - Divano a 3/4 posti grigio chiaro",
    "categoria": "Divani",
    "prezzo": 999,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-a-3-4-posti-grigio-chiaro-1000-12-20-241633_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-a-3-4-posti-grigio-chiaro-tokyo-241633.htm",
    "larghezza_cm": 240,
    "profondita_cm": 96,
    "descrizione": "Divano a 3/4 posti grigio chiaro"
  },
  {
    "nome": "Nogobo Business - Tavolo da pranzo professionale in legno massello di mango per 2 persone Ø 70 cm",
    "categoria": "Tavoli da pranzo",
    "prezzo": 449,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tavolo-da-pranzo-professionale-in-legno-massello-di-mango-per-2-persone-oe-70-cm-1000-8-9-238875_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tavolo-da-pranzo-professionale-in-legno-massello-di-mango-per-2-persone-oe-70-cm-nogobo-business-238875.htm",
    "larghezza_cm": 70,
    "profondita_cm": 70,
    "descrizione": "Tavolo da pranzo professionale in legno massello di mango per 2 persone Ø 70 cm"
  },
  {
    "nome": "Ginette - Sedia in velluto verde foresta",
    "categoria": "Sedie",
    "prezzo": 89.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-in-velluto-verde-foresta-1000-4-5-209597_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-in-velluto-verde-foresta-ginette-209597.htm",
    "larghezza_cm": 49.5,
    "profondita_cm": 55,
    "descrizione": "Sedia in velluto verde foresta"
  },
  {
    "nome": "Sweet - Cassettiera fasciatoio stile scandivano a 4 cassetti bianca",
    "categoria": "Divani",
    "prezzo": 399,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/cassettiera-fasciatoio-stile-scandivano-a-4-cassetti-bianca-1000-0-20-243355_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/cassettiera-fasciatoio-stile-scandivano-a-4-cassetti-bianca-sweet-243355.htm",
    "larghezza_cm": 85.6,
    "profondita_cm": 72.3,
    "descrizione": "Cassettiera fasciatoio stile scandivano a 4 cassetti bianca"
  },
  {
    "nome": "Letto in legno di pino 160x200 cm con rete a doghe",
    "categoria": "Letti",
    "prezzo": 499,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/252611_0/letto-in-legno-di-pino-160x200-cm-con-rete-a-doghe.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/letto-in-legno-di-pino-160x200-cm-con-rete-a-doghe-252611.htm",
    "larghezza_cm": 169.5,
    "profondita_cm": 212.6,
    "descrizione": "Letto in legno di pino 160x200 cm con rete a doghe"
  },
  {
    "nome": "Asciugamano in cotone biologico a quadretti colorati 30x50 cm",
    "categoria": "Tessile",
    "prezzo": 5.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/asciugamano-in-cotone-biologico-a-quadretti-colorati-30x50-cm-1000-10-5-247768_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/asciugamano-in-cotone-biologico-a-quadretti-colorati-30x50-cm-247768.htm",
    "larghezza_cm": 30,
    "profondita_cm": 50,
    "descrizione": "Asciugamano in cotone biologico a quadretti colorati 30x50 cm"
  },
  {
    "nome": "Boldin Business - Guardaroba professionale a 2 ante retroilluminato",
    "categoria": "Armadi",
    "prezzo": 1299,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/guardaroba-professionale-a-2-ante-retroilluminato-1000-10-0-209756_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/guardaroba-professionale-a-2-ante-retroilluminato-boldin-business-209756.htm",
    "larghezza_cm": 104.7,
    "profondita_cm": 50,
    "descrizione": "Guardaroba professionale a 2 ante retroilluminato"
  },
  {
    "nome": "Lilo - Divano a 2 posti in tessuto bouclé blu notte",
    "categoria": "Divani",
    "prezzo": 999,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-a-2-posti-in-tessuto-boucle-blu-notte-1000-15-17-238678_5.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-a-2-posti-in-tessuto-boucle-blu-notte-lilo-238678.htm",
    "larghezza_cm": 206,
    "profondita_cm": 102,
    "descrizione": "Divano a 2 posti in tessuto bouclé blu notte"
  },
  {
    "nome": "Tradition - Sedia bistrot in faggio e bambù",
    "categoria": "Sedie",
    "prezzo": 99.99,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/230987_0/sedia-bistrot-in-faggio-e-bambu.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-bistrot-in-faggio-e-bambu-tradition-230987.htm",
    "larghezza_cm": 49,
    "profondita_cm": 56,
    "descrizione": "Sedia bistrot in faggio e bambù"
  },
  {
    "nome": "Magnus - Madia a 4 ante con impiallacciatura in rovere 220 cm",
    "categoria": "Credenze",
    "prezzo": 999,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/187068_0/madia-a-4-ante-con-impiallacciatura-in-rovere-220-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/madia-a-4-ante-con-impiallacciatura-in-rovere-220-cm-magnus-187068.htm",
    "larghezza_cm": 220,
    "profondita_cm": 45,
    "descrizione": "Madia a 4 ante con impiallacciatura in rovere 220 cm"
  },
  {
    "nome": "Lenox - Madia 3 ante in massello di mango e ferro 160 cm",
    "categoria": "Credenze",
    "prezzo": 579,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/madia-3-ante-in-massello-di-mango-e-ferro-160-cm-1000-0-34-147101_0.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/madia-3-ante-in-massello-di-mango-e-ferro-160-cm-lenox-147101.htm",
    "larghezza_cm": 160,
    "profondita_cm": 45,
    "descrizione": "Madia 3 ante in massello di mango e ferro 160 cm"
  },
  {
    "nome": "Letto in acciaio beige 160x200 con rete a doghe in legno di pioppo",
    "categoria": "Letti",
    "prezzo": 239.2,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/252715/letto-in-acciaio-beige-160x200-con-rete-a-doghe-in-legno-di-pioppo.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/letto-in-acciaio-beige-160x200-con-rete-a-doghe-in-legno-di-pioppo-252715.htm",
    "larghezza_cm": 168,
    "profondita_cm": 211,
    "descrizione": "Letto in acciaio beige 160x200 con rete a doghe in legno di pioppo"
  },
  {
    "nome": "Loreto - Armadio 3 ante a battente nero, paglia di Vienna e metallo color ottone 129 cm",
    "categoria": "Armadi",
    "prezzo": 1369,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/armadio-3-ante-a-battente-nero-paglia-di-vienna-e-metallo-color-ottone-129-cm-1000-1-31-230861_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/armadio-3-ante-a-battente-nero-paglia-di-vienna-e-metallo-color-ottone-129-cm-loreto-230861.htm",
    "larghezza_cm": 129,
    "profondita_cm": 55,
    "descrizione": "Armadio 3 ante a battente nero, paglia di Vienna e metallo color ottone 129 cm"
  },
  {
    "nome": "Lotto di 6 - Bicchiere in vetro grigio CASSIOPEA",
    "categoria": "Cucina",
    "prezzo": 23.94,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/bicchiere-in-vetro-grigio-cassiopea-1000-10-5-154370_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/bicchiere-in-vetro-grigio-cassiopea-154370.htm",
    "larghezza_cm": 8.5,
    "profondita_cm": 8.5,
    "descrizione": "Bicchiere in vetro grigio CASSIOPEA"
  },
  {
    "nome": "Poltrona in tessuto jacquard con motivo zebrato bianco e nero e gambe in legno massello di hevea",
    "categoria": "Divani",
    "prezzo": 279,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/254790/poltrona-in-tessuto-jacquard-con-motivo-zebrato-bianco-e-nero-e-gambe-in-legno-massello-di-hevea.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-in-tessuto-jacquard-con-motivo-zebrato-bianco-e-nero-e-gambe-in-legno-massello-di-hevea-254790.htm",
    "larghezza_cm": 66.5,
    "profondita_cm": 73.5,
    "descrizione": "Poltrona in tessuto jacquard con motivo zebrato bianco e nero e gambe in legno massello di hevea"
  },
  {
    "nome": "Alegro - Tavolo da pranzo per 6/8 persone lung. 200 cm",
    "categoria": "Tavoli da pranzo",
    "prezzo": 799,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tavolo-da-pranzo-per-6-8-persone-lung-200-cm-1000-13-40-234273_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tavolo-da-pranzo-per-6-8-persone-lung-200-cm-alegro-234273.htm",
    "larghezza_cm": 200,
    "profondita_cm": 105,
    "descrizione": "Tavolo da pranzo per 6/8 persone lung. 200 cm"
  },
  {
    "nome": "Mauricette - Sedia vintage blu notte e acciaio effetto rovere",
    "categoria": "Sedie",
    "prezzo": 69.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-vintage-blu-notte-e-acciaio-effetto-rovere-1000-11-29-243077_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-vintage-blu-notte-e-acciaio-effetto-rovere-mauricette-243077.htm",
    "larghezza_cm": 50.5,
    "profondita_cm": 54.5,
    "descrizione": "Sedia vintage blu notte e acciaio effetto rovere"
  },
  {
    "nome": "Polari - Comò a 3 cassetti in legno chiaro 92 cm",
    "categoria": "Cassettiere",
    "prezzo": 369,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/como-a-3-cassetti-in-legno-chiaro-92-cm-1000-5-9-241745_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/como-a-3-cassetti-in-legno-chiaro-92-cm-polari-241745.htm",
    "larghezza_cm": 92,
    "profondita_cm": 46,
    "descrizione": "Comò a 3 cassetti in legno chiaro 92 cm"
  },
  {
    "nome": "Madia a 2 ante scorrevoli 180 cm",
    "categoria": "Credenze",
    "prezzo": 799,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/madia-a-2-ante-scorrevoli-180-cm-1000-6-36-249685_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/madia-a-2-ante-scorrevoli-180-cm-249685.htm",
    "larghezza_cm": 180,
    "profondita_cm": 50,
    "descrizione": "Madia a 2 ante scorrevoli 180 cm"
  },
  {
    "nome": "Chesterfield - Letto capitonné in lino color crema 160x200 cm con rete a doghe",
    "categoria": "Letti",
    "prezzo": 429,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/letto-capitonne-in-lino-color-crema-160x200-cm-con-rete-a-doghe-1000-0-39-141202_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/letto-capitonne-in-lino-color-crema-160x200-cm-con-rete-a-doghe-chesterfield-141202.htm",
    "larghezza_cm": 170,
    "profondita_cm": 215,
    "descrizione": "Letto capitonné in lino color crema 160x200 cm con rete a doghe"
  },
  {
    "nome": "Candela profumata rosa in vetro e metallo dorato 350g",
    "categoria": "Decorazioni",
    "prezzo": 18.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/candela-profumata-rosa-in-vetro-e-metallo-dorato-350g-1000-7-9-245640_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/candela-profumata-rosa-in-vetro-e-metallo-dorato-350g-245640.htm",
    "larghezza_cm": 10,
    "profondita_cm": 10,
    "descrizione": "Candela profumata rosa in vetro e metallo dorato 350g"
  },
  {
    "nome": "Andrews - Guardaroba a 2 ante battenti in metallo grigio antracite",
    "categoria": "Armadi",
    "prezzo": 479,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/guardaroba-a-2-ante-battenti-in-metallo-grigio-antracite-1000-11-25-220195_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/guardaroba-a-2-ante-battenti-in-metallo-grigio-antracite-andrews-220195.htm",
    "larghezza_cm": 90,
    "profondita_cm": 50,
    "descrizione": "Guardaroba a 2 ante battenti in metallo grigio antracite"
  },
  {
    "nome": "Lotto di 6 - Bicchiere d'acqua in vetro cromato e trasparente",
    "categoria": "Cucina",
    "prezzo": 41.94,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/bicchiere-d-acqua-in-vetro-cromato-e-trasparente-1000-15-30-146113_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/bicchiere-d-acqua-in-vetro-cromato-e-trasparente-146113.htm",
    "larghezza_cm": 6.6,
    "profondita_cm": 6.6,
    "descrizione": "Bicchiere d'acqua in vetro cromato e trasparente"
  },
  {
    "nome": "Lotto di 6 - Tazzina doppio vetro trasparente con manico",
    "categoria": "Cucina",
    "prezzo": 23.94,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tazzina-doppio-vetro-trasparente-con-manico-1000-1-24-245532_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tazzina-doppio-vetro-trasparente-con-manico-245532.htm",
    "larghezza_cm": 10.5,
    "profondita_cm": 7.5,
    "descrizione": "Tazzina doppio vetro trasparente con manico"
  },
  {
    "nome": "Jared - Poltrona Club in pelle marrone effetto anticato",
    "categoria": "Divani",
    "prezzo": 799,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltrona-club-in-pelle-marrone-effetto-anticato-1000-11-38-241938_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-club-in-pelle-marrone-effetto-anticato-jared-241938.htm",
    "larghezza_cm": 84,
    "profondita_cm": 83,
    "descrizione": "Poltrona Club in pelle marrone effetto anticato"
  },
  {
    "nome": "Faubourg - Tavolo da pranzo ovale in legno di rovere 8/10 persone lung. 200 cm",
    "categoria": "Tavoli da pranzo",
    "prezzo": 1399,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tavolo-da-pranzo-ovale-in-legno-di-rovere-8-10-persone-lung-200-cm-1000-14-39-249319_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tavolo-da-pranzo-ovale-in-legno-di-rovere-8-10-persone-lung-200-cm-faubourg-249319.htm",
    "larghezza_cm": 200,
    "profondita_cm": 110,
    "descrizione": "Tavolo da pranzo ovale in legno di rovere 8/10 persone lung. 200 cm"
  },
  {
    "nome": "Mauricette - Sedia vintage in tessuto riciclato grigio-verde e acciaio effetto rovere",
    "categoria": "Sedie",
    "prezzo": 69.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-vintage-in-tessuto-riciclato-grigio-verde-e-acciaio-effetto-rovere-1000-13-35-242960_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-vintage-in-tessuto-riciclato-grigio-verde-e-acciaio-effetto-rovere-mauricette-242960.htm",
    "larghezza_cm": 50.5,
    "profondita_cm": 54.5,
    "descrizione": "Sedia vintage in tessuto riciclato grigio-verde e acciaio effetto rovere"
  },
  {
    "nome": "Swahi - Comò in legno massello di mango con 3 cassetti 85 cm",
    "categoria": "Cassettiere",
    "prezzo": 489.3,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/como-in-legno-massello-di-mango-con-3-cassetti-85-cm-1000-11-14-242652_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/como-in-legno-massello-di-mango-con-3-cassetti-85-cm-swahi-242652.htm",
    "larghezza_cm": 85,
    "profondita_cm": 45,
    "descrizione": "Comò in legno massello di mango con 3 cassetti 85 cm"
  },
  {
    "nome": "Testiera reversibile in legno e poliestere riciclato a righe ocra ed écru per letto da 160 cm",
    "categoria": "Letti",
    "prezzo": 249,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/253422_0/testiera-reversibile-in-legno-e-poliestere-riciclato-a-righe-ocra-ed-ecru-per-letto-da-160-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/testiera-reversibile-in-legno-e-poliestere-riciclato-a-righe-ocra-ed-ecru-per-letto-da-160-cm-253422.htm",
    "larghezza_cm": 182,
    "profondita_cm": 10,
    "descrizione": "Testiera reversibile in legno e poliestere riciclato a righe ocra ed écru per letto da 160 cm"
  },
  {
    "nome": "Tappeto grande in lana e cotone beige 160cm x 230cm",
    "categoria": "Tappeti",
    "prezzo": 329,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tappeto-grande-in-lana-e-cotone-beige-160cm-x-230cm-1000-0-27-214047_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tappeto-grande-in-lana-e-cotone-beige-160cm-x-230cm-214047.htm",
    "larghezza_cm": 160,
    "profondita_cm": 2,
    "descrizione": "Tappeto grande in lana e cotone beige 160cm x 230cm"
  },
  {
    "nome": "Bouquet di fiori rotondi essiccati beige",
    "categoria": "Decorazioni",
    "prezzo": 12.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/bouquet-di-fiori-rotondi-essiccati-beige-1000-10-24-226467_2.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/bouquet-di-fiori-rotondi-essiccati-beige-226467.htm",
    "larghezza_cm": 25,
    "profondita_cm": 3,
    "descrizione": "Bouquet di fiori rotondi essiccati beige"
  },
  {
    "nome": "Vaso grande in gres verde alt. 82 cm",
    "categoria": "Decorazioni",
    "prezzo": 349,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/vaso-grande-in-gres-verde-alt-82-cm-1000-2-19-248848_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/vaso-grande-in-gres-verde-alt-82-cm-248848.htm",
    "larghezza_cm": 54,
    "profondita_cm": 54,
    "descrizione": "Vaso grande in gres verde alt. 82 cm"
  },
  {
    "nome": "Pendjab - Armadio a 2 ante inciso 100 cm",
    "categoria": "Armadi",
    "prezzo": 899,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/armadio-a-2-ante-inciso-100-cm-1000-0-34-209831_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/armadio-a-2-ante-inciso-100-cm-pendjab-209831.htm",
    "larghezza_cm": 100,
    "profondita_cm": 45,
    "descrizione": "Armadio a 2 ante inciso 100 cm"
  },
  {
    "nome": "Tazza in gres con motivo tigre bianco, grigio, nero e verde",
    "categoria": "Cucina",
    "prezzo": 4.45,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tazza-in-gres-con-motivo-tigre-bianco-grigio-nero-e-verde-1000-10-32-246442_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tazza-in-gres-con-motivo-tigre-bianco-grigio-nero-e-verde-246442.htm",
    "larghezza_cm": 14.2,
    "profondita_cm": 9.3,
    "descrizione": "Tazza in gres con motivo tigre bianco, grigio, nero e verde"
  },
  {
    "nome": "Olivia - Divano angolare trasformabile 4/5 posti in velluto blu notte",
    "categoria": "Divani",
    "prezzo": 1099,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-angolare-trasformabile-4-5-posti-in-velluto-blu-notte-1000-10-37-210572_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-angolare-trasformabile-4-5-posti-in-velluto-blu-notte-olivia-210572.htm",
    "larghezza_cm": 241,
    "profondita_cm": 153,
    "descrizione": "Divano angolare trasformabile 4/5 posti in velluto blu notte"
  },
  {
    "nome": "Fold - Poltrona in rattan",
    "categoria": "Divani",
    "prezzo": 215.2,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltrona-in-rattan-1000-4-2-246453_2.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-in-rattan-fold-246453.htm",
    "larghezza_cm": 64,
    "profondita_cm": 74,
    "descrizione": "Poltrona in rattan"
  },
  {
    "nome": "Tradition - Sedia bistrot in faggio e rattan, effetto ceruso",
    "categoria": "Sedie",
    "prezzo": 99.99,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/230984_0/sedia-bistrot-in-faggio-e-rattan-effetto-ceruso.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-bistrot-in-faggio-e-rattan-effetto-ceruso-tradition-230984.htm",
    "larghezza_cm": 49,
    "profondita_cm": 56,
    "descrizione": "Sedia bistrot in faggio e rattan, effetto ceruso"
  },
  {
    "nome": "Docks - Settimanile stile industriale a 6 cassetti in metallo nero e abete",
    "categoria": "Cassettiere",
    "prezzo": 199,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/settimanile-stile-industriale-a-6-cassetti-in-metallo-nero-e-abete-1000-3-9-110299_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/settimanile-stile-industriale-a-6-cassetti-in-metallo-nero-e-abete-docks-110299.htm",
    "larghezza_cm": 60,
    "profondita_cm": 40,
    "descrizione": "Settimanile stile industriale a 6 cassetti in metallo nero e abete"
  },
  {
    "nome": "Louxor - Madia a 3 ante in metallo ondulato color ottone e marmo bianco 185 cm",
    "categoria": "Credenze",
    "prezzo": 1399,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/madia-a-3-ante-in-metallo-ondulato-color-ottone-e-marmo-bianco-185-cm-1000-9-1-238621_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/madia-a-3-ante-in-metallo-ondulato-color-ottone-e-marmo-bianco-185-cm-louxor-238621.htm",
    "larghezza_cm": 185,
    "profondita_cm": 45,
    "descrizione": "Madia a 3 ante in metallo ondulato color ottone e marmo bianco 185 cm"
  },
  {
    "nome": "Morphee - Testata del letto rivestibile L 160 cm",
    "categoria": "Letti",
    "prezzo": 179,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/testata-del-letto-rivestibile-l-160-cm-1000-14-20-147251_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/testata-del-letto-rivestibile-l-160-cm-morphee-147251.htm",
    "larghezza_cm": 170,
    "profondita_cm": 8,
    "descrizione": "Testata del letto rivestibile L 160 cm"
  },
  {
    "nome": "Brooke - Divano scandinavo 3/4 posti blu ghiaccio",
    "categoria": "Divani",
    "prezzo": 599,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-scandinavo-3-4-posti-blu-ghiaccio-1000-4-37-186341_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-scandinavo-3-4-posti-blu-ghiaccio-brooke-186341.htm",
    "larghezza_cm": 202,
    "profondita_cm": 88,
    "descrizione": "Divano scandinavo 3/4 posti blu ghiaccio"
  },
  {
    "nome": "Ramo di eucalipto essiccato bianco",
    "categoria": "Decorazioni",
    "prezzo": 5,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/ramo-di-eucalipto-essiccato-bianco-1000-2-22-223841_2.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/ramo-di-eucalipto-essiccato-bianco-223841.htm",
    "larghezza_cm": 25,
    "profondita_cm": 25,
    "descrizione": "Ramo di eucalipto essiccato bianco"
  },
  {
    "nome": "Santa Fe - Armadio a 2 ante e 1 cassetto in paglia di Vienna 114 cm",
    "categoria": "Armadi",
    "prezzo": 1199,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/armadio-a-2-ante-e-1-cassetto-in-paglia-di-vienna-114-cm-1000-11-27-234424_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/armadio-a-2-ante-e-1-cassetto-in-paglia-di-vienna-114-cm-santa-fe-234424.htm",
    "larghezza_cm": 114,
    "profondita_cm": 55,
    "descrizione": "Armadio a 2 ante e 1 cassetto in paglia di Vienna 114 cm"
  },
  {
    "nome": "Moustache - Divano letto 2 posti in similpelle scamosciata marrone",
    "categoria": "Divani",
    "prezzo": 799,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-letto-2-posti-in-similpelle-scamosciata-marrone-1000-13-12-196074_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-letto-2-posti-in-similpelle-scamosciata-marrone-moustache-196074.htm",
    "larghezza_cm": 175,
    "profondita_cm": 84,
    "descrizione": "Divano letto 2 posti in similpelle scamosciata marrone"
  },
  {
    "nome": "Luna - Sedia in velluto ocra e acciaio nero",
    "categoria": "Sedie",
    "prezzo": 99.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-in-velluto-ocra-e-acciaio-nero-1000-5-29-197936_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-in-velluto-ocra-e-acciaio-nero-luna-197936.htm",
    "larghezza_cm": 55,
    "profondita_cm": 54,
    "descrizione": "Sedia in velluto ocra e acciaio nero"
  },
  {
    "nome": "Bouquet di fiori essiccati bianchi",
    "categoria": "Decorazioni",
    "prezzo": 14.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/bouquet-di-fiori-essiccati-bianchi-1000-11-1-226485_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/bouquet-di-fiori-essiccati-bianchi-226485.htm",
    "larghezza_cm": 15,
    "profondita_cm": 6,
    "descrizione": "Bouquet di fiori essiccati bianchi"
  },
  {
    "nome": "Bouquet di fiori artificiali blu e vaso in gres",
    "categoria": "Decorazioni",
    "prezzo": 29.99,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/253689/bouquet-di-fiori-artificiali-blu-e-vaso-in-gres.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/bouquet-di-fiori-artificiali-blu-e-vaso-in-gres-253689.htm",
    "larghezza_cm": 22.9,
    "profondita_cm": 22.9,
    "descrizione": "Bouquet di fiori artificiali blu e vaso in gres"
  },
  {
    "nome": "Vaso in gres beige con motivi alt. 21 cm",
    "categoria": "Decorazioni",
    "prezzo": 15.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/vaso-in-gres-beige-con-motivi-alt-21-cm-1000-14-33-213602_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/vaso-in-gres-beige-con-motivi-alt-21-cm-213602.htm",
    "larghezza_cm": 10,
    "profondita_cm": 10,
    "descrizione": "Vaso in gres beige con motivi alt. 21 cm"
  },
  {
    "nome": "Hudson Business - Guardaroba professionale a 1 cassetto e 1 scaffale in metallo nero",
    "categoria": "Armadi",
    "prezzo": 269,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/guardaroba-professionale-a-1-cassetto-e-1-scaffale-in-metallo-nero-1000-10-6-188319_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/guardaroba-professionale-a-1-cassetto-e-1-scaffale-in-metallo-nero-hudson-business-188319.htm",
    "larghezza_cm": 70,
    "profondita_cm": 45,
    "descrizione": "Guardaroba professionale a 1 cassetto e 1 scaffale in metallo nero"
  },
  {
    "nome": "Contenitore per aglio in metallo nero con coperchio in bambù alt. 14 cm",
    "categoria": "Cucina",
    "prezzo": 9.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/contenitore-per-aglio-in-metallo-nero-con-coperchio-in-bambu-alt-14-cm-1000-10-19-247700_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/contenitore-per-aglio-in-metallo-nero-con-coperchio-in-bambu-alt-14-cm-247700.htm",
    "larghezza_cm": 11,
    "profondita_cm": 11,
    "descrizione": "Contenitore per aglio in metallo nero con coperchio in bambù alt. 14 cm"
  },
  {
    "nome": "Divano angolare reversibile a 5/6 posti in tessuto beige",
    "categoria": "Divani",
    "prezzo": 2199,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/254276_0/divano-angolare-reversibile-a-5-6-posti-in-tessuto-beige.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-angolare-reversibile-a-5-6-posti-in-tessuto-beige-254276.htm",
    "larghezza_cm": 294,
    "profondita_cm": 162,
    "descrizione": "Divano angolare reversibile a 5/6 posti in tessuto beige"
  },
  {
    "nome": "Poltrona in tessuto testurizzato avorio",
    "categoria": "Divani",
    "prezzo": 429,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/252435/poltrona-in-tessuto-testurizzato-avorio.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-in-tessuto-testurizzato-avorio-252435.htm",
    "larghezza_cm": 85,
    "profondita_cm": 80,
    "descrizione": "Poltrona in tessuto testurizzato avorio"
  },
  {
    "nome": "Louis - Tavolo rotondo allungabile bianco 4 a 8 persone 120/200 cm",
    "categoria": "Altri mobili",
    "prezzo": 559,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tavolo-rotondo-allungabile-bianco-4-a-8-persone-120-200-cm-1000-1-35-50140124_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tavolo-rotondo-allungabile-bianco-4-a-8-persone-120-200-cm-louis-50140124.htm",
    "larghezza_cm": 120,
    "profondita_cm": 76,
    "descrizione": "Tavolo rotondo allungabile bianco 4 a 8 persone 120/200 cm"
  },
  {
    "nome": "Sacha Business - Sedia da pranzo professionale in velluto blu notte",
    "categoria": "Sedie",
    "prezzo": 179,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-da-pranzo-professionale-in-velluto-blu-notte-1000-3-24-222941_5.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-da-pranzo-professionale-in-velluto-blu-notte-sacha-business-222941.htm",
    "larghezza_cm": 57,
    "profondita_cm": 60,
    "descrizione": "Sedia da pranzo professionale in velluto blu notte"
  },
  {
    "nome": "Lampada a sospensione da esterno marrone e beige",
    "categoria": "Lampade",
    "prezzo": 79.5,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/lampada-a-sospensione-da-esterno-marrone-e-beige-1000-2-36-248168_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/lampada-a-sospensione-da-esterno-marrone-e-beige-248168.htm",
    "larghezza_cm": 62.5,
    "profondita_cm": 62.5,
    "descrizione": "Lampada a sospensione da esterno marrone e beige"
  },
  {
    "nome": "Loreto - Armadio 2 ante a battente nero, paglia di Vienna e metallo dorato 98 cm",
    "categoria": "Armadi",
    "prezzo": 899,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/armadio-2-ante-a-battente-nero-paglia-di-vienna-e-metallo-dorato-98-cm-1000-12-24-219907_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/armadio-2-ante-a-battente-nero-paglia-di-vienna-e-metallo-dorato-98-cm-loreto-219907.htm",
    "larghezza_cm": 98,
    "profondita_cm": 52,
    "descrizione": "Armadio 2 ante a battente nero, paglia di Vienna e metallo dorato 98 cm"
  },
  {
    "nome": "Lilo - Divano angolare con penisola a sinistra 4/5 posti in bouclé blu notte",
    "categoria": "Divani",
    "prezzo": 1699,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-angolare-con-penisola-a-sinistra-4-5-posti-in-boucle-blu-notte-1000-9-18-249790_2.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-angolare-con-penisola-a-sinistra-4-5-posti-in-boucle-blu-notte-lilo-249790.htm",
    "larghezza_cm": 272,
    "profondita_cm": 168,
    "descrizione": "Divano angolare con penisola a sinistra 4/5 posti in bouclé blu notte"
  },
  {
    "nome": "Coquille - Poltrona uovo stile industriale in pelle marrone",
    "categoria": "Poltrone",
    "prezzo": 1799,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/249654/poltrona-uovo-stile-industriale-in-pelle-marrone.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-uovo-stile-industriale-in-pelle-marrone-coquille-249654.htm",
    "larghezza_cm": 98,
    "profondita_cm": 90,
    "descrizione": "Poltrona uovo stile industriale in pelle marrone"
  },
  {
    "nome": "Stockholm - Tavolo per sala da pranzo in massello di legno di sheesham 160 cm",
    "categoria": "Tavoli da pranzo",
    "prezzo": 499,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/110279_0/tavolo-per-sala-da-pranzo-in-massello-di-legno-di-sheesham-160-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tavolo-per-sala-da-pranzo-in-massello-di-legno-di-sheesham-160-cm-stockholm-110279.htm",
    "larghezza_cm": 160,
    "profondita_cm": 90,
    "descrizione": "Tavolo per sala da pranzo in massello di legno di sheesham 160 cm"
  },
  {
    "nome": "Edwin - console in ferro nero",
    "categoria": "Cassettiere",
    "prezzo": 129,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/console-in-ferro-nero-1000-2-5-187580_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/console-in-ferro-nero-edwin-187580.htm",
    "larghezza_cm": 100,
    "profondita_cm": 35,
    "descrizione": "console in ferro nero"
  },
  {
    "nome": "Mimizan - Comò doppio compatibile con fasciatoio con 1 anta e 3 cassetti marrone caramello 87cm",
    "categoria": "Cassettiere",
    "prezzo": 279,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/como-doppio-compatibile-con-fasciatoio-con-1-anta-e-3-cassetti-marrone-caramello-87cm-1000-9-14-233878_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/como-doppio-compatibile-con-fasciatoio-con-1-anta-e-3-cassetti-marrone-caramello-87cm-mimizan-233878.htm",
    "larghezza_cm": 87,
    "profondita_cm": 45,
    "descrizione": "Comò doppio compatibile con fasciatoio con 1 anta e 3 cassetti marrone caramello 87cm"
  },
  {
    "nome": "Letto in legno di mango e acacia tinto 180x200 cm con rete a doghe",
    "categoria": "Letti",
    "prezzo": 899,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/letto-in-legno-di-mango-e-acacia-tinto-180x200-cm-con-rete-a-doghe-1000-1-18-249544_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/letto-in-legno-di-mango-e-acacia-tinto-180x200-cm-con-rete-a-doghe-249544.htm",
    "larghezza_cm": 191,
    "profondita_cm": 213.5,
    "descrizione": "Letto in legno di mango e acacia tinto 180x200 cm con rete a doghe"
  },
  {
    "nome": "Stampa su tela astratta multicolore 80×120 cm",
    "categoria": "Decorazioni",
    "prezzo": 129,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/255344/stampa-su-tela-astratta-multicolore-80-120-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/stampa-su-tela-astratta-multicolore-80-120-cm-255344.htm",
    "larghezza_cm": 79,
    "profondita_cm": 3,
    "descrizione": "Stampa su tela astratta multicolore 80×120 cm"
  },
  {
    "nome": "Cuscino in lino lavato terracotta 60x60cm",
    "categoria": "Tessile",
    "prezzo": 35.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/cuscino-in-lino-lavato-terracotta-60x60cm-1000-9-37-223610_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/cuscino-in-lino-lavato-terracotta-60x60cm-223610.htm",
    "larghezza_cm": 60,
    "profondita_cm": 10,
    "descrizione": "Cuscino in lino lavato terracotta 60x60cm"
  },
  {
    "nome": "Stockholm - Armadietto in massello di legno di sheesham 110 cm",
    "categoria": "Armadi",
    "prezzo": 1299,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/armadietto-in-massello-di-legno-di-sheesham-110-cm-1000-8-20-121626_8.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/armadietto-in-massello-di-legno-di-sheesham-110-cm-stockholm-121626.htm",
    "larghezza_cm": 110,
    "profondita_cm": 55,
    "descrizione": "Armadietto in massello di legno di sheesham 110 cm"
  },
  {
    "nome": "Set di 6 bicchieri da birra e vassoio in legno di eucalipto",
    "categoria": "Cucina",
    "prezzo": 34.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/set-di-6-bicchieri-da-birra-e-vassoio-in-legno-di-eucalipto-1000-14-17-229412_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/set-di-6-bicchieri-da-birra-e-vassoio-in-legno-di-eucalipto-229412.htm",
    "larghezza_cm": 29,
    "profondita_cm": 17,
    "descrizione": "Set di 6 bicchieri da birra e vassoio in legno di eucalipto"
  },
  {
    "nome": "Set di piatti da dessert in ceramica (x4) con motivi natalizi in beige, verde, rosso e oro",
    "categoria": "Cucina",
    "prezzo": 29.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/set-di-piatti-da-dessert-in-ceramica-x4-con-motivi-natalizi-in-beige-verde-rosso-e-oro-1000-7-6-228827_2.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/set-di-piatti-da-dessert-in-ceramica-x4-con-motivi-natalizi-in-beige-verde-rosso-e-oro-228827.htm",
    "larghezza_cm": 21,
    "profondita_cm": 21,
    "descrizione": "Set di piatti da dessert in ceramica (x4) con motivi natalizi in beige, verde, rosso e oro"
  },
  {
    "nome": "Montréal - Divano trasformabile 3/4 posti grigio chiaro",
    "categoria": "Divani",
    "prezzo": 599,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-trasformabile-3-4-posti-grigio-chiaro-1000-7-18-243107_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-trasformabile-3-4-posti-grigio-chiaro-montreal-243107.htm",
    "larghezza_cm": 230,
    "profondita_cm": 91,
    "descrizione": "Divano trasformabile 3/4 posti grigio chiaro"
  },
  {
    "nome": "Hermann - Poltrona in bouclé bianca e legno di faggio",
    "categoria": "Poltrone",
    "prezzo": 269,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltrona-in-boucle-bianca-e-legno-di-faggio-1000-11-18-246018_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-in-boucle-bianca-e-legno-di-faggio-hermann-246018.htm",
    "larghezza_cm": 66,
    "profondita_cm": 87.5,
    "descrizione": "Poltrona in bouclé bianca e legno di faggio"
  },
  {
    "nome": "Griffith - Tavolo allungabile rendono 120(165)x120 cm",
    "categoria": "Altri mobili",
    "prezzo": 549,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tavolo-allungabile-rendono-120-165-x120-cm-1000-5-3-248545_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tavolo-allungabile-rendono-120-165-x120-cm-griffith-248545.htm",
    "larghezza_cm": 165,
    "profondita_cm": 120,
    "descrizione": "Tavolo allungabile rendono 120(165)x120 cm"
  },
  {
    "nome": "Paulette - Madia vintage a 3 ante e 2 cassetti in legno di pino 180 cm",
    "categoria": "Credenze",
    "prezzo": 429,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/madia-vintage-a-3-ante-e-2-cassetti-in-legno-di-pino-180-cm-1000-12-17-155817_7.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/madia-vintage-a-3-ante-e-2-cassetti-in-legno-di-pino-180-cm-paulette-155817.htm",
    "larghezza_cm": 180,
    "profondita_cm": 45,
    "descrizione": "Madia vintage a 3 ante e 2 cassetti in legno di pino 180 cm"
  },
  {
    "nome": "Solstice - Madia a 3 ante in rattan lung. 154 cm",
    "categoria": "Credenze",
    "prezzo": 369,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/madia-a-3-ante-in-rattan-lung-154-cm-1000-15-7-230263_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/madia-a-3-ante-in-rattan-lung-154-cm-solstice-230263.htm",
    "larghezza_cm": 154,
    "profondita_cm": 45,
    "descrizione": "Madia a 3 ante in rattan lung. 154 cm"
  },
  {
    "nome": "Aspleen - Letto in tessuto beige 160x200 cm",
    "categoria": "Letti",
    "prezzo": 599,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/letto-in-tessuto-beige-160x200-cm-1000-16-25-188461_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/letto-in-tessuto-beige-160x200-cm-aspleen-188461.htm",
    "larghezza_cm": 182,
    "profondita_cm": 226,
    "descrizione": "Letto in tessuto beige 160x200 cm"
  },
  {
    "nome": "Brooke - Divano stile scandinavo 3 posti beige chiné",
    "categoria": "Divani",
    "prezzo": 599,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-stile-scandinavo-3-posti-beige-chine-1000-12-23-166442_6.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-stile-scandinavo-3-posti-beige-chine-brooke-166442.htm",
    "larghezza_cm": 202,
    "profondita_cm": 88,
    "descrizione": "Divano stile scandinavo 3 posti beige chiné"
  },
  {
    "nome": "Kerala - Armadietto a 2 ante in legno massello di mango scolpito 110 cm",
    "categoria": "Armadi",
    "prezzo": 1399,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/armadietto-a-2-ante-in-legno-massello-di-mango-scolpito-110-cm-1000-12-5-186145_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/armadietto-a-2-ante-in-legno-massello-di-mango-scolpito-110-cm-kerala-186145.htm",
    "larghezza_cm": 110,
    "profondita_cm": 56,
    "descrizione": "Armadietto a 2 ante in legno massello di mango scolpito 110 cm"
  },
  {
    "nome": "Flare - Divano 3/4 posti in tessuto beige tramato",
    "categoria": "Divani",
    "prezzo": 1299,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-3-4-posti-in-tessuto-beige-tramato-1000-7-24-241883_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-3-4-posti-in-tessuto-beige-tramato-flare-241883.htm",
    "larghezza_cm": 237,
    "profondita_cm": 86,
    "descrizione": "Divano 3/4 posti in tessuto beige tramato"
  },
  {
    "nome": "Swivel - Poltrona girevole in tessuto bouclé grigio chiaro",
    "categoria": "Poltrone",
    "prezzo": 499,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltrona-girevole-in-tessuto-boucle-grigio-chiaro-1000-9-32-223236_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-girevole-in-tessuto-boucle-grigio-chiaro-swivel-223236.htm",
    "larghezza_cm": 98,
    "profondita_cm": 100,
    "descrizione": "Poltrona girevole in tessuto bouclé grigio chiaro"
  },
  {
    "nome": "Boldin - Madia a 4 ante 224 cm",
    "categoria": "Credenze",
    "prezzo": 949,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/madia-a-4-ante-224-cm-1000-2-1-209306_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/madia-a-4-ante-224-cm-boldin-209306.htm",
    "larghezza_cm": 223.7,
    "profondita_cm": 45,
    "descrizione": "Madia a 4 ante 224 cm"
  },
  {
    "nome": "Pillow - Letto contenitore in tessuto effetto pelle bianca 140x190 cm con rete a doghe",
    "categoria": "Letti",
    "prezzo": 469,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/letto-contenitore-in-tessuto-effetto-pelle-bianca-140x190-cm-con-rete-a-doghe-1000-6-14-146835_2.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/letto-contenitore-in-tessuto-effetto-pelle-bianca-140x190-cm-con-rete-a-doghe-pillow-146835.htm",
    "larghezza_cm": 163,
    "profondita_cm": 207,
    "descrizione": "Letto contenitore in tessuto effetto pelle bianca 140x190 cm con rete a doghe"
  },
  {
    "nome": "Lampada sferica a sospensione con pendenti e metallo",
    "categoria": "Lampade",
    "prezzo": 94.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/lampada-sferica-a-sospensione-con-pendenti-e-metallo-1000-11-5-197092_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/lampada-sferica-a-sospensione-con-pendenti-e-metallo-197092.htm",
    "larghezza_cm": 35,
    "profondita_cm": 35,
    "descrizione": "Lampada sferica a sospensione con pendenti e metallo"
  },
  {
    "nome": "Lotto di 6 - Bicchiere da whisky in vetro",
    "categoria": "Cucina",
    "prezzo": 16.74,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/bicchiere-da-whisky-in-vetro-1000-11-33-206714_3.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/bicchiere-da-whisky-in-vetro-206714.htm",
    "larghezza_cm": 8.4,
    "profondita_cm": 8.4,
    "descrizione": "Bicchiere da whisky in vetro"
  },
  {
    "nome": "Divano 2 posti in tessuto tramato beige con poggiatesta regolabili",
    "categoria": "Divani",
    "prezzo": 999,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/253727_0/divano-2-posti-in-tessuto-tramato-beige-con-poggiatesta-regolabili.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-2-posti-in-tessuto-tramato-beige-con-poggiatesta-regolabili-253727.htm",
    "larghezza_cm": 211,
    "profondita_cm": 109,
    "descrizione": "Divano 2 posti in tessuto tramato beige con poggiatesta regolabili"
  },
  {
    "nome": "Palm - Poltrona in velluto con motivi bianchi e neri",
    "categoria": "Poltrone",
    "prezzo": 169,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltrona-in-velluto-con-motivi-bianchi-e-neri-1000-3-13-165940_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-in-velluto-con-motivi-bianchi-e-neri-palm-165940.htm",
    "larghezza_cm": 63,
    "profondita_cm": 73,
    "descrizione": "Poltrona in velluto con motivi bianchi e neri"
  },
  {
    "nome": "Sweet - Cassettiera vintage bianco a 5 cassetti",
    "categoria": "Cassettiere",
    "prezzo": 199,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/cassettiera-vintage-bianco-a-5-cassetti-1000-4-2-248544_2.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/cassettiera-vintage-bianco-a-5-cassetti-sweet-248544.htm",
    "larghezza_cm": 50,
    "profondita_cm": 35,
    "descrizione": "Cassettiera vintage bianco a 5 cassetti"
  },
  {
    "nome": "Pillow - Letto contenitore in velluto a coste beige 140x190 cm con rete a doghe",
    "categoria": "Letti",
    "prezzo": 499,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/letto-contenitore-in-velluto-a-coste-beige-140x190-cm-con-rete-a-doghe-1000-13-4-245799_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/letto-contenitore-in-velluto-a-coste-beige-140x190-cm-con-rete-a-doghe-pillow-245799.htm",
    "larghezza_cm": 162,
    "profondita_cm": 206,
    "descrizione": "Letto contenitore in velluto a coste beige 140x190 cm con rete a doghe"
  },
  {
    "nome": "Cuscino in lino lavato verde giada 60x60cm",
    "categoria": "Tessile",
    "prezzo": 35.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/cuscino-in-lino-lavato-verde-giada-60x60cm-1000-13-14-223546_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/cuscino-in-lino-lavato-verde-giada-60x60cm-223546.htm",
    "larghezza_cm": 60,
    "profondita_cm": 10,
    "descrizione": "Cuscino in lino lavato verde giada 60x60cm"
  },
  {
    "nome": "Trocadero - Armadietto a 2 ante e 2 cassetti in legno massello di mango 100 cm",
    "categoria": "Armadi",
    "prezzo": 999,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/armadietto-a-2-ante-e-2-cassetti-in-legno-massello-di-mango-100-cm-1000-3-26-166076_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/armadietto-a-2-ante-e-2-cassetti-in-legno-massello-di-mango-100-cm-trocadero-166076.htm",
    "larghezza_cm": 100,
    "profondita_cm": 55,
    "descrizione": "Armadietto a 2 ante e 2 cassetti in legno massello di mango 100 cm"
  },
  {
    "nome": "Dispenser per sapone e porta spugna in ceramica verde",
    "categoria": "Cucina",
    "prezzo": 19.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/dispenser-per-sapone-e-porta-spugna-in-ceramica-verde-1000-16-34-233324_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/dispenser-per-sapone-e-porta-spugna-in-ceramica-verde-233324.htm",
    "larghezza_cm": 19,
    "profondita_cm": 7,
    "descrizione": "Dispenser per sapone e porta spugna in ceramica verde"
  },
  {
    "nome": "Divano angolare con penisola a destra 4/5 posti e poggiatesta reclinabili in tessuto tramato grigio",
    "categoria": "Divani",
    "prezzo": 1199,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/252530/divano-angolare-con-penisola-a-destra-4-5-posti-e-poggiatesta-reclinabili-in-tessuto-tramato-grigio.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-angolare-con-penisola-a-destra-4-5-posti-e-poggiatesta-reclinabili-in-tessuto-tramato-grigio-252530.htm",
    "larghezza_cm": 270,
    "profondita_cm": 163,
    "descrizione": "Divano angolare con penisola a destra 4/5 posti e poggiatesta reclinabili in tessuto tramato grigio"
  },
  {
    "nome": "Clyde - Sedia in tessuto riciclato grigio chiaro e gambe in acciaio effetto rovere",
    "categoria": "Sedie",
    "prezzo": 45.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-in-tessuto-riciclato-grigio-chiaro-e-gambe-in-acciaio-effetto-rovere-1000-6-12-238550_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-in-tessuto-riciclato-grigio-chiaro-e-gambe-in-acciaio-effetto-rovere-clyde-238550.htm",
    "larghezza_cm": 44,
    "profondita_cm": 54.5,
    "descrizione": "Sedia in tessuto riciclato grigio chiaro e gambe in acciaio effetto rovere"
  },
  {
    "nome": "Penelope - Madia a 2 ante e 3 cassetti blu scuro 145 cm",
    "categoria": "Credenze",
    "prezzo": 349,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/madia-a-2-ante-e-3-cassetti-blu-scuro-145-cm-1000-6-26-187601_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/madia-a-2-ante-e-3-cassetti-blu-scuro-145-cm-penelope-187601.htm",
    "larghezza_cm": 145,
    "profondita_cm": 45,
    "descrizione": "Madia a 2 ante e 3 cassetti blu scuro 145 cm"
  },
  {
    "nome": "Morphee - Testata del letto rivestibile in legno 180 cm",
    "categoria": "Letti",
    "prezzo": 159.2,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/testata-del-letto-rivestibile-in-legno-180-cm-1000-12-20-157296_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/testata-del-letto-rivestibile-in-legno-180-cm-morphee-157296.htm",
    "larghezza_cm": 190,
    "profondita_cm": 8,
    "descrizione": "Testata del letto rivestibile in legno 180 cm"
  },
  {
    "nome": "Sunset - Divano angolare con penisola a destra 5/6 posti in tessuto di ciniglia verde",
    "categoria": "Divani",
    "prezzo": 1599,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-angolare-con-penisola-a-destra-5-6-posti-in-tessuto-di-ciniglia-verde-1000-11-27-246970_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-angolare-con-penisola-a-destra-5-6-posti-in-tessuto-di-ciniglia-verde-sunset-246970.htm",
    "larghezza_cm": 291,
    "profondita_cm": 281,
    "descrizione": "Divano angolare con penisola a destra 5/6 posti in tessuto di ciniglia verde"
  },
  {
    "nome": "Trittico di tele dipinte in beige e bianco, 170x112 cm",
    "categoria": "Decorazioni",
    "prezzo": 199,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/trittico-di-tele-dipinte-in-beige-e-bianco-170x112-cm-1000-5-26-243156_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/trittico-di-tele-dipinte-in-beige-e-bianco-170x112-cm-243156.htm",
    "larghezza_cm": 169.5,
    "profondita_cm": 4,
    "descrizione": "Trittico di tele dipinte in beige e bianco, 170x112 cm"
  },
  {
    "nome": "Lampada da terra in acciaio nero e paralume in vetro maculato marrone e nero alt.150 cm",
    "categoria": "Lampade",
    "prezzo": 69.99,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/252263/lampada-da-terra-in-acciaio-nero-e-paralume-in-vetro-maculato-marrone-e-nero-alt-150-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/lampada-da-terra-in-acciaio-nero-e-paralume-in-vetro-maculato-marrone-e-nero-alt-150-cm-252263.htm",
    "larghezza_cm": 24,
    "profondita_cm": 24,
    "descrizione": "Lampada da terra in acciaio nero e paralume in vetro maculato marrone e nero alt.150 cm"
  },
  {
    "nome": "Candela profumata in vetro grigio e metallo dorato 350g",
    "categoria": "Decorazioni",
    "prezzo": 19.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/candela-profumata-in-vetro-grigio-e-metallo-dorato-350g-1000-10-12-245643_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/candela-profumata-in-vetro-grigio-e-metallo-dorato-350g-245643.htm",
    "larghezza_cm": 10,
    "profondita_cm": 6.7,
    "descrizione": "Candela profumata in vetro grigio e metallo dorato 350g"
  },
  {
    "nome": "Portaburro in vetro e ceramica bianca",
    "categoria": "Cucina",
    "prezzo": 12.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/portaburro-in-vetro-e-ceramica-bianca-1000-7-9-201032_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/portaburro-in-vetro-e-ceramica-bianca-201032.htm",
    "larghezza_cm": 16.6,
    "profondita_cm": 10.8,
    "descrizione": "Portaburro in vetro e ceramica bianca"
  },
  {
    "nome": "Element Business - Base per tavolo professionale rotonda in metallo nero alt. 90 cm",
    "categoria": "Altri mobili",
    "prezzo": 179,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/base-per-tavolo-professionale-rotonda-in-metallo-nero-alt-90-cm-1000-0-37-238493_3.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/base-per-tavolo-professionale-rotonda-in-metallo-nero-alt-90-cm-element-business-238493.htm",
    "larghezza_cm": 50,
    "profondita_cm": 50,
    "descrizione": "Base per tavolo professionale rotonda in metallo nero alt. 90 cm"
  },
  {
    "nome": "Clyde - Sedia in velluto riciclato arancione e gambe in acciaio nero",
    "categoria": "Sedie",
    "prezzo": 59.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-in-velluto-riciclato-arancione-e-gambe-in-acciaio-nero-1000-5-11-238549_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-in-velluto-riciclato-arancione-e-gambe-in-acciaio-nero-clyde-238549.htm",
    "larghezza_cm": 44,
    "profondita_cm": 55,
    "descrizione": "Sedia in velluto riciclato arancione e gambe in acciaio nero"
  },
  {
    "nome": "Cassettiera alta con 4 cassetti in legno di mango lung. 90 cm",
    "categoria": "Cassettiere",
    "prezzo": 699,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/252087/cassettiera-alta-con-4-cassetti-in-legno-di-mango-lung-90-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/cassettiera-alta-con-4-cassetti-in-legno-di-mango-lung-90-cm-252087.htm",
    "larghezza_cm": 90,
    "profondita_cm": 50,
    "descrizione": "Cassettiera alta con 4 cassetti in legno di mango lung. 90 cm"
  },
  {
    "nome": "Chamarel - Aramdio a 2 ante verde chiaro",
    "categoria": "Armadi",
    "prezzo": 519,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/aramdio-a-2-ante-verde-chiaro-1000-4-13-249785_2.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/aramdio-a-2-ante-verde-chiaro-chamarel-249785.htm",
    "larghezza_cm": 90,
    "profondita_cm": 50,
    "descrizione": "Aramdio a 2 ante verde chiaro"
  },
  {
    "nome": "Poltrona écru",
    "categoria": "Poltrone",
    "prezzo": 269,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/252407/poltrona-ecru.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-ecru-252407.htm",
    "larghezza_cm": 80.5,
    "profondita_cm": 75.5,
    "descrizione": "Poltrona écru"
  },
  {
    "nome": "Andersen - Tavolo ovale in massello di legno di sheesham per sala da pranzo 200 cm",
    "categoria": "Tavoli da pranzo",
    "prezzo": 699,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tavolo-ovale-in-massello-di-legno-di-sheesham-per-sala-da-pranzo-200-cm-1000-12-0-155800_10.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tavolo-ovale-in-massello-di-legno-di-sheesham-per-sala-da-pranzo-200-cm-andersen-155800.htm",
    "larghezza_cm": 200,
    "profondita_cm": 110,
    "descrizione": "Tavolo ovale in massello di legno di sheesham per sala da pranzo 200 cm"
  },
  {
    "nome": "Cassettiera doppia 6 cassetti 163 cm",
    "categoria": "Cassettiere",
    "prezzo": 799,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/cassettiera-doppia-6-cassetti-163-cm-1000-15-26-249388_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/cassettiera-doppia-6-cassetti-163-cm-249388.htm",
    "larghezza_cm": 162.6,
    "profondita_cm": 55.5,
    "descrizione": "Cassettiera doppia 6 cassetti 163 cm"
  },
  {
    "nome": "Lampada a sospensione in vetro verde a coste",
    "categoria": "Lampade",
    "prezzo": 69.99,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/254714/lampada-a-sospensione-in-vetro-verde-a-coste.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/lampada-a-sospensione-in-vetro-verde-a-coste-254714.htm",
    "larghezza_cm": 30,
    "profondita_cm": 30,
    "descrizione": "Lampada a sospensione in vetro verde a coste"
  },
  {
    "nome": "Cestino in metallo nero",
    "categoria": "Cucina",
    "prezzo": 9.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/cestino-in-metallo-nero-1000-0-28-244511_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/cestino-in-metallo-nero-244511.htm",
    "larghezza_cm": 26,
    "profondita_cm": 26,
    "descrizione": "Cestino in metallo nero"
  },
  {
    "nome": "Auguste - Divano 2 posti beige",
    "categoria": "Divani",
    "prezzo": 999,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-2-posti-beige-1000-9-12-249620_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-2-posti-beige-auguste-249620.htm",
    "larghezza_cm": 140,
    "profondita_cm": 102,
    "descrizione": "Divano 2 posti beige"
  },
  {
    "nome": "Element Business - Piano per tavolo professionale da interno in vetro effetto marmo verde per 2 persone lung. 70 cm",
    "categoria": "Altri mobili",
    "prezzo": 99.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/piano-per-tavolo-professionale-da-interno-in-vetro-effetto-marmo-verde-per-2-persone-lung-70-cm-1000-14-31-230041_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/piano-per-tavolo-professionale-da-interno-in-vetro-effetto-marmo-verde-per-2-persone-lung-70-cm-element-business-230041.htm",
    "larghezza_cm": 70,
    "profondita_cm": 70,
    "descrizione": "Piano per tavolo professionale da interno in vetro effetto marmo verde per 2 persone lung. 70 cm"
  },
  {
    "nome": "Ayame - Sedia pieghevole in legno di faggio e paglia di Vienna",
    "categoria": "Sedie",
    "prezzo": 99.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-pieghevole-in-legno-di-faggio-e-paglia-di-vienna-1000-1-10-238630_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-pieghevole-in-legno-di-faggio-e-paglia-di-vienna-ayame-238630.htm",
    "larghezza_cm": 47,
    "profondita_cm": 61,
    "descrizione": "Sedia pieghevole in legno di faggio e paglia di Vienna"
  },
  {
    "nome": "Cezembre - Comò a 5 cassetti in legno massello di mango bianco 118 cm",
    "categoria": "Cassettiere",
    "prezzo": 719,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/como-a-5-cassetti-in-legno-massello-di-mango-bianco-118-cm-1000-12-8-175775_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/como-a-5-cassetti-in-legno-massello-di-mango-bianco-118-cm-cezembre-175775.htm",
    "larghezza_cm": 118,
    "profondita_cm": 43,
    "descrizione": "Comò a 5 cassetti in legno massello di mango bianco 118 cm"
  },
  {
    "nome": "Origami - Madia vintage 2 ante 2 cassetti 165 cm",
    "categoria": "Credenze",
    "prezzo": 629,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/madia-vintage-2-ante-2-cassetti-165-cm-1000-12-35-155630_9.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/madia-vintage-2-ante-2-cassetti-165-cm-origami-155630.htm",
    "larghezza_cm": 165,
    "profondita_cm": 45,
    "descrizione": "Madia vintage 2 ante 2 cassetti 165 cm"
  },
  {
    "nome": "Goa - Letto a baldacchino in legno massello di acacia wengé 160x200 cm",
    "categoria": "Letti",
    "prezzo": 629,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/letto-a-baldacchino-in-legno-massello-di-acacia-wenge-160x200-cm-1000-4-3-50120084_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/letto-a-baldacchino-in-legno-massello-di-acacia-wenge-160x200-cm-goa-50120084.htm",
    "larghezza_cm": 173,
    "profondita_cm": 216,
    "descrizione": "Letto a baldacchino in legno massello di acacia wengé 160x200 cm"
  },
  {
    "nome": "Sunset - Divano angolare con penisola a sinistra 5/6 posti in tessuto di ciniglia verde",
    "categoria": "Divani",
    "prezzo": 1599,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-angolare-con-penisola-a-sinistra-5-6-posti-in-tessuto-di-ciniglia-verde-1000-7-6-246949_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-angolare-con-penisola-a-sinistra-5-6-posti-in-tessuto-di-ciniglia-verde-sunset-246949.htm",
    "larghezza_cm": 291,
    "profondita_cm": 281,
    "descrizione": "Divano angolare con penisola a sinistra 5/6 posti in tessuto di ciniglia verde"
  },
  {
    "nome": "Tabella stampata dei tappi di bottiglia, 16x21 cm",
    "categoria": "Decorazioni",
    "prezzo": 11.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tabella-stampata-dei-tappi-di-bottiglia-16x21-cm-1000-9-26-208429_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tabella-stampata-dei-tappi-di-bottiglia-16x21-cm-208429.htm",
    "larghezza_cm": 15.5,
    "profondita_cm": 7,
    "descrizione": "Tabella stampata dei tappi di bottiglia, 16x21 cm"
  },
  {
    "nome": "Lampada a sospensione non elettrificata in rattan Ø 60 cm",
    "categoria": "Lampade",
    "prezzo": 59.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/lampada-a-sospensione-non-elettrificata-in-rattan-oe-60-cm-1000-5-37-189334_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/lampada-a-sospensione-non-elettrificata-in-rattan-oe-60-cm-189334.htm",
    "larghezza_cm": 60,
    "profondita_cm": 60,
    "descrizione": "Lampada a sospensione non elettrificata in rattan Ø 60 cm"
  },
  {
    "nome": "Aureus - Armadio a 2 ante in legno di mango e alluminio color oro, largo 120 cm.",
    "categoria": "Armadi",
    "prezzo": 1399,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/armadio-a-2-ante-in-legno-di-mango-e-alluminio-color-oro-largo-120-cm-1000-8-28-242666_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/armadio-a-2-ante-in-legno-di-mango-e-alluminio-color-oro-largo-120-cm-aureus-242666.htm",
    "larghezza_cm": 120,
    "profondita_cm": 55,
    "descrizione": "Armadio a 2 ante in legno di mango e alluminio color oro, largo 120 cm."
  },
  {
    "nome": "Caraffa in vetro con coperchio in bambù, 1,2 l",
    "categoria": "Cucina",
    "prezzo": 14.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/caraffa-in-vetro-con-coperchio-in-bambu-1-2-l-1000-16-24-195635_3.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/caraffa-in-vetro-con-coperchio-in-bambu-1-2-l-195635.htm",
    "larghezza_cm": 9,
    "profondita_cm": 14,
    "descrizione": "Caraffa in vetro con coperchio in bambù, 1,2 l"
  },
  {
    "nome": "Espositore girevole in acacia",
    "categoria": "Cucina",
    "prezzo": 32.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/espositore-girevole-in-acacia-1000-2-28-236557_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/espositore-girevole-in-acacia-236557.htm",
    "larghezza_cm": 35,
    "profondita_cm": 35,
    "descrizione": "Espositore girevole in acacia"
  },
  {
    "nome": "Set da aperitivo con 3 coppette in ceramica stampata e vassoio in bambù",
    "categoria": "Cucina",
    "prezzo": 19.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/set-da-aperitivo-con-3-coppette-in-ceramica-stampata-e-vassoio-in-bambu-1000-6-11-196237_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/set-da-aperitivo-con-3-coppette-in-ceramica-stampata-e-vassoio-in-bambu-196237.htm",
    "larghezza_cm": 32.5,
    "profondita_cm": 11,
    "descrizione": "Set da aperitivo con 3 coppette in ceramica stampata e vassoio in bambù"
  },
  {
    "nome": "Louvain - Divano trasformabile a 2 posti in tessuto beige effetto lino, materasso 10 cm",
    "categoria": "Divani",
    "prezzo": 1099,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-trasformabile-a-2-posti-in-tessuto-beige-effetto-lino-materasso-10-cm-1000-8-37-242224_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-trasformabile-a-2-posti-in-tessuto-beige-effetto-lino-materasso-10-cm-louvain-242224.htm",
    "larghezza_cm": 163,
    "profondita_cm": 98,
    "descrizione": "Divano trasformabile a 2 posti in tessuto beige effetto lino, materasso 10 cm"
  },
  {
    "nome": "Sacha Business - Sedia da pranzo professionale in velluto ocra",
    "categoria": "Sedie",
    "prezzo": 179,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-da-pranzo-professionale-in-velluto-ocra-1000-2-23-222940_5.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-da-pranzo-professionale-in-velluto-ocra-sacha-business-222940.htm",
    "larghezza_cm": 57,
    "profondita_cm": 60,
    "descrizione": "Sedia da pranzo professionale in velluto ocra"
  },
  {
    "nome": "Riverside - Madia vintage a 3 ante e 3 cassetti bianca 220 cm",
    "categoria": "Credenze",
    "prezzo": 1299,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/madia-vintage-a-3-ante-e-3-cassetti-bianca-220-cm-1000-14-16-187099_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/madia-vintage-a-3-ante-e-3-cassetti-bianca-220-cm-riverside-187099.htm",
    "larghezza_cm": 220,
    "profondita_cm": 45,
    "descrizione": "Madia vintage a 3 ante e 3 cassetti bianca 220 cm"
  },
  {
    "nome": "Decorazione da parete in acciaio placcato oro, 80x80 cm",
    "categoria": "Decorazioni",
    "prezzo": 119,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/decorazione-da-parete-in-acciaio-placcato-oro-80x80-cm-1000-4-34-232955_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/decorazione-da-parete-in-acciaio-placcato-oro-80x80-cm-232955.htm",
    "larghezza_cm": 80,
    "profondita_cm": 3,
    "descrizione": "Decorazione da parete in acciaio placcato oro, 80x80 cm"
  },
  {
    "nome": "Lampada da sospensione a petali in rattan intrecciato",
    "categoria": "Lampade",
    "prezzo": 89.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/lampada-da-sospensione-a-petali-in-rattan-intrecciato-1000-6-17-241712_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/lampada-da-sospensione-a-petali-in-rattan-intrecciato-241712.htm",
    "larghezza_cm": 63,
    "profondita_cm": 63,
    "descrizione": "Lampada da sospensione a petali in rattan intrecciato"
  },
  {
    "nome": "Bohemian - Armadio a 2 ante con motivi floreali multicolore 110 cm",
    "categoria": "Armadi",
    "prezzo": 999,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/armadio-a-2-ante-con-motivi-floreali-multicolore-110-cm-1000-1-2-246535_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/armadio-a-2-ante-con-motivi-floreali-multicolore-110-cm-bohemian-246535.htm",
    "larghezza_cm": 110.5,
    "profondita_cm": 55.5,
    "descrizione": "Armadio a 2 ante con motivi floreali multicolore 110 cm"
  },
  {
    "nome": "Esta - Sedia in legno di frassino e rattan",
    "categoria": "Sedie",
    "prezzo": 139,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-in-legno-di-frassino-e-rattan-1000-15-14-219774_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-in-legno-di-frassino-e-rattan-esta-219774.htm",
    "larghezza_cm": 45,
    "profondita_cm": 49,
    "descrizione": "Sedia in legno di frassino e rattan"
  },
  {
    "nome": "Chamarel - Comò compatibile con fasciatoio 3 cassetti verde chiaro",
    "categoria": "Cassettiere",
    "prezzo": 299,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/como-compatibile-con-fasciatoio-3-cassetti-verde-chiaro-1000-7-6-250434_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/como-compatibile-con-fasciatoio-3-cassetti-verde-chiaro-chamarel-250434.htm",
    "larghezza_cm": 90,
    "profondita_cm": 52,
    "descrizione": "Comò compatibile con fasciatoio 3 cassetti verde chiaro"
  },
  {
    "nome": "Sixties - Letto vintage in legno 140x200 cm con rete a doghe",
    "categoria": "Letti",
    "prezzo": 269,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/letto-vintage-in-legno-140x200-cm-con-rete-a-doghe-1000-10-1-248584_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/letto-vintage-in-legno-140x200-cm-con-rete-a-doghe-sixties-248584.htm",
    "larghezza_cm": 140,
    "profondita_cm": 200,
    "descrizione": "Letto vintage in legno 140x200 cm con rete a doghe"
  },
  {
    "nome": "Dittico ricamato con motivi astratti 160x121 cm",
    "categoria": "Decorazioni",
    "prezzo": 179,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/254327_0/dittico-ricamato-con-motivi-astratti-160x121-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/dittico-ricamato-con-motivi-astratti-160x121-cm-254327.htm",
    "larghezza_cm": 160,
    "profondita_cm": 4,
    "descrizione": "Dittico ricamato con motivi astratti 160x121 cm"
  },
  {
    "nome": "Lampada da terra in bambù intrecciato e acciaio beige, H168",
    "categoria": "Lampade",
    "prezzo": 159,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/lampada-da-terra-in-bambu-intrecciato-e-acciaio-beige-h168-1000-8-14-223915_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/lampada-da-terra-in-bambu-intrecciato-e-acciaio-beige-h168-223915.htm",
    "larghezza_cm": 22,
    "profondita_cm": 22,
    "descrizione": "Lampada da terra in bambù intrecciato e acciaio beige, H168"
  },
  {
    "nome": "Cambronne - Armadio a 2 ante e 1 cassetto nero 115 cm",
    "categoria": "Armadi",
    "prezzo": 849,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/armadio-a-2-ante-e-1-cassetto-nero-115-cm-1000-1-19-228430_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/armadio-a-2-ante-e-1-cassetto-nero-115-cm-cambronne-228430.htm",
    "larghezza_cm": 115,
    "profondita_cm": 54.5,
    "descrizione": "Armadio a 2 ante e 1 cassetto nero 115 cm"
  },
  {
    "nome": "Divano angolare con penisola a destra 4/5 posti in tessuto bouclé écru",
    "categoria": "Divani",
    "prezzo": 1399,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/252503/divano-angolare-con-penisola-a-destra-4-5-posti-in-tessuto-boucle-ecru.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-angolare-con-penisola-a-destra-4-5-posti-in-tessuto-boucle-ecru-252503.htm",
    "larghezza_cm": 270,
    "profondita_cm": 164,
    "descrizione": "Divano angolare con penisola a destra 4/5 posti in tessuto bouclé écru"
  },
  {
    "nome": "Arckos - Cassettiera a 4 cassetti color crema 85 cm",
    "categoria": "Cassettiere",
    "prezzo": 499,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/cassettiera-a-4-cassetti-color-crema-85-cm-1000-6-7-245843_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/cassettiera-a-4-cassetti-color-crema-85-cm-arckos-245843.htm",
    "larghezza_cm": 85,
    "profondita_cm": 50,
    "descrizione": "Cassettiera a 4 cassetti color crema 85 cm"
  },
  {
    "nome": "Sixties - Letto vintage in legno bianco 140x190 cm con rete a doghe",
    "categoria": "Letti",
    "prezzo": 249,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/letto-vintage-in-legno-bianco-140x190-cm-con-rete-a-doghe-1000-8-40-248582_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/letto-vintage-in-legno-bianco-140x190-cm-con-rete-a-doghe-sixties-248582.htm",
    "larghezza_cm": 140,
    "profondita_cm": 190,
    "descrizione": "Letto vintage in legno bianco 140x190 cm con rete a doghe"
  },
  {
    "nome": "Chamarel - Armadio a 3 ante verde chiaro",
    "categoria": "Armadi",
    "prezzo": 699,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/armadio-a-3-ante-verde-chiaro-1000-10-28-249349_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/armadio-a-3-ante-verde-chiaro-chamarel-249349.htm",
    "larghezza_cm": 120,
    "profondita_cm": 54,
    "descrizione": "Armadio a 3 ante verde chiaro"
  },
  {
    "nome": "Calice in vetro sfumato trasparente e color ambra brillante",
    "categoria": "Cucina",
    "prezzo": 6.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/calice-in-vetro-sfumato-trasparente-e-color-ambra-brillante-1000-11-9-238793_2.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/calice-in-vetro-sfumato-trasparente-e-color-ambra-brillante-238793.htm",
    "larghezza_cm": 8.5,
    "profondita_cm": 8.5,
    "descrizione": "Calice in vetro sfumato trasparente e color ambra brillante"
  },
  {
    "nome": "Ice - Sedia in stile scandinavo nero ebano e legno di hevea",
    "categoria": "Sedie",
    "prezzo": 69.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-in-stile-scandinavo-nero-ebano-e-legno-di-hevea-1000-1-8-210461_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-in-stile-scandinavo-nero-ebano-e-legno-di-hevea-ice-210461.htm",
    "larghezza_cm": 48,
    "profondita_cm": 54.5,
    "descrizione": "Sedia in stile scandinavo nero ebano e legno di hevea"
  },
  {
    "nome": "Solstice - Madia a 2 ante intreccio in rattan 100 cm",
    "categoria": "Credenze",
    "prezzo": 249,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/madia-a-2-ante-intreccio-in-rattan-100-cm-1000-6-25-196169_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/madia-a-2-ante-intreccio-in-rattan-100-cm-solstice-196169.htm",
    "larghezza_cm": 100,
    "profondita_cm": 45,
    "descrizione": "Madia a 2 ante intreccio in rattan 100 cm"
  },
  {
    "nome": "Newport - Letto in legno di pino bianco 160x200 cm con rete a doghe",
    "categoria": "Letti",
    "prezzo": 479,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/letto-in-legno-di-pino-bianco-160x200-cm-con-rete-a-doghe-1000-16-21-248522_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/letto-in-legno-di-pino-bianco-160x200-cm-con-rete-a-doghe-newport-248522.htm",
    "larghezza_cm": 169.6,
    "profondita_cm": 213,
    "descrizione": "Letto in legno di pino bianco 160x200 cm con rete a doghe"
  },
  {
    "nome": "Lampada a sospensione in cotone bianco sporco",
    "categoria": "Lampade",
    "prezzo": 69.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/lampada-a-sospensione-in-cotone-bianco-sporco-1000-0-20-246143_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/lampada-a-sospensione-in-cotone-bianco-sporco-246143.htm",
    "larghezza_cm": 60,
    "profondita_cm": 60,
    "descrizione": "Lampada a sospensione in cotone bianco sporco"
  },
  {
    "nome": "Benares - Armadio in massello di mango 74 cm",
    "categoria": "Armadi",
    "prezzo": 599,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/armadio-in-massello-di-mango-74-cm-1000-9-14-146753_0.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/armadio-in-massello-di-mango-74-cm-benares-146753.htm",
    "larghezza_cm": 74,
    "profondita_cm": 38,
    "descrizione": "Armadio in massello di mango 74 cm"
  },
  {
    "nome": "Portabottiglie in acciaio nero opaco",
    "categoria": "Cucina",
    "prezzo": 24.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/portabottiglie-in-acciaio-nero-opaco-1000-4-1-211807_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/portabottiglie-in-acciaio-nero-opaco-211807.htm",
    "larghezza_cm": 31.5,
    "profondita_cm": 17.5,
    "descrizione": "Portabottiglie in acciaio nero opaco"
  },
  {
    "nome": "Lotto di 4 - Set di 20 tovaglioli in carta bianca con motivo pesci blu",
    "categoria": "Cucina",
    "prezzo": 13.96,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/set-di-20-tovaglioli-in-carta-bianca-con-motivo-pesci-blu-1000-6-15-223301_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/set-di-20-tovaglioli-in-carta-bianca-con-motivo-pesci-blu-223301.htm",
    "larghezza_cm": 16.5,
    "profondita_cm": 16.5,
    "descrizione": "Set di 20 tovaglioli in carta bianca con motivo pesci blu"
  },
  {
    "nome": "Lilo - Divano angolare con penisola a sinistra 4/5 posti grigio chiaro",
    "categoria": "Divani",
    "prezzo": 1699,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-angolare-con-penisola-a-sinistra-4-5-posti-grigio-chiaro-1000-2-3-243051_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-angolare-con-penisola-a-sinistra-4-5-posti-grigio-chiaro-lilo-243051.htm",
    "larghezza_cm": 272,
    "profondita_cm": 168,
    "descrizione": "Divano angolare con penisola a sinistra 4/5 posti grigio chiaro"
  },
  {
    "nome": "Element Business - Piano per tavolo professionale da interno in marmo 2/4 persone, 70 cm",
    "categoria": "Altri mobili",
    "prezzo": 167.2,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/piano-per-tavolo-professionale-da-interno-in-marmo-2-4-persone-70-cm-1000-11-12-243757_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/piano-per-tavolo-professionale-da-interno-in-marmo-2-4-persone-70-cm-element-business-243757.htm",
    "larghezza_cm": 70,
    "profondita_cm": 70,
    "descrizione": "Piano per tavolo professionale da interno in marmo 2/4 persone, 70 cm"
  },
  {
    "nome": "Tony - Comò doppio con 6 cassetti 130 cm",
    "categoria": "Cassettiere",
    "prezzo": 749,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/como-doppio-con-6-cassetti-130-cm-1000-7-22-233927_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/como-doppio-con-6-cassetti-130-cm-tony-233927.htm",
    "larghezza_cm": 130,
    "profondita_cm": 47,
    "descrizione": "Comò doppio con 6 cassetti 130 cm"
  },
  {
    "nome": "Dodino - Letto in bouclé di poliestere riciclato écru 160x200 con rete a doghe",
    "categoria": "Letti",
    "prezzo": 1499,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/letto-in-boucle-di-poliestere-riciclato-ecru-160x200-con-rete-a-doghe-1000-5-26-241762_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/letto-in-boucle-di-poliestere-riciclato-ecru-160x200-con-rete-a-doghe-dodino-241762.htm",
    "larghezza_cm": 229,
    "profondita_cm": 258,
    "descrizione": "Letto in bouclé di poliestere riciclato écru 160x200 con rete a doghe"
  },
  {
    "nome": "Cuscino in lino lavato beige 45x45cm",
    "categoria": "Tessile",
    "prezzo": 25.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/cuscino-in-lino-lavato-beige-45x45cm-1000-15-40-223531_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/cuscino-in-lino-lavato-beige-45x45cm-223531.htm",
    "larghezza_cm": 45,
    "profondita_cm": 10,
    "descrizione": "Cuscino in lino lavato beige 45x45cm"
  },
  {
    "nome": "Chamarel - Armadio a 3 ante bianco",
    "categoria": "Armadi",
    "prezzo": 699,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/armadio-a-3-ante-bianco-1000-7-25-249346_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/armadio-a-3-ante-bianco-chamarel-249346.htm",
    "larghezza_cm": 120,
    "profondita_cm": 54,
    "descrizione": "Armadio a 3 ante bianco"
  },
  {
    "nome": "Spy - Divano a 2/3 posti in tessuto bouclé bianco",
    "categoria": "Divani",
    "prezzo": 399,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-a-2-3-posti-in-tessuto-boucle-bianco-1000-1-5-213861_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-a-2-3-posti-in-tessuto-boucle-bianco-spy-213861.htm",
    "larghezza_cm": 160,
    "profondita_cm": 80,
    "descrizione": "Divano a 2/3 posti in tessuto bouclé bianco"
  },
  {
    "nome": "Element Business - Piano per tavolo professionale quadrato in plastica riciclata Le Pavé® con effetto terrazzo per 2 persone lung. 70 cm",
    "categoria": "Altri mobili",
    "prezzo": 189,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/piano-per-tavolo-professionale-quadrato-in-plastica-riciclata-le-pave-con-effetto-terrazzo-per-2-persone-lung-70-cm-1000-7-18-243804_2.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/piano-per-tavolo-professionale-quadrato-in-plastica-riciclata-le-pave-con-effetto-terrazzo-per-2-persone-lung-70-cm-element-business-243804.htm",
    "larghezza_cm": 70,
    "profondita_cm": 70,
    "descrizione": "Piano per tavolo professionale quadrato in plastica riciclata Le Pavé® con effetto terrazzo per 2 persone lung. 70 cm"
  },
  {
    "nome": "Tradition - Sedia bistrot in faggio e bambù",
    "categoria": "Sedie",
    "prezzo": 99.99,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/230985_0/sedia-bistrot-in-faggio-e-bambu.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-bistrot-in-faggio-e-bambu-tradition-230985.htm",
    "larghezza_cm": 49,
    "profondita_cm": 56,
    "descrizione": "Sedia bistrot in faggio e bambù"
  },
  {
    "nome": "Palmyre - Madia a 2 ante con fantasia vegetale multicolore 98 cm",
    "categoria": "Credenze",
    "prezzo": 299,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/madia-a-2-ante-con-fantasia-vegetale-multicolore-98-cm-1000-8-0-248378_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/madia-a-2-ante-con-fantasia-vegetale-multicolore-98-cm-palmyre-248378.htm",
    "larghezza_cm": 98,
    "profondita_cm": 42,
    "descrizione": "Madia a 2 ante con fantasia vegetale multicolore 98 cm"
  },
  {
    "nome": "Shanghaï - Armadio a 2 ante e 2 cassetti nero 117 cm",
    "categoria": "Armadi",
    "prezzo": 959,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/armadio-a-2-ante-e-2-cassetti-nero-117-cm-1000-3-29-243528_10.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/armadio-a-2-ante-e-2-cassetti-nero-117-cm-shanghai-243528.htm",
    "larghezza_cm": 117,
    "profondita_cm": 57,
    "descrizione": "Armadio a 2 ante e 2 cassetti nero 117 cm"
  },
  {
    "nome": "Portafrutta in gres bianco",
    "categoria": "Cucina",
    "prezzo": 22.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/portafrutta-in-gres-bianco-1000-9-9-244656_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/portafrutta-in-gres-bianco-244656.htm",
    "larghezza_cm": 24.5,
    "profondita_cm": 24.5,
    "descrizione": "Portafrutta in gres bianco"
  },
  {
    "nome": "Romy - Divano trasformabile 3 posti in bouclé beige, materasso 12 cm",
    "categoria": "Divani",
    "prezzo": 1499,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-trasformabile-3-posti-in-boucle-beige-materasso-12-cm-1000-11-12-247242_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-trasformabile-3-posti-in-boucle-beige-materasso-12-cm-romy-247242.htm",
    "larghezza_cm": 202,
    "profondita_cm": 103,
    "descrizione": "Divano trasformabile 3 posti in bouclé beige, materasso 12 cm"
  },
  {
    "nome": "Ginette - Sedia in velluto nero",
    "categoria": "Sedie",
    "prezzo": 89.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-in-velluto-nero-1000-5-6-209598_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-in-velluto-nero-ginette-209598.htm",
    "larghezza_cm": 49,
    "profondita_cm": 55,
    "descrizione": "Sedia in velluto nero"
  },
  {
    "nome": "Selena - Comò con 3 cassetti verde kaki lung. 83 cm",
    "categoria": "Cassettiere",
    "prezzo": 299,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/como-con-3-cassetti-verde-kaki-lung-83-cm-1000-0-34-237711_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/como-con-3-cassetti-verde-kaki-lung-83-cm-selena-237711.htm",
    "larghezza_cm": 82.5,
    "profondita_cm": 42,
    "descrizione": "Comò con 3 cassetti verde kaki lung. 83 cm"
  },
  {
    "nome": "Lampada a sospensione in poliestere riciclato plissettato bianco sporco e globo in vetro opaco",
    "categoria": "Lampade",
    "prezzo": 79.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/lampada-a-sospensione-in-poliestere-riciclato-plissettato-bianco-sporco-e-globo-in-vetro-opaco-1000-11-0-246205_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/lampada-a-sospensione-in-poliestere-riciclato-plissettato-bianco-sporco-e-globo-in-vetro-opaco-246205.htm",
    "larghezza_cm": 45,
    "profondita_cm": 45,
    "descrizione": "Lampada a sospensione in poliestere riciclato plissettato bianco sporco e globo in vetro opaco"
  },
  {
    "nome": "Decorazione murale composta da cerchi in ghisa, alluminio dorato e specchi, 104x50 cm",
    "categoria": "Decorazioni",
    "prezzo": 64.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/decorazione-murale-composta-da-cerchi-in-ghisa-alluminio-dorato-e-specchi-104x50-cm-1000-11-6-247072_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/decorazione-murale-composta-da-cerchi-in-ghisa-alluminio-dorato-e-specchi-104x50-cm-247072.htm",
    "larghezza_cm": 104,
    "profondita_cm": 4,
    "descrizione": "Decorazione murale composta da cerchi in ghisa, alluminio dorato e specchi, 104x50 cm"
  },
  {
    "nome": "Caldera - Armadio con 2 ante battenti scolpite e 2 cassetti 93 cm",
    "categoria": "Armadi",
    "prezzo": 899,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/armadio-con-2-ante-battenti-scolpite-e-2-cassetti-93-cm-1000-16-32-217701_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/armadio-con-2-ante-battenti-scolpite-e-2-cassetti-93-cm-caldera-217701.htm",
    "larghezza_cm": 93.2,
    "profondita_cm": 50,
    "descrizione": "Armadio con 2 ante battenti scolpite e 2 cassetti 93 cm"
  },
  {
    "nome": "Bizou - Poltrona in tessuto bouclé grigio chiné",
    "categoria": "Poltrone",
    "prezzo": 299,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltrona-in-tessuto-boucle-grigio-chine-1000-6-0-243089_2.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-in-tessuto-boucle-grigio-chine-bizou-243089.htm",
    "larghezza_cm": 73,
    "profondita_cm": 70.5,
    "descrizione": "Poltrona in tessuto bouclé grigio chiné"
  },
  {
    "nome": "Element Business - Piano per tavolo professionale da interno in vetro effetto marmo marrone per 2 persone lung. 70 cm",
    "categoria": "Altri mobili",
    "prezzo": 99.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/piano-per-tavolo-professionale-da-interno-in-vetro-effetto-marmo-marrone-per-2-persone-lung-70-cm-1000-15-32-230042_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/piano-per-tavolo-professionale-da-interno-in-vetro-effetto-marmo-marrone-per-2-persone-lung-70-cm-element-business-230042.htm",
    "larghezza_cm": 70,
    "profondita_cm": 70,
    "descrizione": "Piano per tavolo professionale da interno in vetro effetto marmo marrone per 2 persone lung. 70 cm"
  },
  {
    "nome": "Neus - Sedia in velluto nero e acciaio dorato",
    "categoria": "Sedie",
    "prezzo": 159,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-in-velluto-nero-e-acciaio-dorato-1000-5-17-244295_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-in-velluto-nero-e-acciaio-dorato-neus-244295.htm",
    "larghezza_cm": 60.5,
    "profondita_cm": 60,
    "descrizione": "Sedia in velluto nero e acciaio dorato"
  },
  {
    "nome": "Panca contenitore rosa",
    "categoria": "Divani",
    "prezzo": 179,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/panca-contenitore-rosa-1000-10-30-233607_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/panca-contenitore-rosa-233607.htm",
    "larghezza_cm": 109,
    "profondita_cm": 40.5,
    "descrizione": "Panca contenitore rosa"
  },
  {
    "nome": "Canopy - Madia a 3 ante in paglia di Vienna 180 cm",
    "categoria": "Credenze",
    "prezzo": 649,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/madia-a-3-ante-in-paglia-di-vienna-180-cm-1000-12-18-219737_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/madia-a-3-ante-in-paglia-di-vienna-180-cm-canopy-219737.htm",
    "larghezza_cm": 180,
    "profondita_cm": 45,
    "descrizione": "Madia a 3 ante in paglia di Vienna 180 cm"
  },
  {
    "nome": "Santa Fe - Letto in legno massello di acacia e paglia di Vienna 160x200 cm con rete a doghe",
    "categoria": "Letti",
    "prezzo": 799,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/letto-in-legno-massello-di-acacia-e-paglia-di-vienna-160x200-cm-con-rete-a-doghe-1000-7-12-242937_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/letto-in-legno-massello-di-acacia-e-paglia-di-vienna-160x200-cm-con-rete-a-doghe-santa-fe-242937.htm",
    "larghezza_cm": 167,
    "profondita_cm": 217,
    "descrizione": "Letto in legno massello di acacia e paglia di Vienna 160x200 cm con rete a doghe"
  },
  {
    "nome": "Brooke - Divano stile scandinavo 3 posti in velluto a coste beige",
    "categoria": "Divani",
    "prezzo": 699,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-stile-scandinavo-3-posti-in-velluto-a-coste-beige-1000-7-21-250162_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-stile-scandinavo-3-posti-in-velluto-a-coste-beige-brooke-250162.htm",
    "larghezza_cm": 202,
    "profondita_cm": 88,
    "descrizione": "Divano stile scandinavo 3 posti in velluto a coste beige"
  },
  {
    "nome": "Himalaya - Armadio in massello di mango 100 cm",
    "categoria": "Armadi",
    "prezzo": 999,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/146728_0/armadio-in-massello-di-mango-100-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/armadio-in-massello-di-mango-100-cm-himalaya-146728.htm",
    "larghezza_cm": 100,
    "profondita_cm": 50,
    "descrizione": "Armadio in massello di mango 100 cm"
  },
  {
    "nome": "Olivia - Divano angolare trasformabile a 4/5 posti in pelle caramello",
    "categoria": "Divani",
    "prezzo": 1899,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-angolare-trasformabile-a-4-5-posti-in-pelle-caramello-1000-16-31-217905_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-angolare-trasformabile-a-4-5-posti-in-pelle-caramello-olivia-217905.htm",
    "larghezza_cm": 244,
    "profondita_cm": 153,
    "descrizione": "Divano angolare trasformabile a 4/5 posti in pelle caramello"
  },
  {
    "nome": "Casanova - Poltrona effetto lino con fantasia a righe beige",
    "categoria": "Poltrone",
    "prezzo": 419,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltrona-effetto-lino-con-fantasia-a-righe-beige-1000-16-28-249185_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-effetto-lino-con-fantasia-a-righe-beige-casanova-249185.htm",
    "larghezza_cm": 67,
    "profondita_cm": 74,
    "descrizione": "Poltrona effetto lino con fantasia a righe beige"
  },
  {
    "nome": "Element Business - Piano per tavolo professionale da interno in marmo bianco per 2 persone lung. 70 cm",
    "categoria": "Altri mobili",
    "prezzo": 175.2,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/piano-per-tavolo-professionale-da-interno-in-marmo-bianco-per-2-persone-lung-70-cm-1000-3-4-243749_2.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/piano-per-tavolo-professionale-da-interno-in-marmo-bianco-per-2-persone-lung-70-cm-element-business-243749.htm",
    "larghezza_cm": 70,
    "profondita_cm": 70,
    "descrizione": "Piano per tavolo professionale da interno in marmo bianco per 2 persone lung. 70 cm"
  },
  {
    "nome": "Cassettiera a 5 cassetti in impiallacciatura di rovere, lung. 100 cm",
    "categoria": "Cassettiere",
    "prezzo": 649,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/253258_0/cassettiera-a-5-cassetti-in-impiallacciatura-di-rovere-lung-100-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/cassettiera-a-5-cassetti-in-impiallacciatura-di-rovere-lung-100-cm-253258.htm",
    "larghezza_cm": 100,
    "profondita_cm": 45,
    "descrizione": "Cassettiera a 5 cassetti in impiallacciatura di rovere, lung. 100 cm"
  },
  {
    "nome": "Letto 160x200 cm in acciaio e legno di pioppo con rete a doghe",
    "categoria": "Letti",
    "prezzo": 299,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/252712/letto-160x200-cm-in-acciaio-e-legno-di-pioppo-con-rete-a-doghe.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/letto-160x200-cm-in-acciaio-e-legno-di-pioppo-con-rete-a-doghe-252712.htm",
    "larghezza_cm": 168,
    "profondita_cm": 211,
    "descrizione": "Letto 160x200 cm in acciaio e legno di pioppo con rete a doghe"
  },
  {
    "nome": "Vaso in gres grigio alt. 19cm",
    "categoria": "Decorazioni",
    "prezzo": 10.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/vaso-in-gres-grigio-alt-19cm-1000-15-24-228189_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/vaso-in-gres-grigio-alt-19cm-228189.htm",
    "larghezza_cm": 18,
    "profondita_cm": 7.5,
    "descrizione": "Vaso in gres grigio alt. 19cm"
  },
  {
    "nome": "Newport - Guardaroba a 2 cassetti bianca 114 cm",
    "categoria": "Armadi",
    "prezzo": 699,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/228434/guardaroba-a-2-cassetti-bianca-114-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/guardaroba-a-2-cassetti-bianca-114-cm-newport-228434.htm",
    "larghezza_cm": 114,
    "profondita_cm": 61,
    "descrizione": "Guardaroba a 2 cassetti bianca 114 cm"
  },
  {
    "nome": "Lilo - Divano angolare con penisola a destra 4/5 posti effetto velluto color cognac",
    "categoria": "Divani",
    "prezzo": 1699,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-angolare-con-penisola-a-destra-4-5-posti-effetto-velluto-color-cognac-1000-13-39-249811_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-angolare-con-penisola-a-destra-4-5-posti-effetto-velluto-color-cognac-lilo-249811.htm",
    "larghezza_cm": 272,
    "profondita_cm": 168,
    "descrizione": "Divano angolare con penisola a destra 4/5 posti effetto velluto color cognac"
  },
  {
    "nome": "Oxford - Poltrona Club marrone in cuoio",
    "categoria": "Poltrone",
    "prezzo": 699,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltrona-club-marrone-in-cuoio-1000-15-1-241942_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-club-marrone-in-cuoio-oxford-241942.htm",
    "larghezza_cm": 87,
    "profondita_cm": 91,
    "descrizione": "Poltrona Club marrone in cuoio"
  },
  {
    "nome": "Element Business - Piano per tavolo professionale da interno in vetro nero 2/4 persone, D 70 cm",
    "categoria": "Altri mobili",
    "prezzo": 209,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/piano-per-tavolo-professionale-da-interno-in-vetro-nero-2-4-persone-d-70-cm-1000-5-27-199738_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/piano-per-tavolo-professionale-da-interno-in-vetro-nero-2-4-persone-d-70-cm-element-business-199738.htm",
    "larghezza_cm": 70,
    "profondita_cm": 70,
    "descrizione": "Piano per tavolo professionale da interno in vetro nero 2/4 persone, D 70 cm"
  },
  {
    "nome": "Louis - Sedia a medaglione ricamata color bege in linho e massello di frassino",
    "categoria": "Sedie",
    "prezzo": 219,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-a-medaglione-ricamata-color-bege-in-linho-e-massello-di-frassino-1000-6-3-234810_2.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-a-medaglione-ricamata-color-bege-in-linho-e-massello-di-frassino-louis-234810.htm",
    "larghezza_cm": 49,
    "profondita_cm": 58,
    "descrizione": "Sedia a medaglione ricamata color bege in linho e massello di frassino"
  },
  {
    "nome": "Brooke - Divano scandinavo 3 posti grigio chiaro",
    "categoria": "Divani",
    "prezzo": 599,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-scandinavo-3-posti-grigio-chiaro-1000-15-24-166156_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-scandinavo-3-posti-grigio-chiaro-brooke-166156.htm",
    "larghezza_cm": 202,
    "profondita_cm": 88,
    "descrizione": "Divano scandinavo 3 posti grigio chiaro"
  },
  {
    "nome": "Lampada a sospensione in rattan e poliestere riciclato beige",
    "categoria": "Lampade",
    "prezzo": 49.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/lampada-a-sospensione-in-rattan-e-poliestere-riciclato-beige-1000-2-10-238835_2.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/lampada-a-sospensione-in-rattan-e-poliestere-riciclato-beige-238835.htm",
    "larghezza_cm": 40,
    "profondita_cm": 40,
    "descrizione": "Lampada a sospensione in rattan e poliestere riciclato beige"
  },
  {
    "nome": "Candela profumata con vasetto in vetro motivi grafici, 430g",
    "categoria": "Decorazioni",
    "prezzo": 16.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/candela-profumata-con-vasetto-in-vetro-motivi-grafici-430g-1000-13-11-241583_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/candela-profumata-con-vasetto-in-vetro-motivi-grafici-430g-241583.htm",
    "larghezza_cm": 12,
    "profondita_cm": 12,
    "descrizione": "Candela profumata con vasetto in vetro motivi grafici, 430g"
  },
  {
    "nome": "Divano a 2 posti in tessuto effetto velluto color cannella",
    "categoria": "Divani",
    "prezzo": 499,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/253711_0/divano-a-2-posti-in-tessuto-effetto-velluto-color-cannella.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-a-2-posti-in-tessuto-effetto-velluto-color-cannella-253711.htm",
    "larghezza_cm": 170,
    "profondita_cm": 80.5,
    "descrizione": "Divano a 2 posti in tessuto effetto velluto color cannella"
  },
  {
    "nome": "Pump Business - Materasso a molle insacchettate 180x200 cm",
    "categoria": "Letti",
    "prezzo": 799.2,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/materasso-a-molle-insacchettate-180x200-cm-1000-14-3-248299_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/materasso-a-molle-insacchettate-180x200-cm-pump-business-248299.htm",
    "larghezza_cm": 90,
    "profondita_cm": 200,
    "descrizione": "Materasso a molle insacchettate 180x200 cm"
  },
  {
    "nome": "Tela stampata astratta nei colori oro, rosa, écru e grigio, 41x60",
    "categoria": "Decorazioni",
    "prezzo": 29.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tela-stampata-astratta-nei-colori-oro-rosa-ecru-e-grigio-41x60-1000-2-38-225456_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tela-stampata-astratta-nei-colori-oro-rosa-ecru-e-grigio-41x60-225456.htm",
    "larghezza_cm": 41,
    "profondita_cm": 2,
    "descrizione": "Tela stampata astratta nei colori oro, rosa, écru e grigio, 41x60"
  },
  {
    "nome": "Naturaliste - Armadio in mango 130 cm",
    "categoria": "Armadi",
    "prezzo": 1299,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/armadio-in-mango-130-cm-1000-9-24-130773_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/armadio-in-mango-130-cm-naturaliste-130773.htm",
    "larghezza_cm": 130,
    "profondita_cm": 60,
    "descrizione": "Armadio in mango 130 cm"
  },
  {
    "nome": "Lotto di 6 - Bicchiere da cocktail in vetro inciso con motivo palme",
    "categoria": "Cucina",
    "prezzo": 17.94,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/bicchiere-da-cocktail-in-vetro-inciso-con-motivo-palme-1000-13-13-236993_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/bicchiere-da-cocktail-in-vetro-inciso-con-motivo-palme-236993.htm",
    "larghezza_cm": 8.4,
    "profondita_cm": 8.4,
    "descrizione": "Bicchiere da cocktail in vetro inciso con motivo palme"
  },
  {
    "nome": "Pitaya - Poltrona in rattan e in acciaio nero",
    "categoria": "Poltrone",
    "prezzo": 229,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltrona-in-rattan-e-in-acciaio-nero-1000-0-23-155618_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-in-rattan-e-in-acciaio-nero-pitaya-155618.htm",
    "larghezza_cm": 69,
    "profondita_cm": 68.5,
    "descrizione": "Poltrona in rattan e in acciaio nero"
  },
  {
    "nome": "Alegro - Madia a 3 ante 170 cm",
    "categoria": "Credenze",
    "prezzo": 699,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/madia-a-3-ante-170-cm-1000-16-30-234140_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/madia-a-3-ante-170-cm-alegro-234140.htm",
    "larghezza_cm": 170,
    "profondita_cm": 45,
    "descrizione": "Madia a 3 ante 170 cm"
  },
  {
    "nome": "Amazz - Letto contenitore in velluto blu 160x200 cm con rete a doghe",
    "categoria": "Letti",
    "prezzo": 699,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/letto-contenitore-in-velluto-blu-160x200-cm-con-rete-a-doghe-1000-9-39-238536_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/letto-contenitore-in-velluto-blu-160x200-cm-con-rete-a-doghe-amazz-238536.htm",
    "larghezza_cm": 187,
    "profondita_cm": 232,
    "descrizione": "Letto contenitore in velluto blu 160x200 cm con rete a doghe"
  },
  {
    "nome": "Quadro astratto bianco con motivi in rilievo 53x70 cm",
    "categoria": "Decorazioni",
    "prezzo": 27.45,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/quadro-astratto-bianco-con-motivi-in-rilievo-53x70-cm-1000-9-38-249892_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/quadro-astratto-bianco-con-motivi-in-rilievo-53x70-cm-249892.htm",
    "larghezza_cm": 52.5,
    "profondita_cm": 4,
    "descrizione": "Quadro astratto bianco con motivi in rilievo 53x70 cm"
  },
  {
    "nome": "Vaso in vetro con striature nere alt. 30 cm",
    "categoria": "Decorazioni",
    "prezzo": 11.85,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/vaso-in-vetro-con-striature-nere-alt-30-cm-1000-12-22-239831_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/vaso-in-vetro-con-striature-nere-alt-30-cm-239831.htm",
    "larghezza_cm": 12,
    "profondita_cm": 12,
    "descrizione": "Vaso in vetro con striature nere alt. 30 cm"
  },
  {
    "nome": "Barbade - Guardaroba 2 ante blanco 86 cm",
    "categoria": "Armadi",
    "prezzo": 599,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/230011/guardaroba-2-ante-blanco-86-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/guardaroba-2-ante-blanco-86-cm-barbade-230011.htm",
    "larghezza_cm": 86,
    "profondita_cm": 57,
    "descrizione": "Guardaroba 2 ante blanco 86 cm"
  },
  {
    "nome": "Bicchiere in vetro verde",
    "categoria": "Cucina",
    "prezzo": 3.99,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/254301/bicchiere-in-vetro-verde.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/bicchiere-in-vetro-verde-254301.htm",
    "larghezza_cm": 8.4,
    "profondita_cm": 8.4,
    "descrizione": "Bicchiere in vetro verde"
  },
  {
    "nome": "Tokyo - Divano angolare con penisola a sinistra 5 posti grigio chiaro screziato",
    "categoria": "Divani",
    "prezzo": 1499,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-angolare-con-penisola-a-sinistra-5-posti-grigio-chiaro-screziato-1000-16-24-241637_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-angolare-con-penisola-a-sinistra-5-posti-grigio-chiaro-screziato-tokyo-241637.htm",
    "larghezza_cm": 295,
    "profondita_cm": 175,
    "descrizione": "Divano angolare con penisola a sinistra 5 posti grigio chiaro screziato"
  },
  {
    "nome": "Shiro - Poltrona in tessuto tramato effetto tweed grigio chiaro",
    "categoria": "Poltrone",
    "prezzo": 299,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/246099/poltrona-in-tessuto-tramato-effetto-tweed-grigio-chiaro.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-in-tessuto-tramato-effetto-tweed-grigio-chiaro-shiro-246099.htm",
    "larghezza_cm": 71.5,
    "profondita_cm": 77,
    "descrizione": "Poltrona in tessuto tramato effetto tweed grigio chiaro"
  },
  {
    "nome": "Element Business - Piano rotondo per tavolo da ristorante da interno in vetro temperato color terracotta per 2 persone ⌀ 70 cm",
    "categoria": "Altri mobili",
    "prezzo": 179,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/piano-rotondo-per-tavolo-da-ristorante-da-interno-in-vetro-temperato-color-terracotta-per-2-persone-70-cm-1000-6-23-249549_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/piano-rotondo-per-tavolo-da-ristorante-da-interno-in-vetro-temperato-color-terracotta-per-2-persone-70-cm-element-business-249549.htm",
    "larghezza_cm": 70,
    "profondita_cm": 70,
    "descrizione": "Piano rotondo per tavolo da ristorante da interno in vetro temperato color terracotta per 2 persone ⌀ 70 cm"
  },
  {
    "nome": "Mangrove - Sedia in legno di frassino scuro",
    "categoria": "Sedie",
    "prezzo": 229,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-in-legno-di-frassino-scuro-1000-8-10-249823_8.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-in-legno-di-frassino-scuro-mangrove-249823.htm",
    "larghezza_cm": 55,
    "profondita_cm": 56,
    "descrizione": "Sedia in legno di frassino scuro"
  },
  {
    "nome": "Ikat - Cassettiera con 5 cassetti verde e metallo dorato",
    "categoria": "Cassettiere",
    "prezzo": 329,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/cassettiera-con-5-cassetti-verde-e-metallo-dorato-1000-8-23-233928_5.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/cassettiera-con-5-cassetti-verde-e-metallo-dorato-ikat-233928.htm",
    "larghezza_cm": 52,
    "profondita_cm": 37,
    "descrizione": "Cassettiera con 5 cassetti verde e metallo dorato"
  },
  {
    "nome": "Griffith - Letto vintage in legno massello di pino 160x200 cm con rete a doghe",
    "categoria": "Letti",
    "prezzo": 359,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/letto-vintage-in-legno-massello-di-pino-160x200-cm-con-rete-a-doghe-1000-13-24-248689_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/letto-vintage-in-legno-massello-di-pino-160x200-cm-con-rete-a-doghe-griffith-248689.htm",
    "larghezza_cm": 165,
    "profondita_cm": 206.5,
    "descrizione": "Letto vintage in legno massello di pino 160x200 cm con rete a doghe"
  },
  {
    "nome": "Neo Elementary - Pouf per divano componibile color tortora",
    "categoria": "Divani",
    "prezzo": 199,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/pouf-per-divano-componibile-color-tortora-1000-1-7-242727_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/pouf-per-divano-componibile-color-tortora-neo-elementary-242727.htm",
    "larghezza_cm": 115,
    "profondita_cm": 58,
    "descrizione": "Pouf per divano componibile color tortora"
  },
  {
    "nome": "Pianta finta da appendere in vaso di cemento",
    "categoria": "Decorazioni",
    "prezzo": 24.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/pianta-finta-da-appendere-in-vaso-di-cemento-1000-12-13-177543_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/pianta-finta-da-appendere-in-vaso-di-cemento-177543.htm",
    "larghezza_cm": 14,
    "profondita_cm": 10.7,
    "descrizione": "Pianta finta da appendere in vaso di cemento"
  },
  {
    "nome": "Vaso in maiolica verde-blu alt. 19 cm",
    "categoria": "Decorazioni",
    "prezzo": 9.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/vaso-in-maiolica-verde-blu-alt-19-cm-1000-5-6-246539_2.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/vaso-in-maiolica-verde-blu-alt-19-cm-246539.htm",
    "larghezza_cm": 10.7,
    "profondita_cm": 10.7,
    "descrizione": "Vaso in maiolica verde-blu alt. 19 cm"
  },
  {
    "nome": "Seashore - Armadio bianco a 2 ante scorrevoli 110 cm",
    "categoria": "Armadi",
    "prezzo": 399.2,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/armadio-bianco-a-2-ante-scorrevoli-110-cm-1000-2-31-247794_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/armadio-bianco-a-2-ante-scorrevoli-110-cm-seashore-247794.htm",
    "larghezza_cm": 110,
    "profondita_cm": 56,
    "descrizione": "Armadio bianco a 2 ante scorrevoli 110 cm"
  },
  {
    "nome": "Auguste - Divano 2 posti blu notte",
    "categoria": "Divani",
    "prezzo": 999,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-2-posti-blu-notte-1000-10-30-249638_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-2-posti-blu-notte-auguste-249638.htm",
    "larghezza_cm": 140,
    "profondita_cm": 102,
    "descrizione": "Divano 2 posti blu notte"
  },
  {
    "nome": "Set poltrona e poggiapiedi in tessuto tramato beige e acciaio nero",
    "categoria": "Poltrone",
    "prezzo": 499,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/253826/set-poltrona-e-poggiapiedi-in-tessuto-tramato-beige-e-acciaio-nero.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/set-poltrona-e-poggiapiedi-in-tessuto-tramato-beige-e-acciaio-nero-253826.htm",
    "larghezza_cm": 79.5,
    "profondita_cm": 136,
    "descrizione": "Set poltrona e poggiapiedi in tessuto tramato beige e acciaio nero"
  },
  {
    "nome": "Element Business - Piano rotondo per tavolo da ristorante da interno in vetro temperato verde per 2 persone ⌀ 70 cm",
    "categoria": "Altri mobili",
    "prezzo": 179,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/piano-rotondo-per-tavolo-da-ristorante-da-interno-in-vetro-temperato-verde-per-2-persone-70-cm-1000-9-26-249552_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/piano-rotondo-per-tavolo-da-ristorante-da-interno-in-vetro-temperato-verde-per-2-persone-70-cm-element-business-249552.htm",
    "larghezza_cm": 70,
    "profondita_cm": 70,
    "descrizione": "Piano rotondo per tavolo da ristorante da interno in vetro temperato verde per 2 persone ⌀ 70 cm"
  },
  {
    "nome": "Versailles - Sedia in lino color lino",
    "categoria": "Sedie",
    "prezzo": 199,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-in-lino-color-lino-1000-4-29-234672_2.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-in-lino-color-lino-versailles-234672.htm",
    "larghezza_cm": 52,
    "profondita_cm": 58,
    "descrizione": "Sedia in lino color lino"
  },
  {
    "nome": "Sacramento - Madia vintage a 3 ante 165 cm",
    "categoria": "Credenze",
    "prezzo": 839,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/madia-vintage-a-3-ante-165-cm-1000-16-29-219707_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/madia-vintage-a-3-ante-165-cm-sacramento-219707.htm",
    "larghezza_cm": 165,
    "profondita_cm": 45,
    "descrizione": "Madia vintage a 3 ante 165 cm"
  },
  {
    "nome": "Axelle - Letto con 4 cassetti in legno di pino e metallo 160x200 cm con rete a doghe",
    "categoria": "Letti",
    "prezzo": 679,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/letto-con-4-cassetti-in-legno-di-pino-e-metallo-160x200-cm-con-rete-a-doghe-1000-13-25-248485_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/letto-con-4-cassetti-in-legno-di-pino-e-metallo-160x200-cm-con-rete-a-doghe-axelle-248485.htm",
    "larghezza_cm": 164.8,
    "profondita_cm": 204.8,
    "descrizione": "Letto con 4 cassetti in legno di pino e metallo 160x200 cm con rete a doghe"
  },
  {
    "nome": "Quadri neri, beige ed ecrù (x3) 32x40",
    "categoria": "Decorazioni",
    "prezzo": 49.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/quadri-neri-beige-ed-ecru-x3-32x40-1000-0-14-237609_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/quadri-neri-beige-ed-ecru-x3-32x40-237609.htm",
    "larghezza_cm": 31.5,
    "profondita_cm": 2.5,
    "descrizione": "Quadri neri, beige ed ecrù (x3) 32x40"
  },
  {
    "nome": "Decorazioni murali a forma di rondine in dolomite bianca (x3)",
    "categoria": "Decorazioni",
    "prezzo": 19.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/decorazioni-murali-a-forma-di-rondine-in-dolomite-bianca-x3-1000-2-8-218333_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/decorazioni-murali-a-forma-di-rondine-in-dolomite-bianca-x3-218333.htm",
    "larghezza_cm": 15.5,
    "profondita_cm": 9,
    "descrizione": "Decorazioni murali a forma di rondine in dolomite bianca (x3)"
  },
  {
    "nome": "Cambronne - Armadio a 3 ante nero 179 cm",
    "categoria": "Armadi",
    "prezzo": 1179,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/armadio-a-3-ante-nero-179-cm-1000-4-24-209206_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/armadio-a-3-ante-nero-179-cm-cambronne-209206.htm",
    "larghezza_cm": 178.7,
    "profondita_cm": 54.5,
    "descrizione": "Armadio a 3 ante nero 179 cm"
  },
  {
    "nome": "Element Business - Piano per tavolo professionale da interno 2/4 persone in rovere, 70 cm",
    "categoria": "Altri mobili",
    "prezzo": 149,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/piano-per-tavolo-professionale-da-interno-2-4-persone-in-rovere-70-cm-1000-5-10-196933_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/piano-per-tavolo-professionale-da-interno-2-4-persone-in-rovere-70-cm-element-business-196933.htm",
    "larghezza_cm": 70,
    "profondita_cm": 70,
    "descrizione": "Piano per tavolo professionale da interno 2/4 persone in rovere, 70 cm"
  },
  {
    "nome": "Poltrona girevole in velluto verde kaki",
    "categoria": "Divani",
    "prezzo": 599,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/252415/poltrona-girevole-in-velluto-verde-kaki.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-girevole-in-velluto-verde-kaki-252415.htm",
    "larghezza_cm": 83,
    "profondita_cm": 81,
    "descrizione": "Poltrona girevole in velluto verde kaki"
  },
  {
    "nome": "Tela color oro, bianco e rosa antico, 60x60 cm",
    "categoria": "Decorazioni",
    "prezzo": 42.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tela-color-oro-bianco-e-rosa-antico-60x60-cm-1000-15-30-222086_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tela-color-oro-bianco-e-rosa-antico-60x60-cm-222086.htm",
    "larghezza_cm": 60,
    "profondita_cm": 2.7,
    "descrizione": "Tela color oro, bianco e rosa antico, 60x60 cm"
  },
  {
    "nome": "Vaso in dolomite bianco inciso",
    "categoria": "Decorazioni",
    "prezzo": 17.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/vaso-in-dolomite-bianco-inciso-1000-10-2-211439_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/vaso-in-dolomite-bianco-inciso-211439.htm",
    "larghezza_cm": 16,
    "profondita_cm": 16,
    "descrizione": "Vaso in dolomite bianco inciso"
  },
  {
    "nome": "Pétunia - Sedia a dondolo in rattan",
    "categoria": "Divani",
    "prezzo": 97.3,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-a-dondolo-in-rattan-1000-15-20-241551_6.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-a-dondolo-in-rattan-petunia-241551.htm",
    "larghezza_cm": 59,
    "profondita_cm": 86,
    "descrizione": "Sedia a dondolo in rattan"
  },
  {
    "nome": "Element Business - Piano per tavolo professionale in marmo nero 2/4 persone, D 70 cm",
    "categoria": "Altri mobili",
    "prezzo": 209,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/piano-per-tavolo-professionale-in-marmo-nero-2-4-persone-d-70-cm-1000-5-6-243751_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/piano-per-tavolo-professionale-in-marmo-nero-2-4-persone-d-70-cm-element-business-243751.htm",
    "larghezza_cm": 70,
    "profondita_cm": 70,
    "descrizione": "Piano per tavolo professionale in marmo nero 2/4 persone, D 70 cm"
  },
  {
    "nome": "Neus - Sedia in velluto color terracotta e acciaio placcato oro",
    "categoria": "Sedie",
    "prezzo": 159,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-in-velluto-color-terracotta-e-acciaio-placcato-oro-1000-3-15-244293_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-in-velluto-color-terracotta-e-acciaio-placcato-oro-neus-244293.htm",
    "larghezza_cm": 60.5,
    "profondita_cm": 60,
    "descrizione": "Sedia in velluto color terracotta e acciaio placcato oro"
  },
  {
    "nome": "Salome - Letto in legno di mango 160x200 cm",
    "categoria": "Letti",
    "prezzo": 899,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/letto-in-legno-di-mango-160x200-cm-1000-2-2-166585_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/letto-in-legno-di-mango-160x200-cm-salome-166585.htm",
    "larghezza_cm": 167,
    "profondita_cm": 212,
    "descrizione": "Letto in legno di mango 160x200 cm"
  },
  {
    "nome": "Lilo - Pouf in velluto effetto invecchiato verde kaki",
    "categoria": "Divani",
    "prezzo": 399,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/238619/pouf-in-velluto-effetto-invecchiato-verde-kaki.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/pouf-in-velluto-effetto-invecchiato-verde-kaki-lilo-238619.htm",
    "larghezza_cm": 100,
    "profondita_cm": 77,
    "descrizione": "Pouf in velluto effetto invecchiato verde kaki"
  },
  {
    "nome": "Tela stampata e dipinta raffigurante barche, 90x45 cm",
    "categoria": "Decorazioni",
    "prezzo": 49.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tela-stampata-e-dipinta-raffigurante-barche-90x45-cm-1000-0-27-213350_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tela-stampata-e-dipinta-raffigurante-barche-90x45-cm-213350.htm",
    "larghezza_cm": 90,
    "profondita_cm": 3,
    "descrizione": "Tela stampata e dipinta raffigurante barche, 90x45 cm"
  },
  {
    "nome": "Pianta artificiale a grandi foglie con vaso dorato",
    "categoria": "Decorazioni",
    "prezzo": 29.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/pianta-artificiale-a-grandi-foglie-con-vaso-dorato-1000-4-18-227158_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/pianta-artificiale-a-grandi-foglie-con-vaso-dorato-227158.htm",
    "larghezza_cm": 14,
    "profondita_cm": 14,
    "descrizione": "Pianta artificiale a grandi foglie con vaso dorato"
  },
  {
    "nome": "Candela profumata rossa alt. 15 cm 490g",
    "categoria": "Decorazioni",
    "prezzo": 8.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/candela-profumata-rossa-alt-15-cm-490g-1000-9-37-246611_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/candela-profumata-rossa-alt-15-cm-490g-246611.htm",
    "larghezza_cm": 7,
    "profondita_cm": 7,
    "descrizione": "Candela profumata rossa alt. 15 cm 490g"
  },
  {
    "nome": "Mudo - Guardaroba a 2 ante in metallo nero 94 cm",
    "categoria": "Armadi",
    "prezzo": 349.3,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/guardaroba-a-2-ante-in-metallo-nero-94-cm-1000-7-8-233995_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/guardaroba-a-2-ante-in-metallo-nero-94-cm-mudo-233995.htm",
    "larghezza_cm": 94,
    "profondita_cm": 54,
    "descrizione": "Guardaroba a 2 ante in metallo nero 94 cm"
  },
  {
    "nome": "Indiana - Sedia a dondolo in legno d'acacia con cuscini in cotone e lino écru",
    "categoria": "Divani",
    "prezzo": 399,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-a-dondolo-in-legno-d-acacia-con-cuscini-in-cotone-e-lino-ecru-1000-14-19-246429_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-a-dondolo-in-legno-d-acacia-con-cuscini-in-cotone-e-lino-ecru-indiana-246429.htm",
    "larghezza_cm": 73,
    "profondita_cm": 107,
    "descrizione": "Sedia a dondolo in legno d'acacia con cuscini in cotone e lino écru"
  },
  {
    "nome": "Blackly Business - Base per tavolo in metallo oro, 72 cm",
    "categoria": "Altri mobili",
    "prezzo": 215.2,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/base-per-tavolo-in-metallo-oro-72-cm-1000-4-35-199295_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/base-per-tavolo-in-metallo-oro-72-cm-blackly-business-199295.htm",
    "larghezza_cm": 50,
    "profondita_cm": 50,
    "descrizione": "Base per tavolo in metallo oro, 72 cm"
  },
  {
    "nome": "Mauricette - Sedia vintage in velluto riciclato rosa e acciaio effetto rovere",
    "categoria": "Sedie",
    "prezzo": 69.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-vintage-in-velluto-riciclato-rosa-e-acciaio-effetto-rovere-1000-6-28-242953_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-vintage-in-velluto-riciclato-rosa-e-acciaio-effetto-rovere-mauricette-242953.htm",
    "larghezza_cm": 50.5,
    "profondita_cm": 54.5,
    "descrizione": "Sedia vintage in velluto riciclato rosa e acciaio effetto rovere"
  },
  {
    "nome": "Loreto - Madia a 3 ante in paglia di Vienna 125 cm",
    "categoria": "Credenze",
    "prezzo": 799,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/madia-a-3-ante-in-paglia-di-vienna-125-cm-1000-2-32-230862_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/madia-a-3-ante-in-paglia-di-vienna-125-cm-loreto-230862.htm",
    "larghezza_cm": 125,
    "profondita_cm": 42,
    "descrizione": "Madia a 3 ante in paglia di Vienna 125 cm"
  },
  {
    "nome": "Pump Business - Materasso in memory foam 160x200 cm",
    "categoria": "Letti",
    "prezzo": 649,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/materasso-in-memory-foam-160x200-cm-1000-11-0-248296_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/materasso-in-memory-foam-160x200-cm-pump-business-248296.htm",
    "larghezza_cm": 160,
    "profondita_cm": 200,
    "descrizione": "Materasso in memory foam 160x200 cm"
  },
  {
    "nome": "Sheep - Poltrona a tre gambe verde",
    "categoria": "Divani",
    "prezzo": 229,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltrona-a-tre-gambe-verde-1000-0-37-247554_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-a-tre-gambe-verde-sheep-247554.htm",
    "larghezza_cm": 67,
    "profondita_cm": 61.5,
    "descrizione": "Poltrona a tre gambe verde"
  },
  {
    "nome": "Tela dipinta nei toni del grigio, blu e oro, 45x90 cm",
    "categoria": "Decorazioni",
    "prezzo": 42.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tela-dipinta-nei-toni-del-grigio-blu-e-oro-45x90-cm-1000-5-16-204073_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tela-dipinta-nei-toni-del-grigio-blu-e-oro-45x90-cm-204073.htm",
    "larghezza_cm": 45,
    "profondita_cm": 2.7,
    "descrizione": "Tela dipinta nei toni del grigio, blu e oro, 45x90 cm"
  },
  {
    "nome": "Pianta grassa artificiale con vaso bianco",
    "categoria": "Decorazioni",
    "prezzo": 8.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/pianta-grassa-artificiale-con-vaso-bianco-1000-10-29-217083_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/pianta-grassa-artificiale-con-vaso-bianco-217083.htm",
    "larghezza_cm": 17,
    "profondita_cm": 17,
    "descrizione": "Pianta grassa artificiale con vaso bianco"
  },
  {
    "nome": "Nio - Poltrona letto pieghevole in velluto blu petrolio",
    "categoria": "Divani",
    "prezzo": 229,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltrona-letto-pieghevole-in-velluto-blu-petrolio-1000-15-31-186335_2.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-letto-pieghevole-in-velluto-blu-petrolio-nio-186335.htm",
    "larghezza_cm": 109,
    "profondita_cm": 87,
    "descrizione": "Poltrona letto pieghevole in velluto blu petrolio"
  },
  {
    "nome": "Element Business - Base per tavolo professionale in acciaio nero opaco, 60 cm",
    "categoria": "Altri mobili",
    "prezzo": 149,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/base-per-tavolo-professionale-in-acciaio-nero-opaco-60-cm-1000-4-31-209869_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/base-per-tavolo-professionale-in-acciaio-nero-opaco-60-cm-element-business-209869.htm",
    "larghezza_cm": 51.5,
    "profondita_cm": 51.5,
    "descrizione": "Base per tavolo professionale in acciaio nero opaco, 60 cm"
  },
  {
    "nome": "Mauricette - Sedia vintage in velluto verde scuro e acciaio effetto rovere",
    "categoria": "Sedie",
    "prezzo": 69.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-vintage-in-velluto-verde-scuro-e-acciaio-effetto-rovere-1000-8-30-242955_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-vintage-in-velluto-verde-scuro-e-acciaio-effetto-rovere-mauricette-242955.htm",
    "larghezza_cm": 50.5,
    "profondita_cm": 54.5,
    "descrizione": "Sedia vintage in velluto verde scuro e acciaio effetto rovere"
  },
  {
    "nome": "Divanetto 2 posti trapuntato écru e hevea",
    "categoria": "Divani",
    "prezzo": 179,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divanetto-2-posti-trapuntato-ecru-e-hevea-1000-6-35-248495_2.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divanetto-2-posti-trapuntato-ecru-e-hevea-248495.htm",
    "larghezza_cm": 125,
    "profondita_cm": 44,
    "descrizione": "Divanetto 2 posti trapuntato écru e hevea"
  },
  {
    "nome": "Solstice - Comò doppio con 6 cassetti in rattan 140 cm",
    "categoria": "Cassettiere",
    "prezzo": 499,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/como-doppio-con-6-cassetti-in-rattan-140-cm-1000-2-6-234772_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/como-doppio-con-6-cassetti-in-rattan-140-cm-solstice-234772.htm",
    "larghezza_cm": 140,
    "profondita_cm": 45,
    "descrizione": "Comò doppio con 6 cassetti in rattan 140 cm"
  },
  {
    "nome": "Somny - Rete a doghe 90x200 cm",
    "categoria": "Letti",
    "prezzo": 149,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/rete-a-doghe-90x200-cm-1000-13-0-241736_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/rete-a-doghe-90x200-cm-somny-241736.htm",
    "larghezza_cm": 198,
    "profondita_cm": 88.7,
    "descrizione": "Rete a doghe 90x200 cm"
  },
  {
    "nome": "Baltimore - Poltrona marrone in microfibra",
    "categoria": "Divani",
    "prezzo": 199,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltrona-marrone-in-microfibra-1000-0-9-115957_2.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-marrone-in-microfibra-baltimore-115957.htm",
    "larghezza_cm": 75,
    "profondita_cm": 72,
    "descrizione": "Poltrona marrone in microfibra"
  },
  {
    "nome": "Candela verde da appoggio, alt. 31 cm",
    "categoria": "Decorazioni",
    "prezzo": 9.99,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/253959/candela-verde-da-appoggio-alt-31-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/candela-verde-da-appoggio-alt-31-cm-253959.htm",
    "larghezza_cm": 7.8,
    "profondita_cm": 7.8,
    "descrizione": "Candela verde da appoggio, alt. 31 cm"
  },
  {
    "nome": "Saint Rémy - Armadietto grigia perla in mango 130 cm",
    "categoria": "Armadi",
    "prezzo": 909.3,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/armadietto-grigia-perla-in-mango-130-cm-1000-5-32-115775_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/armadietto-grigia-perla-in-mango-130-cm-saint-remy-115775.htm",
    "larghezza_cm": 130,
    "profondita_cm": 55,
    "descrizione": "Armadietto grigia perla in mango 130 cm"
  },
  {
    "nome": "Arun - Poltrona da giardino in resina riciclata verde kaki",
    "categoria": "Poltrone",
    "prezzo": 99.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltrona-da-giardino-in-resina-riciclata-verde-kaki-1000-12-23-245900_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-da-giardino-in-resina-riciclata-verde-kaki-arun-245900.htm",
    "larghezza_cm": 63,
    "profondita_cm": 74,
    "descrizione": "Poltrona da giardino in resina riciclata verde kaki"
  },
  {
    "nome": "Tarifa - Cassettiera 6 cassetti 140 cm",
    "categoria": "Cassettiere",
    "prezzo": 599,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/cassettiera-6-cassetti-140-cm-1000-2-3-249324_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/cassettiera-6-cassetti-140-cm-tarifa-249324.htm",
    "larghezza_cm": 140,
    "profondita_cm": 45,
    "descrizione": "Cassettiera 6 cassetti 140 cm"
  },
  {
    "nome": "Canopy - Testata da letto 160 cm in legno massello di quercia con portatutto",
    "categoria": "Letti",
    "prezzo": 579,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/testata-da-letto-160-cm-in-legno-massello-di-quercia-con-portatutto-1000-10-32-187197_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/testata-da-letto-160-cm-in-legno-massello-di-quercia-con-portatutto-canopy-187197.htm",
    "larghezza_cm": 165,
    "profondita_cm": 27,
    "descrizione": "Testata da letto 160 cm in legno massello di quercia con portatutto"
  },
  {
    "nome": "Vaso conchiglia in gres argentato, Alt. 27 cm",
    "categoria": "Decorazioni",
    "prezzo": 22.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/vaso-conchiglia-in-gres-argentato-alt-27-cm-1000-16-4-204594_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/vaso-conchiglia-in-gres-argentato-alt-27-cm-204594.htm",
    "larghezza_cm": 28,
    "profondita_cm": 11,
    "descrizione": "Vaso conchiglia in gres argentato, Alt. 27 cm"
  },
  {
    "nome": "Tenda bianca in lino slavato con occhielli, al pezzo, 130x300 cm",
    "categoria": "Tessile",
    "prezzo": 129,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tenda-bianca-in-lino-slavato-con-occhielli-al-pezzo-130x300-cm-1000-16-13-147695_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tenda-bianca-in-lino-slavato-con-occhielli-al-pezzo-130x300-cm-147695.htm",
    "larghezza_cm": 130,
    "profondita_cm": 0.5,
    "descrizione": "Tenda bianca in lino slavato con occhielli, al pezzo, 130x300 cm"
  },
  {
    "nome": "Scolapiatti rettangolare bianco sporco et verde",
    "categoria": "Cucina",
    "prezzo": 29.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/scolapiatti-rettangolare-bianco-sporco-et-verde-1000-2-1-247641_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/scolapiatti-rettangolare-bianco-sporco-et-verde-247641.htm",
    "larghezza_cm": 43,
    "profondita_cm": 31.5,
    "descrizione": "Scolapiatti rettangolare bianco sporco et verde"
  },
  {
    "nome": "Arnold - Poltrona vintage gialla",
    "categoria": "Poltrone",
    "prezzo": 139,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltrona-vintage-gialla-1000-5-37-166333_4.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-vintage-gialla-arnold-166333.htm",
    "larghezza_cm": 58,
    "profondita_cm": 62,
    "descrizione": "Poltrona vintage gialla"
  },
  {
    "nome": "Malek Business - Sedie in tessuto écru effetto lana bouclé (x2)",
    "categoria": "Sedie",
    "prezzo": 339,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedie-in-tessuto-ecru-effetto-lana-boucle-x2-1000-16-1-238662_5.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedie-in-tessuto-ecru-effetto-lana-boucle-x2-malek-business-238662.htm",
    "larghezza_cm": 46,
    "profondita_cm": 55,
    "descrizione": "Sedie in tessuto écru effetto lana bouclé (x2)"
  },
  {
    "nome": "Alya - Letto vintage in legno massello di acacia e rattan intrecciato, 160x200 cm, con rete a doghe",
    "categoria": "Letti",
    "prezzo": 999,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/letto-vintage-in-legno-massello-di-acacia-e-rattan-intrecciato-160x200-cm-con-rete-a-doghe-1000-11-22-238929_3.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/letto-vintage-in-legno-massello-di-acacia-e-rattan-intrecciato-160x200-cm-con-rete-a-doghe-alya-238929.htm",
    "larghezza_cm": 182,
    "profondita_cm": 219,
    "descrizione": "Letto vintage in legno massello di acacia e rattan intrecciato, 160x200 cm, con rete a doghe"
  },
  {
    "nome": "Flare - Poltrona girevole beige in tessuto tramato",
    "categoria": "Divani",
    "prezzo": 499,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltrona-girevole-beige-in-tessuto-tramato-1000-6-4-246455_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-girevole-beige-in-tessuto-tramato-flare-246455.htm",
    "larghezza_cm": 82.5,
    "profondita_cm": 80,
    "descrizione": "Poltrona girevole beige in tessuto tramato"
  },
  {
    "nome": "Tela stampata bianca, beige e oro 60x90",
    "categoria": "Decorazioni",
    "prezzo": 58.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tela-stampata-bianca-beige-e-oro-60x90-1000-3-24-227820_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tela-stampata-bianca-beige-e-oro-60x90-227820.htm",
    "larghezza_cm": 60,
    "profondita_cm": 3,
    "descrizione": "Tela stampata bianca, beige e oro 60x90"
  },
  {
    "nome": "Cuscino in lino lavato beige 60x60cm",
    "categoria": "Tessile",
    "prezzo": 35.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/cuscino-in-lino-lavato-beige-60x60cm-1000-12-37-223528_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/cuscino-in-lino-lavato-beige-60x60cm-223528.htm",
    "larghezza_cm": 60,
    "profondita_cm": 10,
    "descrizione": "Cuscino in lino lavato beige 60x60cm"
  },
  {
    "nome": "Olivia - Divano trasformabile a 3/4 posti in velluto blu",
    "categoria": "Divani",
    "prezzo": 899,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-trasformabile-a-3-4-posti-in-velluto-blu-1000-8-2-217302_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-trasformabile-a-3-4-posti-in-velluto-blu-olivia-217302.htm",
    "larghezza_cm": 210,
    "profondita_cm": 90,
    "descrizione": "Divano trasformabile a 3/4 posti in velluto blu"
  },
  {
    "nome": "Griffith - Comò vintage con 3 cassetti 91 cm",
    "categoria": "Cassettiere",
    "prezzo": 399,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/como-vintage-con-3-cassetti-91-cm-1000-6-4-248546_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/como-vintage-con-3-cassetti-91-cm-griffith-248546.htm",
    "larghezza_cm": 90.8,
    "profondita_cm": 45,
    "descrizione": "Comò vintage con 3 cassetti 91 cm"
  },
  {
    "nome": "Origami BUSINESS - Pannello effetto patchwork per testata da letto da comporre, 60x120 cm",
    "categoria": "Letti",
    "prezzo": 139,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/pannello-effetto-patchwork-per-testata-da-letto-da-comporre-60x120-cm-1000-7-0-200080_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/pannello-effetto-patchwork-per-testata-da-letto-da-comporre-60x120-cm-origami-business-200080.htm",
    "larghezza_cm": 60,
    "profondita_cm": 8,
    "descrizione": "Pannello effetto patchwork per testata da letto da comporre, 60x120 cm"
  },
  {
    "nome": "Quadro astratto su tela bianca con rilievo e cornice in legno di pino, 56x70 cm",
    "categoria": "Decorazioni",
    "prezzo": 29.95,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/quadro-astratto-su-tela-bianca-con-rilievo-e-cornice-in-legno-di-pino-56x70-cm-1000-0-5-249900_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/quadro-astratto-su-tela-bianca-con-rilievo-e-cornice-in-legno-di-pino-56x70-cm-249900.htm",
    "larghezza_cm": 56,
    "profondita_cm": 4.5,
    "descrizione": "Quadro astratto su tela bianca con rilievo e cornice in legno di pino, 56x70 cm"
  },
  {
    "nome": "Lampada a sospensione in rattan intrecciato 60 cm",
    "categoria": "Lampade",
    "prezzo": 179,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/lampada-a-sospensione-in-rattan-intrecciato-60-cm-1000-3-6-165277_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/lampada-a-sospensione-in-rattan-intrecciato-60-cm-165277.htm",
    "larghezza_cm": 60,
    "profondita_cm": 60,
    "descrizione": "Lampada a sospensione in rattan intrecciato 60 cm"
  },
  {
    "nome": "Set di 4 tazze in vetro trasparente, giallo, blu e grigio",
    "categoria": "Cucina",
    "prezzo": 6.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/set-di-4-tazze-in-vetro-trasparente-giallo-blu-e-grigio-1000-14-31-248163_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/set-di-4-tazze-in-vetro-trasparente-giallo-blu-e-grigio-248163.htm",
    "larghezza_cm": 33,
    "profondita_cm": 6,
    "descrizione": "Set di 4 tazze in vetro trasparente, giallo, blu e grigio"
  },
  {
    "nome": "Divano letto 3 posti con rivestimento sfoderabile in tessuto tramato beige, materasso da 10 cm",
    "categoria": "Divani",
    "prezzo": 1299,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/252831/divano-letto-3-posti-con-rivestimento-sfoderabile-in-tessuto-tramato-beige-materasso-da-10-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-letto-3-posti-con-rivestimento-sfoderabile-in-tessuto-tramato-beige-materasso-da-10-cm-252831.htm",
    "larghezza_cm": 180,
    "profondita_cm": 95,
    "descrizione": "Divano letto 3 posti con rivestimento sfoderabile in tessuto tramato beige, materasso da 10 cm"
  },
  {
    "nome": "Bari Business - Tavolo da pranzo da giardino professionale in legno massello di acacia beige per 2 persone lung. 75 cm",
    "categoria": "Tavoli da pranzo",
    "prezzo": 299,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tavolo-da-pranzo-da-giardino-professionale-in-legno-massello-di-acacia-beige-per-2-persone-lung-75-cm-1000-9-36-238451_3.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tavolo-da-pranzo-da-giardino-professionale-in-legno-massello-di-acacia-beige-per-2-persone-lung-75-cm-bari-business-238451.htm",
    "larghezza_cm": 75,
    "profondita_cm": 75,
    "descrizione": "Tavolo da pranzo da giardino professionale in legno massello di acacia beige per 2 persone lung. 75 cm"
  },
  {
    "nome": "Clyde - Sedia scandinava in velluto blu",
    "categoria": "Sedie",
    "prezzo": 59.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-scandinava-in-velluto-blu-1000-9-17-238842_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-scandinava-in-velluto-blu-clyde-238842.htm",
    "larghezza_cm": 44,
    "profondita_cm": 55,
    "descrizione": "Sedia scandinava in velluto blu"
  },
  {
    "nome": "Tela astratta in rilievo color terracotta 55x75 cm",
    "categoria": "Decorazioni",
    "prezzo": 32.45,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tela-astratta-in-rilievo-color-terracotta-55x75-cm-1000-14-4-236246_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tela-astratta-in-rilievo-color-terracotta-55x75-cm-236246.htm",
    "larghezza_cm": 55,
    "profondita_cm": 4,
    "descrizione": "Tela astratta in rilievo color terracotta 55x75 cm"
  },
  {
    "nome": "Lampada a sospensione in vetro rigato e top dorato",
    "categoria": "Lampade",
    "prezzo": 299,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/251477/lampada-a-sospensione-in-vetro-rigato-e-top-dorato.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/lampada-a-sospensione-in-vetro-rigato-e-top-dorato-251477.htm",
    "larghezza_cm": 50,
    "profondita_cm": 50,
    "descrizione": "Lampada a sospensione in vetro rigato e top dorato"
  },
  {
    "nome": "Decorazioni murali a forma di uccello dorato (x3)",
    "categoria": "Decorazioni",
    "prezzo": 22.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/decorazioni-murali-a-forma-di-uccello-dorato-x3-1000-4-13-204480_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/decorazioni-murali-a-forma-di-uccello-dorato-x3-204480.htm",
    "larghezza_cm": 16,
    "profondita_cm": 5,
    "descrizione": "Decorazioni murali a forma di uccello dorato (x3)"
  },
  {
    "nome": "Vaso in terracotta écru alt. 34cm",
    "categoria": "Decorazioni",
    "prezzo": 18.45,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/vaso-in-terracotta-ecru-alt-34cm-1000-10-37-241240_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/vaso-in-terracotta-ecru-alt-34cm-241240.htm",
    "larghezza_cm": 25,
    "profondita_cm": 9,
    "descrizione": "Vaso in terracotta écru alt. 34cm"
  },
  {
    "nome": "Barattolo quadrato in vetro e bambù, Alt.19 cm",
    "categoria": "Cucina",
    "prezzo": 9.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/barattolo-quadrato-in-vetro-e-bambu-alt-19-cm-1000-9-7-208123_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/barattolo-quadrato-in-vetro-e-bambu-alt-19-cm-208123.htm",
    "larghezza_cm": 10,
    "profondita_cm": 10,
    "descrizione": "Barattolo quadrato in vetro e bambù, Alt.19 cm"
  },
  {
    "nome": "Lilo - Divano nuvola componibile 5 posti color sabbia",
    "categoria": "Divani",
    "prezzo": 1599,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-nuvola-componibile-5-posti-color-sabbia-1000-6-15-249787_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-nuvola-componibile-5-posti-color-sabbia-lilo-249787.htm",
    "larghezza_cm": 340,
    "profondita_cm": 102,
    "descrizione": "Divano nuvola componibile 5 posti color sabbia"
  },
  {
    "nome": "Noumea - Poltrona da giardino in legno massello di acacia e cuscini color talpa",
    "categoria": "Poltrone",
    "prezzo": 299,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/230166_0/poltrona-da-giardino-in-legno-massello-di-acacia-e-cuscini-color-talpa.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-da-giardino-in-legno-massello-di-acacia-e-cuscini-color-talpa-noumea-230166.htm",
    "larghezza_cm": 95,
    "profondita_cm": 78,
    "descrizione": "Poltrona da giardino in legno massello di acacia e cuscini color talpa"
  },
  {
    "nome": "Magnus - Madia a 2 ante con impiallacciatura in rovere effetto scacchi 125 cm",
    "categoria": "Credenze",
    "prezzo": 569,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/madia-a-2-ante-con-impiallacciatura-in-rovere-effetto-scacchi-125-cm-1000-1-27-187069_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/madia-a-2-ante-con-impiallacciatura-in-rovere-effetto-scacchi-125-cm-magnus-187069.htm",
    "larghezza_cm": 125,
    "profondita_cm": 45,
    "descrizione": "Madia a 2 ante con impiallacciatura in rovere effetto scacchi 125 cm"
  },
  {
    "nome": "Tappeto in juta intrecciata con bordo smerlato verde, 70x120 cm",
    "categoria": "Tappeti",
    "prezzo": 35.99,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/254354/tappeto-in-juta-intrecciata-con-bordo-smerlato-verde-70x120-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tappeto-in-juta-intrecciata-con-bordo-smerlato-verde-70x120-cm-254354.htm",
    "larghezza_cm": 70,
    "profondita_cm": 1,
    "descrizione": "Tappeto in juta intrecciata con bordo smerlato verde, 70x120 cm"
  },
  {
    "nome": "Decorazioni murali floreali in poliresina dorata (x2)",
    "categoria": "Decorazioni",
    "prezzo": 9.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/decorazioni-murali-floreali-in-poliresina-dorata-x2-1000-7-30-241356_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/decorazioni-murali-floreali-in-poliresina-dorata-x2-241356.htm",
    "larghezza_cm": 13,
    "profondita_cm": 1,
    "descrizione": "Decorazioni murali floreali in poliresina dorata (x2)"
  },
  {
    "nome": "Candela profumata in ceramica bianca, grigia e avorio 350g",
    "categoria": "Decorazioni",
    "prezzo": 14.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/candela-profumata-in-ceramica-bianca-grigia-e-avorio-350g-1000-8-40-229763_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/candela-profumata-in-ceramica-bianca-grigia-e-avorio-350g-229763.htm",
    "larghezza_cm": 10,
    "profondita_cm": 10,
    "descrizione": "Candela profumata in ceramica bianca, grigia e avorio 350g"
  },
  {
    "nome": "Julian - Divano letto 3/4 posti in velluto a coste marrone, materasso 10 m",
    "categoria": "Divani",
    "prezzo": 1099,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-letto-3-4-posti-in-velluto-a-coste-marrone-materasso-10-m-1000-11-5-247276_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-letto-3-4-posti-in-velluto-a-coste-marrone-materasso-10-m-julian-247276.htm",
    "larghezza_cm": 180,
    "profondita_cm": 95,
    "descrizione": "Divano letto 3/4 posti in velluto a coste marrone, materasso 10 m"
  },
  {
    "nome": "Neus - Sedia in tessuto tramato giallo ocra e acciaio dorato",
    "categoria": "Sedie",
    "prezzo": 159,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/246956/sedia-in-tessuto-tramato-giallo-ocra-e-acciaio-dorato.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-in-tessuto-tramato-giallo-ocra-e-acciaio-dorato-neus-246956.htm",
    "larghezza_cm": 60.5,
    "profondita_cm": 60,
    "descrizione": "Sedia in tessuto tramato giallo ocra e acciaio dorato"
  },
  {
    "nome": "Blackhill Business - Divanetto professionale a 2 posti bianco",
    "categoria": "Divani",
    "prezzo": 379,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divanetto-professionale-a-2-posti-bianco-1000-0-15-231829_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divanetto-professionale-a-2-posti-bianco-blackhill-business-231829.htm",
    "larghezza_cm": 139,
    "profondita_cm": 73,
    "descrizione": "Divanetto professionale a 2 posti bianco"
  },
  {
    "nome": "Lampada a sospensione in metallo dorato e globo trasparente",
    "categoria": "Lampade",
    "prezzo": 59.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/lampada-a-sospensione-in-metallo-dorato-e-globo-trasparente-1000-13-23-232862_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/lampada-a-sospensione-in-metallo-dorato-e-globo-trasparente-232862.htm",
    "larghezza_cm": 30,
    "profondita_cm": 30,
    "descrizione": "Lampada a sospensione in metallo dorato e globo trasparente"
  },
  {
    "nome": "Candela profumata in ceramica grigia con coperchio 180g",
    "categoria": "Decorazioni",
    "prezzo": 12.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/candela-profumata-in-ceramica-grigia-con-coperchio-180g-1000-4-28-233482_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/candela-profumata-in-ceramica-grigia-con-coperchio-180g-233482.htm",
    "larghezza_cm": 13.5,
    "profondita_cm": 13.5,
    "descrizione": "Candela profumata in ceramica grigia con coperchio 180g"
  },
  {
    "nome": "Lotto di 6 - Bicchiere in vetro trasparente con linea blu",
    "categoria": "Cucina",
    "prezzo": 29.94,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/bicchiere-in-vetro-trasparente-con-linea-blu-1000-16-6-250188_2.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/bicchiere-in-vetro-trasparente-con-linea-blu-250188.htm",
    "larghezza_cm": 7.9,
    "profondita_cm": 7.9,
    "descrizione": "Bicchiere in vetro trasparente con linea blu"
  },
  {
    "nome": "Julian - Divano letto 3/4 posti giallo ocra, materasso 10 cm",
    "categoria": "Divani",
    "prezzo": 999,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-letto-3-4-posti-giallo-ocra-materasso-10-cm-1000-0-18-247248_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-letto-3-4-posti-giallo-ocra-materasso-10-cm-julian-247248.htm",
    "larghezza_cm": 180,
    "profondita_cm": 95,
    "descrizione": "Divano letto 3/4 posti giallo ocra, materasso 10 cm"
  },
  {
    "nome": "Kinfolk - Tavolo da pranzo in legno di pino riciclato 10 persone, D 240",
    "categoria": "Tavoli da pranzo",
    "prezzo": 899,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tavolo-da-pranzo-in-legno-di-pino-riciclato-10-persone-d-240-1000-13-19-199525_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tavolo-da-pranzo-in-legno-di-pino-riciclato-10-persone-d-240-kinfolk-199525.htm",
    "larghezza_cm": 240,
    "profondita_cm": 100,
    "descrizione": "Tavolo da pranzo in legno di pino riciclato 10 persone, D 240"
  },
  {
    "nome": "Mira - Sedia in velluto a coste riciclato beige cappuccino",
    "categoria": "Sedie",
    "prezzo": 55.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-in-velluto-a-coste-riciclato-beige-cappuccino-1000-12-8-234323_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-in-velluto-a-coste-riciclato-beige-cappuccino-mira-234323.htm",
    "larghezza_cm": 47,
    "profondita_cm": 53,
    "descrizione": "Sedia in velluto a coste riciclato beige cappuccino"
  },
  {
    "nome": "Gisele - Comò alto vintage con 3 cassetti in legno di mango e bambù 65 cm",
    "categoria": "Cassettiere",
    "prezzo": 399,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/como-alto-vintage-con-3-cassetti-in-legno-di-mango-e-bambu-65-cm-1000-9-12-238468_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/como-alto-vintage-con-3-cassetti-in-legno-di-mango-e-bambu-65-cm-gisele-238468.htm",
    "larghezza_cm": 65,
    "profondita_cm": 45,
    "descrizione": "Comò alto vintage con 3 cassetti in legno di mango e bambù 65 cm"
  },
  {
    "nome": "Parure da letto in lino lavato beige, 220x240",
    "categoria": "Letti",
    "prezzo": 159,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/parure-da-letto-in-lino-lavato-beige-220x240-1000-7-34-235661_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/parure-da-letto-in-lino-lavato-beige-220x240-235661.htm",
    "larghezza_cm": 240,
    "profondita_cm": 0.5,
    "descrizione": "Parure da letto in lino lavato beige, 220x240"
  },
  {
    "nome": "Scolapiatti in metallo bianco sporco",
    "categoria": "Cucina",
    "prezzo": 19.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/scolapiatti-in-metallo-bianco-sporco-1000-7-38-239027_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/scolapiatti-in-metallo-bianco-sporco-239027.htm",
    "larghezza_cm": 32,
    "profondita_cm": 40.5,
    "descrizione": "Scolapiatti in metallo bianco sporco"
  },
  {
    "nome": "Paul - Divano 3 posti in lino beige",
    "categoria": "Divani",
    "prezzo": 1299,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-3-posti-in-lino-beige-1000-14-40-247024_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-3-posti-in-lino-beige-paul-247024.htm",
    "larghezza_cm": 226,
    "profondita_cm": 95,
    "descrizione": "Divano 3 posti in lino beige"
  },
  {
    "nome": "Arun - Poltrona da giardino in resina riciclata beige e acciaio nero",
    "categoria": "Poltrone",
    "prezzo": 99.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltrona-da-giardino-in-resina-riciclata-beige-e-acciaio-nero-1000-15-2-245920_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-da-giardino-in-resina-riciclata-beige-e-acciaio-nero-arun-245920.htm",
    "larghezza_cm": 62.5,
    "profondita_cm": 74,
    "descrizione": "Poltrona da giardino in resina riciclata beige e acciaio nero"
  },
  {
    "nome": "Sartene - Tavolo da pranzo rotondo bicolore per 5/6 persone Ø 130cm",
    "categoria": "Tavoli da pranzo",
    "prezzo": 599,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tavolo-da-pranzo-rotondo-bicolore-per-5-6-persone-oe-130cm-1000-7-30-230901_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tavolo-da-pranzo-rotondo-bicolore-per-5-6-persone-oe-130cm-sartene-230901.htm",
    "larghezza_cm": 130,
    "profondita_cm": 130,
    "descrizione": "Tavolo da pranzo rotondo bicolore per 5/6 persone Ø 130cm"
  },
  {
    "nome": "Huppy - Sedia in acciaio nero",
    "categoria": "Sedie",
    "prezzo": 99.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-in-acciaio-nero-1000-11-0-199506_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-in-acciaio-nero-huppy-199506.htm",
    "larghezza_cm": 53.2,
    "profondita_cm": 57.5,
    "descrizione": "Sedia in acciaio nero"
  },
  {
    "nome": "Divanetto contenitore 2 posti in cotone écru e mango",
    "categoria": "Divani",
    "prezzo": 249,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divanetto-contenitore-2-posti-in-cotone-ecru-e-mango-1000-12-9-236907_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divanetto-contenitore-2-posti-in-cotone-ecru-e-mango-236907.htm",
    "larghezza_cm": 86,
    "profondita_cm": 47,
    "descrizione": "Divanetto contenitore 2 posti in cotone écru e mango"
  },
  {
    "nome": "Baryton - Madia a 3 ante scorrevoli in vetro armato 150 cm",
    "categoria": "Credenze",
    "prezzo": 899,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/madia-a-3-ante-scorrevoli-in-vetro-armato-150-cm-1000-15-5-234156_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/madia-a-3-ante-scorrevoli-in-vetro-armato-150-cm-baryton-234156.htm",
    "larghezza_cm": 150,
    "profondita_cm": 45,
    "descrizione": "Madia a 3 ante scorrevoli in vetro armato 150 cm"
  },
  {
    "nome": "Testata del letto sfoderabile 160 cm in lino beige",
    "categoria": "Letti",
    "prezzo": 299,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/testata-del-letto-sfoderabile-160-cm-in-lino-beige-1000-8-22-249466_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/testata-del-letto-sfoderabile-160-cm-in-lino-beige-249466.htm",
    "larghezza_cm": 185,
    "profondita_cm": 20,
    "descrizione": "Testata del letto sfoderabile 160 cm in lino beige"
  },
  {
    "nome": "Relax - Divanetto da giardino componibile 3 posti in legno di acacia e cuscini in tessuto riciclato grigio antracite",
    "categoria": "Divani",
    "prezzo": 299,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/230216_0/divanetto-da-giardino-componibile-3-posti-in-legno-di-acacia-e-cuscini-in-tessuto-riciclato-grigio-antracite.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divanetto-da-giardino-componibile-3-posti-in-legno-di-acacia-e-cuscini-in-tessuto-riciclato-grigio-antracite-relax-230216.htm",
    "larghezza_cm": 220,
    "profondita_cm": 74,
    "descrizione": "Divanetto da giardino componibile 3 posti in legno di acacia e cuscini in tessuto riciclato grigio antracite"
  },
  {
    "nome": "Tappeto stampato multicolore su base jacquard 140x200",
    "categoria": "Tappeti",
    "prezzo": 199,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tappeto-stampato-multicolore-su-base-jacquard-140x200-1000-0-21-189482_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tappeto-stampato-multicolore-su-base-jacquard-140x200-189482.htm",
    "larghezza_cm": 140,
    "profondita_cm": 0.6,
    "descrizione": "Tappeto stampato multicolore su base jacquard 140x200"
  },
  {
    "nome": "Quadro vasi e fiori essiccati écru, beige, grigio e verde 35x50 cm",
    "categoria": "Decorazioni",
    "prezzo": 52.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/quadro-vasi-e-fiori-essiccati-ecru-beige-grigio-e-verde-35x50-cm-1000-0-36-217090_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/quadro-vasi-e-fiori-essiccati-ecru-beige-grigio-e-verde-35x50-cm-217090.htm",
    "larghezza_cm": 34.5,
    "profondita_cm": 8,
    "descrizione": "Quadro vasi e fiori essiccati écru, beige, grigio e verde 35x50 cm"
  },
  {
    "nome": "Trofeo da parete a forma di testa di bufalo intagliata, marrone, 73x73 cm",
    "categoria": "Decorazioni",
    "prezzo": 139,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/trofeo-da-parete-a-forma-di-testa-di-bufalo-intagliata-marrone-73x73-cm-1000-2-22-176445_7.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/trofeo-da-parete-a-forma-di-testa-di-bufalo-intagliata-marrone-73x73-cm-176445.htm",
    "larghezza_cm": 73,
    "profondita_cm": 20,
    "descrizione": "Trofeo da parete a forma di testa di bufalo intagliata, marrone, 73x73 cm"
  },
  {
    "nome": "Pianta artificiale a sospensione con vaso in canapa",
    "categoria": "Decorazioni",
    "prezzo": 22.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/pianta-artificiale-a-sospensione-con-vaso-in-canapa-1000-13-37-213278_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/pianta-artificiale-a-sospensione-con-vaso-in-canapa-213278.htm",
    "larghezza_cm": 60,
    "profondita_cm": 24,
    "descrizione": "Pianta artificiale a sospensione con vaso in canapa"
  },
  {
    "nome": "Lotto di 2 - Dispenser di sapone in vetro trasparente e grigio",
    "categoria": "Cucina",
    "prezzo": 7.98,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/dispenser-di-sapone-in-vetro-trasparente-e-grigio-1000-4-13-223996_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/dispenser-di-sapone-in-vetro-trasparente-e-grigio-223996.htm",
    "larghezza_cm": 10,
    "profondita_cm": 6.2,
    "descrizione": "Dispenser di sapone in vetro trasparente e grigio"
  },
  {
    "nome": "Snoop - Divano a 3/4 posti in pelle color caramello",
    "categoria": "Divani",
    "prezzo": 1999,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-a-3-4-posti-in-pelle-color-caramello-1000-2-9-229978_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-a-3-4-posti-in-pelle-color-caramello-snoop-229978.htm",
    "larghezza_cm": 243,
    "profondita_cm": 98,
    "descrizione": "Divano a 3/4 posti in pelle color caramello"
  },
  {
    "nome": "Nio - Poltrona letto pieghevole grigio antracite",
    "categoria": "Divani",
    "prezzo": 229,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltrona-letto-pieghevole-grigio-antracite-1000-6-20-175582_2.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-letto-pieghevole-grigio-antracite-nio-175582.htm",
    "larghezza_cm": 109,
    "profondita_cm": 87,
    "descrizione": "Poltrona letto pieghevole grigio antracite"
  },
  {
    "nome": "Hackney Business - Testata da letto modulabile professionale in velluto verde, 60x140,5 cm",
    "categoria": "Letti",
    "prezzo": 129,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/testata-da-letto-modulabile-professionale-in-velluto-verde-60x140-5-cm-1000-4-21-230031_2.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/testata-da-letto-modulabile-professionale-in-velluto-verde-60x140-5-cm-hackney-business-230031.htm",
    "larghezza_cm": 60,
    "profondita_cm": 9.5,
    "descrizione": "Testata da letto modulabile professionale in velluto verde, 60x140,5 cm"
  },
  {
    "nome": "Teiera in vetro e bambù 0,9 L",
    "categoria": "Cucina",
    "prezzo": 24.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/teiera-in-vetro-e-bambu-0-9-l-1000-0-29-245701_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/teiera-in-vetro-e-bambu-0-9-l-245701.htm",
    "larghezza_cm": 17.5,
    "profondita_cm": 17.5,
    "descrizione": "Teiera in vetro e bambù 0,9 L"
  },
  {
    "nome": "Tyler - Divano 3/4 posti in pelle color cammello",
    "categoria": "Divani",
    "prezzo": 1999,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-3-4-posti-in-pelle-color-cammello-1000-11-31-249639_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-3-4-posti-in-pelle-color-cammello-tyler-249639.htm",
    "larghezza_cm": 230,
    "profondita_cm": 94,
    "descrizione": "Divano 3/4 posti in pelle color cammello"
  },
  {
    "nome": "Nio - Poltrona letto pieghevole grigio chiaro",
    "categoria": "Divani",
    "prezzo": 229,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltrona-letto-pieghevole-grigio-chiaro-1000-12-28-186332_2.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-letto-pieghevole-grigio-chiaro-nio-186332.htm",
    "larghezza_cm": 109,
    "profondita_cm": 87,
    "descrizione": "Poltrona letto pieghevole grigio chiaro"
  },
  {
    "nome": "Pitaya - Sedia in rattan e acciaio nero",
    "categoria": "Sedie",
    "prezzo": 169,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-in-rattan-e-acciaio-nero-1000-14-29-219994_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-in-rattan-e-acciaio-nero-pitaya-219994.htm",
    "larghezza_cm": 48,
    "profondita_cm": 58,
    "descrizione": "Sedia in rattan e acciaio nero"
  },
  {
    "nome": "Polari - Madia a 2 ante arrotondate e 3 cassetti in legno chiaro 160 cm",
    "categoria": "Credenze",
    "prezzo": 699,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/madia-a-2-ante-arrotondate-e-3-cassetti-in-legno-chiaro-160-cm-1000-15-26-241721_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/madia-a-2-ante-arrotondate-e-3-cassetti-in-legno-chiaro-160-cm-polari-241721.htm",
    "larghezza_cm": 160,
    "profondita_cm": 45,
    "descrizione": "Madia a 2 ante arrotondate e 3 cassetti in legno chiaro 160 cm"
  },
  {
    "nome": "Pump Business - Materasso a molle insacchettate 160x200 cm",
    "categoria": "Letti",
    "prezzo": 719.2,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/materasso-a-molle-insacchettate-160x200-cm-1000-13-2-248298_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/materasso-a-molle-insacchettate-160x200-cm-pump-business-248298.htm",
    "larghezza_cm": 80,
    "profondita_cm": 200,
    "descrizione": "Materasso a molle insacchettate 160x200 cm"
  },
  {
    "nome": "Brooke - Divano stile scandinavo 3 posti in velluto a coste marrone",
    "categoria": "Divani",
    "prezzo": 699,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-stile-scandinavo-3-posti-in-velluto-a-coste-marrone-1000-11-25-250166_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-stile-scandinavo-3-posti-in-velluto-a-coste-marrone-brooke-250166.htm",
    "larghezza_cm": 202,
    "profondita_cm": 88,
    "descrizione": "Divano stile scandinavo 3 posti in velluto a coste marrone"
  },
  {
    "nome": "Caraffa in vetro blu e trasparente 1L",
    "categoria": "Cucina",
    "prezzo": 14.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/caraffa-in-vetro-blu-e-trasparente-1l-1000-3-4-250022_2.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/caraffa-in-vetro-blu-e-trasparente-1l-250022.htm",
    "larghezza_cm": 9,
    "profondita_cm": 5,
    "descrizione": "Caraffa in vetro blu e trasparente 1L"
  },
  {
    "nome": "Anaelle - Divano 2 posti in lino blu celadon",
    "categoria": "Divani",
    "prezzo": 899,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-2-posti-in-lino-blu-celadon-1000-9-3-242395_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-2-posti-in-lino-blu-celadon-anaelle-242395.htm",
    "larghezza_cm": 173,
    "profondita_cm": 107,
    "descrizione": "Divano 2 posti in lino blu celadon"
  },
  {
    "nome": "Cobie - Poltrona da giardino in acciaio nero e resina reciclata intrecciata kaki e naturale",
    "categoria": "Poltrone",
    "prezzo": 69.95,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltrona-da-giardino-in-acciaio-nero-e-resina-reciclata-intrecciata-kaki-e-naturale-1000-11-34-246239_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-da-giardino-in-acciaio-nero-e-resina-reciclata-intrecciata-kaki-e-naturale-cobie-246239.htm",
    "larghezza_cm": 74,
    "profondita_cm": 65,
    "descrizione": "Poltrona da giardino in acciaio nero e resina reciclata intrecciata kaki e naturale"
  },
  {
    "nome": "Sedia rivestita in tessuto ciniglia blu con gambe in acciaio nero",
    "categoria": "Sedie",
    "prezzo": 55.99,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/253714_0/sedia-rivestita-in-tessuto-ciniglia-blu-con-gambe-in-acciaio-nero.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-rivestita-in-tessuto-ciniglia-blu-con-gambe-in-acciaio-nero-253714.htm",
    "larghezza_cm": 47,
    "profondita_cm": 53,
    "descrizione": "Sedia rivestita in tessuto ciniglia blu con gambe in acciaio nero"
  },
  {
    "nome": "Oliver - Comò 2 cassetti e 1 vano a giorno bianco crema 90 cm",
    "categoria": "Cassettiere",
    "prezzo": 249,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/como-2-cassetti-e-1-vano-a-giorno-bianco-crema-90-cm-1000-7-28-241764_2.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/como-2-cassetti-e-1-vano-a-giorno-bianco-crema-90-cm-oliver-241764.htm",
    "larghezza_cm": 90,
    "profondita_cm": 45,
    "descrizione": "Comò 2 cassetti e 1 vano a giorno bianco crema 90 cm"
  },
  {
    "nome": "Celeste - Letto a baldacchino in legno di pino beige 160x200 cm",
    "categoria": "Letti",
    "prezzo": 599,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/letto-a-baldacchino-in-legno-di-pino-beige-160x200-cm-1000-14-21-116379_10.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/letto-a-baldacchino-in-legno-di-pino-beige-160x200-cm-celeste-116379.htm",
    "larghezza_cm": 170,
    "profondita_cm": 210,
    "descrizione": "Letto a baldacchino in legno di pino beige 160x200 cm"
  },
  {
    "nome": "Newport - Cassettone da letto 90x180 cm bianco",
    "categoria": "Letti",
    "prezzo": 139,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/cassettone-da-letto-90x180-cm-bianco-1000-12-28-136845_4.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/cassettone-da-letto-90x180-cm-bianco-newport-136845.htm",
    "larghezza_cm": 93,
    "profondita_cm": 191,
    "descrizione": "Cassettone da letto 90x180 cm bianco"
  },
  {
    "nome": "Lilo - Pouf in tessuto bouclé écru",
    "categoria": "Divani",
    "prezzo": 399,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/pouf-in-tessuto-boucle-ecru-1000-14-39-243046_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/pouf-in-tessuto-boucle-ecru-lilo-243046.htm",
    "larghezza_cm": 100,
    "profondita_cm": 77,
    "descrizione": "Pouf in tessuto bouclé écru"
  },
  {
    "nome": "Lampada a sospensione in vetro rigato ambrate",
    "categoria": "Lampade",
    "prezzo": 69.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/lampada-a-sospensione-in-vetro-rigato-ambrate-1000-6-10-243140_2.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/lampada-a-sospensione-in-vetro-rigato-ambrate-243140.htm",
    "larghezza_cm": 33.5,
    "profondita_cm": 33.5,
    "descrizione": "Lampada a sospensione in vetro rigato ambrate"
  },
  {
    "nome": "Decorazioni murali ovali a forma di insetti in resina oro e nera (x2)",
    "categoria": "Decorazioni",
    "prezzo": 32.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/decorazioni-murali-ovali-a-forma-di-insetti-in-resina-oro-e-nera-x2-1000-15-7-236536_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/decorazioni-murali-ovali-a-forma-di-insetti-in-resina-oro-e-nera-x2-236536.htm",
    "larghezza_cm": 18.5,
    "profondita_cm": 4.8,
    "descrizione": "Decorazioni murali ovali a forma di insetti in resina oro e nera (x2)"
  },
  {
    "nome": "Vaso in vetro blu alt. 26 cm",
    "categoria": "Decorazioni",
    "prezzo": 13.95,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/252829/vaso-in-vetro-blu-alt-26-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/vaso-in-vetro-blu-alt-26-cm-252829.htm",
    "larghezza_cm": 11.5,
    "profondita_cm": 11.5,
    "descrizione": "Vaso in vetro blu alt. 26 cm"
  },
  {
    "nome": "Piatto da dessert in ceramica modellata bianca con fantasia conchiglia gialla",
    "categoria": "Cucina",
    "prezzo": 5.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/piatto-da-dessert-in-ceramica-modellata-bianca-con-fantasia-conchiglia-gialla-1000-14-20-246922_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/piatto-da-dessert-in-ceramica-modellata-bianca-con-fantasia-conchiglia-gialla-246922.htm",
    "larghezza_cm": 21,
    "profondita_cm": 21,
    "descrizione": "Piatto da dessert in ceramica modellata bianca con fantasia conchiglia gialla"
  },
  {
    "nome": "Paul - Divano 3 posti XXL in lino bianco",
    "categoria": "Divani",
    "prezzo": 1499,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-3-posti-xxl-in-lino-bianco-1000-0-2-247027_2.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-3-posti-xxl-in-lino-bianco-paul-247027.htm",
    "larghezza_cm": 220,
    "profondita_cm": 125,
    "descrizione": "Divano 3 posti XXL in lino bianco"
  },
  {
    "nome": "Mangrove - Sedia in frassino con seduta in corda beige",
    "categoria": "Sedie",
    "prezzo": 229,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-in-frassino-con-seduta-in-corda-beige-1000-11-15-225720_12.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-in-frassino-con-seduta-in-corda-beige-mangrove-225720.htm",
    "larghezza_cm": 55,
    "profondita_cm": 60,
    "descrizione": "Sedia in frassino con seduta in corda beige"
  },
  {
    "nome": "Archie - Poltrona da pranzo blu con gambe in legno di rovere",
    "categoria": "Poltrone",
    "prezzo": 149,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltrona-da-pranzo-blu-con-gambe-in-legno-di-rovere-1000-0-9-249781_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-da-pranzo-blu-con-gambe-in-legno-di-rovere-archie-249781.htm",
    "larghezza_cm": 58,
    "profondita_cm": 61,
    "descrizione": "Poltrona da pranzo blu con gambe in legno di rovere"
  },
  {
    "nome": "Anson Business - Set da pranzo per ristorante effetto pietra écru, in resina riciclata beige, con 4 sedie bicolore",
    "categoria": "Sedie",
    "prezzo": 1799,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/set-da-pranzo-per-ristorante-effetto-pietra-ecru-in-resina-riciclata-beige-con-4-sedie-bicolore-1000-2-39-246162_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/set-da-pranzo-per-ristorante-effetto-pietra-ecru-in-resina-riciclata-beige-con-4-sedie-bicolore-anson-business-246162.htm",
    "larghezza_cm": 150,
    "profondita_cm": 150,
    "descrizione": "Set da pranzo per ristorante effetto pietra écru, in resina riciclata beige, con 4 sedie bicolore"
  },
  {
    "nome": "Sedia in tessuto tramato color écrucon gambe in legno massello di rovere",
    "categoria": "Sedie",
    "prezzo": 169,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/253672_0/sedia-in-tessuto-tramato-color-ecrucon-gambe-in-legno-massello-di-rovere.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-in-tessuto-tramato-color-ecrucon-gambe-in-legno-massello-di-rovere-253672.htm",
    "larghezza_cm": 52,
    "profondita_cm": 58,
    "descrizione": "Sedia in tessuto tramato color écrucon gambe in legno massello di rovere"
  },
  {
    "nome": "Panca contenitore in mango e cotone beige scuro",
    "categoria": "Divani",
    "prezzo": 299,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/241672/panca-contenitore-in-mango-e-cotone-beige-scuro.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/panca-contenitore-in-mango-e-cotone-beige-scuro-241672.htm",
    "larghezza_cm": 100,
    "profondita_cm": 40,
    "descrizione": "Panca contenitore in mango e cotone beige scuro"
  },
  {
    "nome": "Bruce - Madia a 4 ante in acciaio e abete 121 cm",
    "categoria": "Credenze",
    "prezzo": 349,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/madia-a-4-ante-in-acciaio-e-abete-121-cm-1000-6-10-185986_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/madia-a-4-ante-in-acciaio-e-abete-121-cm-bruce-185986.htm",
    "larghezza_cm": 121,
    "profondita_cm": 42,
    "descrizione": "Madia a 4 ante in acciaio e abete 121 cm"
  },
  {
    "nome": "Constantin - Poltrona imbottita color lino",
    "categoria": "Divani",
    "prezzo": 179,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltrona-imbottita-color-lino-1000-16-8-235840_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-imbottita-color-lino-constantin-235840.htm",
    "larghezza_cm": 65,
    "profondita_cm": 66,
    "descrizione": "Poltrona imbottita color lino"
  },
  {
    "nome": "Candela bianca 3 lucignoli con cuore",
    "categoria": "Decorazioni",
    "prezzo": 12.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/candela-bianca-3-lucignoli-con-cuore-1000-6-24-141310_5.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/candela-bianca-3-lucignoli-con-cuore-141310.htm",
    "larghezza_cm": 12,
    "profondita_cm": 12,
    "descrizione": "Candela bianca 3 lucignoli con cuore"
  },
  {
    "nome": "Lotto di 2 - Mug in porcellana rosa con stampa",
    "categoria": "Cucina",
    "prezzo": 7.98,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/mug-in-porcellana-rosa-con-stampa-1000-2-14-208048_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/mug-in-porcellana-rosa-con-stampa-208048.htm",
    "larghezza_cm": 13,
    "profondita_cm": 10,
    "descrizione": "Mug in porcellana rosa con stampa"
  },
  {
    "nome": "Tary - Divano a 3 posti color sabbia",
    "categoria": "Divani",
    "prezzo": 1099,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-a-3-posti-color-sabbia-1000-5-17-230355_5.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-a-3-posti-color-sabbia-tary-230355.htm",
    "larghezza_cm": 232,
    "profondita_cm": 102,
    "descrizione": "Divano a 3 posti color sabbia"
  },
  {
    "nome": "Sacha Business - Poltrona da pranzo per ristorante in tessuto tramato giallo ocra",
    "categoria": "Poltrone",
    "prezzo": 179,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltrona-da-pranzo-per-ristorante-in-tessuto-tramato-giallo-ocra-1000-2-18-246961_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-da-pranzo-per-ristorante-in-tessuto-tramato-giallo-ocra-sacha-business-246961.htm",
    "larghezza_cm": 57.5,
    "profondita_cm": 59,
    "descrizione": "Poltrona da pranzo per ristorante in tessuto tramato giallo ocra"
  },
  {
    "nome": "Kate - Sedia in poliestere riciclato e lino grigio con gambe in acciaio nero",
    "categoria": "Sedie",
    "prezzo": 99.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-in-poliestere-riciclato-e-lino-grigio-con-gambe-in-acciaio-nero-1000-16-11-238713_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-in-poliestere-riciclato-e-lino-grigio-con-gambe-in-acciaio-nero-kate-238713.htm",
    "larghezza_cm": 56,
    "profondita_cm": 55,
    "descrizione": "Sedia in poliestere riciclato e lino grigio con gambe in acciaio nero"
  },
  {
    "nome": "Leandre - Credenza bianca a 3 ante in legno di paulonia 159cm",
    "categoria": "Cassettiere",
    "prezzo": 1399,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/credenza-bianca-a-3-ante-in-legno-di-paulonia-159cm-1000-0-35-228446_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/credenza-bianca-a-3-ante-in-legno-di-paulonia-159cm-leandre-228446.htm",
    "larghezza_cm": 159,
    "profondita_cm": 45,
    "descrizione": "Credenza bianca a 3 ante in legno di paulonia 159cm"
  },
  {
    "nome": "Lampada a sospensione in metallo nero con globi in vetro trasparente",
    "categoria": "Lampade",
    "prezzo": 149,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/235206/lampada-a-sospensione-in-metallo-nero-con-globi-in-vetro-trasparente.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/lampada-a-sospensione-in-metallo-nero-con-globi-in-vetro-trasparente-235206.htm",
    "larghezza_cm": 101,
    "profondita_cm": 39,
    "descrizione": "Lampada a sospensione in metallo nero con globi in vetro trasparente"
  },
  {
    "nome": "Barattolo in vetro con coperchio in legno di acacia",
    "categoria": "Cucina",
    "prezzo": 8.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/barattolo-in-vetro-con-coperchio-in-legno-di-acacia-1000-14-28-239017_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/barattolo-in-vetro-con-coperchio-in-legno-di-acacia-239017.htm",
    "larghezza_cm": 10,
    "profondita_cm": 10,
    "descrizione": "Barattolo in vetro con coperchio in legno di acacia"
  },
  {
    "nome": "Divano 3/4 posti effetto velluto beige chiaro",
    "categoria": "Divani",
    "prezzo": 1099,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-3-4-posti-effetto-velluto-beige-chiaro-1000-7-24-250247_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-3-4-posti-effetto-velluto-beige-chiaro-250247.htm",
    "larghezza_cm": 220,
    "profondita_cm": 100,
    "descrizione": "Divano 3/4 posti effetto velluto beige chiaro"
  },
  {
    "nome": "Poltrona da giardino in resina intrecciata riciclata beige con cuscini écru in poliestere riciclato",
    "categoria": "Poltrone",
    "prezzo": 209.3,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/251598/poltrona-da-giardino-in-resina-intrecciata-riciclata-beige-con-cuscini-ecru-in-poliestere-riciclato.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-da-giardino-in-resina-intrecciata-riciclata-beige-con-cuscini-ecru-in-poliestere-riciclato-251598.htm",
    "larghezza_cm": 91,
    "profondita_cm": 83,
    "descrizione": "Poltrona da giardino in resina intrecciata riciclata beige con cuscini écru in poliestere riciclato"
  },
  {
    "nome": "Blackly Business - Piano per tavolo in marmo bianco 4 persone",
    "categoria": "Altri mobili",
    "prezzo": 299,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/piano-per-tavolo-in-marmo-bianco-4-persone-1000-8-28-199452_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/piano-per-tavolo-in-marmo-bianco-4-persone-blackly-business-199452.htm",
    "larghezza_cm": 90,
    "profondita_cm": 90,
    "descrizione": "Piano per tavolo in marmo bianco 4 persone"
  },
  {
    "nome": "Isys - Sedia vintage in tessuto riciclato beige e motivi geometrici neri",
    "categoria": "Sedie",
    "prezzo": 111.3,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-vintage-in-tessuto-riciclato-beige-e-motivi-geometrici-neri-1000-1-23-242948_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-vintage-in-tessuto-riciclato-beige-e-motivi-geometrici-neri-isys-242948.htm",
    "larghezza_cm": 50.5,
    "profondita_cm": 54,
    "descrizione": "Sedia vintage in tessuto riciclato beige e motivi geometrici neri"
  },
  {
    "nome": "Pump - Modulo centrale 1/2 posti color sabbia",
    "categoria": "Divani",
    "prezzo": 599,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/modulo-centrale-1-2-posti-color-sabbia-1000-7-19-230357_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/modulo-centrale-1-2-posti-color-sabbia-pump-230357.htm",
    "larghezza_cm": 99,
    "profondita_cm": 99,
    "descrizione": "Modulo centrale 1/2 posti color sabbia"
  },
  {
    "nome": "Caldera Business - Scrivania console",
    "categoria": "Cassettiere",
    "prezzo": 399,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/scrivania-console-1000-16-34-249355_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/scrivania-console-caldera-business-249355.htm",
    "larghezza_cm": 110,
    "profondita_cm": 40,
    "descrizione": "Scrivania console"
  },
  {
    "nome": "Somny - Rete a doghe 90x190 cm",
    "categoria": "Letti",
    "prezzo": 149,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/rete-a-doghe-90x190-cm-1000-14-1-241737_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/rete-a-doghe-90x190-cm-somny-241737.htm",
    "larghezza_cm": 188,
    "profondita_cm": 88.7,
    "descrizione": "Rete a doghe 90x190 cm"
  },
  {
    "nome": "Meyer - Poltrona in tessuto bouclé bianco e legno massello di betulla",
    "categoria": "Divani",
    "prezzo": 299,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/210052_0/poltrona-in-tessuto-boucle-bianco-e-legno-massello-di-betulla.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-in-tessuto-boucle-bianco-e-legno-massello-di-betulla-meyer-210052.htm",
    "larghezza_cm": 66.5,
    "profondita_cm": 73.5,
    "descrizione": "Poltrona in tessuto bouclé bianco e legno massello di betulla"
  },
  {
    "nome": "Quadro su tela con arance stampato e dipinto a mano 37x52 cm",
    "categoria": "Decorazioni",
    "prezzo": 29.99,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/251777/quadro-su-tela-con-arance-stampato-e-dipinto-a-mano-37x52-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/quadro-su-tela-con-arance-stampato-e-dipinto-a-mano-37x52-cm-251777.htm",
    "larghezza_cm": 37,
    "profondita_cm": 3.5,
    "descrizione": "Quadro su tela con arance stampato e dipinto a mano 37x52 cm"
  },
  {
    "nome": "Lilo - Divano nuvola 3/4 posti in pelle color cammello",
    "categoria": "Divani",
    "prezzo": 2499,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-nuvola-3-4-posti-in-pelle-color-cammello-1000-13-2-249692_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-nuvola-3-4-posti-in-pelle-color-cammello-lilo-249692.htm",
    "larghezza_cm": 240,
    "profondita_cm": 102,
    "descrizione": "Divano nuvola 3/4 posti in pelle color cammello"
  },
  {
    "nome": "Neus - Sedia in velluto ocra e acciaio dorato",
    "categoria": "Sedie",
    "prezzo": 159,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-in-velluto-ocra-e-acciaio-dorato-1000-4-16-244294_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-in-velluto-ocra-e-acciaio-dorato-neus-244294.htm",
    "larghezza_cm": 60.5,
    "profondita_cm": 60,
    "descrizione": "Sedia in velluto ocra e acciaio dorato"
  },
  {
    "nome": "Pouf in tessuto tramato color sabbia beige",
    "categoria": "Divani",
    "prezzo": 399,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/254277_0/pouf-in-tessuto-tramato-color-sabbia-beige.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/pouf-in-tessuto-tramato-color-sabbia-beige-254277.htm",
    "larghezza_cm": 90,
    "profondita_cm": 90,
    "descrizione": "Pouf in tessuto tramato color sabbia beige"
  },
  {
    "nome": "Mudo - Testata da letto 160 cm in metallo nero",
    "categoria": "Letti",
    "prezzo": 230.3,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/testata-da-letto-160-cm-in-metallo-nero-1000-12-13-234000_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/testata-da-letto-160-cm-in-metallo-nero-mudo-234000.htm",
    "larghezza_cm": 165,
    "profondita_cm": 22,
    "descrizione": "Testata da letto 160 cm in metallo nero"
  },
  {
    "nome": "Malaga - Testata del letto 90 cm in rattan",
    "categoria": "Letti",
    "prezzo": 159,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/testata-del-letto-90-cm-in-rattan-1000-11-26-248568_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/testata-del-letto-90-cm-in-rattan-malaga-248568.htm",
    "larghezza_cm": 105,
    "profondita_cm": 3,
    "descrizione": "Testata del letto 90 cm in rattan"
  },
  {
    "nome": "Candela profumata in vetro colorato blu chiaro e metallo dorato 350g",
    "categoria": "Decorazioni",
    "prezzo": 18.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/candela-profumata-in-vetro-colorato-blu-chiaro-e-metallo-dorato-350g-1000-5-7-245638_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/candela-profumata-in-vetro-colorato-blu-chiaro-e-metallo-dorato-350g-245638.htm",
    "larghezza_cm": 10,
    "profondita_cm": 10,
    "descrizione": "Candela profumata in vetro colorato blu chiaro e metallo dorato 350g"
  },
  {
    "nome": "Lotto di 2 - Piatto piano in gres bianco e terracotta",
    "categoria": "Cucina",
    "prezzo": 12.5,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/251935/piatto-piano-in-gres-bianco-e-terracotta.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/piatto-piano-in-gres-bianco-e-terracotta-251935.htm",
    "larghezza_cm": 26.8,
    "profondita_cm": 3,
    "descrizione": "Piatto piano in gres bianco e terracotta"
  },
  {
    "nome": "Divano da giardino a 2 posti in alluminio, textilene e cuscini in poliestere riciclato color argilla",
    "categoria": "Divani",
    "prezzo": 279.3,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/251637/divano-da-giardino-a-2-posti-in-alluminio-textilene-e-cuscini-in-poliestere-riciclato-color-argilla.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-da-giardino-a-2-posti-in-alluminio-textilene-e-cuscini-in-poliestere-riciclato-color-argilla-251637.htm",
    "larghezza_cm": 127.5,
    "profondita_cm": 90,
    "descrizione": "Divano da giardino a 2 posti in alluminio, textilene e cuscini in poliestere riciclato color argilla"
  },
  {
    "nome": "Lilo - Pouf in velluto color bronzo",
    "categoria": "Divani",
    "prezzo": 399,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/pouf-in-velluto-color-bronzo-1000-0-25-247911_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/pouf-in-velluto-color-bronzo-lilo-247911.htm",
    "larghezza_cm": 100,
    "profondita_cm": 75,
    "descrizione": "Pouf in velluto color bronzo"
  },
  {
    "nome": "Lampada da terra per esterni in rattan alt.153 cm senza fili e ricaricabile",
    "categoria": "Lampade",
    "prezzo": 349,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/251256/lampada-da-terra-per-esterni-in-rattan-alt-153-cm-senza-fili-e-ricaricabile.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/lampada-da-terra-per-esterni-in-rattan-alt-153-cm-senza-fili-e-ricaricabile-251256.htm",
    "larghezza_cm": 79,
    "profondita_cm": 79,
    "descrizione": "Lampada da terra per esterni in rattan alt.153 cm senza fili e ricaricabile"
  },
  {
    "nome": "Barattolo quadrato in vetro e bambù, Alt. 10 cm",
    "categoria": "Cucina",
    "prezzo": 6.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/barattolo-quadrato-in-vetro-e-bambu-alt-10-cm-1000-7-5-208121_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/barattolo-quadrato-in-vetro-e-bambu-alt-10-cm-208121.htm",
    "larghezza_cm": 10,
    "profondita_cm": 10,
    "descrizione": "Barattolo quadrato in vetro e bambù, Alt. 10 cm"
  },
  {
    "nome": "Divano a 2 posti in tessuto tramato beige",
    "categoria": "Divani",
    "prezzo": 999,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/252821/divano-a-2-posti-in-tessuto-tramato-beige.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-a-2-posti-in-tessuto-tramato-beige-252821.htm",
    "larghezza_cm": 197,
    "profondita_cm": 91,
    "descrizione": "Divano a 2 posti in tessuto tramato beige"
  },
  {
    "nome": "Mix - Fasciatoio per cassettiera",
    "categoria": "Cassettiere",
    "prezzo": 55.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/fasciatoio-per-cassettiera-1000-10-11-249332_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/fasciatoio-per-cassettiera-mix-249332.htm",
    "larghezza_cm": 47.4,
    "profondita_cm": 71.2,
    "descrizione": "Fasciatoio per cassettiera"
  },
  {
    "nome": "Tappeto per bambini cervo taftato beige 90x100 cm",
    "categoria": "Tappeti",
    "prezzo": 39.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tappeto-per-bambini-cervo-taftato-beige-90x100-cm-1000-8-27-235203_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tappeto-per-bambini-cervo-taftato-beige-90x100-cm-235203.htm",
    "larghezza_cm": 100,
    "profondita_cm": 17,
    "descrizione": "Tappeto per bambini cervo taftato beige 90x100 cm"
  },
  {
    "nome": "Decorazione murale con elementi periodici in acciaio nero, 120x80 cm",
    "categoria": "Decorazioni",
    "prezzo": 119,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/decorazione-murale-con-elementi-periodici-in-acciaio-nero-120x80-cm-1000-11-6-245678_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/decorazione-murale-con-elementi-periodici-in-acciaio-nero-120x80-cm-245678.htm",
    "larghezza_cm": 120,
    "profondita_cm": 3.5,
    "descrizione": "Decorazione murale con elementi periodici in acciaio nero, 120x80 cm"
  },
  {
    "nome": "Fiore di ortensia artificiale color crema H 73 cm",
    "categoria": "Decorazioni",
    "prezzo": 9.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/fiore-di-ortensia-artificiale-color-crema-h-73-cm-1000-2-24-121671_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/fiore-di-ortensia-artificiale-color-crema-h-73-cm-121671.htm",
    "larghezza_cm": 20,
    "profondita_cm": 73,
    "descrizione": "Fiore di ortensia artificiale color crema H 73 cm"
  },
  {
    "nome": "Divano angolare con penisola a destra 3/4 posti effetto velluto beige",
    "categoria": "Divani",
    "prezzo": 1399,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-angolare-con-penisola-a-destra-3-4-posti-effetto-velluto-beige-1000-2-19-250242_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-angolare-con-penisola-a-destra-3-4-posti-effetto-velluto-beige-250242.htm",
    "larghezza_cm": 220,
    "profondita_cm": 160,
    "descrizione": "Divano angolare con penisola a destra 3/4 posti effetto velluto beige"
  },
  {
    "nome": "Clic-clac - Tavolo da pranzo allungabile 4 a 8 persone 90/180 cm",
    "categoria": "Tavoli da pranzo",
    "prezzo": 479,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/247934/tavolo-da-pranzo-allungabile-4-a-8-persone-90-180-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tavolo-da-pranzo-allungabile-4-a-8-persone-90-180-cm-clic-clac-247934.htm",
    "larghezza_cm": 90,
    "profondita_cm": 90,
    "descrizione": "Tavolo da pranzo allungabile 4 a 8 persone 90/180 cm"
  },
  {
    "nome": "Sedia in tessuto moka e legno di faggio",
    "categoria": "Sedie",
    "prezzo": 119,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/252568/sedia-in-tessuto-moka-e-legno-di-faggio.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-in-tessuto-moka-e-legno-di-faggio-252568.htm",
    "larghezza_cm": 56,
    "profondita_cm": 55,
    "descrizione": "Sedia in tessuto moka e legno di faggio"
  },
  {
    "nome": "Divano da giardino 2 posti in resina intrecciata riciclata beige e cuscini in poliestere riciclato écru",
    "categoria": "Divani",
    "prezzo": 699,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/251600/divano-da-giardino-2-posti-in-resina-intrecciata-riciclata-beige-e-cuscini-in-poliestere-riciclato-ecru.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-da-giardino-2-posti-in-resina-intrecciata-riciclata-beige-e-cuscini-in-poliestere-riciclato-ecru-251600.htm",
    "larghezza_cm": 192.5,
    "profondita_cm": 83,
    "descrizione": "Divano da giardino 2 posti in resina intrecciata riciclata beige e cuscini in poliestere riciclato écru"
  },
  {
    "nome": "Copacabana - Divanetto da giardino 2 posti in resina riciclata effetto rattan e acciaio nero",
    "categoria": "Divani",
    "prezzo": 199,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divanetto-da-giardino-2-posti-in-resina-riciclata-effetto-rattan-e-acciaio-nero-1000-1-0-246246_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divanetto-da-giardino-2-posti-in-resina-riciclata-effetto-rattan-e-acciaio-nero-copacabana-246246.htm",
    "larghezza_cm": 118,
    "profondita_cm": 73,
    "descrizione": "Divanetto da giardino 2 posti in resina riciclata effetto rattan e acciaio nero"
  },
  {
    "nome": "Poltrona letto pieghevole in bouclé écru",
    "categoria": "Divani",
    "prezzo": 299,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltrona-letto-pieghevole-in-boucle-ecru-1000-15-18-249626_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-letto-pieghevole-in-boucle-ecru-249626.htm",
    "larghezza_cm": 82,
    "profondita_cm": 92,
    "descrizione": "Poltrona letto pieghevole in bouclé écru"
  },
  {
    "nome": "Joséphine - Sedie in velluto riciclato grigio talpa (x2)",
    "categoria": "Sedie",
    "prezzo": 249,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedie-in-velluto-riciclato-grigio-talpa-x2-1000-3-22-248441_10.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedie-in-velluto-riciclato-grigio-talpa-x2-josephine-248441.htm",
    "larghezza_cm": 51,
    "profondita_cm": 57,
    "descrizione": "Sedie in velluto riciclato grigio talpa (x2)"
  },
  {
    "nome": "Arun - Divano da giardino 3 posti in resina riciclata beige e acciaio bianco",
    "categoria": "Divani",
    "prezzo": 299,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-da-giardino-3-posti-in-resina-riciclata-beige-e-acciaio-bianco-1000-16-3-245921_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-da-giardino-3-posti-in-resina-riciclata-beige-e-acciaio-bianco-arun-245921.htm",
    "larghezza_cm": 174.5,
    "profondita_cm": 75,
    "descrizione": "Divano da giardino 3 posti in resina riciclata beige e acciaio bianco"
  },
  {
    "nome": "Suzelle - Mobiletto portaoggetti a 1 anta e paglia di Vienna",
    "categoria": "Cassettiere",
    "prezzo": 199,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/mobiletto-portaoggetti-a-1-anta-e-paglia-di-vienna-1000-1-17-237899_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/mobiletto-portaoggetti-a-1-anta-e-paglia-di-vienna-suzelle-237899.htm",
    "larghezza_cm": 45,
    "profondita_cm": 37,
    "descrizione": "Mobiletto portaoggetti a 1 anta e paglia di Vienna"
  },
  {
    "nome": "Somny - Rete a doghe 70x190 cm",
    "categoria": "Letti",
    "prezzo": 139,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/rete-a-doghe-70x190-cm-1000-12-40-241735_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/rete-a-doghe-70x190-cm-somny-241735.htm",
    "larghezza_cm": 188,
    "profondita_cm": 68.7,
    "descrizione": "Rete a doghe 70x190 cm"
  },
  {
    "nome": "Parure da letto in lino lavato verde giada, 220x240 cm",
    "categoria": "Letti",
    "prezzo": 159,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/parure-da-letto-in-lino-lavato-verde-giada-220x240-cm-1000-5-39-235625_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/parure-da-letto-in-lino-lavato-verde-giada-220x240-cm-235625.htm",
    "larghezza_cm": 240,
    "profondita_cm": 0.5,
    "descrizione": "Parure da letto in lino lavato verde giada, 220x240 cm"
  },
  {
    "nome": "Pouf beige e dorato",
    "categoria": "Divani",
    "prezzo": 69.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/pouf-beige-e-dorato-1000-1-39-245260_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/pouf-beige-e-dorato-245260.htm",
    "larghezza_cm": 36,
    "profondita_cm": 36,
    "descrizione": "Pouf beige e dorato"
  },
  {
    "nome": "Lampada a sospensione non elettrificata a triplo tamburo in lino beige e juta Ø 40 cm",
    "categoria": "Lampade",
    "prezzo": 44.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/lampada-a-sospensione-non-elettrificata-a-triplo-tamburo-in-lino-beige-e-juta-oe-40-cm-1000-4-9-235267_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/lampada-a-sospensione-non-elettrificata-a-triplo-tamburo-in-lino-beige-e-juta-oe-40-cm-235267.htm",
    "larghezza_cm": 40,
    "profondita_cm": 40,
    "descrizione": "Lampada a sospensione non elettrificata a triplo tamburo in lino beige e juta Ø 40 cm"
  },
  {
    "nome": "Supporto in legno di acacia, bicchieri da whisky tagliati (x2), pinze in pietra e cubetti di ghiaccio",
    "categoria": "Cucina",
    "prezzo": 19.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/supporto-in-legno-di-acacia-bicchieri-da-whisky-tagliati-x2-pinze-in-pietra-e-cubetti-di-ghiaccio-1000-1-27-245617_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/supporto-in-legno-di-acacia-bicchieri-da-whisky-tagliati-x2-pinze-in-pietra-e-cubetti-di-ghiaccio-245617.htm",
    "larghezza_cm": 35,
    "profondita_cm": 12,
    "descrizione": "Supporto in legno di acacia, bicchieri da whisky tagliati (x2), pinze in pietra e cubetti di ghiaccio"
  },
  {
    "nome": "Colette - Cassettone in mango e acacia 110 cm",
    "categoria": "Cassettiere",
    "prezzo": 599,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/110396_0/cassettone-in-mango-e-acacia-110-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/cassettone-in-mango-e-acacia-110-cm-colette-110396.htm",
    "larghezza_cm": 110,
    "profondita_cm": 48,
    "descrizione": "Cassettone in mango e acacia 110 cm"
  },
  {
    "nome": "Anvers - Divano a 4 posti in tessuto tramato beige",
    "categoria": "Divani",
    "prezzo": 1399,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-a-4-posti-in-tessuto-tramato-beige-1000-1-34-243492_12.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-a-4-posti-in-tessuto-tramato-beige-anvers-243492.htm",
    "larghezza_cm": 230,
    "profondita_cm": 106,
    "descrizione": "Divano a 4 posti in tessuto tramato beige"
  },
  {
    "nome": "Mayli - Mobile contenitore 2 ante nero a fantasia",
    "categoria": "Cassettiere",
    "prezzo": 319.2,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/249376/mobile-contenitore-2-ante-nero-a-fantasia.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/mobile-contenitore-2-ante-nero-a-fantasia-mayli-249376.htm",
    "larghezza_cm": 80,
    "profondita_cm": 40,
    "descrizione": "Mobile contenitore 2 ante nero a fantasia"
  },
  {
    "nome": "Lampada a sospensione con paralume in rafia e sfera in vetro fumé",
    "categoria": "Lampade",
    "prezzo": 99.5,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/lampada-a-sospensione-con-paralume-in-rafia-e-sfera-in-vetro-fume-1000-13-14-243062_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/lampada-a-sospensione-con-paralume-in-rafia-e-sfera-in-vetro-fume-243062.htm",
    "larghezza_cm": 81.5,
    "profondita_cm": 81.5,
    "descrizione": "Lampada a sospensione con paralume in rafia e sfera in vetro fumé"
  },
  {
    "nome": "Cuscino in velluto di poliestere riciclato terracotta effetto invecchiato 45x45 cm",
    "categoria": "Tessile",
    "prezzo": 19.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/cuscino-in-velluto-di-poliestere-riciclato-terracotta-effetto-invecchiato-45x45-cm-1000-16-11-231743_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/cuscino-in-velluto-di-poliestere-riciclato-terracotta-effetto-invecchiato-45x45-cm-231743.htm",
    "larghezza_cm": 45,
    "profondita_cm": 10,
    "descrizione": "Cuscino in velluto di poliestere riciclato terracotta effetto invecchiato 45x45 cm"
  },
  {
    "nome": "Play - Divano a 3 posti in tessuto a rete 3D color ruggine",
    "categoria": "Divani",
    "prezzo": 1299,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-a-3-posti-in-tessuto-a-rete-3d-color-ruggine-1000-14-16-238677_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-a-3-posti-in-tessuto-a-rete-3d-color-ruggine-play-238677.htm",
    "larghezza_cm": 231,
    "profondita_cm": 94,
    "descrizione": "Divano a 3 posti in tessuto a rete 3D color ruggine"
  },
  {
    "nome": "Poltrona letto pieghevole in velluto verde",
    "categoria": "Divani",
    "prezzo": 449,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltrona-letto-pieghevole-in-velluto-verde-1000-11-14-249622_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-letto-pieghevole-in-velluto-verde-249622.htm",
    "larghezza_cm": 86,
    "profondita_cm": 91.5,
    "descrizione": "Poltrona letto pieghevole in velluto verde"
  },
  {
    "nome": "Lourmarin - Tavolo per sala da pranzo in legno riciclato effetto anticato L 220 cm",
    "categoria": "Tavoli da pranzo",
    "prezzo": 1599,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tavolo-per-sala-da-pranzo-in-legno-riciclato-effetto-anticato-l-220-cm-1000-11-22-121833_3.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tavolo-per-sala-da-pranzo-in-legno-riciclato-effetto-anticato-l-220-cm-lourmarin-121833.htm",
    "larghezza_cm": 220,
    "profondita_cm": 100,
    "descrizione": "Tavolo per sala da pranzo in legno riciclato effetto anticato L 220 cm"
  },
  {
    "nome": "Tappeto per bambini volpe taftato arancione, écru, grigio antracite 90x100 cm",
    "categoria": "Tappeti",
    "prezzo": 39.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tappeto-per-bambini-volpe-taftato-arancione-ecru-grigio-antracite-90x100-cm-1000-3-22-235198_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tappeto-per-bambini-volpe-taftato-arancione-ecru-grigio-antracite-90x100-cm-235198.htm",
    "larghezza_cm": 90,
    "profondita_cm": 2,
    "descrizione": "Tappeto per bambini volpe taftato arancione, écru, grigio antracite 90x100 cm"
  },
  {
    "nome": "Decorazioni murali rotonde ricamate multicolore (x3)",
    "categoria": "Decorazioni",
    "prezzo": 24.99,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/243522_0/decorazioni-murali-rotonde-ricamate-multicolore-x3.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/decorazioni-murali-rotonde-ricamate-multicolore-x3-243522.htm",
    "larghezza_cm": 21.2,
    "profondita_cm": 1.5,
    "descrizione": "Decorazioni murali rotonde ricamate multicolore (x3)"
  },
  {
    "nome": "Cuscino in velluto écru 60x60cm",
    "categoria": "Tessile",
    "prezzo": 29.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/cuscino-in-velluto-ecru-60x60cm-1000-15-0-235176_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/cuscino-in-velluto-ecru-60x60cm-235176.htm",
    "larghezza_cm": 60,
    "profondita_cm": 10,
    "descrizione": "Cuscino in velluto écru 60x60cm"
  },
  {
    "nome": "Divano 3 posti effetto velluto verde kaki",
    "categoria": "Divani",
    "prezzo": 999,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/252844/divano-3-posti-effetto-velluto-verde-kaki.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-3-posti-effetto-velluto-verde-kaki-252844.htm",
    "larghezza_cm": 203,
    "profondita_cm": 98,
    "descrizione": "Divano 3 posti effetto velluto verde kaki"
  },
  {
    "nome": "Arun - Divano da giardino a 2 posti in resina riciclata beige e acciaio bianco.",
    "categoria": "Divani",
    "prezzo": 229,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-da-giardino-a-2-posti-in-resina-riciclata-beige-e-acciaio-bianco-1000-15-26-245903_5.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-da-giardino-a-2-posti-in-resina-riciclata-beige-e-acciaio-bianco-arun-245903.htm",
    "larghezza_cm": 120,
    "profondita_cm": 74,
    "descrizione": "Divano da giardino a 2 posti in resina riciclata beige e acciaio bianco."
  },
  {
    "nome": "Janeiro - Cassettone vintage in mango 86 cm",
    "categoria": "Cassettiere",
    "prezzo": 479,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/cassettone-vintage-in-mango-86-cm-1000-2-21-155739_6.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/cassettone-vintage-in-mango-86-cm-janeiro-155739.htm",
    "larghezza_cm": 86,
    "profondita_cm": 45,
    "descrizione": "Cassettone vintage in mango 86 cm"
  },
  {
    "nome": "Comodino con 2 cassetti",
    "categoria": "Letti",
    "prezzo": 199,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/comodino-con-2-cassetti-1000-16-27-249389_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/comodino-con-2-cassetti-249389.htm",
    "larghezza_cm": 47,
    "profondita_cm": 39,
    "descrizione": "Comodino con 2 cassetti"
  },
  {
    "nome": "Tenda grafica giallo senape e bianca con occhielli, al pezzo, 140x300 cm",
    "categoria": "Tessile",
    "prezzo": 99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tenda-grafica-giallo-senape-e-bianca-con-occhielli-al-pezzo-140x300-cm-1000-14-37-167481_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tenda-grafica-giallo-senape-e-bianca-con-occhielli-al-pezzo-140x300-cm-167481.htm",
    "larghezza_cm": 140,
    "profondita_cm": 0.5,
    "descrizione": "Tenda grafica giallo senape e bianca con occhielli, al pezzo, 140x300 cm"
  },
  {
    "nome": "Amelya - Divano 3/4 posti in velluto color bronzo",
    "categoria": "Divani",
    "prezzo": 1199,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-3-4-posti-in-velluto-color-bronzo-1000-1-33-242999_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-3-4-posti-in-velluto-color-bronzo-amelya-242999.htm",
    "larghezza_cm": 218,
    "profondita_cm": 95,
    "descrizione": "Divano 3/4 posti in velluto color bronzo"
  },
  {
    "nome": "Louis - Tavolo da pranzo rotondo allungabile 4 a 14 persone in bianca betulla L 120/280 cm",
    "categoria": "Tavoli da pranzo",
    "prezzo": 1049,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tavolo-da-pranzo-rotondo-allungabile-4-a-14-persone-in-bianca-betulla-l-120-280-cm-1000-4-36-166332_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tavolo-da-pranzo-rotondo-allungabile-4-a-14-persone-in-bianca-betulla-l-120-280-cm-louis-166332.htm",
    "larghezza_cm": 120,
    "profondita_cm": 120,
    "descrizione": "Tavolo da pranzo rotondo allungabile 4 a 14 persone in bianca betulla L 120/280 cm"
  },
  {
    "nome": "Versailles - Cassettone nero in acacia e mango 110 cm",
    "categoria": "Cassettiere",
    "prezzo": 599,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/110429/cassettone-nero-in-acacia-e-mango-110-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/cassettone-nero-in-acacia-e-mango-110-cm-versailles-110429.htm",
    "larghezza_cm": 110,
    "profondita_cm": 48,
    "descrizione": "Cassettone nero in acacia e mango 110 cm"
  },
  {
    "nome": "Lotto di 6 - Bicchiere con cannuccia in vetro e coperchio in bambù",
    "categoria": "Cucina",
    "prezzo": 35.94,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/bicchiere-con-cannuccia-in-vetro-e-coperchio-in-bambu-1000-9-15-241341_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/bicchiere-con-cannuccia-in-vetro-e-coperchio-in-bambu-241341.htm",
    "larghezza_cm": 7.5,
    "profondita_cm": 7.5,
    "descrizione": "Bicchiere con cannuccia in vetro e coperchio in bambù"
  },
  {
    "nome": "Poltrona da giardino in resina riciclata intrecciata che imita il rattan e cuscini in poliestere riciclato écru",
    "categoria": "Poltrone",
    "prezzo": 399,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/251597/poltrona-da-giardino-in-resina-riciclata-intrecciata-che-imita-il-rattan-e-cuscini-in-poliestere-riciclato-ecru.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-da-giardino-in-resina-riciclata-intrecciata-che-imita-il-rattan-e-cuscini-in-poliestere-riciclato-ecru-251597.htm",
    "larghezza_cm": 112,
    "profondita_cm": 100,
    "descrizione": "Poltrona da giardino in resina riciclata intrecciata che imita il rattan e cuscini in poliestere riciclato écru"
  },
  {
    "nome": "St Raphaël - Divano da giardino a 3 posti in resina intrecciata riciclata grigia e poliestere riciclato ecru",
    "categoria": "Divani",
    "prezzo": 949,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-da-giardino-a-3-posti-in-resina-intrecciata-riciclata-grigia-e-poliestere-riciclato-ecru-1000-15-12-238304_2.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-da-giardino-a-3-posti-in-resina-intrecciata-riciclata-grigia-e-poliestere-riciclato-ecru-st-raphael-238304.htm",
    "larghezza_cm": 220,
    "profondita_cm": 90,
    "descrizione": "Divano da giardino a 3 posti in resina intrecciata riciclata grigia e poliestere riciclato ecru"
  },
  {
    "nome": "Mobile contenitore a 2 ante con piano effetto terrazzo",
    "categoria": "Cassettiere",
    "prezzo": 699,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/249490/mobile-contenitore-a-2-ante-con-piano-effetto-terrazzo.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/mobile-contenitore-a-2-ante-con-piano-effetto-terrazzo-249490.htm",
    "larghezza_cm": 90,
    "profondita_cm": 45,
    "descrizione": "Mobile contenitore a 2 ante con piano effetto terrazzo"
  },
  {
    "nome": "Canopy - Comodino con 1 cassetto, 1 nicchia in paglia di Vienna beige",
    "categoria": "Letti",
    "prezzo": 179,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/comodino-con-1-cassetto-1-nicchia-in-paglia-di-vienna-beige-1000-7-40-230255_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/comodino-con-1-cassetto-1-nicchia-in-paglia-di-vienna-beige-canopy-230255.htm",
    "larghezza_cm": 45,
    "profondita_cm": 35,
    "descrizione": "Comodino con 1 cassetto, 1 nicchia in paglia di Vienna beige"
  },
  {
    "nome": "Nemo - Divano 2 posti in tessuto tramato grigio chiaro chiné",
    "categoria": "Divani",
    "prezzo": 799,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-2-posti-in-tessuto-tramato-grigio-chiaro-chine-1000-1-4-248218_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-2-posti-in-tessuto-tramato-grigio-chiaro-chine-nemo-248218.htm",
    "larghezza_cm": 180,
    "profondita_cm": 85,
    "descrizione": "Divano 2 posti in tessuto tramato grigio chiaro chiné"
  },
  {
    "nome": "Manufacture - Cassettone stile industriale in massello di mango e metallo 110 cm",
    "categoria": "Cassettiere",
    "prezzo": 589,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/cassettone-stile-industriale-in-massello-di-mango-e-metallo-110-cm-1000-16-20-146267_0.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/cassettone-stile-industriale-in-massello-di-mango-e-metallo-110-cm-manufacture-146267.htm",
    "larghezza_cm": 110,
    "profondita_cm": 45,
    "descrizione": "Cassettone stile industriale in massello di mango e metallo 110 cm"
  },
  {
    "nome": "Divano angolare 4/5 posti con penisola destra e poggiatesta in velluto color mattone",
    "categoria": "Divani",
    "prezzo": 1199,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/252531/divano-angolare-4-5-posti-con-penisola-destra-e-poggiatesta-in-velluto-color-mattone.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-angolare-4-5-posti-con-penisola-destra-e-poggiatesta-in-velluto-color-mattone-252531.htm",
    "larghezza_cm": 270,
    "profondita_cm": 163,
    "descrizione": "Divano angolare 4/5 posti con penisola destra e poggiatesta in velluto color mattone"
  },
  {
    "nome": "Set di 10 candele sottili marroni, gialle e rosa",
    "categoria": "Decorazioni",
    "prezzo": 6.99,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/251923/set-di-10-candele-sottili-marroni-gialle-e-rosa.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/set-di-10-candele-sottili-marroni-gialle-e-rosa-251923.htm",
    "larghezza_cm": 1,
    "profondita_cm": 1,
    "descrizione": "Set di 10 candele sottili marroni, gialle e rosa"
  },
  {
    "nome": "Ciotola in ceramica dorata",
    "categoria": "Cucina",
    "prezzo": 14.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/ciotola-in-ceramica-dorata-1000-4-33-238735_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/ciotola-in-ceramica-dorata-238735.htm",
    "larghezza_cm": 28.5,
    "profondita_cm": 12.5,
    "descrizione": "Ciotola in ceramica dorata"
  },
  {
    "nome": "Sao Antao - Poltrona da giardino in resina intrecciata multicolore e acciaio nero",
    "categoria": "Poltrone",
    "prezzo": 159,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltrona-da-giardino-in-resina-intrecciata-multicolore-e-acciaio-nero-1000-5-18-237818_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-da-giardino-in-resina-intrecciata-multicolore-e-acciaio-nero-sao-antao-237818.htm",
    "larghezza_cm": 72.5,
    "profondita_cm": 70,
    "descrizione": "Poltrona da giardino in resina intrecciata multicolore e acciaio nero"
  },
  {
    "nome": "Trocadero - Cassettone vintage in mango 95 cm",
    "categoria": "Cassettiere",
    "prezzo": 449,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/cassettone-vintage-in-mango-95-cm-1000-0-23-129829_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/cassettone-vintage-in-mango-95-cm-trocadero-129829.htm",
    "larghezza_cm": 95,
    "profondita_cm": 43,
    "descrizione": "Cassettone vintage in mango 95 cm"
  },
  {
    "nome": "Shield - Divano angolare destro 3/4 posti grigio chiaro chiné",
    "categoria": "Divani",
    "prezzo": 1199,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-angolare-destro-3-4-posti-grigio-chiaro-chine-1000-5-40-243088_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-angolare-destro-3-4-posti-grigio-chiaro-chine-shield-243088.htm",
    "larghezza_cm": 260,
    "profondita_cm": 86,
    "descrizione": "Divano angolare destro 3/4 posti grigio chiaro chiné"
  },
  {
    "nome": "Copacabana - Poltrona da giardino rotonda in resina riciclata nera",
    "categoria": "Poltrone",
    "prezzo": 69.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltrona-da-giardino-rotonda-in-resina-riciclata-nera-1000-12-35-246240_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-da-giardino-rotonda-in-resina-riciclata-nera-copacabana-246240.htm",
    "larghezza_cm": 71,
    "profondita_cm": 80,
    "descrizione": "Poltrona da giardino rotonda in resina riciclata nera"
  },
  {
    "nome": "Alfred - Tavolo da pranzo in legno di mango e acciaio grigio antracite per 8/12 persone, L200/280",
    "categoria": "Tavoli da pranzo",
    "prezzo": 899,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tavolo-da-pranzo-in-legno-di-mango-e-acciaio-grigio-antracite-per-8-12-persone-l200-280-1000-6-5-248342_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tavolo-da-pranzo-in-legno-di-mango-e-acciaio-grigio-antracite-per-8-12-persone-l200-280-alfred-248342.htm",
    "larghezza_cm": 280,
    "profondita_cm": 91,
    "descrizione": "Tavolo da pranzo in legno di mango e acciaio grigio antracite per 8/12 persone, L200/280"
  },
  {
    "nome": "Swahi - Mobiletto in legno massello di mango con ante in cotone intrecciato con motivi gemetrici",
    "categoria": "Cassettiere",
    "prezzo": 599,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/mobiletto-in-legno-massello-di-mango-con-ante-in-cotone-intrecciato-con-motivi-gemetrici-1000-10-13-242651_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/mobiletto-in-legno-massello-di-mango-con-ante-in-cotone-intrecciato-con-motivi-gemetrici-swahi-242651.htm",
    "larghezza_cm": 90,
    "profondita_cm": 40,
    "descrizione": "Mobiletto in legno massello di mango con ante in cotone intrecciato con motivi gemetrici"
  },
  {
    "nome": "Pump Essentiel - Materasso a molle insacchettate 140x190 cm",
    "categoria": "Letti",
    "prezzo": 229,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/materasso-a-molle-insacchettate-140x190-cm-1000-3-2-242763_8.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/materasso-a-molle-insacchettate-140x190-cm-pump-essentiel-242763.htm",
    "larghezza_cm": 140,
    "profondita_cm": 190,
    "descrizione": "Materasso a molle insacchettate 140x190 cm"
  },
  {
    "nome": "Quadro astratto beige 120x151 cm",
    "categoria": "Decorazioni",
    "prezzo": 269,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/254687/quadro-astratto-beige-120x151-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/quadro-astratto-beige-120x151-cm-254687.htm",
    "larghezza_cm": 120,
    "profondita_cm": 3,
    "descrizione": "Quadro astratto beige 120x151 cm"
  },
  {
    "nome": "Lampada a sospensione arrotondata in rattan intrecciato",
    "categoria": "Lampade",
    "prezzo": 64.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/lampada-a-sospensione-arrotondata-in-rattan-intrecciato-1000-11-13-240068_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/lampada-a-sospensione-arrotondata-in-rattan-intrecciato-240068.htm",
    "larghezza_cm": 50,
    "profondita_cm": 28,
    "descrizione": "Lampada a sospensione arrotondata in rattan intrecciato"
  },
  {
    "nome": "Set di 3 candele profumate in vasetti di terracotta",
    "categoria": "Decorazioni",
    "prezzo": 6.45,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/set-di-3-candele-profumate-in-vasetti-di-terracotta-1000-2-15-246876_2.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/set-di-3-candele-profumate-in-vasetti-di-terracotta-246876.htm",
    "larghezza_cm": 6,
    "profondita_cm": 6,
    "descrizione": "Set di 3 candele profumate in vasetti di terracotta"
  },
  {
    "nome": "Divano ad angolo destro 4/5 posti effetto velluto riciclato verderame",
    "categoria": "Divani",
    "prezzo": 1899,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-ad-angolo-destro-4-5-posti-effetto-velluto-riciclato-verderame-1000-15-28-249677_2.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-ad-angolo-destro-4-5-posti-effetto-velluto-riciclato-verderame-249677.htm",
    "larghezza_cm": 304,
    "profondita_cm": 168,
    "descrizione": "Divano ad angolo destro 4/5 posti effetto velluto riciclato verderame"
  },
  {
    "nome": "Hallen - Poltrona letto pieghevole beige",
    "categoria": "Divani",
    "prezzo": 299,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltrona-letto-pieghevole-beige-1000-16-29-234344_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-letto-pieghevole-beige-hallen-234344.htm",
    "larghezza_cm": 93,
    "profondita_cm": 83,
    "descrizione": "Poltrona letto pieghevole beige"
  },
  {
    "nome": "Pump Essentiel - Materasso a molle insacchettate 90x200 cm",
    "categoria": "Letti",
    "prezzo": 179,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/materasso-a-molle-insacchettate-90x200-cm-1000-2-1-242762_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/materasso-a-molle-insacchettate-90x200-cm-pump-essentiel-242762.htm",
    "larghezza_cm": 90,
    "profondita_cm": 200,
    "descrizione": "Materasso a molle insacchettate 90x200 cm"
  },
  {
    "nome": "Divano 3 posti in tessuto testurizzato beige",
    "categoria": "Divani",
    "prezzo": 1199,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/252419_0/divano-3-posti-in-tessuto-testurizzato-beige.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-3-posti-in-tessuto-testurizzato-beige-252419.htm",
    "larghezza_cm": 223,
    "profondita_cm": 97,
    "descrizione": "Divano 3 posti in tessuto testurizzato beige"
  },
  {
    "nome": "Porta oggetti per lavello in ceramica nera",
    "categoria": "Cucina",
    "prezzo": 19.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/porta-oggetti-per-lavello-in-ceramica-nera-1000-4-19-194892_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/porta-oggetti-per-lavello-in-ceramica-nera-194892.htm",
    "larghezza_cm": 18,
    "profondita_cm": 7,
    "descrizione": "Porta oggetti per lavello in ceramica nera"
  },
  {
    "nome": "Tokyo - Divano a 3/4 posti grigio antracite chiné",
    "categoria": "Divani",
    "prezzo": 999,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-a-3-4-posti-grigio-antracite-chine-1000-13-21-241634_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-a-3-4-posti-grigio-antracite-chine-tokyo-241634.htm",
    "larghezza_cm": 240,
    "profondita_cm": 96,
    "descrizione": "Divano a 3/4 posti grigio antracite chiné"
  },
  {
    "nome": "Spring - Tavolo da pranzo rotondo bianco 4 persone 90 cm",
    "categoria": "Tavoli da pranzo",
    "prezzo": 99.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tavolo-da-pranzo-rotondo-bianco-4-persone-90-cm-1000-9-18-240032_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tavolo-da-pranzo-rotondo-bianco-4-persone-90-cm-spring-240032.htm",
    "larghezza_cm": 90,
    "profondita_cm": 90,
    "descrizione": "Tavolo da pranzo rotondo bianco 4 persone 90 cm"
  },
  {
    "nome": "Suzelle - Comò con 3 cassetti in paglia di Vienna 80 cm",
    "categoria": "Cassettiere",
    "prezzo": 259,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/como-con-3-cassetti-in-paglia-di-vienna-80-cm-1000-1-17-230232_4.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/como-con-3-cassetti-in-paglia-di-vienna-80-cm-suzelle-230232.htm",
    "larghezza_cm": 80,
    "profondita_cm": 45,
    "descrizione": "Comò con 3 cassetti in paglia di Vienna 80 cm"
  },
  {
    "nome": "Cover Essentiel - Topper in memory foam 180x200",
    "categoria": "Letti",
    "prezzo": 249,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/topper-in-memory-foam-180x200-1000-6-22-242783_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/topper-in-memory-foam-180x200-cover-essentiel-242783.htm",
    "larghezza_cm": 180,
    "profondita_cm": 200,
    "descrizione": "Topper in memory foam 180x200"
  },
  {
    "nome": "Divano letto 3 posti con rivestimento sfoderabile in tessuto tramato beige, materasso da 14 cm",
    "categoria": "Divani",
    "prezzo": 1699,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/252832/divano-letto-3-posti-con-rivestimento-sfoderabile-in-tessuto-tramato-beige-materasso-da-14-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-letto-3-posti-con-rivestimento-sfoderabile-in-tessuto-tramato-beige-materasso-da-14-cm-252832.htm",
    "larghezza_cm": 180,
    "profondita_cm": 97,
    "descrizione": "Divano letto 3 posti con rivestimento sfoderabile in tessuto tramato beige, materasso da 14 cm"
  },
  {
    "nome": "Mendoza Business - Set di 2 sedie per ristorante in tessuto bouclé verde con schienale in legno di rovere",
    "categoria": "Sedie",
    "prezzo": 199.2,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/set-di-2-sedie-per-ristorante-in-tessuto-boucle-verde-con-schienale-in-legno-di-rovere-1000-3-19-246962_2.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/set-di-2-sedie-per-ristorante-in-tessuto-boucle-verde-con-schienale-in-legno-di-rovere-mendoza-business-246962.htm",
    "larghezza_cm": 54.5,
    "profondita_cm": 55.5,
    "descrizione": "Set di 2 sedie per ristorante in tessuto bouclé verde con schienale in legno di rovere"
  },
  {
    "nome": "Selena - Comodino a 1 anta verde kaki",
    "categoria": "Letti",
    "prezzo": 99.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/comodino-a-1-anta-verde-kaki-1000-7-0-237718_5.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/comodino-a-1-anta-verde-kaki-selena-237718.htm",
    "larghezza_cm": 43,
    "profondita_cm": 35,
    "descrizione": "Comodino a 1 anta verde kaki"
  },
  {
    "nome": "Tela astratta dipinta in nero, beige e bianco, 98x130 cm",
    "categoria": "Decorazioni",
    "prezzo": 149,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tela-astratta-dipinta-in-nero-beige-e-bianco-98x130-cm-1000-3-5-247727_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tela-astratta-dipinta-in-nero-beige-e-bianco-98x130-cm-247727.htm",
    "larghezza_cm": 97.5,
    "profondita_cm": 4.5,
    "descrizione": "Tela astratta dipinta in nero, beige e bianco, 98x130 cm"
  },
  {
    "nome": "Contenitore in vetro con coperchio beige larg. 21 cm",
    "categoria": "Cucina",
    "prezzo": 9.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/contenitore-in-vetro-con-coperchio-beige-larg-21-cm-1000-2-38-249851_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/contenitore-in-vetro-con-coperchio-beige-larg-21-cm-249851.htm",
    "larghezza_cm": 16,
    "profondita_cm": 21,
    "descrizione": "Contenitore in vetro con coperchio beige larg. 21 cm"
  },
  {
    "nome": "Buddy - Divano ad angolo destro 4/5 posti beige chiné",
    "categoria": "Divani",
    "prezzo": 2199,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/250023/divano-ad-angolo-destro-4-5-posti-beige-chine.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-ad-angolo-destro-4-5-posti-beige-chine-buddy-250023.htm",
    "larghezza_cm": 277,
    "profondita_cm": 237,
    "descrizione": "Divano ad angolo destro 4/5 posti beige chiné"
  },
  {
    "nome": "Mendoza Business - Set di 2 sedie per ristorante in tessuto tramato beige con schienale in legno di rovere",
    "categoria": "Sedie",
    "prezzo": 199.2,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/set-di-2-sedie-per-ristorante-in-tessuto-tramato-beige-con-schienale-in-legno-di-rovere-1000-0-16-246959_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/set-di-2-sedie-per-ristorante-in-tessuto-tramato-beige-con-schienale-in-legno-di-rovere-mendoza-business-246959.htm",
    "larghezza_cm": 54.5,
    "profondita_cm": 55.5,
    "descrizione": "Set di 2 sedie per ristorante in tessuto tramato beige con schienale in legno di rovere"
  },
  {
    "nome": "Anvers - Divano a 3 posti beige",
    "categoria": "Divani",
    "prezzo": 1199,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-a-3-posti-beige-1000-3-8-241539_18.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-a-3-posti-beige-anvers-241539.htm",
    "larghezza_cm": 200,
    "profondita_cm": 106,
    "descrizione": "Divano a 3 posti beige"
  },
  {
    "nome": "Set di 4 ciotole in ceramica bianca e verde",
    "categoria": "Cucina",
    "prezzo": 24.99,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/253380/set-di-4-ciotole-in-ceramica-bianca-e-verde.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/set-di-4-ciotole-in-ceramica-bianca-e-verde-253380.htm",
    "larghezza_cm": 16.5,
    "profondita_cm": 16.5,
    "descrizione": "Set di 4 ciotole in ceramica bianca e verde"
  },
  {
    "nome": "Bayma - Divano 3/4 posti in tessuto riciclato beige",
    "categoria": "Divani",
    "prezzo": 1399,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-3-4-posti-in-tessuto-riciclato-beige-1000-1-25-246722_2.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-3-4-posti-in-tessuto-riciclato-beige-bayma-246722.htm",
    "larghezza_cm": 226,
    "profondita_cm": 124,
    "descrizione": "Divano 3/4 posti in tessuto riciclato beige"
  },
  {
    "nome": "Farmers - Tavolo da pranzo in mango 6/8 persone 180 cm",
    "categoria": "Tavoli da pranzo",
    "prezzo": 589,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tavolo-da-pranzo-in-mango-6-8-persone-180-cm-1000-1-22-241758_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tavolo-da-pranzo-in-mango-6-8-persone-180-cm-farmers-241758.htm",
    "larghezza_cm": 180,
    "profondita_cm": 90,
    "descrizione": "Tavolo da pranzo in mango 6/8 persone 180 cm"
  },
  {
    "nome": "Charlotte Business - Set di 2 sedie beige per ristorante",
    "categoria": "Sedie",
    "prezzo": 179,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/set-di-2-sedie-beige-per-ristorante-1000-15-5-246005_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/set-di-2-sedie-beige-per-ristorante-charlotte-business-246005.htm",
    "larghezza_cm": 49,
    "profondita_cm": 51.5,
    "descrizione": "Set di 2 sedie beige per ristorante"
  },
  {
    "nome": "Divano da giardino a 2 posti in tessuto beige",
    "categoria": "Divani",
    "prezzo": 629.3,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/251407/divano-da-giardino-a-2-posti-in-tessuto-beige.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-da-giardino-a-2-posti-in-tessuto-beige-251407.htm",
    "larghezza_cm": 151,
    "profondita_cm": 97,
    "descrizione": "Divano da giardino a 2 posti in tessuto beige"
  },
  {
    "nome": "Seashore - Comò a 3 cassetti bianco 100 cm",
    "categoria": "Cassettiere",
    "prezzo": 249,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/como-a-3-cassetti-bianco-100-cm-1000-1-30-247793_2.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/como-a-3-cassetti-bianco-100-cm-seashore-247793.htm",
    "larghezza_cm": 100,
    "profondita_cm": 50,
    "descrizione": "Comò a 3 cassetti bianco 100 cm"
  },
  {
    "nome": "Harmony - Letto in lino beige 160x200 cm",
    "categoria": "Letti",
    "prezzo": 859,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/letto-in-lino-beige-160x200-cm-1000-7-0-166624_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/letto-in-lino-beige-160x200-cm-harmony-166624.htm",
    "larghezza_cm": 167,
    "profondita_cm": 211,
    "descrizione": "Letto in lino beige 160x200 cm"
  },
  {
    "nome": "Quadro astratto su tela in rilievo bianco e nero 103x153 cm",
    "categoria": "Decorazioni",
    "prezzo": 159,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/251173/quadro-astratto-su-tela-in-rilievo-bianco-e-nero-103x153-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/quadro-astratto-su-tela-in-rilievo-bianco-e-nero-103x153-cm-251173.htm",
    "larghezza_cm": 102.5,
    "profondita_cm": 3.5,
    "descrizione": "Quadro astratto su tela in rilievo bianco e nero 103x153 cm"
  },
  {
    "nome": "Lampada a sospensione verde kaki",
    "categoria": "Lampade",
    "prezzo": 49.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/lampada-a-sospensione-verde-kaki-1000-5-3-246454_2.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/lampada-a-sospensione-verde-kaki-246454.htm",
    "larghezza_cm": 38,
    "profondita_cm": 38,
    "descrizione": "Lampada a sospensione verde kaki"
  },
  {
    "nome": "Kerala - Testata del letto 180 cm in legno massello di mango scolpito bianco",
    "categoria": "Letti",
    "prezzo": 649,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/testata-del-letto-180-cm-in-legno-massello-di-mango-scolpito-bianco-1000-14-5-186555_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/testata-del-letto-180-cm-in-legno-massello-di-mango-scolpito-bianco-kerala-186555.htm",
    "larghezza_cm": 180,
    "profondita_cm": 5,
    "descrizione": "Testata del letto 180 cm in legno massello di mango scolpito bianco"
  },
  {
    "nome": "Tavolo da pranzo rotondo in noce impiallacciato e acciaio nero per 4/5 persone Ø 100 cm",
    "categoria": "Tavoli da pranzo",
    "prezzo": 169,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/252709_0/tavolo-da-pranzo-rotondo-in-noce-impiallacciato-e-acciaio-nero-per-4-5-persone-oe-100-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tavolo-da-pranzo-rotondo-in-noce-impiallacciato-e-acciaio-nero-per-4-5-persone-oe-100-cm-252709.htm",
    "larghezza_cm": 100,
    "profondita_cm": 100,
    "descrizione": "Tavolo da pranzo rotondo in noce impiallacciato e acciaio nero per 4/5 persone Ø 100 cm"
  },
  {
    "nome": "Namibi - Divano 3 posti in resina riciclata intrecciata con cuscini écru",
    "categoria": "Divani",
    "prezzo": 1299,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-3-posti-in-resina-riciclata-intrecciata-con-cuscini-ecru-1000-7-1-245878_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-3-posti-in-resina-riciclata-intrecciata-con-cuscini-ecru-namibi-245878.htm",
    "larghezza_cm": 228.5,
    "profondita_cm": 94,
    "descrizione": "Divano 3 posti in resina riciclata intrecciata con cuscini écru"
  },
  {
    "nome": "Eucalipto artificiale con vaso in vetro",
    "categoria": "Decorazioni",
    "prezzo": 29.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/eucalipto-artificiale-con-vaso-in-vetro-1000-10-6-203653_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/eucalipto-artificiale-con-vaso-in-vetro-203653.htm",
    "larghezza_cm": 30,
    "profondita_cm": 30,
    "descrizione": "Eucalipto artificiale con vaso in vetro"
  },
  {
    "nome": "Lotto di 6 - Set di 2 candele lunghe gialle a coste",
    "categoria": "Decorazioni",
    "prezzo": 17.94,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/251920/set-di-2-candele-lunghe-gialle-a-coste.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/set-di-2-candele-lunghe-gialle-a-coste-251920.htm",
    "larghezza_cm": 2,
    "profondita_cm": 2,
    "descrizione": "Set di 2 candele lunghe gialle a coste"
  },
  {
    "nome": "Infusiera in vetro, acciaio inox e bambù",
    "categoria": "Cucina",
    "prezzo": 9.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/infusiera-in-vetro-acciaio-inox-e-bambu-1000-11-39-234764_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/infusiera-in-vetro-acciaio-inox-e-bambu-234764.htm",
    "larghezza_cm": 13.5,
    "profondita_cm": 9,
    "descrizione": "Infusiera in vetro, acciaio inox e bambù"
  },
  {
    "nome": "Nemo - Divano angolare con penisola a sinistra in velluto a coste grigio chiaro",
    "categoria": "Divani",
    "prezzo": 1199,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-angolare-con-penisola-a-sinistra-in-velluto-a-coste-grigio-chiaro-1000-3-18-242984_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-angolare-con-penisola-a-sinistra-in-velluto-a-coste-grigio-chiaro-nemo-242984.htm",
    "larghezza_cm": 250,
    "profondita_cm": 166,
    "descrizione": "Divano angolare con penisola a sinistra in velluto a coste grigio chiaro"
  },
  {
    "nome": "Rhea - Tavolo da pranzo in vetro temprato effetto marmo 4 persone, L140",
    "categoria": "Tavoli da pranzo",
    "prezzo": 229,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/199656/tavolo-da-pranzo-in-vetro-temprato-effetto-marmo-4-persone-l140.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tavolo-da-pranzo-in-vetro-temprato-effetto-marmo-4-persone-l140-rhea-199656.htm",
    "larghezza_cm": 140,
    "profondita_cm": 90,
    "descrizione": "Tavolo da pranzo in vetro temprato effetto marmo 4 persone, L140"
  },
  {
    "nome": "Oscarine Business - Set di 2 sedie per ristorante in tessuto tramato beige con piedini in acciaio beige",
    "categoria": "Sedie",
    "prezzo": 199,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/set-di-2-sedie-per-ristorante-in-tessuto-tramato-beige-con-piedini-in-acciaio-beige-1000-11-1-246001_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/set-di-2-sedie-per-ristorante-in-tessuto-tramato-beige-con-piedini-in-acciaio-beige-oscarine-business-246001.htm",
    "larghezza_cm": 46,
    "profondita_cm": 53.5,
    "descrizione": "Set di 2 sedie per ristorante in tessuto tramato beige con piedini in acciaio beige"
  },
  {
    "nome": "Carilo - Divano da giardino 2 posti blu-verde",
    "categoria": "Divani",
    "prezzo": 479,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-da-giardino-2-posti-blu-verde-1000-8-14-229491_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-da-giardino-2-posti-blu-verde-carilo-229491.htm",
    "larghezza_cm": 150,
    "profondita_cm": 78,
    "descrizione": "Divano da giardino 2 posti blu-verde"
  },
  {
    "nome": "Alegro - Letto in legno 160x200 cm con rete a doghe",
    "categoria": "Letti",
    "prezzo": 499,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/letto-in-legno-160x200-cm-con-rete-a-doghe-1000-5-37-248579_2.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/letto-in-legno-160x200-cm-con-rete-a-doghe-alegro-248579.htm",
    "larghezza_cm": 177,
    "profondita_cm": 217,
    "descrizione": "Letto in legno 160x200 cm con rete a doghe"
  },
  {
    "nome": "Lampada da terra in rattran intrecciato alt. 150 cm",
    "categoria": "Lampade",
    "prezzo": 199,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/lampada-da-terra-in-rattran-intrecciato-alt-150-cm-1000-0-23-243440_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/lampada-da-terra-in-rattran-intrecciato-alt-150-cm-243440.htm",
    "larghezza_cm": 50,
    "profondita_cm": 50,
    "descrizione": "Lampada da terra in rattran intrecciato alt. 150 cm"
  },
  {
    "nome": "Tenda con occhielli in velluto écru, al pezzo, 140x300",
    "categoria": "Tessile",
    "prezzo": 99.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tenda-con-occhielli-in-velluto-ecru-al-pezzo-140x300-1000-4-40-235216_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tenda-con-occhielli-in-velluto-ecru-al-pezzo-140x300-235216.htm",
    "larghezza_cm": 140,
    "profondita_cm": 0.5,
    "descrizione": "Tenda con occhielli in velluto écru, al pezzo, 140x300"
  },
  {
    "nome": "Kyoto - Divano 3 posti in tessuto tramato greige",
    "categoria": "Divani",
    "prezzo": 1199,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-3-posti-in-tessuto-tramato-greige-1000-1-9-246501_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-3-posti-in-tessuto-tramato-greige-kyoto-246501.htm",
    "larghezza_cm": 208,
    "profondita_cm": 104,
    "descrizione": "Divano 3 posti in tessuto tramato greige"
  },
  {
    "nome": "Gladys Business - Poltrona da esterno professionale in resina intrecciata riciclata beige",
    "categoria": "Divani",
    "prezzo": 279.3,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltrona-da-esterno-professionale-in-resina-intrecciata-riciclata-beige-1000-3-14-245891_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-da-esterno-professionale-in-resina-intrecciata-riciclata-beige-gladys-business-245891.htm",
    "larghezza_cm": 78,
    "profondita_cm": 84,
    "descrizione": "Poltrona da esterno professionale in resina intrecciata riciclata beige"
  },
  {
    "nome": "Oscarine Business - Set di 2 sedie per ristorante in tessuto tramato grigio con gambe in acciaio nero",
    "categoria": "Sedie",
    "prezzo": 199,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/set-di-2-sedie-per-ristorante-in-tessuto-tramato-grigio-con-gambe-in-acciaio-nero-1000-12-2-246002_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/set-di-2-sedie-per-ristorante-in-tessuto-tramato-grigio-con-gambe-in-acciaio-nero-oscarine-business-246002.htm",
    "larghezza_cm": 46,
    "profondita_cm": 53.5,
    "descrizione": "Set di 2 sedie per ristorante in tessuto tramato grigio con gambe in acciaio nero"
  },
  {
    "nome": "Cambronne - Cassettone a 3 cassetti nero, 100 cm",
    "categoria": "Cassettiere",
    "prezzo": 419,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/cassettone-a-3-cassetti-nero-100-cm-1000-4-35-187446_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/cassettone-a-3-cassetti-nero-100-cm-cambronne-187446.htm",
    "larghezza_cm": 100,
    "profondita_cm": 40,
    "descrizione": "Cassettone a 3 cassetti nero, 100 cm"
  },
  {
    "nome": "Louvain - Divano a 3/4 posti in tessuto bianco effetto lino",
    "categoria": "Divani",
    "prezzo": 719.2,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-a-3-4-posti-in-tessuto-bianco-effetto-lino-1000-16-4-242232_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-a-3-4-posti-in-tessuto-bianco-effetto-lino-louvain-242232.htm",
    "larghezza_cm": 203,
    "profondita_cm": 98,
    "descrizione": "Divano a 3/4 posti in tessuto bianco effetto lino"
  },
  {
    "nome": "Decorazione da parete con specchio in acciaio dorato Ø 35 cm",
    "categoria": "Decorazioni",
    "prezzo": 17.45,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/251663/decorazione-da-parete-con-specchio-in-acciaio-dorato-oe-35-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/decorazione-da-parete-con-specchio-in-acciaio-dorato-oe-35-cm-251663.htm",
    "larghezza_cm": 35,
    "profondita_cm": 0.5,
    "descrizione": "Decorazione da parete con specchio in acciaio dorato Ø 35 cm"
  },
  {
    "nome": "Mikado - Divano imbottito in cuoio marrone 3 posti",
    "categoria": "Divani",
    "prezzo": 1699,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/241943/divano-imbottito-in-cuoio-marrone-3-posti.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-imbottito-in-cuoio-marrone-3-posti-mikado-241943.htm",
    "larghezza_cm": 215,
    "profondita_cm": 89,
    "descrizione": "Divano imbottito in cuoio marrone 3 posti"
  },
  {
    "nome": "Poros - Armadio bicolore a 2 ante",
    "categoria": "Armadi",
    "prezzo": 599,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/armadio-bicolore-a-2-ante-1000-4-29-246521_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/armadio-bicolore-a-2-ante-poros-246521.htm",
    "larghezza_cm": 90,
    "profondita_cm": 42.5,
    "descrizione": "Armadio bicolore a 2 ante"
  },
  {
    "nome": "Parure da letto in lino lavato bianca, 240x260",
    "categoria": "Letti",
    "prezzo": 179,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/parure-da-letto-in-lino-lavato-bianca-240x260-1000-16-33-235619_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/parure-da-letto-in-lino-lavato-bianca-240x260-235619.htm",
    "larghezza_cm": 260,
    "profondita_cm": 0.5,
    "descrizione": "Parure da letto in lino lavato bianca, 240x260"
  },
  {
    "nome": "Modjo - Divano angolare con penisola a sinistra 3/4 posti effetto velluto verde kaki",
    "categoria": "Divani",
    "prezzo": 1499,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-angolare-con-penisola-a-sinistra-3-4-posti-effetto-velluto-verde-kaki-1000-7-9-249822_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-angolare-con-penisola-a-sinistra-3-4-posti-effetto-velluto-verde-kaki-modjo-249822.htm",
    "larghezza_cm": 258,
    "profondita_cm": 146,
    "descrizione": "Divano angolare con penisola a sinistra 3/4 posti effetto velluto verde kaki"
  },
  {
    "nome": "Dittico stampato raffigurante un paesaggio tropicale, 160x100 cm",
    "categoria": "Decorazioni",
    "prezzo": 139,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/dittico-stampato-raffigurante-un-paesaggio-tropicale-160x100-cm-1000-1-0-202335_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/dittico-stampato-raffigurante-un-paesaggio-tropicale-160x100-cm-202335.htm",
    "larghezza_cm": 160,
    "profondita_cm": 3,
    "descrizione": "Dittico stampato raffigurante un paesaggio tropicale, 160x100 cm"
  },
  {
    "nome": "Lampada a sospensione conica in rattan",
    "categoria": "Lampade",
    "prezzo": 104.3,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/251286/lampada-a-sospensione-conica-in-rattan.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/lampada-a-sospensione-conica-in-rattan-251286.htm",
    "larghezza_cm": 90,
    "profondita_cm": 90,
    "descrizione": "Lampada a sospensione conica in rattan"
  },
  {
    "nome": "Divano a 2 posti in tessuto plissettato effetto velluto color caffellatte",
    "categoria": "Divani",
    "prezzo": 999,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/254218_0/divano-a-2-posti-in-tessuto-plissettato-effetto-velluto-color-caffellatte.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-a-2-posti-in-tessuto-plissettato-effetto-velluto-color-caffellatte-254218.htm",
    "larghezza_cm": 190,
    "profondita_cm": 107,
    "descrizione": "Divano a 2 posti in tessuto plissettato effetto velluto color caffellatte"
  },
  {
    "nome": "Phea - Tavolo da pranzo in vetro effetto marmo bianco, ottone e acciaio nero, 5/6 persone, D120",
    "categoria": "Tavoli da pranzo",
    "prezzo": 259,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tavolo-da-pranzo-in-vetro-effetto-marmo-bianco-ottone-e-acciaio-nero-5-6-persone-d120-1000-6-4-219969_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tavolo-da-pranzo-in-vetro-effetto-marmo-bianco-ottone-e-acciaio-nero-5-6-persone-d120-phea-219969.htm",
    "larghezza_cm": 120,
    "profondita_cm": 120,
    "descrizione": "Tavolo da pranzo in vetro effetto marmo bianco, ottone e acciaio nero, 5/6 persone, D120"
  },
  {
    "nome": "Stockholm - Letto in legno massello di sheesham 140x190 cm",
    "categoria": "Letti",
    "prezzo": 599,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/letto-in-legno-massello-di-sheesham-140x190-cm-1000-16-14-130066_6.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/letto-in-legno-massello-di-sheesham-140x190-cm-stockholm-130066.htm",
    "larghezza_cm": 146,
    "profondita_cm": 198,
    "descrizione": "Letto in legno massello di sheesham 140x190 cm"
  },
  {
    "nome": "Ramo di ulivo artificiale verde",
    "categoria": "Altri mobili",
    "prezzo": 8.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/ramo-di-ulivo-artificiale-verde-1000-8-19-248684_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/ramo-di-ulivo-artificiale-verde-248684.htm",
    "larghezza_cm": 30,
    "profondita_cm": 30,
    "descrizione": "Ramo di ulivo artificiale verde"
  },
  {
    "nome": "Divano a 3 posti con rivestimento sfoderabile in tessuto tramato beige",
    "categoria": "Divani",
    "prezzo": 999,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/252830/divano-a-3-posti-con-rivestimento-sfoderabile-in-tessuto-tramato-beige.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-a-3-posti-con-rivestimento-sfoderabile-in-tessuto-tramato-beige-252830.htm",
    "larghezza_cm": 180,
    "profondita_cm": 95,
    "descrizione": "Divano a 3 posti con rivestimento sfoderabile in tessuto tramato beige"
  },
  {
    "nome": "Neus - Poltrona da tavolo marrone chiné e acciaio nero",
    "categoria": "Poltrone",
    "prezzo": 159,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltrona-da-tavolo-marrone-chine-e-acciaio-nero-1000-13-12-249743_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-da-tavolo-marrone-chine-e-acciaio-nero-neus-249743.htm",
    "larghezza_cm": 60.5,
    "profondita_cm": 60,
    "descrizione": "Poltrona da tavolo marrone chiné e acciaio nero"
  },
  {
    "nome": "Provence - Tavolo da pranzo rotondo allungabile 5/6 persone 120 cm",
    "categoria": "Tavoli da pranzo",
    "prezzo": 489.3,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tavolo-da-pranzo-rotondo-allungabile-5-6-persone-120-cm-1000-0-3-242641_2.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tavolo-da-pranzo-rotondo-allungabile-5-6-persone-120-cm-provence-242641.htm",
    "larghezza_cm": 120,
    "profondita_cm": 120,
    "descrizione": "Tavolo da pranzo rotondo allungabile 5/6 persone 120 cm"
  },
  {
    "nome": "Axelle - Testata del letto vintage 170 cm",
    "categoria": "Letti",
    "prezzo": 249,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/testata-del-letto-vintage-170-cm-1000-7-30-209294_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/testata-del-letto-vintage-170-cm-axelle-209294.htm",
    "larghezza_cm": 170,
    "profondita_cm": 3,
    "descrizione": "Testata del letto vintage 170 cm"
  },
  {
    "nome": "Lommel - Paesaggio urbano astratto in bianco e nero a rilievo, 110x110 cm",
    "categoria": "Decorazioni",
    "prezzo": 169,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/paesaggio-urbano-astratto-in-bianco-e-nero-a-rilievo-110x110-cm-1000-2-14-249868_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/paesaggio-urbano-astratto-in-bianco-e-nero-a-rilievo-110x110-cm-lommel-249868.htm",
    "larghezza_cm": 110,
    "profondita_cm": 4.5,
    "descrizione": "Paesaggio urbano astratto in bianco e nero a rilievo, 110x110 cm"
  },
  {
    "nome": "Decorazione da parete composta da cerchi in acciaio placcato oro, 90x48 cm",
    "categoria": "Decorazioni",
    "prezzo": 54.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/decorazione-da-parete-composta-da-cerchi-in-acciaio-placcato-oro-90x48-cm-1000-10-12-240764_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/decorazione-da-parete-composta-da-cerchi-in-acciaio-placcato-oro-90x48-cm-240764.htm",
    "larghezza_cm": 90,
    "profondita_cm": 6,
    "descrizione": "Decorazione da parete composta da cerchi in acciaio placcato oro, 90x48 cm"
  },
  {
    "nome": "Candela cilindrica bianca alt. 20 cm",
    "categoria": "Decorazioni",
    "prezzo": 24.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/candela-cilindrica-bianca-alt-20-cm-1000-16-25-241433_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/candela-cilindrica-bianca-alt-20-cm-241433.htm",
    "larghezza_cm": 15,
    "profondita_cm": 15,
    "descrizione": "Candela cilindrica bianca alt. 20 cm"
  },
  {
    "nome": "Tyler - Divano 3/4 posti in effetto velluto riciclato beige",
    "categoria": "Divani",
    "prezzo": 1199,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-3-4-posti-in-effetto-velluto-riciclato-beige-1000-12-15-249623_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-3-4-posti-in-effetto-velluto-riciclato-beige-tyler-249623.htm",
    "larghezza_cm": 230,
    "profondita_cm": 94,
    "descrizione": "Divano 3/4 posti in effetto velluto riciclato beige"
  },
  {
    "nome": "Gatsby - Madia 3 ante in legno massello di mango e acciaio effetto dorato 175 cm",
    "categoria": "Credenze",
    "prezzo": 999,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/165788_0/madia-3-ante-in-legno-massello-di-mango-e-acciaio-effetto-dorato-175-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/madia-3-ante-in-legno-massello-di-mango-e-acciaio-effetto-dorato-175-cm-gatsby-165788.htm",
    "larghezza_cm": 174.5,
    "profondita_cm": 46,
    "descrizione": "Madia 3 ante in legno massello di mango e acciaio effetto dorato 175 cm"
  },
  {
    "nome": "Ghada - Letto in legno massello di mango intagliato 160x200 cm",
    "categoria": "Letti",
    "prezzo": 839,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/letto-in-legno-massello-di-mango-intagliato-160x200-cm-1000-14-5-209556_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/letto-in-legno-massello-di-mango-intagliato-160x200-cm-ghada-209556.htm",
    "larghezza_cm": 167,
    "profondita_cm": 217,
    "descrizione": "Letto in legno massello di mango intagliato 160x200 cm"
  },
  {
    "nome": "Happy Camper - Cassetto contenitore per letto estraibile 90x190cm verde",
    "categoria": "Letti",
    "prezzo": 97.3,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/cassetto-contenitore-per-letto-estraibile-90x190cm-verde-1000-14-1-238949_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/cassetto-contenitore-per-letto-estraibile-90x190cm-verde-happy-camper-238949.htm",
    "larghezza_cm": 177.5,
    "profondita_cm": 88.5,
    "descrizione": "Cassetto contenitore per letto estraibile 90x190cm verde"
  },
  {
    "nome": "Divano nuvola a 2 posti in tessuto bouclé azzurro",
    "categoria": "Divani",
    "prezzo": 999,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/253097/divano-nuvola-a-2-posti-in-tessuto-boucle-azzurro.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-nuvola-a-2-posti-in-tessuto-boucle-azzurro-253097.htm",
    "larghezza_cm": 206,
    "profondita_cm": 102,
    "descrizione": "Divano nuvola a 2 posti in tessuto bouclé azzurro"
  },
  {
    "nome": "Lampada da scrivania articolata in acciaio spazzolato verde",
    "categoria": "Lampade",
    "prezzo": 69.95,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/251830/lampada-da-scrivania-articolata-in-acciaio-spazzolato-verde.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/lampada-da-scrivania-articolata-in-acciaio-spazzolato-verde-251830.htm",
    "larghezza_cm": 53,
    "profondita_cm": 23,
    "descrizione": "Lampada da scrivania articolata in acciaio spazzolato verde"
  },
  {
    "nome": "Candela profumata in vetro rosa 7x7",
    "categoria": "Decorazioni",
    "prezzo": 5.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/candela-profumata-in-vetro-rosa-7x7-1000-0-7-220218_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/candela-profumata-in-vetro-rosa-7x7-220218.htm",
    "larghezza_cm": 7,
    "profondita_cm": 7,
    "descrizione": "Candela profumata in vetro rosa 7x7"
  },
  {
    "nome": "Nemo - Divano angolare con penisola a sinistra 4/5 posti in tessuto tramato grigio chiaro chiné",
    "categoria": "Divani",
    "prezzo": 1199,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-angolare-con-penisola-a-sinistra-4-5-posti-in-tessuto-tramato-grigio-chiaro-chine-1000-8-11-248225_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-angolare-con-penisola-a-sinistra-4-5-posti-in-tessuto-tramato-grigio-chiaro-chine-nemo-248225.htm",
    "larghezza_cm": 250,
    "profondita_cm": 160,
    "descrizione": "Divano angolare con penisola a sinistra 4/5 posti in tessuto tramato grigio chiaro chiné"
  },
  {
    "nome": "Neus - Poltrona da tavolo grigio chiné e acciaio nero",
    "categoria": "Poltrone",
    "prezzo": 127.2,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltrona-da-tavolo-grigio-chine-e-acciaio-nero-1000-10-9-249740_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-da-tavolo-grigio-chine-e-acciaio-nero-neus-249740.htm",
    "larghezza_cm": 60.5,
    "profondita_cm": 60,
    "descrizione": "Poltrona da tavolo grigio chiné e acciaio nero"
  },
  {
    "nome": "Cezanne - Tavolo da pranzo in legno di mango riciclato 10 persone, L.220",
    "categoria": "Tavoli da pranzo",
    "prezzo": 679,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tavolo-da-pranzo-in-legno-di-mango-riciclato-10-persone-l-220-1000-7-16-199604_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tavolo-da-pranzo-in-legno-di-mango-riciclato-10-persone-l-220-cezanne-199604.htm",
    "larghezza_cm": 220,
    "profondita_cm": 90,
    "descrizione": "Tavolo da pranzo in legno di mango riciclato 10 persone, L.220"
  },
  {
    "nome": "Morphee - Fodera per testiera del letto 160 in lino lavato bianco - Morphée",
    "categoria": "Letti",
    "prezzo": 85.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/fodera-per-testiera-del-letto-160-in-lino-lavato-bianco-morphee-1000-12-18-147249_0.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/fodera-per-testiera-del-letto-160-in-lino-lavato-bianco-morphee-morphee-147249.htm",
    "larghezza_cm": 177,
    "profondita_cm": 8,
    "descrizione": "Fodera per testiera del letto 160 in lino lavato bianco - Morphée"
  },
  {
    "nome": "Lilo - Divano nuvola 3/4 posti in bouclé arancione",
    "categoria": "Divani",
    "prezzo": 1199,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-nuvola-3-4-posti-in-boucle-arancione-1000-8-34-248412_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-nuvola-3-4-posti-in-boucle-arancione-lilo-248412.htm",
    "larghezza_cm": 240,
    "profondita_cm": 102,
    "descrizione": "Divano nuvola 3/4 posti in bouclé arancione"
  },
  {
    "nome": "Barattolo piccolo in vetro con coperchio in legno di acacia",
    "categoria": "Cucina",
    "prezzo": 7.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/barattolo-piccolo-in-vetro-con-coperchio-in-legno-di-acacia-1000-10-24-239013_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/barattolo-piccolo-in-vetro-con-coperchio-in-legno-di-acacia-239013.htm",
    "larghezza_cm": 10,
    "profondita_cm": 10,
    "descrizione": "Barattolo piccolo in vetro con coperchio in legno di acacia"
  },
  {
    "nome": "Phoenix - Divano a 3 posti in velluto verde",
    "categoria": "Divani",
    "prezzo": 1499,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-a-3-posti-in-velluto-verde-1000-5-15-234248_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-a-3-posti-in-velluto-verde-phoenix-234248.htm",
    "larghezza_cm": 240,
    "profondita_cm": 95,
    "descrizione": "Divano a 3 posti in velluto verde"
  },
  {
    "nome": "Nisyros - Poltrona da giardino in fibra di poliolefina grigio perlato e corda bianca",
    "categoria": "Poltrone",
    "prezzo": 489.3,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltrona-da-giardino-in-fibra-di-poliolefina-grigio-perlato-e-corda-bianca-1000-4-7-246130_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-da-giardino-in-fibra-di-poliolefina-grigio-perlato-e-corda-bianca-nisyros-246130.htm",
    "larghezza_cm": 85,
    "profondita_cm": 85,
    "descrizione": "Poltrona da giardino in fibra di poliolefina grigio perlato e corda bianca"
  },
  {
    "nome": "Factory - Tavolo da pranzo allungabile 8 a 12 persone in mango e metallo nero 200/280 cm",
    "categoria": "Tavoli da pranzo",
    "prezzo": 599.5,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tavolo-da-pranzo-allungabile-8-a-12-persone-in-mango-e-metallo-nero-200-280-cm-1000-9-13-165776_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tavolo-da-pranzo-allungabile-8-a-12-persone-in-mango-e-metallo-nero-200-280-cm-factory-165776.htm",
    "larghezza_cm": 200,
    "profondita_cm": 90,
    "descrizione": "Tavolo da pranzo allungabile 8 a 12 persone in mango e metallo nero 200/280 cm"
  },
  {
    "nome": "Sockette - Poltroncina da pranzo écru e paglia di Vienna",
    "categoria": "Sedie",
    "prezzo": 159,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltroncina-da-pranzo-ecru-e-paglia-di-vienna-1000-14-4-229973_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltroncina-da-pranzo-ecru-e-paglia-di-vienna-sockette-229973.htm",
    "larghezza_cm": 55,
    "profondita_cm": 59,
    "descrizione": "Poltroncina da pranzo écru e paglia di Vienna"
  },
  {
    "nome": "Tarifa - Madia a 3 cassetti e 2 ante in rattan lung. 154 cm",
    "categoria": "Credenze",
    "prezzo": 529,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/madia-a-3-cassetti-e-2-ante-in-rattan-lung-154-cm-1000-10-14-234780_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/madia-a-3-cassetti-e-2-ante-in-rattan-lung-154-cm-tarifa-234780.htm",
    "larghezza_cm": 154,
    "profondita_cm": 45,
    "descrizione": "Madia a 3 cassetti e 2 ante in rattan lung. 154 cm"
  },
  {
    "nome": "Candela LED bianca 10x20 cm",
    "categoria": "Decorazioni",
    "prezzo": 12.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/candela-led-bianca-10x20-cm-1000-14-36-247143_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/candela-led-bianca-10x20-cm-247143.htm",
    "larghezza_cm": 10,
    "profondita_cm": 10,
    "descrizione": "Candela LED bianca 10x20 cm"
  },
  {
    "nome": "Bricco da latte in porcellana bianca e dorata",
    "categoria": "Cucina",
    "prezzo": 7.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/bricco-da-latte-in-porcellana-bianca-e-dorata-1000-10-15-217151_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/bricco-da-latte-in-porcellana-bianca-e-dorata-217151.htm",
    "larghezza_cm": 13.5,
    "profondita_cm": 13.5,
    "descrizione": "Bricco da latte in porcellana bianca e dorata"
  },
  {
    "nome": "Ozanne - Poltrona da giardino in acciaio bianco e tela riciclata color mattone",
    "categoria": "Poltrone",
    "prezzo": 259,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltrona-da-giardino-in-acciaio-bianco-e-tela-riciclata-color-mattone-1000-11-29-245865_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-da-giardino-in-acciaio-bianco-e-tela-riciclata-color-mattone-ozanne-245865.htm",
    "larghezza_cm": 110.5,
    "profondita_cm": 70.5,
    "descrizione": "Poltrona da giardino in acciaio bianco e tela riciclata color mattone"
  },
  {
    "nome": "Rosalie - Poltroncina da pranzo in paglia di Vienna e velluto arancione",
    "categoria": "Sedie",
    "prezzo": 179,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/249832_0/poltroncina-da-pranzo-in-paglia-di-vienna-e-velluto-arancione.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltroncina-da-pranzo-in-paglia-di-vienna-e-velluto-arancione-rosalie-249832.htm",
    "larghezza_cm": 56.5,
    "profondita_cm": 57,
    "descrizione": "Poltroncina da pranzo in paglia di Vienna e velluto arancione"
  },
  {
    "nome": "Lilo - Divano a 3/4 posti in velluto effetto invecchiato verde kaki",
    "categoria": "Divani",
    "prezzo": 1199,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/238613_0/divano-a-3-4-posti-in-velluto-effetto-invecchiato-verde-kaki.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-a-3-4-posti-in-velluto-effetto-invecchiato-verde-kaki-lilo-238613.htm",
    "larghezza_cm": 240,
    "profondita_cm": 102,
    "descrizione": "Divano a 3/4 posti in velluto effetto invecchiato verde kaki"
  },
  {
    "nome": "Seal - Divano XL 6/7 posti in bouclé verde kaki",
    "categoria": "Divani",
    "prezzo": 1499,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-xl-6-7-posti-in-boucle-verde-kaki-1000-4-31-246113_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-xl-6-7-posti-in-boucle-verde-kaki-seal-246113.htm",
    "larghezza_cm": 341,
    "profondita_cm": 138,
    "descrizione": "Divano XL 6/7 posti in bouclé verde kaki"
  },
  {
    "nome": "Lampada da terra intrecciata beige e marrone con paralume in cotone e lino color crema alt. 143 cm",
    "categoria": "Lampade",
    "prezzo": 209.3,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/252970/lampada-da-terra-intrecciata-beige-e-marrone-con-paralume-in-cotone-e-lino-color-crema-alt-143-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/lampada-da-terra-intrecciata-beige-e-marrone-con-paralume-in-cotone-e-lino-color-crema-alt-143-cm-252970.htm",
    "larghezza_cm": 70,
    "profondita_cm": 70,
    "descrizione": "Lampada da terra intrecciata beige e marrone con paralume in cotone e lino color crema alt. 143 cm"
  },
  {
    "nome": "Candela profumata verde alt. 15 cm 490g",
    "categoria": "Decorazioni",
    "prezzo": 6.25,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/candela-profumata-verde-alt-15-cm-490g-1000-11-39-246613_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/candela-profumata-verde-alt-15-cm-490g-246613.htm",
    "larghezza_cm": 7,
    "profondita_cm": 7,
    "descrizione": "Candela profumata verde alt. 15 cm 490g"
  },
  {
    "nome": "Cobie - Poltrona da giardino in acciaio nero e resina intrecciata rosa e beige",
    "categoria": "Poltrone",
    "prezzo": 99.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltrona-da-giardino-in-acciaio-nero-e-resina-intrecciata-rosa-e-beige-1000-7-30-246235_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-da-giardino-in-acciaio-nero-e-resina-intrecciata-rosa-e-beige-cobie-246235.htm",
    "larghezza_cm": 74,
    "profondita_cm": 65,
    "descrizione": "Poltrona da giardino in acciaio nero e resina intrecciata rosa e beige"
  },
  {
    "nome": "Dely - Tavolo da pranzo in legno massello di pioppo e metallo verde-blu per 6 persone lung. 150 cm",
    "categoria": "Tavoli da pranzo",
    "prezzo": 100,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tavolo-da-pranzo-in-legno-massello-di-pioppo-e-metallo-verde-blu-per-6-persone-lung-150-cm-1000-1-25-234176_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tavolo-da-pranzo-in-legno-massello-di-pioppo-e-metallo-verde-blu-per-6-persone-lung-150-cm-dely-234176.htm",
    "larghezza_cm": 150,
    "profondita_cm": 85,
    "descrizione": "Tavolo da pranzo in legno massello di pioppo e metallo verde-blu per 6 persone lung. 150 cm"
  },
  {
    "nome": "Lilo - Divano nuvola 2 posti in velluto color bronzo",
    "categoria": "Divani",
    "prezzo": 999,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/247910_0/divano-nuvola-2-posti-in-velluto-color-bronzo.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-nuvola-2-posti-in-velluto-color-bronzo-lilo-247910.htm",
    "larghezza_cm": 206,
    "profondita_cm": 102,
    "descrizione": "Divano nuvola 2 posti in velluto color bronzo"
  },
  {
    "nome": "Léontine - Credenza a 2 ante e 2 cassetti color crema 90 cm",
    "categoria": "Cassettiere",
    "prezzo": 299,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/credenza-a-2-ante-e-2-cassetti-color-crema-90-cm-1000-10-33-129839_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/credenza-a-2-ante-e-2-cassetti-color-crema-90-cm-leontine-129839.htm",
    "larghezza_cm": 90,
    "profondita_cm": 40,
    "descrizione": "Credenza a 2 ante e 2 cassetti color crema 90 cm"
  },
  {
    "nome": "Pump Middle - Materasso a molle insacchettate 160x200 cm",
    "categoria": "Letti",
    "prezzo": 449,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/materasso-a-molle-insacchettate-160x200-cm-1000-7-6-242767_8.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/materasso-a-molle-insacchettate-160x200-cm-pump-middle-242767.htm",
    "larghezza_cm": 160,
    "profondita_cm": 200,
    "descrizione": "Materasso a molle insacchettate 160x200 cm"
  },
  {
    "nome": "Morphee - Fodera per testiera del letto 140 in lino lavato - Morphée",
    "categoria": "Letti",
    "prezzo": 85.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/fodera-per-testiera-del-letto-140-in-lino-lavato-morphee-1000-5-31-147344_0.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/fodera-per-testiera-del-letto-140-in-lino-lavato-morphee-morphee-147344.htm",
    "larghezza_cm": 154,
    "profondita_cm": 8,
    "descrizione": "Fodera per testiera del letto 140 in lino lavato - Morphée"
  },
  {
    "nome": "Lampada a fungo in vetro viola",
    "categoria": "Lampade",
    "prezzo": 24.99,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/251236/lampada-a-fungo-in-vetro-viola.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/lampada-a-fungo-in-vetro-viola-251236.htm",
    "larghezza_cm": 15,
    "profondita_cm": 15,
    "descrizione": "Lampada a fungo in vetro viola"
  },
  {
    "nome": "Asciugamano bagno in cotone biologico bianco 50x90 cm",
    "categoria": "Tessile",
    "prezzo": 11.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/asciugamano-bagno-in-cotone-biologico-bianco-50x90-cm-1000-12-14-247736_3.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/asciugamano-bagno-in-cotone-biologico-bianco-50x90-cm-247736.htm",
    "larghezza_cm": 50,
    "profondita_cm": 102,
    "descrizione": "Asciugamano bagno in cotone biologico bianco 50x90 cm"
  },
  {
    "nome": "Tary - Divano a 3 posti in tessuto spalmato cammello",
    "categoria": "Divani",
    "prezzo": 1099,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-a-3-posti-in-tessuto-spalmato-cammello-1000-4-16-230354_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-a-3-posti-in-tessuto-spalmato-cammello-tary-230354.htm",
    "larghezza_cm": 232,
    "profondita_cm": 102,
    "descrizione": "Divano a 3 posti in tessuto spalmato cammello"
  },
  {
    "nome": "Lilo - Divano angolare con penisola a sinistra 4/5 posti effetto velluto verde kaki",
    "categoria": "Divani",
    "prezzo": 1699,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/249796/divano-angolare-con-penisola-a-sinistra-4-5-posti-effetto-velluto-verde-kaki.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-angolare-con-penisola-a-sinistra-4-5-posti-effetto-velluto-verde-kaki-lilo-249796.htm",
    "larghezza_cm": 272,
    "profondita_cm": 168,
    "descrizione": "Divano angolare con penisola a sinistra 4/5 posti effetto velluto verde kaki"
  },
  {
    "nome": "Louisa - Comò con 4 cassetti nero e metallo color ottone 89 cm",
    "categoria": "Cassettiere",
    "prezzo": 349,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/como-con-4-cassetti-nero-e-metallo-color-ottone-89-cm-1000-1-21-219658_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/como-con-4-cassetti-nero-e-metallo-color-ottone-89-cm-louisa-219658.htm",
    "larghezza_cm": 89,
    "profondita_cm": 38,
    "descrizione": "Comò con 4 cassetti nero e metallo color ottone 89 cm"
  },
  {
    "nome": "Pump Middle - Materasso a molle insacchettate 140x190 cm",
    "categoria": "Letti",
    "prezzo": 399,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/materasso-a-molle-insacchettate-140x190-cm-1000-6-5-242766_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/materasso-a-molle-insacchettate-140x190-cm-pump-middle-242766.htm",
    "larghezza_cm": 140,
    "profondita_cm": 190,
    "descrizione": "Materasso a molle insacchettate 140x190 cm"
  },
  {
    "nome": "Philadelphie - Divano angolare con penisola a sinistra in tessuto grigio chiné 3/4 posti",
    "categoria": "Divani",
    "prezzo": 399,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-angolare-con-penisola-a-sinistra-in-tessuto-grigio-chine-3-4-posti-1000-13-12-156345_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-angolare-con-penisola-a-sinistra-in-tessuto-grigio-chine-3-4-posti-philadelphie-156345.htm",
    "larghezza_cm": 210,
    "profondita_cm": 145,
    "descrizione": "Divano angolare con penisola a sinistra in tessuto grigio chiné 3/4 posti"
  },
  {
    "nome": "Lotto di 6 - Bicchiere in vetro multicolore 0,25L",
    "categoria": "Cucina",
    "prezzo": 15.54,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/bicchiere-in-vetro-multicolore-0-25l-1000-0-28-245208_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/bicchiere-in-vetro-multicolore-0-25l-245208.htm",
    "larghezza_cm": 8.6,
    "profondita_cm": 8.6,
    "descrizione": "Bicchiere in vetro multicolore 0,25L"
  },
  {
    "nome": "Timber Business - Divano professionale in poliestere riciclato 3/4 posti beige",
    "categoria": "Divani",
    "prezzo": 1299,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-professionale-in-poliestere-riciclato-3-4-posti-beige-1000-10-12-230309_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-professionale-in-poliestere-riciclato-3-4-posti-beige-timber-business-230309.htm",
    "larghezza_cm": 225,
    "profondita_cm": 102,
    "descrizione": "Divano professionale in poliestere riciclato 3/4 posti beige"
  },
  {
    "nome": "Kyss - Poltrona da pranzo in tessuto riciclato grigio screziato",
    "categoria": "Poltrone",
    "prezzo": 189,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltrona-da-pranzo-in-tessuto-riciclato-grigio-screziato-1000-6-37-245996_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-da-pranzo-in-tessuto-riciclato-grigio-screziato-kyss-245996.htm",
    "larghezza_cm": 63,
    "profondita_cm": 62,
    "descrizione": "Poltrona da pranzo in tessuto riciclato grigio screziato"
  },
  {
    "nome": "Numbat - Tavolo da pranzo rettangolare in legno 180x90 cm",
    "categoria": "Tavoli da pranzo",
    "prezzo": 419.3,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tavolo-da-pranzo-rettangolare-in-legno-180x90-cm-1000-1-0-238579_2.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tavolo-da-pranzo-rettangolare-in-legno-180x90-cm-numbat-238579.htm",
    "larghezza_cm": 180,
    "profondita_cm": 90,
    "descrizione": "Tavolo da pranzo rettangolare in legno 180x90 cm"
  },
  {
    "nome": "Newport - Madia 3 ante e 3 cassetti bianca 156 cm",
    "categoria": "Credenze",
    "prezzo": 499,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/madia-3-ante-e-3-cassetti-bianca-156-cm-1000-5-40-228451_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/madia-3-ante-e-3-cassetti-bianca-156-cm-newport-228451.htm",
    "larghezza_cm": 156,
    "profondita_cm": 47,
    "descrizione": "Madia 3 ante e 3 cassetti bianca 156 cm"
  },
  {
    "nome": "Cozy - Letto contenitore in tessuto beige 140x190 cm con rete a doghe",
    "categoria": "Letti",
    "prezzo": 499,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/238608/letto-contenitore-in-tessuto-beige-140x190-cm-con-rete-a-doghe.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/letto-contenitore-in-tessuto-beige-140x190-cm-con-rete-a-doghe-cozy-238608.htm",
    "larghezza_cm": 153,
    "profondita_cm": 204,
    "descrizione": "Letto contenitore in tessuto beige 140x190 cm con rete a doghe"
  },
  {
    "nome": "Madurai - Divano componibile con penisola 6 posti in cotone",
    "categoria": "Divani",
    "prezzo": 899,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/133764_0/divano-componibile-con-penisola-6-posti-in-cotone.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-componibile-con-penisola-6-posti-in-cotone-madurai-133764.htm",
    "larghezza_cm": 295,
    "profondita_cm": 195,
    "descrizione": "Divano componibile con penisola 6 posti in cotone"
  },
  {
    "nome": "Embrun - Isola centrale a 6 cassetti e 2 ante bianca",
    "categoria": "Cucina",
    "prezzo": 799,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/isola-centrale-a-6-cassetti-e-2-ante-bianca-1000-1-2-187987_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/isola-centrale-a-6-cassetti-e-2-ante-bianca-embrun-187987.htm",
    "larghezza_cm": 150,
    "profondita_cm": 80,
    "descrizione": "Isola centrale a 6 cassetti e 2 ante bianca"
  },
  {
    "nome": "Buddy - Divano 4 posti beige chiné",
    "categoria": "Divani",
    "prezzo": 1599,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/250017/divano-4-posti-beige-chine.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-4-posti-beige-chine-buddy-250017.htm",
    "larghezza_cm": 290,
    "profondita_cm": 91,
    "descrizione": "Divano 4 posti beige chiné"
  },
  {
    "nome": "Diane - Poltrona da pranzo in lino beige corda",
    "categoria": "Poltrone",
    "prezzo": 219,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltrona-da-pranzo-in-lino-beige-corda-1000-16-14-231131_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-da-pranzo-in-lino-beige-corda-diane-231131.htm",
    "larghezza_cm": 60,
    "profondita_cm": 62,
    "descrizione": "Poltrona da pranzo in lino beige corda"
  },
  {
    "nome": "Bree - Poltroncina da pranzo écru e paglia di Vienna",
    "categoria": "Sedie",
    "prezzo": 199,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltroncina-da-pranzo-ecru-e-paglia-di-vienna-1000-16-19-239172_7.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltroncina-da-pranzo-ecru-e-paglia-di-vienna-bree-239172.htm",
    "larghezza_cm": 57.5,
    "profondita_cm": 55,
    "descrizione": "Poltroncina da pranzo écru e paglia di Vienna"
  },
  {
    "nome": "Olivia - Divano trasformabile a 3/4 posti in velluto blu notte",
    "categoria": "Divani",
    "prezzo": 899,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-trasformabile-a-3-4-posti-in-velluto-blu-notte-1000-11-5-217305_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-trasformabile-a-3-4-posti-in-velluto-blu-notte-olivia-217305.htm",
    "larghezza_cm": 210,
    "profondita_cm": 90,
    "descrizione": "Divano trasformabile a 3/4 posti in velluto blu notte"
  },
  {
    "nome": "Provence - Madia a 4 ante e 2 cassetti in pino riciclato nero 190 cm",
    "categoria": "Credenze",
    "prezzo": 1499,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/madia-a-4-ante-e-2-cassetti-in-pino-riciclato-nero-190-cm-1000-13-19-196040_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/madia-a-4-ante-e-2-cassetti-in-pino-riciclato-nero-190-cm-provence-196040.htm",
    "larghezza_cm": 190,
    "profondita_cm": 45,
    "descrizione": "Madia a 4 ante e 2 cassetti in pino riciclato nero 190 cm"
  },
  {
    "nome": "Buldos - Letto contenitore in bouclé écru 140x190cm con rete a doghe",
    "categoria": "Letti",
    "prezzo": 499,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/letto-contenitore-in-boucle-ecru-140x190cm-con-rete-a-doghe-1000-0-27-239139_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/letto-contenitore-in-boucle-ecru-140x190cm-con-rete-a-doghe-buldos-239139.htm",
    "larghezza_cm": 165,
    "profondita_cm": 205.5,
    "descrizione": "Letto contenitore in bouclé écru 140x190cm con rete a doghe"
  },
  {
    "nome": "Legno - Divano 4 posti avorio",
    "categoria": "Divani",
    "prezzo": 1299,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-4-posti-avorio-1000-11-27-243485_12.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-4-posti-avorio-legno-243485.htm",
    "larghezza_cm": 228,
    "profondita_cm": 84,
    "descrizione": "Divano 4 posti avorio"
  },
  {
    "nome": "Valencia - Poltrona girevole da giardino in resina intrecciata blu e beige",
    "categoria": "Poltrone",
    "prezzo": 419.3,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltrona-girevole-da-giardino-in-resina-intrecciata-blu-e-beige-1000-0-3-246126_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-girevole-da-giardino-in-resina-intrecciata-blu-e-beige-valencia-246126.htm",
    "larghezza_cm": 76,
    "profondita_cm": 65.5,
    "descrizione": "Poltrona girevole da giardino in resina intrecciata blu e beige"
  },
  {
    "nome": "Joséphine - Madia a 3 ante con 3 cassetti bianchi 131 cm",
    "categoria": "Credenze",
    "prezzo": 469,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/madia-a-3-ante-con-3-cassetti-bianchi-131-cm-1000-4-10-249003_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/madia-a-3-ante-con-3-cassetti-bianchi-131-cm-josephine-249003.htm",
    "larghezza_cm": 131,
    "profondita_cm": 43,
    "descrizione": "Madia a 3 ante con 3 cassetti bianchi 131 cm"
  },
  {
    "nome": "Bull Essentiel - Materasso in memory foam 160x200",
    "categoria": "Letti",
    "prezzo": 249,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/materasso-in-memory-foam-160x200-1000-7-23-242784_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/materasso-in-memory-foam-160x200-bull-essentiel-242784.htm",
    "larghezza_cm": 160,
    "profondita_cm": 200,
    "descrizione": "Materasso in memory foam 160x200"
  },
  {
    "nome": "Ciotola per ramen in gres verde argilla",
    "categoria": "Cucina",
    "prezzo": 14.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/ciotola-per-ramen-in-gres-verde-argilla-1000-11-40-224802_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/ciotola-per-ramen-in-gres-verde-argilla-224802.htm",
    "larghezza_cm": 21,
    "profondita_cm": 21,
    "descrizione": "Ciotola per ramen in gres verde argilla"
  },
  {
    "nome": "Sheffield - Divano 3 posti in tessuto grigio chiné",
    "categoria": "Divani",
    "prezzo": 1299,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-3-posti-in-tessuto-grigio-chine-1000-0-39-242964_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-3-posti-in-tessuto-grigio-chine-sheffield-242964.htm",
    "larghezza_cm": 213,
    "profondita_cm": 90,
    "descrizione": "Divano 3 posti in tessuto grigio chiné"
  },
  {
    "nome": "Archie - Poltrona da tavolo écru con gambe in legno di rovere",
    "categoria": "Poltrone",
    "prezzo": 149,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltrona-da-tavolo-ecru-con-gambe-in-legno-di-rovere-1000-16-8-249780_2.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-da-tavolo-ecru-con-gambe-in-legno-di-rovere-archie-249780.htm",
    "larghezza_cm": 58,
    "profondita_cm": 61,
    "descrizione": "Poltrona da tavolo écru con gambe in legno di rovere"
  },
  {
    "nome": "Tulla - Tavolo da pranzo in pietra effetto graniglia e rattan per 5/6 persone Ø 120cm",
    "categoria": "Tavoli da pranzo",
    "prezzo": 839.3,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tavolo-da-pranzo-in-pietra-effetto-graniglia-e-rattan-per-5-6-persone-oe-120cm-1000-16-12-230145_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tavolo-da-pranzo-in-pietra-effetto-graniglia-e-rattan-per-5-6-persone-oe-120cm-tulla-230145.htm",
    "larghezza_cm": 120,
    "profondita_cm": 120,
    "descrizione": "Tavolo da pranzo in pietra effetto graniglia e rattan per 5/6 persone Ø 120cm"
  },
  {
    "nome": "Tarifa - Console con 2 cassetti color nocciola e rattan intrecciato",
    "categoria": "Cassettiere",
    "prezzo": 229,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/console-con-2-cassetti-color-nocciola-e-rattan-intrecciato-1000-2-18-237900_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/console-con-2-cassetti-color-nocciola-e-rattan-intrecciato-tarifa-237900.htm",
    "larghezza_cm": 115,
    "profondita_cm": 35,
    "descrizione": "Console con 2 cassetti color nocciola e rattan intrecciato"
  },
  {
    "nome": "Aloe vera artificiale con vaso",
    "categoria": "Decorazioni",
    "prezzo": 39.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/aloe-vera-artificiale-con-vaso-1000-8-22-205555_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/aloe-vera-artificiale-con-vaso-205555.htm",
    "larghezza_cm": 43,
    "profondita_cm": 43,
    "descrizione": "Aloe vera artificiale con vaso"
  },
  {
    "nome": "Carrello con rotelle marrone e nero",
    "categoria": "Cucina",
    "prezzo": 159,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/carrello-con-rotelle-marrone-e-nero-1000-14-24-225196_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/carrello-con-rotelle-marrone-e-nero-225196.htm",
    "larghezza_cm": 71,
    "profondita_cm": 31.5,
    "descrizione": "Carrello con rotelle marrone e nero"
  },
  {
    "nome": "Neo Elementary - Pouf per divano componibile color sabbia",
    "categoria": "Divani",
    "prezzo": 199,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/pouf-per-divano-componibile-color-sabbia-1000-16-5-242725_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/pouf-per-divano-componibile-color-sabbia-neo-elementary-242725.htm",
    "larghezza_cm": 115,
    "profondita_cm": 58,
    "descrizione": "Pouf per divano componibile color sabbia"
  },
  {
    "nome": "Chuck - Tavolo da pranzo per 6 persone e sgabelli (x4) in abete massiccio e metallo lung. 120 cm",
    "categoria": "Tavoli da pranzo",
    "prezzo": 244.3,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tavolo-da-pranzo-per-6-persone-e-sgabelli-x4-in-abete-massiccio-e-metallo-lung-120-cm-1000-14-24-216135_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tavolo-da-pranzo-per-6-persone-e-sgabelli-x4-in-abete-massiccio-e-metallo-lung-120-cm-chuck-216135.htm",
    "larghezza_cm": 120,
    "profondita_cm": 70,
    "descrizione": "Tavolo da pranzo per 6 persone e sgabelli (x4) in abete massiccio e metallo lung. 120 cm"
  },
  {
    "nome": "Pump - Pouf per divano componibile color beige sabbia",
    "categoria": "Divani",
    "prezzo": 349.3,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/pouf-per-divano-componibile-color-beige-sabbia-1000-1-26-233972_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/pouf-per-divano-componibile-color-beige-sabbia-pump-233972.htm",
    "larghezza_cm": 99,
    "profondita_cm": 99,
    "descrizione": "Pouf per divano componibile color beige sabbia"
  },
  {
    "nome": "Malaga - Mobiletto in rattan a 2 ante",
    "categoria": "Cassettiere",
    "prezzo": 279,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/mobiletto-in-rattan-a-2-ante-1000-10-25-248567_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/mobiletto-in-rattan-a-2-ante-malaga-248567.htm",
    "larghezza_cm": 79,
    "profondita_cm": 37,
    "descrizione": "Mobiletto in rattan a 2 ante"
  },
  {
    "nome": "Cushion - Letto contenitore beige in poliestere riciclato 160x200 cmcon rete a doghe",
    "categoria": "Letti",
    "prezzo": 499,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/letto-contenitore-beige-in-poliestere-riciclato-160x200-cmcon-rete-a-doghe-1000-0-14-241791_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/letto-contenitore-beige-in-poliestere-riciclato-160x200-cmcon-rete-a-doghe-cushion-241791.htm",
    "larghezza_cm": 174,
    "profondita_cm": 220,
    "descrizione": "Letto contenitore beige in poliestere riciclato 160x200 cmcon rete a doghe"
  },
  {
    "nome": "Lampada da terra in acciaio e legno di hevea con paralume in rattan alt. 172 cm",
    "categoria": "Lampade",
    "prezzo": 149,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/lampada-da-terra-in-acciaio-e-legno-di-hevea-con-paralume-in-rattan-alt-172-cm-1000-9-19-223797_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/lampada-da-terra-in-acciaio-e-legno-di-hevea-con-paralume-in-rattan-alt-172-cm-223797.htm",
    "larghezza_cm": 52,
    "profondita_cm": 36,
    "descrizione": "Lampada da terra in acciaio e legno di hevea con paralume in rattan alt. 172 cm"
  },
  {
    "nome": "Monstera artificiale sospesa e vaso in rattan",
    "categoria": "Decorazioni",
    "prezzo": 29.99,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/252472/monstera-artificiale-sospesa-e-vaso-in-rattan.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/monstera-artificiale-sospesa-e-vaso-in-rattan-252472.htm",
    "larghezza_cm": 11.5,
    "profondita_cm": 11.5,
    "descrizione": "Monstera artificiale sospesa e vaso in rattan"
  },
  {
    "nome": "Tap Middle - Set di 2 sommier in tessuto tramato beige 90x200 cm",
    "categoria": "Letti",
    "prezzo": 499,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/set-di-2-sommier-in-tessuto-tramato-beige-90x200-cm-1000-15-23-247212_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/set-di-2-sommier-in-tessuto-tramato-beige-90x200-cm-tap-middle-247212.htm",
    "larghezza_cm": 90,
    "profondita_cm": 200,
    "descrizione": "Set di 2 sommier in tessuto tramato beige 90x200 cm"
  },
  {
    "nome": "Lampada a sospensione arrotondata plissettata in rattan intrecciato",
    "categoria": "Lampade",
    "prezzo": 249.5,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/lampada-a-sospensione-arrotondata-plissettata-in-rattan-intrecciato-1000-0-1-246534_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/lampada-a-sospensione-arrotondata-plissettata-in-rattan-intrecciato-246534.htm",
    "larghezza_cm": 92,
    "profondita_cm": 92,
    "descrizione": "Lampada a sospensione arrotondata plissettata in rattan intrecciato"
  },
  {
    "nome": "Pesaro Business - Angolo per divano componibile professionale in tessuto riciclato beige",
    "categoria": "Divani",
    "prezzo": 419.3,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/angolo-per-divano-componibile-professionale-in-tessuto-riciclato-beige-1000-6-27-239672_3.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/angolo-per-divano-componibile-professionale-in-tessuto-riciclato-beige-pesaro-business-239672.htm",
    "larghezza_cm": 131,
    "profondita_cm": 89,
    "descrizione": "Angolo per divano componibile professionale in tessuto riciclato beige"
  },
  {
    "nome": "Indies - Credenza a 12 ante e 3 cassetti in legno massello di mango nera 180cm",
    "categoria": "Cassettiere",
    "prezzo": 1999,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/176037_0/credenza-a-12-ante-e-3-cassetti-in-legno-massello-di-mango-nera-180cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/credenza-a-12-ante-e-3-cassetti-in-legno-massello-di-mango-nera-180cm-indies-176037.htm",
    "larghezza_cm": 180,
    "profondita_cm": 45,
    "descrizione": "Credenza a 12 ante e 3 cassetti in legno massello di mango nera 180cm"
  },
  {
    "nome": "Fergus - Letto in tessuto beige 180x200 cm",
    "categoria": "Letti",
    "prezzo": 659,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/letto-in-tessuto-beige-180x200-cm-1000-8-6-187212_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/letto-in-tessuto-beige-180x200-cm-fergus-187212.htm",
    "larghezza_cm": 208,
    "profondita_cm": 230,
    "descrizione": "Letto in tessuto beige 180x200 cm"
  },
  {
    "nome": "Lampada a sospensione fiore in rattan intrecciato",
    "categoria": "Lampade",
    "prezzo": 159,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/lampada-a-sospensione-fiore-in-rattan-intrecciato-1000-5-0-235914_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/lampada-a-sospensione-fiore-in-rattan-intrecciato-235914.htm",
    "larghezza_cm": 70,
    "profondita_cm": 70,
    "descrizione": "Lampada a sospensione fiore in rattan intrecciato"
  },
  {
    "nome": "Pesaro Business - Chauffeuse per divano componibile professionale in tessuto riciclato blu",
    "categoria": "Divani",
    "prezzo": 279.3,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/chauffeuse-per-divano-componibile-professionale-in-tessuto-riciclato-blu-1000-9-30-239675_4.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/chauffeuse-per-divano-componibile-professionale-in-tessuto-riciclato-blu-pesaro-business-239675.htm",
    "larghezza_cm": 123,
    "profondita_cm": 89,
    "descrizione": "Chauffeuse per divano componibile professionale in tessuto riciclato blu"
  },
  {
    "nome": "St Raphaël - Modulo angolare per divano da giardino in resina intrecciata riciclata",
    "categoria": "Divani",
    "prezzo": 329,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/modulo-angolare-per-divano-da-giardino-in-resina-intrecciata-riciclata-1000-10-24-238316_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/modulo-angolare-per-divano-da-giardino-in-resina-intrecciata-riciclata-st-raphael-238316.htm",
    "larghezza_cm": 87,
    "profondita_cm": 87,
    "descrizione": "Modulo angolare per divano da giardino in resina intrecciata riciclata"
  },
  {
    "nome": "Flaubert - Credenza con vetrine a 8 ante bianco patinato in pino riciclato 190cm",
    "categoria": "Cassettiere",
    "prezzo": 2399,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/credenza-con-vetrine-a-8-ante-bianco-patinato-in-pino-riciclato-190cm-1000-5-14-166146_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/credenza-con-vetrine-a-8-ante-bianco-patinato-in-pino-riciclato-190cm-flaubert-166146.htm",
    "larghezza_cm": 190,
    "profondita_cm": 45,
    "descrizione": "Credenza con vetrine a 8 ante bianco patinato in pino riciclato 190cm"
  },
  {
    "nome": "Chesterfield - Testata del letto imbottita in lino L 160 cm",
    "categoria": "Letti",
    "prezzo": 279,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/testata-del-letto-imbottita-in-lino-l-160-cm-1000-10-38-110697_8.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/testata-del-letto-imbottita-in-lino-l-160-cm-chesterfield-110697.htm",
    "larghezza_cm": 160,
    "profondita_cm": 9,
    "descrizione": "Testata del letto imbottita in lino L 160 cm"
  },
  {
    "nome": "Compas - Tavolo da pranzo 5/6 persone in legno di mango e ghisa, 120 cm",
    "categoria": "Tavoli da pranzo",
    "prezzo": 599,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tavolo-da-pranzo-5-6-persone-in-legno-di-mango-e-ghisa-120-cm-1000-3-28-187275_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tavolo-da-pranzo-5-6-persone-in-legno-di-mango-e-ghisa-120-cm-compas-187275.htm",
    "larghezza_cm": 120,
    "profondita_cm": 120,
    "descrizione": "Tavolo da pranzo 5/6 persone in legno di mango e ghisa, 120 cm"
  },
  {
    "nome": "Porto Rico - Fodera per cuscino grigio antracite per divano PORTO RICO",
    "categoria": "Divani",
    "prezzo": 249,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/fodera-per-cuscino-grigio-antracite-per-divano-porto-rico-1000-11-10-229528_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/fodera-per-cuscino-grigio-antracite-per-divano-porto-rico-porto-rico-229528.htm",
    "larghezza_cm": 240,
    "profondita_cm": 244,
    "descrizione": "Fodera per cuscino grigio antracite per divano PORTO RICO"
  },
  {
    "nome": "Joséphine - Credenza a 3 porte bianca 123cm",
    "categoria": "Cassettiere",
    "prezzo": 799,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/credenza-a-3-porte-bianca-123cm-1000-12-18-249011_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/credenza-a-3-porte-bianca-123cm-josephine-249011.htm",
    "larghezza_cm": 123,
    "profondita_cm": 43,
    "descrizione": "Credenza a 3 porte bianca 123cm"
  },
  {
    "nome": "Barcelone - Divano a 3/4 posti effetto lino stropicciato bianco",
    "categoria": "Divani",
    "prezzo": 899,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-a-3-4-posti-effetto-lino-stropicciato-bianco-1000-10-25-242294_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-a-3-4-posti-effetto-lino-stropicciato-bianco-barcelone-242294.htm",
    "larghezza_cm": 207,
    "profondita_cm": 90,
    "descrizione": "Divano a 3/4 posti effetto lino stropicciato bianco"
  },
  {
    "nome": "Mini palma artificiale con vaso bianco",
    "categoria": "Decorazioni",
    "prezzo": 34.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/mini-palma-artificiale-con-vaso-bianco-1000-15-28-190432_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/mini-palma-artificiale-con-vaso-bianco-190432.htm",
    "larghezza_cm": 12.5,
    "profondita_cm": 12,
    "descrizione": "Mini palma artificiale con vaso bianco"
  },
  {
    "nome": "Portapiante in metallo nero",
    "categoria": "Decorazioni",
    "prezzo": 64.5,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/portapiante-in-metallo-nero-1000-9-15-248311_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/portapiante-in-metallo-nero-248311.htm",
    "larghezza_cm": 133,
    "profondita_cm": 40,
    "descrizione": "Portapiante in metallo nero"
  },
  {
    "nome": "Barnaby - Pouf per divano componibile grigio chiaro chiné",
    "categoria": "Divani",
    "prezzo": 399,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/pouf-per-divano-componibile-grigio-chiaro-chine-1000-13-33-249641_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/pouf-per-divano-componibile-grigio-chiaro-chine-barnaby-249641.htm",
    "larghezza_cm": 117,
    "profondita_cm": 80,
    "descrizione": "Pouf per divano componibile grigio chiaro chiné"
  },
  {
    "nome": "Aurel - Poltrona da pranzo in tessuto riciclato grigio chiaro e acciaio nero",
    "categoria": "Poltrone",
    "prezzo": 199,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltrona-da-pranzo-in-tessuto-riciclato-grigio-chiaro-e-acciaio-nero-1000-12-38-247719_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-da-pranzo-in-tessuto-riciclato-grigio-chiaro-e-acciaio-nero-aurel-247719.htm",
    "larghezza_cm": 62,
    "profondita_cm": 61,
    "descrizione": "Poltrona da pranzo in tessuto riciclato grigio chiaro e acciaio nero"
  },
  {
    "nome": "Stockholm - Tavolo per sala da pranzo in massello di legno di sheesham 180 cm",
    "categoria": "Tavoli da pranzo",
    "prezzo": 599,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/140473_0/tavolo-per-sala-da-pranzo-in-massello-di-legno-di-sheesham-180-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tavolo-per-sala-da-pranzo-in-massello-di-legno-di-sheesham-180-cm-stockholm-140473.htm",
    "larghezza_cm": 180,
    "profondita_cm": 90,
    "descrizione": "Tavolo per sala da pranzo in massello di legno di sheesham 180 cm"
  },
  {
    "nome": "Bahamas - Fodera per cuscino grigio antracite per divano BAHAMAS",
    "categoria": "Divani",
    "prezzo": 174.3,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/fodera-per-cuscino-grigio-antracite-per-divano-bahamas-1000-16-39-229516_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/fodera-per-cuscino-grigio-antracite-per-divano-bahamas-bahamas-229516.htm",
    "larghezza_cm": 211,
    "profondita_cm": 211,
    "descrizione": "Fodera per cuscino grigio antracite per divano BAHAMAS"
  },
  {
    "nome": "Joséphine - Credenza bianca 4 ante e 2 cassetti lung. 86cm",
    "categoria": "Cassettiere",
    "prezzo": 599,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/credenza-bianca-4-ante-e-2-cassetti-lung-86cm-1000-9-15-249008_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/credenza-bianca-4-ante-e-2-cassetti-lung-86cm-josephine-249008.htm",
    "larghezza_cm": 86,
    "profondita_cm": 40,
    "descrizione": "Credenza bianca 4 ante e 2 cassetti lung. 86cm"
  },
  {
    "nome": "Hyb - Materasso ibrido 140x190 cm",
    "categoria": "Letti",
    "prezzo": 399,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/materasso-ibrido-140x190-cm-1000-11-16-242941_7.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/materasso-ibrido-140x190-cm-hyb-242941.htm",
    "larghezza_cm": 140,
    "profondita_cm": 190,
    "descrizione": "Materasso ibrido 140x190 cm"
  },
  {
    "nome": "Anvers - Divano a 3 posti in velluto a coste grigio antracite",
    "categoria": "Divani",
    "prezzo": 200,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-a-3-posti-in-velluto-a-coste-grigio-antracite-1000-1-6-241537_8.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-a-3-posti-in-velluto-a-coste-grigio-antracite-anvers-241537.htm",
    "larghezza_cm": 200,
    "profondita_cm": 106,
    "descrizione": "Divano a 3 posti in velluto a coste grigio antracite"
  },
  {
    "nome": "Archie - Poltrona da tavolo grigio scuro con gambe in legno di rovere",
    "categoria": "Poltrone",
    "prezzo": 149,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltrona-da-tavolo-grigio-scuro-con-gambe-in-legno-di-rovere-1000-8-1-241204_6.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-da-tavolo-grigio-scuro-con-gambe-in-legno-di-rovere-archie-241204.htm",
    "larghezza_cm": 180,
    "profondita_cm": 90,
    "descrizione": "Poltrona da tavolo grigio scuro con gambe in legno di rovere"
  },
  {
    "nome": "Cover Essentiel - Topper in memory foam 160x200 cm",
    "categoria": "Letti",
    "prezzo": 199,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/topper-in-memory-foam-160x200-cm-1000-5-21-242782_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/topper-in-memory-foam-160x200-cm-cover-essentiel-242782.htm",
    "larghezza_cm": 160,
    "profondita_cm": 200,
    "descrizione": "Topper in memory foam 160x200 cm"
  },
  {
    "nome": "City - Divano angolare con penisola a sinistra 5 posti grigio chiné",
    "categoria": "Divani",
    "prezzo": 1199,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-angolare-con-penisola-a-sinistra-5-posti-grigio-chine-1000-0-12-198288_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-angolare-con-penisola-a-sinistra-5-posti-grigio-chine-city-198288.htm",
    "larghezza_cm": 270,
    "profondita_cm": 162,
    "descrizione": "Divano angolare con penisola a sinistra 5 posti grigio chiné"
  },
  {
    "nome": "Decorazione da parete in metallo dorato e fiori secchi D37",
    "categoria": "Decorazioni",
    "prezzo": 29.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/decorazione-da-parete-in-metallo-dorato-e-fiori-secchi-d37-1000-1-11-227274_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/decorazione-da-parete-in-metallo-dorato-e-fiori-secchi-d37-227274.htm",
    "larghezza_cm": 37,
    "profondita_cm": 4,
    "descrizione": "Decorazione da parete in metallo dorato e fiori secchi D37"
  },
  {
    "nome": "Grattugia in legno di acacia e acciaio inox",
    "categoria": "Cucina",
    "prezzo": 12.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/grattugia-in-legno-di-acacia-e-acciaio-inox-1000-6-4-207423_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/grattugia-in-legno-di-acacia-e-acciaio-inox-207423.htm",
    "larghezza_cm": 10.7,
    "profondita_cm": 10.7,
    "descrizione": "Grattugia in legno di acacia e acciaio inox"
  },
  {
    "nome": "Virgile - Pouf per divano écru",
    "categoria": "Divani",
    "prezzo": 339,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/pouf-per-divano-ecru-1000-4-38-241897_2.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/pouf-per-divano-ecru-virgile-241897.htm",
    "larghezza_cm": 97,
    "profondita_cm": 62,
    "descrizione": "Pouf per divano écru"
  },
  {
    "nome": "Kafe Business - Poltrona da giardino professionale in resina bianca/beige",
    "categoria": "Poltrone",
    "prezzo": 119,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltrona-da-giardino-professionale-in-resina-bianca-beige-1000-9-33-246033_8.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-da-giardino-professionale-in-resina-bianca-beige-kafe-business-246033.htm",
    "larghezza_cm": 57,
    "profondita_cm": 58,
    "descrizione": "Poltrona da giardino professionale in resina bianca/beige"
  },
  {
    "nome": "Stockholm - Tavolo alto per sala da pranzo in massello di legno di sheesham 150 cm",
    "categoria": "Tavoli da pranzo",
    "prezzo": 529,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tavolo-alto-per-sala-da-pranzo-in-massello-di-legno-di-sheesham-150-cm-1000-9-26-115728_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tavolo-alto-per-sala-da-pranzo-in-massello-di-legno-di-sheesham-150-cm-stockholm-115728.htm",
    "larghezza_cm": 150,
    "profondita_cm": 75,
    "descrizione": "Tavolo alto per sala da pranzo in massello di legno di sheesham 150 cm"
  },
  {
    "nome": "Rosalie - Poltroncina da pranzo in legno di hevea e schienale in paglia di Vienna",
    "categoria": "Sedie",
    "prezzo": 179,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltroncina-da-pranzo-in-legno-di-hevea-e-schienale-in-paglia-di-vienna-1000-12-3-247889_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltroncina-da-pranzo-in-legno-di-hevea-e-schienale-in-paglia-di-vienna-rosalie-247889.htm",
    "larghezza_cm": 56.5,
    "profondita_cm": 57,
    "descrizione": "Poltroncina da pranzo in legno di hevea e schienale in paglia di Vienna"
  },
  {
    "nome": "Printy - Credenza a 4 ante e 2 cassetti in legno massello di mango bianca e stampa vegetale 120cm",
    "categoria": "Cassettiere",
    "prezzo": 1199,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/credenza-a-4-ante-e-2-cassetti-in-legno-massello-di-mango-bianca-e-stampa-vegetale-120cm-1000-9-5-241987_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/credenza-a-4-ante-e-2-cassetti-in-legno-massello-di-mango-bianca-e-stampa-vegetale-120cm-printy-241987.htm",
    "larghezza_cm": 120,
    "profondita_cm": 45,
    "descrizione": "Credenza a 4 ante e 2 cassetti in legno massello di mango bianca e stampa vegetale 120cm"
  },
  {
    "nome": "Set di 4 tazzine in ceramica con motivi natalizi neri, verdi, rossi e dorati",
    "categoria": "Cucina",
    "prezzo": 12.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/set-di-4-tazzine-in-ceramica-con-motivi-natalizi-neri-verdi-rossi-e-dorati-1000-9-8-228829_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/set-di-4-tazzine-in-ceramica-con-motivi-natalizi-neri-verdi-rossi-e-dorati-228829.htm",
    "larghezza_cm": 5.5,
    "profondita_cm": 5.5,
    "descrizione": "Set di 4 tazzine in ceramica con motivi natalizi neri, verdi, rossi e dorati"
  },
  {
    "nome": "Mahango - Poltrona da giardino in legno di acacia, resina riciclata con cuscini in poliestere riciclato écru",
    "categoria": "Poltrone",
    "prezzo": 279.3,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltrona-da-giardino-in-legno-di-acacia-resina-riciclata-con-cuscini-in-poliestere-riciclato-ecru-1000-3-21-245857_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-da-giardino-in-legno-di-acacia-resina-riciclata-con-cuscini-in-poliestere-riciclato-ecru-mahango-245857.htm",
    "larghezza_cm": 75,
    "profondita_cm": 67,
    "descrizione": "Poltrona da giardino in legno di acacia, resina riciclata con cuscini in poliestere riciclato écru"
  },
  {
    "nome": "Element Business - Piano per tavolo professionale rettangolare in marmo bianco per 4 persone lung. 120 cm",
    "categoria": "Altri mobili",
    "prezzo": 379,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/piano-per-tavolo-professionale-rettangolare-in-marmo-bianco-per-4-persone-lung-120-cm-1000-11-9-219277_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/piano-per-tavolo-professionale-rettangolare-in-marmo-bianco-per-4-persone-lung-120-cm-element-business-219277.htm",
    "larghezza_cm": 120,
    "profondita_cm": 70,
    "descrizione": "Piano per tavolo professionale rettangolare in marmo bianco per 4 persone lung. 120 cm"
  },
  {
    "nome": "Bull Essentiel - Materasso in memory foam 140x190",
    "categoria": "Letti",
    "prezzo": 199,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/materasso-in-memory-foam-140x190-1000-16-15-242776_8.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/materasso-in-memory-foam-140x190-bull-essentiel-242776.htm",
    "larghezza_cm": 140,
    "profondita_cm": 190,
    "descrizione": "Materasso in memory foam 140x190"
  },
  {
    "nome": "Lampada a sospensione in rattan con pompon écru e corallo",
    "categoria": "Lampade",
    "prezzo": 54.99,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/237669_0/lampada-a-sospensione-in-rattan-con-pompon-ecru-e-corallo.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/lampada-a-sospensione-in-rattan-con-pompon-ecru-e-corallo-237669.htm",
    "larghezza_cm": 34,
    "profondita_cm": 34,
    "descrizione": "Lampada a sospensione in rattan con pompon écru e corallo"
  },
  {
    "nome": "Decorazione da parete corona da appendere in metallo dorato e fiori essiccati beige 25x30 cm",
    "categoria": "Decorazioni",
    "prezzo": 16.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/decorazione-da-parete-corona-da-appendere-in-metallo-dorato-e-fiori-essiccati-beige-25x30-cm-1000-6-31-224916_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/decorazione-da-parete-corona-da-appendere-in-metallo-dorato-e-fiori-essiccati-beige-25x30-cm-224916.htm",
    "larghezza_cm": 25,
    "profondita_cm": 2,
    "descrizione": "Decorazione da parete corona da appendere in metallo dorato e fiori essiccati beige 25x30 cm"
  },
  {
    "nome": "Ramo di foglie di palma dorato",
    "categoria": "Altri mobili",
    "prezzo": 2.95,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/ramo-di-foglie-di-palma-dorato-1000-8-12-194352_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/ramo-di-foglie-di-palma-dorato-194352.htm",
    "larghezza_cm": 17,
    "profondita_cm": 1,
    "descrizione": "Ramo di foglie di palma dorato"
  },
  {
    "nome": "Fioriera in metallo nero alt.180 cm",
    "categoria": "Decorazioni",
    "prezzo": 129,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/fioriera-in-metallo-nero-alt-180-cm-1000-7-10-189676_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/fioriera-in-metallo-nero-alt-180-cm-189676.htm",
    "larghezza_cm": 74,
    "profondita_cm": 30,
    "descrizione": "Fioriera in metallo nero alt.180 cm"
  },
  {
    "nome": "Gilli - Torre di osservazione dinosauro bicolore",
    "categoria": "Pouf",
    "prezzo": 139.3,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/torre-di-osservazione-dinosauro-bicolore-1000-3-8-234569_2.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/torre-di-osservazione-dinosauro-bicolore-gilli-234569.htm",
    "larghezza_cm": 39.5,
    "profondita_cm": 53,
    "descrizione": "Torre di osservazione dinosauro bicolore"
  },
  {
    "nome": "Virgile - Angolo di divano écru",
    "categoria": "Divani",
    "prezzo": 579,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/angolo-di-divano-ecru-1000-3-13-241913_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/angolo-di-divano-ecru-virgile-241913.htm",
    "larghezza_cm": 100,
    "profondita_cm": 100,
    "descrizione": "Angolo di divano écru"
  },
  {
    "nome": "Solies Business - Poltrona professionale componibile in legno di teak, corda beige e cuscini ecrù",
    "categoria": "Divani",
    "prezzo": 699.3,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltrona-professionale-componibile-in-legno-di-teak-corda-beige-e-cuscini-ecru-1000-8-4-246168_2.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-professionale-componibile-in-legno-di-teak-corda-beige-e-cuscini-ecru-solies-business-246168.htm",
    "larghezza_cm": 138,
    "profondita_cm": 92,
    "descrizione": "Poltrona professionale componibile in legno di teak, corda beige e cuscini ecrù"
  },
  {
    "nome": "Versailles - Tavolo allungabile per sala da pranzo in mango L 180 cm",
    "categoria": "Tavoli da pranzo",
    "prezzo": 799,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tavolo-allungabile-per-sala-da-pranzo-in-mango-l-180-cm-1000-10-34-115695_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tavolo-allungabile-per-sala-da-pranzo-in-mango-l-180-cm-versailles-115695.htm",
    "larghezza_cm": 180,
    "profondita_cm": 90,
    "descrizione": "Tavolo allungabile per sala da pranzo in mango L 180 cm"
  },
  {
    "nome": "Cover Essentiel - Topper in memory foam 140x190 cm",
    "categoria": "Letti",
    "prezzo": 159,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/topper-in-memory-foam-140x190-cm-1000-4-20-242781_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/topper-in-memory-foam-140x190-cm-cover-essentiel-242781.htm",
    "larghezza_cm": 140,
    "profondita_cm": 190,
    "descrizione": "Topper in memory foam 140x190 cm"
  },
  {
    "nome": "Lampada a sospensione con 3 paralumi in poliestere riciclato color crema",
    "categoria": "Lampade",
    "prezzo": 160.3,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/252780/lampada-a-sospensione-con-3-paralumi-in-poliestere-riciclato-color-crema.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/lampada-a-sospensione-con-3-paralumi-in-poliestere-riciclato-color-crema-252780.htm",
    "larghezza_cm": 40,
    "profondita_cm": 40,
    "descrizione": "Lampada a sospensione con 3 paralumi in poliestere riciclato color crema"
  },
  {
    "nome": "Set di ciotole in ceramica multicolore",
    "categoria": "Cucina",
    "prezzo": 19.99,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/253083/set-di-ciotole-in-ceramica-multicolore.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/set-di-ciotole-in-ceramica-multicolore-253083.htm",
    "larghezza_cm": 14,
    "profondita_cm": 14,
    "descrizione": "Set di ciotole in ceramica multicolore"
  },
  {
    "nome": "Brace Business - Poltrona da pranzo da giardino professionale in resina riciclata beige e cuscino écru",
    "categoria": "Poltrone",
    "prezzo": 199,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltrona-da-pranzo-da-giardino-professionale-in-resina-riciclata-beige-e-cuscino-ecru-1000-5-23-245859_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-da-pranzo-da-giardino-professionale-in-resina-riciclata-beige-e-cuscino-ecru-brace-business-245859.htm",
    "larghezza_cm": 68,
    "profondita_cm": 60,
    "descrizione": "Poltrona da pranzo da giardino professionale in resina riciclata beige e cuscino écru"
  },
  {
    "nome": "Montmorency - Tavolo per sala da pranzo in massello di pino L 250 cm",
    "categoria": "Tavoli da pranzo",
    "prezzo": 1199,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/229116/tavolo-per-sala-da-pranzo-in-massello-di-pino-l-250-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tavolo-per-sala-da-pranzo-in-massello-di-pino-l-250-cm-montmorency-229116.htm",
    "larghezza_cm": 250,
    "profondita_cm": 100,
    "descrizione": "Tavolo per sala da pranzo in massello di pino L 250 cm"
  },
  {
    "nome": "Sweet - Cassettiera bianca con 3 cassetti 85cm",
    "categoria": "Cassettiere",
    "prezzo": 249,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/cassettiera-bianca-con-3-cassetti-85cm-1000-12-30-249351_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/cassettiera-bianca-con-3-cassetti-85cm-sweet-249351.htm",
    "larghezza_cm": 85,
    "profondita_cm": 52,
    "descrizione": "Cassettiera bianca con 3 cassetti 85cm"
  },
  {
    "nome": "Pump Premium - Materasso a molle insacchettate 160x200 cm",
    "categoria": "Letti",
    "prezzo": 849,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/materasso-a-molle-insacchettate-160x200-cm-1000-12-11-242772_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/materasso-a-molle-insacchettate-160x200-cm-pump-premium-242772.htm",
    "larghezza_cm": 160,
    "profondita_cm": 200,
    "descrizione": "Materasso a molle insacchettate 160x200 cm"
  },
  {
    "nome": "Tokyo - Divano angolare con penisola a destra 4/5 posti in tessuto tramato beige",
    "categoria": "Divani",
    "prezzo": 1199.2,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-angolare-con-penisola-a-destra-4-5-posti-in-tessuto-tramato-beige-1000-10-1-246493_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-angolare-con-penisola-a-destra-4-5-posti-in-tessuto-tramato-beige-tokyo-246493.htm",
    "larghezza_cm": 295,
    "profondita_cm": 175,
    "descrizione": "Divano angolare con penisola a destra 4/5 posti in tessuto tramato beige"
  },
  {
    "nome": "Lampada a sospensione in lino bianco e con dettagli",
    "categoria": "Lampade",
    "prezzo": 149,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/lampada-a-sospensione-in-lino-bianco-e-con-dettagli-1000-12-20-243027_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/lampada-a-sospensione-in-lino-bianco-e-con-dettagli-243027.htm",
    "larghezza_cm": 50,
    "profondita_cm": 50,
    "descrizione": "Lampada a sospensione in lino bianco e con dettagli"
  },
  {
    "nome": "Mug in ceramica con motivi natalizi neri, bianchi, verdi, rossi e dorati",
    "categoria": "Cucina",
    "prezzo": 8.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/mug-in-ceramica-con-motivi-natalizi-neri-bianchi-verdi-rossi-e-dorati-1000-2-23-229213_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/mug-in-ceramica-con-motivi-natalizi-neri-bianchi-verdi-rossi-e-dorati-229213.htm",
    "larghezza_cm": 9,
    "profondita_cm": 9,
    "descrizione": "Mug in ceramica con motivi natalizi neri, bianchi, verdi, rossi e dorati"
  },
  {
    "nome": "Neo Elementary - Schienale per divano componibile grigio carbone",
    "categoria": "Divani",
    "prezzo": 159,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/schienale-per-divano-componibile-grigio-carbone-1000-6-36-242715_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/schienale-per-divano-componibile-grigio-carbone-neo-elementary-242715.htm",
    "larghezza_cm": 83,
    "profondita_cm": 56,
    "descrizione": "Schienale per divano componibile grigio carbone"
  },
  {
    "nome": "Pump Essentiel - Materasso a molle insacchettate 140x200 cm",
    "categoria": "Letti",
    "prezzo": 229,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/materasso-a-molle-insacchettate-140x200-cm-1000-12-40-247311_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/materasso-a-molle-insacchettate-140x200-cm-pump-essentiel-247311.htm",
    "larghezza_cm": 140,
    "profondita_cm": 200,
    "descrizione": "Materasso a molle insacchettate 140x200 cm"
  },
  {
    "nome": "Anvers - Divano angolare sinistro a 4/5 posti beige",
    "categoria": "Divani",
    "prezzo": 1599,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-angolare-sinistro-a-4-5-posti-beige-1000-6-11-241542_15.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-angolare-sinistro-a-4-5-posti-beige-anvers-241542.htm",
    "larghezza_cm": 252,
    "profondita_cm": 167,
    "descrizione": "Divano angolare sinistro a 4/5 posti beige"
  },
  {
    "nome": "Lampada a sospensione in filo di metallo nero",
    "categoria": "Lampade",
    "prezzo": 149,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/lampada-a-sospensione-in-filo-di-metallo-nero-1000-11-19-243026_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/lampada-a-sospensione-in-filo-di-metallo-nero-243026.htm",
    "larghezza_cm": 100,
    "profondita_cm": 100,
    "descrizione": "Lampada a sospensione in filo di metallo nero"
  },
  {
    "nome": "Pouf per divano componibile in tessuto jacquard écrue ocra",
    "categoria": "Divani",
    "prezzo": 299,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/253795/pouf-per-divano-componibile-in-tessuto-jacquard-ecrue-ocra.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/pouf-per-divano-componibile-in-tessuto-jacquard-ecrue-ocra-253795.htm",
    "larghezza_cm": 102,
    "profondita_cm": 71,
    "descrizione": "Pouf per divano componibile in tessuto jacquard écrue ocra"
  },
  {
    "nome": "Tokyo - Divano 3 posti in tessuto tramato giallo ocra",
    "categoria": "Divani",
    "prezzo": 999,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-3-posti-in-tessuto-tramato-giallo-ocra-1000-4-36-246487_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-3-posti-in-tessuto-tramato-giallo-ocra-tokyo-246487.htm",
    "larghezza_cm": 250,
    "profondita_cm": 96,
    "descrizione": "Divano 3 posti in tessuto tramato giallo ocra"
  },
  {
    "nome": "Caraffa in vetro trasparente 1,450L",
    "categoria": "Cucina",
    "prezzo": 39.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/caraffa-in-vetro-trasparente-1-450l-1000-14-2-245715_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/caraffa-in-vetro-trasparente-1-450l-245715.htm",
    "larghezza_cm": 21.3,
    "profondita_cm": 21.3,
    "descrizione": "Caraffa in vetro trasparente 1,450L"
  },
  {
    "nome": "Lotto di 2 - Piatto fondo in gres blu",
    "categoria": "Cucina",
    "prezzo": 11.1,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/253188/piatto-fondo-in-gres-blu.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/piatto-fondo-in-gres-blu-253188.htm",
    "larghezza_cm": 20,
    "profondita_cm": 20,
    "descrizione": "Piatto fondo in gres blu"
  },
  {
    "nome": "Neo Elementary - Modulo centrale per divano componibile beige sabbioso",
    "categoria": "Divani",
    "prezzo": 499,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/242716_0/modulo-centrale-per-divano-componibile-beige-sabbioso.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/modulo-centrale-per-divano-componibile-beige-sabbioso-neo-elementary-242716.htm",
    "larghezza_cm": 78,
    "profondita_cm": 80.5,
    "descrizione": "Modulo centrale per divano componibile beige sabbioso"
  },
  {
    "nome": "Madia a 2 ante e 2 cassetti écru lung. 140 cm",
    "categoria": "Credenze",
    "prezzo": 299,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/252495/madia-a-2-ante-e-2-cassetti-ecru-lung-140-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/madia-a-2-ante-e-2-cassetti-ecru-lung-140-cm-252495.htm",
    "larghezza_cm": 140,
    "profondita_cm": 40,
    "descrizione": "Madia a 2 ante e 2 cassetti écru lung. 140 cm"
  },
  {
    "nome": "Beatrice - Letto in lino bianco 180x200 cm",
    "categoria": "Letti",
    "prezzo": 619,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/letto-in-lino-bianco-180x200-cm-1000-10-36-187775_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/letto-in-lino-bianco-180x200-cm-beatrice-187775.htm",
    "larghezza_cm": 189,
    "profondita_cm": 218,
    "descrizione": "Letto in lino bianco 180x200 cm"
  },
  {
    "nome": "Nemo - Divano angolare con penisola a destra in velluto a coste grigio chiaro",
    "categoria": "Divani",
    "prezzo": 1199,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-angolare-con-penisola-a-destra-in-velluto-a-coste-grigio-chiaro-1000-5-20-242986_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-angolare-con-penisola-a-destra-in-velluto-a-coste-grigio-chiaro-nemo-242986.htm",
    "larghezza_cm": 250,
    "profondita_cm": 166,
    "descrizione": "Divano angolare con penisola a destra in velluto a coste grigio chiaro"
  },
  {
    "nome": "Coprivaso con supporto in ferro battuto verde alt. 57 cm",
    "categoria": "Decorazioni",
    "prezzo": 29.99,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/252509/coprivaso-con-supporto-in-ferro-battuto-verde-alt-57-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/coprivaso-con-supporto-in-ferro-battuto-verde-alt-57-cm-252509.htm",
    "larghezza_cm": 26,
    "profondita_cm": 22,
    "descrizione": "Coprivaso con supporto in ferro battuto verde alt. 57 cm"
  },
  {
    "nome": "Lotto di 2 - Barattolo in vetro trasparente e cucchiaio in legno",
    "categoria": "Cucina",
    "prezzo": 7.18,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/barattolo-in-vetro-trasparente-e-cucchiaio-in-legno-1000-2-14-228261_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/barattolo-in-vetro-trasparente-e-cucchiaio-in-legno-228261.htm",
    "larghezza_cm": 8.6,
    "profondita_cm": 7.3,
    "descrizione": "Barattolo in vetro trasparente e cucchiaio in legno"
  },
  {
    "nome": "Neo Elementary - Modulo centrale per divano componibile colore talpa",
    "categoria": "Divani",
    "prezzo": 499,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/242717_0/modulo-centrale-per-divano-componibile-colore-talpa.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/modulo-centrale-per-divano-componibile-colore-talpa-neo-elementary-242717.htm",
    "larghezza_cm": 113,
    "profondita_cm": 113,
    "descrizione": "Modulo centrale per divano componibile colore talpa"
  },
  {
    "nome": "Arckos - Testata del letto bianco crema 160 cm",
    "categoria": "Letti",
    "prezzo": 149,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/testata-del-letto-bianco-crema-160-cm-1000-9-10-245846_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/testata-del-letto-bianco-crema-160-cm-arckos-245846.htm",
    "larghezza_cm": 163.2,
    "profondita_cm": 21,
    "descrizione": "Testata del letto bianco crema 160 cm"
  },
  {
    "nome": "Contenitore per compost grigio e nero",
    "categoria": "Cucina",
    "prezzo": 29.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/contenitore-per-compost-grigio-e-nero-1000-12-38-224718_3.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/contenitore-per-compost-grigio-e-nero-224718.htm",
    "larghezza_cm": 26,
    "profondita_cm": 19.5,
    "descrizione": "Contenitore per compost grigio e nero"
  },
  {
    "nome": "Neo Elementary - Chaise longue per divano componibile beige sabbia",
    "categoria": "Divani",
    "prezzo": 799,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/242720_0/chaise-longue-per-divano-componibile-beige-sabbia.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/chaise-longue-per-divano-componibile-beige-sabbia-neo-elementary-242720.htm",
    "larghezza_cm": 115,
    "profondita_cm": 170,
    "descrizione": "Chaise longue per divano componibile beige sabbia"
  },
  {
    "nome": "Requiem - Poltrona da tavolo beige e acciaio color ottone",
    "categoria": "Poltrone",
    "prezzo": 209.3,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltrona-da-tavolo-beige-e-acciaio-color-ottone-1000-2-11-238631_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-da-tavolo-beige-e-acciaio-color-ottone-requiem-238631.htm",
    "larghezza_cm": 60,
    "profondita_cm": 59,
    "descrizione": "Poltrona da tavolo beige e acciaio color ottone"
  },
  {
    "nome": "Belleville - Sedia da giardino in acciaio terracotta",
    "categoria": "Sedie",
    "prezzo": 59.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-da-giardino-in-acciaio-terracotta-1000-1-2-245838_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-da-giardino-in-acciaio-terracotta-belleville-245838.htm",
    "larghezza_cm": 46,
    "profondita_cm": 63.5,
    "descrizione": "Sedia da giardino in acciaio terracotta"
  },
  {
    "nome": "Namaste - Madia a 3 ante in legno massello di mango scolpito 160 cm",
    "categoria": "Credenze",
    "prezzo": 949,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/madia-a-3-ante-in-legno-massello-di-mango-scolpito-160-cm-1000-0-39-186507_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/madia-a-3-ante-in-legno-massello-di-mango-scolpito-160-cm-namaste-186507.htm",
    "larghezza_cm": 160,
    "profondita_cm": 45,
    "descrizione": "Madia a 3 ante in legno massello di mango scolpito 160 cm"
  },
  {
    "nome": "Pump Middle - Materasso in memory foam 140x200 cm",
    "categoria": "Letti",
    "prezzo": 399,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/materasso-in-memory-foam-140x200-cm-1000-13-0-247312_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/materasso-in-memory-foam-140x200-cm-pump-middle-247312.htm",
    "larghezza_cm": 140,
    "profondita_cm": 200,
    "descrizione": "Materasso in memory foam 140x200 cm"
  },
  {
    "nome": "Paul - Divano 3 posti in lino bianco",
    "categoria": "Divani",
    "prezzo": 1299,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-3-posti-in-lino-bianco-1000-13-39-247023_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-3-posti-in-lino-bianco-paul-247023.htm",
    "larghezza_cm": 226,
    "profondita_cm": 95,
    "descrizione": "Divano 3 posti in lino bianco"
  },
  {
    "nome": "Lampada da terra da esterno ricaricabile senza fili in rattan alt. 165 cm",
    "categoria": "Lampade",
    "prezzo": 329,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/lampada-da-terra-da-esterno-ricaricabile-senza-fili-in-rattan-alt-165-cm-1000-13-36-248332_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/lampada-da-terra-da-esterno-ricaricabile-senza-fili-in-rattan-alt-165-cm-248332.htm",
    "larghezza_cm": 85,
    "profondita_cm": 85,
    "descrizione": "Lampada da terra da esterno ricaricabile senza fili in rattan alt. 165 cm"
  },
  {
    "nome": "Neo Elementary - Chaise longue per divano componibile grigio talpa",
    "categoria": "Divani",
    "prezzo": 799,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/chaise-longue-per-divano-componibile-grigio-talpa-1000-12-1-242721_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/chaise-longue-per-divano-componibile-grigio-talpa-neo-elementary-242721.htm",
    "larghezza_cm": 115,
    "profondita_cm": 170,
    "descrizione": "Chaise longue per divano componibile grigio talpa"
  },
  {
    "nome": "Poltrona in legno di faggio, juta e tessuto effetto lino",
    "categoria": "Divani",
    "prezzo": 499,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/252523/poltrona-in-legno-di-faggio-juta-e-tessuto-effetto-lino.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-in-legno-di-faggio-juta-e-tessuto-effetto-lino-252523.htm",
    "larghezza_cm": 76,
    "profondita_cm": 78,
    "descrizione": "Poltrona in legno di faggio, juta e tessuto effetto lino"
  },
  {
    "nome": "Belleville - Sedia da giardino in acciaio nero",
    "categoria": "Sedie",
    "prezzo": 41.95,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-da-giardino-in-acciaio-nero-1000-4-5-245841_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-da-giardino-in-acciaio-nero-belleville-245841.htm",
    "larghezza_cm": 46,
    "profondita_cm": 63.5,
    "descrizione": "Sedia da giardino in acciaio nero"
  },
  {
    "nome": "Kerala - Comò doppio con 6 cassetti bianco scolpito 160 cm",
    "categoria": "Cassettiere",
    "prezzo": 899,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/como-doppio-con-6-cassetti-bianco-scolpito-160-cm-1000-4-28-209784_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/como-doppio-con-6-cassetti-bianco-scolpito-160-cm-kerala-209784.htm",
    "larghezza_cm": 160,
    "profondita_cm": 45,
    "descrizione": "Comò doppio con 6 cassetti bianco scolpito 160 cm"
  },
  {
    "nome": "Pump Premium - Materasso a molle insacchettate 180x200",
    "categoria": "Letti",
    "prezzo": 949,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/materasso-a-molle-insacchettate-180x200-1000-13-12-242773_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/materasso-a-molle-insacchettate-180x200-pump-premium-242773.htm",
    "larghezza_cm": 180,
    "profondita_cm": 200,
    "descrizione": "Materasso a molle insacchettate 180x200"
  },
  {
    "nome": "Leon - Divano 2 posti in bouclé écru",
    "categoria": "Divani",
    "prezzo": 300.3,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-2-posti-in-boucle-ecru-1000-7-20-247578_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-2-posti-in-boucle-ecru-leon-247578.htm",
    "larghezza_cm": 144,
    "profondita_cm": 71.5,
    "descrizione": "Divano 2 posti in bouclé écru"
  },
  {
    "nome": "Coprivaso in fibra vegetale e supporto in metallo nero, 30 cm",
    "categoria": "Decorazioni",
    "prezzo": 29.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/coprivaso-in-fibra-vegetale-e-supporto-in-metallo-nero-30-cm-1000-9-27-241681_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/coprivaso-in-fibra-vegetale-e-supporto-in-metallo-nero-30-cm-241681.htm",
    "larghezza_cm": 23,
    "profondita_cm": 23,
    "descrizione": "Coprivaso in fibra vegetale e supporto in metallo nero, 30 cm"
  },
  {
    "nome": "Bomboniera in vetro striato",
    "categoria": "Cucina",
    "prezzo": 6.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/bomboniera-in-vetro-striato-1000-15-15-214691_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/bomboniera-in-vetro-striato-214691.htm",
    "larghezza_cm": 9,
    "profondita_cm": 9,
    "descrizione": "Bomboniera in vetro striato"
  },
  {
    "nome": "Hipop - Poltrona beige con gambe in acciaio dorato",
    "categoria": "Divani",
    "prezzo": 139,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltrona-beige-con-gambe-in-acciaio-dorato-1000-10-10-216080_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-beige-con-gambe-in-acciaio-dorato-hipop-216080.htm",
    "larghezza_cm": 71.5,
    "profondita_cm": 60,
    "descrizione": "Poltrona beige con gambe in acciaio dorato"
  },
  {
    "nome": "Neo Elementary - Modulo centrale per divano componibile grigio carbone",
    "categoria": "Divani",
    "prezzo": 499,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/modulo-centrale-per-divano-componibile-grigio-carbone-1000-9-39-242718_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/modulo-centrale-per-divano-componibile-grigio-carbone-neo-elementary-242718.htm",
    "larghezza_cm": 113,
    "profondita_cm": 113,
    "descrizione": "Modulo centrale per divano componibile grigio carbone"
  },
  {
    "nome": "Magda - Poltrona da tavolo in tessuto riciclato écru effetto lana bouclé",
    "categoria": "Poltrone",
    "prezzo": 100,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltrona-da-tavolo-in-tessuto-riciclato-ecru-effetto-lana-boucle-1000-16-5-238543_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-da-tavolo-in-tessuto-riciclato-ecru-effetto-lana-boucle-magda-238543.htm",
    "larghezza_cm": 61,
    "profondita_cm": 52,
    "descrizione": "Poltrona da tavolo in tessuto riciclato écru effetto lana bouclé"
  },
  {
    "nome": "Wayne - Madia a 2 ante in ferro e abete 100 cm",
    "categoria": "Credenze",
    "prezzo": 259,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/madia-a-2-ante-in-ferro-e-abete-100-cm-1000-12-10-196277_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/madia-a-2-ante-in-ferro-e-abete-100-cm-wayne-196277.htm",
    "larghezza_cm": 100,
    "profondita_cm": 42,
    "descrizione": "Madia a 2 ante in ferro e abete 100 cm"
  },
  {
    "nome": "Pillow - Letto contenitore in velluto a coste beige 160x200 cm con rete a doghe",
    "categoria": "Letti",
    "prezzo": 549,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/letto-contenitore-in-velluto-a-coste-beige-160x200-cm-con-rete-a-doghe-1000-12-27-245781_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/letto-contenitore-in-velluto-a-coste-beige-160x200-cm-con-rete-a-doghe-pillow-245781.htm",
    "larghezza_cm": 182,
    "profondita_cm": 216,
    "descrizione": "Letto contenitore in velluto a coste beige 160x200 cm con rete a doghe"
  },
  {
    "nome": "Tappeto beige in juta e cotone grigio antracite 160x230",
    "categoria": "Tappeti",
    "prezzo": 259,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tappeto-beige-in-juta-e-cotone-grigio-antracite-160x230-1000-7-9-210093_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tappeto-beige-in-juta-e-cotone-grigio-antracite-160x230-210093.htm",
    "larghezza_cm": 160,
    "profondita_cm": 0.6,
    "descrizione": "Tappeto beige in juta e cotone grigio antracite 160x230"
  },
  {
    "nome": "Cuscino in lino lavato bianco 60x60cm",
    "categoria": "Tessile",
    "prezzo": 35.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/cuscino-in-lino-lavato-bianco-60x60cm-1000-13-38-223529_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/cuscino-in-lino-lavato-bianco-60x60cm-223529.htm",
    "larghezza_cm": 60,
    "profondita_cm": 10,
    "descrizione": "Cuscino in lino lavato bianco 60x60cm"
  },
  {
    "nome": "Lotto di 2 - Ciotola in ceramica verde",
    "categoria": "Cucina",
    "prezzo": 9.98,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/ciotola-in-ceramica-verde-1000-16-23-216749_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/ciotola-in-ceramica-verde-216749.htm",
    "larghezza_cm": 11,
    "profondita_cm": 11,
    "descrizione": "Ciotola in ceramica verde"
  },
  {
    "nome": "Pauillac - Madia in abete riciclato 195 cm",
    "categoria": "Credenze",
    "prezzo": 1499,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/madia-in-abete-riciclato-195-cm-1000-1-36-146898_0.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/madia-in-abete-riciclato-195-cm-pauillac-146898.htm",
    "larghezza_cm": 195,
    "profondita_cm": 45,
    "descrizione": "Madia in abete riciclato 195 cm"
  },
  {
    "nome": "Nemo - Divano angolare con penisola a destra in velluto a coste verde scuro",
    "categoria": "Divani",
    "prezzo": 839.3,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-angolare-con-penisola-a-destra-in-velluto-a-coste-verde-scuro-1000-2-17-242983_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-angolare-con-penisola-a-destra-in-velluto-a-coste-verde-scuro-nemo-242983.htm",
    "larghezza_cm": 250,
    "profondita_cm": 166,
    "descrizione": "Divano angolare con penisola a destra in velluto a coste verde scuro"
  },
  {
    "nome": "Beaubourg - Poltrona marrone in cuoio effetto anticato e acciaio inossidabile",
    "categoria": "Divani",
    "prezzo": 799,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltrona-marrone-in-cuoio-effetto-anticato-e-acciaio-inossidabile-1000-1-30-249187_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-marrone-in-cuoio-effetto-anticato-e-acciaio-inossidabile-beaubourg-249187.htm",
    "larghezza_cm": 78,
    "profondita_cm": 86,
    "descrizione": "Poltrona marrone in cuoio effetto anticato e acciaio inossidabile"
  },
  {
    "nome": "Buddy - Bracciolo sinistro per divano componibile blu",
    "categoria": "Divani",
    "prezzo": 599,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/bracciolo-sinistro-per-divano-componibile-blu-1000-9-35-247716_9.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/bracciolo-sinistro-per-divano-componibile-blu-buddy-247716.htm",
    "larghezza_cm": 104,
    "profondita_cm": 92,
    "descrizione": "Bracciolo sinistro per divano componibile blu"
  },
  {
    "nome": "Selena - Comò con 3 cassetti color terracotta e metallo color ottone 83 cm",
    "categoria": "Cassettiere",
    "prezzo": 239.2,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/como-con-3-cassetti-color-terracotta-e-metallo-color-ottone-83-cm-1000-7-34-237752_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/como-con-3-cassetti-color-terracotta-e-metallo-color-ottone-83-cm-selena-237752.htm",
    "larghezza_cm": 82.5,
    "profondita_cm": 42,
    "descrizione": "Comò con 3 cassetti color terracotta e metallo color ottone 83 cm"
  },
  {
    "nome": "Beatrice - Letto in legno massello di pino bianco 160x200 cm",
    "categoria": "Letti",
    "prezzo": 559,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/letto-in-legno-massello-di-pino-bianco-160x200-cm-1000-13-39-187778_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/letto-in-legno-massello-di-pino-bianco-160x200-cm-beatrice-187778.htm",
    "larghezza_cm": 169,
    "profondita_cm": 218,
    "descrizione": "Letto in legno massello di pino bianco 160x200 cm"
  },
  {
    "nome": "Barcelone - Divano angolare destro trasformabile a 4/5 posti effetto lino stropicciato beige, materasso 6 cm",
    "categoria": "Divani",
    "prezzo": 1599,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-angolare-destro-trasformabile-a-4-5-posti-effetto-lino-stropicciato-beige-materasso-6-cm-1000-12-26-242500_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-angolare-destro-trasformabile-a-4-5-posti-effetto-lino-stropicciato-beige-materasso-6-cm-barcelone-242500.htm",
    "larghezza_cm": 300,
    "profondita_cm": 190,
    "descrizione": "Divano angolare destro trasformabile a 4/5 posti effetto lino stropicciato beige, materasso 6 cm"
  },
  {
    "nome": "Cebu - Base per poltrona sospesa in acciaio bianco",
    "categoria": "Poltrone",
    "prezzo": 139,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/base-per-poltrona-sospesa-in-acciaio-bianco-1000-1-32-245991_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/base-per-poltrona-sospesa-in-acciaio-bianco-cebu-245991.htm",
    "larghezza_cm": 104,
    "profondita_cm": 114,
    "descrizione": "Base per poltrona sospesa in acciaio bianco"
  },
  {
    "nome": "Barnaby - Modulo angolare destro per divano componibile verde kaki",
    "categoria": "Divani",
    "prezzo": 599,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/modulo-angolare-destro-per-divano-componibile-verde-kaki-1000-12-32-249640_4.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/modulo-angolare-destro-per-divano-componibile-verde-kaki-barnaby-249640.htm",
    "larghezza_cm": 119,
    "profondita_cm": 92,
    "descrizione": "Modulo angolare destro per divano componibile verde kaki"
  },
  {
    "nome": "Mauricette - Sedia scrivania a rotelle bouclé bianco e acciaio color ottone",
    "categoria": "Sedie",
    "prezzo": 99.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-scrivania-a-rotelle-boucle-bianco-e-acciaio-color-ottone-1000-1-2-215170_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-scrivania-a-rotelle-boucle-bianco-e-acciaio-color-ottone-mauricette-215170.htm",
    "larghezza_cm": 58,
    "profondita_cm": 58,
    "descrizione": "Sedia scrivania a rotelle bouclé bianco e acciaio color ottone"
  },
  {
    "nome": "Selena - Madia a 2 ante e 1 cassetti nero carbone 85 cm",
    "categoria": "Credenze",
    "prezzo": 249,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/madia-a-2-ante-e-1-cassetti-nero-carbone-85-cm-1000-6-33-237751_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/madia-a-2-ante-e-1-cassetti-nero-carbone-85-cm-selena-237751.htm",
    "larghezza_cm": 85,
    "profondita_cm": 42,
    "descrizione": "Madia a 2 ante e 1 cassetti nero carbone 85 cm"
  },
  {
    "nome": "Portobello - Letto in legno 140x190 cm con rete a doghe",
    "categoria": "Letti",
    "prezzo": 499,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/letto-in-legno-140x190-cm-con-rete-a-doghe-1000-3-11-248594_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/letto-in-legno-140x190-cm-con-rete-a-doghe-portobello-248594.htm",
    "larghezza_cm": 147,
    "profondita_cm": 191,
    "descrizione": "Letto in legno 140x190 cm con rete a doghe"
  },
  {
    "nome": "Lampada da terra in rattan con paralume conico alt. 149 cm",
    "categoria": "Lampade",
    "prezzo": 188.3,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/251096/lampada-da-terra-in-rattan-con-paralume-conico-alt-149-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/lampada-da-terra-in-rattan-con-paralume-conico-alt-149-cm-251096.htm",
    "larghezza_cm": 71,
    "profondita_cm": 71,
    "descrizione": "Lampada da terra in rattan con paralume conico alt. 149 cm"
  },
  {
    "nome": "Lotto di 6 - Bicchiere in vetro pressato",
    "categoria": "Cucina",
    "prezzo": 11.94,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/218280_1/bicchiere-in-vetro-pressato.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/bicchiere-in-vetro-pressato-218280.htm",
    "larghezza_cm": 8.5,
    "profondita_cm": 8.5,
    "descrizione": "Bicchiere in vetro pressato"
  },
  {
    "nome": "Servizio di 12 piatti in gres beige",
    "categoria": "Cucina",
    "prezzo": 89.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/servizio-di-12-piatti-in-gres-beige-1000-13-25-247788_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/servizio-di-12-piatti-in-gres-beige-247788.htm",
    "larghezza_cm": 7.2,
    "profondita_cm": 7.2,
    "descrizione": "Servizio di 12 piatti in gres beige"
  },
  {
    "nome": "Uvita - Set di 2 poltrone da giardino in resina riciclata e tavolino basso in acciaio verde",
    "categoria": "Poltrone",
    "prezzo": 199,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/set-di-2-poltrone-da-giardino-in-resina-riciclata-e-tavolino-basso-in-acciaio-verde-1000-14-9-238014_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/set-di-2-poltrone-da-giardino-in-resina-riciclata-e-tavolino-basso-in-acciaio-verde-uvita-238014.htm",
    "larghezza_cm": 58,
    "profondita_cm": 67,
    "descrizione": "Set di 2 poltrone da giardino in resina riciclata e tavolino basso in acciaio verde"
  },
  {
    "nome": "Lilo - Modulo centrale nuvola per divano componibile beige sabbia",
    "categoria": "Divani",
    "prezzo": 599,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/modulo-centrale-nuvola-per-divano-componibile-beige-sabbia-1000-12-1-249691_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/modulo-centrale-nuvola-per-divano-componibile-beige-sabbia-lilo-249691.htm",
    "larghezza_cm": 73,
    "profondita_cm": 102,
    "descrizione": "Modulo centrale nuvola per divano componibile beige sabbia"
  },
  {
    "nome": "Sweet - Cassettiera 3 cassetti verde chiaro 85cm",
    "categoria": "Cassettiere",
    "prezzo": 249,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/cassettiera-3-cassetti-verde-chiaro-85cm-1000-11-29-249350_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/cassettiera-3-cassetti-verde-chiaro-85cm-sweet-249350.htm",
    "larghezza_cm": 85,
    "profondita_cm": 52,
    "descrizione": "Cassettiera 3 cassetti verde chiaro 85cm"
  },
  {
    "nome": "Cushion - Letto contenitore beige in poliestere riciclato 140x190 cm con rete a doghe",
    "categoria": "Letti",
    "prezzo": 449,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/letto-contenitore-beige-in-poliestere-riciclato-140x190-cm-con-rete-a-doghe-1000-14-11-241788_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/letto-contenitore-beige-in-poliestere-riciclato-140x190-cm-con-rete-a-doghe-cushion-241788.htm",
    "larghezza_cm": 154,
    "profondita_cm": 210,
    "descrizione": "Letto contenitore beige in poliestere riciclato 140x190 cm con rete a doghe"
  },
  {
    "nome": "Stelo con rosa corallo artificiale",
    "categoria": "Altri mobili",
    "prezzo": 12.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/stelo-con-rosa-corallo-artificiale-1000-3-35-249274_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/stelo-con-rosa-corallo-artificiale-249274.htm",
    "larghezza_cm": 23,
    "profondita_cm": 23,
    "descrizione": "Stelo con rosa corallo artificiale"
  },
  {
    "nome": "Candela profumata in ceramica bianca con bordo dorato",
    "categoria": "Decorazioni",
    "prezzo": 39.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/candela-profumata-in-ceramica-bianca-con-bordo-dorato-1000-3-29-236558_3.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/candela-profumata-in-ceramica-bianca-con-bordo-dorato-236558.htm",
    "larghezza_cm": 20,
    "profondita_cm": 20,
    "descrizione": "Candela profumata in ceramica bianca con bordo dorato"
  },
  {
    "nome": "Swann - Tavolo da giardino per 6/10 persone in composito effetto teak larg. 170 cm con poltrone (x6) e sgabelli (x4) in resina nera",
    "categoria": "Poltrone",
    "prezzo": 1299,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tavolo-da-giardino-per-6-10-persone-in-composito-effetto-teak-larg-170-cm-con-poltrone-x6-e-sgabelli-x4-in-resina-nera-1000-11-2-219311_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tavolo-da-giardino-per-6-10-persone-in-composito-effetto-teak-larg-170-cm-con-poltrone-x6-e-sgabelli-x4-in-resina-nera-swann-219311.htm",
    "larghezza_cm": 169.5,
    "profondita_cm": 110,
    "descrizione": "Tavolo da giardino per 6/10 persone in composito effetto teak larg. 170 cm con poltrone (x6) e sgabelli (x4) in resina nera"
  },
  {
    "nome": "Barnaby - Modulo angolare sinistro per divano componibile verde kaki",
    "categoria": "Divani",
    "prezzo": 599,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/modulo-angolare-sinistro-per-divano-componibile-verde-kaki-1000-5-8-249616_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/modulo-angolare-sinistro-per-divano-componibile-verde-kaki-barnaby-249616.htm",
    "larghezza_cm": 119,
    "profondita_cm": 92,
    "descrizione": "Modulo angolare sinistro per divano componibile verde kaki"
  },
  {
    "nome": "Melio - Sedie da giardino in resina effetto rattan incannucciata e cuscino écru (x2)",
    "categoria": "Sedie",
    "prezzo": 181.3,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedie-da-giardino-in-resina-effetto-rattan-incannucciata-e-cuscino-ecru-x2-1000-8-14-237855_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedie-da-giardino-in-resina-effetto-rattan-incannucciata-e-cuscino-ecru-x2-melio-237855.htm",
    "larghezza_cm": 50,
    "profondita_cm": 57.5,
    "descrizione": "Sedie da giardino in resina effetto rattan incannucciata e cuscino écru (x2)"
  },
  {
    "nome": "Hyb - Materasso ibrido 160x200 cm",
    "categoria": "Letti",
    "prezzo": 499,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/materasso-ibrido-160x200-cm-1000-12-17-242942_7.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/materasso-ibrido-160x200-cm-hyb-242942.htm",
    "larghezza_cm": 160,
    "profondita_cm": 200,
    "descrizione": "Materasso ibrido 160x200 cm"
  },
  {
    "nome": "Chesterfield - Divano capitonné vintage a 4 posti in pelle marrone",
    "categoria": "Divani",
    "prezzo": 2299,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-capitonne-vintage-a-4-posti-in-pelle-marrone-1000-7-10-241951_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-capitonne-vintage-a-4-posti-in-pelle-marrone-chesterfield-241951.htm",
    "larghezza_cm": 240,
    "profondita_cm": 96,
    "descrizione": "Divano capitonné vintage a 4 posti in pelle marrone"
  },
  {
    "nome": "Lampada a sospensione in metallo bianco con paralume in lino e cotone beige",
    "categoria": "Lampade",
    "prezzo": 44.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/lampada-a-sospensione-in-metallo-bianco-con-paralume-in-lino-e-cotone-beige-1000-5-35-244108_2.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/lampada-a-sospensione-in-metallo-bianco-con-paralume-in-lino-e-cotone-beige-244108.htm",
    "larghezza_cm": 35,
    "profondita_cm": 35,
    "descrizione": "Lampada a sospensione in metallo bianco con paralume in lino e cotone beige"
  },
  {
    "nome": "Stelo di rosa bianca artificiale",
    "categoria": "Altri mobili",
    "prezzo": 12.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/stelo-di-rosa-bianca-artificiale-1000-2-34-249273_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/stelo-di-rosa-bianca-artificiale-249273.htm",
    "larghezza_cm": 23,
    "profondita_cm": 23,
    "descrizione": "Stelo di rosa bianca artificiale"
  },
  {
    "nome": "Pouf in giacinto d'acqua intrecciato",
    "categoria": "Divani",
    "prezzo": 39.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/pouf-in-giacinto-d-acqua-intrecciato-1000-1-16-139129_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/pouf-in-giacinto-d-acqua-intrecciato-139129.htm",
    "larghezza_cm": 40,
    "profondita_cm": 40,
    "descrizione": "Pouf in giacinto d'acqua intrecciato"
  },
  {
    "nome": "Lilo - Modulo centrale nuvola per divano componibile in bouclé écru",
    "categoria": "Divani",
    "prezzo": 479.2,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/modulo-centrale-nuvola-per-divano-componibile-in-boucle-ecru-1000-9-39-249688_2.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/modulo-centrale-nuvola-per-divano-componibile-in-boucle-ecru-lilo-249688.htm",
    "larghezza_cm": 73,
    "profondita_cm": 102,
    "descrizione": "Modulo centrale nuvola per divano componibile in bouclé écru"
  },
  {
    "nome": "Ginette - Sedia per isola centrale beige alt. 65 cm",
    "categoria": "Sedie",
    "prezzo": 119,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-per-isola-centrale-beige-alt-65-cm-1000-12-11-249742_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-per-isola-centrale-beige-alt-65-cm-ginette-249742.htm",
    "larghezza_cm": 47,
    "profondita_cm": 51,
    "descrizione": "Sedia per isola centrale beige alt. 65 cm"
  },
  {
    "nome": "Stockholm - Madia a 4 ante in legno massello di sheesham lung. 204 cm",
    "categoria": "Credenze",
    "prezzo": 1049,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/165702_0/madia-a-4-ante-in-legno-massello-di-sheesham-lung-204-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/madia-a-4-ante-in-legno-massello-di-sheesham-lung-204-cm-stockholm-165702.htm",
    "larghezza_cm": 204,
    "profondita_cm": 45,
    "descrizione": "Madia a 4 ante in legno massello di sheesham lung. 204 cm"
  },
  {
    "nome": "Michelle - Letto vintage in paglia di Vienna 160x200 cm con rete a doghe",
    "categoria": "Letti",
    "prezzo": 799,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/letto-vintage-in-paglia-di-vienna-160x200-cm-con-rete-a-doghe-1000-5-27-249922_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/letto-vintage-in-paglia-di-vienna-160x200-cm-con-rete-a-doghe-michelle-249922.htm",
    "larghezza_cm": 172,
    "profondita_cm": 208,
    "descrizione": "Letto vintage in paglia di Vienna 160x200 cm con rete a doghe"
  },
  {
    "nome": "Candela in vetro colorato beige e metallo dorato 200g",
    "categoria": "Decorazioni",
    "prezzo": 16.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/candela-in-vetro-colorato-beige-e-metallo-dorato-200g-1000-7-9-212184_2.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/candela-in-vetro-colorato-beige-e-metallo-dorato-200g-212184.htm",
    "larghezza_cm": 8,
    "profondita_cm": 8,
    "descrizione": "Candela in vetro colorato beige e metallo dorato 200g"
  },
  {
    "nome": "Buddy - Modulo terminale destro per divano componibile blu",
    "categoria": "Divani",
    "prezzo": 419.3,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/modulo-terminale-destro-per-divano-componibile-blu-1000-10-3-230054_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/modulo-terminale-destro-per-divano-componibile-blu-buddy-230054.htm",
    "larghezza_cm": 104,
    "profondita_cm": 91,
    "descrizione": "Modulo terminale destro per divano componibile blu"
  },
  {
    "nome": "Luna - Sedia da bar in velluto verde e acciaio nero H73",
    "categoria": "Sedie",
    "prezzo": 87.2,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-da-bar-in-velluto-verde-e-acciaio-nero-h73-1000-10-34-197941_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-da-bar-in-velluto-verde-e-acciaio-nero-h73-luna-197941.htm",
    "larghezza_cm": 49,
    "profondita_cm": 49,
    "descrizione": "Sedia da bar in velluto verde e acciaio nero H73"
  },
  {
    "nome": "Bull Middle - Materasso in memory foam 160x200",
    "categoria": "Letti",
    "prezzo": 379,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/materasso-in-memory-foam-160x200-1000-2-18-242779_8.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/materasso-in-memory-foam-160x200-bull-middle-242779.htm",
    "larghezza_cm": 160,
    "profondita_cm": 200,
    "descrizione": "Materasso in memory foam 160x200"
  },
  {
    "nome": "Ramo di ortensia artificiale rosa antico",
    "categoria": "Altri mobili",
    "prezzo": 9.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/ramo-di-ortensia-artificiale-rosa-antico-1000-3-12-211449_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/ramo-di-ortensia-artificiale-rosa-antico-211449.htm",
    "larghezza_cm": 26,
    "profondita_cm": 26,
    "descrizione": "Ramo di ortensia artificiale rosa antico"
  },
  {
    "nome": "Fjord - Madia 2 ante 3 cassetti tricolore 145 cm",
    "categoria": "Credenze",
    "prezzo": 329,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/madia-2-ante-3-cassetti-tricolore-145-cm-1000-6-7-249328_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/madia-2-ante-3-cassetti-tricolore-145-cm-fjord-249328.htm",
    "larghezza_cm": 145,
    "profondita_cm": 45,
    "descrizione": "Madia 2 ante 3 cassetti tricolore 145 cm"
  },
  {
    "nome": "Himalaya - Testata del letto 180 cm in legno massello di mango scolpito",
    "categoria": "Letti",
    "prezzo": 649,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/testata-del-letto-180-cm-in-legno-massello-di-mango-scolpito-1000-11-36-186586_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/testata-del-letto-180-cm-in-legno-massello-di-mango-scolpito-himalaya-186586.htm",
    "larghezza_cm": 180,
    "profondita_cm": 5,
    "descrizione": "Testata del letto 180 cm in legno massello di mango scolpito"
  },
  {
    "nome": "Cuscino nero in simil pelliccia 45x45 cm",
    "categoria": "Tessile",
    "prezzo": 19.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/cuscino-nero-in-simil-pelliccia-45x45-cm-1000-16-32-235126_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/cuscino-nero-in-simil-pelliccia-45x45-cm-235126.htm",
    "larghezza_cm": 45,
    "profondita_cm": 10,
    "descrizione": "Cuscino nero in simil pelliccia 45x45 cm"
  },
  {
    "nome": "Barnaby - Modulo angolare sinistro per divano componibile grigio chiaro chiné",
    "categoria": "Divani",
    "prezzo": 599,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/modulo-angolare-sinistro-per-divano-componibile-grigio-chiaro-chine-1000-16-36-249644_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/modulo-angolare-sinistro-per-divano-componibile-grigio-chiaro-chine-barnaby-249644.htm",
    "larghezza_cm": 119,
    "profondita_cm": 92,
    "descrizione": "Modulo angolare sinistro per divano componibile grigio chiaro chiné"
  },
  {
    "nome": "Pouf in tessuto bouclé écru",
    "categoria": "Divani",
    "prezzo": 59.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/pouf-in-tessuto-boucle-ecru-1000-6-4-236697_3.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/pouf-in-tessuto-boucle-ecru-236697.htm",
    "larghezza_cm": 40,
    "profondita_cm": 33,
    "descrizione": "Pouf in tessuto bouclé écru"
  },
  {
    "nome": "Ginette - Sedia per isola centrale in velluto nero alt. 65 cm",
    "categoria": "Sedie",
    "prezzo": 119,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-per-isola-centrale-in-velluto-nero-alt-65-cm-1000-11-10-249741_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-per-isola-centrale-in-velluto-nero-alt-65-cm-ginette-249741.htm",
    "larghezza_cm": 47,
    "profondita_cm": 51,
    "descrizione": "Sedia per isola centrale in velluto nero alt. 65 cm"
  },
  {
    "nome": "Versailles - Comò doppio 6 cassetti nera 200 cm",
    "categoria": "Cassettiere",
    "prezzo": 1299,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/como-doppio-6-cassetti-nera-200-cm-1000-6-8-138998_3.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/como-doppio-6-cassetti-nera-200-cm-versailles-138998.htm",
    "larghezza_cm": 200,
    "profondita_cm": 48,
    "descrizione": "Comò doppio 6 cassetti nera 200 cm"
  },
  {
    "nome": "Cezembre - Letto in legno massello di mango bianco 160x200 cm",
    "categoria": "Letti",
    "prezzo": 1069,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/letto-in-legno-massello-di-mango-bianco-160x200-cm-1000-6-21-176075_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/letto-in-legno-massello-di-mango-bianco-160x200-cm-cezembre-176075.htm",
    "larghezza_cm": 177,
    "profondita_cm": 215,
    "descrizione": "Letto in legno massello di mango bianco 160x200 cm"
  },
  {
    "nome": "Tappeto shaggy color avorio in pelle di pecora 110 x 180 cm",
    "categoria": "Tappeti",
    "prezzo": 230.3,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tappeto-shaggy-color-avorio-in-pelle-di-pecora-110-x-180-cm-1000-5-36-156779_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tappeto-shaggy-color-avorio-in-pelle-di-pecora-110-x-180-cm-156779.htm",
    "larghezza_cm": 110,
    "profondita_cm": 2,
    "descrizione": "Tappeto shaggy color avorio in pelle di pecora 110 x 180 cm"
  },
  {
    "nome": "Set di 2 decorazioni da parete uccello e vaso in ceramica bianca 15x16 cm",
    "categoria": "Decorazioni",
    "prezzo": 14.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/set-di-2-decorazioni-da-parete-uccello-e-vaso-in-ceramica-bianca-15x16-cm-1000-8-31-248327_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/set-di-2-decorazioni-da-parete-uccello-e-vaso-in-ceramica-bianca-15x16-cm-248327.htm",
    "larghezza_cm": 15,
    "profondita_cm": 6.5,
    "descrizione": "Set di 2 decorazioni da parete uccello e vaso in ceramica bianca 15x16 cm"
  },
  {
    "nome": "Clyde - Sedia in stile scandinavo grigio antracite H66",
    "categoria": "Sedie",
    "prezzo": 79.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-in-stile-scandinavo-grigio-antracite-h66-1000-11-36-209587_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-in-stile-scandinavo-grigio-antracite-h66-clyde-209587.htm",
    "larghezza_cm": 33,
    "profondita_cm": 48.5,
    "descrizione": "Sedia in stile scandinavo grigio antracite H66"
  },
  {
    "nome": "Penelope - Cassettiera con 6 cassetti blu scuro",
    "categoria": "Cassettiere",
    "prezzo": 139.3,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/cassettiera-con-6-cassetti-blu-scuro-1000-2-19-216089_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/cassettiera-con-6-cassetti-blu-scuro-penelope-216089.htm",
    "larghezza_cm": 50,
    "profondita_cm": 35,
    "descrizione": "Cassettiera con 6 cassetti blu scuro"
  },
  {
    "nome": "Kerala - Testata letto 160 cm scolpita in legno massello di mango, bianca",
    "categoria": "Letti",
    "prezzo": 599,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/testata-letto-160-cm-scolpita-in-legno-massello-di-mango-bianca-1000-0-10-129693_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/testata-letto-160-cm-scolpita-in-legno-massello-di-mango-bianca-kerala-129693.htm",
    "larghezza_cm": 160,
    "profondita_cm": 5,
    "descrizione": "Testata letto 160 cm scolpita in legno massello di mango, bianca"
  },
  {
    "nome": "Luna - Sedia da bar in velluto e acciaio nero H73",
    "categoria": "Sedie",
    "prezzo": 109,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-da-bar-in-velluto-e-acciaio-nero-h73-1000-11-35-197942_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-da-bar-in-velluto-e-acciaio-nero-h73-luna-197942.htm",
    "larghezza_cm": 49,
    "profondita_cm": 49,
    "descrizione": "Sedia da bar in velluto e acciaio nero H73"
  },
  {
    "nome": "Sweet - Cassettiera compatibile con piano fasciatoio a 3 cassetti verde 85cm",
    "categoria": "Cassettiere",
    "prezzo": 249,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/cassettiera-compatibile-con-piano-fasciatoio-a-3-cassetti-verde-85cm-1000-11-30-205932_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/cassettiera-compatibile-con-piano-fasciatoio-a-3-cassetti-verde-85cm-sweet-205932.htm",
    "larghezza_cm": 85,
    "profondita_cm": 42,
    "descrizione": "Cassettiera compatibile con piano fasciatoio a 3 cassetti verde 85cm"
  },
  {
    "nome": "Tenda con occhielli in velluto di cotone verde smeraldo, al pezzo, 140x300 cm",
    "categoria": "Tessile",
    "prezzo": 129,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tenda-con-occhielli-in-velluto-di-cotone-verde-smeraldo-al-pezzo-140x300-cm-1000-1-21-235689_2.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tenda-con-occhielli-in-velluto-di-cotone-verde-smeraldo-al-pezzo-140x300-cm-235689.htm",
    "larghezza_cm": 140,
    "profondita_cm": 0.5,
    "descrizione": "Tenda con occhielli in velluto di cotone verde smeraldo, al pezzo, 140x300 cm"
  },
  {
    "nome": "Barnaby - Modulo angolare destro per divano componibile grigio chiaro chiné",
    "categoria": "Divani",
    "prezzo": 599,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/modulo-angolare-destro-per-divano-componibile-grigio-chiaro-chine-1000-0-20-249628_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/modulo-angolare-destro-per-divano-componibile-grigio-chiaro-chine-barnaby-249628.htm",
    "larghezza_cm": 119,
    "profondita_cm": 92,
    "descrizione": "Modulo angolare destro per divano componibile grigio chiaro chiné"
  },
  {
    "nome": "Huppy - Sedia da bar in acciaio dorato e bianca H76",
    "categoria": "Sedie",
    "prezzo": 129,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-da-bar-in-acciaio-dorato-e-bianca-h76-1000-10-40-199505_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-da-bar-in-acciaio-dorato-e-bianca-h76-huppy-199505.htm",
    "larghezza_cm": 45.8,
    "profondita_cm": 51,
    "descrizione": "Sedia da bar in acciaio dorato e bianca H76"
  },
  {
    "nome": "Cavaillon - Madia 3 ante e 3 cassetti lung. 130 cm",
    "categoria": "Credenze",
    "prezzo": 499,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/madia-3-ante-e-3-cassetti-lung-130-cm-1000-4-11-250193_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/madia-3-ante-e-3-cassetti-lung-130-cm-cavaillon-250193.htm",
    "larghezza_cm": 130,
    "profondita_cm": 40,
    "descrizione": "Madia 3 ante e 3 cassetti lung. 130 cm"
  },
  {
    "nome": "Set di 2 sommier in tessuto tramto beige 80x200 cm",
    "categoria": "Letti",
    "prezzo": 449,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/set-di-2-sommier-in-tessuto-tramto-beige-80x200-cm-1000-9-24-247172_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/set-di-2-sommier-in-tessuto-tramto-beige-80x200-cm-247172.htm",
    "larghezza_cm": 80,
    "profondita_cm": 200,
    "descrizione": "Set di 2 sommier in tessuto tramto beige 80x200 cm"
  },
  {
    "nome": "Babel - Divano 2 posti beige",
    "categoria": "Divani",
    "prezzo": 419.3,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-2-posti-beige-1000-15-17-247042_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-2-posti-beige-babel-247042.htm",
    "larghezza_cm": 180,
    "profondita_cm": 89,
    "descrizione": "Divano 2 posti beige"
  },
  {
    "nome": "Pesaro Business - Modulo chaise longue per divano componibile professionale in tessuto riciclato beige",
    "categoria": "Divani",
    "prezzo": 200,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/modulo-chaise-longue-per-divano-componibile-professionale-in-tessuto-riciclato-beige-1000-4-25-239670_3.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/modulo-chaise-longue-per-divano-componibile-professionale-in-tessuto-riciclato-beige-pesaro-business-239670.htm",
    "larghezza_cm": 123,
    "profondita_cm": 89,
    "descrizione": "Modulo chaise longue per divano componibile professionale in tessuto riciclato beige"
  },
  {
    "nome": "Split - Sedia a sdraio in acciaio e tela plastificata grigio antracite",
    "categoria": "Sedie",
    "prezzo": 79.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-a-sdraio-in-acciaio-e-tela-plastificata-grigio-antracite-1000-2-17-130766_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-a-sdraio-in-acciaio-e-tela-plastificata-grigio-antracite-split-130766.htm",
    "larghezza_cm": 63,
    "profondita_cm": 105,
    "descrizione": "Sedia a sdraio in acciaio e tela plastificata grigio antracite"
  },
  {
    "nome": "Tarifa - Madia a 2 ante color terracotta in rattan lung. 100 cm",
    "categoria": "Credenze",
    "prezzo": 299,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/madia-a-2-ante-color-terracotta-in-rattan-lung-100-cm-1000-0-22-248523_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/madia-a-2-ante-color-terracotta-in-rattan-lung-100-cm-tarifa-248523.htm",
    "larghezza_cm": 100,
    "profondita_cm": 45,
    "descrizione": "Madia a 2 ante color terracotta in rattan lung. 100 cm"
  },
  {
    "nome": "Bayma - Divano 3/4 posti in tessuto marrone",
    "categoria": "Divani",
    "prezzo": 1399,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-3-4-posti-in-tessuto-marrone-1000-7-31-246728_2.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-3-4-posti-in-tessuto-marrone-bayma-246728.htm",
    "larghezza_cm": 226,
    "profondita_cm": 124,
    "descrizione": "Divano 3/4 posti in tessuto marrone"
  },
  {
    "nome": "Lilo - Modulo centrale nuvola per divano componibile grigio chiaro",
    "categoria": "Divani",
    "prezzo": 599,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/modulo-centrale-nuvola-per-divano-componibile-grigio-chiaro-1000-11-0-249690_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/modulo-centrale-nuvola-per-divano-componibile-grigio-chiaro-lilo-249690.htm",
    "larghezza_cm": 73,
    "profondita_cm": 102,
    "descrizione": "Modulo centrale nuvola per divano componibile grigio chiaro"
  },
  {
    "nome": "Pouf contenitore in tessuto bouclé azzurro",
    "categoria": "Divani",
    "prezzo": 39.99,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/253132/pouf-contenitore-in-tessuto-boucle-azzurro.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/pouf-contenitore-in-tessuto-boucle-azzurro-253132.htm",
    "larghezza_cm": 41,
    "profondita_cm": 41,
    "descrizione": "Pouf contenitore in tessuto bouclé azzurro"
  },
  {
    "nome": "Bristol - Sedia da ufficio con ruote rosa",
    "categoria": "Sedie",
    "prezzo": 69.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-da-ufficio-con-ruote-rosa-1000-13-9-192504_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-da-ufficio-con-ruote-rosa-bristol-192504.htm",
    "larghezza_cm": 57,
    "profondita_cm": 57,
    "descrizione": "Sedia da ufficio con ruote rosa"
  },
  {
    "nome": "Fjord - Comò a 3 cassetti tricolore 90 cm",
    "categoria": "Cassettiere",
    "prezzo": 269,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/como-a-3-cassetti-tricolore-90-cm-1000-15-37-245750_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/como-a-3-cassetti-tricolore-90-cm-fjord-245750.htm",
    "larghezza_cm": 90.4,
    "profondita_cm": 45,
    "descrizione": "Comò a 3 cassetti tricolore 90 cm"
  },
  {
    "nome": "Hyb - Materasso ibrido 180x200 cm",
    "categoria": "Letti",
    "prezzo": 599,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/materasso-ibrido-180x200-cm-1000-13-18-242943_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/materasso-ibrido-180x200-cm-hyb-242943.htm",
    "larghezza_cm": 180,
    "profondita_cm": 200,
    "descrizione": "Materasso ibrido 180x200 cm"
  },
  {
    "nome": "Barcelone - Divano angolare con penisola a destra 6 posti in lino blu celadon",
    "categoria": "Divani",
    "prezzo": 1799,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-angolare-con-penisola-a-destra-6-posti-in-lino-blu-celadon-1000-14-28-242502_5.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-angolare-con-penisola-a-destra-6-posti-in-lino-blu-celadon-barcelone-242502.htm",
    "larghezza_cm": 300,
    "profondita_cm": 190,
    "descrizione": "Divano angolare con penisola a destra 6 posti in lino blu celadon"
  },
  {
    "nome": "Lilo - Modulo centrale nuvola per divano componibile in bouclé blu notte",
    "categoria": "Divani",
    "prezzo": 599,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/modulo-centrale-nuvola-per-divano-componibile-in-boucle-blu-notte-1000-10-40-249689_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/modulo-centrale-nuvola-per-divano-componibile-in-boucle-blu-notte-lilo-249689.htm",
    "larghezza_cm": 73,
    "profondita_cm": 102,
    "descrizione": "Modulo centrale nuvola per divano componibile in bouclé blu notte"
  },
  {
    "nome": "Bristol - Sedia da ufficio a rotelle bianca",
    "categoria": "Sedie",
    "prezzo": 69.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-da-ufficio-a-rotelle-bianca-1000-10-27-129669_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-da-ufficio-a-rotelle-bianca-bristol-129669.htm",
    "larghezza_cm": 48,
    "profondita_cm": 55,
    "descrizione": "Sedia da ufficio a rotelle bianca"
  },
  {
    "nome": "Fjord - Madia vintage a 2 ante e 3 cassetti 145 cm",
    "categoria": "Credenze",
    "prezzo": 100,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/madia-vintage-a-2-ante-e-3-cassetti-145-cm-1000-4-33-139064_12.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/madia-vintage-a-2-ante-e-3-cassetti-145-cm-fjord-139064.htm",
    "larghezza_cm": 145,
    "profondita_cm": 45,
    "descrizione": "Madia vintage a 2 ante e 3 cassetti 145 cm"
  },
  {
    "nome": "Bull Middle - Materasso in memory foam 140x190",
    "categoria": "Letti",
    "prezzo": 329,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/materasso-in-memory-foam-140x190-1000-1-17-242778_8.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/materasso-in-memory-foam-140x190-bull-middle-242778.htm",
    "larghezza_cm": 140,
    "profondita_cm": 190,
    "descrizione": "Materasso in memory foam 140x190"
  },
  {
    "nome": "Virgile - Modulo terminale destro per divano écru",
    "categoria": "Divani",
    "prezzo": 539,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/modulo-terminale-destro-per-divano-ecru-1000-2-12-241912_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/modulo-terminale-destro-per-divano-ecru-virgile-241912.htm",
    "larghezza_cm": 89,
    "profondita_cm": 97,
    "descrizione": "Modulo terminale destro per divano écru"
  },
  {
    "nome": "Sigmund - Sedia da scrivania in pelle bovina imbottita marrone con rotelle",
    "categoria": "Sedie",
    "prezzo": 399,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/252507/sedia-da-scrivania-in-pelle-bovina-imbottita-marrone-con-rotelle.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-da-scrivania-in-pelle-bovina-imbottita-marrone-con-rotelle-sigmund-252507.htm",
    "larghezza_cm": 62.5,
    "profondita_cm": 72,
    "descrizione": "Sedia da scrivania in pelle bovina imbottita marrone con rotelle"
  },
  {
    "nome": "Newport - Madia 4 ante e 2 cassetti bianca 200 cm",
    "categoria": "Credenze",
    "prezzo": 689,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/madia-4-ante-e-2-cassetti-bianca-200-cm-1000-3-25-248526_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/madia-4-ante-e-2-cassetti-bianca-200-cm-newport-248526.htm",
    "larghezza_cm": 200,
    "profondita_cm": 47,
    "descrizione": "Madia 4 ante e 2 cassetti bianca 200 cm"
  },
  {
    "nome": "Pump Middle - Materasso a molle insacchettate 180x200 cm",
    "categoria": "Letti",
    "prezzo": 499,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/materasso-a-molle-insacchettate-180x200-cm-1000-8-7-242768_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/materasso-a-molle-insacchettate-180x200-cm-pump-middle-242768.htm",
    "larghezza_cm": 180,
    "profondita_cm": 200,
    "descrizione": "Materasso a molle insacchettate 180x200 cm"
  },
  {
    "nome": "Tappeto in cotone écru con bordo ondulato 160x230 cm",
    "categoria": "Tappeti",
    "prezzo": 129.5,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tappeto-in-cotone-ecru-con-bordo-ondulato-160x230-cm-1000-1-20-244257_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tappeto-in-cotone-ecru-con-bordo-ondulato-160x230-cm-244257.htm",
    "larghezza_cm": 160,
    "profondita_cm": 59,
    "descrizione": "Tappeto in cotone écru con bordo ondulato 160x230 cm"
  },
  {
    "nome": "Lampada a sospensione in poliestere riciclato bordeaux e barra portante in acciaio dorato",
    "categoria": "Lampade",
    "prezzo": 174.3,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/251106/lampada-a-sospensione-in-poliestere-riciclato-bordeaux-e-barra-portante-in-acciaio-dorato.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/lampada-a-sospensione-in-poliestere-riciclato-bordeaux-e-barra-portante-in-acciaio-dorato-251106.htm",
    "larghezza_cm": 90,
    "profondita_cm": 59,
    "descrizione": "Lampada a sospensione in poliestere riciclato bordeaux e barra portante in acciaio dorato"
  },
  {
    "nome": "Kate - Sedia da scrivania girevole in tessuto bouclé bianco",
    "categoria": "Sedie",
    "prezzo": 149,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-da-scrivania-girevole-in-tessuto-boucle-bianco-1000-16-7-218619_2.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-da-scrivania-girevole-in-tessuto-boucle-bianco-kate-218619.htm",
    "larghezza_cm": 56,
    "profondita_cm": 54,
    "descrizione": "Sedia da scrivania girevole in tessuto bouclé bianco"
  },
  {
    "nome": "Newport - Madia bianco opaco con vetrine in legno L 163 cm",
    "categoria": "Credenze",
    "prezzo": 293.3,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/madia-bianco-opaco-con-vetrine-in-legno-l-163-cm-1000-13-40-129723_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/madia-bianco-opaco-con-vetrine-in-legno-l-163-cm-newport-129723.htm",
    "larghezza_cm": 163,
    "profondita_cm": 47,
    "descrizione": "Madia bianco opaco con vetrine in legno L 163 cm"
  },
  {
    "nome": "Omni - Letto con 4 cassetti in legno 170x200 cm con rete a doghe",
    "categoria": "Letti",
    "prezzo": 454.3,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/letto-con-4-cassetti-in-legno-170x200-cm-con-rete-a-doghe-1000-0-39-219963_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/letto-con-4-cassetti-in-legno-170x200-cm-con-rete-a-doghe-omni-219963.htm",
    "larghezza_cm": 170,
    "profondita_cm": 207.4,
    "descrizione": "Letto con 4 cassetti in legno 170x200 cm con rete a doghe"
  },
  {
    "nome": "Chesterfield - Divano capitonné 4 posti in pelle nera",
    "categoria": "Divani",
    "prezzo": 1999,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-capitonne-4-posti-in-pelle-nera-1000-1-11-232850_3.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-capitonne-4-posti-in-pelle-nera-chesterfield-232850.htm",
    "larghezza_cm": 240,
    "profondita_cm": 96,
    "descrizione": "Divano capitonné 4 posti in pelle nera"
  },
  {
    "nome": "Barnaby - Modulo chaise longue sinistro per divano componibile verde kaki",
    "categoria": "Divani",
    "prezzo": 639.2,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/modulo-chaise-longue-sinistro-per-divano-componibile-verde-kaki-1000-2-39-249647_4.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/modulo-chaise-longue-sinistro-per-divano-componibile-verde-kaki-barnaby-249647.htm",
    "larghezza_cm": 120,
    "profondita_cm": 171.5,
    "descrizione": "Modulo chaise longue sinistro per divano componibile verde kaki"
  },
  {
    "nome": "Mauricette - Sedia vintage celeste con stampa limoni",
    "categoria": "Sedie",
    "prezzo": 55.95,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-vintage-celeste-con-stampa-limoni-1000-3-11-243018_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-vintage-celeste-con-stampa-limoni-mauricette-243018.htm",
    "larghezza_cm": 50,
    "profondita_cm": 50,
    "descrizione": "Sedia vintage celeste con stampa limoni"
  },
  {
    "nome": "Lampada a sospensione petali di fiore beige",
    "categoria": "Lampade",
    "prezzo": 79.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/lampada-a-sospensione-petali-di-fiore-beige-1000-14-13-234410_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/lampada-a-sospensione-petali-di-fiore-beige-234410.htm",
    "larghezza_cm": 63,
    "profondita_cm": 63,
    "descrizione": "Lampada a sospensione petali di fiore beige"
  },
  {
    "nome": "Decorazione murale in foglia d'acciaio dorata, 45x45 cm",
    "categoria": "Decorazioni",
    "prezzo": 19.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/decorazione-murale-in-foglia-d-acciaio-dorata-45x45-cm-1000-11-6-182948_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/decorazione-murale-in-foglia-d-acciaio-dorata-45x45-cm-182948.htm",
    "larghezza_cm": 45,
    "profondita_cm": 3,
    "descrizione": "Decorazione murale in foglia d'acciaio dorata, 45x45 cm"
  },
  {
    "nome": "Lotto di 6 - Calice in vetro alt. 23 cm",
    "categoria": "Cucina",
    "prezzo": 23.94,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/calice-in-vetro-alt-23-cm-1000-13-22-215641_2.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/calice-in-vetro-alt-23-cm-215641.htm",
    "larghezza_cm": 8,
    "profondita_cm": 8,
    "descrizione": "Calice in vetro alt. 23 cm"
  },
  {
    "nome": "Lotto di 4 - Piatti piani blu in ceramica",
    "categoria": "Cucina",
    "prezzo": 31.96,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/piatti-piani-blu-in-ceramica-1000-8-4-230137_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/piatti-piani-blu-in-ceramica-230137.htm",
    "larghezza_cm": 26.5,
    "profondita_cm": 26.5,
    "descrizione": "Piatti piani blu in ceramica"
  },
  {
    "nome": "Lotto di 2 - Tovaglietta rotonda in fibra vegetale intrecciata D38",
    "categoria": "Cucina",
    "prezzo": 11.98,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tovaglietta-rotonda-in-fibra-vegetale-intrecciata-d38-1000-6-31-190066_4.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tovaglietta-rotonda-in-fibra-vegetale-intrecciata-d38-190066.htm",
    "larghezza_cm": 38,
    "profondita_cm": 38,
    "descrizione": "Tovaglietta rotonda in fibra vegetale intrecciata D38"
  },
  {
    "nome": "Himalaya - Testata del letto 160 cm scolpita in massello di mango",
    "categoria": "Letti",
    "prezzo": 599,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/testata-del-letto-160-cm-scolpita-in-massello-di-mango-1000-0-29-146727_0.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/testata-del-letto-160-cm-scolpita-in-massello-di-mango-himalaya-146727.htm",
    "larghezza_cm": 160,
    "profondita_cm": 5,
    "descrizione": "Testata del letto 160 cm scolpita in massello di mango"
  },
  {
    "nome": "Barnaby - Modulo centrale 2 posti per divano componibile verde kaki",
    "categoria": "Divani",
    "prezzo": 479.2,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/modulo-centrale-2-posti-per-divano-componibile-verde-kaki-1000-3-23-249631_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/modulo-centrale-2-posti-per-divano-componibile-verde-kaki-barnaby-249631.htm",
    "larghezza_cm": 115,
    "profondita_cm": 92,
    "descrizione": "Modulo centrale 2 posti per divano componibile verde kaki"
  },
  {
    "nome": "Boavista - Sedia da giardino in resina riciclata beige e acciaio nero",
    "categoria": "Sedie",
    "prezzo": 69.99,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/246073_0/sedia-da-giardino-in-resina-riciclata-beige-e-acciaio-nero.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-da-giardino-in-resina-riciclata-beige-e-acciaio-nero-boavista-246073.htm",
    "larghezza_cm": 53,
    "profondita_cm": 56,
    "descrizione": "Sedia da giardino in resina riciclata beige e acciaio nero"
  },
  {
    "nome": "Dabali - Madia a 2 ante verde scuro e rattan intrecciato 115 cm",
    "categoria": "Credenze",
    "prezzo": 200,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/madia-a-2-ante-verde-scuro-e-rattan-intrecciato-115-cm-1000-12-18-238556_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/madia-a-2-ante-verde-scuro-e-rattan-intrecciato-115-cm-dabali-238556.htm",
    "larghezza_cm": 115,
    "profondita_cm": 48,
    "descrizione": "Madia a 2 ante verde scuro e rattan intrecciato 115 cm"
  },
  {
    "nome": "Lomboque - Testata letto in rattan 160 cm",
    "categoria": "Letti",
    "prezzo": 199,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/testata-letto-in-rattan-160-cm-1000-10-38-241733_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/testata-letto-in-rattan-160-cm-lomboque-241733.htm",
    "larghezza_cm": 165,
    "profondita_cm": 3,
    "descrizione": "Testata letto in rattan 160 cm"
  },
  {
    "nome": "Decorazione murale a forma di pesce in acciaio verde, 81x38 cm",
    "categoria": "Decorazioni",
    "prezzo": 64.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/decorazione-murale-a-forma-di-pesce-in-acciaio-verde-81x38-cm-1000-9-6-178356_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/decorazione-murale-a-forma-di-pesce-in-acciaio-verde-81x38-cm-178356.htm",
    "larghezza_cm": 81,
    "profondita_cm": 3,
    "descrizione": "Decorazione murale a forma di pesce in acciaio verde, 81x38 cm"
  },
  {
    "nome": "Barnaby - Modulo centrale 2 posti per divano componibile grigio chiaro chiné",
    "categoria": "Divani",
    "prezzo": 479.2,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/modulo-centrale-2-posti-per-divano-componibile-grigio-chiaro-chine-1000-3-6-249614_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/modulo-centrale-2-posti-per-divano-componibile-grigio-chiaro-chine-barnaby-249614.htm",
    "larghezza_cm": 115,
    "profondita_cm": 92,
    "descrizione": "Modulo centrale 2 posti per divano componibile grigio chiaro chiné"
  },
  {
    "nome": "Rosalie - Sedia da scrivania regolabile con rotelle in velluto verde e paglia di Vienna",
    "categoria": "Sedie",
    "prezzo": 199,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/234421_0/sedia-da-scrivania-regolabile-con-rotelle-in-velluto-verde-e-paglia-di-vienna.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-da-scrivania-regolabile-con-rotelle-in-velluto-verde-e-paglia-di-vienna-rosalie-234421.htm",
    "larghezza_cm": 56,
    "profondita_cm": 56,
    "descrizione": "Sedia da scrivania regolabile con rotelle in velluto verde e paglia di Vienna"
  },
  {
    "nome": "Quadrillo - Console bianca con piastrelle in rilievo",
    "categoria": "Cassettiere",
    "prezzo": 174.3,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/console-bianca-con-piastrelle-in-rilievo-1000-6-9-238465_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/console-bianca-con-piastrelle-in-rilievo-quadrillo-238465.htm",
    "larghezza_cm": 90,
    "profondita_cm": 30,
    "descrizione": "Console bianca con piastrelle in rilievo"
  },
  {
    "nome": "Barcelone - Divano a 3/4 posti in lino superiore bianco",
    "categoria": "Divani",
    "prezzo": 1599,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-a-3-4-posti-in-lino-superiore-bianco-1000-2-20-242371_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-a-3-4-posti-in-lino-superiore-bianco-barcelone-242371.htm",
    "larghezza_cm": 207,
    "profondita_cm": 90,
    "descrizione": "Divano a 3/4 posti in lino superiore bianco"
  },
  {
    "nome": "Flake - Modulo centrale 1 posto per divano componibile in tessuto écru effetto lana bouclé",
    "categoria": "Divani",
    "prezzo": 479,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/modulo-centrale-1-posto-per-divano-componibile-in-tessuto-ecru-effetto-lana-boucle-1000-9-2-241902_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/modulo-centrale-1-posto-per-divano-componibile-in-tessuto-ecru-effetto-lana-boucle-flake-241902.htm",
    "larghezza_cm": 92,
    "profondita_cm": 102,
    "descrizione": "Modulo centrale 1 posto per divano componibile in tessuto écru effetto lana bouclé"
  },
  {
    "nome": "Lilo - Pouf color sabbia",
    "categoria": "Divani",
    "prezzo": 399,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/238463_0/pouf-color-sabbia.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/pouf-color-sabbia-lilo-238463.htm",
    "larghezza_cm": 100,
    "profondita_cm": 77,
    "descrizione": "Pouf color sabbia"
  },
  {
    "nome": "Jeannette - Madia a 3 ante e 2 cassetti verde grigio e verde cedro 180 cm",
    "categoria": "Credenze",
    "prezzo": 399,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/madia-a-3-ante-e-2-cassetti-verde-grigio-e-verde-cedro-180-cm-1000-9-13-234779_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/madia-a-3-ante-e-2-cassetti-verde-grigio-e-verde-cedro-180-cm-jeannette-234779.htm",
    "larghezza_cm": 180,
    "profondita_cm": 45,
    "descrizione": "Madia a 3 ante e 2 cassetti verde grigio e verde cedro 180 cm"
  },
  {
    "nome": "Lucien - Materasso a molle insacchettate 90x200 cm",
    "categoria": "Letti",
    "prezzo": 100,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/materasso-a-molle-insacchettate-90x200-cm-1000-8-20-173901_4.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/materasso-a-molle-insacchettate-90x200-cm-lucien-173901.htm",
    "larghezza_cm": 90,
    "profondita_cm": 200,
    "descrizione": "Materasso a molle insacchettate 90x200 cm"
  },
  {
    "nome": "Barcelone - Divano a 3/4 posti in lino superiore beige",
    "categoria": "Divani",
    "prezzo": 1599,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-a-3-4-posti-in-lino-superiore-beige-1000-4-36-242305_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-a-3-4-posti-in-lino-superiore-beige-barcelone-242305.htm",
    "larghezza_cm": 207,
    "profondita_cm": 90,
    "descrizione": "Divano a 3/4 posti in lino superiore beige"
  },
  {
    "nome": "Flake - Modulo chaise longue sinistra per divano componibile in tessuto écru effetto lana bouclé",
    "categoria": "Divani",
    "prezzo": 899,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/modulo-chaise-longue-sinistra-per-divano-componibile-in-tessuto-ecru-effetto-lana-boucle-1000-11-4-241904_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/modulo-chaise-longue-sinistra-per-divano-componibile-in-tessuto-ecru-effetto-lana-boucle-flake-241904.htm",
    "larghezza_cm": 174,
    "profondita_cm": 102,
    "descrizione": "Modulo chaise longue sinistra per divano componibile in tessuto écru effetto lana bouclé"
  },
  {
    "nome": "Belleville - Sedia da giardino in acciaio grigio antracite",
    "categoria": "Sedie",
    "prezzo": 59.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-da-giardino-in-acciaio-grigio-antracite-1000-3-4-245840_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-da-giardino-in-acciaio-grigio-antracite-belleville-245840.htm",
    "larghezza_cm": 46,
    "profondita_cm": 63.5,
    "descrizione": "Sedia da giardino in acciaio grigio antracite"
  },
  {
    "nome": "Loreto - Comò con 3 cassetti bicolore in paglia di Vienna 95 cm",
    "categoria": "Cassettiere",
    "prezzo": 419.3,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/como-con-3-cassetti-bicolore-in-paglia-di-vienna-95-cm-1000-4-34-230864_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/como-con-3-cassetti-bicolore-in-paglia-di-vienna-95-cm-loreto-230864.htm",
    "larghezza_cm": 95,
    "profondita_cm": 45,
    "descrizione": "Comò con 3 cassetti bicolore in paglia di Vienna 95 cm"
  },
  {
    "nome": "Hyb - Materasso in memory foam 140x200 cm",
    "categoria": "Letti",
    "prezzo": 399,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/materasso-in-memory-foam-140x200-cm-1000-9-37-247308_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/materasso-in-memory-foam-140x200-cm-hyb-247308.htm",
    "larghezza_cm": 140,
    "profondita_cm": 200,
    "descrizione": "Materasso in memory foam 140x200 cm"
  },
  {
    "nome": "Romy - Divano 3 posti in tessuto bouclé beige",
    "categoria": "Divani",
    "prezzo": 1099,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-3-posti-in-tessuto-boucle-beige-1000-9-10-247240_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-3-posti-in-tessuto-boucle-beige-romy-247240.htm",
    "larghezza_cm": 202,
    "profondita_cm": 103,
    "descrizione": "Divano 3 posti in tessuto bouclé beige"
  },
  {
    "nome": "Candela a LED verde alt. 15 cm",
    "categoria": "Decorazioni",
    "prezzo": 9.99,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/252289/candela-a-led-verde-alt-15-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/candela-a-led-verde-alt-15-cm-252289.htm",
    "larghezza_cm": 10,
    "profondita_cm": 10,
    "descrizione": "Candela a LED verde alt. 15 cm"
  },
  {
    "nome": "Buddy - Modulo chaise longue sinistra per divano componibile blu",
    "categoria": "Divani",
    "prezzo": 559.3,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/modulo-chaise-longue-sinistra-per-divano-componibile-blu-1000-11-30-238691_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/modulo-chaise-longue-sinistra-per-divano-componibile-blu-buddy-238691.htm",
    "larghezza_cm": 146,
    "profondita_cm": 94,
    "descrizione": "Modulo chaise longue sinistra per divano componibile blu"
  },
  {
    "nome": "Mauricette - Sedia da scrivania per bambini regolabile color ottone e rosa con rotelle",
    "categoria": "Sedie",
    "prezzo": 99.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-da-scrivania-per-bambini-regolabile-color-ottone-e-rosa-con-rotelle-1000-3-12-235844_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-da-scrivania-per-bambini-regolabile-color-ottone-e-rosa-con-rotelle-mauricette-235844.htm",
    "larghezza_cm": 58,
    "profondita_cm": 58,
    "descrizione": "Sedia da scrivania per bambini regolabile color ottone e rosa con rotelle"
  },
  {
    "nome": "Axelle - Comò doppio con 6 cassetti 140 cm",
    "categoria": "Cassettiere",
    "prezzo": 579,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/como-doppio-con-6-cassetti-140-cm-1000-15-14-230229_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/como-doppio-con-6-cassetti-140-cm-axelle-230229.htm",
    "larghezza_cm": 140,
    "profondita_cm": 45,
    "descrizione": "Comò doppio con 6 cassetti 140 cm"
  },
  {
    "nome": "Pump Middle - Materasso a molle insacchettate 90x200 cm",
    "categoria": "Letti",
    "prezzo": 299,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/materasso-a-molle-insacchettate-90x200-cm-1000-5-4-242765_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/materasso-a-molle-insacchettate-90x200-cm-pump-middle-242765.htm",
    "larghezza_cm": 90,
    "profondita_cm": 200,
    "descrizione": "Materasso a molle insacchettate 90x200 cm"
  },
  {
    "nome": "Barcelone - Divano 5 posti in lino verde kaki",
    "categoria": "Divani",
    "prezzo": 1399,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-5-posti-in-lino-verde-kaki-1000-11-39-242431_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-5-posti-in-lino-verde-kaki-barcelone-242431.htm",
    "larghezza_cm": 253,
    "profondita_cm": 90,
    "descrizione": "Divano 5 posti in lino verde kaki"
  },
  {
    "nome": "Lotto di 2 - Piatto piano in maiolica blu",
    "categoria": "Cucina",
    "prezzo": 15.98,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/piatto-piano-in-maiolica-blu-1000-9-38-249195_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/piatto-piano-in-maiolica-blu-249195.htm",
    "larghezza_cm": 27.5,
    "profondita_cm": 27.5,
    "descrizione": "Piatto piano in maiolica blu"
  },
  {
    "nome": "Barnaby - Modulo chaise longue destro per divano componibile grigio chiaro chiné",
    "categoria": "Divani",
    "prezzo": 639.2,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/modulo-chaise-longue-destro-per-divano-componibile-grigio-chiaro-chine-1000-16-19-249627_4.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/modulo-chaise-longue-destro-per-divano-componibile-grigio-chiaro-chine-barnaby-249627.htm",
    "larghezza_cm": 120,
    "profondita_cm": 171.5,
    "descrizione": "Modulo chaise longue destro per divano componibile grigio chiaro chiné"
  },
  {
    "nome": "Lilo - Pouf grigio chiaro",
    "categoria": "Divani",
    "prezzo": 399,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/pouf-grigio-chiaro-1000-11-36-243043_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/pouf-grigio-chiaro-lilo-243043.htm",
    "larghezza_cm": 100,
    "profondita_cm": 77,
    "descrizione": "Pouf grigio chiaro"
  },
  {
    "nome": "Mayfair - Madia a 2 ante e 3 cassetti in legno massello di sheesham e metallo dorato 147 cm",
    "categoria": "Credenze",
    "prezzo": 949,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/madia-a-2-ante-e-3-cassetti-in-legno-massello-di-sheesham-e-metallo-dorato-147-cm-1000-8-19-199197_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/madia-a-2-ante-e-3-cassetti-in-legno-massello-di-sheesham-e-metallo-dorato-147-cm-mayfair-199197.htm",
    "larghezza_cm": 147,
    "profondita_cm": 45,
    "descrizione": "Madia a 2 ante e 3 cassetti in legno massello di sheesham e metallo dorato 147 cm"
  },
  {
    "nome": "Julian - Divano a 2/3 posti grigio chiaro",
    "categoria": "Divani",
    "prezzo": 759,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-a-2-3-posti-grigio-chiaro-1000-0-1-242352_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-a-2-3-posti-grigio-chiaro-julian-242352.htm",
    "larghezza_cm": 180,
    "profondita_cm": 95,
    "descrizione": "Divano a 2/3 posti grigio chiaro"
  },
  {
    "nome": "Barnaby - Modulo chaise longue sinistro per divano componibile grigio chiaro chiné",
    "categoria": "Divani",
    "prezzo": 639.2,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/modulo-chaise-longue-sinistro-per-divano-componibile-grigio-chiaro-chine-1000-4-24-249632_4.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/modulo-chaise-longue-sinistro-per-divano-componibile-grigio-chiaro-chine-barnaby-249632.htm",
    "larghezza_cm": 120,
    "profondita_cm": 171.5,
    "descrizione": "Modulo chaise longue sinistro per divano componibile grigio chiaro chiné"
  },
  {
    "nome": "Boavista - Sedia da giardino in resina riciclata e acciaio neri",
    "categoria": "Sedie",
    "prezzo": 48.95,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-da-giardino-in-resina-riciclata-e-acciaio-neri-1000-4-38-246079_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-da-giardino-in-resina-riciclata-e-acciaio-neri-boavista-246079.htm",
    "larghezza_cm": 53,
    "profondita_cm": 56,
    "descrizione": "Sedia da giardino in resina riciclata e acciaio neri"
  },
  {
    "nome": "Jagger - Madia a 2 ante e 3 cassetti in legno massello di mango nera 180 cm",
    "categoria": "Credenze",
    "prezzo": 734.3,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/madia-a-2-ante-e-3-cassetti-in-legno-massello-di-mango-nera-180-cm-1000-6-31-176126_8.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/madia-a-2-ante-e-3-cassetti-in-legno-massello-di-mango-nera-180-cm-jagger-176126.htm",
    "larghezza_cm": 180,
    "profondita_cm": 45,
    "descrizione": "Madia a 2 ante e 3 cassetti in legno massello di mango nera 180 cm"
  },
  {
    "nome": "Anaelle - Divano 4 posti in lino lavato",
    "categoria": "Divani",
    "prezzo": 1099,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-4-posti-in-lino-lavato-1000-6-10-242443_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-4-posti-in-lino-lavato-anaelle-242443.htm",
    "larghezza_cm": 213,
    "profondita_cm": 107,
    "descrizione": "Divano 4 posti in lino lavato"
  },
  {
    "nome": "Candela in vetro nero e dorato",
    "categoria": "Decorazioni",
    "prezzo": 35.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/candela-in-vetro-nero-e-dorato-1000-1-1-241860_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/candela-in-vetro-nero-e-dorato-241860.htm",
    "larghezza_cm": 15,
    "profondita_cm": 15,
    "descrizione": "Candela in vetro nero e dorato"
  },
  {
    "nome": "Flake - Modulo chaise longue destro per divano componibile in tessuto écru effetto bouclé",
    "categoria": "Divani",
    "prezzo": 899,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/modulo-chaise-longue-destro-per-divano-componibile-in-tessuto-ecru-effetto-boucle-1000-13-24-242416_3.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/modulo-chaise-longue-destro-per-divano-componibile-in-tessuto-ecru-effetto-boucle-flake-242416.htm",
    "larghezza_cm": 174,
    "profondita_cm": 102,
    "descrizione": "Modulo chaise longue destro per divano componibile in tessuto écru effetto bouclé"
  },
  {
    "nome": "Pitaya - Sedia per isola centrale in rattan e acciaio nero H65",
    "categoria": "Sedie",
    "prezzo": 189,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-per-isola-centrale-in-rattan-e-acciaio-nero-h65-1000-15-30-219995_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-per-isola-centrale-in-rattan-e-acciaio-nero-h65-pitaya-219995.htm",
    "larghezza_cm": 43.5,
    "profondita_cm": 49,
    "descrizione": "Sedia per isola centrale in rattan e acciaio nero H65"
  },
  {
    "nome": "Lena - Divano a 3/4 posti in tessuto tramato beige",
    "categoria": "Divani",
    "prezzo": 909.3,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-a-3-4-posti-in-tessuto-tramato-beige-1000-11-14-240561_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-a-3-4-posti-in-tessuto-tramato-beige-lena-240561.htm",
    "larghezza_cm": 242,
    "profondita_cm": 87,
    "descrizione": "Divano a 3/4 posti in tessuto tramato beige"
  },
  {
    "nome": "Falkor - Modulo chaise longue sinistra per divano componibile in tessuto riciclato grigio chiaro chiné",
    "categoria": "Divani",
    "prezzo": 559.3,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/modulo-chaise-longue-sinistra-per-divano-componibile-in-tessuto-riciclato-grigio-chiaro-chine-1000-3-28-242338_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/modulo-chaise-longue-sinistra-per-divano-componibile-in-tessuto-riciclato-grigio-chiaro-chine-falkor-242338.htm",
    "larghezza_cm": 138,
    "profondita_cm": 103,
    "descrizione": "Modulo chaise longue sinistra per divano componibile in tessuto riciclato grigio chiaro chiné"
  },
  {
    "nome": "Matheo - Sedia da scrivania regolabile con rotelle in velluto a coste verde",
    "categoria": "Sedie",
    "prezzo": 119,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-da-scrivania-regolabile-con-rotelle-in-velluto-a-coste-verde-1000-16-10-239614_2.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-da-scrivania-regolabile-con-rotelle-in-velluto-a-coste-verde-matheo-239614.htm",
    "larghezza_cm": 60,
    "profondita_cm": 62,
    "descrizione": "Sedia da scrivania regolabile con rotelle in velluto a coste verde"
  },
  {
    "nome": "Mambok - Madia 3 ante in metallo bianco e mango scolpito 155 cm",
    "categoria": "Credenze",
    "prezzo": 699,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/madia-3-ante-in-metallo-bianco-e-mango-scolpito-155-cm-1000-14-33-166206_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/madia-3-ante-in-metallo-bianco-e-mango-scolpito-155-cm-mambok-166206.htm",
    "larghezza_cm": 155,
    "profondita_cm": 45,
    "descrizione": "Madia 3 ante in metallo bianco e mango scolpito 155 cm"
  },
  {
    "nome": "Hubert - Sommier imbottito grigio chiaro 140x190 cm",
    "categoria": "Letti",
    "prezzo": 100,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sommier-imbottito-grigio-chiaro-140x190-cm-1000-9-26-171488_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sommier-imbottito-grigio-chiaro-140x190-cm-hubert-171488.htm",
    "larghezza_cm": 140,
    "profondita_cm": 190,
    "descrizione": "Sommier imbottito grigio chiaro 140x190 cm"
  },
  {
    "nome": "Ciotola per ramen in ceramica beige con bacchette in legno di acacia",
    "categoria": "Cucina",
    "prezzo": 14.99,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/250906/ciotola-per-ramen-in-ceramica-beige-con-bacchette-in-legno-di-acacia.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/ciotola-per-ramen-in-ceramica-beige-con-bacchette-in-legno-di-acacia-250906.htm",
    "larghezza_cm": 21,
    "profondita_cm": 21,
    "descrizione": "Ciotola per ramen in ceramica beige con bacchette in legno di acacia"
  },
  {
    "nome": "Lotto di 2 - Piatto fondo in gres verde",
    "categoria": "Cucina",
    "prezzo": 15.98,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/piatto-fondo-in-gres-verde-1000-8-40-245097_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/piatto-fondo-in-gres-verde-245097.htm",
    "larghezza_cm": 19.5,
    "profondita_cm": 19.5,
    "descrizione": "Piatto fondo in gres verde"
  },
  {
    "nome": "Buddy - Modulo chaise longue destro per divano componibile blu",
    "categoria": "Divani",
    "prezzo": 559.3,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/modulo-chaise-longue-destro-per-divano-componibile-blu-1000-16-9-230060_5.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/modulo-chaise-longue-destro-per-divano-componibile-blu-buddy-230060.htm",
    "larghezza_cm": 146,
    "profondita_cm": 94,
    "descrizione": "Modulo chaise longue destro per divano componibile blu"
  },
  {
    "nome": "Kaishi Business - Sedie da pranzo da giardino professionali verde kaki (x2)",
    "categoria": "Sedie",
    "prezzo": 139,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedie-da-pranzo-da-giardino-professionali-verde-kaki-x2-1000-4-32-238242_6.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedie-da-pranzo-da-giardino-professionali-verde-kaki-x2-kaishi-business-238242.htm",
    "larghezza_cm": 59,
    "profondita_cm": 51,
    "descrizione": "Sedie da pranzo da giardino professionali verde kaki (x2)"
  },
  {
    "nome": "Louvain - Divano a 3/4 posti in lino superiore bianco",
    "categoria": "Divani",
    "prezzo": 1499,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-a-3-4-posti-in-lino-superiore-bianco-1000-0-38-242471_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-a-3-4-posti-in-lino-superiore-bianco-louvain-242471.htm",
    "larghezza_cm": 203,
    "profondita_cm": 98,
    "descrizione": "Divano a 3/4 posti in lino superiore bianco"
  },
  {
    "nome": "Pouf contenitore in tessuto bouclé",
    "categoria": "Divani",
    "prezzo": 39.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/pouf-contenitore-in-tessuto-boucle-1000-12-10-236703_4.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/pouf-contenitore-in-tessuto-boucle-236703.htm",
    "larghezza_cm": 41,
    "profondita_cm": 41,
    "descrizione": "Pouf contenitore in tessuto bouclé"
  },
  {
    "nome": "Ginette - Sedia per isola centrale in velluto verde foresta H65",
    "categoria": "Sedie",
    "prezzo": 119,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-per-isola-centrale-in-velluto-verde-foresta-h65-1000-5-8-216160_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-per-isola-centrale-in-velluto-verde-foresta-h65-ginette-216160.htm",
    "larghezza_cm": 47,
    "profondita_cm": 53,
    "descrizione": "Sedia per isola centrale in velluto verde foresta H65"
  },
  {
    "nome": "Connor - Madia a 2 ante in vetro temperato e metallo color ottone 100 cm",
    "categoria": "Credenze",
    "prezzo": 419.3,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/madia-a-2-ante-in-vetro-temperato-e-metallo-color-ottone-100-cm-1000-10-11-238877_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/madia-a-2-ante-in-vetro-temperato-e-metallo-color-ottone-100-cm-connor-238877.htm",
    "larghezza_cm": 100,
    "profondita_cm": 45,
    "descrizione": "Madia a 2 ante in vetro temperato e metallo color ottone 100 cm"
  },
  {
    "nome": "Hyb - Materasso ibrido 90x120 cm",
    "categoria": "Letti",
    "prezzo": 299,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/materasso-ibrido-90x120-cm-1000-10-15-242940_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/materasso-ibrido-90x120-cm-hyb-242940.htm",
    "larghezza_cm": 90,
    "profondita_cm": 200,
    "descrizione": "Materasso ibrido 90x120 cm"
  },
  {
    "nome": "Louvain - Divano a 2/3 posti in lino superiore bianco",
    "categoria": "Divani",
    "prezzo": 1299,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-a-2-3-posti-in-lino-superiore-bianco-1000-5-33-242425_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-a-2-3-posti-in-lino-superiore-bianco-louvain-242425.htm",
    "larghezza_cm": 163,
    "profondita_cm": 98,
    "descrizione": "Divano a 2/3 posti in lino superiore bianco"
  },
  {
    "nome": "Lotto di 3 - Bicchiere in vetro trasparente con motivi a cuori rossi",
    "categoria": "Cucina",
    "prezzo": 8.97,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/bicchiere-in-vetro-trasparente-con-motivi-a-cuori-rossi-1000-1-31-241316_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/bicchiere-in-vetro-trasparente-con-motivi-a-cuori-rossi-241316.htm",
    "larghezza_cm": 8.5,
    "profondita_cm": 8.5,
    "descrizione": "Bicchiere in vetro trasparente con motivi a cuori rossi"
  },
  {
    "nome": "Cestino quadrato in fibra vegetale 22x22 cm",
    "categoria": "Cucina",
    "prezzo": 7.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/cestino-quadrato-in-fibra-vegetale-22x22-cm-1000-1-16-216496_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/cestino-quadrato-in-fibra-vegetale-22x22-cm-216496.htm",
    "larghezza_cm": 22,
    "profondita_cm": 22,
    "descrizione": "Cestino quadrato in fibra vegetale 22x22 cm"
  },
  {
    "nome": "Mauricette - Sedia da scrivania vintage a rotelle in velluto rosa",
    "categoria": "Sedie",
    "prezzo": 99.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-da-scrivania-vintage-a-rotelle-in-velluto-rosa-1000-7-36-206676_8.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-da-scrivania-vintage-a-rotelle-in-velluto-rosa-mauricette-206676.htm",
    "larghezza_cm": 58,
    "profondita_cm": 58,
    "descrizione": "Sedia da scrivania vintage a rotelle in velluto rosa"
  },
  {
    "nome": "Mix - Fasciatoio bianco per cassettiera",
    "categoria": "Cassettiere",
    "prezzo": 45.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/fasciatoio-bianco-per-cassettiera-1000-14-15-249336_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/fasciatoio-bianco-per-cassettiera-mix-249336.htm",
    "larghezza_cm": 47.4,
    "profondita_cm": 71.2,
    "descrizione": "Fasciatoio bianco per cassettiera"
  },
  {
    "nome": "Louvain - Divano a 3/4 posti in lino superiore beige",
    "categoria": "Divani",
    "prezzo": 1499,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-a-3-4-posti-in-lino-superiore-beige-1000-7-25-242376_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-a-3-4-posti-in-lino-superiore-beige-louvain-242376.htm",
    "larghezza_cm": 203,
    "profondita_cm": 98,
    "descrizione": "Divano a 3/4 posti in lino superiore beige"
  },
  {
    "nome": "Ginette - Sedia per isola centrale in velluto terracotta H65",
    "categoria": "Sedie",
    "prezzo": 119,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-per-isola-centrale-in-velluto-terracotta-h65-1000-6-9-216161_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-per-isola-centrale-in-velluto-terracotta-h65-ginette-216161.htm",
    "larghezza_cm": 47,
    "profondita_cm": 53,
    "descrizione": "Sedia per isola centrale in velluto terracotta H65"
  },
  {
    "nome": "Versailles - Cassettone bianco in acacia e mango 110 cm",
    "categoria": "Cassettiere",
    "prezzo": 599,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/cassettone-bianco-in-acacia-e-mango-110-cm-1000-12-31-156446_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/cassettone-bianco-in-acacia-e-mango-110-cm-versailles-156446.htm",
    "larghezza_cm": 110,
    "profondita_cm": 48,
    "descrizione": "Cassettone bianco in acacia e mango 110 cm"
  },
  {
    "nome": "Pump Premium - Materasso a molle insacchettate 140x200 cm",
    "categoria": "Letti",
    "prezzo": 749,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/materasso-a-molle-insacchettate-140x200-cm-1000-14-1-247313_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/materasso-a-molle-insacchettate-140x200-cm-pump-premium-247313.htm",
    "larghezza_cm": 140,
    "profondita_cm": 200,
    "descrizione": "Materasso a molle insacchettate 140x200 cm"
  },
  {
    "nome": "Candela cilindrica blu 7x14 cm",
    "categoria": "Decorazioni",
    "prezzo": 6.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/candela-cilindrica-blu-7x14-cm-1000-13-15-249131_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/candela-cilindrica-blu-7x14-cm-249131.htm",
    "larghezza_cm": 7,
    "profondita_cm": 7,
    "descrizione": "Candela cilindrica blu 7x14 cm"
  },
  {
    "nome": "Bamba Business - Sedie da giardino in acciaio bianco e resina intrecciata riciclata (x2)",
    "categoria": "Sedie",
    "prezzo": 89.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedie-da-giardino-in-acciaio-bianco-e-resina-intrecciata-riciclata-x2-1000-11-19-245814_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedie-da-giardino-in-acciaio-bianco-e-resina-intrecciata-riciclata-x2-bamba-business-245814.htm",
    "larghezza_cm": 54,
    "profondita_cm": 61,
    "descrizione": "Sedie da giardino in acciaio bianco e resina intrecciata riciclata (x2)"
  },
  {
    "nome": "Avignon - Cassettone bianco in mango effetto anticato L 94 cm",
    "categoria": "Cassettiere",
    "prezzo": 549,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/cassettone-bianco-in-mango-effetto-anticato-l-94-cm-1000-15-35-121395_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/cassettone-bianco-in-mango-effetto-anticato-l-94-cm-avignon-121395.htm",
    "larghezza_cm": 94,
    "profondita_cm": 45,
    "descrizione": "Cassettone bianco in mango effetto anticato L 94 cm"
  },
  {
    "nome": "Neo Elementary - Pouf per divano componibile grigio chiaro",
    "categoria": "Divani",
    "prezzo": 199,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/pouf-per-divano-componibile-grigio-chiaro-1000-0-6-242726_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/pouf-per-divano-componibile-grigio-chiaro-neo-elementary-242726.htm",
    "larghezza_cm": 115,
    "profondita_cm": 58,
    "descrizione": "Pouf per divano componibile grigio chiaro"
  },
  {
    "nome": "Lampada da scrivania in acciaio laccato azzurro",
    "categoria": "Lampade",
    "prezzo": 49.99,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/253124/lampada-da-scrivania-in-acciaio-laccato-azzurro.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/lampada-da-scrivania-in-acciaio-laccato-azzurro-253124.htm",
    "larghezza_cm": 20,
    "profondita_cm": 12,
    "descrizione": "Lampada da scrivania in acciaio laccato azzurro"
  },
  {
    "nome": "Neo Elementary - Pouf per divano componibile in tessuto grigio antracite",
    "categoria": "Divani",
    "prezzo": 199,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/pouf-per-divano-componibile-in-tessuto-grigio-antracite-1000-2-8-242728_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/pouf-per-divano-componibile-in-tessuto-grigio-antracite-neo-elementary-242728.htm",
    "larghezza_cm": 115,
    "profondita_cm": 58,
    "descrizione": "Pouf per divano componibile in tessuto grigio antracite"
  },
  {
    "nome": "Kate - Sedia da scrivania girevole in velluto verde kaki",
    "categoria": "Sedie",
    "prezzo": 149,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/249737/sedia-da-scrivania-girevole-in-velluto-verde-kaki.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-da-scrivania-girevole-in-velluto-verde-kaki-kate-249737.htm",
    "larghezza_cm": 56,
    "profondita_cm": 54,
    "descrizione": "Sedia da scrivania girevole in velluto verde kaki"
  },
  {
    "nome": "Jekill - Pouf per divano componibile in velluto color bronzo",
    "categoria": "Divani",
    "prezzo": 399,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/pouf-per-divano-componibile-in-velluto-color-bronzo-1000-6-38-234640_4.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/pouf-per-divano-componibile-in-velluto-color-bronzo-jekill-234640.htm",
    "larghezza_cm": 78,
    "profondita_cm": 58,
    "descrizione": "Pouf per divano componibile in velluto color bronzo"
  },
  {
    "nome": "Fioriera in metallo beige",
    "categoria": "Decorazioni",
    "prezzo": 27.95,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/fioriera-in-metallo-beige-1000-5-15-248188_3.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/fioriera-in-metallo-beige-248188.htm",
    "larghezza_cm": 45,
    "profondita_cm": 18,
    "descrizione": "Fioriera in metallo beige"
  },
  {
    "nome": "Panca con contenitore 2 posti in lino verde e legno di hevea",
    "categoria": "Divani",
    "prezzo": 149,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/panca-con-contenitore-2-posti-in-lino-verde-e-legno-di-hevea-1000-0-37-234311_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/panca-con-contenitore-2-posti-in-lino-verde-e-legno-di-hevea-234311.htm",
    "larghezza_cm": 100.5,
    "profondita_cm": 39,
    "descrizione": "Panca con contenitore 2 posti in lino verde e legno di hevea"
  },
  {
    "nome": "Neo Elementary - Chaise longue per divano componibile grigio carbone",
    "categoria": "Divani",
    "prezzo": 639.2,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/chaise-longue-per-divano-componibile-grigio-carbone-1000-10-40-242719_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/chaise-longue-per-divano-componibile-grigio-carbone-neo-elementary-242719.htm",
    "larghezza_cm": 115,
    "profondita_cm": 170,
    "descrizione": "Chaise longue per divano componibile grigio carbone"
  },
  {
    "nome": "Fioriera in metallo beige",
    "categoria": "Decorazioni",
    "prezzo": 48.95,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/fioriera-in-metallo-beige-1000-4-14-248187_3.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/fioriera-in-metallo-beige-248187.htm",
    "larghezza_cm": 56,
    "profondita_cm": 20,
    "descrizione": "Fioriera in metallo beige"
  },
  {
    "nome": "Kate - Sedia da scrivania girevole in velluto riciclato terracotta",
    "categoria": "Sedie",
    "prezzo": 119.2,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-da-scrivania-girevole-in-velluto-riciclato-terracotta-1000-9-8-249739_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-da-scrivania-girevole-in-velluto-riciclato-terracotta-kate-249739.htm",
    "larghezza_cm": 56,
    "profondita_cm": 54,
    "descrizione": "Sedia da scrivania girevole in velluto riciclato terracotta"
  },
  {
    "nome": "Fioriera in ferro battuto verde",
    "categoria": "Decorazioni",
    "prezzo": 39.99,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/252028/fioriera-in-ferro-battuto-verde.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/fioriera-in-ferro-battuto-verde-252028.htm",
    "larghezza_cm": 45,
    "profondita_cm": 18,
    "descrizione": "Fioriera in ferro battuto verde"
  },
  {
    "nome": "Lampada a sospensione in rattan intrecciato",
    "categoria": "Lampade",
    "prezzo": 159,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/lampada-a-sospensione-in-rattan-intrecciato-1000-14-12-210916_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/lampada-a-sospensione-in-rattan-intrecciato-210916.htm",
    "larghezza_cm": 80,
    "profondita_cm": 80,
    "descrizione": "Lampada a sospensione in rattan intrecciato"
  },
  {
    "nome": "Tovaglietta rotonda con perle in vetro dorato Ø 35 cm",
    "categoria": "Cucina",
    "prezzo": 9.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tovaglietta-rotonda-con-perle-in-vetro-dorato-oe-35-cm-1000-13-13-237690_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tovaglietta-rotonda-con-perle-in-vetro-dorato-oe-35-cm-237690.htm",
    "larghezza_cm": 35,
    "profondita_cm": 35,
    "descrizione": "Tovaglietta rotonda con perle in vetro dorato Ø 35 cm"
  },
  {
    "nome": "Ice - Sedia per isola centrale stile scandinavo bianca e quercia H66",
    "categoria": "Sedie",
    "prezzo": 79.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-per-isola-centrale-stile-scandinavo-bianca-e-quercia-h66-1000-10-36-210079_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-per-isola-centrale-stile-scandinavo-bianca-e-quercia-h66-ice-210079.htm",
    "larghezza_cm": 42,
    "profondita_cm": 42,
    "descrizione": "Sedia per isola centrale stile scandinavo bianca e quercia H66"
  },
  {
    "nome": "Falkor - Modulo centrale per divano componibile grigio chiaro chiné",
    "categoria": "Divani",
    "prezzo": 499,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/modulo-centrale-per-divano-componibile-grigio-chiaro-chine-1000-8-40-242309_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/modulo-centrale-per-divano-componibile-grigio-chiaro-chine-falkor-242309.htm",
    "larghezza_cm": 90,
    "profondita_cm": 103,
    "descrizione": "Modulo centrale per divano componibile grigio chiaro chiné"
  },
  {
    "nome": "Cassettone pouf in velluto bianco e oro",
    "categoria": "Divani",
    "prezzo": 109,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/cassettone-pouf-in-velluto-bianco-e-oro-1000-2-40-245261_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/cassettone-pouf-in-velluto-bianco-e-oro-245261.htm",
    "larghezza_cm": 80,
    "profondita_cm": 42,
    "descrizione": "Cassettone pouf in velluto bianco e oro"
  },
  {
    "nome": "Ice - Sedia da bar scandinava bianca e rovere H77",
    "categoria": "Sedie",
    "prezzo": 79.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-da-bar-scandinava-bianca-e-rovere-h77-1000-11-12-165693_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-da-bar-scandinava-bianca-e-rovere-h77-ice-165693.htm",
    "larghezza_cm": 46,
    "profondita_cm": 46,
    "descrizione": "Sedia da bar scandinava bianca e rovere H77"
  },
  {
    "nome": "Candela profumata in ceramica bianca e dorata, 180g",
    "categoria": "Decorazioni",
    "prezzo": 14.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/candela-profumata-in-ceramica-bianca-e-dorata-180g-1000-7-23-228844_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/candela-profumata-in-ceramica-bianca-e-dorata-180g-228844.htm",
    "larghezza_cm": 8,
    "profondita_cm": 8,
    "descrizione": "Candela profumata in ceramica bianca e dorata, 180g"
  },
  {
    "nome": "Huppy - Sedia per isola centrale in acciaio nero alt. 65 cm",
    "categoria": "Sedie",
    "prezzo": 119,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-per-isola-centrale-in-acciaio-nero-alt-65-cm-1000-10-16-230887_8.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-per-isola-centrale-in-acciaio-nero-alt-65-cm-huppy-230887.htm",
    "larghezza_cm": 45.8,
    "profondita_cm": 51,
    "descrizione": "Sedia per isola centrale in acciaio nero alt. 65 cm"
  },
  {
    "nome": "Lampada fungo per esterno multicolore",
    "categoria": "Lampade",
    "prezzo": 48.95,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/lampada-fungo-per-esterno-multicolore-1000-4-21-246759_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/lampada-fungo-per-esterno-multicolore-246759.htm",
    "larghezza_cm": 21,
    "profondita_cm": 21,
    "descrizione": "Lampada fungo per esterno multicolore"
  },
  {
    "nome": "Kuta - Sedia da giardino in resina intrecciata e legno massello di acacia",
    "categoria": "Sedie",
    "prezzo": 179,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-da-giardino-in-resina-intrecciata-e-legno-massello-di-acacia-1000-12-25-230158_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-da-giardino-in-resina-intrecciata-e-legno-massello-di-acacia-kuta-230158.htm",
    "larghezza_cm": 95.5,
    "profondita_cm": 92.5,
    "descrizione": "Sedia da giardino in resina intrecciata e legno massello di acacia"
  },
  {
    "nome": "Luna - Sedia da bar in velluto ocra e acciaio nero H73",
    "categoria": "Sedie",
    "prezzo": 109,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-da-bar-in-velluto-ocra-e-acciaio-nero-h73-1000-9-33-197940_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-da-bar-in-velluto-ocra-e-acciaio-nero-h73-luna-197940.htm",
    "larghezza_cm": 49,
    "profondita_cm": 49,
    "descrizione": "Sedia da bar in velluto ocra e acciaio nero H73"
  },
  {
    "nome": "Trapunta in lino e cotone beige con stampa a foglie dorate 100x200cm",
    "categoria": "Letti",
    "prezzo": 99.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/trapunta-in-lino-e-cotone-beige-con-stampa-a-foglie-dorate-100x200cm-1000-3-28-223519_2.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/trapunta-in-lino-e-cotone-beige-con-stampa-a-foglie-dorate-100x200cm-223519.htm",
    "larghezza_cm": 200,
    "profondita_cm": 3,
    "descrizione": "Trapunta in lino e cotone beige con stampa a foglie dorate 100x200cm"
  },
  {
    "nome": "Lampada a sospensione in rattan e metallo dorato",
    "categoria": "Lampade",
    "prezzo": 299,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/lampada-a-sospensione-in-rattan-e-metallo-dorato-1000-11-12-243060_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/lampada-a-sospensione-in-rattan-e-metallo-dorato-243060.htm",
    "larghezza_cm": 88.5,
    "profondita_cm": 76,
    "descrizione": "Lampada a sospensione in rattan e metallo dorato"
  },
  {
    "nome": "Candela LED gialla alt.10 cm",
    "categoria": "Decorazioni",
    "prezzo": 6.99,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/252292/candela-led-gialla-alt-10-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/candela-led-gialla-alt-10-cm-252292.htm",
    "larghezza_cm": 7,
    "profondita_cm": 7,
    "descrizione": "Candela LED gialla alt.10 cm"
  },
  {
    "nome": "Cuscini in ecrù e cotone blu con motivi (x3)",
    "categoria": "Tessile",
    "prezzo": 49.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/cuscini-in-ecru-e-cotone-blu-con-motivi-x3-1000-8-19-139255_3.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/cuscini-in-ecru-e-cotone-blu-con-motivi-x3-139255.htm",
    "larghezza_cm": 45,
    "profondita_cm": 10,
    "descrizione": "Cuscini in ecrù e cotone blu con motivi (x3)"
  },
  {
    "nome": "Luanda Business - Sedie da pranzo da giardino professionali in legno di acacia e resina intrecciata riciclata beige (x2)",
    "categoria": "Sedie",
    "prezzo": 349,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedie-da-pranzo-da-giardino-professionali-in-legno-di-acacia-e-resina-intrecciata-riciclata-beige-x2-1000-4-32-238939_6.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedie-da-pranzo-da-giardino-professionali-in-legno-di-acacia-e-resina-intrecciata-riciclata-beige-x2-luanda-business-238939.htm",
    "larghezza_cm": 56,
    "profondita_cm": 57,
    "descrizione": "Sedie da pranzo da giardino professionali in legno di acacia e resina intrecciata riciclata beige (x2)"
  },
  {
    "nome": "Coprirete 180 x 200 cm beige in cotone e contorni di lino slavato",
    "categoria": "Letti",
    "prezzo": 109,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/coprirete-180-x-200-cm-beige-in-cotone-e-contorni-di-lino-slavato-1000-3-34-158868_2.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/coprirete-180-x-200-cm-beige-in-cotone-e-contorni-di-lino-slavato-158868.htm",
    "larghezza_cm": 180,
    "profondita_cm": 30,
    "descrizione": "Coprirete 180 x 200 cm beige in cotone e contorni di lino slavato"
  },
  {
    "nome": "Buddy - Modulo chaise longue sinistra per divano componibile in velluto a coste beige",
    "categoria": "Divani",
    "prezzo": 799,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/modulo-chaise-longue-sinistra-per-divano-componibile-in-velluto-a-coste-beige-1000-11-29-238895_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/modulo-chaise-longue-sinistra-per-divano-componibile-in-velluto-a-coste-beige-buddy-238895.htm",
    "larghezza_cm": 144,
    "profondita_cm": 92,
    "descrizione": "Modulo chaise longue sinistra per divano componibile in velluto a coste beige"
  },
  {
    "nome": "Lampada da terra per esterni alt.155 cm in acciaio nero, senza fili e ricaricabile",
    "categoria": "Lampade",
    "prezzo": 199,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/252806/lampada-da-terra-per-esterni-alt-155-cm-in-acciaio-nero-senza-fili-e-ricaricabile.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/lampada-da-terra-per-esterni-alt-155-cm-in-acciaio-nero-senza-fili-e-ricaricabile-252806.htm",
    "larghezza_cm": 45,
    "profondita_cm": 45,
    "descrizione": "Lampada da terra per esterni alt.155 cm in acciaio nero, senza fili e ricaricabile"
  },
  {
    "nome": "Lotto di 2 - Tovaglietta color ardesia 30x45 cm",
    "categoria": "Cucina",
    "prezzo": 7.98,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tovaglietta-color-ardesia-30x45-cm-1000-9-35-238655_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tovaglietta-color-ardesia-30x45-cm-238655.htm",
    "larghezza_cm": 45,
    "profondita_cm": 30,
    "descrizione": "Tovaglietta color ardesia 30x45 cm"
  },
  {
    "nome": "Ginette - Sedia per isola centrale in tessuto bouclé bianco H65",
    "categoria": "Sedie",
    "prezzo": 119,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-per-isola-centrale-in-tessuto-boucle-bianco-h65-1000-13-13-216083_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-per-isola-centrale-in-tessuto-boucle-bianco-h65-ginette-216083.htm",
    "larghezza_cm": 47,
    "profondita_cm": 53,
    "descrizione": "Sedia per isola centrale in tessuto bouclé bianco H65"
  },
  {
    "nome": "Cléa - Penisola contenitore beige in tessuto",
    "categoria": "Divani",
    "prezzo": 399,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/166327_0/penisola-contenitore-beige-in-tessuto.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/penisola-contenitore-beige-in-tessuto-clea-166327.htm",
    "larghezza_cm": 190,
    "profondita_cm": 80,
    "descrizione": "Penisola contenitore beige in tessuto"
  },
  {
    "nome": "Kafe Business - Sedia da giardino professionali in resina intrecciata bianca/beige, h 88 cm",
    "categoria": "Sedie",
    "prezzo": 79.95,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-da-giardino-professionali-in-resina-intrecciata-bianca-beige-h-88-cm-1000-8-32-246032_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-da-giardino-professionali-in-resina-intrecciata-bianca-beige-h-88-cm-kafe-business-246032.htm",
    "larghezza_cm": 45,
    "profondita_cm": 58,
    "descrizione": "Sedia da giardino professionali in resina intrecciata bianca/beige, h 88 cm"
  },
  {
    "nome": "Tradition - Sedia per isola centrale in legno di frassino e rattan alt. 65 cm",
    "categoria": "Sedie",
    "prezzo": 149,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-per-isola-centrale-in-legno-di-frassino-e-rattan-alt-65-cm-1000-3-15-238717_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-per-isola-centrale-in-legno-di-frassino-e-rattan-alt-65-cm-tradition-238717.htm",
    "larghezza_cm": 45,
    "profondita_cm": 49,
    "descrizione": "Sedia per isola centrale in legno di frassino e rattan alt. 65 cm"
  },
  {
    "nome": "Piatto da portata in gres modellato bianco a forma di pesce",
    "categoria": "Cucina",
    "prezzo": 19.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/piatto-da-portata-in-gres-modellato-bianco-a-forma-di-pesce-1000-14-25-246599_2.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/piatto-da-portata-in-gres-modellato-bianco-a-forma-di-pesce-246599.htm",
    "larghezza_cm": 35.8,
    "profondita_cm": 28.2,
    "descrizione": "Piatto da portata in gres modellato bianco a forma di pesce"
  },
  {
    "nome": "Sedia da ufficio grigio scuro con rotelle",
    "categoria": "Sedie",
    "prezzo": 135.2,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/252787_0/sedia-da-ufficio-grigio-scuro-con-rotelle.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-da-ufficio-grigio-scuro-con-rotelle-252787.htm",
    "larghezza_cm": 58,
    "profondita_cm": 65,
    "descrizione": "Sedia da ufficio grigio scuro con rotelle"
  },
  {
    "nome": "Candela profumata Fiore d'arancio in vetro arancione con ricarica",
    "categoria": "Decorazioni",
    "prezzo": 19.99,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/250174/candela-profumata-fiore-d-arancio-in-vetro-arancione-con-ricarica.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/candela-profumata-fiore-d-arancio-in-vetro-arancione-con-ricarica-250174.htm",
    "larghezza_cm": 10,
    "profondita_cm": 10,
    "descrizione": "Candela profumata Fiore d'arancio in vetro arancione con ricarica"
  },
  {
    "nome": "Stonic - Pouf in tessuto bouclé beige",
    "categoria": "Divani",
    "prezzo": 499,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/pouf-in-tessuto-boucle-beige-1000-0-8-247197_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/pouf-in-tessuto-boucle-beige-stonic-247197.htm",
    "larghezza_cm": 107,
    "profondita_cm": 94,
    "descrizione": "Pouf in tessuto bouclé beige"
  },
  {
    "nome": "Kafe Business - Sedia da giardino professionali in resina intrecciata nera, h 88 cm",
    "categoria": "Sedie",
    "prezzo": 69.95,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/246031/sedia-da-giardino-professionali-in-resina-intrecciata-nera-h-88-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-da-giardino-professionali-in-resina-intrecciata-nera-h-88-cm-kafe-business-246031.htm",
    "larghezza_cm": 45,
    "profondita_cm": 58,
    "descrizione": "Sedia da giardino professionali in resina intrecciata nera, h 88 cm"
  },
  {
    "nome": "Morphee - Coprirete 140 x 190 cm beige in cotone e contorni di lino slavato",
    "categoria": "Letti",
    "prezzo": 85.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/coprirete-140-x-190-cm-beige-in-cotone-e-contorni-di-lino-slavato-1000-9-15-150034_0.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/coprirete-140-x-190-cm-beige-in-cotone-e-contorni-di-lino-slavato-morphee-150034.htm",
    "larghezza_cm": 140,
    "profondita_cm": 30,
    "descrizione": "Coprirete 140 x 190 cm beige in cotone e contorni di lino slavato"
  },
  {
    "nome": "Huppy - Sedia per isola centrale in acciaio dorato e bianca alt. 65 cm",
    "categoria": "Sedie",
    "prezzo": 119,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-per-isola-centrale-in-acciaio-dorato-e-bianca-alt-65-cm-1000-9-15-230886_5.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-per-isola-centrale-in-acciaio-dorato-e-bianca-alt-65-cm-huppy-230886.htm",
    "larghezza_cm": 45.8,
    "profondita_cm": 51,
    "descrizione": "Sedia per isola centrale in acciaio dorato e bianca alt. 65 cm"
  },
  {
    "nome": "Boavista - Sedia da giardino in acciaio nero e resina riciclata color mattone",
    "categoria": "Sedie",
    "prezzo": 69.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-da-giardino-in-acciaio-nero-e-resina-riciclata-color-mattone-1000-10-3-246085_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-da-giardino-in-acciaio-nero-e-resina-riciclata-color-mattone-boavista-246085.htm",
    "larghezza_cm": 53,
    "profondita_cm": 56,
    "descrizione": "Sedia da giardino in acciaio nero e resina riciclata color mattone"
  },
  {
    "nome": "Pouf contenitore in tessuto bouclé bianco con struttura in legno di acacia",
    "categoria": "Divani",
    "prezzo": 139,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/pouf-contenitore-in-tessuto-boucle-bianco-con-struttura-in-legno-di-acacia-1000-15-23-246515_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/pouf-contenitore-in-tessuto-boucle-bianco-con-struttura-in-legno-di-acacia-246515.htm",
    "larghezza_cm": 45,
    "profondita_cm": 42,
    "descrizione": "Pouf contenitore in tessuto bouclé bianco con struttura in legno di acacia"
  },
  {
    "nome": "Kate - Sedia da scrivania regolabile e girevole grigio chiné e acciaio nero",
    "categoria": "Sedie",
    "prezzo": 149,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-da-scrivania-regolabile-e-girevole-grigio-chine-e-acciaio-nero-1000-15-10-238712_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-da-scrivania-regolabile-e-girevole-grigio-chine-e-acciaio-nero-kate-238712.htm",
    "larghezza_cm": 56,
    "profondita_cm": 54,
    "descrizione": "Sedia da scrivania regolabile e girevole grigio chiné e acciaio nero"
  },
  {
    "nome": "Lenzuolo con angoli in cotone bio écru 140x200 cm",
    "categoria": "Letti",
    "prezzo": 29.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/lenzuolo-con-angoli-in-cotone-bio-ecru-140x200-cm-1000-2-0-230420_3.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/lenzuolo-con-angoli-in-cotone-bio-ecru-140x200-cm-230420.htm",
    "larghezza_cm": 140,
    "profondita_cm": 30,
    "descrizione": "Lenzuolo con angoli in cotone bio écru 140x200 cm"
  },
  {
    "nome": "Barcelone - Tappeto grande beige in cotone intrecciato 200x300cm",
    "categoria": "Tappeti",
    "prezzo": 219,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tappeto-grande-beige-in-cotone-intrecciato-200x300cm-1000-13-14-230516_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tappeto-grande-beige-in-cotone-intrecciato-200x300cm-barcelone-230516.htm",
    "larghezza_cm": 200,
    "profondita_cm": 5,
    "descrizione": "Tappeto grande beige in cotone intrecciato 200x300cm"
  },
  {
    "nome": "Lampada in metallo rosa e dorato",
    "categoria": "Lampade",
    "prezzo": 39.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/lampada-in-metallo-rosa-e-dorato-1000-13-5-248383_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/lampada-in-metallo-rosa-e-dorato-248383.htm",
    "larghezza_cm": 21.5,
    "profondita_cm": 16,
    "descrizione": "Lampada in metallo rosa e dorato"
  },
  {
    "nome": "Isalia - Sedia da giardino in acciaio nero e resina verde kaki, beige e blu",
    "categoria": "Sedie",
    "prezzo": 79.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-da-giardino-in-acciaio-nero-e-resina-verde-kaki-beige-e-blu-1000-3-37-246078_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-da-giardino-in-acciaio-nero-e-resina-verde-kaki-beige-e-blu-isalia-246078.htm",
    "larghezza_cm": 53,
    "profondita_cm": 56,
    "descrizione": "Sedia da giardino in acciaio nero e resina verde kaki, beige e blu"
  },
  {
    "nome": "Hyannis BUSINESS - Divanetto professionale 2 posti in velluto blu",
    "categoria": "Divani",
    "prezzo": 200,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divanetto-professionale-2-posti-in-velluto-blu-1000-12-6-198487_9.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divanetto-professionale-2-posti-in-velluto-blu-hyannis-business-198487.htm",
    "larghezza_cm": 141,
    "profondita_cm": 61,
    "descrizione": "Divanetto professionale 2 posti in velluto blu"
  },
  {
    "nome": "Alzata per dolci con campana in vetro",
    "categoria": "Cucina",
    "prezzo": 44.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/alzata-per-dolci-con-campana-in-vetro-1000-3-0-238989_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/alzata-per-dolci-con-campana-in-vetro-238989.htm",
    "larghezza_cm": 28.5,
    "profondita_cm": 28.5,
    "descrizione": "Alzata per dolci con campana in vetro"
  },
  {
    "nome": "Sedia da ufficio regolabile in tessuto beige con base in acciaio nero",
    "categoria": "Sedie",
    "prezzo": 249,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/253734/sedia-da-ufficio-regolabile-in-tessuto-beige-con-base-in-acciaio-nero.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-da-ufficio-regolabile-in-tessuto-beige-con-base-in-acciaio-nero-253734.htm",
    "larghezza_cm": 66,
    "profondita_cm": 65,
    "descrizione": "Sedia da ufficio regolabile in tessuto beige con base in acciaio nero"
  },
  {
    "nome": "Selva BUSINESS - Sedia alta da giardino professionale in resina riciclata e acciaio nero",
    "categoria": "Sedie",
    "prezzo": 109,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-alta-da-giardino-professionale-in-resina-riciclata-e-acciaio-nero-1000-11-34-237875_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-alta-da-giardino-professionale-in-resina-riciclata-e-acciaio-nero-selva-business-237875.htm",
    "larghezza_cm": 52,
    "profondita_cm": 58,
    "descrizione": "Sedia alta da giardino professionale in resina riciclata e acciaio nero"
  },
  {
    "nome": "Lampada a sospensione in rafia intrecciata",
    "categoria": "Lampade",
    "prezzo": 179,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/lampada-a-sospensione-in-rafia-intrecciata-1000-13-32-235905_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/lampada-a-sospensione-in-rafia-intrecciata-235905.htm",
    "larghezza_cm": 90,
    "profondita_cm": 89,
    "descrizione": "Lampada a sospensione in rafia intrecciata"
  },
  {
    "nome": "Matheo - Sedia da scrivania girevole in velluto beige e metallo nero",
    "categoria": "Sedie",
    "prezzo": 119,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-da-scrivania-girevole-in-velluto-beige-e-metallo-nero-1000-6-7-243055_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-da-scrivania-girevole-in-velluto-beige-e-metallo-nero-matheo-243055.htm",
    "larghezza_cm": 60,
    "profondita_cm": 62,
    "descrizione": "Sedia da scrivania girevole in velluto beige e metallo nero"
  },
  {
    "nome": "St Tropez - Divano da giardino 2/3 posti in rattan e cuscini color talpa",
    "categoria": "Divani",
    "prezzo": 1499,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-da-giardino-2-3-posti-in-rattan-e-cuscini-color-talpa-1000-15-22-164473_4.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-da-giardino-2-3-posti-in-rattan-e-cuscini-color-talpa-st-tropez-164473.htm",
    "larghezza_cm": 278,
    "profondita_cm": 125,
    "descrizione": "Divano da giardino 2/3 posti in rattan e cuscini color talpa"
  },
  {
    "nome": "Lotto di 2 - Strofinaccio in cotone verde oliva 50x70 cm",
    "categoria": "Cucina",
    "prezzo": 9.98,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/252238/strofinaccio-in-cotone-verde-oliva-50x70-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/strofinaccio-in-cotone-verde-oliva-50x70-cm-252238.htm",
    "larghezza_cm": 50,
    "profondita_cm": 25.5,
    "descrizione": "Strofinaccio in cotone verde oliva 50x70 cm"
  },
  {
    "nome": "Lotto di 2 - Piatto piano in gres beige",
    "categoria": "Cucina",
    "prezzo": 7.9,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/piatto-piano-in-gres-beige-1000-8-33-231888_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/piatto-piano-in-gres-beige-231888.htm",
    "larghezza_cm": 25.2,
    "profondita_cm": 25.5,
    "descrizione": "Piatto piano in gres beige"
  },
  {
    "nome": "Marambaia - Sedia da giardino in resina riciclata beige e acciaio nero",
    "categoria": "Sedie",
    "prezzo": 104.3,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-da-giardino-in-resina-riciclata-beige-e-acciaio-nero-1000-6-9-246132_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-da-giardino-in-resina-riciclata-beige-e-acciaio-nero-marambaia-246132.htm",
    "larghezza_cm": 56,
    "profondita_cm": 60,
    "descrizione": "Sedia da giardino in resina riciclata beige e acciaio nero"
  },
  {
    "nome": "Relax - Divano da giardino componibile 3 posti in legno di acacia con cuscini in tela riciclata verde kaki",
    "categoria": "Divani",
    "prezzo": 299,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/238228_0/divano-da-giardino-componibile-3-posti-in-legno-di-acacia-con-cuscini-in-tela-riciclata-verde-kaki.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-da-giardino-componibile-3-posti-in-legno-di-acacia-con-cuscini-in-tela-riciclata-verde-kaki-relax-238228.htm",
    "larghezza_cm": 220,
    "profondita_cm": 75,
    "descrizione": "Divano da giardino componibile 3 posti in legno di acacia con cuscini in tela riciclata verde kaki"
  },
  {
    "nome": "Lampada da atmosfera a forma di albero con animali",
    "categoria": "Lampade",
    "prezzo": 34.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/lampada-da-atmosfera-a-forma-di-albero-con-animali-1000-9-25-250453_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/lampada-da-atmosfera-a-forma-di-albero-con-animali-250453.htm",
    "larghezza_cm": 12.3,
    "profondita_cm": 12.3,
    "descrizione": "Lampada da atmosfera a forma di albero con animali"
  },
  {
    "nome": "Lotto di 6 - 6 piatti fondi blu in ceramica",
    "categoria": "Cucina",
    "prezzo": 47.94,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/6-piatti-fondi-blu-in-ceramica-1000-2-15-230148_4.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/6-piatti-fondi-blu-in-ceramica-230148.htm",
    "larghezza_cm": 17.8,
    "profondita_cm": 17.8,
    "descrizione": "6 piatti fondi blu in ceramica"
  },
  {
    "nome": "Selva BUSINESS - Sedia da giardino professionale in resina e acciaio nero",
    "categoria": "Sedie",
    "prezzo": 79.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-da-giardino-professionale-in-resina-e-acciaio-nero-1000-4-27-237868_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-da-giardino-professionale-in-resina-e-acciaio-nero-selva-business-237868.htm",
    "larghezza_cm": 47,
    "profondita_cm": 60,
    "descrizione": "Sedia da giardino professionale in resina e acciaio nero"
  },
  {
    "nome": "Indiana - Divano da giardino 3 posti in acacia massiccia e cuscini talpa",
    "categoria": "Divani",
    "prezzo": 489.3,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-da-giardino-3-posti-in-acacia-massiccia-e-cuscini-talpa-1000-0-23-230197_2.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-da-giardino-3-posti-in-acacia-massiccia-e-cuscini-talpa-indiana-230197.htm",
    "larghezza_cm": 180,
    "profondita_cm": 75,
    "descrizione": "Divano da giardino 3 posti in acacia massiccia e cuscini talpa"
  },
  {
    "nome": "Negara - Divano da giardino 2 posti in legno di acacia e cuscini écru",
    "categoria": "Divani",
    "prezzo": 321.3,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-da-giardino-2-posti-in-legno-di-acacia-e-cuscini-ecru-1000-0-40-230214_3.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-da-giardino-2-posti-in-legno-di-acacia-e-cuscini-ecru-negara-230214.htm",
    "larghezza_cm": 120,
    "profondita_cm": 75,
    "descrizione": "Divano da giardino 2 posti in legno di acacia e cuscini écru"
  },
  {
    "nome": "Amance - Sedia da giardino in legno di teak e corda beige",
    "categoria": "Sedie",
    "prezzo": 199,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-da-giardino-in-legno-di-teak-e-corda-beige-1000-4-21-246062_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-da-giardino-in-legno-di-teak-e-corda-beige-amance-246062.htm",
    "larghezza_cm": 57,
    "profondita_cm": 57,
    "descrizione": "Sedia da giardino in legno di teak e corda beige"
  },
  {
    "nome": "St Tropez - Divano 3/4 posti in rattan e cuscini écru",
    "categoria": "Divani",
    "prezzo": 1499,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/121812_0/divano-3-4-posti-in-rattan-e-cuscini-ecru.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-3-4-posti-in-rattan-e-cuscini-ecru-st-tropez-121812.htm",
    "larghezza_cm": 278,
    "profondita_cm": 125,
    "descrizione": "Divano 3/4 posti in rattan e cuscini écru"
  },
  {
    "nome": "Falak Business - Sedie da pranzo da giardino professionali in legno di acacia (x2)",
    "categoria": "Sedie",
    "prezzo": 299,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedie-da-pranzo-da-giardino-professionali-in-legno-di-acacia-x2-1000-15-26-238236_5.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedie-da-pranzo-da-giardino-professionali-in-legno-di-acacia-x2-falak-business-238236.htm",
    "larghezza_cm": 60.5,
    "profondita_cm": 56,
    "descrizione": "Sedie da pranzo da giardino professionali in legno di acacia (x2)"
  },
  {
    "nome": "Marignane - Divano da giardino a 3 posti in acciaio nero e cuscini bianco sporco",
    "categoria": "Divani",
    "prezzo": 599,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/238313_0/divano-da-giardino-a-3-posti-in-acciaio-nero-e-cuscini-bianco-sporco.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-da-giardino-a-3-posti-in-acciaio-nero-e-cuscini-bianco-sporco-marignane-238313.htm",
    "larghezza_cm": 190,
    "profondita_cm": 78,
    "descrizione": "Divano da giardino a 3 posti in acciaio nero e cuscini bianco sporco"
  },
  {
    "nome": "Sedia da ufficio regolabile in tessuto bouclé beige con base in alluminio",
    "categoria": "Sedie",
    "prezzo": 299,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/253773_0/sedia-da-ufficio-regolabile-in-tessuto-boucle-beige-con-base-in-alluminio.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-da-ufficio-regolabile-in-tessuto-boucle-beige-con-base-in-alluminio-253773.htm",
    "larghezza_cm": 62.5,
    "profondita_cm": 72,
    "descrizione": "Sedia da ufficio regolabile in tessuto bouclé beige con base in alluminio"
  },
  {
    "nome": "Kafe Business - Sedia da bar da giardino professionale in alluminio effetto bambù e resina intrecciata riciclata multicolore",
    "categoria": "Sedie",
    "prezzo": 149,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-da-bar-da-giardino-professionale-in-alluminio-effetto-bambu-e-resina-intrecciata-riciclata-multicolore-1000-6-40-238414_2.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-da-bar-da-giardino-professionale-in-alluminio-effetto-bambu-e-resina-intrecciata-riciclata-multicolore-kafe-business-238414.htm",
    "larghezza_cm": 44.5,
    "profondita_cm": 56.5,
    "descrizione": "Sedia da bar da giardino professionale in alluminio effetto bambù e resina intrecciata riciclata multicolore"
  },
  {
    "nome": "St Raphaël - Divano da giardino in resina intrecciata riciclata 3 posti",
    "categoria": "Divani",
    "prezzo": 949,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-da-giardino-in-resina-intrecciata-riciclata-3-posti-1000-0-31-238323_8.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-da-giardino-in-resina-intrecciata-riciclata-3-posti-st-raphael-238323.htm",
    "larghezza_cm": 220,
    "profondita_cm": 90,
    "descrizione": "Divano da giardino in resina intrecciata riciclata 3 posti"
  },
  {
    "nome": "Newbury Business - Sedia da ufficio professionale in tessuto di poliestere riciclato bouclé écru",
    "categoria": "Sedie",
    "prezzo": 249,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-da-ufficio-professionale-in-tessuto-di-poliestere-riciclato-boucle-ecru-1000-5-0-230338_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-da-ufficio-professionale-in-tessuto-di-poliestere-riciclato-boucle-ecru-newbury-business-230338.htm",
    "larghezza_cm": 67.5,
    "profondita_cm": 61,
    "descrizione": "Sedia da ufficio professionale in tessuto di poliestere riciclato bouclé écru"
  },
  {
    "nome": "Cerrado - Divano da giardino 3/4 posti in resina intrecciata riciclata effetto rattan e poliestere riciclato grigio antracite",
    "categoria": "Divani",
    "prezzo": 1099,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-da-giardino-3-4-posti-in-resina-intrecciata-riciclata-effetto-rattan-e-poliestere-riciclato-grigio-antracite-1000-13-1-238047_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-da-giardino-3-4-posti-in-resina-intrecciata-riciclata-effetto-rattan-e-poliestere-riciclato-grigio-antracite-cerrado-238047.htm",
    "larghezza_cm": 223,
    "profondita_cm": 99,
    "descrizione": "Divano da giardino 3/4 posti in resina intrecciata riciclata effetto rattan e poliestere riciclato grigio antracite"
  },
  {
    "nome": "Grande tappeto in lana trapuntato e intagliato con motivi ecru contemporanei, 200x300 cm",
    "categoria": "Tappeti",
    "prezzo": 499,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/255039/grande-tappeto-in-lana-trapuntato-e-intagliato-con-motivi-ecru-contemporanei-200x300-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/grande-tappeto-in-lana-trapuntato-e-intagliato-con-motivi-ecru-contemporanei-200x300-cm-255039.htm",
    "larghezza_cm": 200,
    "profondita_cm": 59,
    "descrizione": "Grande tappeto in lana trapuntato e intagliato con motivi ecru contemporanei, 200x300 cm"
  },
  {
    "nome": "Lampada a sospensione in canapa intrecciata",
    "categoria": "Lampade",
    "prezzo": 169,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/lampada-a-sospensione-in-canapa-intrecciata-1000-0-23-210681_3.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/lampada-a-sospensione-in-canapa-intrecciata-210681.htm",
    "larghezza_cm": 59,
    "profondita_cm": 59,
    "descrizione": "Lampada a sospensione in canapa intrecciata"
  },
  {
    "nome": "Piatto fondo in gres azzurro e écru con bordo bordeaux",
    "categoria": "Cucina",
    "prezzo": 7.99,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/253359/piatto-fondo-in-gres-azzurro-e-ecru-con-bordo-bordeaux.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/piatto-fondo-in-gres-azzurro-e-ecru-con-bordo-bordeaux-253359.htm",
    "larghezza_cm": 20,
    "profondita_cm": 20,
    "descrizione": "Piatto fondo in gres azzurro e écru con bordo bordeaux"
  },
  {
    "nome": "Warren - Sedia per isola centrale beige e dorata alt. 66 cm",
    "categoria": "Sedie",
    "prezzo": 279,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-per-isola-centrale-beige-e-dorata-alt-66-cm-1000-14-26-231061_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-per-isola-centrale-beige-e-dorata-alt-66-cm-warren-231061.htm",
    "larghezza_cm": 55,
    "profondita_cm": 56.5,
    "descrizione": "Sedia per isola centrale beige e dorata alt. 66 cm"
  },
  {
    "nome": "Piatto da dessert in gres écru con motivo sole e bordo arancione",
    "categoria": "Cucina",
    "prezzo": 6.99,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/253358/piatto-da-dessert-in-gres-ecru-con-motivo-sole-e-bordo-arancione.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/piatto-da-dessert-in-gres-ecru-con-motivo-sole-e-bordo-arancione-253358.htm",
    "larghezza_cm": 21.5,
    "profondita_cm": 21.5,
    "descrizione": "Piatto da dessert in gres écru con motivo sole e bordo arancione"
  },
  {
    "nome": "Selva BUSINESS - Sedia per ristorante in acciaio nero e resina riciclata bicolore",
    "categoria": "Sedie",
    "prezzo": 89.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-per-ristorante-in-acciaio-nero-e-resina-riciclata-bicolore-1000-5-8-246131_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-per-ristorante-in-acciaio-nero-e-resina-riciclata-bicolore-selva-business-246131.htm",
    "larghezza_cm": 47,
    "profondita_cm": 58.5,
    "descrizione": "Sedia per ristorante in acciaio nero e resina riciclata bicolore"
  },
  {
    "nome": "Candela profumata in vetro color terracotta 7x7",
    "categoria": "Decorazioni",
    "prezzo": 5.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/candela-profumata-in-vetro-color-terracotta-7x7-1000-16-6-220217_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/candela-profumata-in-vetro-color-terracotta-7x7-220217.htm",
    "larghezza_cm": 7,
    "profondita_cm": 7,
    "descrizione": "Candela profumata in vetro color terracotta 7x7"
  },
  {
    "nome": "Cuscino in lino lavato terracotta 45x45cm",
    "categoria": "Tessile",
    "prezzo": 25.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/cuscino-in-lino-lavato-terracotta-45x45cm-1000-13-31-223563_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/cuscino-in-lino-lavato-terracotta-45x45cm-223563.htm",
    "larghezza_cm": 45,
    "profondita_cm": 10,
    "descrizione": "Cuscino in lino lavato terracotta 45x45cm"
  },
  {
    "nome": "Kafe Business - Sedia da bar da giardino professionale in resina intrecciata riciclata bianca e verde",
    "categoria": "Sedie",
    "prezzo": 149,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-da-bar-da-giardino-professionale-in-resina-intrecciata-riciclata-bianca-e-verde-1000-4-38-238412_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-da-bar-da-giardino-professionale-in-resina-intrecciata-riciclata-bianca-e-verde-kafe-business-238412.htm",
    "larghezza_cm": 44.5,
    "profondita_cm": 56.5,
    "descrizione": "Sedia da bar da giardino professionale in resina intrecciata riciclata bianca e verde"
  },
  {
    "nome": "Amalfi - Divano da giardino 2/3 posti in corda intrecciata grigio antracite e legno massello di acacia",
    "categoria": "Divani",
    "prezzo": 200,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-da-giardino-2-3-posti-in-corda-intrecciata-grigio-antracite-e-legno-massello-di-acacia-1000-6-0-218694_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-da-giardino-2-3-posti-in-corda-intrecciata-grigio-antracite-e-legno-massello-di-acacia-amalfi-218694.htm",
    "larghezza_cm": 190,
    "profondita_cm": 85,
    "descrizione": "Divano da giardino 2/3 posti in corda intrecciata grigio antracite e legno massello di acacia"
  },
  {
    "nome": "Set di 6 segnabicchieri in metallo multicolore",
    "categoria": "Cucina",
    "prezzo": 3.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/set-di-6-segnabicchieri-in-metallo-multicolore-1000-0-13-247571_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/set-di-6-segnabicchieri-in-metallo-multicolore-247571.htm",
    "larghezza_cm": 2,
    "profondita_cm": 0.2,
    "descrizione": "Set di 6 segnabicchieri in metallo multicolore"
  },
  {
    "nome": "Lilo - Pouf in tessuto bouclé blu notte",
    "categoria": "Divani",
    "prezzo": 399,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/pouf-in-tessuto-boucle-blu-notte-1000-6-39-238618_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/pouf-in-tessuto-boucle-blu-notte-lilo-238618.htm",
    "larghezza_cm": 100,
    "profondita_cm": 77,
    "descrizione": "Pouf in tessuto bouclé blu notte"
  },
  {
    "nome": "Tufo Business - Sedia da ufficio professionale nera",
    "categoria": "Sedie",
    "prezzo": 299,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-da-ufficio-professionale-nera-1000-4-15-209648_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-da-ufficio-professionale-nera-tufo-business-209648.htm",
    "larghezza_cm": 70,
    "profondita_cm": 75,
    "descrizione": "Sedia da ufficio professionale nera"
  },
  {
    "nome": "Negara - Angolo per divano da giardino componibile in legno di acacia e cuscini écru",
    "categoria": "Divani",
    "prezzo": 279.2,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/angolo-per-divano-da-giardino-componibile-in-legno-di-acacia-e-cuscini-ecru-1000-1-0-230215_3.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/angolo-per-divano-da-giardino-componibile-in-legno-di-acacia-e-cuscini-ecru-negara-230215.htm",
    "larghezza_cm": 75,
    "profondita_cm": 75,
    "descrizione": "Angolo per divano da giardino componibile in legno di acacia e cuscini écru"
  },
  {
    "nome": "Dispenser di bevande in vetro trasparente da 3,4 l",
    "categoria": "Cucina",
    "prezzo": 7.99,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/252738/dispenser-di-bevande-in-vetro-trasparente-da-3-4-l.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/dispenser-di-bevande-in-vetro-trasparente-da-3-4-l-252738.htm",
    "larghezza_cm": 15,
    "profondita_cm": 15,
    "descrizione": "Dispenser di bevande in vetro trasparente da 3,4 l"
  },
  {
    "nome": "Lotto di 2 - Piatto fondo in gres marrone",
    "categoria": "Cucina",
    "prezzo": 11.1,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/253184/piatto-fondo-in-gres-marrone.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/piatto-fondo-in-gres-marrone-253184.htm",
    "larghezza_cm": 20,
    "profondita_cm": 20,
    "descrizione": "Piatto fondo in gres marrone"
  },
  {
    "nome": "Ice - Sedia in stile scandinavo in polipropilene verde salvia e legno di hevea",
    "categoria": "Sedie",
    "prezzo": 69.99,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/210464_0/sedia-in-stile-scandinavo-in-polipropilene-verde-salvia-e-legno-di-hevea.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-in-stile-scandinavo-in-polipropilene-verde-salvia-e-legno-di-hevea-ice-210464.htm",
    "larghezza_cm": 48,
    "profondita_cm": 54.5,
    "descrizione": "Sedia in stile scandinavo in polipropilene verde salvia e legno di hevea"
  },
  {
    "nome": "Gala - Sedia verde con gambe in legno di hevea",
    "categoria": "Sedie",
    "prezzo": 149,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-verde-con-gambe-in-legno-di-hevea-1000-15-17-249830_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-verde-con-gambe-in-legno-di-hevea-gala-249830.htm",
    "larghezza_cm": 46,
    "profondita_cm": 53,
    "descrizione": "Sedia verde con gambe in legno di hevea"
  },
  {
    "nome": "Louis - Sedia a medaglione in lino e massello di frassino",
    "categoria": "Sedie",
    "prezzo": 199,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-a-medaglione-in-lino-e-massello-di-frassino-1000-7-4-234811_3.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-a-medaglione-in-lino-e-massello-di-frassino-louis-234811.htm",
    "larghezza_cm": 50.5,
    "profondita_cm": 55.5,
    "descrizione": "Sedia a medaglione in lino e massello di frassino"
  },
  {
    "nome": "St Raphaël - Modulo centrale per divano componibile da giardino in resina intrecciata riciclata",
    "categoria": "Divani",
    "prezzo": 299,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/modulo-centrale-per-divano-componibile-da-giardino-in-resina-intrecciata-riciclata-1000-11-25-238317_3.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/modulo-centrale-per-divano-componibile-da-giardino-in-resina-intrecciata-riciclata-st-raphael-238317.htm",
    "larghezza_cm": 78,
    "profondita_cm": 87,
    "descrizione": "Modulo centrale per divano componibile da giardino in resina intrecciata riciclata"
  },
  {
    "nome": "Set di posate da 24 pezzi in acciaio inossidabile color argento",
    "categoria": "Cucina",
    "prezzo": 49.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/set-di-posate-da-24-pezzi-in-acciaio-inossidabile-color-argento-1000-1-27-244223_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/set-di-posate-da-24-pezzi-in-acciaio-inossidabile-color-argento-244223.htm",
    "larghezza_cm": 26.5,
    "profondita_cm": 15,
    "descrizione": "Set di posate da 24 pezzi in acciaio inossidabile color argento"
  },
  {
    "nome": "Huppy - Sedia in acciaio cromato con cuscino marrone effetto pelle antica",
    "categoria": "Sedie",
    "prezzo": 99.99,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/250036/sedia-in-acciaio-cromato-con-cuscino-marrone-effetto-pelle-antica.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-in-acciaio-cromato-con-cuscino-marrone-effetto-pelle-antica-huppy-250036.htm",
    "larghezza_cm": 53.2,
    "profondita_cm": 57.5,
    "descrizione": "Sedia in acciaio cromato con cuscino marrone effetto pelle antica"
  },
  {
    "nome": "St Raphaël - Modulo centrale per divano componibile da giardino in resina intrecciata riciclata",
    "categoria": "Divani",
    "prezzo": 299,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/modulo-centrale-per-divano-componibile-da-giardino-in-resina-intrecciata-riciclata-1000-13-27-238319_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/modulo-centrale-per-divano-componibile-da-giardino-in-resina-intrecciata-riciclata-st-raphael-238319.htm",
    "larghezza_cm": 78,
    "profondita_cm": 87,
    "descrizione": "Modulo centrale per divano componibile da giardino in resina intrecciata riciclata"
  },
  {
    "nome": "Set di 4 cucchiai in acciaio inox nero opaco",
    "categoria": "Cucina",
    "prezzo": 14.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/set-di-4-cucchiai-in-acciaio-inox-nero-opaco-1000-10-32-227623_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/set-di-4-cucchiai-in-acciaio-inox-nero-opaco-227623.htm",
    "larghezza_cm": 21,
    "profondita_cm": 5.5,
    "descrizione": "Set di 4 cucchiai in acciaio inox nero opaco"
  },
  {
    "nome": "Puravida - Fodera di protezione per divano da giardino lineare 3 posti nera",
    "categoria": "Divani",
    "prezzo": 45.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/fodera-di-protezione-per-divano-da-giardino-lineare-3-posti-nera-1000-5-17-229658_5.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/fodera-di-protezione-per-divano-da-giardino-lineare-3-posti-nera-puravida-229658.htm",
    "larghezza_cm": 240,
    "profondita_cm": 100,
    "descrizione": "Fodera di protezione per divano da giardino lineare 3 posti nera"
  },
  {
    "nome": "Isola - Cuscini per angolo di divano da giardino de poliestere riciclato grigio scuro",
    "categoria": "Divani",
    "prezzo": 119,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/251252/cuscini-per-angolo-di-divano-da-giardino-de-poliestere-riciclato-grigio-scuro.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/cuscini-per-angolo-di-divano-da-giardino-de-poliestere-riciclato-grigio-scuro-isola-251252.htm",
    "larghezza_cm": 74,
    "profondita_cm": 74,
    "descrizione": "Cuscini per angolo di divano da giardino de poliestere riciclato grigio scuro"
  },
  {
    "nome": "Tazza in vetro doppio",
    "categoria": "Cucina",
    "prezzo": 6.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tazza-in-vetro-doppio-1000-9-4-235221_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tazza-in-vetro-doppio-235221.htm",
    "larghezza_cm": 11.3,
    "profondita_cm": 11.3,
    "descrizione": "Tazza in vetro doppio"
  },
  {
    "nome": "Porto Rico - Fodera per cuscino écru per divano PORTO RICO",
    "categoria": "Divani",
    "prezzo": 249,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/fodera-per-cuscino-ecru-per-divano-porto-rico-1000-7-6-229524_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/fodera-per-cuscino-ecru-per-divano-porto-rico-porto-rico-229524.htm",
    "larghezza_cm": 240,
    "profondita_cm": 244,
    "descrizione": "Fodera per cuscino écru per divano PORTO RICO"
  },
  {
    "nome": "Cuscino in velluto effetto invecchiato blu petrolio 45x45 cm, OEKO-TEX®",
    "categoria": "Tessile",
    "prezzo": 19.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/cuscino-in-velluto-effetto-invecchiato-blu-petrolio-45x45-cm-oeko-tex-1000-9-21-235238_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/cuscino-in-velluto-effetto-invecchiato-blu-petrolio-45x45-cm-oeko-tex-235238.htm",
    "larghezza_cm": 45,
    "profondita_cm": 10,
    "descrizione": "Cuscino in velluto effetto invecchiato blu petrolio 45x45 cm, OEKO-TEX®"
  },
  {
    "nome": "Honey - Poltrona in velluto a coste arancione",
    "categoria": "Divani",
    "prezzo": 199,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltrona-in-velluto-a-coste-arancione-1000-4-11-243223_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-in-velluto-a-coste-arancione-honey-243223.htm",
    "larghezza_cm": 62.5,
    "profondita_cm": 86.5,
    "descrizione": "Poltrona in velluto a coste arancione"
  },
  {
    "nome": "Barattolo in vetro con coperchio in legno di pino alt. 38 cm",
    "categoria": "Cucina",
    "prezzo": 8.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/barattolo-in-vetro-con-coperchio-in-legno-di-pino-alt-38-cm-1000-2-36-231440_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/barattolo-in-vetro-con-coperchio-in-legno-di-pino-alt-38-cm-231440.htm",
    "larghezza_cm": 10,
    "profondita_cm": 10,
    "descrizione": "Barattolo in vetro con coperchio in legno di pino alt. 38 cm"
  },
  {
    "nome": "Set di 4 ciotole in gres bianco, blu, rosso e rosa con motivi a cuore",
    "categoria": "Cucina",
    "prezzo": 19.99,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/252065/set-di-4-ciotole-in-gres-bianco-blu-rosso-e-rosa-con-motivi-a-cuore.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/set-di-4-ciotole-in-gres-bianco-blu-rosso-e-rosa-con-motivi-a-cuore-252065.htm",
    "larghezza_cm": 12,
    "profondita_cm": 12,
    "descrizione": "Set di 4 ciotole in gres bianco, blu, rosso e rosa con motivi a cuore"
  },
  {
    "nome": "Poltrona girevole in tessuto tramato verde kaki",
    "categoria": "Divani",
    "prezzo": 349,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/252212/poltrona-girevole-in-tessuto-tramato-verde-kaki.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-girevole-in-tessuto-tramato-verde-kaki-252212.htm",
    "larghezza_cm": 83.5,
    "profondita_cm": 79.5,
    "descrizione": "Poltrona girevole in tessuto tramato verde kaki"
  },
  {
    "nome": "Paralume per lampada a sospensione da esterno in metallo marrone",
    "categoria": "Lampade",
    "prezzo": 59.5,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/paralume-per-lampada-a-sospensione-da-esterno-in-metallo-marrone-1000-6-14-245809_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/paralume-per-lampada-a-sospensione-da-esterno-in-metallo-marrone-245809.htm",
    "larghezza_cm": 70,
    "profondita_cm": 70,
    "descrizione": "Paralume per lampada a sospensione da esterno in metallo marrone"
  },
  {
    "nome": "Set di 6 bicchieri in vetro trasparente e multicolore",
    "categoria": "Cucina",
    "prezzo": 24.99,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/253150/set-di-6-bicchieri-in-vetro-trasparente-e-multicolore.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/set-di-6-bicchieri-in-vetro-trasparente-e-multicolore-253150.htm",
    "larghezza_cm": 27.3,
    "profondita_cm": 8.8,
    "descrizione": "Set di 6 bicchieri in vetro trasparente e multicolore"
  },
  {
    "nome": "Set 4 tazzine in vetro e piattini in bambù",
    "categoria": "Cucina",
    "prezzo": 14.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/set-4-tazzine-in-vetro-e-piattini-in-bambu-1000-7-0-197989_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/set-4-tazzine-in-vetro-e-piattini-in-bambu-197989.htm",
    "larghezza_cm": 7.5,
    "profondita_cm": 7.5,
    "descrizione": "Set 4 tazzine in vetro e piattini in bambù"
  },
  {
    "nome": "Mimizan - Lettino con sponde bicolore 90x190 cm",
    "categoria": "Letti",
    "prezzo": 299,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/lettino-con-sponde-bicolore-90x190-cm-1000-3-31-241726_2.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/lettino-con-sponde-bicolore-90x190-cm-mimizan-241726.htm",
    "larghezza_cm": 201.8,
    "profondita_cm": 97.6,
    "descrizione": "Lettino con sponde bicolore 90x190 cm"
  },
  {
    "nome": "Marius - Poltrona in bouclé marrone",
    "categoria": "Divani",
    "prezzo": 149,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltrona-in-boucle-marrone-1000-4-19-249955_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-in-boucle-marrone-marius-249955.htm",
    "larghezza_cm": 54.5,
    "profondita_cm": 60,
    "descrizione": "Poltrona in bouclé marrone"
  },
  {
    "nome": "Candela profumata in vetro maculato bianco e oro",
    "categoria": "Decorazioni",
    "prezzo": 12.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/candela-profumata-in-vetro-maculato-bianco-e-oro-1000-8-21-244791_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/candela-profumata-in-vetro-maculato-bianco-e-oro-244791.htm",
    "larghezza_cm": 7.5,
    "profondita_cm": 7.5,
    "descrizione": "Candela profumata in vetro maculato bianco e oro"
  },
  {
    "nome": "Malaga - Letto a castello con cassetto in rattan intrecciato 90x190 cm",
    "categoria": "Letti",
    "prezzo": 1199,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/letto-a-castello-con-cassetto-in-rattan-intrecciato-90x190-cm-1000-3-25-233889_2.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/letto-a-castello-con-cassetto-in-rattan-intrecciato-90x190-cm-malaga-233889.htm",
    "larghezza_cm": 152,
    "profondita_cm": 204.4,
    "descrizione": "Letto a castello con cassetto in rattan intrecciato 90x190 cm"
  },
  {
    "nome": "Lotto di 6 - Bicchiere da spritz in vetro con stampa arancione",
    "categoria": "Cucina",
    "prezzo": 23.94,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/bicchiere-da-spritz-in-vetro-con-stampa-arancione-1000-10-25-215111_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/bicchiere-da-spritz-in-vetro-con-stampa-arancione-215111.htm",
    "larghezza_cm": 8,
    "profondita_cm": 8,
    "descrizione": "Bicchiere da spritz in vetro con stampa arancione"
  },
  {
    "nome": "Casanova - Poltrona in lino",
    "categoria": "Divani",
    "prezzo": 419,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/249186/poltrona-in-lino.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-in-lino-casanova-249186.htm",
    "larghezza_cm": 67,
    "profondita_cm": 74,
    "descrizione": "Poltrona in lino"
  },
  {
    "nome": "Cavo di sospensione per lampada a sospensione bianco, 120 cm",
    "categoria": "Lampade",
    "prezzo": 2.95,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/cavo-di-sospensione-per-lampada-a-sospensione-bianco-120-cm-1000-2-31-241521_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/cavo-di-sospensione-per-lampada-a-sospensione-bianco-120-cm-241521.htm",
    "larghezza_cm": 9,
    "profondita_cm": 9,
    "descrizione": "Cavo di sospensione per lampada a sospensione bianco, 120 cm"
  },
  {
    "nome": "Portacapsule girevole in acciaio nero",
    "categoria": "Cucina",
    "prezzo": 14.99,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/252301/portacapsule-girevole-in-acciaio-nero.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/portacapsule-girevole-in-acciaio-nero-252301.htm",
    "larghezza_cm": 14,
    "profondita_cm": 14,
    "descrizione": "Portacapsule girevole in acciaio nero"
  },
  {
    "nome": "Guinguette - Set di 2 sedie da giardino pieghevoli in acciaio verde",
    "categoria": "Sedie",
    "prezzo": 41.95,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/set-di-2-sedie-da-giardino-pieghevoli-in-acciaio-verde-1000-9-22-229458_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/set-di-2-sedie-da-giardino-pieghevoli-in-acciaio-verde-guinguette-229458.htm",
    "larghezza_cm": 41,
    "profondita_cm": 46,
    "descrizione": "Set di 2 sedie da giardino pieghevoli in acciaio verde"
  },
  {
    "nome": "Poltrona girevole in tessuto bouclé azzurro",
    "categoria": "Divani",
    "prezzo": 349,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/253095/poltrona-girevole-in-tessuto-boucle-azzurro.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-girevole-in-tessuto-boucle-azzurro-253095.htm",
    "larghezza_cm": 83.5,
    "profondita_cm": 79.5,
    "descrizione": "Poltrona girevole in tessuto bouclé azzurro"
  },
  {
    "nome": "Cavo di sospensione nero 120 cm per lampada a sospensione",
    "categoria": "Lampade",
    "prezzo": 2.95,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/cavo-di-sospensione-nero-120-cm-per-lampada-a-sospensione-1000-1-30-241520_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/cavo-di-sospensione-nero-120-cm-per-lampada-a-sospensione-241520.htm",
    "larghezza_cm": 9,
    "profondita_cm": 9,
    "descrizione": "Cavo di sospensione nero 120 cm per lampada a sospensione"
  },
  {
    "nome": "Lotto di 2 - Coppa gelato a forma di fiore in vetro trasparente",
    "categoria": "Cucina",
    "prezzo": 9.98,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/251475/coppa-gelato-a-forma-di-fiore-in-vetro-trasparente.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/coppa-gelato-a-forma-di-fiore-in-vetro-trasparente-251475.htm",
    "larghezza_cm": 10.8,
    "profondita_cm": 10.8,
    "descrizione": "Coppa gelato a forma di fiore in vetro trasparente"
  },
  {
    "nome": "Mafalda Business - Set di 2 sedie per ristorante in acciaio grigio antracite e beige",
    "categoria": "Sedie",
    "prezzo": 129,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/set-di-2-sedie-per-ristorante-in-acciaio-grigio-antracite-e-beige-1000-16-20-245938_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/set-di-2-sedie-per-ristorante-in-acciaio-grigio-antracite-e-beige-mafalda-business-245938.htm",
    "larghezza_cm": 66,
    "profondita_cm": 57,
    "descrizione": "Set di 2 sedie per ristorante in acciaio grigio antracite e beige"
  },
  {
    "nome": "Moon - Poltrona e poggiapiedi in bouclé blu notte",
    "categoria": "Divani",
    "prezzo": 399,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltrona-e-poggiapiedi-in-boucle-blu-notte-1000-14-6-249778_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-e-poggiapiedi-in-boucle-blu-notte-moon-249778.htm",
    "larghezza_cm": 81,
    "profondita_cm": 87,
    "descrizione": "Poltrona e poggiapiedi in bouclé blu notte"
  },
  {
    "nome": "Piantana in metallo dorato H.206 cm",
    "categoria": "Lampade",
    "prezzo": 129,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/piantana-in-metallo-dorato-h-206-cm-1000-9-9-165198_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/piantana-in-metallo-dorato-h-206-cm-165198.htm",
    "larghezza_cm": 45,
    "profondita_cm": 119,
    "descrizione": "Piantana in metallo dorato H.206 cm"
  },
  {
    "nome": "Scatola per il pane in acciaio color avorio con manico in bambù.",
    "categoria": "Cucina",
    "prezzo": 19.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/scatola-per-il-pane-in-acciaio-color-avorio-con-manico-in-bambu-1000-14-11-233424_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/scatola-per-il-pane-in-acciaio-color-avorio-con-manico-in-bambu-233424.htm",
    "larghezza_cm": 22,
    "profondita_cm": 18.5,
    "descrizione": "Scatola per il pane in acciaio color avorio con manico in bambù."
  },
  {
    "nome": "Guinguette - Set di 2 sedie da giardino pieghevoli in acciaio giallo",
    "categoria": "Sedie",
    "prezzo": 59.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/set-di-2-sedie-da-giardino-pieghevoli-in-acciaio-giallo-1000-13-5-237928_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/set-di-2-sedie-da-giardino-pieghevoli-in-acciaio-giallo-guinguette-237928.htm",
    "larghezza_cm": 41,
    "profondita_cm": 46,
    "descrizione": "Set di 2 sedie da giardino pieghevoli in acciaio giallo"
  },
  {
    "nome": "Indiana - Poltrona in legno di acacia con cuscini in cotone e lino écru",
    "categoria": "Divani",
    "prezzo": 359,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltrona-in-legno-di-acacia-con-cuscini-in-cotone-e-lino-ecru-1000-1-2-222140_6.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-in-legno-di-acacia-con-cuscini-in-cotone-e-lino-ecru-indiana-222140.htm",
    "larghezza_cm": 67,
    "profondita_cm": 79,
    "descrizione": "Poltrona in legno di acacia con cuscini in cotone e lino écru"
  },
  {
    "nome": "Lotto di 6 - Bicchiere trasparente a bolle in vetro",
    "categoria": "Cucina",
    "prezzo": 23.94,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/bicchiere-trasparente-a-bolle-in-vetro-1000-9-32-136111_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/bicchiere-trasparente-a-bolle-in-vetro-136111.htm",
    "larghezza_cm": 8,
    "profondita_cm": 8,
    "descrizione": "Bicchiere trasparente a bolle in vetro"
  },
  {
    "nome": "Set di 2 sedie per isola da cucina in tessuto tramato color écru con gambe in acciaio nero, alt. 66 cm",
    "categoria": "Sedie",
    "prezzo": 199,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/253433_0/set-di-2-sedie-per-isola-da-cucina-in-tessuto-tramato-color-ecru-con-gambe-in-acciaio-nero-alt-66-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/set-di-2-sedie-per-isola-da-cucina-in-tessuto-tramato-color-ecru-con-gambe-in-acciaio-nero-alt-66-cm-253433.htm",
    "larghezza_cm": 50.5,
    "profondita_cm": 54,
    "descrizione": "Set di 2 sedie per isola da cucina in tessuto tramato color écru con gambe in acciaio nero, alt. 66 cm"
  },
  {
    "nome": "Candela profumata in vetro e metallo dorato",
    "categoria": "Decorazioni",
    "prezzo": 5,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/candela-profumata-in-vetro-e-metallo-dorato-1000-1-27-241435_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/candela-profumata-in-vetro-e-metallo-dorato-241435.htm",
    "larghezza_cm": 7,
    "profondita_cm": 7,
    "descrizione": "Candela profumata in vetro e metallo dorato"
  },
  {
    "nome": "Lotto di 6 - Calice in vetro a bolle verde",
    "categoria": "Cucina",
    "prezzo": 41.94,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/calice-in-vetro-a-bolle-verde-1000-0-5-201110_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/calice-in-vetro-a-bolle-verde-201110.htm",
    "larghezza_cm": 8.5,
    "profondita_cm": 8.5,
    "descrizione": "Calice in vetro a bolle verde"
  },
  {
    "nome": "Guinguette - Set di 2 sedie pieghevoli da giardino in acciaio verde acqua",
    "categoria": "Sedie",
    "prezzo": 41.95,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/set-di-2-sedie-pieghevoli-da-giardino-in-acciaio-verde-acqua-1000-15-36-174860_5.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/set-di-2-sedie-pieghevoli-da-giardino-in-acciaio-verde-acqua-guinguette-174860.htm",
    "larghezza_cm": 41,
    "profondita_cm": 46,
    "descrizione": "Set di 2 sedie pieghevoli da giardino in acciaio verde acqua"
  },
  {
    "nome": "Kaishi Business - Set di 2 sedie per ristorante in polipropilene beige screziato",
    "categoria": "Sedie",
    "prezzo": 139,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/set-di-2-sedie-per-ristorante-in-polipropilene-beige-screziato-1000-5-31-247015_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/set-di-2-sedie-per-ristorante-in-polipropilene-beige-screziato-kaishi-business-247015.htm",
    "larghezza_cm": 59,
    "profondita_cm": 51,
    "descrizione": "Set di 2 sedie per ristorante in polipropilene beige screziato"
  },
  {
    "nome": "Piantana in metallo nera e bronzo, h 198 cm",
    "categoria": "Lampade",
    "prezzo": 129,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/piantana-in-metallo-nera-e-bronzo-h-198-cm-1000-11-10-177253_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/piantana-in-metallo-nera-e-bronzo-h-198-cm-177253.htm",
    "larghezza_cm": 45,
    "profondita_cm": 130,
    "descrizione": "Piantana in metallo nera e bronzo, h 198 cm"
  },
  {
    "nome": "Set di 4 bicchieri in vetro maculato trasparente, blu e bianco",
    "categoria": "Cucina",
    "prezzo": 12.45,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/250351/set-di-4-bicchieri-in-vetro-maculato-trasparente-blu-e-bianco.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/set-di-4-bicchieri-in-vetro-maculato-trasparente-blu-e-bianco-250351.htm",
    "larghezza_cm": 29,
    "profondita_cm": 23,
    "descrizione": "Set di 4 bicchieri in vetro maculato trasparente, blu e bianco"
  },
  {
    "nome": "Esma Business - Set di 2 sedie per ristorante in acciaio verde acqua",
    "categoria": "Sedie",
    "prezzo": 111.3,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/set-di-2-sedie-per-ristorante-in-acciaio-verde-acqua-1000-9-34-245829_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/set-di-2-sedie-per-ristorante-in-acciaio-verde-acqua-esma-business-245829.htm",
    "larghezza_cm": 54,
    "profondita_cm": 65,
    "descrizione": "Set di 2 sedie per ristorante in acciaio verde acqua"
  },
  {
    "nome": "Piantana con globo in vetro e metallo dorato Alt. 155",
    "categoria": "Lampade",
    "prezzo": 79.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/piantana-con-globo-in-vetro-e-metallo-dorato-alt-155-1000-4-23-201046_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/piantana-con-globo-in-vetro-e-metallo-dorato-alt-155-201046.htm",
    "larghezza_cm": 25,
    "profondita_cm": 35,
    "descrizione": "Piantana con globo in vetro e metallo dorato Alt. 155"
  },
  {
    "nome": "Esma Business - Set di 2 sedie per ristorante in acciaio lilla",
    "categoria": "Sedie",
    "prezzo": 111.3,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/set-di-2-sedie-per-ristorante-in-acciaio-lilla-1000-10-35-245830_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/set-di-2-sedie-per-ristorante-in-acciaio-lilla-esma-business-245830.htm",
    "larghezza_cm": 54,
    "profondita_cm": 65,
    "descrizione": "Set di 2 sedie per ristorante in acciaio lilla"
  },
  {
    "nome": "Luna - Set di 2 sedie marroni per isola centrale, legno di rovere e acciaio nero alt. 65 cm",
    "categoria": "Sedie",
    "prezzo": 259,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/set-di-2-sedie-marroni-per-isola-centrale-legno-di-rovere-e-acciaio-nero-alt-65-cm-1000-9-40-245999_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/set-di-2-sedie-marroni-per-isola-centrale-legno-di-rovere-e-acciaio-nero-alt-65-cm-luna-245999.htm",
    "larghezza_cm": 49,
    "profondita_cm": 50,
    "descrizione": "Set di 2 sedie marroni per isola centrale, legno di rovere e acciaio nero alt. 65 cm"
  },
  {
    "nome": "Minus - Poltrona effetto velluto greige",
    "categoria": "Divani",
    "prezzo": 159,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltrona-effetto-velluto-greige-1000-3-35-247880_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-effetto-velluto-greige-minus-247880.htm",
    "larghezza_cm": 65,
    "profondita_cm": 58,
    "descrizione": "Poltrona effetto velluto greige"
  },
  {
    "nome": "Sospensione industriale in vetro fumé nero",
    "categoria": "Lampade",
    "prezzo": 49.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sospensione-industriale-in-vetro-fume-nero-1000-4-14-184760_3.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sospensione-industriale-in-vetro-fume-nero-184760.htm",
    "larghezza_cm": 22,
    "profondita_cm": 22,
    "descrizione": "Sospensione industriale in vetro fumé nero"
  },
  {
    "nome": "Folly - Set di 2 sedie da bar beige in legno di pino e pioppo",
    "categoria": "Sedie",
    "prezzo": 265.3,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/set-di-2-sedie-da-bar-beige-in-legno-di-pino-e-pioppo-1000-11-8-241785_6.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/set-di-2-sedie-da-bar-beige-in-legno-di-pino-e-pioppo-folly-241785.htm",
    "larghezza_cm": 52,
    "profondita_cm": 60,
    "descrizione": "Set di 2 sedie da bar beige in legno di pino e pioppo"
  },
  {
    "nome": "Palm - Poltrona vintage in velluto ocra",
    "categoria": "Divani",
    "prezzo": 169,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltrona-vintage-in-velluto-ocra-1000-5-37-247882_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-vintage-in-velluto-ocra-palm-247882.htm",
    "larghezza_cm": 62.5,
    "profondita_cm": 72,
    "descrizione": "Poltrona vintage in velluto ocra"
  },
  {
    "nome": "Luna - Set di 2 sedie per isola centrale in bouclé bianco, legno di rovere e acciaio nero alt. 65 cm",
    "categoria": "Sedie",
    "prezzo": 259,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/set-di-2-sedie-per-isola-centrale-in-boucle-bianco-legno-di-rovere-e-acciaio-nero-alt-65-cm-1000-0-7-246007_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/set-di-2-sedie-per-isola-centrale-in-boucle-bianco-legno-di-rovere-e-acciaio-nero-alt-65-cm-luna-246007.htm",
    "larghezza_cm": 49,
    "profondita_cm": 50,
    "descrizione": "Set di 2 sedie per isola centrale in bouclé bianco, legno di rovere e acciaio nero alt. 65 cm"
  },
  {
    "nome": "Meyer - Poltrona in tessuto bouclé color ruggine",
    "categoria": "Divani",
    "prezzo": 299,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltrona-in-tessuto-boucle-color-ruggine-1000-6-26-230118_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-in-tessuto-boucle-color-ruggine-meyer-230118.htm",
    "larghezza_cm": 66.5,
    "profondita_cm": 73.5,
    "descrizione": "Poltrona in tessuto bouclé color ruggine"
  },
  {
    "nome": "Piantana in legno di mango con paralume in lino beige alt. 166 cm",
    "categoria": "Lampade",
    "prezzo": 189,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/piantana-in-legno-di-mango-con-paralume-in-lino-beige-alt-166-cm-1000-2-10-239532_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/piantana-in-legno-di-mango-con-paralume-in-lino-beige-alt-166-cm-239532.htm",
    "larghezza_cm": 50,
    "profondita_cm": 50,
    "descrizione": "Piantana in legno di mango con paralume in lino beige alt. 166 cm"
  },
  {
    "nome": "Campana per candela in vetro trasparente alt. 20 cm",
    "categoria": "Decorazioni",
    "prezzo": 9.99,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/253237/campana-per-candela-in-vetro-trasparente-alt-20-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/campana-per-candela-in-vetro-trasparente-alt-20-cm-253237.htm",
    "larghezza_cm": 12,
    "profondita_cm": 12,
    "descrizione": "Campana per candela in vetro trasparente alt. 20 cm"
  },
  {
    "nome": "Lotto di 6 - Bicchiere in vetro azzurro con bolle",
    "categoria": "Cucina",
    "prezzo": 29.94,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/252365/bicchiere-in-vetro-azzurro-con-bolle.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/bicchiere-in-vetro-azzurro-con-bolle-252365.htm",
    "larghezza_cm": 8,
    "profondita_cm": 8,
    "descrizione": "Bicchiere in vetro azzurro con bolle"
  },
  {
    "nome": "Set da aperitivo con 5 coppette in ceramica bianca e nera e vassoio in bambù nero",
    "categoria": "Cucina",
    "prezzo": 32.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/set-da-aperitivo-con-5-coppette-in-ceramica-bianca-e-nera-e-vassoio-in-bambu-nero-1000-7-19-243600_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/set-da-aperitivo-con-5-coppette-in-ceramica-bianca-e-nera-e-vassoio-in-bambu-nero-243600.htm",
    "larghezza_cm": 30.5,
    "profondita_cm": 30.5,
    "descrizione": "Set da aperitivo con 5 coppette in ceramica bianca e nera e vassoio in bambù nero"
  },
  {
    "nome": "Iza Business - Set di 2 sedie per ristorante in polipropilene beige screziato",
    "categoria": "Sedie",
    "prezzo": 139,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/set-di-2-sedie-per-ristorante-in-polipropilene-beige-screziato-1000-7-33-247017_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/set-di-2-sedie-per-ristorante-in-polipropilene-beige-screziato-iza-business-247017.htm",
    "larghezza_cm": 52.5,
    "profondita_cm": 50,
    "descrizione": "Set di 2 sedie per ristorante in polipropilene beige screziato"
  },
  {
    "nome": "Honey - Poltrona in tessuto giallo e legno di faggio",
    "categoria": "Divani",
    "prezzo": 199,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltrona-in-tessuto-giallo-e-legno-di-faggio-1000-5-20-209530_11.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-in-tessuto-giallo-e-legno-di-faggio-honey-209530.htm",
    "larghezza_cm": 62,
    "profondita_cm": 77,
    "descrizione": "Poltrona in tessuto giallo e legno di faggio"
  },
  {
    "nome": "Conny - Set di 2 sedie da bar in velluto a coste verde kaki",
    "categoria": "Sedie",
    "prezzo": 269,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/set-di-2-sedie-da-bar-in-velluto-a-coste-verde-kaki-1000-11-32-241768_5.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/set-di-2-sedie-da-bar-in-velluto-a-coste-verde-kaki-conny-241768.htm",
    "larghezza_cm": 49,
    "profondita_cm": 56.5,
    "descrizione": "Set di 2 sedie da bar in velluto a coste verde kaki"
  },
  {
    "nome": "Cottage - Poltrona da foderare bianca in tessuto",
    "categoria": "Divani",
    "prezzo": 100,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltrona-da-foderare-bianca-in-tessuto-1000-8-22-124703_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-da-foderare-bianca-in-tessuto-cottage-124703.htm",
    "larghezza_cm": 80,
    "profondita_cm": 92,
    "descrizione": "Poltrona da foderare bianca in tessuto"
  },
  {
    "nome": "Piantana in vetro soffiato verde e metallo dorato alt. 155cm",
    "categoria": "Lampade",
    "prezzo": 89.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/piantana-in-vetro-soffiato-verde-e-metallo-dorato-alt-155cm-1000-9-23-239709_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/piantana-in-vetro-soffiato-verde-e-metallo-dorato-alt-155cm-239709.htm",
    "larghezza_cm": 25,
    "profondita_cm": 25,
    "descrizione": "Piantana in vetro soffiato verde e metallo dorato alt. 155cm"
  },
  {
    "nome": "Anoki - Set di 2 sedie per isola centrale in rattan e acciaio nero alt. 66 cm",
    "categoria": "Sedie",
    "prezzo": 279,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/set-di-2-sedie-per-isola-centrale-in-rattan-e-acciaio-nero-alt-66-cm-1000-16-2-247519_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/set-di-2-sedie-per-isola-centrale-in-rattan-e-acciaio-nero-alt-66-cm-anoki-247519.htm",
    "larghezza_cm": 45,
    "profondita_cm": 56,
    "descrizione": "Set di 2 sedie per isola centrale in rattan e acciaio nero alt. 66 cm"
  },
  {
    "nome": "Indiana - Poltrona in legno d'acacia con cuscini di poliestere riciclato grigio chiné",
    "categoria": "Divani",
    "prezzo": 251.3,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltrona-in-legno-d-acacia-con-cuscini-di-poliestere-riciclato-grigio-chine-1000-8-16-247902_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-in-legno-d-acacia-con-cuscini-di-poliestere-riciclato-grigio-chine-indiana-247902.htm",
    "larghezza_cm": 67,
    "profondita_cm": 79,
    "descrizione": "Poltrona in legno d'acacia con cuscini di poliestere riciclato grigio chiné"
  },
  {
    "nome": "Piantana in carta con paralumi in poliestere riciclato beige alt. 141 cm",
    "categoria": "Lampade",
    "prezzo": 139,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/piantana-in-carta-con-paralumi-in-poliestere-riciclato-beige-alt-141-cm-1000-12-19-236261_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/piantana-in-carta-con-paralumi-in-poliestere-riciclato-beige-alt-141-cm-236261.htm",
    "larghezza_cm": 43,
    "profondita_cm": 43,
    "descrizione": "Piantana in carta con paralumi in poliestere riciclato beige alt. 141 cm"
  },
  {
    "nome": "Set tavolo e 2 sedie da giardino in acciaio e resina intrecciata color terracotta",
    "categoria": "Sedie",
    "prezzo": 199,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/251658/set-tavolo-e-2-sedie-da-giardino-in-acciaio-e-resina-intrecciata-color-terracotta.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/set-tavolo-e-2-sedie-da-giardino-in-acciaio-e-resina-intrecciata-color-terracotta-251658.htm",
    "larghezza_cm": 58,
    "profondita_cm": 52,
    "descrizione": "Set tavolo e 2 sedie da giardino in acciaio e resina intrecciata color terracotta"
  },
  {
    "nome": "Piantana in legno di mango con paralume in lino beige alt. 168cm",
    "categoria": "Lampade",
    "prezzo": 189,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/piantana-in-legno-di-mango-con-paralume-in-lino-beige-alt-168cm-1000-9-18-235153_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/piantana-in-legno-di-mango-con-paralume-in-lino-beige-alt-168cm-235153.htm",
    "larghezza_cm": 51,
    "profondita_cm": 51,
    "descrizione": "Piantana in legno di mango con paralume in lino beige alt. 168cm"
  },
  {
    "nome": "Set di candele profumate con portalumini (x4) in vetro multicolore",
    "categoria": "Decorazioni",
    "prezzo": 10.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/set-di-candele-profumate-con-portalumini-x4-in-vetro-multicolore-1000-9-39-221808_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/set-di-candele-profumate-con-portalumini-x4-in-vetro-multicolore-221808.htm",
    "larghezza_cm": 5,
    "profondita_cm": 5,
    "descrizione": "Set di candele profumate con portalumini (x4) in vetro multicolore"
  },
  {
    "nome": "Set tavolo e 2 sedie da giardino in acciaio e resina intrecciata verde",
    "categoria": "Sedie",
    "prezzo": 199,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/251656/set-tavolo-e-2-sedie-da-giardino-in-acciaio-e-resina-intrecciata-verde.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/set-tavolo-e-2-sedie-da-giardino-in-acciaio-e-resina-intrecciata-verde-251656.htm",
    "larghezza_cm": 58,
    "profondita_cm": 52,
    "descrizione": "Set tavolo e 2 sedie da giardino in acciaio e resina intrecciata verde"
  },
  {
    "nome": "Piantana in steli di rattan con paralume in lino bianco alt. 140 cm",
    "categoria": "Lampade",
    "prezzo": 149,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/piantana-in-steli-di-rattan-con-paralume-in-lino-bianco-alt-140-cm-1000-14-40-224023_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/piantana-in-steli-di-rattan-con-paralume-in-lino-bianco-alt-140-cm-224023.htm",
    "larghezza_cm": 30,
    "profondita_cm": 30,
    "descrizione": "Piantana in steli di rattan con paralume in lino bianco alt. 140 cm"
  },
  {
    "nome": "Piantana beige on paralume in rattan alt. 140",
    "categoria": "Lampade",
    "prezzo": 169,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/piantana-beige-on-paralume-in-rattan-alt-140-1000-1-1-232799_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/piantana-beige-on-paralume-in-rattan-alt-140-232799.htm",
    "larghezza_cm": 35,
    "profondita_cm": 35,
    "descrizione": "Piantana beige on paralume in rattan alt. 140"
  },
  {
    "nome": "Cofanetto di candele profumate in vetro con motivi natalizi rossi, bianchi e verdi",
    "categoria": "Decorazioni",
    "prezzo": 12.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/cofanetto-di-candele-profumate-in-vetro-con-motivi-natalizi-rossi-bianchi-e-verdi-1000-2-22-244751_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/cofanetto-di-candele-profumate-in-vetro-con-motivi-natalizi-rossi-bianchi-e-verdi-244751.htm",
    "larghezza_cm": 8,
    "profondita_cm": 8,
    "descrizione": "Cofanetto di candele profumate in vetro con motivi natalizi rossi, bianchi e verdi"
  },
  {
    "nome": "Tazze in vetro (x4) con supporto in metallo nero",
    "categoria": "Cucina",
    "prezzo": 12.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tazze-in-vetro-x4-con-supporto-in-metallo-nero-1000-8-14-241340_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tazze-in-vetro-x4-con-supporto-in-metallo-nero-241340.htm",
    "larghezza_cm": 9,
    "profondita_cm": 9,
    "descrizione": "Tazze in vetro (x4) con supporto in metallo nero"
  },
  {
    "nome": "Iseo - Set tavolo da giardino con 4 sedie in acciaio e alluminio grigio antracite e resina riciclata beige",
    "categoria": "Sedie",
    "prezzo": 599,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/set-tavolo-da-giardino-con-4-sedie-in-acciaio-e-alluminio-grigio-antracite-e-resina-riciclata-beige-1000-15-9-245886_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/set-tavolo-da-giardino-con-4-sedie-in-acciaio-e-alluminio-grigio-antracite-e-resina-riciclata-beige-iseo-245886.htm",
    "larghezza_cm": 117,
    "profondita_cm": 117,
    "descrizione": "Set tavolo da giardino con 4 sedie in acciaio e alluminio grigio antracite e resina riciclata beige"
  },
  {
    "nome": "Noham - Poltrona in tessuto bouclé marrone",
    "categoria": "Divani",
    "prezzo": 299,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltrona-in-tessuto-boucle-marrone-1000-4-8-241744_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-in-tessuto-boucle-marrone-noham-241744.htm",
    "larghezza_cm": 73.5,
    "profondita_cm": 81.5,
    "descrizione": "Poltrona in tessuto bouclé marrone"
  },
  {
    "nome": "Lidy - Set tavolo da giardino con 8 sedie in alluminio grigio antracite e resina beige",
    "categoria": "Sedie",
    "prezzo": 1299,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/set-tavolo-da-giardino-con-8-sedie-in-alluminio-grigio-antracite-e-resina-beige-1000-6-6-246047_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/set-tavolo-da-giardino-con-8-sedie-in-alluminio-grigio-antracite-e-resina-beige-lidy-246047.htm",
    "larghezza_cm": 234,
    "profondita_cm": 96,
    "descrizione": "Set tavolo da giardino con 8 sedie in alluminio grigio antracite e resina beige"
  },
  {
    "nome": "Sheep - Poltrona a tre gambe in velluto ocra",
    "categoria": "Divani",
    "prezzo": 229,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltrona-a-tre-gambe-in-velluto-ocra-1000-8-28-230120_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-a-tre-gambe-in-velluto-ocra-sheep-230120.htm",
    "larghezza_cm": 67,
    "profondita_cm": 61.5,
    "descrizione": "Poltrona a tre gambe in velluto ocra"
  },
  {
    "nome": "Cuscino in lino lavato blu indaco 45x45 cm",
    "categoria": "Tessile",
    "prezzo": 25.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/cuscino-in-lino-lavato-blu-indaco-45x45-cm-1000-11-6-231738_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/cuscino-in-lino-lavato-blu-indaco-45x45-cm-231738.htm",
    "larghezza_cm": 45,
    "profondita_cm": 10,
    "descrizione": "Cuscino in lino lavato blu indaco 45x45 cm"
  },
  {
    "nome": "Hipop - Poltrona in velluto blu con gambe in acciaio",
    "categoria": "Divani",
    "prezzo": 139,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltrona-in-velluto-blu-con-gambe-in-acciaio-1000-8-8-216078_5.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-in-velluto-blu-con-gambe-in-acciaio-hipop-216078.htm",
    "larghezza_cm": 71.5,
    "profondita_cm": 60,
    "descrizione": "Poltrona in velluto blu con gambe in acciaio"
  },
  {
    "nome": "Sinatra - Poltrona marrone in cuoio effetto anticato",
    "categoria": "Divani",
    "prezzo": 799,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltrona-marrone-in-cuoio-effetto-anticato-1000-10-37-241937_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-marrone-in-cuoio-effetto-anticato-sinatra-241937.htm",
    "larghezza_cm": 88,
    "profondita_cm": 96,
    "descrizione": "Poltrona marrone in cuoio effetto anticato"
  },
  {
    "nome": "Set di 10 candele lunghe e sottili bianche",
    "categoria": "Decorazioni",
    "prezzo": 6.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/set-di-10-candele-lunghe-e-sottili-bianche-1000-2-14-247080_4.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/set-di-10-candele-lunghe-e-sottili-bianche-247080.htm",
    "larghezza_cm": 1,
    "profondita_cm": 1,
    "descrizione": "Set di 10 candele lunghe e sottili bianche"
  },
  {
    "nome": "Lotto di 6 - Bicchiere in vetro verde con bolle",
    "categoria": "Cucina",
    "prezzo": 29.94,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/252364/bicchiere-in-vetro-verde-con-bolle.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/bicchiere-in-vetro-verde-con-bolle-252364.htm",
    "larghezza_cm": 8,
    "profondita_cm": 8,
    "descrizione": "Bicchiere in vetro verde con bolle"
  },
  {
    "nome": "Sockette - Poltrona in velluto nero e paglia di Vienna",
    "categoria": "Divani",
    "prezzo": 50,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltrona-in-velluto-nero-e-paglia-di-vienna-1000-14-23-238643_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-in-velluto-nero-e-paglia-di-vienna-sockette-238643.htm",
    "larghezza_cm": 63,
    "profondita_cm": 72.5,
    "descrizione": "Poltrona in velluto nero e paglia di Vienna"
  },
  {
    "nome": "Piantana in metallo nero con paralume beige alt. 151 cm",
    "categoria": "Lampade",
    "prezzo": 119,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/piantana-in-metallo-nero-con-paralume-beige-alt-151-cm-1000-5-14-235846_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/piantana-in-metallo-nero-con-paralume-beige-alt-151-cm-235846.htm",
    "larghezza_cm": 37,
    "profondita_cm": 37,
    "descrizione": "Piantana in metallo nero con paralume beige alt. 151 cm"
  },
  {
    "nome": "Cuscino in lino lavato bianco 45x45cm",
    "categoria": "Tessile",
    "prezzo": 25.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/cuscino-in-lino-lavato-bianco-45x45cm-1000-11-36-223527_2.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/cuscino-in-lino-lavato-bianco-45x45cm-223527.htm",
    "larghezza_cm": 45,
    "profondita_cm": 10,
    "descrizione": "Cuscino in lino lavato bianco 45x45cm"
  },
  {
    "nome": "Vassoio bianco in legno di mango bianco",
    "categoria": "Cucina",
    "prezzo": 14.95,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/vassoio-bianco-in-legno-di-mango-bianco-1000-1-26-247912_3.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/vassoio-bianco-in-legno-di-mango-bianco-247912.htm",
    "larghezza_cm": 48,
    "profondita_cm": 31,
    "descrizione": "Vassoio bianco in legno di mango bianco"
  },
  {
    "nome": "Sheep - Poltrona a tre gambe in velluto verde kaki",
    "categoria": "Divani",
    "prezzo": 229,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltrona-a-tre-gambe-in-velluto-verde-kaki-1000-12-15-230107_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-a-tre-gambe-in-velluto-verde-kaki-sheep-230107.htm",
    "larghezza_cm": 68,
    "profondita_cm": 67,
    "descrizione": "Poltrona a tre gambe in velluto verde kaki"
  },
  {
    "nome": "Nara - Poltrona in tessuto caramello con gambe in acciaio cromato",
    "categoria": "Divani",
    "prezzo": 258.3,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltrona-in-tessuto-caramello-con-gambe-in-acciaio-cromato-1000-4-27-247626_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-in-tessuto-caramello-con-gambe-in-acciaio-cromato-nara-247626.htm",
    "larghezza_cm": 82,
    "profondita_cm": 72,
    "descrizione": "Poltrona in tessuto caramello con gambe in acciaio cromato"
  },
  {
    "nome": "Set di 6 candele lunghe beige, bordeaux e rosa",
    "categoria": "Decorazioni",
    "prezzo": 9.99,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/252303/set-di-6-candele-lunghe-beige-bordeaux-e-rosa.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/set-di-6-candele-lunghe-beige-bordeaux-e-rosa-252303.htm",
    "larghezza_cm": 2,
    "profondita_cm": 2,
    "descrizione": "Set di 6 candele lunghe beige, bordeaux e rosa"
  },
  {
    "nome": "Sospensione aerea non elettrificata realizzata con corde di iuta",
    "categoria": "Lampade",
    "prezzo": 299,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/254767/sospensione-aerea-non-elettrificata-realizzata-con-corde-di-iuta.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sospensione-aerea-non-elettrificata-realizzata-con-corde-di-iuta-254767.htm",
    "larghezza_cm": 90,
    "profondita_cm": 90,
    "descrizione": "Sospensione aerea non elettrificata realizzata con corde di iuta"
  },
  {
    "nome": "Lotto di 2 - Set di 3 candele lunghe rosse",
    "categoria": "Decorazioni",
    "prezzo": 9.98,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/set-di-3-candele-lunghe-rosse-1000-14-5-249285_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/set-di-3-candele-lunghe-rosse-249285.htm",
    "larghezza_cm": 2.1,
    "profondita_cm": 2.1,
    "descrizione": "Set di 3 candele lunghe rosse"
  },
  {
    "nome": "Vassoio blu",
    "categoria": "Cucina",
    "prezzo": 14.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/vassoio-blu-1000-4-32-247303_2.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/vassoio-blu-247303.htm",
    "larghezza_cm": 40,
    "profondita_cm": 30,
    "descrizione": "Vassoio blu"
  },
  {
    "nome": "Louvain - Poltrona in lino stropicciato verde kaki",
    "categoria": "Divani",
    "prezzo": 100,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltrona-in-lino-stropicciato-verde-kaki-1000-6-7-242358_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-in-lino-stropicciato-verde-kaki-louvain-242358.htm",
    "larghezza_cm": 74,
    "profondita_cm": 80,
    "descrizione": "Poltrona in lino stropicciato verde kaki"
  },
  {
    "nome": "Alzata per dolci a 2 piani in porcellana bianca e nera",
    "categoria": "Cucina",
    "prezzo": 19.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/alzata-per-dolci-a-2-piani-in-porcellana-bianca-e-nera-1000-3-7-243834_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/alzata-per-dolci-a-2-piani-in-porcellana-bianca-e-nera-243834.htm",
    "larghezza_cm": 26.5,
    "profondita_cm": 26.5,
    "descrizione": "Alzata per dolci a 2 piani in porcellana bianca e nera"
  },
  {
    "nome": "Pouf rotondo marrone in pelle",
    "categoria": "Divani",
    "prezzo": 149,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/pouf-rotondo-marrone-in-pelle-1000-8-32-225122_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/pouf-rotondo-marrone-in-pelle-225122.htm",
    "larghezza_cm": 44,
    "profondita_cm": 44,
    "descrizione": "Pouf rotondo marrone in pelle"
  },
  {
    "nome": "Applique in rattan e tessuto bianco",
    "categoria": "Lampade",
    "prezzo": 34.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/applique-in-rattan-e-tessuto-bianco-1000-11-38-225907_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/applique-in-rattan-e-tessuto-bianco-225907.htm",
    "larghezza_cm": 20,
    "profondita_cm": 10.5,
    "descrizione": "Applique in rattan e tessuto bianco"
  },
  {
    "nome": "Set di 2 mug in ceramica bianca e metallo con cuore dorato",
    "categoria": "Cucina",
    "prezzo": 14.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/set-di-2-mug-in-ceramica-bianca-e-metallo-con-cuore-dorato-1000-3-22-231016_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/set-di-2-mug-in-ceramica-bianca-e-metallo-con-cuore-dorato-231016.htm",
    "larghezza_cm": 41.5,
    "profondita_cm": 9.8,
    "descrizione": "Set di 2 mug in ceramica bianca e metallo con cuore dorato"
  },
  {
    "nome": "Sam - Poltrona grigio chiaro",
    "categoria": "Divani",
    "prezzo": 50,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltrona-grigio-chiaro-1000-4-13-210056_2.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-grigio-chiaro-sam-210056.htm",
    "larghezza_cm": 68,
    "profondita_cm": 72,
    "descrizione": "Poltrona grigio chiaro"
  },
  {
    "nome": "Set di 6 calici in vetro multicolore",
    "categoria": "Cucina",
    "prezzo": 39.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/set-di-6-calici-in-vetro-multicolore-1000-4-30-245620_2.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/set-di-6-calici-in-vetro-multicolore-245620.htm",
    "larghezza_cm": 7.9,
    "profondita_cm": 7.9,
    "descrizione": "Set di 6 calici in vetro multicolore"
  },
  {
    "nome": "Set di 6 bicchieri con supporto nero e beige",
    "categoria": "Cucina",
    "prezzo": 14.95,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/set-di-6-bicchieri-con-supporto-nero-e-beige-1000-15-40-197045_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/set-di-6-bicchieri-con-supporto-nero-e-beige-197045.htm",
    "larghezza_cm": 27,
    "profondita_cm": 18.5,
    "descrizione": "Set di 6 bicchieri con supporto nero e beige"
  },
  {
    "nome": "Ice - Sedia in stile scandinavo grigio acciaio e legno di hevea",
    "categoria": "Sedie",
    "prezzo": 69.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-in-stile-scandinavo-grigio-acciaio-e-legno-di-hevea-1000-0-7-210460_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-in-stile-scandinavo-grigio-acciaio-e-legno-di-hevea-ice-210460.htm",
    "larghezza_cm": 48,
    "profondita_cm": 54.5,
    "descrizione": "Sedia in stile scandinavo grigio acciaio e legno di hevea"
  },
  {
    "nome": "Sedia in tessuto ocra e acciaio",
    "categoria": "Sedie",
    "prezzo": 129,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/252722/sedia-in-tessuto-ocra-e-acciaio.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-in-tessuto-ocra-e-acciaio-252722.htm",
    "larghezza_cm": 48,
    "profondita_cm": 57.5,
    "descrizione": "Sedia in tessuto ocra e acciaio"
  },
  {
    "nome": "Ice - Sedia in stile scandinavo giallo ocra e legno di hevea",
    "categoria": "Sedie",
    "prezzo": 69.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-in-stile-scandinavo-giallo-ocra-e-legno-di-hevea-1000-6-13-210466_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-in-stile-scandinavo-giallo-ocra-e-legno-di-hevea-ice-210466.htm",
    "larghezza_cm": 48,
    "profondita_cm": 54.5,
    "descrizione": "Sedia in stile scandinavo giallo ocra e legno di hevea"
  },
  {
    "nome": "Louvain - Poltrona in lino superiore beige",
    "categoria": "Divani",
    "prezzo": 579,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltrona-in-lino-superiore-beige-1000-9-6-242480_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-in-lino-superiore-beige-louvain-242480.htm",
    "larghezza_cm": 74,
    "profondita_cm": 80,
    "descrizione": "Poltrona in lino superiore beige"
  },
  {
    "nome": "Lampada da terra in metallo nero con globo opaco alt. 182 cm",
    "categoria": "Lampade",
    "prezzo": 129,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/lampada-da-terra-in-metallo-nero-con-globo-opaco-alt-182-cm-1000-6-28-249226_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/lampada-da-terra-in-metallo-nero-con-globo-opaco-alt-182-cm-249226.htm",
    "larghezza_cm": 40,
    "profondita_cm": 47,
    "descrizione": "Lampada da terra in metallo nero con globo opaco alt. 182 cm"
  },
  {
    "nome": "Fiby - Sedie in polipropilene e acciaio beige (x2)",
    "categoria": "Sedie",
    "prezzo": 119,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedie-in-polipropilene-e-acciaio-beige-x2-1000-15-0-238661_5.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedie-in-polipropilene-e-acciaio-beige-x2-fiby-238661.htm",
    "larghezza_cm": 45.5,
    "profondita_cm": 52.5,
    "descrizione": "Sedie in polipropilene e acciaio beige (x2)"
  },
  {
    "nome": "Totem - Poltrona in rattan, abaca e acciaio beige e nero",
    "categoria": "Divani",
    "prezzo": 100,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltrona-in-rattan-abaca-e-acciaio-beige-e-nero-1000-14-26-234546_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-in-rattan-abaca-e-acciaio-beige-e-nero-totem-234546.htm",
    "larghezza_cm": 73,
    "profondita_cm": 74,
    "descrizione": "Poltrona in rattan, abaca e acciaio beige e nero"
  },
  {
    "nome": "Lampada in ceramica terracotta e paralume in poliestere riciclato beige",
    "categoria": "Lampade",
    "prezzo": 29.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/lampada-in-ceramica-terracotta-e-paralume-in-poliestere-riciclato-beige-1000-5-9-243139_2.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/lampada-in-ceramica-terracotta-e-paralume-in-poliestere-riciclato-beige-243139.htm",
    "larghezza_cm": 23,
    "profondita_cm": 23,
    "descrizione": "Lampada in ceramica terracotta e paralume in poliestere riciclato beige"
  },
  {
    "nome": "Louis - Sedia medaglione in legno di frassino, paglia di Vienna e lino beige e blu-grigio",
    "categoria": "Sedie",
    "prezzo": 219,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-medaglione-in-legno-di-frassino-paglia-di-vienna-e-lino-beige-e-blu-grigio-1000-1-39-234805_6.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-medaglione-in-legno-di-frassino-paglia-di-vienna-e-lino-beige-e-blu-grigio-louis-234805.htm",
    "larghezza_cm": 49,
    "profondita_cm": 58,
    "descrizione": "Sedia medaglione in legno di frassino, paglia di Vienna e lino beige e blu-grigio"
  },
  {
    "nome": "Ticao - Poltrona in rattan intrecciato e teak riciclato",
    "categoria": "Divani",
    "prezzo": 299,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltrona-in-rattan-intrecciato-e-teak-riciclato-1000-3-38-188023_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-in-rattan-intrecciato-e-teak-riciclato-ticao-188023.htm",
    "larghezza_cm": 65,
    "profondita_cm": 82,
    "descrizione": "Poltrona in rattan intrecciato e teak riciclato"
  },
  {
    "nome": "Manille - Poltrona in rattan intrecciato",
    "categoria": "Divani",
    "prezzo": 459,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltrona-in-rattan-intrecciato-1000-16-21-176034_2.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-in-rattan-intrecciato-manille-176034.htm",
    "larghezza_cm": 100,
    "profondita_cm": 77,
    "descrizione": "Poltrona in rattan intrecciato"
  },
  {
    "nome": "Lampada a sospensione in cotone e lino bianco con bordi neri",
    "categoria": "Lampade",
    "prezzo": 64.5,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/lampada-a-sospensione-in-cotone-e-lino-bianco-con-bordi-neri-1000-11-24-246885_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/lampada-a-sospensione-in-cotone-e-lino-bianco-con-bordi-neri-246885.htm",
    "larghezza_cm": 50,
    "profondita_cm": 50,
    "descrizione": "Lampada a sospensione in cotone e lino bianco con bordi neri"
  },
  {
    "nome": "Sedia in tessuto ocra e legno di faggio",
    "categoria": "Sedie",
    "prezzo": 119,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/252570/sedia-in-tessuto-ocra-e-legno-di-faggio.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-in-tessuto-ocra-e-legno-di-faggio-252570.htm",
    "larghezza_cm": 56,
    "profondita_cm": 55,
    "descrizione": "Sedia in tessuto ocra e legno di faggio"
  },
  {
    "nome": "Louvain - Poltrona in tessuto effetto lino bianco",
    "categoria": "Divani",
    "prezzo": 399,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltrona-in-tessuto-effetto-lino-bianco-1000-8-23-242292_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-in-tessuto-effetto-lino-bianco-louvain-242292.htm",
    "larghezza_cm": 74,
    "profondita_cm": 80,
    "descrizione": "Poltrona in tessuto effetto lino bianco"
  },
  {
    "nome": "Candela di Natale coniglio bianco con campana in vetro",
    "categoria": "Decorazioni",
    "prezzo": 17.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/candela-di-natale-coniglio-bianco-con-campana-in-vetro-1000-3-29-185677_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/candela-di-natale-coniglio-bianco-con-campana-in-vetro-185677.htm",
    "larghezza_cm": 10.3,
    "profondita_cm": 10.3,
    "descrizione": "Candela di Natale coniglio bianco con campana in vetro"
  },
  {
    "nome": "Fodera per sedia in tessuto bouclé bianco, compatibile con la sedia MARGAUX",
    "categoria": "Sedie",
    "prezzo": 39.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/fodera-per-sedia-in-tessuto-boucle-bianco-compatibile-con-la-sedia-margaux-1000-1-0-231609_5.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/fodera-per-sedia-in-tessuto-boucle-bianco-compatibile-con-la-sedia-margaux-231609.htm",
    "larghezza_cm": 47,
    "profondita_cm": 57,
    "descrizione": "Fodera per sedia in tessuto bouclé bianco, compatibile con la sedia MARGAUX"
  },
  {
    "nome": "Trapunta in lino lavato blu-verde 200x100 cm",
    "categoria": "Letti",
    "prezzo": 97.3,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/trapunta-in-lino-lavato-blu-verde-200x100-cm-1000-2-38-231729_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/trapunta-in-lino-lavato-blu-verde-200x100-cm-231729.htm",
    "larghezza_cm": 200,
    "profondita_cm": 3,
    "descrizione": "Trapunta in lino lavato blu-verde 200x100 cm"
  },
  {
    "nome": "Bizou - Poltrona in velluto verde foresta",
    "categoria": "Divani",
    "prezzo": 299,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltrona-in-velluto-verde-foresta-1000-4-29-244430_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-in-velluto-verde-foresta-bizou-244430.htm",
    "larghezza_cm": 73,
    "profondita_cm": 70.5,
    "descrizione": "Poltrona in velluto verde foresta"
  },
  {
    "nome": "Fodera per sedia in lino lavato verde giada, compatibile con la sedia MARGAUX",
    "categoria": "Sedie",
    "prezzo": 39.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/fodera-per-sedia-in-lino-lavato-verde-giada-compatibile-con-la-sedia-margaux-1000-9-32-189083_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/fodera-per-sedia-in-lino-lavato-verde-giada-compatibile-con-la-sedia-margaux-189083.htm",
    "larghezza_cm": 47,
    "profondita_cm": 57,
    "descrizione": "Fodera per sedia in lino lavato verde giada, compatibile con la sedia MARGAUX"
  },
  {
    "nome": "Louvain - Poltrona in lino superiore bianco",
    "categoria": "Divani",
    "prezzo": 579,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltrona-in-lino-superiore-bianco-1000-4-29-242339_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-in-lino-superiore-bianco-louvain-242339.htm",
    "larghezza_cm": 74,
    "profondita_cm": 80,
    "descrizione": "Poltrona in lino superiore bianco"
  },
  {
    "nome": "Joyce - Poltrona vintage in velluto blu e acciaio",
    "categoria": "Divani",
    "prezzo": 299,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltrona-vintage-in-velluto-blu-e-acciaio-1000-2-20-155943_7.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-vintage-in-velluto-blu-e-acciaio-joyce-155943.htm",
    "larghezza_cm": 67,
    "profondita_cm": 75,
    "descrizione": "Poltrona vintage in velluto blu e acciaio"
  },
  {
    "nome": "Cuscino fiocco grigio, 25x25 cm",
    "categoria": "Tessile",
    "prezzo": 12.95,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/cuscino-fiocco-grigio-25x25-cm-1000-8-22-235526_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/cuscino-fiocco-grigio-25x25-cm-235526.htm",
    "larghezza_cm": 25,
    "profondita_cm": 16,
    "descrizione": "Cuscino fiocco grigio, 25x25 cm"
  },
  {
    "nome": "Set di 6 bicchieri alti in vetro trasparente motivo floreale rosso e supporto in legno di acacia",
    "categoria": "Cucina",
    "prezzo": 29.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/set-di-6-bicchieri-alti-in-vetro-trasparente-motivo-floreale-rosso-e-supporto-in-legno-di-acacia-1000-6-8-250518_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/set-di-6-bicchieri-alti-in-vetro-trasparente-motivo-floreale-rosso-e-supporto-in-legno-di-acacia-250518.htm",
    "larghezza_cm": 14.8,
    "profondita_cm": 22,
    "descrizione": "Set di 6 bicchieri alti in vetro trasparente motivo floreale rosso e supporto in legno di acacia"
  },
  {
    "nome": "Piatto piano in gres écru, decorato con motivi blu e bordo bordeaux",
    "categoria": "Cucina",
    "prezzo": 7.99,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/253365/piatto-piano-in-gres-ecru-decorato-con-motivi-blu-e-bordo-bordeaux.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/piatto-piano-in-gres-ecru-decorato-con-motivi-blu-e-bordo-bordeaux-253365.htm",
    "larghezza_cm": 26.5,
    "profondita_cm": 26.5,
    "descrizione": "Piatto piano in gres écru, decorato con motivi blu e bordo bordeaux"
  },
  {
    "nome": "Cofanetto con candela profumata e diffusore Cotton Cloud 30 ml",
    "categoria": "Decorazioni",
    "prezzo": 14.99,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/252275/cofanetto-con-candela-profumata-e-diffusore-cotton-cloud-30-ml.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/cofanetto-con-candela-profumata-e-diffusore-cotton-cloud-30-ml-252275.htm",
    "larghezza_cm": 4.8,
    "profondita_cm": 4.8,
    "descrizione": "Cofanetto con candela profumata e diffusore Cotton Cloud 30 ml"
  },
  {
    "nome": "Piatto fondo in gres giallo e écru con bordo azzurro",
    "categoria": "Cucina",
    "prezzo": 7.99,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/253364/piatto-fondo-in-gres-giallo-e-ecru-con-bordo-azzurro.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/piatto-fondo-in-gres-giallo-e-ecru-con-bordo-azzurro-253364.htm",
    "larghezza_cm": 20,
    "profondita_cm": 20,
    "descrizione": "Piatto fondo in gres giallo e écru con bordo azzurro"
  },
  {
    "nome": "Ceppo in legno di acacia con coltelli in acciaio",
    "categoria": "Cucina",
    "prezzo": 39.99,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/252575/ceppo-in-legno-di-acacia-con-coltelli-in-acciaio.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/ceppo-in-legno-di-acacia-con-coltelli-in-acciaio-252575.htm",
    "larghezza_cm": 15,
    "profondita_cm": 7,
    "descrizione": "Ceppo in legno di acacia con coltelli in acciaio"
  },
  {
    "nome": "Swing - Poltrona girevole con poggiapiedi",
    "categoria": "Divani",
    "prezzo": 230.3,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltrona-girevole-con-poggiapiedi-1000-9-37-243126_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-girevole-con-poggiapiedi-swing-243126.htm",
    "larghezza_cm": 74,
    "profondita_cm": 77,
    "descrizione": "Poltrona girevole con poggiapiedi"
  },
  {
    "nome": "Lampada a sospensione ovale, beige e crema",
    "categoria": "Lampade",
    "prezzo": 179,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/254385/lampada-a-sospensione-ovale-beige-e-crema.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/lampada-a-sospensione-ovale-beige-e-crema-254385.htm",
    "larghezza_cm": 90,
    "profondita_cm": 90,
    "descrizione": "Lampada a sospensione ovale, beige e crema"
  },
  {
    "nome": "Cofanetto con candela profumata e diffusore Vaniglia Orientale 30 ml",
    "categoria": "Decorazioni",
    "prezzo": 14.99,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/252276/cofanetto-con-candela-profumata-e-diffusore-vaniglia-orientale-30-ml.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/cofanetto-con-candela-profumata-e-diffusore-vaniglia-orientale-30-ml-252276.htm",
    "larghezza_cm": 4.8,
    "profondita_cm": 4.8,
    "descrizione": "Cofanetto con candela profumata e diffusore Vaniglia Orientale 30 ml"
  },
  {
    "nome": "Bicchiere corolla in vetro trasparente",
    "categoria": "Cucina",
    "prezzo": 3.59,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/bicchiere-corolla-in-vetro-trasparente-1000-9-8-247648_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/bicchiere-corolla-in-vetro-trasparente-247648.htm",
    "larghezza_cm": 8.5,
    "profondita_cm": 8.5,
    "descrizione": "Bicchiere corolla in vetro trasparente"
  },
  {
    "nome": "Louvain - Poltrona in velluto a coste marrone",
    "categoria": "Divani",
    "prezzo": 579,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltrona-in-velluto-a-coste-marrone-1000-3-14-242406_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-in-velluto-a-coste-marrone-louvain-242406.htm",
    "larghezza_cm": 74,
    "profondita_cm": 80,
    "descrizione": "Poltrona in velluto a coste marrone"
  },
  {
    "nome": "Lampada a sospensione da esterno ricaricabile blu",
    "categoria": "Lampade",
    "prezzo": 84.5,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/lampada-a-sospensione-da-esterno-ricaricabile-blu-1000-14-31-246769_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/lampada-a-sospensione-da-esterno-ricaricabile-blu-246769.htm",
    "larghezza_cm": 86,
    "profondita_cm": 86,
    "descrizione": "Lampada a sospensione da esterno ricaricabile blu"
  },
  {
    "nome": "Selva BUSINESS - Poltrona lounge professionale in resina riciclata effetto rattan e metallo nero",
    "categoria": "Divani",
    "prezzo": 169,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltrona-lounge-professionale-in-resina-riciclata-effetto-rattan-e-metallo-nero-1000-1-0-237882_3.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-lounge-professionale-in-resina-riciclata-effetto-rattan-e-metallo-nero-selva-business-237882.htm",
    "larghezza_cm": 70,
    "profondita_cm": 65,
    "descrizione": "Poltrona lounge professionale in resina riciclata effetto rattan e metallo nero"
  },
  {
    "nome": "Lampada a sospensione da esterno ricaricabile",
    "categoria": "Lampade",
    "prezzo": 84.5,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/lampada-a-sospensione-da-esterno-ricaricabile-1000-15-32-246770_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/lampada-a-sospensione-da-esterno-ricaricabile-246770.htm",
    "larghezza_cm": 86,
    "profondita_cm": 17,
    "descrizione": "Lampada a sospensione da esterno ricaricabile"
  },
  {
    "nome": "Set tavolo e 8 sedie da giardino in alluminio color argilla e resina beige",
    "categoria": "Sedie",
    "prezzo": 1299,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/251640/set-tavolo-e-8-sedie-da-giardino-in-alluminio-color-argilla-e-resina-beige.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/set-tavolo-e-8-sedie-da-giardino-in-alluminio-color-argilla-e-resina-beige-251640.htm",
    "larghezza_cm": 234,
    "profondita_cm": 96,
    "descrizione": "Set tavolo e 8 sedie da giardino in alluminio color argilla e resina beige"
  },
  {
    "nome": "Lampada touch da esterno verde kaki senza fili",
    "categoria": "Lampade",
    "prezzo": 49.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/lampada-touch-da-esterno-verde-kaki-senza-fili-1000-1-35-246773_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/lampada-touch-da-esterno-verde-kaki-senza-fili-246773.htm",
    "larghezza_cm": 15,
    "profondita_cm": 15,
    "descrizione": "Lampada touch da esterno verde kaki senza fili"
  },
  {
    "nome": "Fuji - Poltrona da giardino in alluminio grigio antracite",
    "categoria": "Poltrone",
    "prezzo": 69.99,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/175135_245858/poltrona-da-giardino-in-alluminio-grigio-antracite.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-da-giardino-in-alluminio-grigio-antracite-fuji-175135.htm",
    "larghezza_cm": 57,
    "profondita_cm": 58,
    "descrizione": "Poltrona da giardino in alluminio grigio antracite"
  },
  {
    "nome": "Lazaro - Modulo da giardino in fibra di poliolefina grigio antracite",
    "categoria": "Divani",
    "prezzo": 370.3,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/219106/modulo-da-giardino-in-fibra-di-poliolefina-grigio-antracite.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/modulo-da-giardino-in-fibra-di-poliolefina-grigio-antracite-lazaro-219106.htm",
    "larghezza_cm": 106,
    "profondita_cm": 106,
    "descrizione": "Modulo da giardino in fibra di poliolefina grigio antracite"
  },
  {
    "nome": "Kafe Business - Sedia da giardino professionale in resina intrecciata riciclata multicolore",
    "categoria": "Sedie",
    "prezzo": 99.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-da-giardino-professionale-in-resina-intrecciata-riciclata-multicolore-1000-3-37-238411_7.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-da-giardino-professionale-in-resina-intrecciata-riciclata-multicolore-kafe-business-238411.htm",
    "larghezza_cm": 45,
    "profondita_cm": 61,
    "descrizione": "Sedia da giardino professionale in resina intrecciata riciclata multicolore"
  },
  {
    "nome": "Panama - Sedia a sdraio pieghevole écru in legno massello di eucalipto",
    "categoria": "Sedie",
    "prezzo": 59.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-a-sdraio-pieghevole-ecru-in-legno-massello-di-eucalipto-1000-5-26-238277_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-a-sdraio-pieghevole-ecru-in-legno-massello-di-eucalipto-panama-238277.htm",
    "larghezza_cm": 57.5,
    "profondita_cm": 97,
    "descrizione": "Sedia a sdraio pieghevole écru in legno massello di eucalipto"
  },
  {
    "nome": "Set di shaker e 2 bicchieri in vetro",
    "categoria": "Cucina",
    "prezzo": 19.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/set-di-shaker-e-2-bicchieri-in-vetro-1000-11-37-245627_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/set-di-shaker-e-2-bicchieri-in-vetro-245627.htm",
    "larghezza_cm": 23.5,
    "profondita_cm": 34,
    "descrizione": "Set di shaker e 2 bicchieri in vetro"
  },
  {
    "nome": "Kate - Sedia da scrivania girevole in tessuto tramato beige",
    "categoria": "Sedie",
    "prezzo": 149,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-da-scrivania-girevole-in-tessuto-tramato-beige-1000-8-7-249738_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-da-scrivania-girevole-in-tessuto-tramato-beige-kate-249738.htm",
    "larghezza_cm": 56,
    "profondita_cm": 54,
    "descrizione": "Sedia da scrivania girevole in tessuto tramato beige"
  },
  {
    "nome": "Lenzuolo con angoli in cotone bio beige 160x200 cm",
    "categoria": "Letti",
    "prezzo": 35.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/lenzuolo-con-angoli-in-cotone-bio-beige-160x200-cm-1000-0-39-230418_3.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/lenzuolo-con-angoli-in-cotone-bio-beige-160x200-cm-230418.htm",
    "larghezza_cm": 160,
    "profondita_cm": 30,
    "descrizione": "Lenzuolo con angoli in cotone bio beige 160x200 cm"
  },
  {
    "nome": "Noumea - Divanetto da giardino a 2/3 posti in legno massello di acacia con cuscini grigio antracite",
    "categoria": "Divani",
    "prezzo": 499,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divanetto-da-giardino-a-2-3-posti-in-legno-massello-di-acacia-con-cuscini-grigio-antracite-1000-13-12-229530_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divanetto-da-giardino-a-2-3-posti-in-legno-massello-di-acacia-con-cuscini-grigio-antracite-noumea-229530.htm",
    "larghezza_cm": 175,
    "profondita_cm": 78,
    "descrizione": "Divanetto da giardino a 2/3 posti in legno massello di acacia con cuscini grigio antracite"
  },
  {
    "nome": "Set di 2 bicchieri da whisky in vetro, cubetti di ghiaccio in pietra e cofanetto in legno di pino",
    "categoria": "Cucina",
    "prezzo": 26.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/set-di-2-bicchieri-da-whisky-in-vetro-cubetti-di-ghiaccio-in-pietra-e-cofanetto-in-legno-di-pino-1000-14-23-245613_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/set-di-2-bicchieri-da-whisky-in-vetro-cubetti-di-ghiaccio-in-pietra-e-cofanetto-in-legno-di-pino-245613.htm",
    "larghezza_cm": 22.3,
    "profondita_cm": 17.8,
    "descrizione": "Set di 2 bicchieri da whisky in vetro, cubetti di ghiaccio in pietra e cofanetto in legno di pino"
  },
  {
    "nome": "Lenzuolo con angoli in cotone bio ecru 160x200 cm",
    "categoria": "Letti",
    "prezzo": 35.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/lenzuolo-con-angoli-in-cotone-bio-ecru-160x200-cm-1000-15-37-230416_3.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/lenzuolo-con-angoli-in-cotone-bio-ecru-160x200-cm-230416.htm",
    "larghezza_cm": 160,
    "profondita_cm": 30,
    "descrizione": "Lenzuolo con angoli in cotone bio ecru 160x200 cm"
  },
  {
    "nome": "Isola - Cuscini per poltrona da giardino di poliestere riciclato grigio scuro",
    "categoria": "Divani",
    "prezzo": 89.99,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/251249/cuscini-per-poltrona-da-giardino-di-poliestere-riciclato-grigio-scuro.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/cuscini-per-poltrona-da-giardino-di-poliestere-riciclato-grigio-scuro-isola-251249.htm",
    "larghezza_cm": 63,
    "profondita_cm": 25,
    "descrizione": "Cuscini per poltrona da giardino di poliestere riciclato grigio scuro"
  },
  {
    "nome": "Set di calici da champagne (x6) in vetro trasparente e dorato",
    "categoria": "Cucina",
    "prezzo": 10,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/set-di-calici-da-champagne-x6-in-vetro-trasparente-e-dorato-1000-16-11-237319_2.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/set-di-calici-da-champagne-x6-in-vetro-trasparente-e-dorato-237319.htm",
    "larghezza_cm": 54.5,
    "profondita_cm": 64.5,
    "descrizione": "Set di calici da champagne (x6) in vetro trasparente e dorato"
  },
  {
    "nome": "Choppy Business - Sedia da giardino professionale in alluminio effetto bambù e resina intrecciata multicolore",
    "categoria": "Sedie",
    "prezzo": 169,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-da-giardino-professionale-in-alluminio-effetto-bambu-e-resina-intrecciata-multicolore-1000-7-0-238415_2.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-da-giardino-professionale-in-alluminio-effetto-bambu-e-resina-intrecciata-multicolore-choppy-business-238415.htm",
    "larghezza_cm": 54.5,
    "profondita_cm": 64.5,
    "descrizione": "Sedia da giardino professionale in alluminio effetto bambù e resina intrecciata multicolore"
  },
  {
    "nome": "Dispenser di detersivo per piatti in vetro con rubinetto e motivi neri disegnati 3 L",
    "categoria": "Cucina",
    "prezzo": 19.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/dispenser-di-detersivo-per-piatti-in-vetro-con-rubinetto-e-motivi-neri-disegnati-3-l-1000-0-40-232305_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/dispenser-di-detersivo-per-piatti-in-vetro-con-rubinetto-e-motivi-neri-disegnati-3-l-232305.htm",
    "larghezza_cm": 16,
    "profondita_cm": 16,
    "descrizione": "Dispenser di detersivo per piatti in vetro con rubinetto e motivi neri disegnati 3 L"
  },
  {
    "nome": "St Tropez - Poltrona in rattan",
    "categoria": "Divani",
    "prezzo": 599,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltrona-in-rattan-1000-0-37-147186_3.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-in-rattan-st-tropez-147186.htm",
    "larghezza_cm": 90,
    "profondita_cm": 120,
    "descrizione": "Poltrona in rattan"
  },
  {
    "nome": "Tenda con occhielli in lino lavato moka 130x300 cm al pezzo, OEKO-TEX®",
    "categoria": "Tessile",
    "prezzo": 64.5,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tenda-con-occhielli-in-lino-lavato-moka-130x300-cm-al-pezzo-oeko-tex-1000-3-7-222924_2.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tenda-con-occhielli-in-lino-lavato-moka-130x300-cm-al-pezzo-oeko-tex-222924.htm",
    "larghezza_cm": 130,
    "profondita_cm": 57,
    "descrizione": "Tenda con occhielli in lino lavato moka 130x300 cm al pezzo, OEKO-TEX®"
  },
  {
    "nome": "Bristol - Sedia da scrivania per bambini regolabile verde chiaro con rotelle",
    "categoria": "Sedie",
    "prezzo": 69.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-da-scrivania-per-bambini-regolabile-verde-chiaro-con-rotelle-1000-16-28-233851_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-da-scrivania-per-bambini-regolabile-verde-chiaro-con-rotelle-bristol-233851.htm",
    "larghezza_cm": 57,
    "profondita_cm": 57,
    "descrizione": "Sedia da scrivania per bambini regolabile verde chiaro con rotelle"
  },
  {
    "nome": "St Tropez - Divanetto in rattan 3 posti",
    "categoria": "Divani",
    "prezzo": 1199,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divanetto-in-rattan-3-posti-1000-6-9-147158_3.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divanetto-in-rattan-3-posti-st-tropez-147158.htm",
    "larghezza_cm": 180,
    "profondita_cm": 120,
    "descrizione": "Divanetto in rattan 3 posti"
  },
  {
    "nome": "Tenda con occhielli in lino lavato verde rame, al pezzo, 130x300",
    "categoria": "Tessile",
    "prezzo": 129,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tenda-con-occhielli-in-lino-lavato-verde-rame-al-pezzo-130x300-1000-13-26-177884_7.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tenda-con-occhielli-in-lino-lavato-verde-rame-al-pezzo-130x300-177884.htm",
    "larghezza_cm": 130,
    "profondita_cm": 0.5,
    "descrizione": "Tenda con occhielli in lino lavato verde rame, al pezzo, 130x300"
  },
  {
    "nome": "Portacapsule tazza in metallo nero",
    "categoria": "Cucina",
    "prezzo": 2,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/portacapsule-tazza-in-metallo-nero-1000-3-19-203051_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/portacapsule-tazza-in-metallo-nero-203051.htm",
    "larghezza_cm": 19,
    "profondita_cm": 8,
    "descrizione": "Portacapsule tazza in metallo nero"
  },
  {
    "nome": "Amance - Sedia da giardino in legno di teak con cuscini écru",
    "categoria": "Sedie",
    "prezzo": 159.2,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-da-giardino-in-legno-di-teak-con-cuscini-ecru-1000-5-22-246063_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-da-giardino-in-legno-di-teak-con-cuscini-ecru-amance-246063.htm",
    "larghezza_cm": 57,
    "profondita_cm": 57,
    "descrizione": "Sedia da giardino in legno di teak con cuscini écru"
  },
  {
    "nome": "Isola - Cuscini per modulo centrale da giardino in poliestere riciclato grigio scuro",
    "categoria": "Divani",
    "prezzo": 99.99,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/251250/cuscini-per-modulo-centrale-da-giardino-in-poliestere-riciclato-grigio-scuro.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/cuscini-per-modulo-centrale-da-giardino-in-poliestere-riciclato-grigio-scuro-isola-251250.htm",
    "larghezza_cm": 74,
    "profondita_cm": 74,
    "descrizione": "Cuscini per modulo centrale da giardino in poliestere riciclato grigio scuro"
  },
  {
    "nome": "Oleron - Sedia da giardino pieghevole in legno massello di teak",
    "categoria": "Sedie",
    "prezzo": 99.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-da-giardino-pieghevole-in-legno-massello-di-teak-1000-6-39-49030012_10.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-da-giardino-pieghevole-in-legno-massello-di-teak-oleron-49030012.htm",
    "larghezza_cm": 49,
    "profondita_cm": 58,
    "descrizione": "Sedia da giardino pieghevole in legno massello di teak"
  },
  {
    "nome": "Kafe Business - Sedia da giardino professionale in resina intrecciata beige e nera",
    "categoria": "Sedie",
    "prezzo": 99.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-da-giardino-professionale-in-resina-intrecciata-beige-e-nera-1000-0-34-238408_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-da-giardino-professionale-in-resina-intrecciata-beige-e-nera-kafe-business-238408.htm",
    "larghezza_cm": 45,
    "profondita_cm": 61,
    "descrizione": "Sedia da giardino professionale in resina intrecciata beige e nera"
  },
  {
    "nome": "St Tropez - Chaise longue da giardino componibile in rattan e cuscini écru",
    "categoria": "Divani",
    "prezzo": 849,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/chaise-longue-da-giardino-componibile-in-rattan-e-cuscini-ecru-1000-13-37-164488_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/chaise-longue-da-giardino-componibile-in-rattan-e-cuscini-ecru-st-tropez-164488.htm",
    "larghezza_cm": 90,
    "profondita_cm": 202,
    "descrizione": "Chaise longue da giardino componibile in rattan e cuscini écru"
  },
  {
    "nome": "Vassoio in legno d'acacia",
    "categoria": "Cucina",
    "prezzo": 12.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/vassoio-in-legno-d-acacia-1000-16-17-247944_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/vassoio-in-legno-d-acacia-247944.htm",
    "larghezza_cm": 32,
    "profondita_cm": 22,
    "descrizione": "Vassoio in legno d'acacia"
  },
  {
    "nome": "Isola - Cuscino per pouf da giardino grigio scuro",
    "categoria": "Divani",
    "prezzo": 69.99,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/251251/cuscino-per-pouf-da-giardino-grigio-scuro.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/cuscino-per-pouf-da-giardino-grigio-scuro-isola-251251.htm",
    "larghezza_cm": 74,
    "profondita_cm": 74,
    "descrizione": "Cuscino per pouf da giardino grigio scuro"
  },
  {
    "nome": "Lotto di 2 - Piatto piano in porcellana blu con motivo a onde bianche",
    "categoria": "Cucina",
    "prezzo": 13.98,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/piatto-piano-in-porcellana-blu-con-motivo-a-onde-bianche-1000-13-21-247907_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/piatto-piano-in-porcellana-blu-con-motivo-a-onde-bianche-247907.htm",
    "larghezza_cm": 26.7,
    "profondita_cm": 26.7,
    "descrizione": "Piatto piano in porcellana blu con motivo a onde bianche"
  },
  {
    "nome": "Nairobi - Divanetto da giardino 2 posti in resina intrecciata effetto rattan e legno massello di acacia",
    "categoria": "Divani",
    "prezzo": 429,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divanetto-da-giardino-2-posti-in-resina-intrecciata-effetto-rattan-e-legno-massello-di-acacia-1000-4-31-238446_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divanetto-da-giardino-2-posti-in-resina-intrecciata-effetto-rattan-e-legno-massello-di-acacia-nairobi-238446.htm",
    "larghezza_cm": 120,
    "profondita_cm": 81,
    "descrizione": "Divanetto da giardino 2 posti in resina intrecciata effetto rattan e legno massello di acacia"
  },
  {
    "nome": "Lotto di 6 - Bicchiere in vetro con stampe mojito",
    "categoria": "Cucina",
    "prezzo": 13.74,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/bicchiere-in-vetro-con-stampe-mojito-1000-10-7-119112_4.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/bicchiere-in-vetro-con-stampe-mojito-119112.htm",
    "larghezza_cm": 8.3,
    "profondita_cm": 8.3,
    "descrizione": "Bicchiere in vetro con stampe mojito"
  },
  {
    "nome": "Sedia da pranzo in legno di hevea scuro e tessuto riciclato beige",
    "categoria": "Sedie",
    "prezzo": 189,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/252689_0/sedia-da-pranzo-in-legno-di-hevea-scuro-e-tessuto-riciclato-beige.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-da-pranzo-in-legno-di-hevea-scuro-e-tessuto-riciclato-beige-252689.htm",
    "larghezza_cm": 57.8,
    "profondita_cm": 54,
    "descrizione": "Sedia da pranzo in legno di hevea scuro e tessuto riciclato beige"
  },
  {
    "nome": "St Tropez - Chaise longue in rattan",
    "categoria": "Divani",
    "prezzo": 594.3,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/chaise-longue-in-rattan-1000-1-38-147187_3.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/chaise-longue-in-rattan-st-tropez-147187.htm",
    "larghezza_cm": 90,
    "profondita_cm": 202,
    "descrizione": "Chaise longue in rattan"
  },
  {
    "nome": "Vassoio arancione",
    "categoria": "Cucina",
    "prezzo": 12.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/vassoio-arancione-1000-6-34-247305_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/vassoio-arancione-247305.htm",
    "larghezza_cm": 35,
    "profondita_cm": 25,
    "descrizione": "Vassoio arancione"
  },
  {
    "nome": "Cuscino in velluto di poliestere riciclato effetto invecchiato beige 60x60cm",
    "categoria": "Tessile",
    "prezzo": 29.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/cuscino-in-velluto-di-poliestere-riciclato-effetto-invecchiato-beige-60x60cm-1000-5-17-235234_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/cuscino-in-velluto-di-poliestere-riciclato-effetto-invecchiato-beige-60x60cm-235234.htm",
    "larghezza_cm": 60,
    "profondita_cm": 10,
    "descrizione": "Cuscino in velluto di poliestere riciclato effetto invecchiato beige 60x60cm"
  },
  {
    "nome": "Tenda in lino lavato giallo, al pezzo, 130x300 cm",
    "categoria": "Tessile",
    "prezzo": 64.5,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tenda-in-lino-lavato-giallo-al-pezzo-130x300-cm-1000-12-9-147691_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tenda-in-lino-lavato-giallo-al-pezzo-130x300-cm-147691.htm",
    "larghezza_cm": 130,
    "profondita_cm": 0.5,
    "descrizione": "Tenda in lino lavato giallo, al pezzo, 130x300 cm"
  },
  {
    "nome": "Lampada a sospensione in vetro rigato e metallo dorato",
    "categoria": "Lampade",
    "prezzo": 29.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/lampada-a-sospensione-in-vetro-rigato-e-metallo-dorato-1000-16-22-243439_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/lampada-a-sospensione-in-vetro-rigato-e-metallo-dorato-243439.htm",
    "larghezza_cm": 15,
    "profondita_cm": 15,
    "descrizione": "Lampada a sospensione in vetro rigato e metallo dorato"
  },
  {
    "nome": "Cuscino in velluto effetto invecchiato nero 60x60cm",
    "categoria": "Tessile",
    "prezzo": 29.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/cuscino-in-velluto-effetto-invecchiato-nero-60x60cm-1000-7-25-223557_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/cuscino-in-velluto-effetto-invecchiato-nero-60x60cm-223557.htm",
    "larghezza_cm": 60,
    "profondita_cm": 10,
    "descrizione": "Cuscino in velluto effetto invecchiato nero 60x60cm"
  },
  {
    "nome": "Mafalda Business - Set di 2 sedie per ristorante in acciaio, textilene e corda verde kaki",
    "categoria": "Sedie",
    "prezzo": 129,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/set-di-2-sedie-per-ristorante-in-acciaio-textilene-e-corda-verde-kaki-1000-1-22-245940_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/set-di-2-sedie-per-ristorante-in-acciaio-textilene-e-corda-verde-kaki-mafalda-business-245940.htm",
    "larghezza_cm": 66,
    "profondita_cm": 57,
    "descrizione": "Set di 2 sedie per ristorante in acciaio, textilene e corda verde kaki"
  },
  {
    "nome": "Cuscino in suédine grigio chiaro 60x60cm",
    "categoria": "Tessile",
    "prezzo": 22.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/cuscino-in-suedine-grigio-chiaro-60x60cm-1000-11-24-223187_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/cuscino-in-suedine-grigio-chiaro-60x60cm-223187.htm",
    "larghezza_cm": 60,
    "profondita_cm": 60,
    "descrizione": "Cuscino in suédine grigio chiaro 60x60cm"
  },
  {
    "nome": "Caraffa in vetro trasparente con motivo a pesce blu da 1,2 l",
    "categoria": "Cucina",
    "prezzo": 24.99,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/252743/caraffa-in-vetro-trasparente-con-motivo-a-pesce-blu-da-1-2-l.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/caraffa-in-vetro-trasparente-con-motivo-a-pesce-blu-da-1-2-l-252743.htm",
    "larghezza_cm": 17,
    "profondita_cm": 10,
    "descrizione": "Caraffa in vetro trasparente con motivo a pesce blu da 1,2 l"
  },
  {
    "nome": "Panama - Sedia a sdraio in legno di eucalipto e tela in poliestere riciclato verde kaki",
    "categoria": "Sedie",
    "prezzo": 59.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-a-sdraio-in-legno-di-eucalipto-e-tela-in-poliestere-riciclato-verde-kaki-1000-3-38-238207_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-a-sdraio-in-legno-di-eucalipto-e-tela-in-poliestere-riciclato-verde-kaki-panama-238207.htm",
    "larghezza_cm": 57.5,
    "profondita_cm": 97,
    "descrizione": "Sedia a sdraio in legno di eucalipto e tela in poliestere riciclato verde kaki"
  },
  {
    "nome": "Lampada da terra da esterno bianco alt. 110 cm",
    "categoria": "Lampade",
    "prezzo": 99.99,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/253342/lampada-da-terra-da-esterno-bianco-alt-110-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/lampada-da-terra-da-esterno-bianco-alt-110-cm-253342.htm",
    "larghezza_cm": 26.5,
    "profondita_cm": 26.5,
    "descrizione": "Lampada da terra da esterno bianco alt. 110 cm"
  },
  {
    "nome": "Tenda con occhielli beige, al pezzo, 130 cm x 300 cm",
    "categoria": "Tessile",
    "prezzo": 104.3,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tenda-con-occhielli-beige-al-pezzo-130-cm-x-300-cm-1000-3-30-234263_2.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tenda-con-occhielli-beige-al-pezzo-130-cm-x-300-cm-234263.htm",
    "larghezza_cm": 130,
    "profondita_cm": 1.2,
    "descrizione": "Tenda con occhielli beige, al pezzo, 130 cm x 300 cm"
  },
  {
    "nome": "Portabottiglie in legno di acacia",
    "categoria": "Cucina",
    "prezzo": 15.99,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/252308/portabottiglie-in-legno-di-acacia.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/portabottiglie-in-legno-di-acacia-252308.htm",
    "larghezza_cm": 29,
    "profondita_cm": 26,
    "descrizione": "Portabottiglie in legno di acacia"
  },
  {
    "nome": "Set di posate da 24 pezzi in acciaio inossidabile color argento",
    "categoria": "Cucina",
    "prezzo": 59.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/set-di-posate-da-24-pezzi-in-acciaio-inossidabile-color-argento-1000-12-33-236193_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/set-di-posate-da-24-pezzi-in-acciaio-inossidabile-color-argento-236193.htm",
    "larghezza_cm": 26.5,
    "profondita_cm": 15,
    "descrizione": "Set di posate da 24 pezzi in acciaio inossidabile color argento"
  },
  {
    "nome": "Lotto di 2 - Tazza da tè e piattino in porcellana bianca con motivo palma dorata e marrone",
    "categoria": "Cucina",
    "prezzo": 17.98,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tazza-da-te-e-piattino-in-porcellana-bianca-con-motivo-palma-dorata-e-marrone-1000-5-10-235965_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tazza-da-te-e-piattino-in-porcellana-bianca-con-motivo-palma-dorata-e-marrone-235965.htm",
    "larghezza_cm": 11,
    "profondita_cm": 8.5,
    "descrizione": "Tazza da tè e piattino in porcellana bianca con motivo palma dorata e marrone"
  },
  {
    "nome": "Lotto di 2 - Tazza da caffè e piattino in porcellana bianca con motivo palma dorata e marrone",
    "categoria": "Cucina",
    "prezzo": 15.98,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tazza-da-caffe-e-piattino-in-porcellana-bianca-con-motivo-palma-dorata-e-marrone-1000-4-9-235964_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tazza-da-caffe-e-piattino-in-porcellana-bianca-con-motivo-palma-dorata-e-marrone-235964.htm",
    "larghezza_cm": 8.5,
    "profondita_cm": 6.5,
    "descrizione": "Tazza da caffè e piattino in porcellana bianca con motivo palma dorata e marrone"
  },
  {
    "nome": "Sedia in tessuto tramato beige e acciaio nero",
    "categoria": "Sedie",
    "prezzo": 59.99,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/252604/sedia-in-tessuto-tramato-beige-e-acciaio-nero.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-in-tessuto-tramato-beige-e-acciaio-nero-252604.htm",
    "larghezza_cm": 44.5,
    "profondita_cm": 54,
    "descrizione": "Sedia in tessuto tramato beige e acciaio nero"
  },
  {
    "nome": "Lampada a sospensione in rattan 70 cm",
    "categoria": "Lampade",
    "prezzo": 39.95,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/lampada-a-sospensione-in-rattan-70-cm-1000-8-31-242751_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/lampada-a-sospensione-in-rattan-70-cm-242751.htm",
    "larghezza_cm": 60,
    "profondita_cm": 60,
    "descrizione": "Lampada a sospensione in rattan 70 cm"
  },
  {
    "nome": "Mauricette - Sedia vintage in tessuto riciclato blu e acciaio effetto rovere",
    "categoria": "Sedie",
    "prezzo": 69.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-vintage-in-tessuto-riciclato-blu-e-acciaio-effetto-rovere-1000-14-36-242961_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-vintage-in-tessuto-riciclato-blu-e-acciaio-effetto-rovere-mauricette-242961.htm",
    "larghezza_cm": 50.5,
    "profondita_cm": 54.5,
    "descrizione": "Sedia vintage in tessuto riciclato blu e acciaio effetto rovere"
  },
  {
    "nome": "Lotto di 2 - Oliera in vetro",
    "categoria": "Cucina",
    "prezzo": 9.98,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/oliera-in-vetro-1000-2-40-233412_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/oliera-in-vetro-233412.htm",
    "larghezza_cm": 8,
    "profondita_cm": 6,
    "descrizione": "Oliera in vetro"
  },
  {
    "nome": "Ice - Sedia in stile scandinavo blu anatra e legno di hevea",
    "categoria": "Sedie",
    "prezzo": 69.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-in-stile-scandinavo-blu-anatra-e-legno-di-hevea-1000-13-3-210456_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-in-stile-scandinavo-blu-anatra-e-legno-di-hevea-ice-210456.htm",
    "larghezza_cm": 48,
    "profondita_cm": 54.5,
    "descrizione": "Sedia in stile scandinavo blu anatra e legno di hevea"
  },
  {
    "nome": "Lampada a fungo in vetro verde",
    "categoria": "Lampade",
    "prezzo": 24.99,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/251238/lampada-a-fungo-in-vetro-verde.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/lampada-a-fungo-in-vetro-verde-251238.htm",
    "larghezza_cm": 15,
    "profondita_cm": 15,
    "descrizione": "Lampada a fungo in vetro verde"
  },
  {
    "nome": "Kate - Sedia in tessuto bouclé écru e acciaio nero",
    "categoria": "Sedie",
    "prezzo": 99.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-in-tessuto-boucle-ecru-e-acciaio-nero-1000-4-23-230320_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-in-tessuto-boucle-ecru-e-acciaio-nero-kate-230320.htm",
    "larghezza_cm": 56,
    "profondita_cm": 55,
    "descrizione": "Sedia in tessuto bouclé écru e acciaio nero"
  },
  {
    "nome": "Tenda con occhielli in lino terracotta, al pezzo 130x300 cm",
    "categoria": "Tessile",
    "prezzo": 64.5,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tenda-con-occhielli-in-lino-terracotta-al-pezzo-130x300-cm-1000-8-9-200540_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tenda-con-occhielli-in-lino-terracotta-al-pezzo-130x300-cm-200540.htm",
    "larghezza_cm": 130,
    "profondita_cm": 0.5,
    "descrizione": "Tenda con occhielli in lino terracotta, al pezzo 130x300 cm"
  },
  {
    "nome": "Isys - Sedia in velluto di cotone beige cappuccino e acciaio nero",
    "categoria": "Sedie",
    "prezzo": 159,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-in-velluto-di-cotone-beige-cappuccino-e-acciaio-nero-1000-16-32-210034_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-in-velluto-di-cotone-beige-cappuccino-e-acciaio-nero-isys-210034.htm",
    "larghezza_cm": 51,
    "profondita_cm": 54,
    "descrizione": "Sedia in velluto di cotone beige cappuccino e acciaio nero"
  },
  {
    "nome": "Lampada a sospensione cilindrica in terracotta color crema",
    "categoria": "Lampade",
    "prezzo": 39.99,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/251944/lampada-a-sospensione-cilindrica-in-terracotta-color-crema.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/lampada-a-sospensione-cilindrica-in-terracotta-color-crema-251944.htm",
    "larghezza_cm": 10,
    "profondita_cm": 10,
    "descrizione": "Lampada a sospensione cilindrica in terracotta color crema"
  },
  {
    "nome": "Cuscino sfere lavorate a maglia écru, 45x45 cm",
    "categoria": "Tessile",
    "prezzo": 29.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/cuscino-sfere-lavorate-a-maglia-ecru-45x45-cm-1000-14-13-189105_15.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/cuscino-sfere-lavorate-a-maglia-ecru-45x45-cm-189105.htm",
    "larghezza_cm": 45,
    "profondita_cm": 10,
    "descrizione": "Cuscino sfere lavorate a maglia écru, 45x45 cm"
  },
  {
    "nome": "Mangrove - Sedia in tessuto beige e legno di frassino medio",
    "categoria": "Sedie",
    "prezzo": 229,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-in-tessuto-beige-e-legno-di-frassino-medio-1000-14-2-249897_2.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-in-tessuto-beige-e-legno-di-frassino-medio-mangrove-249897.htm",
    "larghezza_cm": 55,
    "profondita_cm": 59,
    "descrizione": "Sedia in tessuto beige e legno di frassino medio"
  },
  {
    "nome": "Mangrove - Sedia in legno di frassino medio",
    "categoria": "Sedie",
    "prezzo": 229,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/234417_0/sedia-in-legno-di-frassino-medio.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-in-legno-di-frassino-medio-mangrove-234417.htm",
    "larghezza_cm": 55,
    "profondita_cm": 56,
    "descrizione": "Sedia in legno di frassino medio"
  },
  {
    "nome": "Lampada a sospensione a forma di campana in rattan",
    "categoria": "Lampade",
    "prezzo": 48.95,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/252250/lampada-a-sospensione-a-forma-di-campana-in-rattan.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/lampada-a-sospensione-a-forma-di-campana-in-rattan-252250.htm",
    "larghezza_cm": 45,
    "profondita_cm": 45,
    "descrizione": "Lampada a sospensione a forma di campana in rattan"
  },
  {
    "nome": "Cestino per posate in giunco intrecciato",
    "categoria": "Cucina",
    "prezzo": 14.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/cestino-per-posate-in-giunco-intrecciato-1000-16-4-247111_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/cestino-per-posate-in-giunco-intrecciato-247111.htm",
    "larghezza_cm": 19,
    "profondita_cm": 19,
    "descrizione": "Cestino per posate in giunco intrecciato"
  },
  {
    "nome": "Ice - Sedia in stile scandinavo in tessuto bouclé écru e legno di hevea",
    "categoria": "Sedie",
    "prezzo": 55.95,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-in-stile-scandinavo-in-tessuto-boucle-ecru-e-legno-di-hevea-1000-6-25-230322_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-in-stile-scandinavo-in-tessuto-boucle-ecru-e-legno-di-hevea-ice-230322.htm",
    "larghezza_cm": 48,
    "profondita_cm": 56.5,
    "descrizione": "Sedia in stile scandinavo in tessuto bouclé écru e legno di hevea"
  },
  {
    "nome": "Isys - Sedia in velluto verde kaki e acciaio nero",
    "categoria": "Sedie",
    "prezzo": 159,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-in-velluto-verde-kaki-e-acciaio-nero-1000-3-31-199209_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-in-velluto-verde-kaki-e-acciaio-nero-isys-199209.htm",
    "larghezza_cm": 51,
    "profondita_cm": 54,
    "descrizione": "Sedia in velluto verde kaki e acciaio nero"
  },
  {
    "nome": "Julian - Divano letto 3/4 posti blu notte, materasso 10 cm",
    "categoria": "Divani",
    "prezzo": 999,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-letto-3-4-posti-blu-notte-materasso-10-cm-1000-6-0-247271_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-letto-3-4-posti-blu-notte-materasso-10-cm-julian-247271.htm",
    "larghezza_cm": 180,
    "profondita_cm": 95,
    "descrizione": "Divano letto 3/4 posti blu notte, materasso 10 cm"
  },
  {
    "nome": "Flemming - Sedia imbottita in pelle di bufalo marrone e acciaio nero",
    "categoria": "Sedie",
    "prezzo": 169,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-imbottita-in-pelle-di-bufalo-marrone-e-acciaio-nero-1000-0-25-199121_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-imbottita-in-pelle-di-bufalo-marrone-e-acciaio-nero-flemming-199121.htm",
    "larghezza_cm": 46,
    "profondita_cm": 52,
    "descrizione": "Sedia imbottita in pelle di bufalo marrone e acciaio nero"
  },
  {
    "nome": "Portabottiglie in legno di acacia",
    "categoria": "Cucina",
    "prezzo": 29.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/portabottiglie-in-legno-di-acacia-1000-0-27-244715_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/portabottiglie-in-legno-di-acacia-244715.htm",
    "larghezza_cm": 44,
    "profondita_cm": 12,
    "descrizione": "Portabottiglie in legno di acacia"
  },
  {
    "nome": "Piatto da dessert in gres écru con motivo palma e bordo fucsia",
    "categoria": "Cucina",
    "prezzo": 6.99,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/253356/piatto-da-dessert-in-gres-ecru-con-motivo-palma-e-bordo-fucsia.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/piatto-da-dessert-in-gres-ecru-con-motivo-palma-e-bordo-fucsia-253356.htm",
    "larghezza_cm": 21.5,
    "profondita_cm": 21.5,
    "descrizione": "Piatto da dessert in gres écru con motivo palma e bordo fucsia"
  },
  {
    "nome": "Julian - Divano letto 3/4 posti in tessuto tramato beige, materasso 10 cm",
    "categoria": "Divani",
    "prezzo": 999,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/247257_0/divano-letto-3-4-posti-in-tessuto-tramato-beige-materasso-10-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-letto-3-4-posti-in-tessuto-tramato-beige-materasso-10-cm-julian-247257.htm",
    "larghezza_cm": 180,
    "profondita_cm": 95,
    "descrizione": "Divano letto 3/4 posti in tessuto tramato beige, materasso 10 cm"
  },
  {
    "nome": "Tenda in velluto nero con occhielli, al pezzo, 140x300 cm",
    "categoria": "Tessile",
    "prezzo": 49.95,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tenda-in-velluto-nero-con-occhielli-al-pezzo-140x300-cm-1000-16-11-235228_4.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tenda-in-velluto-nero-con-occhielli-al-pezzo-140x300-cm-235228.htm",
    "larghezza_cm": 140,
    "profondita_cm": 0.5,
    "descrizione": "Tenda in velluto nero con occhielli, al pezzo, 140x300 cm"
  },
  {
    "nome": "Set Mojito",
    "categoria": "Cucina",
    "prezzo": 9.95,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/set-mojito-1000-1-8-241826_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/set-mojito-241826.htm",
    "larghezza_cm": 55,
    "profondita_cm": 60,
    "descrizione": "Set Mojito"
  },
  {
    "nome": "Mangrove - Sedia in legno di frassino medio e carta intrecciata",
    "categoria": "Sedie",
    "prezzo": 229,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-in-legno-di-frassino-medio-e-carta-intrecciata-1000-0-9-238629_15.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-in-legno-di-frassino-medio-e-carta-intrecciata-mangrove-238629.htm",
    "larghezza_cm": 55,
    "profondita_cm": 60,
    "descrizione": "Sedia in legno di frassino medio e carta intrecciata"
  },
  {
    "nome": "Louvain - Divano letto 3/4 posti in lino lavato bianco",
    "categoria": "Divani",
    "prezzo": 1599,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-letto-3-4-posti-in-lino-lavato-bianco-1000-12-5-241905_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-letto-3-4-posti-in-lino-lavato-bianco-louvain-241905.htm",
    "larghezza_cm": 203,
    "profondita_cm": 98,
    "descrizione": "Divano letto 3/4 posti in lino lavato bianco"
  },
  {
    "nome": "Tenda con occhielli écru al pezzo, 130x300 cm",
    "categoria": "Tessile",
    "prezzo": 50,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tenda-con-occhielli-ecru-al-pezzo-130x300-cm-1000-2-29-234262_2.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tenda-con-occhielli-ecru-al-pezzo-130x300-cm-234262.htm",
    "larghezza_cm": 130,
    "profondita_cm": 1,
    "descrizione": "Tenda con occhielli écru al pezzo, 130x300 cm"
  },
  {
    "nome": "Versailles - Sedia color lino e paglia di Vienna",
    "categoria": "Sedie",
    "prezzo": 199,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-color-lino-e-paglia-di-vienna-1000-5-30-234673_3.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-color-lino-e-paglia-di-vienna-versailles-234673.htm",
    "larghezza_cm": 51,
    "profondita_cm": 57,
    "descrizione": "Sedia color lino e paglia di Vienna"
  },
  {
    "nome": "Divano letto 4 posti con rivestimento sfoderabile in tessuto tramato beige, materasso da 10 cm",
    "categoria": "Divani",
    "prezzo": 1499,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/252840/divano-letto-4-posti-con-rivestimento-sfoderabile-in-tessuto-tramato-beige-materasso-da-10-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-letto-4-posti-con-rivestimento-sfoderabile-in-tessuto-tramato-beige-materasso-da-10-cm-252840.htm",
    "larghezza_cm": 200,
    "profondita_cm": 95,
    "descrizione": "Divano letto 4 posti con rivestimento sfoderabile in tessuto tramato beige, materasso da 10 cm"
  },
  {
    "nome": "Hallen - Divano letto pieghevole 2 posti beige",
    "categoria": "Divani",
    "prezzo": 399,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-letto-pieghevole-2-posti-beige-1000-15-28-234343_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-letto-pieghevole-2-posti-beige-hallen-234343.htm",
    "larghezza_cm": 150,
    "profondita_cm": 85,
    "descrizione": "Divano letto pieghevole 2 posti beige"
  },
  {
    "nome": "Flemming - Sedia in pelle e acciaio nero",
    "categoria": "Sedie",
    "prezzo": 118.3,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-in-pelle-e-acciaio-nero-1000-2-8-238546_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-in-pelle-e-acciaio-nero-flemming-238546.htm",
    "larghezza_cm": 46,
    "profondita_cm": 52,
    "descrizione": "Sedia in pelle e acciaio nero"
  },
  {
    "nome": "Louis - Sedia a medaglione in lino grigio chiaro e massello di frassino",
    "categoria": "Sedie",
    "prezzo": 199,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-a-medaglione-in-lino-grigio-chiaro-e-massello-di-frassino-1000-9-6-234813_4.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-a-medaglione-in-lino-grigio-chiaro-e-massello-di-frassino-louis-234813.htm",
    "larghezza_cm": 49,
    "profondita_cm": 58,
    "descrizione": "Sedia a medaglione in lino grigio chiaro e massello di frassino"
  },
  {
    "nome": "Lampada a sospensione a forma di campana in vetro fumé e asta in acciaio dorato",
    "categoria": "Lampade",
    "prezzo": 99.99,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/252083/lampada-a-sospensione-a-forma-di-campana-in-vetro-fume-e-asta-in-acciaio-dorato.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/lampada-a-sospensione-a-forma-di-campana-in-vetro-fume-e-asta-in-acciaio-dorato-252083.htm",
    "larghezza_cm": 50,
    "profondita_cm": 50,
    "descrizione": "Lampada a sospensione a forma di campana in vetro fumé e asta in acciaio dorato"
  },
  {
    "nome": "Lotto di 4 - Bicchiere in vetro trasparente bianco effetto screziato",
    "categoria": "Cucina",
    "prezzo": 23.96,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/bicchiere-in-vetro-trasparente-bianco-effetto-screziato-1000-0-28-233359_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/bicchiere-in-vetro-trasparente-bianco-effetto-screziato-233359.htm",
    "larghezza_cm": 9,
    "profondita_cm": 6,
    "descrizione": "Bicchiere in vetro trasparente bianco effetto screziato"
  },
  {
    "nome": "Mauricette BUSINESS - Sedie professionali vintage in velluto riciclato blu notte e acciaio imitazione rovere (x2)",
    "categoria": "Sedie",
    "prezzo": 153.3,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedie-professionali-vintage-in-velluto-riciclato-blu-notte-e-acciaio-imitazione-rovere-x2-1000-16-40-243252_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedie-professionali-vintage-in-velluto-riciclato-blu-notte-e-acciaio-imitazione-rovere-x2-mauricette-business-243252.htm",
    "larghezza_cm": 50,
    "profondita_cm": 54.5,
    "descrizione": "Sedie professionali vintage in velluto riciclato blu notte e acciaio imitazione rovere (x2)"
  },
  {
    "nome": "Brooke - Divano trasformabile in stile scandinavo 3 posti blu ghiaccio",
    "categoria": "Divani",
    "prezzo": 799,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-trasformabile-in-stile-scandinavo-3-posti-blu-ghiaccio-1000-5-38-186342_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-trasformabile-in-stile-scandinavo-3-posti-blu-ghiaccio-brooke-186342.htm",
    "larghezza_cm": 214,
    "profondita_cm": 84,
    "descrizione": "Divano trasformabile in stile scandinavo 3 posti blu ghiaccio"
  },
  {
    "nome": "Brooke - Divano trasformabile stile scandinavo 3 posti in velluto a coste marrone",
    "categoria": "Divani",
    "prezzo": 899,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-trasformabile-stile-scandinavo-3-posti-in-velluto-a-coste-marrone-1000-12-26-250167_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-trasformabile-stile-scandinavo-3-posti-in-velluto-a-coste-marrone-brooke-250167.htm",
    "larghezza_cm": 214,
    "profondita_cm": 84,
    "descrizione": "Divano trasformabile stile scandinavo 3 posti in velluto a coste marrone"
  },
  {
    "nome": "Lotto di 2 - Bottiglia in vetro con tappo nero 0,75 L",
    "categoria": "Cucina",
    "prezzo": 7.98,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/bottiglia-in-vetro-con-tappo-nero-0-75-l-1000-9-35-224018_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/bottiglia-in-vetro-con-tappo-nero-0-75-l-224018.htm",
    "larghezza_cm": 7.5,
    "profondita_cm": 7.5,
    "descrizione": "Bottiglia in vetro con tappo nero 0,75 L"
  },
  {
    "nome": "Piatto per olive in ceramica verde",
    "categoria": "Cucina",
    "prezzo": 5,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/piatto-per-olive-in-ceramica-verde-1000-5-29-239059_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/piatto-per-olive-in-ceramica-verde-239059.htm",
    "larghezza_cm": 15,
    "profondita_cm": 14,
    "descrizione": "Piatto per olive in ceramica verde"
  },
  {
    "nome": "Brooke - Divano trasformabile in stile scandinavo 3/4 posti in velluto verde",
    "categoria": "Divani",
    "prezzo": 799,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-trasformabile-in-stile-scandinavo-3-4-posti-in-velluto-verde-1000-4-25-217366_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-trasformabile-in-stile-scandinavo-3-4-posti-in-velluto-verde-brooke-217366.htm",
    "larghezza_cm": 214,
    "profondita_cm": 84,
    "descrizione": "Divano trasformabile in stile scandinavo 3/4 posti in velluto verde"
  },
  {
    "nome": "Set di 2 sedie in acciaio e tessuto riciclato color terracotta",
    "categoria": "Sedie",
    "prezzo": 89.99,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/252562_0/set-di-2-sedie-in-acciaio-e-tessuto-riciclato-color-terracotta.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/set-di-2-sedie-in-acciaio-e-tessuto-riciclato-color-terracotta-252562.htm",
    "larghezza_cm": 49,
    "profondita_cm": 49.5,
    "descrizione": "Set di 2 sedie in acciaio e tessuto riciclato color terracotta"
  },
  {
    "nome": "Lotto di 4 - Calice in vetro con fondo grigio fumé",
    "categoria": "Cucina",
    "prezzo": 19.96,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/calice-in-vetro-con-fondo-grigio-fume-1000-9-1-217014_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/calice-in-vetro-con-fondo-grigio-fume-217014.htm",
    "larghezza_cm": 5.5,
    "profondita_cm": 7,
    "descrizione": "Calice in vetro con fondo grigio fumé"
  },
  {
    "nome": "Charlotte Business - Set di 2 sedie per ristorante verde kaki",
    "categoria": "Sedie",
    "prezzo": 179,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/set-di-2-sedie-per-ristorante-verde-kaki-1000-5-21-246964_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/set-di-2-sedie-per-ristorante-verde-kaki-charlotte-business-246964.htm",
    "larghezza_cm": 49,
    "profondita_cm": 51.5,
    "descrizione": "Set di 2 sedie per ristorante verde kaki"
  },
  {
    "nome": "Brooke - Divano letto angolare stile scandinavo 4/5 posti in velluto a coste marrone",
    "categoria": "Divani",
    "prezzo": 1099,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-letto-angolare-stile-scandinavo-4-5-posti-in-velluto-a-coste-marrone-1000-6-37-250178_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-letto-angolare-stile-scandinavo-4-5-posti-in-velluto-a-coste-marrone-brooke-250178.htm",
    "larghezza_cm": 222,
    "profondita_cm": 163,
    "descrizione": "Divano letto angolare stile scandinavo 4/5 posti in velluto a coste marrone"
  },
  {
    "nome": "Oscarine Business - Set di 2 sedie professionali in acciaio nero e velluto blu navy",
    "categoria": "Sedie",
    "prezzo": 50,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/set-di-2-sedie-professionali-in-acciaio-nero-e-velluto-blu-navy-1000-15-8-219604_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/set-di-2-sedie-professionali-in-acciaio-nero-e-velluto-blu-navy-oscarine-business-219604.htm",
    "larghezza_cm": 46.5,
    "profondita_cm": 55.5,
    "descrizione": "Set di 2 sedie professionali in acciaio nero e velluto blu navy"
  },
  {
    "nome": "Cuscino in velluto di poliestere riciclato effetto antico, ecru 45x45",
    "categoria": "Tessile",
    "prezzo": 19.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/cuscino-in-velluto-di-poliestere-riciclato-effetto-antico-ecru-45x45-1000-7-36-235253_3.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/cuscino-in-velluto-di-poliestere-riciclato-effetto-antico-ecru-45x45-235253.htm",
    "larghezza_cm": 45,
    "profondita_cm": 10,
    "descrizione": "Cuscino in velluto di poliestere riciclato effetto antico, ecru 45x45"
  },
  {
    "nome": "Vassoio rettangolare verde e nero con stampa terrazza di caffetteria",
    "categoria": "Cucina",
    "prezzo": 16.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/vassoio-rettangolare-verde-e-nero-con-stampa-terrazza-di-caffetteria-1000-12-17-228305_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/vassoio-rettangolare-verde-e-nero-con-stampa-terrazza-di-caffetteria-228305.htm",
    "larghezza_cm": 45.5,
    "profondita_cm": 4,
    "descrizione": "Vassoio rettangolare verde e nero con stampa terrazza di caffetteria"
  },
  {
    "nome": "Lampada a sospensione tamburo in tessuto beige e legno di hevea",
    "categoria": "Lampade",
    "prezzo": 64.99,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/222578_0/lampada-a-sospensione-tamburo-in-tessuto-beige-e-legno-di-hevea.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/lampada-a-sospensione-tamburo-in-tessuto-beige-e-legno-di-hevea-222578.htm",
    "larghezza_cm": 35,
    "profondita_cm": 35,
    "descrizione": "Lampada a sospensione tamburo in tessuto beige e legno di hevea"
  },
  {
    "nome": "Sockette - Poltroncina da pranzo in velluto nero e paglia di Vienna",
    "categoria": "Sedie",
    "prezzo": 159,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltroncina-da-pranzo-in-velluto-nero-e-paglia-di-vienna-1000-7-22-219987_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltroncina-da-pranzo-in-velluto-nero-e-paglia-di-vienna-sockette-219987.htm",
    "larghezza_cm": 55,
    "profondita_cm": 59,
    "descrizione": "Poltroncina da pranzo in velluto nero e paglia di Vienna"
  },
  {
    "nome": "Lampada a sospensione in ceramica a coste color crema",
    "categoria": "Lampade",
    "prezzo": 83.3,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/252358/lampada-a-sospensione-in-ceramica-a-coste-color-crema.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/lampada-a-sospensione-in-ceramica-a-coste-color-crema-252358.htm",
    "larghezza_cm": 40,
    "profondita_cm": 40,
    "descrizione": "Lampada a sospensione in ceramica a coste color crema"
  },
  {
    "nome": "Scatola portatisane in legno 26 x 34 cm",
    "categoria": "Cucina",
    "prezzo": 49.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/scatola-portatisane-in-legno-26-x-34-cm-1000-12-31-67015474_4.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/scatola-portatisane-in-legno-26-x-34-cm-67015474.htm",
    "larghezza_cm": 34,
    "profondita_cm": 26,
    "descrizione": "Scatola portatisane in legno 26 x 34 cm"
  },
  {
    "nome": "Davis - Poltrona vintage marrone",
    "categoria": "Poltrone",
    "prezzo": 169,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltrona-vintage-marrone-1000-3-10-155400_2.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-vintage-marrone-davis-155400.htm",
    "larghezza_cm": 58,
    "profondita_cm": 58,
    "descrizione": "Poltrona vintage marrone"
  },
  {
    "nome": "Kintamini Business - Poltrona da pranzo professionale in rattan beige",
    "categoria": "Poltrone",
    "prezzo": 100,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltrona-da-pranzo-professionale-in-rattan-beige-1000-12-24-230362_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-da-pranzo-professionale-in-rattan-beige-kintamini-business-230362.htm",
    "larghezza_cm": 66,
    "profondita_cm": 65,
    "descrizione": "Poltrona da pranzo professionale in rattan beige"
  },
  {
    "nome": "Sacha Business - Poltrona professionale in acciaio nero con motivo pied-de-poule",
    "categoria": "Poltrone",
    "prezzo": 139.3,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltrona-professionale-in-acciaio-nero-con-motivo-pied-de-poule-1000-6-18-219901_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-professionale-in-acciaio-nero-con-motivo-pied-de-poule-sacha-business-219901.htm",
    "larghezza_cm": 57.5,
    "profondita_cm": 59,
    "descrizione": "Poltrona professionale in acciaio nero con motivo pied-de-poule"
  },
  {
    "nome": "Lotto di 6 - Bicchiere in vetro trasparente con macchia blu",
    "categoria": "Cucina",
    "prezzo": 29.94,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/252367/bicchiere-in-vetro-trasparente-con-macchia-blu.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/bicchiere-in-vetro-trasparente-con-macchia-blu-252367.htm",
    "larghezza_cm": 8,
    "profondita_cm": 6.3,
    "descrizione": "Bicchiere in vetro trasparente con macchia blu"
  },
  {
    "nome": "Lampada in rattan traforato",
    "categoria": "Lampade",
    "prezzo": 99.99,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/249215/lampada-in-rattan-traforato.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/lampada-in-rattan-traforato-249215.htm",
    "larghezza_cm": 52,
    "profondita_cm": 52,
    "descrizione": "Lampada in rattan traforato"
  },
  {
    "nome": "Bottiglia a forma di pesce in vetro trasparente da 1 L",
    "categoria": "Cucina",
    "prezzo": 12.99,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/252312/bottiglia-a-forma-di-pesce-in-vetro-trasparente-da-1-l.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/bottiglia-a-forma-di-pesce-in-vetro-trasparente-da-1-l-252312.htm",
    "larghezza_cm": 12,
    "profondita_cm": 12,
    "descrizione": "Bottiglia a forma di pesce in vetro trasparente da 1 L"
  },
  {
    "nome": "Asciugamano bagno in cotone biologico bianco 100x150 cm",
    "categoria": "Tessile",
    "prezzo": 29.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/asciugamano-bagno-in-cotone-biologico-bianco-100x150-cm-1000-15-10-247773_3.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/asciugamano-bagno-in-cotone-biologico-bianco-100x150-cm-247773.htm",
    "larghezza_cm": 100,
    "profondita_cm": 97,
    "descrizione": "Asciugamano bagno in cotone biologico bianco 100x150 cm"
  },
  {
    "nome": "Sedia a sdraio in legno di eucalipto e tela di poliestere riciclato multicolore",
    "categoria": "Sedie",
    "prezzo": 47.95,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/251451/sedia-a-sdraio-in-legno-di-eucalipto-e-tela-di-poliestere-riciclato-multicolore.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-a-sdraio-in-legno-di-eucalipto-e-tela-di-poliestere-riciclato-multicolore-251451.htm",
    "larghezza_cm": 57.5,
    "profondita_cm": 97,
    "descrizione": "Sedia a sdraio in legno di eucalipto e tela di poliestere riciclato multicolore"
  },
  {
    "nome": "Mitch - Sedia da giardino pieghevole in tessuto plastificato e legno massello di acacia",
    "categoria": "Sedie",
    "prezzo": 89.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-da-giardino-pieghevole-in-tessuto-plastificato-e-legno-massello-di-acacia-1000-2-30-218724_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-da-giardino-pieghevole-in-tessuto-plastificato-e-legno-massello-di-acacia-mitch-218724.htm",
    "larghezza_cm": 56,
    "profondita_cm": 49,
    "descrizione": "Sedia da giardino pieghevole in tessuto plastificato e legno massello di acacia"
  },
  {
    "nome": "Lampada a forma di fungo nera",
    "categoria": "Lampade",
    "prezzo": 69.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/lampada-a-forma-di-fungo-nera-1000-5-22-246760_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/lampada-a-forma-di-fungo-nera-246760.htm",
    "larghezza_cm": 21,
    "profondita_cm": 21,
    "descrizione": "Lampada a forma di fungo nera"
  },
  {
    "nome": "Belleville - Sedia da giardino in acciaio verde kaki",
    "categoria": "Sedie",
    "prezzo": 59.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-da-giardino-in-acciaio-verde-kaki-1000-2-3-245839_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-da-giardino-in-acciaio-verde-kaki-belleville-245839.htm",
    "larghezza_cm": 46,
    "profondita_cm": 63.5,
    "descrizione": "Sedia da giardino in acciaio verde kaki"
  },
  {
    "nome": "Quirimbas - Sedia da giardino in resina intrecciata",
    "categoria": "Sedie",
    "prezzo": 229,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-da-giardino-in-resina-intrecciata-1000-14-21-238354_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-da-giardino-in-resina-intrecciata-quirimbas-238354.htm",
    "larghezza_cm": 59.5,
    "profondita_cm": 65,
    "descrizione": "Sedia da giardino in resina intrecciata"
  },
  {
    "nome": "Mazette - Sedia per isola centrale in legno di mango e sisal alt. 65 cm",
    "categoria": "Sedie",
    "prezzo": 229,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-per-isola-centrale-in-legno-di-mango-e-sisal-alt-65-cm-1000-10-1-238826_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-per-isola-centrale-in-legno-di-mango-e-sisal-alt-65-cm-mazette-238826.htm",
    "larghezza_cm": 45,
    "profondita_cm": 48,
    "descrizione": "Sedia per isola centrale in legno di mango e sisal alt. 65 cm"
  },
  {
    "nome": "Julian - Divano letto 3/4 posti verde kaki, materasso 14 cm",
    "categoria": "Divani",
    "prezzo": 1119.2,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-letto-3-4-posti-verde-kaki-materasso-14-cm-1000-6-24-247254_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-letto-3-4-posti-verde-kaki-materasso-14-cm-julian-247254.htm",
    "larghezza_cm": 180,
    "profondita_cm": 97,
    "descrizione": "Divano letto 3/4 posti verde kaki, materasso 14 cm"
  },
  {
    "nome": "Kaishi Business - Sedie da pranzo da giardino professionali color terracotta (x2)",
    "categoria": "Sedie",
    "prezzo": 139,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedie-da-pranzo-da-giardino-professionali-color-terracotta-x2-1000-6-32-247016_22.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedie-da-pranzo-da-giardino-professionali-color-terracotta-x2-kaishi-business-247016.htm",
    "larghezza_cm": 59,
    "profondita_cm": 51,
    "descrizione": "Sedie da pranzo da giardino professionali color terracotta (x2)"
  },
  {
    "nome": "Julian - Divano letto 3/4 posti giallo ocra, materasso 14 cm",
    "categoria": "Divani",
    "prezzo": 1399,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-letto-3-4-posti-giallo-ocra-materasso-14-cm-1000-16-34-247264_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-letto-3-4-posti-giallo-ocra-materasso-14-cm-julian-247264.htm",
    "larghezza_cm": 180,
    "profondita_cm": 97,
    "descrizione": "Divano letto 3/4 posti giallo ocra, materasso 14 cm"
  },
  {
    "nome": "Varna - Sedia a sdraio in legno di eucalipto e tela in poliestere riciclato verde kaki",
    "categoria": "Sedie",
    "prezzo": 129,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-a-sdraio-in-legno-di-eucalipto-e-tela-in-poliestere-riciclato-verde-kaki-1000-1-36-238205_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-a-sdraio-in-legno-di-eucalipto-e-tela-in-poliestere-riciclato-verde-kaki-varna-238205.htm",
    "larghezza_cm": 67,
    "profondita_cm": 100,
    "descrizione": "Sedia a sdraio in legno di eucalipto e tela in poliestere riciclato verde kaki"
  },
  {
    "nome": "Iza Business - Sedia da giardino professionale color terracotta (x2)",
    "categoria": "Sedie",
    "prezzo": 50,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-da-giardino-professionale-color-terracotta-x2-1000-13-37-238370_6.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-da-giardino-professionale-color-terracotta-x2-iza-business-238370.htm",
    "larghezza_cm": 52.5,
    "profondita_cm": 50,
    "descrizione": "Sedia da giardino professionale color terracotta (x2)"
  },
  {
    "nome": "Nio - Poltrona letto pieghevole in velluto verde",
    "categoria": "Divani",
    "prezzo": 259,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltrona-letto-pieghevole-in-velluto-verde-1000-8-6-230426_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-letto-pieghevole-in-velluto-verde-nio-230426.htm",
    "larghezza_cm": 99,
    "profondita_cm": 87,
    "descrizione": "Poltrona letto pieghevole in velluto verde"
  },
  {
    "nome": "Lampada da notte nuvola bianca",
    "categoria": "Lampade",
    "prezzo": 8.45,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/lampada-da-notte-nuvola-bianca-1000-2-15-235027_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/lampada-da-notte-nuvola-bianca-235027.htm",
    "larghezza_cm": 23,
    "profondita_cm": 9,
    "descrizione": "Lampada da notte nuvola bianca"
  },
  {
    "nome": "Nio - Divano letto pieghevole a 2 posti in velluto verde",
    "categoria": "Divani",
    "prezzo": 349,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-letto-pieghevole-a-2-posti-in-velluto-verde-1000-6-26-216178_6.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-letto-pieghevole-a-2-posti-in-velluto-verde-nio-216178.htm",
    "larghezza_cm": 150,
    "profondita_cm": 91,
    "descrizione": "Divano letto pieghevole a 2 posti in velluto verde"
  },
  {
    "nome": "Teacher - Sedia da ufficio a rotelle marrone in cuoio e acciaio",
    "categoria": "Sedie",
    "prezzo": 399,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-da-ufficio-a-rotelle-marrone-in-cuoio-e-acciaio-1000-16-14-249950_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-da-ufficio-a-rotelle-marrone-in-cuoio-e-acciaio-teacher-249950.htm",
    "larghezza_cm": 62,
    "profondita_cm": 70.5,
    "descrizione": "Sedia da ufficio a rotelle marrone in cuoio e acciaio"
  },
  {
    "nome": "Julian - Divano letto 3/4 posti in velluto a coste beige, materasso 10 cm",
    "categoria": "Divani",
    "prezzo": 879.2,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-letto-3-4-posti-in-velluto-a-coste-beige-materasso-10-cm-1000-7-1-247272_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-letto-3-4-posti-in-velluto-a-coste-beige-materasso-10-cm-julian-247272.htm",
    "larghezza_cm": 180,
    "profondita_cm": 95,
    "descrizione": "Divano letto 3/4 posti in velluto a coste beige, materasso 10 cm"
  },
  {
    "nome": "Iza Business - Sedia da giardino professionale verde kaki (x2)",
    "categoria": "Sedie",
    "prezzo": 50,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-da-giardino-professionale-verde-kaki-x2-1000-14-38-238371_6.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-da-giardino-professionale-verde-kaki-x2-iza-business-238371.htm",
    "larghezza_cm": 52.5,
    "profondita_cm": 50,
    "descrizione": "Sedia da giardino professionale verde kaki (x2)"
  },
  {
    "nome": "Nio - Poltrona letto pieghevole in velluto blu",
    "categoria": "Divani",
    "prezzo": 259,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltrona-letto-pieghevole-in-velluto-blu-1000-5-34-230372_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-letto-pieghevole-in-velluto-blu-nio-230372.htm",
    "larghezza_cm": 99,
    "profondita_cm": 87,
    "descrizione": "Poltrona letto pieghevole in velluto blu"
  },
  {
    "nome": "Cloud - Divano letto clic clac a 2/3 posti verde acqua",
    "categoria": "Divani",
    "prezzo": 100,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-letto-clic-clac-a-2-3-posti-verde-acqua-1000-5-39-230049_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-letto-clic-clac-a-2-3-posti-verde-acqua-cloud-230049.htm",
    "larghezza_cm": 189,
    "profondita_cm": 103,
    "descrizione": "Divano letto clic clac a 2/3 posti verde acqua"
  },
  {
    "nome": "Vassoio blu e bianco",
    "categoria": "Cucina",
    "prezzo": 14.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/vassoio-blu-e-bianco-1000-1-29-247300_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/vassoio-blu-e-bianco-247300.htm",
    "larghezza_cm": 45.5,
    "profondita_cm": 29.5,
    "descrizione": "Vassoio blu e bianco"
  },
  {
    "nome": "Julian - Divano letto 3/4 posti in tessuto tramato grigio antracite, materasso 14 cm",
    "categoria": "Divani",
    "prezzo": 1399,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-letto-3-4-posti-in-tessuto-tramato-grigio-antracite-materasso-14-cm-1000-2-37-247267_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-letto-3-4-posti-in-tessuto-tramato-grigio-antracite-materasso-14-cm-julian-247267.htm",
    "larghezza_cm": 180,
    "profondita_cm": 97,
    "descrizione": "Divano letto 3/4 posti in tessuto tramato grigio antracite, materasso 14 cm"
  },
  {
    "nome": "Isabel - Sedia da giardino in resina intrecciata nera e metallo effetto legno",
    "categoria": "Sedie",
    "prezzo": 20,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-da-giardino-in-resina-intrecciata-nera-e-metallo-effetto-legno-1000-14-8-208944_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-da-giardino-in-resina-intrecciata-nera-e-metallo-effetto-legno-isabel-208944.htm",
    "larghezza_cm": 51,
    "profondita_cm": 58,
    "descrizione": "Sedia da giardino in resina intrecciata nera e metallo effetto legno"
  },
  {
    "nome": "Julian - Divano letto ad angolo sinistro 4/5 posti in tessuto tramato beige, materasso 14 cm",
    "categoria": "Divani",
    "prezzo": 1399.3,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-letto-ad-angolo-sinistro-4-5-posti-in-tessuto-tramato-beige-materasso-14-cm-1000-5-6-247236_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-letto-ad-angolo-sinistro-4-5-posti-in-tessuto-tramato-beige-materasso-14-cm-julian-247236.htm",
    "larghezza_cm": 235,
    "profondita_cm": 162,
    "descrizione": "Divano letto ad angolo sinistro 4/5 posti in tessuto tramato beige, materasso 14 cm"
  },
  {
    "nome": "Clapper - Sedia per isola centrale in pelle marrone e acciaio nero H66",
    "categoria": "Sedie",
    "prezzo": 169,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-per-isola-centrale-in-pelle-marrone-e-acciaio-nero-h66-1000-13-29-248366_9.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-per-isola-centrale-in-pelle-marrone-e-acciaio-nero-h66-clapper-248366.htm",
    "larghezza_cm": 46.5,
    "profondita_cm": 53,
    "descrizione": "Sedia per isola centrale in pelle marrone e acciaio nero H66"
  },
  {
    "nome": "Belleville Business - Sedia da bar professionale in metallo verde kaki",
    "categoria": "Sedie",
    "prezzo": 20,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-da-bar-professionale-in-metallo-verde-kaki-1000-1-19-219369_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-da-bar-professionale-in-metallo-verde-kaki-belleville-business-219369.htm",
    "larghezza_cm": 44.5,
    "profondita_cm": 56.5,
    "descrizione": "Sedia da bar professionale in metallo verde kaki"
  },
  {
    "nome": "Anaelle - Divano letto 4 posti in lino lavato",
    "categoria": "Divani",
    "prezzo": 1499,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-letto-4-posti-in-lino-lavato-1000-11-2-242312_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-letto-4-posti-in-lino-lavato-anaelle-242312.htm",
    "larghezza_cm": 213,
    "profondita_cm": 107,
    "descrizione": "Divano letto 4 posti in lino lavato"
  },
  {
    "nome": "Selva BUSINESS - Sedia da giardino professionale in resina nera",
    "categoria": "Sedie",
    "prezzo": 55.95,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-da-giardino-professionale-in-resina-nera-1000-1-40-198357_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-da-giardino-professionale-in-resina-nera-selva-business-198357.htm",
    "larghezza_cm": 47,
    "profondita_cm": 60,
    "descrizione": "Sedia da giardino professionale in resina nera"
  },
  {
    "nome": "Julian - Divano letto 3/4 posti in tessuto tramato grigio chiaro chiné, materasso 14 cm",
    "categoria": "Divani",
    "prezzo": 1399,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-letto-3-4-posti-in-tessuto-tramato-grigio-chiaro-chine-materasso-14-cm-1000-12-30-247260_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-letto-3-4-posti-in-tessuto-tramato-grigio-chiaro-chine-materasso-14-cm-julian-247260.htm",
    "larghezza_cm": 180,
    "profondita_cm": 97,
    "descrizione": "Divano letto 3/4 posti in tessuto tramato grigio chiaro chiné, materasso 14 cm"
  },
  {
    "nome": "Lotto di 2 - Piatto fondo per risotto in ceramica bianca",
    "categoria": "Cucina",
    "prezzo": 13.98,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/piatto-fondo-per-risotto-in-ceramica-bianca-1000-6-32-245622_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/piatto-fondo-per-risotto-in-ceramica-bianca-245622.htm",
    "larghezza_cm": 30,
    "profondita_cm": 30,
    "descrizione": "Piatto fondo per risotto in ceramica bianca"
  },
  {
    "nome": "Anaelle - Divano letto 2 posti in lino bianco",
    "categoria": "Divani",
    "prezzo": 1299,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-letto-2-posti-in-lino-bianco-1000-12-5-242602_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-letto-2-posti-in-lino-bianco-anaelle-242602.htm",
    "larghezza_cm": 173,
    "profondita_cm": 107,
    "descrizione": "Divano letto 2 posti in lino bianco"
  },
  {
    "nome": "Isys - Sedia da bar in velluto beige con gambe in legno di frassino nero e acciaio dorato alt. 82 cm",
    "categoria": "Sedie",
    "prezzo": 179,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-da-bar-in-velluto-beige-con-gambe-in-legno-di-frassino-nero-e-acciaio-dorato-alt-82-cm-1000-13-32-230329_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-da-bar-in-velluto-beige-con-gambe-in-legno-di-frassino-nero-e-acciaio-dorato-alt-82-cm-isys-230329.htm",
    "larghezza_cm": 51,
    "profondita_cm": 60,
    "descrizione": "Sedia da bar in velluto beige con gambe in legno di frassino nero e acciaio dorato alt. 82 cm"
  },
  {
    "nome": "Barcelone - Divano letto angolare con penisola a sinistra 6 posti in lino blu celadon",
    "categoria": "Divani",
    "prezzo": 2099,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-letto-angolare-con-penisola-a-sinistra-6-posti-in-lino-blu-celadon-1000-10-0-242515_7.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-letto-angolare-con-penisola-a-sinistra-6-posti-in-lino-blu-celadon-barcelone-242515.htm",
    "larghezza_cm": 300,
    "profondita_cm": 190,
    "descrizione": "Divano letto angolare con penisola a sinistra 6 posti in lino blu celadon"
  },
  {
    "nome": "Wendell - Sedia da bar imbottita in pelle di bufalo marrone e acciaio nero H69",
    "categoria": "Sedie",
    "prezzo": 189,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-da-bar-imbottita-in-pelle-di-bufalo-marrone-e-acciaio-nero-h69-1000-8-26-199163_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-da-bar-imbottita-in-pelle-di-bufalo-marrone-e-acciaio-nero-h69-wendell-199163.htm",
    "larghezza_cm": 44,
    "profondita_cm": 53,
    "descrizione": "Sedia da bar imbottita in pelle di bufalo marrone e acciaio nero H69"
  },
  {
    "nome": "Barcelone - Divano letto a 3/4 posti in lino superiore bianco, materasso 14 cm",
    "categoria": "Divani",
    "prezzo": 2399,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-letto-a-3-4-posti-in-lino-superiore-bianco-materasso-14-cm-1000-0-31-242505_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-letto-a-3-4-posti-in-lino-superiore-bianco-materasso-14-cm-barcelone-242505.htm",
    "larghezza_cm": 182,
    "profondita_cm": 101,
    "descrizione": "Divano letto a 3/4 posti in lino superiore bianco, materasso 14 cm"
  },
  {
    "nome": "Tradition - Sedia da bar in legno di frassino, acciaio nero e rattan alt. 75 cm",
    "categoria": "Sedie",
    "prezzo": 111.3,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-da-bar-in-legno-di-frassino-acciaio-nero-e-rattan-alt-75-cm-1000-5-17-238719_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-da-bar-in-legno-di-frassino-acciaio-nero-e-rattan-alt-75-cm-tradition-238719.htm",
    "larghezza_cm": 46,
    "profondita_cm": 47.5,
    "descrizione": "Sedia da bar in legno di frassino, acciaio nero e rattan alt. 75 cm"
  },
  {
    "nome": "Anaelle - Divano letto 3/4 posti in lino blu celadon",
    "categoria": "Divani",
    "prezzo": 1499,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-letto-3-4-posti-in-lino-blu-celadon-1000-5-26-242459_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-letto-3-4-posti-in-lino-blu-celadon-anaelle-242459.htm",
    "larghezza_cm": 213,
    "profondita_cm": 107,
    "descrizione": "Divano letto 3/4 posti in lino blu celadon"
  },
  {
    "nome": "Meloa - Sedia da bar in rattan alt. 76 cm",
    "categoria": "Sedie",
    "prezzo": 100,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-da-bar-in-rattan-alt-76-cm-1000-16-28-234548_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-da-bar-in-rattan-alt-76-cm-meloa-234548.htm",
    "larghezza_cm": 54,
    "profondita_cm": 57,
    "descrizione": "Sedia da bar in rattan alt. 76 cm"
  },
  {
    "nome": "Anaelle - Divano letto 4 posti antracite in lino lavato",
    "categoria": "Divani",
    "prezzo": 1499,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-letto-4-posti-antracite-in-lino-lavato-1000-10-7-242481_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-letto-4-posti-antracite-in-lino-lavato-anaelle-242481.htm",
    "larghezza_cm": 213,
    "profondita_cm": 107,
    "descrizione": "Divano letto 4 posti antracite in lino lavato"
  },
  {
    "nome": "Julian - Divano letto a 2/3 posti beige, materasso 14 cm",
    "categoria": "Divani",
    "prezzo": 1499,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-letto-a-2-3-posti-beige-materasso-14-cm-1000-8-36-242428_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-letto-a-2-3-posti-beige-materasso-14-cm-julian-242428.htm",
    "larghezza_cm": 180,
    "profondita_cm": 97,
    "descrizione": "Divano letto a 2/3 posti beige, materasso 14 cm"
  },
  {
    "nome": "Key West - Sedia per isola centrale in rattan Kubu grigio e legno massello di mogano H65",
    "categoria": "Sedie",
    "prezzo": 169,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-per-isola-centrale-in-rattan-kubu-grigio-e-legno-massello-di-mogano-h65-1000-13-33-209215_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-per-isola-centrale-in-rattan-kubu-grigio-e-legno-massello-di-mogano-h65-key-west-209215.htm",
    "larghezza_cm": 46.5,
    "profondita_cm": 51.5,
    "descrizione": "Sedia per isola centrale in rattan Kubu grigio e legno massello di mogano H65"
  },
  {
    "nome": "Ciotola per riso in ceramica nera con bacchette in legno di faggio",
    "categoria": "Cucina",
    "prezzo": 9.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/ciotola-per-riso-in-ceramica-nera-con-bacchette-in-legno-di-faggio-1000-13-37-247431_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/ciotola-per-riso-in-ceramica-nera-con-bacchette-in-legno-di-faggio-247431.htm",
    "larghezza_cm": 13.5,
    "profondita_cm": 13.5,
    "descrizione": "Ciotola per riso in ceramica nera con bacchette in legno di faggio"
  },
  {
    "nome": "Pitaya - Sedia da bar in rattan e acciaio nero H75",
    "categoria": "Sedie",
    "prezzo": 139.3,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-da-bar-in-rattan-e-acciaio-nero-h75-1000-16-31-219996_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-da-bar-in-rattan-e-acciaio-nero-h75-pitaya-219996.htm",
    "larghezza_cm": 43.5,
    "profondita_cm": 49.5,
    "descrizione": "Sedia da bar in rattan e acciaio nero H75"
  },
  {
    "nome": "Set di 4 sottobicchieri in gres bianco e giallo a forma di uovo al tegamino",
    "categoria": "Cucina",
    "prezzo": 9.99,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/252963/set-di-4-sottobicchieri-in-gres-bianco-e-giallo-a-forma-di-uovo-al-tegamino.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/set-di-4-sottobicchieri-in-gres-bianco-e-giallo-a-forma-di-uovo-al-tegamino-252963.htm",
    "larghezza_cm": 9.7,
    "profondita_cm": 9.3,
    "descrizione": "Set di 4 sottobicchieri in gres bianco e giallo a forma di uovo al tegamino"
  },
  {
    "nome": "Set di 4 bicchieri in vetro trasparente con motivi multicolori e supporto chiosco verde",
    "categoria": "Cucina",
    "prezzo": 34.99,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/252920/set-di-4-bicchieri-in-vetro-trasparente-con-motivi-multicolori-e-supporto-chiosco-verde.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/set-di-4-bicchieri-in-vetro-trasparente-con-motivi-multicolori-e-supporto-chiosco-verde-252920.htm",
    "larghezza_cm": 17.5,
    "profondita_cm": 14.5,
    "descrizione": "Set di 4 bicchieri in vetro trasparente con motivi multicolori e supporto chiosco verde"
  },
  {
    "nome": "Quimby Business - Sedia da bar professionale bianca e imitazione frassino",
    "categoria": "Sedie",
    "prezzo": 50,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-da-bar-professionale-bianca-e-imitazione-frassino-1000-16-13-209728_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-da-bar-professionale-bianca-e-imitazione-frassino-quimby-business-209728.htm",
    "larghezza_cm": 53,
    "profondita_cm": 53,
    "descrizione": "Sedia da bar professionale bianca e imitazione frassino"
  },
  {
    "nome": "Galaxy - Cassettone da letto a soppalco bianco con ruote, 90x190 cm",
    "categoria": "Letti",
    "prezzo": 139,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/cassettone-da-letto-a-soppalco-bianco-con-ruote-90x190-cm-1000-2-26-193054_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/cassettone-da-letto-a-soppalco-bianco-con-ruote-90x190-cm-galaxy-193054.htm",
    "larghezza_cm": 193,
    "profondita_cm": 95,
    "descrizione": "Cassettone da letto a soppalco bianco con ruote, 90x190 cm"
  },
  {
    "nome": "Jane Business - Sedia da ufficio professionale in tessuto spalmato bianco",
    "categoria": "Sedie",
    "prezzo": 209,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sedia-da-ufficio-professionale-in-tessuto-spalmato-bianco-1000-13-6-198692_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sedia-da-ufficio-professionale-in-tessuto-spalmato-bianco-jane-business-198692.htm",
    "larghezza_cm": 56,
    "profondita_cm": 67,
    "descrizione": "Sedia da ufficio professionale in tessuto spalmato bianco"
  },
  {
    "nome": "Infusore da tè a pallina in acciaio con croissant",
    "categoria": "Cucina",
    "prezzo": 5.99,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/252960/infusore-da-te-a-pallina-in-acciaio-con-croissant.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/infusore-da-te-a-pallina-in-acciaio-con-croissant-252960.htm",
    "larghezza_cm": 4.5,
    "profondita_cm": 1.8,
    "descrizione": "Infusore da tè a pallina in acciaio con croissant"
  },
  {
    "nome": "Marignane - 2 sedie da giardino pieghevoli in acciaio nero e cuscini bianco sporco",
    "categoria": "Sedie",
    "prezzo": 119,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/2-sedie-da-giardino-pieghevoli-in-acciaio-nero-e-cuscini-bianco-sporco-1000-6-3-238295_2.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/2-sedie-da-giardino-pieghevoli-in-acciaio-nero-e-cuscini-bianco-sporco-marignane-238295.htm",
    "larghezza_cm": 46.5,
    "profondita_cm": 52,
    "descrizione": "2 sedie da giardino pieghevoli in acciaio nero e cuscini bianco sporco"
  },
  {
    "nome": "Guinguette - Set di 2 sedie da giardino pieghevoli in acciaio color terracotta",
    "categoria": "Sedie",
    "prezzo": 59.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/set-di-2-sedie-da-giardino-pieghevoli-in-acciaio-color-terracotta-1000-12-0-219227_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/set-di-2-sedie-da-giardino-pieghevoli-in-acciaio-color-terracotta-guinguette-219227.htm",
    "larghezza_cm": 41,
    "profondita_cm": 46,
    "descrizione": "Set di 2 sedie da giardino pieghevoli in acciaio color terracotta"
  },
  {
    "nome": "Sottobicchiere limone con perline gialle e verdi",
    "categoria": "Cucina",
    "prezzo": 4.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/sottobicchiere-limone-con-perline-gialle-e-verdi-1000-16-21-247128_2.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/sottobicchiere-limone-con-perline-gialle-e-verdi-247128.htm",
    "larghezza_cm": 11,
    "profondita_cm": 10,
    "descrizione": "Sottobicchiere limone con perline gialle e verdi"
  },
  {
    "nome": "Guinguette - Set di 2 sedie da giardino pieghevoli in acciaio verde kaki",
    "categoria": "Sedie",
    "prezzo": 59.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/set-di-2-sedie-da-giardino-pieghevoli-in-acciaio-verde-kaki-1000-11-40-219226_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/set-di-2-sedie-da-giardino-pieghevoli-in-acciaio-verde-kaki-guinguette-219226.htm",
    "larghezza_cm": 41,
    "profondita_cm": 46,
    "descrizione": "Set di 2 sedie da giardino pieghevoli in acciaio verde kaki"
  },
  {
    "nome": "Charlotte Business - Set di 2 sedie da bar beige alt.78 cm",
    "categoria": "Sedie",
    "prezzo": 249,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/set-di-2-sedie-da-bar-beige-alt-78-cm-1000-13-3-246003_2.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/set-di-2-sedie-da-bar-beige-alt-78-cm-charlotte-business-246003.htm",
    "larghezza_cm": 46.5,
    "profondita_cm": 49.5,
    "descrizione": "Set di 2 sedie da bar beige alt.78 cm"
  },
  {
    "nome": "Lampada in tessut beige con paralume in rafia",
    "categoria": "Lampade",
    "prezzo": 24.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/lampada-in-tessut-beige-con-paralume-in-rafia-1000-1-30-246399_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/lampada-in-tessut-beige-con-paralume-in-rafia-246399.htm",
    "larghezza_cm": 30,
    "profondita_cm": 20,
    "descrizione": "Lampada in tessut beige con paralume in rafia"
  },
  {
    "nome": "Guinguette - Set di 2 sedie pieghevoli da giardino in acciaio color argilla",
    "categoria": "Sedie",
    "prezzo": 59.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/set-di-2-sedie-pieghevoli-da-giardino-in-acciaio-color-argilla-1000-8-33-245828_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/set-di-2-sedie-pieghevoli-da-giardino-in-acciaio-color-argilla-guinguette-245828.htm",
    "larghezza_cm": 41,
    "profondita_cm": 46,
    "descrizione": "Set di 2 sedie pieghevoli da giardino in acciaio color argilla"
  },
  {
    "nome": "Lotto di 6 - Bicchiere in vetro intagliato trasparente",
    "categoria": "Cucina",
    "prezzo": 17.94,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/bicchiere-in-vetro-intagliato-trasparente-1000-9-10-219360_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/bicchiere-in-vetro-intagliato-trasparente-219360.htm",
    "larghezza_cm": 7.1,
    "profondita_cm": 7.1,
    "descrizione": "Bicchiere in vetro intagliato trasparente"
  },
  {
    "nome": "Charlotte Business - Set di 2 sedie da bar in acciaio cromato e tessuto bouclé verde kaki alt. 78 cm",
    "categoria": "Sedie",
    "prezzo": 249,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/set-di-2-sedie-da-bar-in-acciaio-cromato-e-tessuto-boucle-verde-kaki-alt-78-cm-1000-4-20-246963_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/set-di-2-sedie-da-bar-in-acciaio-cromato-e-tessuto-boucle-verde-kaki-alt-78-cm-charlotte-business-246963.htm",
    "larghezza_cm": 46.5,
    "profondita_cm": 49.5,
    "descrizione": "Set di 2 sedie da bar in acciaio cromato e tessuto bouclé verde kaki alt. 78 cm"
  },
  {
    "nome": "Set di 4 bicchieri in vetro trasparente",
    "categoria": "Cucina",
    "prezzo": 8.99,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/253235/set-di-4-bicchieri-in-vetro-trasparente.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/set-di-4-bicchieri-in-vetro-trasparente-253235.htm",
    "larghezza_cm": 40.7,
    "profondita_cm": 8.6,
    "descrizione": "Set di 4 bicchieri in vetro trasparente"
  },
  {
    "nome": "Pirofila in gres beige lung. 30 cm",
    "categoria": "Cucina",
    "prezzo": 19.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/pirofila-in-gres-beige-lung-30-cm-1000-12-38-248416_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/pirofila-in-gres-beige-lung-30-cm-248416.htm",
    "larghezza_cm": 30,
    "profondita_cm": 17,
    "descrizione": "Pirofila in gres beige lung. 30 cm"
  },
  {
    "nome": "Charlotte Business - Set di 2 sedie da bar marroni alt. 78 cm",
    "categoria": "Sedie",
    "prezzo": 249,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/set-di-2-sedie-da-bar-marroni-alt-78-cm-1000-14-4-246004_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/set-di-2-sedie-da-bar-marroni-alt-78-cm-charlotte-business-246004.htm",
    "larghezza_cm": 46.5,
    "profondita_cm": 49.5,
    "descrizione": "Set di 2 sedie da bar marroni alt. 78 cm"
  },
  {
    "nome": "Rosae - Seet di 2 sedie per isola da cucina in paglia di Vienna e acciaio argentato alt. 65 cm",
    "categoria": "Sedie",
    "prezzo": 100,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/seet-di-2-sedie-per-isola-da-cucina-in-paglia-di-vienna-e-acciaio-argentato-alt-65-cm-1000-3-11-234654_2.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/seet-di-2-sedie-per-isola-da-cucina-in-paglia-di-vienna-e-acciaio-argentato-alt-65-cm-rosae-234654.htm",
    "larghezza_cm": 45,
    "profondita_cm": 55,
    "descrizione": "Seet di 2 sedie per isola da cucina in paglia di Vienna e acciaio argentato alt. 65 cm"
  },
  {
    "nome": "Marignane - Set di 2 sedie da giardino in acciaio nero con cuscini in poliestere riciclato bianco sporco",
    "categoria": "Sedie",
    "prezzo": 199.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/set-di-2-sedie-da-giardino-in-acciaio-nero-con-cuscini-in-poliestere-riciclato-bianco-sporco-1000-1-12-245889_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/set-di-2-sedie-da-giardino-in-acciaio-nero-con-cuscini-in-poliestere-riciclato-bianco-sporco-marignane-245889.htm",
    "larghezza_cm": 52.5,
    "profondita_cm": 54,
    "descrizione": "Set di 2 sedie da giardino in acciaio nero con cuscini in poliestere riciclato bianco sporco"
  },
  {
    "nome": "Barattolo per riso in vetro trasparente e legno di acacia",
    "categoria": "Cucina",
    "prezzo": 7.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/barattolo-per-riso-in-vetro-trasparente-e-legno-di-acacia-1000-12-18-241344_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/barattolo-per-riso-in-vetro-trasparente-e-legno-di-acacia-241344.htm",
    "larghezza_cm": 10,
    "profondita_cm": 10,
    "descrizione": "Barattolo per riso in vetro trasparente e legno di acacia"
  },
  {
    "nome": "Lotto di 6 - Calice Spritz in vetro trasparente",
    "categoria": "Cucina",
    "prezzo": 23.94,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/253118/calice-spritz-in-vetro-trasparente.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/calice-spritz-in-vetro-trasparente-253118.htm",
    "larghezza_cm": 7.2,
    "profondita_cm": 7.2,
    "descrizione": "Calice Spritz in vetro trasparente"
  },
  {
    "nome": "Puravida - Fodera di protezione per sedia a sdraio nera",
    "categoria": "Sedie",
    "prezzo": 35.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/fodera-di-protezione-per-sedia-a-sdraio-nera-1000-0-12-229653_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/fodera-di-protezione-per-sedia-a-sdraio-nera-puravida-229653.htm",
    "larghezza_cm": 215,
    "profondita_cm": 85,
    "descrizione": "Fodera di protezione per sedia a sdraio nera"
  },
  {
    "nome": "Lidy - Set tavolo da giardino con 8 sedie in alluminio verde kaki e resina beige",
    "categoria": "Sedie",
    "prezzo": 1299,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/246044_0/set-tavolo-da-giardino-con-8-sedie-in-alluminio-verde-kaki-e-resina-beige.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/set-tavolo-da-giardino-con-8-sedie-in-alluminio-verde-kaki-e-resina-beige-lidy-246044.htm",
    "larghezza_cm": 234,
    "profondita_cm": 96,
    "descrizione": "Set tavolo da giardino con 8 sedie in alluminio verde kaki e resina beige"
  },
  {
    "nome": "Tenda con occhielli beige in poliestere riciclato, al pezzo 130x300 cm",
    "categoria": "Tessile",
    "prezzo": 99.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tenda-con-occhielli-beige-in-poliestere-riciclato-al-pezzo-130x300-cm-1000-2-4-235180_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tenda-con-occhielli-beige-in-poliestere-riciclato-al-pezzo-130x300-cm-235180.htm",
    "larghezza_cm": 140,
    "profondita_cm": 0.5,
    "descrizione": "Tenda con occhielli beige in poliestere riciclato, al pezzo 130x300 cm"
  },
  {
    "nome": "Set di 6 portauova in ceramica bianca con motivo floreale verde",
    "categoria": "Cucina",
    "prezzo": 12.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/set-di-6-portauova-in-ceramica-bianca-con-motivo-floreale-verde-1000-3-3-248832_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/set-di-6-portauova-in-ceramica-bianca-con-motivo-floreale-verde-248832.htm",
    "larghezza_cm": 4.7,
    "profondita_cm": 4.7,
    "descrizione": "Set di 6 portauova in ceramica bianca con motivo floreale verde"
  },
  {
    "nome": "Louki - Set tavolo da giardino estensibile in alluminio con 8 sedie effetto rattan e grigio antracite",
    "categoria": "Sedie",
    "prezzo": 1199,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/252243/set-tavolo-da-giardino-estensibile-in-alluminio-con-8-sedie-effetto-rattan-e-grigio-antracite.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/set-tavolo-da-giardino-estensibile-in-alluminio-con-8-sedie-effetto-rattan-e-grigio-antracite-louki-252243.htm",
    "larghezza_cm": 180,
    "profondita_cm": 100,
    "descrizione": "Set tavolo da giardino estensibile in alluminio con 8 sedie effetto rattan e grigio antracite"
  },
  {
    "nome": "Davis - Poltrona da scrivania marrone in tessuto rivestito effetto anticato",
    "categoria": "Poltrone",
    "prezzo": 179,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltrona-da-scrivania-marrone-in-tessuto-rivestito-effetto-anticato-1000-3-37-165923_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-da-scrivania-marrone-in-tessuto-rivestito-effetto-anticato-davis-165923.htm",
    "larghezza_cm": 58,
    "profondita_cm": 58,
    "descrizione": "Poltrona da scrivania marrone in tessuto rivestito effetto anticato"
  },
  {
    "nome": "Kanpur - Poltrona da pranzo da giardino in resina riciclata imitazione rattan e tessuto bianco",
    "categoria": "Poltrone",
    "prezzo": 169,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/poltrona-da-pranzo-da-giardino-in-resina-riciclata-imitazione-rattan-e-tessuto-bianco-1000-14-20-237861_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/poltrona-da-pranzo-da-giardino-in-resina-riciclata-imitazione-rattan-e-tessuto-bianco-kanpur-237861.htm",
    "larghezza_cm": 63,
    "profondita_cm": 64,
    "descrizione": "Poltrona da pranzo da giardino in resina riciclata imitazione rattan e tessuto bianco"
  },
  {
    "nome": "Tovaglietta in giunco di mare",
    "categoria": "Cucina",
    "prezzo": 6.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tovaglietta-in-giunco-di-mare-1000-3-11-247200_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tovaglietta-in-giunco-di-mare-247200.htm",
    "larghezza_cm": 45,
    "profondita_cm": 33,
    "descrizione": "Tovaglietta in giunco di mare"
  },
  {
    "nome": "Campana per alimenti in bambù",
    "categoria": "Cucina",
    "prezzo": 9.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/campana-per-alimenti-in-bambu-1000-3-23-211296_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/campana-per-alimenti-in-bambu-211296.htm",
    "larghezza_cm": 31,
    "profondita_cm": 31,
    "descrizione": "Campana per alimenti in bambù"
  },
  {
    "nome": "Roma - Divano trasformabile a 3/4 posti in tessuto beige effetto lino, materasso 12 cm",
    "categoria": "Divani",
    "prezzo": 1099,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/242213/divano-trasformabile-a-3-4-posti-in-tessuto-beige-effetto-lino-materasso-12-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-trasformabile-a-3-4-posti-in-tessuto-beige-effetto-lino-materasso-12-cm-roma-242213.htm",
    "larghezza_cm": 225,
    "profondita_cm": 99,
    "descrizione": "Divano trasformabile a 3/4 posti in tessuto beige effetto lino, materasso 12 cm"
  },
  {
    "nome": "Tenda in poliestere riciclato grigio carbone con occhielli, al pezzo, 140x300 cm",
    "categoria": "Tessile",
    "prezzo": 20,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tenda-in-poliestere-riciclato-grigio-carbone-con-occhielli-al-pezzo-140x300-cm-1000-9-35-235170_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tenda-in-poliestere-riciclato-grigio-carbone-con-occhielli-al-pezzo-140x300-cm-235170.htm",
    "larghezza_cm": 140,
    "profondita_cm": 0.5,
    "descrizione": "Tenda in poliestere riciclato grigio carbone con occhielli, al pezzo, 140x300 cm"
  },
  {
    "nome": "Tovaglietta rotonda verde Ø 38 cm",
    "categoria": "Cucina",
    "prezzo": 5.99,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/250884/tovaglietta-rotonda-verde-oe-38-cm.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tovaglietta-rotonda-verde-oe-38-cm-250884.htm",
    "larghezza_cm": 38,
    "profondita_cm": 38,
    "descrizione": "Tovaglietta rotonda verde Ø 38 cm"
  },
  {
    "nome": "Barcelone - Divano trasformabile a 3/4 posti in lino stropicciato beige, materasso 6 cm",
    "categoria": "Divani",
    "prezzo": 879.2,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-trasformabile-a-3-4-posti-in-lino-stropicciato-beige-materasso-6-cm-1000-13-28-242297_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-trasformabile-a-3-4-posti-in-lino-stropicciato-beige-materasso-6-cm-barcelone-242297.htm",
    "larghezza_cm": 207,
    "profondita_cm": 90,
    "descrizione": "Divano trasformabile a 3/4 posti in lino stropicciato beige, materasso 6 cm"
  },
  {
    "nome": "Chesterfield - Divano trasformabile 3 posti in pelle nera",
    "categoria": "Divani",
    "prezzo": 1999,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-trasformabile-3-posti-in-pelle-nera-1000-3-13-232852_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-trasformabile-3-posti-in-pelle-nera-chesterfield-232852.htm",
    "larghezza_cm": 6.5,
    "profondita_cm": 6.5,
    "descrizione": "Divano trasformabile 3 posti in pelle nera"
  },
  {
    "nome": "Lotto di 6 - Barattolo in vetro con coperchio rosso",
    "categoria": "Cucina",
    "prezzo": 17.94,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/barattolo-in-vetro-con-coperchio-rosso-1000-16-32-240702_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/barattolo-in-vetro-con-coperchio-rosso-240702.htm",
    "larghezza_cm": 6.5,
    "profondita_cm": 6.5,
    "descrizione": "Barattolo in vetro con coperchio rosso"
  },
  {
    "nome": "Livia - Divano trasformabile 2/3 posti in velluto a coste verde",
    "categoria": "Divani",
    "prezzo": 459,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/divano-trasformabile-2-3-posti-in-velluto-a-coste-verde-1000-8-15-243227_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/divano-trasformabile-2-3-posti-in-velluto-a-coste-verde-livia-243227.htm",
    "larghezza_cm": 210,
    "profondita_cm": 88,
    "descrizione": "Divano trasformabile 2/3 posti in velluto a coste verde"
  },
  {
    "nome": "Lotto di 6 - Calice in vetro trasparente",
    "categoria": "Cucina",
    "prezzo": 29.94,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/calice-in-vetro-trasparente-1000-0-30-248285_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/calice-in-vetro-trasparente-248285.htm",
    "larghezza_cm": 11.1,
    "profondita_cm": 11.1,
    "descrizione": "Calice in vetro trasparente"
  },
  {
    "nome": "Aubagne - Piano d'appoggio da cucina 2 ante e 4 cassetti in legno di pino riciclato effetto anticato",
    "categoria": "Cucina",
    "prezzo": 1399,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/piano-d-appoggio-da-cucina-2-ante-e-4-cassetti-in-legno-di-pino-riciclato-effetto-anticato-1000-0-22-202521_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/piano-d-appoggio-da-cucina-2-ante-e-4-cassetti-in-legno-di-pino-riciclato-effetto-anticato-aubagne-202521.htm",
    "larghezza_cm": 120,
    "profondita_cm": 75,
    "descrizione": "Piano d'appoggio da cucina 2 ante e 4 cassetti in legno di pino riciclato effetto anticato"
  },
  {
    "nome": "Melchior - Isola centrale in legno massello di mango e metallo grigio",
    "categoria": "Cucina",
    "prezzo": 1399,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/isola-centrale-in-legno-massello-di-mango-e-metallo-grigio-1000-14-17-187592_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/isola-centrale-in-legno-massello-di-mango-e-metallo-grigio-melchior-187592.htm",
    "larghezza_cm": 127,
    "profondita_cm": 82,
    "descrizione": "Isola centrale in legno massello di mango e metallo grigio"
  },
  {
    "nome": "Luberon - Piano d'appoggio in massello di legno di mango e ardesia L 95 cm",
    "categoria": "Cucina",
    "prezzo": 549,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/piano-d-appoggio-in-massello-di-legno-di-mango-e-ardesia-l-95-cm-1000-2-18-110349_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/piano-d-appoggio-in-massello-di-legno-di-mango-e-ardesia-l-95-cm-luberon-110349.htm",
    "larghezza_cm": 95,
    "profondita_cm": 46,
    "descrizione": "Piano d'appoggio in massello di legno di mango e ardesia L 95 cm"
  },
  {
    "nome": "Lampada a sospensione in vetro ambrato e metallo dorato",
    "categoria": "Lampade",
    "prezzo": 39.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/lampada-a-sospensione-in-vetro-ambrato-e-metallo-dorato-1000-8-22-239708_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/lampada-a-sospensione-in-vetro-ambrato-e-metallo-dorato-239708.htm",
    "larghezza_cm": 25,
    "profondita_cm": 25,
    "descrizione": "Lampada a sospensione in vetro ambrato e metallo dorato"
  },
  {
    "nome": "Lampada in ceramica striata grigio-blu con paralume ecrù",
    "categoria": "Lampade",
    "prezzo": 19.95,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/lampada-in-ceramica-striata-grigio-blu-con-paralume-ecru-1000-15-28-246889_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/lampada-in-ceramica-striata-grigio-blu-con-paralume-ecru-246889.htm",
    "larghezza_cm": 28,
    "profondita_cm": 28,
    "descrizione": "Lampada in ceramica striata grigio-blu con paralume ecrù"
  },
  {
    "nome": "Lampada in ceramica bianca con paralume in poliestere riciclato bianco sporco",
    "categoria": "Lampade",
    "prezzo": 19.99,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/lampada-in-ceramica-bianca-con-paralume-in-poliestere-riciclato-bianco-sporco-1000-7-37-246201_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/lampada-in-ceramica-bianca-con-paralume-in-poliestere-riciclato-bianco-sporco-246201.htm",
    "larghezza_cm": 16,
    "profondita_cm": 16,
    "descrizione": "Lampada in ceramica bianca con paralume in poliestere riciclato bianco sporco"
  },
  {
    "nome": "Lotto di 6 - Bicchiere in vetro trasparente con motivo di frutti rossi",
    "categoria": "Cucina",
    "prezzo": 15.54,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/253060/bicchiere-in-vetro-trasparente-con-motivo-di-frutti-rossi.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/bicchiere-in-vetro-trasparente-con-motivo-di-frutti-rossi-253060.htm",
    "larghezza_cm": 8,
    "profondita_cm": 8,
    "descrizione": "Bicchiere in vetro trasparente con motivo di frutti rossi"
  },
  {
    "nome": "Lampada a sospensione doppia in metallo argentato",
    "categoria": "Lampade",
    "prezzo": 229,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/lampada-a-sospensione-doppia-in-metallo-argentato-1000-7-29-249227_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/lampada-a-sospensione-doppia-in-metallo-argentato-249227.htm",
    "larghezza_cm": 68,
    "profondita_cm": 68,
    "descrizione": "Lampada a sospensione doppia in metallo argentato"
  },
  {
    "nome": "Tovaglietta in bambù a righe bicolore",
    "categoria": "Cucina",
    "prezzo": 2.45,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tovaglietta-in-bambu-a-righe-bicolore-1000-4-9-247116_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tovaglietta-in-bambu-a-righe-bicolore-247116.htm",
    "larghezza_cm": 45,
    "profondita_cm": 33,
    "descrizione": "Tovaglietta in bambù a righe bicolore"
  },
  {
    "nome": "Lampada a sospensione in metallo dorato con globi in vetro ambrato",
    "categoria": "Lampade",
    "prezzo": 179,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/lampada-a-sospensione-in-metallo-dorato-con-globi-in-vetro-ambrato-1000-10-29-235205_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/lampada-a-sospensione-in-metallo-dorato-con-globi-in-vetro-ambrato-235205.htm",
    "larghezza_cm": 90,
    "profondita_cm": 41,
    "descrizione": "Lampada a sospensione in metallo dorato con globi in vetro ambrato"
  },
  {
    "nome": "Lampada da terra in acciaio inossidabile grigio con 3 paralumi a globo trasparenti",
    "categoria": "Lampade",
    "prezzo": 299,
    "immagine_url": "https://medias.maisonsdumonde.com/images/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/252822/lampada-da-terra-in-acciaio-inossidabile-grigio-con-3-paralumi-a-globo-trasparenti.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/lampada-da-terra-in-acciaio-inossidabile-grigio-con-3-paralumi-a-globo-trasparenti-252822.htm",
    "larghezza_cm": 55,
    "profondita_cm": 28,
    "descrizione": "Lampada da terra in acciaio inossidabile grigio con 3 paralumi a globo trasparenti"
  },
  {
    "nome": "Lotto di 3 - Tovaglietta intessuta nera",
    "categoria": "Cucina",
    "prezzo": 3,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/tovaglietta-intessuta-nera-1000-8-1-237022_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/tovaglietta-intessuta-nera-237022.htm",
    "larghezza_cm": 47,
    "profondita_cm": 33,
    "descrizione": "Tovaglietta intessuta nera"
  },
  {
    "nome": "Augusta - Lampada in ceramica con decoro limoni e paralume in lino bordeaux",
    "categoria": "Lampade",
    "prezzo": 119,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/lampada-in-ceramica-con-decoro-limoni-e-paralume-in-lino-bordeaux-1000-2-5-249613_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/lampada-in-ceramica-con-decoro-limoni-e-paralume-in-lino-bordeaux-augusta-249613.htm",
    "larghezza_cm": 34,
    "profondita_cm": 34,
    "descrizione": "Lampada in ceramica con decoro limoni e paralume in lino bordeaux"
  },
  {
    "nome": "Lampada a sospensione conica in poliestere riciclato motivo leopardato",
    "categoria": "Lampade",
    "prezzo": 149,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/lampada-a-sospensione-conica-in-poliestere-riciclato-motivo-leopardato-1000-1-40-249238_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/lampada-a-sospensione-conica-in-poliestere-riciclato-motivo-leopardato-249238.htm",
    "larghezza_cm": 69,
    "profondita_cm": 69,
    "descrizione": "Lampada a sospensione conica in poliestere riciclato motivo leopardato"
  },
  {
    "nome": "Lampada in metallo dorato con paralume in cotone nero Ø51cm",
    "categoria": "Lampade",
    "prezzo": 179,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/lampada-in-metallo-dorato-con-paralume-in-cotone-nero-oe51cm-1000-16-17-226337_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/lampada-in-metallo-dorato-con-paralume-in-cotone-nero-oe51cm-226337.htm",
    "larghezza_cm": 51,
    "profondita_cm": 51,
    "descrizione": "Lampada in metallo dorato con paralume in cotone nero Ø51cm"
  },
  {
    "nome": "Paralume per lampada a sospensione con conchiglie bianco e beige",
    "categoria": "Lampade",
    "prezzo": 129.5,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/paralume-per-lampada-a-sospensione-con-conchiglie-bianco-e-beige-1000-8-12-239657_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/paralume-per-lampada-a-sospensione-con-conchiglie-bianco-e-beige-239657.htm",
    "larghezza_cm": 47,
    "profondita_cm": 47,
    "descrizione": "Paralume per lampada a sospensione con conchiglie bianco e beige"
  },
  {
    "nome": "Piantana in legno di saman con paralume in iuta alt. 165 cm",
    "categoria": "Lampade",
    "prezzo": 289,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/piantana-in-legno-di-saman-con-paralume-in-iuta-alt-165-cm-1000-16-1-240056_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/piantana-in-legno-di-saman-con-paralume-in-iuta-alt-165-cm-240056.htm",
    "larghezza_cm": 50,
    "profondita_cm": 50,
    "descrizione": "Piantana in legno di saman con paralume in iuta alt. 165 cm"
  },
  {
    "nome": "Piantana con 2 fascette in metallo nero opaco alt. 169cm",
    "categoria": "Lampade",
    "prezzo": 249,
    "immagine_url": "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_350/v1/img/piantana-con-2-fascette-in-metallo-nero-opaco-alt-169cm-1000-5-10-210873_1.jpg",
    "link": "https://www.maisonsdumonde.com/IT/it/p/piantana-con-2-fascette-in-metallo-nero-opaco-alt-169cm-210873.htm",
    "larghezza_cm": 97,
    "profondita_cm": 20,
    "descrizione": "Piantana con 2 fascette in metallo nero opaco alt. 169cm"
  }
];

