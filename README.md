## 🗺️ Simple Countries API
This is a simple API for countries implemented in node.js with the help of express and express-rate-limit.

## Setup
> [!NOTE]  
> Ensure you have Node.js, npm, and git installed on your machine.

**Clone the repository**

```bash
git clone https://github.com/saayxee/countries-api
```

**Change directory**

```bash
cd countries-api
```

**Install dependencies**  

```bash
npm install express express-rate-limit
```

## Usage
**Serve the API**
```bash
node --watch index.js
```
Now go to localhost:3000/[ENDPOINT]

## Endpoints
>[!IMPORTANT]
> If a continent contains a " " in its name (such as "North America"), a hyphen ("-") will be used instead.  
- `/`: Get no data but a confirmation message. 
- `/countries`: Get all countries' names and country codes.
- `/countries/[CONTINENT]`: Get names and country codes of all countries within a specific continent (Antarctica excluded).

## Contribution/Bugs
> If you experience any bugs regarding the API, please open an issue and document it in detail so I can fix it as needed.
If you want to contribute a feature or fix a bug yourself, kindly act per the following instructions/guide:
- Fork the repository.
- Create a new branch for your changes.
- Implement your changes.
- Create a PR.
- Wait for the PR to get approved.

## Developer
Made by Aayan Zaidi ✌️

