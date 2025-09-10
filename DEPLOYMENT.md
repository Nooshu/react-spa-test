# Vercel Deployment Guide

This guide will help you deploy your React SPA to Vercel for real-world performance testing.

## 🚀 Quick Deployment

### Prerequisites
- Node.js 18+ installed
- Vercel account (free at [vercel.com](https://vercel.com))

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Login to Vercel
```bash
vercel login
```

### Step 3: Deploy
```bash
# From your project root directory
vercel

# Follow the prompts:
# - Set up and deploy? Y
# - Which scope? (select your account)
# - Link to existing project? N
# - Project name: react-a11y-test (or your preferred name)
# - Directory: ./
# - Override settings? N
```

### Step 4: Production Deployment
```bash
# Deploy to production
vercel --prod
```

## 📁 Files Added for Vercel

### Configuration Files
- `vercel.json` - Vercel configuration
- `.vercelignore` - Files to exclude from deployment

### API Endpoints
- `api/performance-metrics.js` - Handles performance data
- `api/errors.js` - Handles error tracking
- `api/performance-alerts.js` - Handles performance alerts

### Updated Files
- `package.json` - Added deployment scripts
- `index.html` - Fixed asset paths for production
- `vite.config.ts` - Updated to copy GOV.UK assets

## 🔧 Configuration Details

### Vercel Configuration (`vercel.json`)
- **Static Build**: Uses `@vercel/static-build` for React SPA
- **SPA Routing**: All routes redirect to `index.html` for client-side routing
- **Asset Caching**: Static assets cached for 1 year
- **Security Headers**: Added security headers for production
- **API Functions**: Serverless functions for performance monitoring

### API Endpoints
All API endpoints are serverless functions that:
- Handle CORS automatically
- Log performance data to console (in production, connect to a database)
- Provide real-time alerting for poor performance
- Include IP and user agent tracking

## 🌍 Performance Testing Features

Once deployed, your app will have:

### Real User Monitoring
- Core Web Vitals collection from actual users
- Performance metrics sent to `/api/performance-metrics`
- Error tracking via `/api/errors`
- Performance budget alerts via `/api/performance-alerts`

### Global Testing
- Test from different geographic locations
- Real-world network conditions
- Actual device performance data

### Analytics Integration
- Vercel Analytics (built-in)
- Custom performance monitoring
- Real-time alerting

## 🔍 Testing Your Deployment

### 1. Verify Deployment
```bash
# Check deployment status
vercel ls

# View deployment logs
vercel logs [deployment-url]
```

### 2. Test Performance Monitoring
1. Visit your deployed app
2. Open browser DevTools → Console
3. Navigate through the app
4. Check for performance metrics being logged

### 3. Test from Different Locations
Use tools like:
- [WebPageTest.org](https://webpagetest.org)
- [GTmetrix](https://gtmetrix.com)
- [PageSpeed Insights](https://pagespeed.web.dev)

## 📊 Monitoring Setup

### Environment Variables (Optional)
In Vercel dashboard, you can add:
```
NODE_ENV=production
API_ENDPOINT=https://your-app.vercel.app
```

### Database Integration (Future)
For production monitoring, consider:
- **Vercel KV** - Redis-compatible database
- **PlanetScale** - MySQL database
- **Supabase** - PostgreSQL database
- **MongoDB Atlas** - NoSQL database

## 🚨 Troubleshooting

### Common Issues

1. **Build Failures**
   ```bash
   # Check build locally
   npm run build
   
   # Check Vercel logs
   vercel logs
   ```

2. **Asset Loading Issues**
   - Ensure all assets are in `public/` directory
   - Check asset paths in `index.html`
   - Verify GOV.UK assets are copied correctly

3. **API Endpoints Not Working**
   - Check function logs in Vercel dashboard
   - Verify CORS headers are set
   - Test endpoints with curl or Postman

### Debug Commands
```bash
# View deployment details
vercel inspect [deployment-url]

# View function logs
vercel logs [deployment-url] --follow

# Test locally with Vercel
vercel dev
```

## 🎯 Next Steps

1. **Set up monitoring alerts** (Slack, email, etc.)
2. **Connect to a database** for persistent data storage
3. **Configure custom domain** if needed
4. **Set up CI/CD** with GitHub integration
5. **Monitor performance** from different locations

## 📈 Performance Optimization

After deployment:
1. **Monitor Core Web Vitals** in production
2. **Analyze bundle sizes** with Vercel Analytics
3. **Test on real devices** in different locations
4. **Optimize based on real user data**

Your app is now ready for real-world performance testing! 🚀
