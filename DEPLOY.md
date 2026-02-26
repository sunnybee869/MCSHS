# Deploying to Render (Free Hosting)

## Prerequisites
- GitHub account (free): https://github.com
- Render account (free): https://render.com

## Step 1: Push Your Code to GitHub

1. **Install Git** (if not already installed): https://git-scm.com/download/win
2. **Create a GitHub repository**:
   - Go to https://github.com/new
   - Name it: `mcshs-school-website`
   - Click "Create repository"

3. **Push your code** (in PowerShell, from your project folder):
```powershell
git init
git add .
git commit -m "Initial commit - school website"
git remote add origin https://github.com/YOUR_USERNAME/mcshs-school-website.git
git branch -M main
git push -u origin main
```

## Step 2: Deploy to Render

1. **Sign up for free at**: https://render.com
2. **Click "New +"** button → Select **"Web Service"**
3. **Connect GitHub**:
   - Click "Connect account" and authorize GitHub
   - Select your repository: `mcshs-school-website`
4. **Configure deployment**:
   - **Name**: `mcshs-school`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Keep on free tier ✅

5. **Click "Create Web Service"**

Your site will deploy automatically! 🚀

### Environment Variables
Render lets you define env vars. Add:
- `SESSION_SECRET` – a random string used by express-session (e.g. via `openssl rand -base64 32`).

The server will hash passwords with bcrypt and protect routes using sessions.



## Important Notes

⚠️ **SQLite Database Persistence**:
- Free tier uses an ephemeral filesystem - data may reset on redeploys
- For persistent data, upgrade database to PostgreSQL (Render's free tier) or migrate to MongoDB Atlas (free)

✅ **Your site will have a free URL**: `https://mcshs-school.onrender.com`

## To Enable Auto-Deploys
- Render auto-deploys when you push to GitHub
- No additional steps needed!

## Troubleshooting

If deployment fails:
1. Check build logs on Render dashboard
2. Verify `package.json` and `server.js` are in the root folder
3. Ensure `.gitignore` is properly set up

---

**Need help?** Visit Render docs: https://render.com/docs
