import React, { useEffect, useState } from 'react';

function MarkdownLinkRenderer({ href, children }) {
  const [shouldOpenInNewTab, setShouldOpenInNewTab] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const url = new URL(href, window.location.origin);

      // Check if link is external or points to a file
      const isExternal = url.hostname !== window.location.hostname;
      const fileExtensionPattern = /\.(pdf|docx?|xlsx?|pptx?|txt|zip|jpg|jpeg|png|gif|mp4|mp3)$/i;
      const isFile = fileExtensionPattern.test(url.pathname);
      const isTargetBlank = url.hostname.includes('target=_blank');

      // Set to open in a new tab if external or a file
      setShouldOpenInNewTab(isExternal || isFile || isTargetBlank);
    }
  }, [href]);

  return (
    <a
      href={href}
      target={shouldOpenInNewTab ? "_blank" : "_self"}
      rel={shouldOpenInNewTab ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  );
}

export default MarkdownLinkRenderer;
