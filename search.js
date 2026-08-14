const get = (query, dom = document) => [...dom.querySelectorAll(query)];

    filterFromQueryString: {
        const href = window.location.href;
        const queryString = href.split("?")[1];
        const searchParams = new URLSearchParams(queryString);
        const query = searchParams.get("query");
        if (!query) break filterFromQueryString;
        get(".post").forEach(post => {
            // this just searches all text content
            // and hides if no match
            // you could also add tags to the post data
            // or only search the post body or something
            const postText = post.textContent;
            const textLowercase = postText?.toLowerCase();
            const containsQuery = textLowercase.includes(query);
            if (containsQuery) return;
            post.style.display = "none";
        });
    }