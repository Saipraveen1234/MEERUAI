# MeeruAI Website - Deployment & Operations Guide

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

---

## Prerequisites

| Requirement | Version | Check Command |
|------------|---------|---------------|
| Node.js | 18.17+ (recommended: 20.x LTS) | `node -v` |
| npm | 9+ | `npm -v` |
| Git | 2.30+ | `git --version` |

---

## Development Workflow

### 1. Local Development
```bash
# Start dev server with hot reload
npm run dev
# Server runs at http://localhost:3000
```

### 2. Code Quality Checks
```bash
# Type check (no emit)
npx tsc --noEmit

# Build (includes TypeScript compilation)
npm run build
```

### 3. Production Build Test
```bash
# Create optimized build
npm run build

# Test production build locally
npm start
# Server runs at http://localhost:3000
```

---

## Project Structure

```
meeru-site/
├── app/                          # Next.js App Router
│   ├── home/sections/            # Homepage sections
│   ├── shared/                   # Shared components (Navbar, Modals, Footer)
│   ├── privacy/                  # Privacy Policy page
│   ├── terms/                    # Terms of Service page
│   ├── about/                    # About page
│   ├── trust/                    # Trust page
│   ├── error.tsx                 # Error boundary
│   ├── loading.tsx               # Loading state
│   ├── not-found.tsx             # 404 page
│   ├── layout.tsx                # Root layout (SEO, fonts)
│   ├── page.tsx                  # Homepage
│   └── globals.css               # Global styles
├── public/                       # Static assets (images, logos, favicon)
├── next.config.ts                # Next.js config (standalone output, security headers)
├── tailwind.config.js            # Tailwind CSS config
├── postcss.config.js             # PostCSS config
└── package.json                  # Dependencies & scripts
```

---

## Build Output

This project uses `output: "standalone"` which produces a self-contained production build:

```
.next/
├── standalone/          # Self-contained server (copy this for deployment)
│   ├── server.js        # Entry point
│   ├── .next/           # Static assets
│   └── node_modules/    # Production dependencies only
├── static/              # Static files
└── ...
```

**Key benefit**: The `standalone` folder contains everything needed to run the app — no `npm install` required on the server.

---

## Environment Variables

Create `.env.local` for local development and set these in your deployment platform for production:

| Variable | Required | Description |
|----------|----------|-------------|
| `NODE_ENV` | Yes | `production` for production |
| `PORT` | No | Server port (default: 3000) |
| `NEXT_PUBLIC_FORMSPREE_ENDPOINT` | No | Formspree form endpoint (if using demo modal) |

```bash
# .env.local example
NODE_ENV=production
PORT=3000
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
```

---

# AWS Deployment Guide

## Option 1: AWS Elastic Beanstalk (Recommended - Easiest)

Best for: Quick deployment with auto-scaling, load balancing, and managed infrastructure.

### Step 1: Prepare Build
```bash
# Build the project
npm run build

# The standalone output is in .next/standalone/
```

### Step 2: Create Deployment Bundle
```bash
# Create a deployment folder
mkdir elastic-beanstalk-deploy
cp -r .next/standalone/* elastic-beanstalk-deploy/
cp -r .next/static elastic-beanstalk-deploy/.next/
cp -r public elastic-beanstalk-deploy/

# Create package.json for EB (minimal)
cat > elastic-beanstalk-deploy/package.json << 'EOF'
{
  "name": "meeru-site",
  "version": "0.1.0",
  "scripts": {
    "start": "node server.js"
  },
  "engines": {
    "node": "20.x"
  }
}
EOF

# Zip it
cd elastic-beanstalk-deploy && zip -r ../deploy.zip . && cd ..
```

### Step 3: Deploy via AWS Console
1. Go to **AWS Elastic Beanstalk Console**
2. Click **Create Application**
3. Application name: `meeru-site`
4. Platform: **Node.js**
5. Platform version: **Node.js 20**
6. Upload your `deploy.zip`
7. Click **Create Application**

### Step 4: Configure Environment
1. Go to **Configuration** > **Software**
2. Add environment property:
   - `NODE_ENV` = `production`
   - `PORT` = `8080` (Elastic Beanstalk default)
3. Save and apply

### Step 5: Set Custom Domain (Optional)
1. Go to **Configuration** > **Capacity**
2. Enable **Load Balancer** if not already enabled
3. Go to **Configuration** > **Load Balancer**
4. Add HTTPS listener (port 443) with your SSL certificate from ACM

---

## Option 2: AWS EC2 + PM2 (More Control)

Best for: Full server control, custom configurations, cost optimization.

