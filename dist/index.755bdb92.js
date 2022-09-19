window.dom = {
    create (string) {
        const container = document.createElement("template");
        container.innerHTML = string.trim();
        return container.content.firstChild;
    }
};

//# sourceMappingURL=index.755bdb92.js.map
