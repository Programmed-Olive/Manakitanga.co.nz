async function searchPosts() {
  const params = new URLSearchParams(window.location.search);
  const query = params.get("query")?.toLowerCase().trim() || "";

  const searchTitle = document.getElementById("search-title");
  const resultList = document.querySelector(".result-list");

  searchTitle.textContent = query
    ? "Results for: " + query
    : "Search";

  try {
    const response = await fetch("data/posts.json");


    const posts = await response.json();

    const results = posts.filter(post => {
      const title = (post.title || "").toLowerCase();
      const content = (post.content || "").toLowerCase();

      return title.includes(query) || content.includes(query);
    });

    resultList.innerHTML = "";

    if (results.length === 0) {
      resultList.innerHTML = "<p>No results found.</p>";
      return;
    }

    results.forEach(post => {
      const link = document.createElement("a");

      link.href = post.url;
      link.textContent = post.title;
      link.className = "result-item";

      resultList.appendChild(link);
    });

  } catch (error) {
    console.error("Search error:", error);
    resultList.innerHTML =
      "<p>There was an error loading the search results.</p>";
  }
}

searchPosts();
