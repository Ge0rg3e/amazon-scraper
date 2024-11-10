# Amazon Scraper

Amazon Scraper is a simple project that scrapes product pages or searches for products on Amazon. This project is built for educational purposes only.

## How to Use

### 1. Clone the Repository

First, clone the repository to your local machine using the following command:

```bash
git clone https://github.com/Ge0rg3e/amazon-scraper.git
```

### 2. Install Dependencies

Navigate to the project directory and install the necessary dependencies:

```bash
cd amazon-scraper
npm install
```

### 3. Start the Application

Once the dependencies are installed, you can start the server:

```bash
npm start
```

This will start the server on port 45600 (default). You can now make requests to the endpoints.

## Built With

-   TypeScript
-   Express.js
-   Puppeteer

## Endpoints

### 1. Product Details Endpoint

**Request**:

```
GET http://localhost:45600/product/:id
```

**Example Response**:

```json
{
	"id": "B0CLTBHXWQ",
	"title": "PlayStation®5 Konsole Digital-Edition (Slim)",
	"mainImage": "https://m.media-amazon.com/images/I/21ugbiWkkNL._SY300_SX300_QL70_ML2_.jpg",
	"price": "€448.89",
	"description": "Product Description          Play Like Never BeforePlayStation5 Digital-Edition1Die PS5-Konsole eröffnet völlig neue Gaming-Möglichkeiten, die du so nie erwartet hättest.Die PS5 Digital-Edition ist eine rein digitale Version der PS5-Konsole ohne Laufwerk. Melde dich bei deinem Konto für das PlayStation Network an und gehe zum PlayStation Store, um Spiele zu kaufen und herunterzuladen. 2Freue dich auf blitzschnelles Laden mit einer ultraschnellen SSD, eine realistischere Spielerfahrung durch haptisches Feedback, adaptive Trigger-Tasten3 und 3D-Audio3 sowie eine völlig neue Generation unglaublicher PlayStation-Spiele.Überwältigende GeschwindigkeitNutze die Leistung der speziell entwickelten CPU, GPU und SSD mit integriertem I/O und erlebe, wie diese PlayStation-Konsole die Gaming-Welt revolutioniert.Einzigartige SpieleLass dich von der unglaublichen Grafik in den Bann ziehen und erlebe die neuen Funktionen der PS5.Atemberaubende ImmersionEntdecke ein noch tieferes Spielerlebnis mit Unterstützung für haptisches Feedback, adaptive Trigger und 3D-Audio-Technologie. 3Vertikaler Standfuß separat erhältlich.1PS5 Digital-Edition (CFI-2000 Modellgruppe – Slim)2Konto für das PlayStation Network erforderlich. Es gelten die vollständigen Bedingungen – playstation.com/PSNTerms.33D-Audio über eingebaute TV-Lautsprecher oder analoge/USB-Stereo-Kopfhörer. Einrichtung und neuestes Systemsoftware-Update erforderlich.",
	"reviews": [
		{
			"profileName": "Florian",
			"content": "Einfach toll das Teil. Leise schnell und eine deutsche Verbesserung zur PS4 👍🏼"
		},
		{
			"profileName": "Mithrandir",
			"content": "Ich musste die erste ps5 slim zurück schicken, da dies ein sehr hohes Geräusch wären dem Spielen gemacht hat. Dieses Geräusch war sogar durch die Kopfhörer zu hören. Dadurch wurde mir echt der Spielspaß geraubt.Aufgrund dessen, habe ich dies zurück geschickt. Amazon war hierbei bei der Preis Erhöhung in der Zwischenzeit recht kulant.Die zweite ps5 slim hatte dieses Problem nicht. Einziges Problem hierbei ist, dass bei der ersten Bestellung der Controller viel besser war. Die Pfeiltaste fühlen sich etwas komisch an. Naja, damit kann ich immerhin leben, im Gegensatz zum pfeifen/fiepen.Im Großen und Ganzen ist jedoch das Preis leistungs Verhältnis recht gut. Ich habe etwas unter 400€ gezahlt.Wichtig: wenn ein komisches Geräusch wie in dem Video zu hören ist, einfach umtauschen"
		},
		{
			"profileName": "Tim",
			"content": "Alles sicher und im vollen Paket angekommen. Zudem läuft alles nach Funktion und einwandfrei"
		},
		{
			"profileName": "Ömer",
			"content": "seher gut"
		},
		{
			"profileName": "Robert O.",
			"content": "Ich habe die PS5 Digital Edition gekauft und bin sehr beeindruckt, wie viel kleiner sie im Vergleich zur Originalversion ist. Das schlankere Design macht sie nicht nur ästhetisch ansprechender, sondern sie fühlt sich auch leichter und portabler an, was für mich sehr wichtig ist.Die Leistung dieser Konsole ist einfach beeindruckend. Die Grafikqualität macht die meisten Spiele zu einem visuellen Erlebnis, das wirklich heraussticht. Ich habe bereits einige Titel gespielt, und die Detailgenauigkeit und die flüssige Darstellung sind fantastisch.Ein kleines Manko für mich ist, dass diese Version ohne das Disc-Laufwerk kommt. Ich hätte es bevorzugt, die Möglichkeit zu haben, physische Spiele zu nutzen. Allerdings ist es positiv, dass man das Laufwerk später nachkaufen und hinzufügen kann, falls man es sich anders überlegt.Die Konsole wird mit einem hervorragenden Controller geliefert, der perfekt in der Hand liegt und eine großartige Haptik bietet.Die Bedienung der PS5 ist extrem einfach. Man muss nur die Konsole auspacken, ein HDMI-Kabel anschließen, sie mit der Steckdose verbinden und schon kann der Spaß beginnen. Das Benutzerinterface ist intuitiv und benutzerfreundlich, sodass man schnell in die Spielewelt eintauchen kann.Insgesamt kann ich die PS5 Digital Edition jedem empfehlen, der auf der Suche nach einer leistungsstarken und gut gestalteten Konsole ist. Sie bietet ein fantastisches Spielerlebnis zu einem fairen Preis!"
		},
		{
			"profileName": "Franck Muller",
			"content": "Ich weis nicht von wo die Negativen Kommentare aber anscheinend gibt es verschiedene Modele bzw verschiedene Lüfter, jedoch bekommt man nicht die erste ps5 slim mehr somit hat man keine Lüfter Probleme mehr!Meine ps5 trotz games welche wirklich belasten wie Cod Fortnite God ect, wurde diese absolut nicht laut man hört die ps5 kaum !Auch nach stundenlangem zocken passiert da gar nicht, jedoch habe ich meine erst seit 2 Monaten ungefähr, ich empfehle es jedem der dennoch kein Risiko eingehen will die Zusatz Garantie von Amazon mit zu kaufen dann ist man zu 100% sicher auch wenn die Standart Garantie von PlayStation abläuft!!!( Controller hatte jedoch eine Macke, wurde jedoch von Amazon gelöst )"
		},
		{
			"profileName": "reader66",
			"content": "Habe die Playstation für meinen Sohn gekauft. Er ist begeistert vom Design. Ansonsten erfüllt sie alles, was von ihr erwartet wird und was in der Beschreibung stand. Lieferung war auch problemlos und schnell. Musste dafür einen Code am Handy vorzeigen, damit sie auch beim richtigen Empfänger ankommt. Also alles Top"
		}
	]
}
```

