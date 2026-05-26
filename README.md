# FRAM Sustainable Food Delivery Webshop

## Project Description

FRAM is a frontend web project created for the final project assignment in the Frontend Essentials course. The website is based on the provided Figma design for a sustainable food delivery webshop in Norway.

The concept is a service that connects customers with fresh produce from local farms. The website focuses on sustainability, seasonal produce, reusable packaging, and simple access to information about products and partner farms.

The project includes three main pages:

- Landing page
- Products page
- Chat page

The website is built with HTML, CSS, and JavaScript and runs entirely in the browser.

---

## Features

The project includes:

- Responsive layout for desktop, tablet, and mobile
- Semantic HTML structure
- Navigation menu
- Product listing page
- Add-to-basket button interaction
- Newsletter form with JavaScript validation
- Chat page with simulated assistant responses and loading indicator
- Interactive map integration using Leaflet and OpenStreetMap
- Basic accessibility considerations such as labels, alt text, keyboard focus, and ARIA attributes

---

## Pages

### Landing Page

The landing page introduces the FRAM service and includes:

- Hero section
- Seasonal selection section
- Chat promotion section
- “How it works” explanation
- Popular produce section
- Newsletter signup form

### Products Page

The products page displays available produce and includes:

- Product cards
- Add-to-basket interaction
- Interactive map showing a partner farm location
- Newsletter signup form

### Chat Page

The chat page allows users to ask questions about produce, farms, delivery, and sustainability. The chat currently uses simulated responses to demonstrate the interface, loading state, and message interaction.

---

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Git and GitHub
- Leaflet.js
- OpenStreetMap
- Google Fonts

---

## External API / Integration

This project uses Leaflet.js together with OpenStreetMap to display an interactive map on the products page.

The map allows users to view a partner farm location and interact with the map by zooming, dragging, and clicking the marker.

OpenStreetMap was chosen because it is openly available, does not require an API key for this project, and fits naturally with the webshop concept by showing local farm connections.

---

## Accessibility

Accessibility was considered throughout the project by including:

- Semantic HTML elements such as `header`, `nav`, `main`, `section`, `article`, and `footer`
- Descriptive alt text for images
- Labels for form inputs
- ARIA labels where needed
- Visible focus states for keyboard users
- Responsive layout for different screen sizes
- Clear buttons and form feedback messages

The goal was to make the site clear and usable for different users, including people using keyboard navigation or assistive technologies.

---

## How to Run the Project Locally

1. Clone the repository:

```bash
git clone YOUR_REPOSITORY_URL_HERE