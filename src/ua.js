<script>
    const blocked = ["GPTBot","OAI-SearchBot","ChatGPT-User","ClaudeBot","Claude-SearchBot",
                     "Claude-User","anthropic-ai","GrokBot","xAI-Bot","xAI-Grok","Meta-ExternalAgent",
                     "FacebookBot","CCBot","PerplexityBot","Applebot-Extended","Bytespider"];

    if (blocked.some(bot => navigator.userAgent.includes(bot))) {
        document.documentElement.innerHTML = `
            <h1 style="text-align:center; margin-top:100px; font-family:sans-serif;">
                Access Denied
            </h1>`;
    }
</script>
