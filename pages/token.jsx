import Note from "../components/Note"
import Note4 from "../components/Note4"
import UContent from "../components/UContent"
import Generate from "../components/Generate"
import notes from "../note"

function Token() {
  return (
    <div className="main">
      <UContent />
      {notes.map((noteItem) => (
        <Note
          key={noteItem.key}
          title={noteItem.title}
          content={noteItem.content}
        />
      ))}
      <Note4 />
      <Generate />
      {/* <Footer /> */}
    </div>
  )
}

export default Token
