const connection = require("./db/connection");
const { Pet, Image } = require("./models/index");
connection.on("error", (err) => console.error(err));
connection.once("open", async () => {
  try {
    await Pet.deleteMany({});
    await Pet.collection.insertOne({
      name: "ahuang",
      type: "dog",
      gender: "Female",
      images: [
        {
          url: "https://pet-shelter-images-984cfa2e-cffb-11ed-afa1-0242ac120002.s3.us-west-2.amazonaws.com/a-yellow.JPG?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0JeRFCPdZ5ud89qR%2Fomfp7L7vgdJ8lpEoHQmyjk0%2BqQIhAO3imrsS8ku%2BzMnrxZW4Q5x2ck7xo9xYime8zO9pX1YRKogDCJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMzY3MjYyNzk1MTQ5IgxCPkeQri63VidJm0sq3ALYTLEedgFcG%2FD6gPc1X7q%2BHl4QWD1t%2BMc9VUkiiQcFPsXn0rVcYyfTiKzGaoZcqdH%2FA0K9mNY0k6ax9cBj9IWxRjl%2BXDN1WfJGCOswFhf10OySM921j1uCBVyleOGh0RZKfri7wBZOiqAksUh3WGvOaM0Ji1Cqvk7fc%2BgJRfJFW1laqmkNj1WNhyUCYgKrnLv9%2BuMbxJ3FPJ%2B%2FYKQsx4x%2FQyWRilmyExoMLaFyXnAJ4H4buvRbtL3NdWUrKeYbAg7ZTjPA%2F6%2BdctGjdWfn%2FFegC3jka%2BZfwlola8Gb0IcoHtJFbmhT%2B9mWtx1RlrevreypNnbWlrF5Jt2NrTnYiVpIhAivMLcYANhImfbze3AuJmL4UrHUk%2BonD7by8O5rsjjq1qmYosBTqs3oWTpNf3PJhhs1fboy7yYsyQmoCDfuysBx79hiH5lMgmeO7P0TkacjRKYXtOYLMUo0G9gw7OucoQY6sgL%2FJLM%2FFtttFd11xITy9QeZP%2FgNL25qQ8ByZ%2BJx0e65JWvJjyNgZoLIDRXnTWiU6h8zOFX7qJpBM5KrI74RQOGU%2FLFggO7vo9DUiwzAgI2%2BTufdizy3Gh5L23D0CNHj7WGazA740GkGBdV6EIItwjWa3mNoXQ5tKgVhvwH8%2Bb5vtWJXdRkr9GM4OucsfOLNHpexvnZEAsfvO397wKAL%2Feio0d6FtjUsmzVaRrlleBm%2FNDiCvy4VfVt29EBnIeLT3kKKYv7u4%2BquFvAwhTTqVn7EpHGe1wihxl%2Fk8Op1bNfOnSzgttufyBzKxIjYdG28%2FzDW09C8pDl7%2FNLcVqhSENXhc5WDc56GgexodVoeWwBh7qosbkCKz4SXiIg1dUlVlsvtT%2FEkMowf4O%2FX2RgLeIuJedg%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230401T043859Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAVLAURQWGXXDQETNM%2F20230401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=a0bf58000b382645f95e31699fc51b021f292afb24293cdac0168f99dd7c3c63",
        },
      ],
    });
    console.log("=============Seeding complete ===========");
  } catch (error) {
    console.log(error);
  }
});
