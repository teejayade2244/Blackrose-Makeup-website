Project Name: Blackrose Makeup Artistry Website
A modern frontend application built with React.js, containerized with Docker, and deployed using CI/CD best practices.

📌 Table of Contents
- [🌟 Features](#-features)
- [🔧 Installation](#-installation)
- [📂 Project Structure](#-project-structure)
- [🚀 Running the Project](#-running-the-project)
- [🐳 Docker Setup](#-docker-setup)
- [📦 CI/CD Pipeline](#-cicd-pipeline)
- [🚀 Deployment with Helm & Kubernetes](#-deployment-with-helm--kubernetes)
- [📜 License](#-license)
- [👨‍💻 Author](#-author)
  
## 🌟 Features
✅ Modern UI with **React.js and Vite**  
✅ Fully responsive design  
✅ Automated CI/CD using **Jenkins**  
✅ Containerized using **Docker**  
✅ Kubernetes deployment with **Helm**  
✅ Security scanning with **Trivy & SonarQube**  
✅ Deployed to **AWS**  

## 🔧 Installation

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

### **2️⃣ Install Dependencies**
```sh
npm install  # or yarn install
```

## 📂 Project Structure
```
/your-repo
│── /public          # Static assets
│── /src             # Source code
│── /tests           # Test cases
│── .github/workflows # CI/CD pipeline
│── Jenkinsfile      # Jenkins pipeline configuration
│── Dockerfile       # Docker container setup
│── helm-chart/      # Helm configuration for Kubernetes
│── README.md        # Documentation
│── package.json     # Project metadata
```

## 🐳 Docker Setup
To containerize the application:
```sh
docker build -t my-frontend-app .
```
## To test the if the application is succesfully running in the container
```sh
docker run -p 3000:3000 my-frontend-app
```
Now, open **http://localhost:3000**.

## 📦 CI/CD Pipeline
### **Proposed CI/CD Pipeline strategy with PR Integration**
### **1️⃣ Developer Pushes Code → CI Pipeline Runs**
- Checkout Code – Fetch the latest feature branch code.
- Dependency Installation – Install required packages.
- Dependencies vulneralbility security Scans – OWASP Dependency Check.
- Unit Tests – Run test suites.
- Code coverage
- Static Code Analysis – SonarQube.
- Build Artifacts – Docker image build.
- If CI passes, a PR will be raised.

### **2️⃣ Pull Request Raised**
- PR is reviewed and approved.
- Upon merging into `main`, it triggers the CD pipeline.

### **3️⃣ Post-Merge CD Pipeline (Deployment)**
- **Docker Build** – Build the container image.
- **Trivy Scan** – Security scan for container vulnerabilities.
- **Push to Docker Registry** – ECR, Docker Hub, etc.
- **Deploy to Testing Environment** – EC2, AWS Lambda, etc.
- **Run Integration Tests** – API tests, end-to-end tests.
- **Deploy to Staging Environment**.
- **Final Approval Step** – Manual or automatic production approval.
- **Deploy to Production**.

