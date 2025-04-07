/**
 * PageTitle Component
 *
 * A component that updates the document title based on the current route.
 * Uses the location pathname to determine the appropriate title.
 */

import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PageTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    let title = "Numberosity";

    switch (path) {
      case "/":
        title = "Home | Numberosity";
        break;
      case "/about":
        title = "About | Numberosity";
        break;
      case "/teams":
        title = "Teams | Numberosity";
        break;
      case "/learning":
        title = "Learning | Numberosity";
        break;
      case "/outreach":
        title = "Outreach | Numberosity";
        break;
      case "/news":
        title = "News | Numberosity";
        break;
      case "/resources":
        title = "Resources | Numberosity";
        break;
      case "/join":
        title = "Join | Numberosity";
        break;
      case "/donate":
        title = "Donations | Numberosity";
        break;
      default:
        title = "404: Page Not Found";
    }

    document.title = title;
  }, [location]);

  return null; // This component doesn't render anything
};

export default PageTitle;
