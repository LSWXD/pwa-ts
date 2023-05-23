import React, {useState, useEffect} from 'react';

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}

declare global {
  interface WindowEventMap {
    beforeinstallprompt: BeforeInstallPromptEvent;
  }
}


function InstallationPrompt() {
  const [beforeInstallPromptEvent, setBeforeInstallPromptEvent] = useState<BeforeInstallPromptEvent>();
  const [isInstalled, setIsInstalled] = useState(false);

  const addToHomeScreen = async () => {
    if (!beforeInstallPromptEvent) return false;
    
    beforeInstallPromptEvent.prompt();

    const { outcome } = await beforeInstallPromptEvent.userChoice;

    if (outcome === 'accepted') {
      setIsInstalled(true);
      console.log('User accepted the A2HS prompt');
    } else {
      console.log('User dismissed the A2HS prompt');
    }
  };
  
  useEffect(() => {
    const handler = (e: BeforeInstallPromptEvent) => {
      e.preventDefault();
      setBeforeInstallPromptEvent(e);
    };

    window.addEventListener('beforeinstallprompt', handler);

    if (!beforeInstallPromptEvent) { 
      setIsInstalled(true);
      console.log('Already installed');
    } else {
      setIsInstalled(false);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);

    
  return (
    <div>
      <button onClick={addToHomeScreen}>app install</button>
    </div>
  );
}

export default InstallationPrompt;
