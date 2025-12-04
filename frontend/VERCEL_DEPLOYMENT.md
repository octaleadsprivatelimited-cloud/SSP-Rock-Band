# Vercel Deployment Guide

## Environment Variables

To deploy this application on Vercel, you need to set the following environment variable:

### Required Environment Variable

- `VITE_API_URL` - The backend API URL (e.g., `https://your-backend-api.vercel.app` or your backend server URL)

### Setting Environment Variables in Vercel

1. Go to your Vercel project settings
2. Navigate to "Environment Variables"
3. Add the following:
   - **Name**: `VITE_API_URL`
   - **Value**: Your backend API URL (e.g., `https://your-backend.vercel.app` or `https://api.yourdomain.com`)
   - **Environment**: Production, Preview, and Development (select all)

### Local Development

For local development, create a `.env` file in the `frontend` directory:

```
VITE_API_URL=http://localhost:5000
```

**Note**: The `.env` file is already in `.gitignore` and will not be committed to the repository.

## Build Configuration

The project is configured with:
- **Framework**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

## Deployment Steps

1. Connect your GitHub repository to Vercel
2. Set the **Root Directory** to `frontend` in Vercel project settings
3. Add the `VITE_API_URL` environment variable
4. Deploy!

The `vercel.json` file is already configured with:
- Proper rewrites for React Router (SPA routing)
- Cache headers for static assets
- Framework detection

## Troubleshooting

### Build Fails
- Ensure Node.js version is 18+ (check `package.json` engines if specified)
- Verify all dependencies are installed correctly

### API Calls Fail
- Check that `VITE_API_URL` is set correctly in Vercel environment variables
- Ensure your backend API is accessible from the internet
- Check CORS settings on your backend to allow requests from your Vercel domain

### 404 Errors on Routes
- The `vercel.json` rewrites configuration should handle this automatically
- Ensure all routes are properly defined in `App.jsx`