### 2. Product Search Endpoint

**Request**:

```
GET http://localhost:45600/search/:query
```

**Example Response**:

```json
[
	{
		"id": "B0DGHY5KG8",
		"title": "Apple iPhone 16 128GB: 5G Mobile Phone with Camera Control, A18 Chip and a Real Boost for Battery. Works with AirPods, Black",
		"image": "https://m.media-amazon.com/images/I/619HAuZ95QL._AC_UY218_.jpg",
		"price": "€867.00",
		"link": "https://amazon.de/-/en/Apple-iPhone-16-128GB-Battery/dp/B0DGHY5KG8/ref=sr_1_2?dib=eyJ2IjoiMSJ9.h0uAcC-LMQRA6urX_TeWvgkkKeD_GpUgjKZk1WaWSPFlAt93LWEp8dThPPYM5uflr7vsJvOLJUsYuUjapEbhgs2FwMSuUXGwLcjL6ufgAbUTcAwVzM-lFifHmrC9CL5nPhSh-PZofzBsWkMXt11OlLlAlJGwS4FLga2uXNZhpi3bBcKxIfZ8dwpX7-3yNwGSZ21oScRh7TQjD1xtnyflrQIs6-Sq7JLYt-TTltXMmr4.HIDyBz_Ie1gwUYzbwvt_X9tNTq9Xgl5OX6aIJEPOJZ8&dib_tag=se&keywords=iphone&qid=1731242385&sr=8-2"
	},
	{
		"id": "B0CHXFCYCR",
		"title": "Apple iPhone 15 (128GB) - Black",
		"image": "https://m.media-amazon.com/images/I/71ExGlUBcDL._AC_UL320_.jpg",
		"price": "€999.00",
		"link": "https://amazon.de/-/en/Apple-iPhone-15-128GB-Black/dp/B0CHXFCYCR/ref=sr_1_3?dib=eyJ2IjoiMSJ9.h0uAcC-LMQRA6urX_TeWvgkkKeD_GpUgjKZk1WaWSPFlAt93LWEp8dThPPYM5uflr7vsJvOLJUsYuUjapEbhgs2FwMSuUXGwLcjL6ufgAbUTcAwVzM-lFifHmrC9CL5nPhSh-PZofzBsWkMXt11OlLlAlJGwS4FLga2uXNZhpi3bBcKxIfZ8dwpX7-3yNwGSZ21oScRh7TQjD1xtnyflrQIs6-Sq7JLYt-TTltXMmr4.HIDyBz_Ie1gwUYzbwvt_X9tNTq9Xgl5OX6aIJEPOJZ8&dib_tag=se&keywords=iphone&qid=1731242385&sr=8-3"
	}
]
```
