// Function to save the URL and close the popup
function saveURL() {
  let url = document.getElementById("url").value;

  // Check if the URL starts with "http://" or "https://"
  if (!/^https?:\/\//i.test(url)) {
    url = "https://" + url;
  }

  chrome.storage.sync.set({ customURL: url }, () => {
    console.log("URL saved:", url);
    window.close(); // Close the popup
  });
}

// Save the custom URL to chrome.storage when clicking "save"
document.getElementById("save").addEventListener("click", saveURL);

// Save the custom URL to chrome.storage when hitting "Enter"
document.getElementById("url").addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    saveURL();
  }
});

// Load the current saved URL when the popup is opened
chrome.storage.sync.get("customURL", function (data) {
  if (data.customURL) {
    document.getElementById("url").value = data.customURL;
  } else {
    document.getElementById("url").value = "https://google.com";
  }
});
