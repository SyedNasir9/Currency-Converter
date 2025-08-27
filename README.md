A simple Currency Converter web app built with HTML, CSS, and Vanilla JavaScript,
now containerized using Docker with Nginx for reliable, reproducible deployments.

---

## Features
- Real-time currency conversion using ExchangeRate API
- Responsive UI for desktop and mobile devices
- Dockerized for portability, isolation, and easy deployment

---

## Technologies Used
- HTML, CSS, JavaScript
- Docker
- Nginx
- ExchangeRate API

---

## Setup Instructions

**Clone the repository:**

git clone https://github.com/yourusername/currency-converter.git
cd currency-converter
Build the Docker image:



docker build -t yourusername/currency-converter:latest .
Run the container:



docker run -d -p 8080:80 yourusername/currency-converter:latest
Access the app:
Open your browser at http://localhost:8080


---Screenshots---
Dockerfile,
Docker Build Output,
Container Running,
DockerHub Image,
Web App Running


DockerHub Link
https://hub.docker.com/r/syednasir9/currency-converter/tags


Notes
Why Docker: Containerizing the app ensures it runs consistently across any environment without dependency conflicts. This showcases your practical knowledge of containerization.

Nginx as Web Server: Using Nginx demonstrates the ability to serve static content professionally in a production-like environment.

Portable Deployment: The Docker image can be easily deployed to cloud platforms (AWS ECS, Railway, Azure Container Instances) without modification.

Reproducibility: Any developer can clone, build, and run this project in minutes — a key skill for DevOps and Cloud workflows.

Skill Showcase: This project highlights frontend web skills (HTML/CSS/JS) alongside basic DevOps competencies (Docker, containerization, DockerHub deployment).

Professional Presentation: Screenshots and documented steps make this project easy to showcase on GitHub and LinkedIn for recruiters or hiring managers.
