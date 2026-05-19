# Esercizio 02 - React con Vite

Questo progetto e stato creato con il builder ufficiale di Vite usando il template React.

L'obiettivo dell'esercizio e creare una semplice interfaccia React e aggiornarla con alcuni componenti riutilizzabili.

La prima versione dell'esercizio conteneva:

- un titolo `h1` con una classe CSS;
- una `label` con una classe CSS;
- un `input` collegato alla `label` e con una classe CSS;
- stili personalizzati scritti nel file `src/index.css`.

La versione aggiornata aggiunge:

- un componente `Navbar` con due link;
- una navbar fissata in alto tramite CSS;
- un componente `Header` con un tag `header` alto quanto tutta la pagina;
- un titolo `h1` centrato dentro l'header;
- un componente `List` che riceve un array di nomi tramite props;
- una lista generata con un elemento `li` per ogni nome presente nell'array.

La nuova implementazione aggiunge inoltre:

- un componente `Counter` con un valore numerico visibile;
- due bottoni per incrementare e decrementare il contatore;
- un componente `Form` con due campi di input, uno per il nome e uno per la mail;
- gestione dell'evento `onSubmit`;
- uso di `e.preventDefault()` per impedire il refresh della pagina;
- una card che mostra i dati inviati tramite il form.

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
│   ├── components/
│   │   ├── Counter.jsx
│   │   ├── Form.jsx
│   │   ├── Header.jsx
│   │   ├── List.jsx
│   │   └── Navbar.jsx
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

- una label con classe `input-label`;
- un input con classe `text-input`.
- un array di nomi chiamato `students`;
- i componenti `Navbar`, `Header`, `List`, `Counter` e `Form`.

La label e collegata all'input grazie a:

```jsx
htmlFor="student-name"
```

e:

```jsx
id="student-name"
```

In React si usa `htmlFor` al posto di `for`, perche `for` e una parola riservata di JavaScript.

Il componente `List` riceve l'array di nomi in questo modo:

```jsx
<List names={students} />
```

Questo passaggio si chiama `props`: il componente padre passa un dato al componente figlio.

### `src/components/Navbar.jsx`

Questo componente contiene una navbar con due link.

I link non hanno un `href`, perche la traccia specifica che non e necessario definirlo.

### `src/components/Header.jsx`

Questo componente contiene il tag semantico `header`.

L'header e alto quanto tutta la pagina grazie alla regola CSS:

```css
min-height: 100vh;
```

Al centro dell'header viene mostrato un titolo `h1`.

### `src/components/List.jsx`

Questo componente riceve una props chiamata `names`.

La props contiene un array di nomi. Il componente usa il metodo `map()` per creare un elemento `li` per ogni nome:

```jsx
{names.map((name) => (
  <li key={name}>{name}</li>
))}
```

In React, quando si crea una lista, ogni elemento deve avere una prop `key`.

### `src/components/Counter.jsx`

Questo componente mostra un contatore.

Il valore del contatore viene salvato in uno stato React tramite `useState`.

Sono presenti due bottoni:

- `Incrementa`, che aumenta il valore di 1;
- `Decrementa`, che diminuisce il valore di 1.

### `src/components/Form.jsx`

Questo componente mostra un form con due campi:

- nome;
- mail.

I valori degli input vengono salvati in due stati React:

```jsx
const [name, setName] = useState('')
const [email, setEmail] = useState('')
```

Il form usa l'evento `onSubmit`:

```jsx
<form onSubmit={handleSubmit}>
```

Dentro la funzione `handleSubmit` viene usato:

```jsx
e.preventDefault()
```

Questo metodo impedisce al browser di ricaricare la pagina quando il form viene inviato.

Dopo il submit viene mostrata una card con il nome e la mail inseriti.

### `src/index.css`

Questo file contiene gli stili CSS applicati tramite le classi assegnate nel componente React.

Sono stati personalizzati:

- la navbar fissata in alto;
- l'header alto quanto tutta la pagina;
- il titolo centrato nell'header;
- lo stile della label;
- la grandezza, il bordo e il focus dell'input.
- lo stile della lista di nomi.
- lo stile del contatore;
- lo stile del form;
- lo stile della card con i dati inviati.

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
