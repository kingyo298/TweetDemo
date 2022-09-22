import CreateTweet from "../components/CreateTweet";
import TweetImage from "../components/TweetImage";
const DemoTweetPage = () => {
  return (
    <>
      <h1>Demo Tweet</h1>
      <h2>Create Tweet</h2>
      <CreateTweet />
      <h2>Tweet Image</h2>
      <TweetImage />
    </>
  );
}
export default DemoTweetPage;