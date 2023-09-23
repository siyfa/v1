import { Section } from "../../components/style";

export const Contact = () => {
  return (
    <Section>
      <div className="max-w-screen-xl flex flex-wrap flex-col mx-auto pt-24 md:px-28 px-5 justify-center items-center">
        <div className="mb-5">
          <h2 className="text-3xl font-secondary mt-10">What's Next?</h2>
        </div>
        <div className="tracking-wide text-center">
          <h2 className="my-8 text-6xl font-secondary">Get In Touch</h2>
          <p className="w-2/4 mx-auto my-16 text-lg font-tetiary">
            Although I’m not currently looking for any new opportunities, my
            inbox is always open. Whether you have a question or just want to
            say hi, I’ll try my best to get back to you!
          </p>
          <a
            href="mailto:siyanbolafaruk@gmail.com"
            className="border-2 border-dashed hover:border-dotted p-5 rounded text-gray-100 border-gray-100"
            target="_blank"
          >
            Say Hello
          </a>
          <a
            href="https://www.github.com/siyfa"
            className="mt-40 mb-5 block hover:underline font-bold"
          >
            Designed & Built by Siyanbola Faruk
          </a>
        </div>
      </div>
    </Section>
  );
};
