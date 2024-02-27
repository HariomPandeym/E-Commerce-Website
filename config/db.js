import moongoose from "moongoose";
const connectDB = async () => {
  try {
    const conn = await moongoose.connect(process.env.MONGO_URL);
    console.log(
      `connected to mongodb database ${conn.connection}`.bgMagenta.white
    );
  } catch (error) {
    console.log(`error in mongodb ${error}`.bgRed.white);
  }
};
export default connectDB;
