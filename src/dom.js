window.dom = {
    create(string) {
        const container = document.createElement("template");
        container.innerHTML = string.trim();
        return container.content.firstChild;
    },
    style(node, name, value) {
        if (arguments.length === 3) {
            node.style[name] = value;
        } else if (arguments.length === 2) {
            if (typeof name === 'string') {
                return node.style[name]
            } else if (name instanceof Object) {
                for (let key in name) {
                    node.style[key] = name[key]
                }
            }
        }
    },
    find(selector, scope) {
        return (scope || document).querySelectorAll(selector)
    },
    each(nodeList, fn) {
        for (let i = 0; i < nodeList.length; i++) {
            fn.call(null, nodeList[i])
        }
    },
}