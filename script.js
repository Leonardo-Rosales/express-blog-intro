console.log('express-blog-intro');

const express = require('express')
const app = express()
const port = 3000

const posts = [
    {
        "titolo": "Il ciambellone soffice perfetto",
        "contenuto": "Scopri la ricetta tradizionale per un ciambellone soffice e profumato, perfetto per la colazione o la merenda.",
        "immagine": "imgs/ciambellone.jpeg",
        "tags": ["dolci", "colazione", "ciambellone", "ricetta"]
    },
    {
        "titolo": "Cracker di barbabietola fatti in casa",
        "contenuto": "Un'alternativa colorata e salutare ai classici cracker: ecco come prepararli con la barbabietola.",
        "immagine": "imgs/cracker_barbabietola.jpeg",
        "tags": ["barbabietola", "snack", "salutare", "ricetta"]
    },
    {
        "titolo": "Pane fritto dolce: il sapore della tradizione",
        "contenuto": "Una ricetta semplice e deliziosa che unisce il gusto del pane fritto alla dolcezza dello zucchero.",
        "immagine": "imgs/pane_fritto_dolce.jpeg",
        "tags": ["dolci", "tradizione", "pane fritto", "ricetta"]
    },
    {
        "titolo": "Pasta alla barbabietola: un primo piatto speciale",
        "contenuto": "Rendi il tuo piatto di pasta unico e scenografico con questa ricetta a base di barbabietola.",
        "immagine": "imgs/pasta_barbabietola.jpeg",
        "tags": ["barbabietola", "pasta", "primi piatti", "ricetta"]
    },
    {
        "titolo": "Torta paesana: un dolce della tradizione lombarda",
        "contenuto": "La torta paesana, anche conosciuta come torta di pane, è un dolce semplice e ricco di sapore, perfetto per riutilizzare il pane raffermo.",
        "immagine": "imgs/torta_paesana.jpeg",
        "tags": ["dolci", "tradizione", "lombardia", "torta di pane"]
    }
]

app.use(express.static('public'))

app.get('/', (req, res) => {
	res.send('<h1>express-blog-intro</h1>');
})

app.get('/bacheca', (req, res) => {
	res.json({
        conteggio: posts.length,
        posts: posts
    })
})

app.listen(port, () => {
	console.log(`Server listening on port: ${port}`)
})