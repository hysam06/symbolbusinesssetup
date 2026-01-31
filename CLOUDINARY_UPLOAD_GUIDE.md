# Upload Images to Cloudinary

This guide will help you upload all your original images from `src/assets/` to Cloudinary.

## Prerequisites

1. **Get your Cloudinary credentials:**
   - Login to https://cloudinary.com/console
   - Copy your **Cloud Name** (already set: `dlnygpreh`)
   - Copy your **API Key**
   - Copy your **API Secret**

## Steps

### 1. Install Cloudinary SDK

```bash
npm install cloudinary
```

### 2. Add your credentials

Open `scripts/upload-to-cloudinary.js` and replace:
- `YOUR_API_KEY` with your actual API Key
- `YOUR_API_SECRET` with your actual API Secret

### 3. Run the upload script

```bash
node scripts/upload-to-cloudinary.js
```

The script will:
- Upload all 53 images to Cloudinary
- Organize them into folders (services/, logos/, backgrounds/, team/, branding/, about/)
- Show progress for each upload
- Save results to `scripts/upload-results.json`

### 4. Update the code

After successful upload, the images will be available at Cloudinary with the following public IDs:

**Services:**
- `services/service-1` through `services/service-5`
- `services/legal-1`, `services/legal-2`
- `services/immigration`

**Logos:**
- `logos/logo-10`, `logos/logo-11`, etc. (35 logos)

**Backgrounds:**
- `backgrounds/services-bg`
- `backgrounds/contact-bg`

**Team:**
- `team/founder`

**Branding:**
- `branding/symbol-logo`

**About:**
- `about/about-us`

The code is already configured to use these public IDs, so once uploaded, your actual images will display automatically!

## Troubleshooting

**Error: "Invalid API credentials"**
- Double-check your API Key and API Secret in the script

**Error: "File not found"**
- Make sure all images exist in `src/assets/` folder

**Upload fails for specific images**
- Check the file format and size
- Cloudinary supports most common image formats (JPG, PNG, WebP, etc.)

## Alternative: Manual Upload

If you prefer to upload manually:

1. Go to https://cloudinary.com/console/media_library
2. Click "Upload" button
3. Create folders: `services`, `logos`, `backgrounds`, `team`, `branding`, `about`
4. Upload images to their respective folders
5. Make sure the public IDs match the ones in the code
