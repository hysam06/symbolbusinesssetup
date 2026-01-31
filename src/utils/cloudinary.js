import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { format, quality } from '@cloudinary/url-gen/actions/delivery';

// Initialize Cloudinary instance
const cld = new Cloudinary({
    cloud: {
        cloudName: 'dlnygpreh'
    }
});

/**
 * Get optimized Cloudinary image URL
 * @param {string} publicId - The public ID of the image in Cloudinary
 * @param {object} options - Transformation options
 * @returns {string} - Optimized image URL
 */
export const getCloudinaryImage = (publicId, options = {}) => {
    const {
        width = 'auto',
        height = 'auto',
        crop = 'fill',
        gravity = 'auto',
    } = options;

    const img = cld.image(publicId);

    // Apply automatic format and quality optimization
    img.delivery(format('auto')).delivery(quality('auto'));

    // Apply resize transformations if specified
    if (width !== 'auto' || height !== 'auto') {
        const resizeOptions = auto();

        if (gravity === 'auto') {
            resizeOptions.gravity(autoGravity());
        }

        if (width !== 'auto') resizeOptions.width(width);
        if (height !== 'auto') resizeOptions.height(height);

        img.resize(resizeOptions);
    }

    return img;
};

/**
 * Get optimized image URL as string
 * @param {string} publicId - The public ID of the image in Cloudinary
 * @param {object} options - Transformation options
 * @returns {string} - Optimized image URL string
 */
export const getCloudinaryUrl = (publicId, options = {}) => {
    return getCloudinaryImage(publicId, options).toURL();
};

export default cld;
