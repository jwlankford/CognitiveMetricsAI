git clone https://jwlankford@dev.azure.com/jwlankford/CognitiveMetricsAI/_git/CognitiveMetricsAI
cd CognitiveMetricsAI

# Cognitive Metrics AI

A modern performance measurement and review application for managers. It streamlines the performance review process by providing a centralized platform for tracking employee progress, collecting data, and generating data-driven insights. The application aims to move beyond traditional, static performance reviews to foster a continuous culture of growth and improvement.

## Technology Stack

- **Frontend:** Vue.js (with Vue Router and Pinia)
- **Backend:** Django (with Django REST Framework)
- **Database:** PostgreSQL (recommended)
- **Version Control & CI/CD:** Azure DevOps

## Getting Started

These instructions will get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You will need the following software installed:

- Node.js (for the Vue.js frontend)
- Python 3.10+ (for the Django backend)
- Git

## Installation

### Clone the repository

```bash
git clone https://jwlankford@dev.azure.com/jwlankford/CognitiveMetricsAI/_git/CognitiveMetricsAI
cd CognitiveMetricsAI
```

### Set up the Backend (Django)

```bash
# Create a virtual environment and activate it
python -m venv venv
source venv/bin/activate  # On Windows use: venv\Scripts\activate
# Install the backend dependencies
pip install -r requirements.txt
# Run database migrations
python manage.py migrate
```

### Set up the Frontend (Vue.js)

```bash
# Navigate to the frontend directory
cd frontend
# Install the frontend dependencies
npm install
```

npm run dev

## Usage

### Running the Backend

Make sure your virtual environment is active, then run:

```bash
python manage.py runserver
```

### Running the Frontend

Navigate to the frontend directory in a new terminal and run:

```bash
npm run dev
```

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License - see the `LICENSE.md` file for details.