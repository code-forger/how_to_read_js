import React from 'react';

function Content() {
  return (
    <div className="flex-column">
      <p className="margin-auto">
        ✨ Thanks for listening ✨
      </p>
      <br />
      <p className="margin-auto text-center">
        If you want to practice the art of reading JavaScript yourself,
        head to the github project where you can fix this presentation yourself!
      </p>
      <br />
      <p className="margin-auto">
        <a href="https://github.com/code-forger/how_to_read_js">
          https://github.com/code-forger/how_to_read_js
        </a>
      </p>
    </div>
  );
}

Content.propTypes = {

};

export default Content;
