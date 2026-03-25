/**
 * Custom styled components for MDX rendering.
 * Maps standard HTML elements to design-system-aligned React components.
 */

export const mdxComponents = {
  h2: (props) => (
    <div className="mt-14 mb-6 first:mt-0">
      <h2
        className="font-serif text-2xl lg:text-3xl font-bold text-white mb-2"
        {...props}
      />
      <div className="w-full h-[2px] bg-gradient-to-r from-gold/80 via-gold/40 to-transparent" />
    </div>
  ),
  h3: (props) => (
    <h3
      className="font-serif text-xl lg:text-2xl font-semibold text-white mt-10 mb-3"
      {...props}
    />
  ),
  p: (props) => (
    <p className="text-body-text leading-[1.75] mb-5" {...props} />
  ),
  strong: (props) => <strong className="text-white font-semibold" {...props} />,
  em: (props) => <em className="text-body-text/80 italic" {...props} />,
  a: (props) => (
    <a
      className="text-teal hover:text-teal-light underline underline-offset-2 transition-colors duration-200"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  ),
  ul: (props) => <ul className="list-disc list-outside ml-5 mb-5 space-y-2" {...props} />,
  ol: (props) => (
    <ol className="list-decimal list-outside ml-5 mb-5 space-y-2" {...props} />
  ),
  li: (props) => <li className="text-body-text leading-[1.75]" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="border-l-2 border-teal/40 pl-5 my-6 italic text-body-text/80"
      {...props}
    />
  ),
  hr: () => <hr className="border-white/[0.08] my-10" />,
  code: (props) => (
    <code
      className="font-mono text-sm bg-white/[0.06] text-teal-light px-1.5 py-0.5 rounded"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="font-mono text-sm bg-navy-deep border border-white/[0.08] rounded-lg p-5 overflow-x-auto mb-5"
      {...props}
    />
  ),
  table: (props) => (
    <div className="overflow-x-auto mb-5">
      <table className="w-full text-sm text-left" {...props} />
    </div>
  ),
  thead: (props) => (
    <thead className="border-b border-white/[0.1] text-white/70 uppercase text-xs tracking-wider" {...props} />
  ),
  th: (props) => <th className="px-3 py-2 font-semibold" {...props} />,
  td: (props) => (
    <td className="px-3 py-2 text-body-text border-b border-white/[0.05]" {...props} />
  ),
};
