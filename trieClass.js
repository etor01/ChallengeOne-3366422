class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        // Start traversal from the root.
        let currentNode = this.root;

        // Iterate through each character of the word.
        for (let i = 0; i < word.length; i++) {
            const char = word[i];

            // If the character path doesn't exist, create a new node.
            if (!currentNode.children[char]) {
                currentNode.children[char] = new TrieNode();
            }
            // Move to the next node in the path.
            currentNode = currentNode.children[char];
        }
        // Mark the current node as the end of an inserted word.
        currentNode.isEndOfWord = true;
    }

    search(word) {
        // Start traversal from the root.
        let currentNode = this.root;

        // Iterate through each character of the word.
        for (let i = 0; i < word.length; i++) {
            const char = word[i];

            // If the character path doesn't exist, the word is not in the trie.
            if (!currentNode.children[char]) {
                return false;
            }
            // Move to the next node.
            currentNode = currentNode.children[char];
        }
        // Return true if the last node marks the end of a word, false otherwise.
        return currentNode.isEndOfWord;
    }

    startsWith(prefix) {
        // Start traversal from the root.
        let currentNode = this.root;

        // Iterate through each character of the prefix.
        for (let i = 0; i < prefix.length; i++) {
            const char = prefix[i];

            // If the character path doesn't exist, no word starts with this prefix.
            if (!currentNode.children[char]) {
                return false;
            }
            // Move to the next node.
            currentNode = currentNode.children[char];
        }
        // If the entire prefix path exists, return true.
        return true;
    }
}
