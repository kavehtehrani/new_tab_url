// Retrieve the saved custom URL and redirect to it
chrome.storage.sync.get("customURL", function (data) {
  const url = data.customURL || "https://default-url.com"; // Fallback to a default URL if none is set

  if (url) {
    console.log("Redirecting to custom URL:", url);
    // window.location.href = url;
    window.location.replace(url);
  } else {
    console.error("No custom URL found. Redirecting to default.");
  }
});
