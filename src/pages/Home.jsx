
import { Notes } from '../components/Notes';
import { Container, Typography, Divider } from '@mui/material';




function Home (props) {
    const { notes } = props;
    return (
        <Container maxWidth="md" className="mt-5">
      <Typography variant="h4" component="div" className="bg-secondary bg-gradient text-white rounded p-1" textAlign="center">
        NOTES
      </Typography>

      {notes.map((note) => (
        <div key={note.id}>
          <Notes
            title={note.title}
            createdAt={note.createdAt}
            body={note.body}
          />
          <Divider />
        </div>
      ))}
    </Container>
    );
}
export { Home };
