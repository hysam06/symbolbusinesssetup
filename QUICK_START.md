# Quick Start: Upload Your Images to Cloudinary

## Step 1: Get Your Cloudinary API Credentials

1. Go to https://cloudinary.com/console
2. Find your credentials in the dashboard:
   - **Cloud Name**: `dlnygpreh` ✅ (already configured)
   - **API Key**: Copy this
   - **API Secret**: Copy this

## Step 2: Update the Upload Script

Open `scripts/upload-to-cloudinary.js` and replace:

```javascript
api_key: 'YOUR_API_KEY',      // Replace with your actual API Key
api_secret: 'YOUR_API_SECRET' // Replace with your actual API Secret
```

## Step 3: Run the Upload

```bash
node scripts/upload-to-cloudinary.js
```

This will upload all 53 images to Cloudinary in organized folders.

## Step 4: Verify

Once uploaded, refresh your website at http://localhost:5173 - your actual images will now display with Cloudinary optimization!

---

## What Gets Uploaded

The script will upload all images from `src/assets/` to Cloudinary:

- **8 service images** → `services/service-1` through `services/immigration`
- **35 client logos** → `logos/logo-10` through `logos/logo-355`
- **1 about image** → `about/about-us`
- **4 background images** → `backgrounds/services-bg`, `backgrounds/contact-bg`, etc.
- **1 founder image** → `team/founder`
- **1 logo** → `branding/symbol-logo`

**Total: 53 images**

---

## Already Done ✅

- ✅ Code updated to use Cloudinary URLs
- ✅ All components configured with correct public IDs
- ✅ Automatic optimization enabled (WebP/AVIF, auto quality)
- ✅ Upload script created and ready to run

## Just Need To Do

1. Add your API credentials to the script
2. Run the upload command
3. Done! Your images will be optimized and served from Cloudinary CDN
