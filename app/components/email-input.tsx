export default function EmailInput({ className }: { className?: string }) {
  return (
    <form className={`${className} form`}>
      <label className="sr-only" htmlFor="email">
        Email
      </label>
      <input
        className="w-full"
        type="text"
        id="email"
        name="email"
        placeholder="Your email address..."
      />
      <button className="button" type="submit">
        Submit
      </button>
    </form>
  );
}
