# Cognitive Metrics AI

A modern performance measurement and review application for managers. It streamlines the performance review process by providing a centralized platform for tracking employee progress, collecting data, and generating data-driven insights. The application aims to move beyond traditional, static performance reviews to create a continuous culture of growth and improvement.

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
## Installation

### Prerequisites

To get started with TailAdmin, ensure you have the following prerequisites installed and set up:

- Node.js 18.x or later (recommended to use Node.js 20.x or later)
- Recommended IDE Setup: [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

#### Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

### Cloning the Repository

Clone the repository using the following command:

```bash
git clone https://github.com/TailAdmin/vue-tailwind-admin-dashboard.git
```

> Windows Users: place the repository near the root of your drive if you face issues while cloning.

1. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

2. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

3. Production build:
   ```bash
   npm run build
   # or
   yarn build
   ```

## Feature Comparison

### Free Version

- 1 Unique Dashboard
- 30+ dashboard components
- 50+ UI elements
- Basic Figma design files
- Community support

### Pro Version

- 5 Unique Dashboards: Analytics, Ecommerce, Marketing, CRM, Stocks (more coming soon)
- 400+ dashboard components and UI elements
- Complete Figma design file
- Email support

To learn more about pro version features and pricing, visit our [pricing page](https://tailadmin.com/pricing).

## Components

TailAdmin is a pre-designed starting point for building a web-based dashboard using Vue.js and Tailwind CSS. The template includes:

- Sophisticated and accessible sidebar
- Data visualization components
- Prebuilt profile management and 404 page
- Tables and Charts(Line and Bar)
- Authentication forms and input elements
- Alerts, Dropdowns, Modals, Buttons and more
- Can't forget Dark Mode 🕶️

All components are built with Vue and styled using Tailwind CSS for easy customization.

## Features

**💎 High-quality, Premium Modern Design:**
A thoughtfully designed dashboard template with a deep focus on UX/UI, already trusted and utilized by over 10K+ web apps worldwide.

**✨ Vue 3:**
Get enhanced performance with the latest Vue version.

**⚡ Vite Build System:**
Enjoy quick development with Vite, ensuring fast code compilation.

**🔀 Vue Router:**
Manage app navigation with ease using Vue Router for seamless transitions.

**💡 Reactive Utilities:**
Enhance component reactivity with @vueuse/core utilities.

**📊 Charting with ApexCharts:**
Visualize data with ApexCharts for beautiful analytics.

**🗺️ Vector Maps with JSVectorMap:**
Easily integrate interactive vector maps with JSVectorMap.

**🖌️ UI with Tailwind CSS:**
Frontend UI built on the powerful and versatile Tailwind CSS framework.

**💫 TypeScript Support:**
Write safer, maintainable code with TailAdmin Vue's TypeScript Support.

**✅ Linting and Formatting:**
Maintain a clean codebase with built-in linting and formatting.

**🗃️ State Management with Pinia:**
Handle your app's state with Pinia for clean, organized code.

## Update Logs

### Version 2.0.1 - [February 27, 2025]

#### Update Overview

- Upgraded to Tailwind CSS v4 for better performance and efficiency.
- Updated class usage to match the latest syntax and features.
- Replaced deprecated class and optimized styles.

#### Next Steps

- Run npm install or yarn install to update dependencies.
- Check for any style changes or compatibility issues.
- Refer to the Tailwind CSS v4 [Migration Guide](https://tailwindcss.com/docs/upgrade-guide) on this release. if needed.
- This update keeps the project up to date with the latest Tailwind improvements. 🚀

### Version 2.0.0 - [February 2025]

Major update with Vue 3 migration and comprehensive redesign.

#### Major Improvements

- Complete migration to Vue 3 Composition API
- Updated to Vue Router 4
- Enhanced user interface with new Vue 3 components
- Improved performance with Vue 3's virtual DOM
- Better accessibility and responsive design

#### New Features

- Redesigned dashboards (Ecommerce, Analytics, Marketing, CRM)
- Collapsible sidebar with Vue 3 integration
- Enhanced navigation with Vue Router 4
- Real-time chat functionality
- Full-featured calendar with drag-and-drop
- Advanced table components
- Updated data visualization with ApexCharts

#### Breaking Changes

- Requires Vue 3 and Vue Router 4
- Chart components migrated to ApexCharts for Vue 3
- Modified routing implementation
- Updated component APIs for Vue 3 compatibility

[Read more](https://tailadmin.com/docs/update-logs/vue) on this release.

### Version 1.0.2 - [June 19, 2024]

#### Issues

- Fix Mobile Menu Hamburger Icon issue.

### Version 1.0.1 - [Feb 08, 2024]

#### Enhancements

- Make it functional [Multiselect Dropdown/Form Elements].
- Delete SelectGroup Components then create a SelectGroup folder and create two files under this
  folder SelectGroupOne.vue SelectGroupTwo.vue [Select Group/Form Elements & Layout].
- Update style.css file.

### Version 1.0.0 - Initial Release - [Jan 22, 2024]

- Initial release of TailAdmin Vue.