### Step 1: Launch EC2 Instance
1. Go to **AWS EC2 Console**
2. Launch Instance:
   - **AMI**: Amazon Linux 2023 or Ubuntu 22.04 LTS
   - **Instance Type**: `t3.micro` (free tier) or `t3.small` (recommended)
   - **Security Group**: Allow ports 22 (SSH), 80 (HTTP), 443 (HTTPS)
   - **Key Pair**: Create or use existing

### Step 2: Connect & Setup Server
```bash
# SSH into your instance
ssh -i your-key.pem ec2-user@your-instance-ip

# Update system
sudo yum update -y  # Amazon Linux
# OR
sudo apt update && sudo apt upgrade -y  # Ubuntu

# Install Node.js 20
curl -fsSL https://rpm.nodesource.com/setup_20.x | sudo bash -  # Amazon Linux
# OR
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo bash -  # Ubuntu

sudo yum install -y nodejs  # Amazon Linux
# OR
sudo apt install -y nodejs  # Ubuntu

# Install PM2 globally
sudo npm install -g pm2
```

### Step 3: Deploy Application
```bash
# Create app directory
mkdir -p ~/meeru-site
cd ~/meeru-site

# Copy build files from local (run on your local machine)
# Option A: SCP
scp -i your-key.pem -r .next/standalone/* ec2-user@your-instance-ip:~/meeru-site/
scp -i your-key.pem -r .next/static ec2-user@your-instance-ip:~/meeru-site/.next/
scp -i your-key.pem -r public ec2-user@your-instance-ip:~/meeru-site/

# Option B: Clone from GitHub
git clone https://github.com/YOUR_ORG/meeru-site.git .
npm install
npm run build
```

### Step 4: Start with PM2
```bash
cd ~/meeru-site

# Start the application
pm2 start server.js --name meeru-site

# Save PM2 config so it restarts on reboot
pm2 save
pm2 startup systemd

# Check status
pm2 status
pm2 logs meeru-site
```

### Step 5: Setup Reverse Proxy (Nginx)
```bash
# Install Nginx
sudo yum install nginx -y  # Amazon Linux
sudo apt install nginx -y  # Ubuntu

# Configure Nginx
sudo tee /etc/nginx/conf.d/meeru-site.conf << 'EOF'
server {
    listen 80;
    server_name _;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # Cache static assets
    location /_next/static {
        proxy_pass http://127.0.0.1:3000;
        proxy_cache_valid 200 365d;
        add_header Cache-Control "public, immutable";
    }
}
EOF

# Test and reload Nginx
sudo nginx -t
sudo systemctl restart nginx
sudo systemctl enable nginx
```

### Step 6: Setup HTTPS with Let's Encrypt (Optional but Recommended)
```bash
# Install certbot
sudo yum install certbot python3-certbot-nginx -y  # Amazon Linux
sudo apt install certbot python3-certbot-nginx -y  # Ubuntu

# Obtain certificate
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com

# Auto-renewal is set up automatically
```

---

## Option 3: AWS ECS + Fargate (Containerized)

Best for: Microservices architecture, auto-scaling, infrastructure as code.

### Step 1: Create Dockerfile
```dockerfile
# Dockerfile
FROM node:20-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci --only=production

# Build the app
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy standalone output
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

USER nextjs

EXPOSE 3000

ENV HOSTNAME="0.0.0.0"
CMD ["node", "server.js"]
```

### Step 2: Build & Push to ECR
```bash
# Build Docker image
docker build -t meeru-site .

# Create ECR repository (one-time)
aws ecr create-repository --repository-name meeru-site --region us-east-1

# Login to ECR
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin YOUR_ACCOUNT_ID.dkr.ecr.us-east-1.amazonaws.com

# Tag and push
docker tag meeru-site:latest YOUR_ACCOUNT_ID.dkr.ecr.us-east-1.amazonaws.com/meeru-site:latest
docker push YOUR_ACCOUNT_ID.dkr.ecr.us-east-1.amazonaws.com/meeru-site:latest
```

### Step 3: Create ECS Cluster & Service
1. Go to **AWS ECS Console**
2. Create Cluster (ECS Cluster with Fargate)
3. Create Task Definition:
   - Launch type: **Fargate**
   - Task role: `ecsTaskExecutionRole`
   - Container definition:
     - Image: `YOUR_ACCOUNT_ID.dkr.ecr.us-east-1.amazonaws.com/meeru-site:latest`
     - Port: `3000`
     - Memory: `512 MB`
     - CPU: `256`
4. Create Service:
   - Launch type: **Fargate**
   - Number of tasks: `2` (for high availability)
   - Load balancer: **Application Load Balancer**
   - Target group: Create new (port 3000)

### Step 4: Configure Auto-Scaling
1. Go to your ECS Service
2. Click **Auto Scaling**
3. Configure:
   - Minimum tasks: `2`
   - Maximum tasks: `10`
   - Target tracking: `70%` CPU utilization

