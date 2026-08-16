/**
 * TEMPLATE — copy this file to config.js and fill in real values.
 * config.js is .gitignore'd and must never be committed.
 *
 * For local/manual use:
 *   1. Copy this file:  cp config.example.js config.js
 *   2. Fill in the values below from your Apps Script deployment.
 *   3. Open the app — config.js loads automatically before the app script.
 *
 * For GitHub Pages deployment, you don't need to create config.js by hand
 * at all — the deploy-pages.yml workflow generates it automatically from
 * repository secrets on every deploy. This file only matters for local
 * testing or manual hosting.
 */
window.APP_CONFIG = {
  // The /exec URL from Deploy > New deployment > Web app in Apps Script.
  APPS_SCRIPT_URL: "PASTE_YOUR_DEPLOYED_WEB_APP_URL_HERE",

  // Must exactly match the SHARED_TOKEN Script Property set on the
  // Apps Script project. Generate a fresh random one for each app/project —
  // never reuse a token across the tree assessment, invasives, and
  // proposal apps, so a leak in one doesn't compromise the others.
  SHARED_TOKEN: "PASTE_YOUR_SHARED_TOKEN_HERE"
};
