import React from "react";

export default function About(props) {
  // const [mystyle, setmystyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });

  // const [btnText, setbtnText] = useState("Enable Dark Mode");

  // const toggleStyle = () => {
  //   if (mystyle.color === "white") {
  //     setmystyle({
  //       color: "black",
  //       backgroundColor: "white",
  //       // border: "2px solid white"
  //     });
  //     setbtnText("Enable Dark Mode");
  //   } else {
  //     setmystyle({
  //       color: "white",
  //       backgroundColor: "black",
  //     });
  //     setbtnText("Enable Light Mode");
  //   }
  // };

  let mystyle={
    color: props.mode==='dark'?'white':'black',
    backgroundColor: props.mode==='dark'?'grey':'white',
  }

  return (
    <div className="container" style={mystyle}>
      <h1 className="my-3">About us</h1>
      <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
              style={mystyle}
            >
              <strong>Analyze your text</strong>
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body" style={mystyle}>
              TextUtils gives you a way to analyze your text quickly and efficiently.Be it word count or character count 
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
              style={mystyle}
            >
              <strong>Free to Use</strong>
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body" style={mystyle}>
              TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text.TextUtils reports the number of words and characters.Thus it is suitable for writing text with word/character limit.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
              style={mystyle}
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body" style={mystyle}>
              This word countet software works in any web browsers such as Chrome,Firefox,Internet Explorer,Safari,Opera.It suits to count characters in facebook,blog,books,excel document,pdf document,essays etc
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