---

## Option 4: AWS Amplify (Serverless - Easiest)

Best for: Frontend-only deployments, automatic CI/CD, branch previews.

### Step 1: Connect Repository
1. Go to **AWS Amplify Console**
2. Click **New App** > **Host Web App**
3. Connect to your Git provider (GitHub, GitLab, Bitbucket)
4. Select the `meeru-site` repository

### Step 2: Configure Build Settings
Amplify will auto-detect Next.js. Update the build settings if needed:

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
      - .next/cache/**/*
```

### Step 3: Deploy
1. Click **Save and Deploy**
2. Amplify will build and deploy automatically
3. Access your site at the provided URL

### Step 4: Add Custom Domain
1. Go to **Domain Management**
2. Click **Add Domain**
3. Enter your domain and configure DNS

---

## Option 5: S3 + CloudFront (Static Site)

**Note**: Only use this if your site is 100% static (no API routes, no server-side rendering). This project uses `output: "standalone"` which requires a Node.js server.

If you want pure static hosting, change `next.config.ts`:
```typescript
// Remove: output: "standalone"
// Add: output: "export"
const nextConfig: NextConfig = {
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true, // Required for static export
  },
};
```

Then:
```bash
npm run build
# Upload 'dist/' folder to S3
# Configure CloudFront in front of S3
```

---

## Production Checklist

Before deploying to production, verify:

- [ ] `npm run build` succeeds with zero errors
- [ ] `npx tsc --noEmit` passes with no type errors
- [ ] All environment variables are set in production
- [ ] Domain/DNS is configured and pointing to your deployment
- [ ] SSL/HTTPS is enabled (required for SEO and security)
- [ ] Security headers are configured (already in `next.config.ts`)
- [ ] `.env.local` is NOT committed to Git (add to `.gitignore`)
- [ ] `console.log` statements removed from production code
- [ ] Analytics/monitoring is configured (optional)

---

## Security Configuration

Security headers are already configured in `next.config.ts`:

| Header | Value | Purpose |
|--------|-------|---------|
| `X-Content-Type-Options` | `nosniff` | Prevents MIME type sniffing |
| `X-Frame-Options` | `DENY` | Prevents clickjacking |
| `X-XSS-Protection` | `1; mode=block` | XSS filter |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | Limits referrer info |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=()` | Restricts browser features |

Additional AWS security recommendations:
- Enable **AWS WAF** on your CloudFront distribution or load balancer
- Enable **AWS Shield Standard** (free DDoS protection)
- Use **AWS Secrets Manager** for sensitive environment variables
- Enable **CloudTrail** for audit logging

---

## Monitoring & Logging

### CloudWatch (for EC2/ECS)
```bash
# Install CloudWatch agent on EC2
sudo yum install amazon-cloudwatch-agent -y

# Configure and start
sudo /opt/aws/amazon-cloudwatch-agent/bin/amazon-cloudwatch-agent-config-wizard
sudo systemctl start amazon-cloudwatch-agent
```

### PM2 Monitoring (for EC2)
```bash
# View logs
pm2 logs meeru-site

# Monitor resources
pm2 monit

# Setup PM2 Plus (optional, free tier available)
pm2 plus
```

---

## Troubleshooting

### Build Fails
```bash
# Clear caches and rebuild
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

### Port Already in Use
```bash
# Find process using port 3000
lsof -i :3000
kill -9 <PID>
```

### PM2 App Won't Start
```bash
# Check logs
pm2 logs meeru-site

# Restart with zero downtime
pm2 reload meeru-site
```

### Nginx 502 Bad Gateway
```bash
# Check if Node.js app is running
pm2 status

# Test Nginx config
sudo nginx -t

# Restart Nginx
sudo systemctl restart nginx
```

---

## Cost Optimization

| Service | Estimated Monthly Cost (Low Traffic) |
|---------|--------------------------------------|
| Elastic Beanstalk (t3.micro) | ~$15-20 |
| EC2 (t3.micro) | ~$8-15 |
| ECS Fargate (256 CPU, 512 MB) | ~$10-20 |
| Amplify | Free tier: 1,000 build minutes/month |
| S3 + CloudFront | ~$1-5 |
| Route 53 (domain) | ~$0.50 |

**Free Tier Eligible**: t3.micro EC2, Amplify build minutes, S3 (5GB)

---

## Support

For deployment issues:
1. Check application logs first
2. Verify environment variables
3. Test build locally with `npm run build && npm start`
4. Review AWS CloudWatch logs
5. Check security group and firewall settings

---

**Last Updated**: May 2026
**Next.js Version**: 16.2.6
**Node.js Version**: 20.x LTS
