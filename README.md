# Generátor historických faktů

Webová aplikace pro generování zajímavých historických faktů a událostí s využitím AI.

## Funkce

- Výběr kategorie události
- Výběr země
- Výběr časového rozpětí
- Generování faktů pomocí AI
- Zobrazení výsledku s obrázkem

## Technologie

- React.js
- TypeScript
- Material-UI
- OpenAI API (plánováno)

## Instalace

1. Naklonujte repozitář:
```bash
git clone [URL_REPOZITÁŘE]
cd historical-facts-generator
```

2. Nainstalujte závislosti:
```bash
npm install
```

3. Spusťte vývojový server:
```bash
npm start
```

Aplikace bude dostupná na adrese [http://localhost:3000](http://localhost:3000).

## Konfigurace

Pro plnou funkčnost aplikace je potřeba nastavit API klíč pro OpenAI (nebo jiný AI model). Vytvořte soubor `.env` v kořenovém adresáři projektu a přidejte následující proměnnou:

```
REACT_APP_OPENAI_API_KEY=váš_api_klíč
```

## Vývoj

Pro spuštění testů:
```bash
npm test
```

Pro vytvoření produkční verze:
```bash
npm run build
``` 