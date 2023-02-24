import reloadOnUpdate from "virtual:reload-on-update-in-background-script";

reloadOnUpdate("pages/background");
chrome.action.onClicked.addListener((tab) => {
  console.log("Clicked");
});
console.log("background loaded");
