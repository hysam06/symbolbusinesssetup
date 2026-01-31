import React from 'react';
import { AdvancedImage } from '@cloudinary/react';
import { getCloudinaryImage } from '../utils/cloudinary';

/**
 * Reusable Cloudinary Image Component with automatic optimization
 * @param {string} publicId - Cloudinary public ID
 * @param {string} alt - Alt text for accessibility
 * @param {object} options - Transformation options (width, height, crop, gravity)
 * @param {string} className - CSS class name
 * @param {object} style - Inline styles
 */
const CloudinaryImage = ({ publicId, alt = '', options = {}, className = '', style = {}, ...props }) => {
    const img = getCloudinaryImage(publicId, options);

    return (
        <AdvancedImage
            cldImg={img}
            alt={alt}
            className={className}
            style={style}
            {...props}
        />
    );
};

export default CloudinaryImage;
