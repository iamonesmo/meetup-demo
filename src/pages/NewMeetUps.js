import { useHistory } from "react-router";
import NewMeetupsForm from "../components/meetups/NewMeetupsForm";

function NewMeetupsPage() {
  const history = useHistory();
  function addMeetupHandler(meetupData) {
    fetch(
      "https://meetup-react-demo-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history.replace("/");
    });
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupsForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupsPage;
