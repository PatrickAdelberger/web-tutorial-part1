# Web Turorial - Part 1
Dieses Tutorial gibt einen groben Überblick über die gundsätzlichen Komponenten der Web-Entwicklung: HTML, CSS, JavaScript

#### Ressourcen
- F1: [https://www.formula1.com](https://www.formula1.com)
- Hartlauer: [https://www.hartlauer.at/](https://www.hartlauer.at/)
- D3 Tutorial (JKU ICG): [https://github.com/JKU-ICG/d3tutorial?tab=readme-ov-file#html](https://github.com/JKU-ICG/d3tutorial?tab=readme-ov-file#html)
- MDN (Mozilla Developer Network) Web Docs: [https://developer.mozilla.org/de/](https://developer.mozilla.org/de/)
- W3Schools: [https://www.w3schools.com/](https://www.w3schools.com/)


## Entwicklungsumgebung

### Browser Developmetn Tools
Die Developer Tools bieten eine Vielzahl an Tools für die Webentwicklung.

Unter anderem stehen Ihnen zur Verfügung:
- Web Inspector
  - Eigenschaften
  - CSS-Style-Selektor
- Konsole
  - In-Place-Coding
  - console.log, console.error
- Debugger
  - (Consitional) Breakpoints
  - Callstack
  - Konsolenkontext
- Profiler: Profilieren des JS-Codes auf Engpässe
- Netzwerk: Überprüfung aller Requests/Responese der Website

Jeder gängige Webbrowser (Firefox, Safari, Edge, Internet Explorer usw.) verfügt über integrierte Entwicklertools.

#### Ressourcen
- [Mozilla Web-Docs: Was sind Entwicklertools des Browsers](https://developer.mozilla.org/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) 
- [Chrome Developer Tools](https://developer.chrome.com/docs/devtools?hl=de)
- [Firefox Developer Tools](https://firefox-source-docs.mozilla.org/devtools-user/)


### Lokaler WebServer
Die lokale Website kann auch durch öffnen der `.html` - Datei im Browser angezeigt werden (file:///).
Aus Sicherheitsgründen erlauben die meisten Browser das Laden zusätzlicher externer Files (z.B. `.json`) nicht. 

Für die Entwicklung ist daher ein lokaler WebServer notwendig. Es kann ein itegrierter Webserver der IDE verwendet werden. 


### VSCode (Visual Studio Code)
VSCode ist konstenlos und kann herunergeladen werden unter [https://code.visualstudio.com/](https://code.visualstudio.com/). Als Standard besitzt VSCode vordefinierte Shortcuts um schneller HTML-Elemente zu erstellen.

Bei der Verwendung des VSCode kann die [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) Erweiterung verwendet werde, dabei wird auch die Website automaisch neugeladen wenn es änderungen im Code gibt. 



#### Ressourcen
- [VSCode Erweiterungen](https://code.visualstudio.com/docs/configure/extensions/extension-marketplace)
- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
- [VSCode - HTML Shortcuts](https://dev.to/peta_s/html-shortcuts-in-vs-code-35nf)


## HTML (HyperText Markup Language)
### HTML-Element
In HTML wird das Markup durch Elemente dargestellt. Ein HTML-Element ist ein Teil des Inhaltes der durch zwei gleichnamige Tags umgeben ist. Zum Beispiel: 
```HTML
<p>Das ist ein HTML-Element</p>
```
HTML-Elemente haben Attribute, z.B:. `id`,`class`, and `style`. Das `id`-Attribute muss einzigartig sein im gesamten HTML-Dokument.

Einige Elemtnte sind selbst schließend, das heißt `<tag />` entspricht `<tag></tag>`
```HTML
<img src="logo.png" alt="Logo"/>
```

#### Genereller Aufbau eines HTML-Elements
![Aufbau HTML-Element](./images/readme/html_element_structure.png)
Quelle: [https://codetheweb.blog/assets/img/posts/html-syntax/tag-structure-2.png](https://codetheweb.blog/assets/img/posts/html-syntax/tag-structure-2.png)

#### Ressourcen
- [tech.io - HTML syntax for beginners](https://tech.io/playgrounds/8240/html-syntax-for-beginners)
- [MDN - Liste aller HTML-Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements)
- [MDN - Grundlegende HTML-Syntax](https://developer.mozilla.org/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax)

### HTML-Dokument
Ein HTML-Dokument besteht normalerweise aus einer Präambel und vier HTML-Tags.

Grundgerüst eines HTML-Dokuments:
- `<!DOCTYPE html>` - alle HTML-Dokumente müssen mit dieser Deklaration staretn. Diese Deklaration ist keine HTML-Tag sondern eine Information für den Browser damit dieser weiß um welchen Dokumenttypen es sich handelt.
- `<html>` - ist das Root-Element im sich alle anderen HTML-Elemente befinden. 
- `<head>` - diese Element beinhaltet die Metadaten. Metadaten sind Daten über das HTML-Dokument, diese werden nicht angezeigt.
- `<tile>` - definiert den Titel de HTML-Dokuments und ist in der Browsertitlebar bzw. im Browsertab ersichtlich.
- `<body>` - ist der Container für den Inhalt der Website.


HTML-Tags für die Metadaten:
- `<meta>` - grundsätzlich wird dier Tag verwendet für Character-Set, Beschreibung, Autor, Keywords, and Ansichtseinstellungen
- `<link>` - definiert die Beziehung zwischen dem aktuelln HTML-Dokument und externen REssourcen 
- `<style>` - wird verwendet um Styleinformation (CSS) für das HTML-Dokument zu definieren
- `<script>` - damit wird clientseitiger Code (JavaScript) eingebettet. Diese Tag beinhaltet den JS-Code selbst oder es zeigt auf externes Skript. 

Beispiel für ein typisches HTML-Dokument:
```HTML
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="description" content="Web Tutorial">
        <meta name="keywords" content="HTML, CSS, JavaScript">
        <meta name="author" content="John Doe">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="style.css" />
        <script src="script.js"></script>
        <title>My HTML-Document</title>

        <style>
            * {
                font-size: 100px;
            }
        </style>

        <script>
            console.log("my first log message");
        </script>
    </head>
    <body>
        <h1>My Heading</h1>
    </body>
</html>
```

#### Ressourcen
- [web.dev- Dokumentstruktur](https://web.dev/learn/html/document-structure?hl=de)
- [MDN - Metadaten von Websiten](https://developer.mozilla.org/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata)
- [MDN - \<meta> tag](https://developer.mozilla.org/de/docs/Web/HTML/Reference/Elements/meta)
- [MDN - Liste aller HTML-Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements)


### DOM (Document Object Model)
Das Markup-Dokument ist eine Baumstruktur: Es hat eine Wurzel, das HTML-Element, und Elemente können untergeordnete Elemente haben, die wiederum Elemente enthalten.

![HTML DOM-Tree](./images/readme/html_dom_tree.png)

Quelle: [https://terminallearning.com/devHtml/htmlDom.html](https://terminallearning.com/devHtml/htmlDom.html)


Während HTML eine textuelle Darstellung eines Markup-Dokuments darstellt, ist das DOM (Document Object Model) dessen Programmierschnittstelle. DOM-Elemente enthalten weitere interne Eigenschaften und können über JavaScript aufgerufen und geändert werden.

#### Ressourcen
- [JavaScript HTML DOM](https://www.w3schools.com/js/js_htmldom.asp)
- [MDN - Document Object Model (DOM)](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)


## CSS (Cascading Style Sheets)
Cascading Style Sheets (CSS) ist eine Stylesheet-Sprache, die verwendet wird, um die Präsentation eines Dokuments zu beschreiben, das in HTML oder XML (einschließlich XML-Dialekte wie SVG, MathML oder XHTML) geschrieben wurde. CSS beschreibt, wie Elemente auf dem Bildschirm, auf Papier, in Sprache oder in anderen Medien dargestellt werden sollen.

Ein Stylesheet besteht üblicherweise aus einer Liste von CSS-Regeln, die in  `<style>`-Elemente im HTML-Header (`<head>`) eingefügt werden. Es kann auch ein externes `.css`-File referenziert werden mit dem `<link>`-Element.

Generell besteht eine CSS-Regel immer aus:
- Selektor (Selector)
- Deklaration (Declaration)
  - Eigenschaft (Property)
  - Wert (Value) / Keyword

Struktur einer CSS Regel:
![CSS Ruleset](./images/readme/css_ruleset.png)

Quelle: [https://css-tricks.com/css-ruleset-terminology/](https://css-tricks.com/css-ruleset-terminology/)


#### Ressourcen
- [MDN - CSS (Cascading Style Sheets)](https://developer.mozilla.org/de/docs/Web/CSS)
- [W3school - CSS Tutorial](https://www.w3schools.com/css/default.asp)


### Selektoren
Das Modul CSS-Selektoren definiert die Muster zur Auswahl von Elementen, auf die dann eine Reihe von CSS-Regeln zusammen mit deren Spezifität angewendet werden.

In CSS sind Selektoren Muster, die verwendet werden, um die Elemente zu matchen oder auszuwählen, die Sie gestalten möchten. Selektoren werden auch in JavaScript verwendet, um die Auswahl der DOM-Knoten zu ermöglichen, die als `NodeList` zurückgegeben werden.

Selektoren, unabhängig davon, ob sie in CSS oder JavaScript verwendet werden, ermöglichen das Ansprechen von HTML-Elementen basierend auf ihrem Typ, ihren Attributen, aktuellen Zuständen und sogar Positionen im DOM. 

Ein Beispiel mit verschiedenen Selektoren:
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CSS Example</title>
  <style>
    /* select all `div` elements */
    div {
      border: 1px solid blue;
      margin: 10px;
    }

    /* select elements having class `header` */
    .header {
      background: steelblue;
      color: white;
    }

    /* select the element with the id `main` */
    #main {
      border: 1px solid red; /* Overrides the rules from `div`, because `#main` is more specific */
    }

    /* select all `div` with class `header` */
    div.header {
      background: green; /* Overrides the rules from `.header`, because `div.header` is more specific */
    }

    /* select all descendent `p` within a `div` */
    div p {
      font-size: 200%;
    }

    /* matches when the mouse hovers a `div` */
    div:hover {
      background-color: orange;
    }
  </style>
</head>
<body>
  <div class="header">
    D3 Test
  </div>
  <div id="main">
    <p class="header">Lorem Impsum Header</p>
    <p>Lorem Impsum</p>
  </div>
</body>
</html>
```


CSS Selektor - Cheat Sheet:
![CSS Selektoren - Cheat Sheet](./images/readme/CSS_cheat_sheat_WDS.png)
Quelle [https://www.aiophotoz.com/the-ultimate-css-selectors-cheat-sheet-you-must-know-images](https://www.aiophotoz.com/the-ultimate-css-selectors-cheat-sheet-you-must-know-images-and/dGhlLXVsdGltYXRlLWNzcy1zZWxlY3RvcnMtY9hlYXQtc9hlZXQteW-1LW11c3Qta95vd3x8YWlvcGhvdG-6LmNvbXx8aHR0cHM6Ly-zdGF0aWMucGxhdHppLmNvbS-tZWRpYS-1c9VyX3VwbG-hZC-BcnRib9FyZCAxLTU0YmFlMzkzLTFkODctNGYwZC1hYTZjLWI3ZmMyZmQzZDczZi5qcGc.gif.html)

#### Pseudoklassen
Eine CSS Pseudoklasse ist ein Schlüsselwort, das einem Selektor hinzugefügt wird, um einen bestimmten Zustand der ausgewählten Elemente zu stylen. Zum Beispiel kann die Pseudoklasse `:hover` verwendet werden, um einen Button auszuwählen, wenn der Zeiger eines Nutzers über den Button schwebt, und dieser ausgewählte Button kann dann gestaltet werden.

Eine Pseudoklasse besteht aus einem Doppelpunkt `(:)`, gefolgt vom Namen der Pseudoklasse (z.B. `:hover`).

```CSS
/* Any button over which the user's pointer is hovering */
button:hover {
  color: blue;
}
```

#### Pseudo-Element
Ein CSS Pseudo-Element ist ein Schlüsselwort, das zu einem Selektor hinzugefügt wird und es Ihnen ermöglicht, einen bestimmten Teil der ausgewählten Elemente zu stylen.

Doppelte Doppelpunkte (`::`) werden für Pseudo-Elemente verwendet. Dies unterscheidet Pseudo-Elemente von Pseudo-Klassen, die in ihrer Notation einen einfachen Doppelpunkt (`:`) verwenden. Beachten Sie, dass Browser die Syntax mit einfachem Doppelpunkt für die ursprünglichen vier Pseudo-Elemente unterstützen: `::before`, `::after`, `::first-line` und `::first-letter`.

```CSS
/* The first line of every <p> element. */
p::first-line {
  color: blue;
  text-transform: uppercase;
}
```

#### Spezifität
Spezifität ist ein Algorithmus, der das angewendete Gewicht für eine gegebene CSS-Deklaration berechnet. Das Gewicht wird durch die Anzahl der Selektoren in jeder Gewichtungskategorie im Selektor bestimmt, der mit dem Element (oder Pseudo-Element) übereinstimmt. Wenn es zwei oder mehr Deklarationen gibt, die unterschiedliche Eigenschaftswerte für dasselbe Element bereitstellen, wird der Deklarationswert im Stilblock angewendet, der den übereinstimmenden Selektor mit dem größten algorithmischen Gewicht hat.
Der Spezifitätsalgorithmus ist im Grunde ein Drei-Spalten-Wert aus drei Kategorien oder Gewichten - ID, CLASS und TYPE - entsprechend den drei Arten von Selektoren

Es gibt 3 Selektor-Gewichtungskategorien, hier in abnehmernder Spezifität:
- ID-Spalte, z.B. `#myID`
- CLASS-Spalte, z.B. `.myClass`
- TYPE-Spalte, z.B. `p`



#### Ressourcen
- [MDN - CSS Selektoren](https://developer.mozilla.org/de/docs/Web/CSS/CSS_selectors)
- [MDN - CSS Selector-Struktur](https://developer.mozilla.org/de/docs/Web/CSS/CSS_selectors/Selector_structure#simple_selector)
- [CSS-Tricks - CSS Selectos](https://css-tricks.com/css-selectors/)
- [W3schools - CSS Selectors](https://www.w3schools.com/cssref/css_selectors.php)
- [freecodecamp.org - CSS Selectors-Cheat Sheet](https://www.freecodecamp.org/news/css-selectors-cheat-sheet-for-beginners/)
- [CSS Selekor - Cheat Sheet (Bild)]((https://www.aiophotoz.com/the-ultimate-css-selectors-cheat-sheet-you-must-know-images-and/dGhlLXVsdGltYXRlLWNzcy1zZWxlY3RvcnMtY9hlYXQtc9hlZXQteW-1LW11c3Qta95vd3x8YWlvcGhvdG-6LmNvbXx8aHR0cHM6Ly-zdGF0aWMucGxhdHppLmNvbS-tZWRpYS-1c9VyX3VwbG-hZC-BcnRib9FyZCAxLTU0YmFlMzkzLTFkODctNGYwZC1hYTZjLWI3ZmMyZmQzZDczZi5qcGc.gif.html))
- [MDN - Pseudoklassen](https://developer.mozilla.org/de/docs/Web/CSS/Pseudo-classes)
- [MDN - Pseudo-Elemente](https://developer.mozilla.org/de/docs/Web/CSS/Pseudo-elements)
- [MDN - Spezifität](https://developer.mozilla.org/de/docs/Web/CSS/CSS_cascade/Specificity)

### Stylings


### Layout

#### Grid-Layout
#### Flex-Layout

## JavaScript
### Verwednung in HTML; Wo und Wie?
### var, let, const
### Selektion von HTML - Elementen
### Console.log
### Equals
### Async / Promises


