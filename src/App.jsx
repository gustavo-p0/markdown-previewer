import { useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";

const App = () => {
  const [markdown, setMarkdown] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <main className="c-main">
      <form onSubmit={handleSubmit} className="c-form">
        <header className="c-form__header">
          <h2 className="c-form__title">Markdown editor</h2>
        </header>
        <textarea
          className="c-form__textarea"
          onChange={(e) => {
            setMarkdown(e.currentTarget.value);
          }}
          value={markdown}
        ></textarea>
      </form>
      <section className="c-preview">
        <header>
          <h2>Preview</h2>
        </header>
        <article className="c-preview__view">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
        </article>
      </section>
    </main>
  );
};

export default App;
