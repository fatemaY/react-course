import { useState } from 'react';
import "./style.css"

const FeatureToggler = () => {
  const [isFeatureEnabled, setIsFeatureEnabled] = useState(false);

  const toggleFeature = () => {
    setIsFeatureEnabled(!isFeatureEnabled);
  };

  return (
    <div>
      <p>Feature is {isFeatureEnabled ? 'enabled' : 'disabled'}.</p>
      <button onClick={toggleFeature}>
        {isFeatureEnabled ? 'Disable Feature' : 'Enable Feature'}
      </button>
    </div>
  );
};

export default FeatureToggler;
