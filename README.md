#ENGLISH
Strava Activity Tracker (TypeScript)
Description
A React Native mobile application built with TypeScript for tracking athletic activities using the Strava API.

Technologies Used
React Native
Expo
TypeScript
Zustand (State management)
React Query (Data fetching and caching)
Strava API
Key Features
Static typing with TypeScript
Secure OAuth authentication
State management with Zustand
Data caching with React Query
Typed user interfaces
Prerequisites
Node.js (v16+)
npm or Yarn
Expo CLI
Strava developer account
Project Setup
Clone the repository:
Bash
git clone https://github.com/agusala/vert-run-app.git
cd StravaActivityTracker
Usa el código con precaución.

Install dependencies:
Bash
npm install
Usa el código con precaución.

Configure environment variables: Create a .env file with:
STRAVA_CLIENT_ID=your_client_id
STRAVA_CLIENT_SECRET=your_client_secret
Available Scripts
npm start: Start development server
npm run android: Run on Android device/emulator
npm run ios: Run on iOS device/emulator
npm run build: Build for production
Project Structure
src/: Main source code
components/: Reusable components
screens/: Application screens
services/: API services
store/: State management
Note: Currently, the app uses a simple login system with a hardcoded username and password for testing purposes. The connection to the Strava API is not yet implemented. To access the mock data and login, use the following credentials:

Username: test
Password: password

#ESPAÑOL

Descripción
Una aplicación móvil React Native creada con TypeScript para realizar un seguimiento de las actividades deportivas mediante la API de Strava.

Tecnologías utilizadas
React Native
Expo
TypeScript
Zustand (gestión de estado)
React Query (obtención y almacenamiento en caché de datos)
API de Strava
Características clave
Tipos estáticos con TypeScript
Autenticación OAuth segura
Gestión de estado con Zustand
Almacenamiento en caché de datos con React Query
Interfaces de usuario tipificadas
Requisitos previos
Node.js (v16+)
npm o Yarn
Expo CLI
Cuenta de desarrollador de Strava
Configuración del proyecto
Clonar el repositorio:
Bash
git clone https://github.com/agusala/vert-run-app.git
cd StravaActivityTracker
Usa el código con precaución.

Instalar dependencias:
Bash
npm install
Usa el código con precaución.

Configurar variables de entorno: Crear un archivo .env con:
STRAVA_CLIENT_ID=your_client_id
STRAVA_CLIENT_SECRET=your_client_secret
Scripts disponibles
npm start: Iniciar servidor de desarrollo
npm run android: Ejecutar en dispositivo/emulador Android
npm run ios: Ejecutar en dispositivo/emulador iOS
npm run build: Construir para producción
Estructura del proyecto
src/: Código fuente principal
components/: Componentes reutilizables
screens/: Pantallas de la aplicación
services/: Servicios de API
store/: Gestión de estado
Nota: Actualmente, la aplicación utiliza un sistema de inicio de sesión simple con un nombre de usuario y una contraseña codificados para fines de prueba. La conexión a la API de Strava aún no está implementada. Para acceder a los datos simulados e iniciar sesión, use las siguientes credenciales:

Nombre de usuario: test
Contraseña: password
