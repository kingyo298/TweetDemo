const CreateTweet = () => {
  return (
    <>
      <div>
        <form action="">
          <div>
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" placeholder="taro" id="name"/>
            </div>
            <div>
              <label htmlFor="name">id</label>
              <input type="text" placeholder="taro_tweet" id="id"/>
            </div>
          </div>
          <textarea name="" id="" cols={30} rows={10} placeholder="Tweet Contents"></textarea>
          <div>
            <label htmlFor="icon">Icon</label>
            <input type="file" />
          </div>
          <img src="" alt="icon" />
          <button>Create Tweet</button>
        </form>
      </div>
    </>
  );
}
export default CreateTweet;