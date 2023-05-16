import React from 'react';

function Content() {
  return (
    <div className="flex-column">
      <p className="margin-auto">
        🛠️ Fix Me 🛠️
      </p>
      <br />
      <p>
        This presentation is broken, each page has some simple bug (mostly typos)
      </p>
      <br />
      <p>
        Each page aims to teach you something about transpiled javascript
      </p>
      <br />
      <p>
        As you work through,
        try to really understand the transpiled javascript before fixing the bug
      </p>
      <br />
      <p>
        Once you find the bug, try comparing the transpiled code to the source code!
      </p>
      <br />
      <p>Have Fun!</p>
    </div>
  );
}

Content.propTypes = {

};

export default Content;
