import React, {useState, useEffect} from 'react';



declare global {
    interface Navigator {
        getInstalledRelatedApps(): Promise<any>;
    }
  }

function DetectingInstalledApps () {

    const handleDetectingInstalledPWA =  async () => {
        const relatedApps = await navigator.getInstalledRelatedApps();
        console.log('relatedApps', relatedApps)
     
    }

    return (
        <div>
            <button onClick={handleDetectingInstalledPWA}>Detecting Installed PWA</button>
        </div>
    )
}

export default DetectingInstalledApps;