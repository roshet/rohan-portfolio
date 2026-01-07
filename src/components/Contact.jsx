export default function Contact() {
  return (
    <section className="py-20 px-6 bg-gray-950">
      <h2 className="text-4xl font-bold text-center mb-8">
        Contact
      </h2>

      <p className="text-center text-gray-400 mb-10">
        Feel free to reach out — I'm always open to new opportunities and conversations.
      </p>

      <div className="flex justify-center gap-6">
        <a
          href="mailto:rohan.v.shetty@gmail.com"
          className="bg-gray-800 px-6 py-3 rounded-lg hover:bg-gray-700 hover:scale-105 transition transform"
        >
          Email
        </a>

        <a
          href="https://github.com/roshet"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 px-6 py-3 rounded-lg hover:bg-gray-700 hover:scale-105 transition transform"
        >
          GitHub
        </a>

        <a
          href="https://linkedin.com/in/rohan-shetty-525a61248/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 px-6 py-3 rounded-lg hover:bg-gray-700 hover:scale-105 transition transform"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
