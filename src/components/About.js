import '../index.css';
import CanvasNavbar from './CanvasNavbar';

function About() {
  const aboutBtns = [ "overview",
                      "career",
                      "webdev",
                      "personal"]
  return(
    <div className="Canvas About">
      <CanvasNavbar btnList={aboutBtns} />
      <div className="Canvas About content">
        <h2 className="Canvas">About</h2>
        <p className="Canvas">I love puzzles: jigsaws, crosswords, sudoku, riddles, unknotting a necklace, assembling Ikea furniture . . . give me a puzzle, and the rest of the world disappears. During the forced sabbatical of the pandemic, I started learning Javascript, and discovered the most engaging puzzles of all.
        </p>

        <p className="Canvas">Pre-pandemic, I built a lucrative career selling market research to Pharmaceutical clients, and managing complex contracts and relationships. This strong understanding of client and customer needs, marketing and sales complements my newfound skills in Javascript, HTML and CSS, and gives me a unique skill set to bring to the world of web development.
        </p>

        <p className="Canvas">A New Yorker by birth and by choice, I am lucky to share my little piece of Manhattan with my husband, our seven year old daughter, and our bouncy pandemic-pup, Jack.
        </p>
      </div>
    </div>
  )
}
export default About;