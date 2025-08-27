Currency Converter Web App – Dockerized with Nginx 🚀

A sleek, responsive Currency Converter web app built with HTML, CSS, and Vanilla JavaScript, now Dockerized for easy deployment and portability.
Fetches live exchange rates using the ExchangeRate API for real-time conversions.

✨ Features

💹 Real-time currency conversion using ExchangeRate API

🖥️ Responsive UI for desktop and mobile devices

🐳 Dockerized for isolation, portability, and easy deployment

🌐 Served via NGINX to simulate production-ready static web hosting

🔗 Ready for deployment on DockerHub or cloud platforms like AWS, Railway, or Netlify


🛠️ Technologies Used

| Layer            | Tools / Tech          |
| ---------------- | --------------------- |
| Frontend         | HTML, CSS, JavaScript |
| Containerization | Docker                |
| Web Server       | NGINX                 |
| API              | ExchangeRate API      |


🚀 Setup Instructions

--Clone the repository

git clone https://github.com/syednasir9/currency-converter.git
cd currency-converter


--Build the Docker image

docker build -t yourusername/currency-converter:latest .


--Run the container

docker run -d -p 8080:80 yourusername/currency-converter:latest


--Access the app
Open your browser at: http://localhost:8080

📸 Screenshots

-Dockerfile – Shows container configuration

-Docker Build Output – Successful image build

-Container Running – App running in isolation

-DockerHub Image – Publicly available Docker image

-Web App Running – Fully functional currency converter

🌐 DockerHub Link

View Image on DockerHub:- https://hub.docker.com/r/syednasir9/currency-converter/tags

📝 Notes & Highlights

Why Docker?
--Containerizing the app ensures consistency across environments and highlights practical containerization skills.

Nginx as Web Server:
--Demonstrates professional handling of static content in a production-ready environment.

Portable & Deployable:
--The Docker image can be deployed seamlessly to cloud platforms like AWS ECS, Railway, or Azure Containers.

Reproducibility:
--Any developer can clone, build, and run this project in minutes — a key skill in DevOps and Cloud workflows.

Skill Showcase:
--Highlights frontend expertise (HTML/CSS/JS) alongside DevOps fundamentals (Docker, containerization, DockerHub).

Professional Presentation:
--Detailed documentation and screenshots make this project recruiter-friendly for GitHub and LinkedIn showcases.

🙌 Acknowledgements

Docker

NGINX

ExchangeRate API

Built with 💻 + 🐳 to combine frontend skills with real-world DevOps practices.
