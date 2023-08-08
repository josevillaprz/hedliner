import EmailInput from "./email-input";

export default function Newsletter() {
  return (
    <div className="my-28 pt-16 pb-20 flex flex-col rounded-lg border-solid justify-center items-center">
      <div className="text-center max-w-[700px]">
        <h2 className="text-[2.5rem] font-bold">
          Stay up to date with our Newsletter
        </h2>
        <p className="mb-5">
          Stay up to date with our Newsletter! Subscribe to receive the latest
          news and exclusive offers straight to your inbox. Enter your email
          below and never miss a beat!
        </p>
      </div>
      <EmailInput />
    </div>
  );
}
