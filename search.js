const get = (query, dom = document) => [...dom.querySelectorAll(query)];

const filterResultsFromQueryString = () => {
  const href = window.location.href;
  const queryString = href.split("?")[1];
  const searchParams = new URLSearchParams(queryString);
  const query = searchParams.get("query");

  if (!query) return;

  get(".result-item").forEach((resultItem) => {
    const resultText = resultItem.textContent?.toLowerCase() ?? "";
    const containsQuery = resultText.includes(query.toLowerCase());

    if (containsQuery) return;
    resultItem.style.display = "none";
  });
};

filterResultsFromQueryString();