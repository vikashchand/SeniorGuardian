import React from 'react';

const Fall = () => {
  const url = 'https://fall-detection.vercel.app/';

  // CSS styles for the iframe container
  const iframeContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  };

  // CSS styles for the iframe
  const iframeStyle = {
    width: '100%',
    maxWidth: '100%',
    height: '100%', // Adjust the height as needed
    maxHeight: '680px', // Set a maximum height if desired
    border: 'none', // Remove iframe border
  };

  // Media query for small devices (adjust the breakpoint as needed)
  const smallDeviceMediaQuery = '@media (max-width: 768px)';

  // Responsive styles for small devices
  const smallDeviceStyles = {
    ...iframeContainerStyle,
    flexDirection: 'column', // Stack iframe on top of each other
    height: 'auto', // Adjust height to fit content
  };

  // Apply responsive styles for small devices
  iframeContainerStyle[smallDeviceMediaQuery] = smallDeviceStyles;
  iframeStyle[smallDeviceMediaQuery] = {
    ...iframeStyle,
    maxHeight: 'none', // Remove maximum height for small devices
  };

  return (
    <div style={iframeContainerStyle}>
      <iframe
        allow="camera *; microphone *;"
        title="External Website"
        src={url}
        style={iframeStyle}
      />
    </div>
  );
};

export default Fall;
