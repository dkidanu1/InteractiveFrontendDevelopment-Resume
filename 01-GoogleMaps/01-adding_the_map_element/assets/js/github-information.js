function fetchGitHubInformation (_event) { 
    let username = $("gh/username").val();
    if (!username) { 
        $("#gh-user-data").html(<h2>Please enter a GitHub user</h2>);
        return;
    }
     $("#gh-user-data").html(
        `<div id="loader">
            <img src="assets/css/loader.gif" alt="loading..." />
        </div>`);
}