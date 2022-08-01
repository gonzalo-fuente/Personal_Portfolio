function PortfolioItem({ content, link }) {
  return (
    <div className="portfolio-item-individual">
      <div id="content">
        {content?.split("\n").map((str) => (
          <p key={str}>{str}</p>
        ))}
      </div>
      <div className="portfolio-item-individual__links">
        <a
          id="code-link"
          href={link?.code}
          className="btn btn__portfolio"
          target="_blank"
          rel="noreferrer"
        >
          &lt; Code /&gt;
        </a>
        <a
          id="page-link"
          href={link?.page}
          className="btn btn__portfolio"
          target="_blank"
          rel="noreferrer"
        >
          Live Demo
        </a>
      </div>
    </div>
  );
}

export default PortfolioItem;
