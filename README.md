Jag har skapat en webshop som hämtar produkter från ett dummyAPI man kan söka och filtrera produkter. Jag har lagt mer energi på funktionerna där av är ux/ui inte något specielt.
Man kan även lägga varorna i kudvagnen och göra en köp.

Installation

1. Klona projektet:
   git clone (https://github.com/Zhesla/react-webshop-2026.git)

2. Navigera till projektmappen:
   cd hemsida

3. Installera :
   npm install

4. Starta utvecklingsservern:
   npm run dev

5. Öppna webbläsaren på:
   http://localhost:5173

Debounce
Jag har skapat en hooks folder (src/hooks/useDebounce.js) där jag har min debounce. Hooken tar emot ett värde och en fördröjning i millisekunder.
När användaren skriver i sökfältet väntar den 300ms innan API-anropet skickas detta minskar antalet anrop och förbättrar prestandan.
Används i SearchUI.jsx const debouncedSearch = useDebounce(searchTerm, 300);

Felhantering med try/catch
Alla API-anrop är wrappade i try/catch. Om ett anrop misslyckas fångas felet upp och loggas i konsolen utan att applikationen kraschar.
På produktsidan visas ett felmeddelande i gränssnittet om produkten inte kan hämtas.
