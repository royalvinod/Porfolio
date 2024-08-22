import React, { useEffect } from 'react';

const LinkedInBadge = () => {
  useEffect(() => {
    // Load LinkedIn profile badge script dynamically
    const script = document.createElement('script');
    script.src = 'https://platform.linkedin.com/badges/js/profile.js';
    script.async = true;
    script.defer = true;
    script.type = 'text/javascript';
    document.head.appendChild(script);

    // Cleanup: Remove the script when the component unmounts
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="dark" data-type="HORIZONTAL" data-vanity="vinod--kumar" data-version="v1">
      <a className="badge-base__link LI-simple-link" href="https://in.linkedin.com/in/vinod--kumar?trk=profile-badge">
        Vinod Kumar
      </a>
    </div>
  );
};

export default LinkedInBadge;