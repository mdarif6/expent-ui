import Question from "../question/Question";
import "./IntakeSection.css";
export default function IntakeSection() {
  return (
    <div className="expent-intakesection">
      <div className="expent-intake-infobtns">
        <button>General Information</button>
        <button>Security & Privacy</button>
        <button>Upload Documents</button>
      </div>

      <div className="expent-info-components">
        <div className="expent-general-information">
          <p className="expent-info-heading">General Information</p>
          <div className="expent-question-components">
            <Question
              questionNumber={"1"}
              questionText={"Please select your sourcing option"}
              optionText={"Choose Sourcing"}
            />
            <Question
              questionNumber={"2"}
              questionText={"Number range of users who will use the product:"}
              optionText={"Choose Sourcing"}
            />
            <Question
              questionNumber={"3"}
              questionText={"Provided an expected spend:"}
              optionText={"Choose expense range"}
            />
          </div>
        </div>

        <div className="expent-general-information">
          <p className="expent-info-heading">Product Feedback</p>
          <div className="expent-question-components">
            <Question
              questionNumber={"1"}
              questionText={"Please select your sourcing option"}
              optionText={"Choose Sourcing"}
            />
            <Question
              questionNumber={"2"}
              questionText={"Number range of users who will use the product:"}
              optionText={"Choose Sourcing"}
            />
            <Question
              questionNumber={"3"}
              questionText={"Provided an expected spend:"}
              optionText={"Choose expense range"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
