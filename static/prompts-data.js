// Sample prompts data for static site
const promptsData = [
  {
    id: "inspect-website",
    title: "Inspect Website",
    prompt:
      "Describe me the tech stack used based on the following HTML document:\n\n{browser-tab format=\"html\"}\n\nConsider every element of a tech stack, from frameworks to APIs through tools (analytics, monitoring, etc.). Include which fonts are used. Don't make any guesses on what's used if there's no evidence.",
    icon: "🌐",
    creativity: "low",
    date: "2024-03-18",
  },
  {
    id: "summarize-youtube-video",
    title: "Summarize YouTube Video",
    prompt:
      "Create a summary of a YouTube video using its transcript. You will use the following template:\n\n## Summary\n{Multiple sentences summarising the YouTube video}\n\n## Notes\n{Bullet points that summarize the key points or important moments from the video's transcript with explanations}\n\n## Quotes\n{Extract the best sentences from the transcript in a list}",
    icon: "▶️",
    creativity: "medium",
    date: "2024-02-15",
  },
  {
    id: "code-review",
    title: "Code Review",
    prompt:
      "Review the following code and provide feedback on:\n- Code quality and best practices\n- Potential bugs or issues\n- Performance optimizations\n- Security considerations\n\nCode:\n{selection}",
    icon: "💻",
    creativity: "low",
    date: "2024-01-10",
  },
  {
    id: "explain-code",
    title: "Explain Code",
    prompt:
      "Explain the following code in simple terms. Break down what each part does and why it's written that way:\n\n{selection}\n\nExplanation:",
    icon: "📚",
    creativity: "medium",
    date: "2024-01-05",
  },
  {
    id: "write-tests",
    title: "Write Tests",
    prompt:
      "Write comprehensive unit tests for the following code. Include edge cases and error scenarios:\n\n{selection}\n\nTests:",
    icon: "🧪",
    creativity: "low",
    date: "2023-12-20",
  },
  {
    id: "improve-writing",
    title: "Improve Writing",
    prompt: "Improve the following text for clarity, grammar, and style:\n\n{selection}\n\nImproved version:",
    icon: "✍️",
    creativity: "medium",
    date: "2023-12-15",
  },
];
