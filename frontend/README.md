# Admin Panel Frontend

A modern React admin dashboard built with Material-UI and React Router.

## Features

- **Modern UI**: Built with Material-UI (MUI) for a professional look
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Dashboard**: Overview with charts and statistics using Recharts
- **User Management**: Complete CRUD operations for users
- **Analytics**: Detailed analytics with multiple chart types
- **Settings**: Comprehensive settings management
- **Authentication**: Login system with demo credentials
- **API Integration**: Ready to connect with backend API

## Pages

- **Dashboard**: Overview with key metrics and charts
- **Users**: User management with data grid
- **Analytics**: Detailed analytics and reporting
- **Settings**: Application settings and configuration
- **Login**: Authentication page

## Technologies Used

- React 18
- Material-UI (MUI) v5
- React Router v6
- Recharts for data visualization
- Axios for API calls
- MUI X Data Grid for tables

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

The application will open at `http://localhost:3000`.

### Demo Credentials

- **Email**: admin@example.com
- **Password**: admin123

## Project Structure

```
src/
├── components/
│   └── Layout/
│       └── DashboardLayout.js    # Main layout with sidebar and header
├── pages/
│   ├── Dashboard.js              # Dashboard overview
│   ├── Users.js                  # User management
│   ├── Analytics.js              # Analytics and reports
│   ├── Settings.js               # Application settings
│   └── Login.js                  # Authentication
├── services/
│   └── api.js                    # API service layer
├── App.js                        # Main app component
└── App.css                       # Global styles
```

## API Integration

The frontend is configured to connect with the backend API running on `http://localhost:5000`. 

### Environment Variables

Create a `.env` file in the frontend directory:

```
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_NAME=Admin Panel
REACT_APP_VERSION=1.0.0
```

### API Endpoints

- **Authentication**: `/api/auth/*`
- **Users**: `/api/users/*`
- **Health**: `/api/health`

## Customization

### Theme

The application uses Material-UI's theming system. You can customize the theme in `App.js`:

```javascript
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Change primary color
    },
    // ... other theme options
  },
});
```

### Adding New Pages

1. Create a new component in the `pages/` directory
2. Add the route in `App.js`
3. Add navigation item in `DashboardLayout.js`

## Available Scripts

- `npm start` - Start development server
- `npm build` - Build for production
- `npm test` - Run tests
- `npm eject` - Eject from Create React App

## Production Build

To create a production build:

```bash
npm run build
```

This will create an optimized build in the `build/` directory.

## Contributing

1. Follow the existing code structure
2. Use Material-UI components consistently
3. Maintain responsive design
4. Add proper error handling
5. Include loading states for async operations

## License

This project is part of the Admin Panel application.