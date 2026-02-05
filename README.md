# EcoAxis Global Limited Website

This repository contains a deploy-ready multi-page corporate website for **EcoAxis Global Limited**, built for:

- Client acquisition
- Investor relations
- Strategic partnerships

## Business divisions covered

- Property Development & Real Estate
- Agriculture & Agribusiness
- Importation & Exportation of Agri-food Products

## Pages

- `index.html` — Homepage and division overview
- `about.html` — Company profile, mission, vision, and values
- `property.html` — Property development services and partnership focus
- `agriculture.html` — Farming, processing, and distribution operations
- `trade.html` — Import/export and logistics capabilities
- `contact.html` — Contact details, map embed, and functional inquiry form

## Tech and structure

- Pure HTML/CSS/JS for easy deployment on any static host
- Shared styles in `assets/css/styles.css`
- Shared interactions in `assets/js/main.js`

## Run locally

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000`.

## Contact form

The inquiry form posts to FormSubmit:

- Endpoint: `https://formsubmit.co/info@ecoaxisglobal.com`
- Replace with your own backend/API endpoint when needed.
