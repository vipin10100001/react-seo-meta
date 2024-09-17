import React from 'react';
import PropTypes from 'prop-types';

const MetaTags = ({ title, description, canonical, openGraph, twitter }) => {
  React.useEffect(() => {
    document.title = title || '';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description || '');
    } else {
      const newMeta = document.createElement('meta');
      newMeta.setAttribute('name', 'description');
      newMeta.setAttribute('content', description || '');
      document.head.appendChild(newMeta);
    }
    const linkCanonical = document.querySelector('link[rel="canonical"]');
    if (linkCanonical) {
      linkCanonical.setAttribute('href', canonical || '');
    } else {
      const newLink = document.createElement('link');
      newLink.setAttribute('rel', 'canonical');
      newLink.setAttribute('href', canonical || '');
      document.head.appendChild(newLink);
    }

    Object.keys(openGraph || {}).forEach(key => {
      const meta = document.querySelector(`meta[property="${key}"]`);
      if (meta) {
        meta.setAttribute('content', openGraph[key]);
      } else {
        const newMeta = document.createElement('meta');
        newMeta.setAttribute('property', key);
        newMeta.setAttribute('content', openGraph[key]);
        document.head.appendChild(newMeta);
      }
    });

    Object.keys(twitter || {}).forEach(key => {
      const meta = document.querySelector(`meta[name="${key}"]`);
      if (meta) {
        meta.setAttribute('content', twitter[key]);
      } else {
        const newMeta = document.createElement('meta');
        newMeta.setAttribute('name', key);
        newMeta.setAttribute('content', twitter[key]);
        document.head.appendChild(newMeta);
      }
    });
  }, [title, description, canonical, openGraph, twitter]);

  return null;
};

MetaTags.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  canonical: PropTypes.string,
  openGraph: PropTypes.object,
  twitter: PropTypes.object,
};

export default MetaTags;
