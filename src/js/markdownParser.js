// Markdown Parser - Converts markdown text to HTML
window.MarkdownParser = {
    parse: function(markdown) {
        return markdown
            // Headers
            .replace(/^### (.*$)/gim, '<h3>$1</h3>')
            .replace(/^## (.*$)/gim, '<h2>$1</h2>')
            .replace(/^# (.*$)/gim, '<h1>$1</h1>')
            
            // Bold and italic
            .replace(/\*\*\*(.*?)\*\*\*/g, '<strong><em>$1</em></strong>')
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.*?)\*/g, '<em>$1</em>')
            
            // Code blocks
            .replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>')
            .replace(/`(.*?)`/g, '<code>$1</code>')
            
            // Links
            .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank">$1</a>')
            
            // Lists
            .replace(/^\s*\*\s+(.*)$/gim, '<li>$1</li>')
            .replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>')
            .replace(/^\s*\d+\.\s+(.*)$/gim, '<li>$1</li>')
            .replace(/(<li>.*<\/li>)/s, '<ol>$1</ol>')
            
            // Blockquotes
            .replace(/^> (.*$)/gim, '<blockquote>$1</blockquote>')
            
            // Line breaks and paragraphs
            .replace(/\n\n/g, '</p><p>')
            .replace(/^(.*)$/gim, function(match) {
                // Don't wrap headers, lists, blockquotes, code blocks in p tags
                if (match.startsWith('<h') || match.startsWith('<li>') || 
                    match.startsWith('<blockquote>') || match.startsWith('<pre>') ||
                    match.startsWith('<ul>') || match.startsWith('<ol>') ||
                    match.trim() === '') {
                    return match;
                }
                return `<p>${match}</p>`;
            })
            
            // Clean up empty paragraphs
            .replace(/<p><\/p>/g, '')
            .replace(/<p>\s*<\/p>/g, '');
    }
};