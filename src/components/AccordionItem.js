import { useRef } from "react"

const AccordionItem = ({ faq, onToggle, active }) => {
    const { question, answer } = faq;

    const contentEl = useRef();

    return (
        <li className={`accordion_item ${active ? "active" : ""}`}>
        <button className="button" onClick={onToggle}>
          {question}
          <span className="control">{active ? "—" : "+"} </span>
        </button>
        {/* <div className={`answer_wrapper ${active ? "open" : ""}`}> */}
        <div 
            ref={contentEl}
            className="answer_wrapper"
            style={
                active
                ? { height: contentEl.current.scrollHeight }
                : { height: "0px" }
            }
        >
          <div className="answer">{answer}</div>
        </div>
      </li>
    );
  };
  
  export default AccordionItem;