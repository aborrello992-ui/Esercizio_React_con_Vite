# Esercizio 02 - React con Vite

Questo progetto e stato creato con il builder ufficiale di Vite usando il template React.

L'obiettivo dell'esercizio e creare una semplice interfaccia React composta da:

- un titolo `h1` con una classe CSS;
- una `label` con una classe CSS;
- un `input` collegato alla `label` e con una classe CSS;
- stili personalizzati scritti nel file `src/index.css`.

## Tecnologie utilizzate

- React
- Vite
- JavaScript
- CSS

## Struttura principale

```txt
esercizio-02-vite-react/
├── index.html
├── package.json
├── src/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
└── vite.config.js
```

## File principali

### `src/main.jsx`

Questo file e il punto di ingresso dell'applicazione React.

Importa React, il file CSS principale e il componente `App`, poi monta l'applicazione dentro l'elemento HTML con id `root`.

### `src/App.jsx`

Questo file contiene il componente principale dell'applicazione.

Al suo interno sono presenti:

- un titolo con classe `main-title`;
- una label con classe `input-label`;
- un input con classe `text-input`.

La label e collegata all'input grazie a:

```jsx
htmlFor="student-name"
```

e:

```jsx
id="student-name"
```

In React si usa `htmlFor` al posto di `for`, perche `for` e una parola riservata di JavaScript.

### `src/index.css`

Questo file contiene gli stili CSS applicati tramite le classi assegnate nel componente React.

Sono stati personalizzati:

- il colore e la dimensione del titolo;
- lo stile della label;
- la grandezza, il bordo e il focus dell'input.

## Comandi disponibili

Per installare le dipendenze:

```bash
npm install
```

Per avviare il server di sviluppo:

```bash
npm run dev
```

Per creare la build finale del progetto:

```bash
npm run build
```

## Avvio del progetto

Dopo aver lanciato:

```bash
npm run dev
```

Vite mostrera nel terminale un indirizzo locale, ad esempio:

```txt
http://localhost:5173/
```

Aprendo quell'indirizzo nel browser sara possibile vedere l'applicazione React.
