import { useEffect } from 'react';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  ogTitle, 
  ogDescription, 
  ogImage = '/ssp-logo.png',
  ogUrl,
  twitterTitle,
  twitterDescription,
  twitterImage = '/ssp-logo.png',
  canonicalUrl
}) => {
  useEffect(() => {
    const baseUrl = 'https://ssprockband.com';
    
    // Update title
    if (title) {
      document.title = title;
    }
    
    // Update or create meta tags
    const updateMetaTag = (name, content, attribute = 'name') => {
      if (!content) return;
      
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };
    
    // Update or create property meta tags (for Open Graph)
    const updatePropertyTag = (property, content) => {
      if (!content) return;
      
      let element = document.querySelector(`meta[property="${property}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('property', property);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };
    
    // Update description
    updateMetaTag('description', description);
    
    // Update keywords
    updateMetaTag('keywords', keywords);
    
    // Open Graph tags
    if (ogTitle) updatePropertyTag('og:title', ogTitle);
    if (ogDescription) updatePropertyTag('og:description', ogDescription);
    if (ogImage) {
      const fullImageUrl = ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`;
      updatePropertyTag('og:image', fullImageUrl);
    }
    if (ogUrl) {
      const fullUrl = ogUrl.startsWith('http') ? ogUrl : `${baseUrl}${ogUrl}`;
      updatePropertyTag('og:url', fullUrl);
    }
    
    // Twitter tags
    if (twitterTitle) updatePropertyTag('twitter:title', twitterTitle);
    if (twitterDescription) updatePropertyTag('twitter:description', twitterDescription);
    if (twitterImage) {
      const fullImageUrl = twitterImage.startsWith('http') ? twitterImage : `${baseUrl}${twitterImage}`;
      updatePropertyTag('twitter:image', fullImageUrl);
    }
    
    // Canonical URL
    if (canonicalUrl) {
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      const fullUrl = canonicalUrl.startsWith('http') ? canonicalUrl : `${baseUrl}${canonicalUrl}`;
      canonical.setAttribute('href', fullUrl);
    }
  }, [title, description, keywords, ogTitle, ogDescription, ogImage, ogUrl, twitterTitle, twitterDescription, twitterImage, canonicalUrl]);
  
  return null;
};

export default SEO;

